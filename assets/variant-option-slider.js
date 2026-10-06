if (!customElements.get('variant-option-slider')) {
  customElements.define(
    'variant-option-slider',
    class VariantOptionSlider extends HTMLElement {
      constructor() {
        super();
        this.desktopQuery = window.matchMedia('(min-width: 750px)');
        this.onScroll = this.updateArrows.bind(this);
        this.onMediaChange = () => this.measure();
        this.onPrev = () => this.slide(-1);
        this.onNext = () => this.slide(1);
      }

      connectedCallback() {
        this.track = this.querySelector('.variant-slider__track');
        this.prevButton = this.querySelector('.variant-slider__arrow--prev');
        this.nextButton = this.querySelector('.variant-slider__arrow--next');
        if (!this.track) return;

        this.prevButton?.addEventListener('click', this.onPrev);
        this.nextButton?.addEventListener('click', this.onNext);
        this.track.addEventListener('scroll', this.onScroll, { passive: true });
        this.desktopQuery.addEventListener('change', this.onMediaChange);

        this.lastWidth = 0;
        this.resizeObserver = new ResizeObserver((entries) => {
          const width = Math.round(entries[0].contentRect.width);
          if (width === this.lastWidth) return;
          this.lastWidth = width;
          this.measure();
        });
        this.resizeObserver.observe(this);

        this.measure();
      }

      disconnectedCallback() {
        this.resizeObserver?.disconnect();
        this.prevButton?.removeEventListener('click', this.onPrev);
        this.nextButton?.removeEventListener('click', this.onNext);
        this.track?.removeEventListener('scroll', this.onScroll);
        this.desktopQuery.removeEventListener('change', this.onMediaChange);
      }

      get items() {
        return Array.from(this.track.querySelectorAll(':scope > label'));
      }

      get limit() {
        const value = this.desktopQuery.matches ? this.dataset.limitDesktop : this.dataset.limitMobile;
        return parseInt(value, 10) || 0;
      }

      measure() {
        const items = this.items;
        if (!items.length) return;

        this.classList.remove('is-slider', 'is-fill');
        this.track.style.removeProperty('max-width');
        this.style.removeProperty('--visible');

        const limit = this.limit;
        const exceedsLimit = limit > 0 && items.length > limit;
        const overflows = this.track.scrollWidth > this.track.clientWidth + 1;
        const active = exceedsLimit || overflows;

        const styles = getComputedStyle(this.track);
        const gap = parseFloat(styles.columnGap) || 0;
        const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        const averageWidth =
          items.reduce((total, item) => total + item.getBoundingClientRect().width, 0) / items.length;

        this.classList.toggle('is-slider', active);
        if (this.prevButton) this.prevButton.hidden = !active;
        if (this.nextButton) this.nextButton.hidden = !active;

        if (active && !this.desktopQuery.matches) {
          // Mobile: track ocupa 100% e os itens dividem a largura igualmente
          const available = this.track.clientWidth - padding;
          const fits = Math.max(1, Math.floor((available + gap) / (averageWidth + gap)));
          const visible = exceedsLimit ? limit : Math.min(fits, items.length);
          this.style.setProperty('--visible', visible);
          this.classList.add('is-fill');
        } else if (active && exceedsLimit) {
          const itemsWidth = items
            .slice(0, limit)
            .reduce((total, item) => total + item.getBoundingClientRect().width, 0);
          const maxWidth = itemsWidth + (limit - 1) * gap + padding;
          this.track.style.maxWidth = `${Math.ceil(maxWidth)}px`;
        }

        this.scrollToSelected();
        this.updateArrows();
      }

      scrollToSelected() {
        if (!this.classList.contains('is-slider')) return;
        const checked = this.track.querySelector('input:checked');
        const label = checked && this.track.querySelector(`label[for="${CSS.escape(checked.id)}"]`);
        if (!label) return;

        const target = label.offsetLeft - (this.track.clientWidth - label.offsetWidth) / 2;
        this.track.scrollLeft = Math.max(0, target);
      }

      slide(direction) {
        const firstItem = this.items[0];
        const gap = parseFloat(getComputedStyle(this.track).columnGap) || 0;
        const step = firstItem ? firstItem.getBoundingClientRect().width + gap : 0;
        const visibleSteps = step ? Math.max(1, Math.floor(this.track.clientWidth / step) - 1) : 1;
        const distance = step ? step * visibleSteps : this.track.clientWidth * 0.8;
        this.track.scrollBy({ left: direction * distance, behavior: 'smooth' });
      }

      updateArrows() {
        if (!this.classList.contains('is-slider')) return;
        const maxScroll = this.track.scrollWidth - this.track.clientWidth;
        if (this.prevButton) this.prevButton.disabled = this.track.scrollLeft <= 1;
        if (this.nextButton) this.nextButton.disabled = this.track.scrollLeft >= maxScroll - 1;
      }
    }
  );
}
