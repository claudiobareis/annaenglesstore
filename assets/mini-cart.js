(function () {
  const root = document.getElementById('mini-cart');
  if (!root) return;

  const content = root.querySelector('.mini-cart__content');
  const itemsEl = document.getElementById('mini-cart-items');
  const totalEl = document.getElementById('mini-cart-total');
  const countEl = document.getElementById('mini-cart-count');
  const footerEl = document.getElementById('mini-cart-footer');
  const errorEl = document.getElementById('mini-cart-error');
  const cartUrl = (window.routes && window.routes.cart_url) || '/cart';
  const changeUrl = (window.routes && window.routes.cart_change_url) || '/cart/change';
  const text = root.dataset;

  const moneyFormatter = new Intl.NumberFormat(text.locale || 'pt-BR', {
    style: 'currency',
    currency: text.currency || 'BRL',
  });
  const formatMoney = (cents) => moneyFormatter.format(cents / 100);

  const template = (id) => {
    const el = document.getElementById(id);
    return el ? el.innerHTML : '';
  };
  const icons = {
    remove: template('mini-cart-icon-remove'),
    minus: template('mini-cart-icon-minus'),
    plus: template('mini-cart-icon-plus'),
  };

  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const label = (key, title) => (text[key] || '').replace('[title]', title);

  const resizeImage = (url, width) => {
    if (!url) return '';
    return url + (url.includes('?') ? '&' : '?') + 'width=' + width;
  };

  let lastFocused = null;
  let busy = false;

  function open() {
    lastFocused = document.activeElement;
    root.style.display = 'block';
    requestAnimationFrame(() => {
      root.classList.add('active');
      content.focus({ preventScroll: true });
    });
    document.body.classList.add('mini-cart-open');
    refresh();
  }

  function close() {
    root.classList.remove('active');
    document.body.classList.remove('mini-cart-open');
    setTimeout(() => {
      if (!root.classList.contains('active')) root.style.display = 'none';
    }, 300);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  async function refresh() {
    try {
      const response = await fetch(cartUrl + '.js', { headers: { Accept: 'application/json' } });
      render(await response.json());
    } catch (error) {
      console.error('Mini cart:', error);
      showError(text.textError);
    }
  }

  async function changeLine(line, quantity) {
    if (busy) return;
    busy = true;
    root.classList.add('is-loading');
    showError('');
    try {
      const response = await fetch(changeUrl + '.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ line, quantity }),
      });
      const data = await response.json();
      if (!response.ok) {
        showError(data.description || data.message || text.textError);
        await refresh();
      } else {
        render(data);
      }
    } catch (error) {
      console.error('Mini cart:', error);
      showError(text.textError);
    } finally {
      busy = false;
      root.classList.remove('is-loading');
    }
  }

  function showError(message) {
    if (!errorEl) return;
    errorEl.textContent = message || '';
    errorEl.hidden = !message;
  }

  function updateHeaderCount(count) {
    if (typeof window.updateCartData === 'function') window.updateCartData(count);

    const icon = document.getElementById('cart-icon-bubble');
    if (!icon) return;
    icon.classList.toggle('cart-empty', count === 0);
    icon.classList.toggle('cart-filled', count > 0);

    let bubble = icon.querySelector('.cart-count-bubble');
    if (count === 0) {
      if (bubble) bubble.remove();
      return;
    }
    if (!bubble) {
      bubble = document.createElement('div');
      bubble.className = 'cart-count-bubble';
      bubble.innerHTML = '<span aria-hidden="true"></span>';
      icon.appendChild(bubble);
    }
    const visible = bubble.querySelector('span[aria-hidden="true"]');
    if (visible) visible.textContent = count < 100 ? count : '';
  }

  function renderItem(item, index) {
    const line = index + 1;
    const title = escapeHtml(item.product_title);
    const options = (item.options_with_values || [])
      .filter((option) => option.value !== 'Default Title')
      .map((option) => `${escapeHtml(option.name)}: ${escapeHtml(option.value)}`)
      .join(' · ');
    const properties = Object.entries(item.properties || {})
      .filter(([key, value]) => value && !key.startsWith('_'))
      .map(([key, value]) => `${escapeHtml(key)}: ${escapeHtml(value)}`)
      .join(' · ');
    const hasDiscount = item.original_line_price > item.final_line_price;
    const image = item.image
      ? `<img src="${escapeHtml(resizeImage(item.image, 240))}" alt="${escapeHtml(item.product_title)}" width="120" height="160" loading="lazy">`
      : '';

    return `
      <div class="mini-cart-item" data-line="${line}">
        <a href="${escapeHtml(item.url)}" class="mini-cart-item__media" tabindex="-1" aria-hidden="true">${image}</a>
        <div class="mini-cart-item__info">
          <div class="mini-cart-item__head">
            <a href="${escapeHtml(item.url)}" class="mini-cart-item__name">${title}</a>
            <button type="button" class="mini-cart-item__remove" data-line="${line}" aria-label="${escapeHtml(label('textRemove', item.product_title))}">
              <span class="svg-wrapper">${icons.remove}</span>
            </button>
          </div>
          ${options ? `<p class="mini-cart-item__variant">${options}</p>` : ''}
          ${properties ? `<p class="mini-cart-item__variant">${properties}</p>` : ''}
          <p class="mini-cart-item__unit">${formatMoney(item.final_price)}</p>
          <div class="mini-cart-item__bottom">
            <div class="mini-cart-qty">
              <button type="button" class="mini-cart-qty__button" data-line="${line}" data-quantity="${item.quantity - 1}" aria-label="${escapeHtml(label('textDecrease', item.product_title))}">
                <span class="svg-wrapper">${icons.minus}</span>
              </button>
              <span class="mini-cart-qty__value" aria-live="polite">${item.quantity}</span>
              <button type="button" class="mini-cart-qty__button" data-line="${line}" data-quantity="${item.quantity + 1}" aria-label="${escapeHtml(label('textIncrease', item.product_title))}">
                <span class="svg-wrapper">${icons.plus}</span>
              </button>
            </div>
            <div class="mini-cart-item__prices">
              ${hasDiscount ? `<s class="mini-cart-item__price-original">${formatMoney(item.original_line_price)}</s>` : ''}
              <span class="mini-cart-item__total${hasDiscount ? ' mini-cart-item__total--sale' : ''}">${formatMoney(item.final_line_price)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function render(cart) {
    const count = cart.item_count || 0;
    updateHeaderCount(count);
    if (countEl) countEl.textContent = count > 0 ? `(${count})` : '';
    if (totalEl) totalEl.textContent = formatMoney(cart.total_price || 0);
    if (footerEl) footerEl.hidden = count === 0;
    root.classList.toggle('is-empty', count === 0);

    itemsEl.innerHTML = count === 0 ? template('mini-cart-empty-template') : cart.items.map(renderItem).join('');
  }

  root.addEventListener('click', (event) => {
    if (event.target.closest('[data-mini-cart-close]')) {
      close();
      return;
    }
    const remove = event.target.closest('.mini-cart-item__remove');
    if (remove) {
      changeLine(Number(remove.dataset.line), 0);
      return;
    }
    const qty = event.target.closest('.mini-cart-qty__button');
    if (qty) changeLine(Number(qty.dataset.line), Math.max(0, Number(qty.dataset.quantity)));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && root.classList.contains('active')) close();
  });

  window.openCartNotification = open;
  window.closeMiniCart = close;
  window.removeCartItem = (line) => changeLine(line, 0);
})();
