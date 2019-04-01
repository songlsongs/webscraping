"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = __importStar(require("cheerio"));
const rp = require("request-promise");
class ScrapingService {
    getScrapingReport(url) {
        const urls = [];
        rp.get(url, (err, response, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                $("a").each(() => {
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