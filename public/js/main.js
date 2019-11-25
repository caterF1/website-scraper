const form = document.getElementById('url-form');

function urlSubmit(event) {
    const url_input = document.getElementById('url-input');

    event.preventDefault();

    //ajax
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.getElementById("test").innerHTML =
               JSON.parse(xmlhttp.responseText)["newUrl"];
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "/scraping?" + url_input.name + "=" + url_input.value, true);
    xmlhttp.send();
  
}
