
import cheerio = require("cheerio");
import requestPromise = require("request-promise");

/**
 * This is an asynchronous function that uses async-await with request-promise
 * to fetch a result from a web server.
 * @returns {Promise<string>}
 */
async function getScrapingReport(url: string): Promise<string> {
    /*
    We're expecting to get a simple JSON string from the server.
    It looks something like this: { "origin": "24.177.166.2" }
    To keep this example simple, if we get an error, we'll just
    use it as the "origin" property.
    */
    let response: any = {};

    // Here we go!
    await requestPromise.get(url)
        .then((html) => {
            const $ = cheerio.load(html);
            const links: string[] = [];

            $("a").each((idx, el) => {

            const $el = $(el);
            const href = $el.attr("href");

            if (href !== undefined && href.includes("http")) {
                // console.log(href);
                links.push(href);
            }});
            response = {origin: links}; })
        .catch ((err) => { response = { origin: err.toString() }; });
    // Now that we have our response, pull out the origin and return it
    // to the caller.
    return response.origin;
}

async function siteScraper(): Promise<void> {
    // Wait around for the getMyIp() function to return its value.
    const url = "https://www.51.ca";
    const result = await getScrapingReport(url);

    // tslint:disable-next-line:no-console
    console.log(result);
}


siteScraper();  // For this demonstration, we're ignoring the returned Promise.
