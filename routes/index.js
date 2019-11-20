var express = require("express");
var router = express.Router({ mergeParams: true });
const scrape = require('website-scraper');


router.get("/", function (req, res) {
    res.render("pages/landing");
});

router.get("/scraping", function (req, res) {
    let newUrl = req.query.myurl;
    const options = {
        urls: [newUrl],
        directory: './test/test_download1',
        recursive: true,
        maxDepth: 2
    };

    scrape(options).then((result) => {
        console.log("Webpages succesfully downloaded");
    }).catch((err) => {
        console.log("An error ocurred", err);
    });
    res.send({ "newUrl": `${newUrl}` });
});

module.exports = router;
