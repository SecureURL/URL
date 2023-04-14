// Get the query string from the URL
const queryString = window.location.search;

// Create a new URLSearchParams object with the query string
const urlParams = new URLSearchParams(queryString);

// Get the value of the 'param' parameter
const paramValue = urlParams.get('o');

// Log the value to the console
console.log(paramValue);

if (paramValue != "" || paramValue != null)
{
    var API_URL = "https://script.google.com/macros/s/AKfycbzwXnFIE4RtVDM6MVtJUSvMiZTtSlq28w5XYHbXYx9BA1EDOEDWN11gA2wmNMsuaVk4kA/exec?";

    fetch(API_URL + `getRowData=true&code=${paramValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.Data[1]);
        console.log(data.Data[1].length );
        if (data.Data[1].length > 1)
        {
            window.location.href = data.Data[1];
            window.close('','_parent','');
        }
        else
        {
            document.querySelector(".container").innerHTML = "";
            document.querySelector(".container").innerHTML = "<h1>Ads will be shown if no parameter is detected.</h1>";
        }
    });
}
