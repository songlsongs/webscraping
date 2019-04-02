
import cheerio = require("cheerio");
import requestPromise = require("request-promise");

async function getScrapingReport(link: string): Promise<string[]> {

    const links: string[] = [];

    await requestPromise.get(link)
        .then((html) => {
            const $ = cheerio.load(html);

            $("a").each((idx, el) => {
                const $el = $(el);
                const href = $el.attr("href");

                if (href !== undefined && href.includes("http")) {
                    links.push(href);
                }
            });
        })
        .catch ((err) => { links[0] = err.toString(); });

    return links;
}

async function siteScraper(link: string): Promise<void> {

    // tslint:disable-next-line:no-console
    console.log(link);

    const links: string[] = await getScrapingReport(link);

    links.forEach(async (link1: string, idx1: number, array1: string[]) => {
        // tslint:disable-next-line:no-console
        console.log("<" + idx1 + ">" + link1);
        const links2 = await getScrapingReport(link1);
        links2.forEach(async (link2: string, idx2: number, array2: string[]) => {
            // tslint:disable-next-line:no-console
            console.log("<<" + idx1 + ">" + idx2 + " " + link2);
            const links3 = await getScrapingReport(link2);
            links3.forEach((link3: string, idx3: number, array3: string[]) => {
                // tslint:disable-next-line:no-console
                console.log("<<<" + idx1 + ">>" + idx2 + ">" + idx3 + " " + link3);
            });

        });

    });
}

const url = "https://www.51.ca";
siteScraper(url);  // For this demonstration, we're ignoring the returned Promise.
