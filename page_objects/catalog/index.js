const { CatalogHeading } = require('./fragments')
const { waitForElementVisible } = require('../commons') 

class CatalogPage {
    constructor() {
        this.catalogHeading = new CatalogHeading()
    }

    async getCatalogHeading() {
        await waitForElementVisible(this.catalogHeading.root, 10 * 1000, 'Catalog heading should be visible')
        return this.catalogHeading.title.getText()
    }
}

module.exports = {
    CatalogPage
}