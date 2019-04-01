"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScrapingService {
    getScrapingReport(url) {
        const request = require("request");
        const cheerio = require("cheerio");
        const urls = [];
        request(url, (err, response, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                $("a").each(function () {
                    const href = $(this).attr("href");
                    if (href !== undefined && href.includes("http")) {
                        // console.log(href);
                        urls.push(href);
                    }
                });
            }
            else {
                // console.log(url + " is not valid" );
            }
        });
        return urls;
    }
}
exports.ScrapingService = ScrapingService;
//# sourceMappingURL=ScrapingService.js.map