/* v3.2 */
import puppeteer from 'puppeteer';
import axios from 'axios';
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 10800, checkperiod: 120 });

export default async function handler(req, res) {
  const { sitemapUrl } = req.query;

  try {
    // Check if the data is already in the cache
    const cachedData = cache.get(sitemapUrl);
    if (cachedData) {
      res.status(200).json(cachedData);
      return;
    }

    // Fetch the sitemap XML using Axios
    const response = await axios.get(sitemapUrl);
    const xml = response.data;

    // Parse the sitemap XML to get URLs
    const urls = parseSitemap(xml);

    const results = [];

    // Iterate through each URL and scrape content
    for (const url of urls) {
      const result = await scrapeContent(url);
      results.push(result); // Store the result for each URL
    }

    // Cache the results
    cache.set(sitemapUrl, results);

    // Respond with all the scraped data
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}





async function scrapeContent(url) {
  let browser;

  try {
    // Launch Puppeteer browser
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for a short time (adjust as needed)
    await page.waitForTimeout(1000);

    // Extract title and content from the page
    const pageTitle = await page.title();
    const pageContent = await page.content();

    // Return a result object for each URL
    return { url, title: pageTitle, content: pageContent };
  } catch (error) {
    console.error(`Error fetching content from ${url}:`, error);
  } finally {
    // Close the Puppeteer browser (if it was opened)
    if (browser) {
      await browser.close();
    }
  }

  // Return null if an error occurs
  return { url, error: 'Error fetching content' };
}

function parseSitemap(xml) {
  const cheerio = require('cheerio');
  const $ = cheerio.load(xml, { xmlMode: true });

  const urls = [];
  $('urlset url loc').each((index, element) => {
    urls.push($(element).text().trim());
  });

  return urls;
}

// src/pages/api/scrape.js

/* import axios from 'axios';

export default async (req, res) => {
  try {
    // Perform scraping logic using axios or any other library
    const result = await axios.get('https://example.com');
    
    // Process and send the result
    res.status(200).json({ data: result.data });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; */