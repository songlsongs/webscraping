export class ScrapingService {

    public getScrapingReport(url: string): any[] {
        const request = require("request");
        const cheerio = require("cheerio");
        const urls: string[] = [];

        request(url, (err: any, response: any, html: any) => {
            if (!err) {
                const $ = cheerio.load(html);
                $("a").each(function() {
                    const href = $(this).attr("href");
                    if (href !== undefined && href.includes("http")) {
                        // console.log(href);
                        urls.push(href);
                    }
                });
            } else {
                // console.log(url + " is not valid" );
            }

        });

        return urls;

    }

}
