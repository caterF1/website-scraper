const form = document.getElementById('scrape_form');
const submitBtn = document.getElementById('submit_btn');
let loaderContainer = document.getElementById('loader_container');

function urlSubmit(event) {
    event.preventDefault();

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            let tempLoader = document.getElementById('loader_toggle');
            if (tempLoader !== null) {
                loaderContainer.removeChild(tempLoader);
            }
            let respMsg = document.createElement('li');
            respMsg.appendChild(document.createTextNode(JSON.parse(xmlhttp.responseText)['message'].replace(/\\n/g, '')));
            document.getElementById('execution_results').appendChild(respMsg);
        }
    };

    const url_input = document.getElementById('url');
    xmlhttp.open('GET', '/scrape?' + url_input.name + '=' + url_input.value, true);
    xmlhttp.send();
}

function showLoader() {
    let checkEmpty = document.getElementById('url').value;
    if (checkEmpty !== '' ) {
        let loader = document.createElement('div');
        loader.setAttribute('id', 'loader_toggle');
        loaderContainer.appendChild(loader);
        loader.className += 'lds-hourglass';
    }
}