const { browser, protractor } = require('protractor')
const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suite', function () {
    it('first test', async function () {
        const searchValue = 'iphone'

        const searchInputSelector = 'body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > div > div > input'
        const searchInput = $(searchInputSelector)
        
        const searchButtonSelector = 'body > app-root > div > div > rz-header > rz-main-header > header > div > div > div > form > button'
        const searchButton = $(searchButtonSelector)
        
        const catalogTitleSelector = 'body > app-root > div > div > rz-category > div > main > div:nth-child(1) > div > h1'
        const catalogTitle = $(catalogTitleSelector)

        await browser.get('https://rozetka.com.ua/')
        await browser.wait(EC.visibilityOf(searchInput), 5000, 'Search input should be visible')
        await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search button should be visible')

        await searchInput.sendKeys(searchValue)
        await searchButton.click()


        await browser.wait(EC.visibilityOf(catalogTitle), 10000, 'Catalog title should be visible')

        const catalogTitleValue = await catalogTitle.getText()

        expect(catalogTitleValue.toLowerCase()).to.include('apple')

        await browser.sleep(5 * 1000)
    })
})