class CatalogHeading {
    constructor () {
        this.root = $('body > app-root > div > div > rz-category > div > main > div:nth-child(1) > div')
        this.title = this.root.$('h1')
    }
}

module.exports = {
    CatalogHeading
}