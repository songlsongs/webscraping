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
function getScrapingReport(link) {
    return __awaiter(this, void 0, void 0, function* () {
        const links = [];
        yield requestPromise.get(link)
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
            .catch((err) => { links[0] = err.toString(); });
        return links;
    });
}
function siteScraper(link) {
    return __awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        console.log(link);
        const links = yield getScrapingReport(link);
        links.forEach((link1, idx1, array1) => __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line:no-console
            console.log("<" + idx1 + ">" + link1);
            const links2 = yield getScrapingReport(link1);
            links2.forEach((link2, idx2, array2) => __awaiter(this, void 0, void 0, function* () {
                // tslint:disable-next-line:no-console
                console.log("<<" + idx1 + ">" + idx2 + " " + link2);
                const links3 = yield getScrapingReport(link2);
                links3.forEach((link3, idx3, array3) => {
                    // tslint:disable-next-line:no-console
                    console.log("<<<" + idx1 + ">>" + idx2 + ">" + idx3 + " " + link3);
                });
            }));
        }));
    });
}
const url = "https://www.51.ca";
siteScraper(url); // For this demonstration, we're ignoring the returned Promise.
//# sourceMappingURL=index.js.map