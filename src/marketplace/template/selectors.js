export function getMarketplaceTemplateById(marketplace, id) {
    //eslint-disable-next-line
    const marketplaceTemplate = marketplace.filter(marketplaceTemplate => marketplaceTemplate.id == id);
    if (marketplaceTemplate.length) return marketplaceTemplate[0];
    return null;
}