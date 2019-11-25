var express = require("express");
var router = express.Router({ mergeParams: true });
const scrape = require('website-scraper');
const SaveToExistingDirectoryPlugin = require('website-scraper-existing-directory');


router.get("/", function (req, res) {
    res.render("pages/landing");
});

router.get("/scraping", function (req, res) {
    let newUrl = req.query.myurl;

    //getting the file/domain name of the website
    let filename = "";
    let fileIndex = 0;
    let getIndex = () => { if (newUrl.includes("www.")) return 4 + newUrl.indexOf("www."); }
    fileIndex = getIndex();
    let endIndex = newUrl.indexOf(".", fileIndex);
    filename = newUrl.slice(fileIndex, endIndex);
    console.log("your website is saving in: " + filename + "folder");
    class MyPlugin {
        apply(registerAction) {
            registerAction('onResourceSaved', ({ resource }) => console.log(`Resource ${resource.url} saved!`));

        }
    }
    const options = {
        urls: [newUrl],
        directory: `./test/${filename}`,
        //this plugin is to replace the folder with same name
        plugins: [ new SaveToExistingDirectoryPlugin() ],

        //recursive download depth and filter
        recursive: true,
        maxDepth: 2,
        maxRecursiveDepth: 2,
        urlFilter: function (url) {
            return url.indexOf(newUrl) === 0;
        },
        plugin: [new MyPlugin()]
    };

    scrape(options).then((result) => {
        console.log("Webpages succesfully downloaded");
    }).catch((err) => {
        console.log("An error ocurred", err);
    });
    res.send({ "newUrl": `${newUrl}` });
});

module.exports = router;
