/**
 * KFIGURES - Dynamic Product Rendering
 */

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('dynamic-product-grid');
  
  if (!productGrid) return; // Only run on product page
  
  // Fetch product data
  fetch('data/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      renderProducts(data.products);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
      productGrid.innerHTML = '<p class="error-msg">Failed to load products. Please try again later.</p>';
    });
});

function renderProducts(products) {
  const productGrid = document.getElementById('dynamic-product-grid');
  productGrid.innerHTML = ''; // Clear loading/existing content
  
  // Filter active products
  const activeProducts = products.filter(p => p.active);
  
  if (activeProducts.length === 0) {
    productGrid.innerHTML = '<p class="mono reveal-up" data-i18n="product.noproducts">No products available at the moment.</p>';
    // Re-run translations if translator is available
    if (window.translator) window.translator.translatePage();
    return;
  }
  
  activeProducts.forEach((product, index) => {
    // Stagger animation delay
    const delay = index * 0.1;
    
    // Create card element
    const card = document.createElement('div');
    card.className = 'gallery-item reveal-up';
    card.style.transitionDelay = `${delay}s`;
    
    // Determine image (fallback to a transparent pixel or styling if no image)
    const hasImage = product.images && product.images.length > 0;
    const imageUrl = hasImage ? product.images[0] : '';
    
    // Determine price/status text
    let priceHtml = '';
    let actionHtml = '';
    
    if (product.stock_status === 'outOfStock') {
      priceHtml = `<span class="product-status mono" data-i18n="product.outofstock">Out of Stock</span>`;
      actionHtml = `<a href="mailto:info@kfigures.com?subject=Inquiry: ${product.title}" class="btn btn-outline" data-i18n="product.inquire">Inquire</a>`;
    } else if (product.price) {
      priceHtml = `<span class="product-price mono">${product.price} ${product.currency}</span>`;
      if (product.shopier_url) {
        actionHtml = `<a href="${product.shopier_url}" target="_blank" rel="noopener noreferrer" class="btn" data-i18n="product.buy">Buy Now</a>`;
      } else {
        actionHtml = `<a href="mailto:info@kfigures.com?subject=Inquiry: ${product.title}" class="btn btn-outline" data-i18n="product.inquire">Inquire</a>`;
      }
    } else {
      // Manual/Custom products without price
      actionHtml = `<a href="mailto:info@kfigures.com?subject=Inquiry: ${product.title}" class="btn btn-outline" data-i18n="product.inquire">Inquire</a>`;
    }
    
    // Build card HTML
    const itemUrl = `item/${product.slug}.html`;
    card.innerHTML = `
      <a href="${itemUrl}" class="product-image-container" style="display:block;">
        ${hasImage ? `<img src="${imageUrl}" alt="${product.title}" loading="lazy">` : '<div class="no-image-placeholder mono">NO IMAGE</div>'}
        ${product.stock_status === 'outOfStock' ? '<div class="out-of-stock-overlay" data-i18n="product.outofstock">Out of Stock</div>' : ''}
      </a>
      <div class="gallery-caption">
        <h3><a href="${itemUrl}" style="text-decoration:none; color:inherit;">${product.title}</a></h3>
        <p class="product-description">${product.description ? product.description.replace(/<[^>]+>/g, '') : ''}</p>
        <div class="product-footer">
          ${priceHtml}
          ${actionHtml}
        </div>
      </div>
    `;
    
    productGrid.appendChild(card);
  });
  
  // Trigger the reveal animation with a slight stagger
  setTimeout(() => {
    const cards = document.querySelectorAll('#dynamic-product-grid .reveal-up');
    cards.forEach((el, idx) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, idx * 100); // 100ms stagger between each card
    });
  }, 50);
  
  // Translate the newly added content
  if (window.translator) {
    window.translator.translatePage();
  }
}
