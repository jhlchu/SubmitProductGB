const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

async function timeout(ms) {
	return new Promise(res => setTimeout(res, ms))
}

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const pageURL = 'https://accounts.google.com/signin/v2/identifier?service=lbc&passive=1209600&continue=https%3A%2F%2Fbusiness.google.com%2F%3FskipPagesList%3D1%26gmbsrc%3Dca-ww-z-z-z-gmb-l-z-l~mhp-rds_bot-u%26ppsrc%3DGPDA2%26skipLandingPage%3Dtrue%26hl%3Den&followup=https%3A%2F%2Fbusiness.google.com%2F%3FskipPagesList%3D1%26gmbsrc%3Dca-ww-z-z-z-gmb-l-z-l~mhp-rds_bot-u%26ppsrc%3DGPDA2%26skipLandingPage%3Dtrue%26hl%3Den&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
	await page.goto(pageURL);
	
	/* await page.click('.cta-signin'); */
	await page.type('input[type="email"]', process.env.Email);
	await page.click('#next');
	await page.waitFor(10);
	
	
	
	await page.type('#Passwd', process.env.PD);
	await page.click('#signIn');
	/* await page.waitFor(1000); */
	await page.goto('https://business.google.com/products/l/13303774482440621095?hl=en', {waitUntil: 'networkidle2'});
	await page.click('div[jsname="a5yMmf"]');
	await page.waitFor(10);
	await page.screenshot({path: 'screenshot.png'});
	



	await browser.close();

	/* 
	div[jscontroller="VXdfxd"]
	
	*/
})();