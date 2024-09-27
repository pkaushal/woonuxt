/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'WooNuxt',
  storeName: 'Ruchikar Stores',
  shortDescription: 'Handpicked products for Them and you',
  description: `Ruchikar Stores is a place where you can find handpicked products for you and your loved ones. We have a wide range of products from different categories like fashion jewellery, accessories, home decor, and more.`,
  baseUrl: 'https://myshop.konsoftech.in',
  siteImage: 'https://watermark.lovepik.com/photo/40008/0007.jpg_wh1200.jpg',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
