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
    let fileEditArr = [];
    let fileReplaceArr = [];
    console.log(`Downloading files from ${url} to directory: ${targetDir}`);

    class StatusMonitorPlugin {
        apply(registerAction) {
            registerAction('onResourceSaved', ({ resource }) => {
                console.log(`Resource ${resource.filename} saved!`);
                //change extensions: php -> css
                if (resource.filename.includes('.php')) {
                    console.log('===============found php file===============' + resource.filename);
                    let filenameChange = resource.filename.split(/[.]/)[0];

                    const { exec } = require('child_process');
                    exec(`mv ${targetDir}/${filenameChange}.php ${targetDir}/${filenameChange}.css`, (err, stdout, stderr) => {
                        if (err) {
                            //some err occurred
                            console.error(err);
                        } else {
                            // the *entire* stdout and stderr (buffered)
                            fileEditArr.push(`${filenameChange}.php`);
                            fileReplaceArr.push(`${filenameChange}.css`);
                            console.log("=================extension changed=================");
                        }
                    });
                }
            });
            registerAction('onResourceError', ({ resource, error }) => console.log(`Resource ${resource.url} has error ${error}`));
        }
    }
    const options = {
        urls: [url],
        directory: `${targetDir}`,
        plugins: [new SaveResourceToExistingDirectoryPlugin(), new StatusMonitorPlugin()],
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
        //change attributes in link tag in every html file: php -> css
        const fs = require('fs');
        fs.readdir(targetDir, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                if (file.includes('.html')) {
                    //   console.log(file);
                    fs.readFile(`${targetDir}/${file}`, (err, data) => {
                        console.log(file)
                        if (err) throw err;
                        let dataStr = '';
                        // let result = '';
                        dataStr = data.toString();
                        for (let i = 0; i < fileEditArr.length; i++) {
                            console.log(dataStr.includes(fileEditArr[i]));
                            if (dataStr.includes(fileEditArr[i])) {
                                console.log(fileEditArr[i] + " -> " + fileReplaceArr[i]);
                                let regex = new RegExp(fileEditArr[i], 'gi');
                                dataStr = dataStr.replace(regex, fileReplaceArr[i]);
                            }
                        }
                        fs.writeFile(`${targetDir}/${file}`, dataStr, 'utf8', (err) => {
                            if (err) return console.log(err);
                            console.log("rewrite successfully!");
                        });
                    });
                }
            });
        });
        console.log("The php file name in html has been replaced with css file name!");
        res.send({ 'message': successMsg });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({ 'message': JSON.stringify(err.cause) });
    });
});

module.exports = router;
