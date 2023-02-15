const { browser, protractor } = require('protractor')
const expect = require('chai').expect
const EC = protractor.ExpectedConditions

const {MainPage, CatalogPage} = require('../page_objects')

describe('First suite', function () {
    
    const mainPage = new MainPage()
    const catalogPage = new CatalogPage()
    
    it('first test', async function () {
        const searchValue = 'iphone'

        await browser.get('https://rozetka.com.ua/')
        await mainPage.searchItems(searchValue)
        const catalogTitleValue = await catalogPage.getCatalogHeading()
        expect(catalogTitleValue.toLowerCase()).to.include('apple')

        await browser.sleep(5 * 1000)
    })
})