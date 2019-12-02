const form = document.getElementById('scrape_form');

function urlSubmit(event) {
    event.preventDefault();

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            respMsg = document.createElement('li');
            respMsg.appendChild(document.createTextNode(JSON.parse(xmlhttp.responseText)['message']));
            document.getElementById('execution_results').appendChild(respMsg);
        }
    };

    const url_input = document.getElementById('url');
    xmlhttp.open('GET', '/scrape?' + url_input.name + '=' + url_input.value, true);
    xmlhttp.send();
}