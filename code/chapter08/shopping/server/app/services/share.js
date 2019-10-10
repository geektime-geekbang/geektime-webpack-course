import GoodsService from './article'
import puppeteer from 'puppeteer-core'

// 掘金的登录方式
const JUEJIN_ACCOUNT_LOGIN = 1
const JUEJIN_WEIBO_LOGIN = 2
const JUEJIN_WECHAT_LOGIN = 4
const JUEJIN_GITHUB_LOGIN = 8

// 掘金发表文章的地址
const JUEJIN_URL = 'https://juejin.im/new-entry'
const JUEJIN_USERNAME = '17620324300'
const JUEJIN_PASSWORD = 'love_juejin1314'

// 配置
const config = {
    puppeteer: {
        headless: false,
        executablePath: '/Users/erwinliu/Desktop/ivweb.io/Google Chrome.app/Contents/MacOS/Google Chrome',
        slowMo: 250, // 放慢了 250ms
    }
}

/**
 * 将文章分享到掘金
 */
export async function shareToJuejin ({ articleId, loginMethod }) {
    const article = await GoodsService.detail(articleId)
    // console.log('article', article)
    const browser = await puppeteer.launch(config.puppeteer)
    const page = await browser.newPage()

    await page.goto(JUEJIN_URL)
    const url = page.evaluate(() => location.href)
    
    // 如果重定向到首页，则需要登录
    if (/juejin\.im$/.test(url)) {
        await page.click('.login')
        await page.type('.input[name="loginPhoneOrEmail"]', JUEJIN_USERNAME)
        await page.type('.input[name="loginPassword"]', JUEJIN_PASSWORD)
        await page.click()
    }
}

export function shareToZhihu (params) {
    
}

export function shareToKm () {

}