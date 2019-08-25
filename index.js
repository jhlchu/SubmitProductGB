const puppeteer = require('puppeteer');
const dotenv = require('dotenv');

const targets = require('./targets');
dotenv.config();

const scrap = async() => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();

	await page.goto(targets[0], {waitUntil: 'networkidle2'});
	await page.screenshot({path: 'screenshot.png'});
}

const main = async () => {
	const browser = await puppeteer.launch({headless: true});
	const page    = await browser.newPage();
	
	await page.goto(process.env.pageURL, {waitUntil: 'networkidle2'});
	
	/* await page.click('.cta-signin'); */
	await page.type('input[type="email"]', process.env.Email);
	await page.click('#next');
	await page.waitFor(10);	
	
	await page.type('#Passwd', process.env.PD);
	await page.click('#signIn');
	
	await page.goto(process.env.productPage, {waitUntil: 'networkidle2'});
	await page.click('div[jsname="#yDmH0d"]');
	await page.waitFor(10);
	await page.screenshot({path: 'screenshot.png'});


	await browser.close();
}
scrap();
//main();

/* 
(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page    = await browser.newPage();
	
	await page.goto(process.env.pageURL, {waitUntil: 'networkidle2'});
	
	//await page.click('.cta-signin');
	await page.type('input[type="email"]', process.env.Email);
	await page.click('#next');
	await page.waitFor(10);	
	
	await page.type('#Passwd', process.env.PD);
	await page.click('#signIn');
	
	await page.goto(process.env.productPage, {waitUntil: 'networkidle2'});
	await page.click('div[jsname="a5yMmf"]');
	await page.waitFor(10);

	await page.screenshot({path: 'screenshot.png'});

	await browser.close();

	//div[jscontroller="VXdfxd"]
})();
 */