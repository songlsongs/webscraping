"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = require("cheerio");
const requestPromise = require("request-promise");
/**
 * This is an asynchronous function that uses async-await with request-promise
 * to fetch a result from a web server.
 * @returns {Promise<string>}
 */
function getScrapingReport(url) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        We're expecting to get a simple JSON string from the server.
        It looks something like this: { "origin": "24.177.166.2" }
        To keep this example simple, if we get an error, we'll just
        use it as the "origin" property.
        */
        let response = {};
        // Here we go!
        yield requestPromise.get(url)
            .then((html) => {
            const $ = cheerio.load(html);
            const links = [];
            $("a").each((idx, el) => {
                const $el = $(el);
                const href = $el.attr("href");
                if (href !== undefined && href.includes("http")) {
                    // console.log(href);
                    links.push(href);
                }
            });
            response = { origin: links };
        })
            .catch((err) => { response = { origin: err.toString() }; });
        // Now that we have our response, pull out the origin and return it
        // to the caller.
        return response.origin;
    });
}
function siteScarper() {
    return __awaiter(this, void 0, void 0, function* () {
        // Wait around for the getMyIp() function to return its value.
        const url = "https://www.51.ca";
        const result = yield getScrapingReport(url);
        // tslint:disable-next-line:no-console
        console.log(result);
    });
}
// We gotta start somewhere...
siteScarper(); // For this demonstration, we're ignoring the returned Promise.
//# sourceMappingURL=index.js.map