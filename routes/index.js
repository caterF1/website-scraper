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
            registerAction('onResourceSaved', ({ resource }) => {
                console.log(`Resource ${resource.filename} saved!`);
                //change extensions: php -> css
                if (resource.filename.includes('.php')) {
                    console.log('=====================found php file===============' + resource.filename);
                    let filenameChange =resource.filename.split(/[.]/)[0];

                    const { exec } = require('child_process');
                    exec(`mv ${targetDir}/${filenameChange}.php ${targetDir}/${filenameChange}.css`, (err, stdout, stderr) => {
                        if (err) {
                            //some err occurred
                            console.error(err)
                        } else {
                            // the *entire* stdout and stderr (buffered)
                            console.log("extension changed");
                            console.log(`stdout: ${stdout}`);
                            console.log(`stderr: ${stderr}`);
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
        const fs =require('fs') ;
        fs.readdir(targetDir, (err, files) => {
            files.forEach(file => {
              console.log(file);
            //   if(file.includes('.html')){
            //       console.log(file);
            //       let arrChange = [];
            //       arrChange.Document.getElementsByTagName('link');
            //       for (let eachTag of arrChange) {
            //           if(eachTag.href.includes('.php')){
            //               let eachTagHref = eachTag.href.split(/[.php]/)[0];
            //               eachTag.setAttribute('href', `${eachTagHref}.css`);
            //           }
            //       }
            //   }
            });
          });
        res.send({ 'message': successMsg });
    }).catch((err) => {
        console.log(err);
        res.status(400).send({ 'message': JSON.stringify(err.cause) });
    });
});

module.exports = router;
