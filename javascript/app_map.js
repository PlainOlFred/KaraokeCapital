$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();

    //gets position for map
    function getPositionForAddress(address) {
        let apiKey = "90e9rkuEupM3gLfROkv1nrNqGj6iBeCH";
        let maxNumRecordsReturned = 1;
        let queryURL = `https://api.tomtom.com/search/2/geocode/${address}.json?limit=${maxNumRecordsReturned}&key=${apiKey}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            let latitude = response.results[0].position.lat;
            let longitude = response.results[0].position.lon;

            getNearByPlaces(latitude, longitude);
        });
    };

    //gets latitude and longitude
    function getNearByPlaces(latitude, longitude) {
        let apiKey = "90e9rkuEupM3gLfROkv1nrNqGj6iBeCH";
        var queryURL = `https://api.tomtom.com/search/2/search/karaoke.json?key=${apiKey}&lat=${latitude}&lon=${longitude}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

            for(let i = 0; i < response.results.length; i++) {
                //Get result
                let result = response.results[i];

                // Create and save a reference to new empty table row
                const tRow = $('<tr>');

                // Generate query string for Maps search
                const queryString = generateQueryString(result.poi.name, result.address.freeformAddress);
                
                //Create map link
                const link = $('<a>').attr("href", queryString);
                link.text(result.poi.name);
                const name = $('<td>');
                name.append(link);

                // Create td elements from the AJAX response object
                const address = $('<td>').text(result.address.freeformAddress);
                const phone = $('<td>').text(result.poi.phone);

                //Create website link
                const website = $('<a>').attr("href", result.poi.url);
                website.text(result.poi.url);
                const url = $('<td>');
                url.append(website);
                
                // Append the td elements to the new table row
                tRow.append(name);
                tRow.append(address);
                tRow.append(phone);
                tRow.append(url);

                // Append the table row to the tbody element
                $('tbody').append(tRow);
            }
        });
    };

    //shows map
    function generateQueryString(name, address) {
        let baseUrl = "https://www.google.com/maps/search/?api=1&query=";

        let formattedName = name.replace(/ /g, "+");
        let formattedAddress = address.replace(/,/g, "");
        formattedAddress = formattedAddress.replace(/ /g, "+");

        const queryString = `${baseUrl}${formattedName}+${formattedAddress}`;

        return queryString;
    };

    //getPositionForAddress("2405 Robert Dedman Drive Austin TX 78712");

    $("#search-form").on('change', function(event) {
        event.preventDefault();
        let address = $('#search').val();
        console.log();
    
        let formattedAddress = address.replace(/,/g, "");
        
        getPositionForAddress(formattedAddress);

        $('#search')[0].value = ' '
    });
    
});


//SEARCH FUNCTIONS
// on click
//get locations of #karaoke withn X radius