const { browser, protractor } = require('protractor')
const expect = require('chai').expect
const EC = protractor.ExpectedConditions

const {MainPage} = require('../page_objects/main')

describe('First suite', function () {
    
    const mainPage = new MainPage()
    
    it('first test', async function () {
        await browser.get('https://rozetka.com.ua/')

        const searchValue = 'iphone'

        await mainPage.searchItems(searchValue)

        const catalogTitleSelector = 'body > app-root > div > div > rz-category > div > main > div:nth-child(1) > div > h1'
        const catalogTitle = $(catalogTitleSelector)
        await browser.wait(EC.visibilityOf(catalogTitle), 10000, 'Catalog title should be visible')

        const catalogTitleValue = await catalogTitle.getText()

        expect(catalogTitleValue.toLowerCase()).to.include('apple')

        await browser.sleep(5 * 1000)
    })
})