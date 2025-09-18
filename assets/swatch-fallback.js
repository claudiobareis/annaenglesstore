/**
 * Swatch Image Fallback System
 * Detects when swatch images fail to load and shows text fallback
 */

class SwatchFallback {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupSwatches());
    } else {
      this.setupSwatches();
    }
  }

  setupSwatches() {
    const swatches = document.querySelectorAll('.swatch--with-fallback[data-has-visual="true"]');
    
    swatches.forEach(swatch => {
      this.checkSwatchImage(swatch);
    });
  }

  checkSwatchImage(swatch) {
    const style = swatch.getAttribute('style');
    const backgroundMatch = style?.match(/url\(([^)]+)\)/);
    
    if (!backgroundMatch) return;
    
    const imageUrl = backgroundMatch[1].replace(/['"]/g, '');
    
    // Create a test image to check if it loads
    const testImage = new Image();
    
    testImage.onload = () => {
      // Image loaded successfully - do nothing
      swatch.classList.add('swatch--image-loaded');
    };
    
    testImage.onerror = () => {
      // Image failed to load - activate fallback
      this.activateFallback(swatch);
    };
    
    // Set a timeout as additional safety
    const timeout = setTimeout(() => {
      if (!swatch.classList.contains('swatch--image-loaded')) {
        this.activateFallback(swatch);
      }
    }, 3000); // 3 second timeout
    
    testImage.onload = () => {
      clearTimeout(timeout);
      swatch.classList.add('swatch--image-loaded');
    };
    
    testImage.src = imageUrl;
  }

  activateFallback(swatch) {
    swatch.classList.add('swatch--image-failed');
    
    // Try to get color from theme settings as secondary fallback
    const swatchValue = swatch.getAttribute('data-swatch-value');
    if (swatchValue) {
      this.tryColorFallback(swatch, swatchValue);
    }
  }

  tryColorFallback(swatch, colorName) {
    // Common color mappings for Portuguese color names
    const colorMap = {
      'bege': '#f5f5dc',
      'marrom': '#8b4513',
      'off white': '#faf0e6',
      'off-white': '#faf0e6',
      'branco': '#ffffff',
      'preto': '#000000',
      'azul': '#0066cc',
      'vermelho': '#cc0000',
      'verde': '#00cc00',
      'amarelo': '#ffff00',
      'rosa': '#ffb6c1',
      'roxo': '#800080',
      'cinza': '#808080',
      'laranja': '#ffa500'
    };

    const normalizedColor = colorName.toLowerCase().trim();
    const colorCode = colorMap[normalizedColor];

    if (colorCode) {
      // Apply color background instead of image
      swatch.style.setProperty('--swatch--background', colorCode);
      swatch.classList.remove('swatch--image-failed');
      swatch.classList.add('swatch--color-fallback');
    }
  }
}

// Initialize when script loads
new SwatchFallback();

// Also reinitialize when variant selects update (for dynamic content)
document.addEventListener('variant:change', () => {
  new SwatchFallback();
});

// Listen for any dynamic content changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && (node.classList?.contains('swatch--with-fallback') || node.querySelector?.('.swatch--with-fallback'))) {
          setTimeout(() => new SwatchFallback(), 100);
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
