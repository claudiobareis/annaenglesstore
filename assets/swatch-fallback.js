/**
 * Swatch image fallback
 * Only inspects declared image backgrounds. Failed images fall back to
 * the built-in color palette, then to a full-name text chip.
 */
const SWATCH_COLOR_MAP = {
  bege: '#cbb89a',
  areia: '#cbb89a',
  sand: '#cbb89a',
  beige: '#cbb89a',
  marrom: '#6b3d2a',
  brown: '#6b3d2a',
  cafe: '#6b3d2a',
  'off white': '#f4efe6',
  'off-white': '#f4efe6',
  offwhite: '#f4efe6',
  branco: '#ffffff',
  white: '#ffffff',
  preto: '#1a1a1a',
  black: '#1a1a1a',
  'rosa candy': '#f3b6c4',
  'rosa-candy': '#f3b6c4',
  rosa: '#e8a0b4',
  pink: '#e8a0b4',
  'azul candy': '#9ec4d4',
  'azul-candy': '#9ec4d4',
  azul: '#3d6b8c',
  blue: '#3d6b8c',
  caramelo: '#c4894a',
  caramel: '#c4894a',
  chumbo: '#5a5a5a',
  grafite: '#5a5a5a',
  bordo: '#6b1c2a',
  'bordô': '#6b1c2a',
  burgundy: '#6b1c2a',
  vinho: '#6b1c2a',
  marinho: '#1b2a4a',
  navy: '#1b2a4a',
  'azul marinho': '#1b2a4a',
  cinza: '#8a8a8a',
  grey: '#8a8a8a',
  gray: '#8a8a8a',
  verde: '#3d6b4f',
  green: '#3d6b4f',
  vermelho: '#a31d2e',
  red: '#a31d2e',
  laranja: '#d46a2c',
  orange: '#d46a2c',
  amarelo: '#e6c84a',
  yellow: '#e6c84a',
  roxo: '#800080',
  purple: '#6b3d6b',
  nude: '#e6d5c5',
  cru: '#e8e0d4',
  creme: '#f7f1e3',
  cream: '#f7f1e3',
};

class SwatchFallback {
  constructor() {
    this.setupSwatches();
  }

  setupSwatches() {
    document.querySelectorAll('.swatch--with-fallback[data-has-visual="true"]').forEach((swatch) => {
      if (swatch.dataset.swatchChecked === 'true') return;
      this.checkSwatchImage(swatch);
    });
  }

  checkSwatchImage(swatch) {
    const style = swatch.getAttribute('style') || '';
    const backgroundMatch = style.match(/url\(([^)]+)\)/);

    if (!backgroundMatch) {
      swatch.dataset.swatchChecked = 'true';
      return;
    }

    swatch.dataset.swatchChecked = 'true';
    const imageUrl = backgroundMatch[1].replace(/['"]/g, '');
    const testImage = new Image();

    testImage.onload = () => {
      swatch.classList.add('swatch--image-loaded');
    };

    testImage.onerror = () => {
      this.activateFallback(swatch);
    };

    testImage.src = imageUrl;
  }

  activateFallback(swatch) {
    const swatchValue = swatch.getAttribute('data-swatch-value');
    if (swatchValue && this.applyColorFallback(swatch, swatchValue)) return;

    swatch.classList.add('swatch--image-failed', 'swatch--text');
    swatch.classList.remove('swatch--with-fallback');
    swatch.style.removeProperty('--swatch--background');
  }

  applyColorFallback(swatch, colorName) {
    const normalized = colorName.toLowerCase().trim().replace(/\s+/g, ' ');
    const dashed = normalized.replace(/\s+/g, '-');
    const colorCode = SWATCH_COLOR_MAP[normalized] || SWATCH_COLOR_MAP[dashed];

    if (!colorCode) return false;

    swatch.style.setProperty('--swatch--background', colorCode);
    swatch.classList.remove('swatch--image-failed', 'swatch--text');
    swatch.classList.add('swatch--color-fallback', 'swatch--color');
    return true;
  }
}

const initSwatchFallback = () => new SwatchFallback();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSwatchFallback);
} else {
  initSwatchFallback();
}

document.addEventListener('variant:change', initSwatchFallback);

let swatchFallbackScheduled = false;
const swatchObserver = new MutationObserver(() => {
  if (swatchFallbackScheduled) return;
  swatchFallbackScheduled = true;
  requestAnimationFrame(() => {
    swatchFallbackScheduled = false;
    initSwatchFallback();
  });
});

swatchObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
