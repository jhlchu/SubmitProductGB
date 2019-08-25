const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const pageURL = process.env.pageURL;
	await page.goto(pageURL);
	
	/* await page.click('.cta-signin'); */
	await page.type('input[type="email"]', process.env.Email);
	await page.click('#next');
	await page.waitFor(10);
	
	
	
	await page.type('#Passwd', process.env.PD);
	await page.click('#signIn');
	/* await page.waitFor(1000); */
	await page.goto(process.env.productPage, {waitUntil: 'networkidle2'});
	await page.click('div[jsname="a5yMmf"]');
	await page.waitFor(10);
	await page.screenshot({path: 'screenshot.png'});
	



	await browser.close();

	/* 
	div[jscontroller="VXdfxd"]
	
	*/
})();