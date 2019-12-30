const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.goto('https://itnext.io/using-service-objects-in-go-d899dc599335', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'output.pdf', format: 'A4'});

  await browser.close();
})();
