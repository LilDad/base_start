
const searchInputSelector = 'body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > div > div > input'
const searchInput = $(searchInputSelector)

const searchButtonSelector = 'body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > button'
const searchButton = $(searchButtonSelector)


class HeaderFragment {
    constructor() {
        this.root = $('header.header')
        this.searchInput = this.root.$('input[name="search"]')
        this.searchButton = this.root.$('button.search-form__submit')
    }
}

module.exports = {
    HeaderFragment
}

