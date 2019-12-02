const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
const express = require('express');
const router = express.Router({ mergeParams: true });
const scrape = require('website-scraper');
const SaveResourceToExistingDirectoryPlugin = require('website-scraper-existing-directory');

router.get('/', function (req, res) {
    res.render('pages/landing');
});

router.get('/scrape', function (req, res) {
    let url = req.query.url;
    let domain = url.replace(/https?:\/\//i, '').replace('www.', '').split(/[/?#]/)[0];

    const targetDir = `./${config.download_directory}/${domain}`;
    console.log(`Downloading files from ${url} to directory: ${targetDir}`);

    class StatusMonitorPlugin {
        apply(registerAction) {
            registerAction('onResourceSaved', ({ resource }) => console.log(`Resource ${resource.url} saved!`));
            registerAction('onResourceError', ({resource, error}) => console.log(`Resource ${resource.url} has error ${error}`));
        }
    }
    const options = {
        urls: [url],
        directory: `${targetDir}`,
        plugins: [ new SaveResourceToExistingDirectoryPlugin(), new StatusMonitorPlugin() ],
        recursive: true,
        maxDepth: 2,
        maxRecursiveDepth: 2,
        urlFilter: function (url) {
            return url.indexOf(url) === 0;
        }
    };

    scrape(options).then((result) => {
        const successMsg = `Resources succesfully downloaded to directory: ${targetDir}`;
        console.log(successMsg);
        res.send({ 'message' : successMsg });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({ 'message' : JSON.stringify(err.cause) });
    });
});

module.exports = router;
