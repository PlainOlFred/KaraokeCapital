$(document).ready(function() {
    $(".sidenav").sidenav();

    // Initialize Firebase
    // This is the code we copied and pasted from our app page
    var firebaseConfig = {
        apiKey: "AIzaSyDU0dlAtMCVbQUIp5gsOgZBu7V20dMk5jc",
        authDomain: "testerproject-c6e19.firebaseapp.com",
        databaseURL: "https://testerproject-c6e19.firebaseio.com",
        projectId: "testerproject-c6e19",
        storageBucket: "testerproject-c6e19.appspot.com",
        messagingSenderId: "928064114785",
        appId: "1:928064114785:web:b67a6812bfee7365"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // VARIABLES
    // --------------------------------------------------------------------------------

    // Get a reference to the database service
    var database = firebase.database();

    // Setting initial value
    let listOfPerformances = [];
    let listOfLocations = [];
    let performanceCount = 0;
    let venueCount =0;
  
    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------

    // On Click of Button
    // $("#performance-button").on("click", function() {
    //     //Save Performances
    //     savePerformance("TestSong", "TestArtist");
    // });

    //increase count of performances
    $("#log-performance").on("click", function() {
        performanceCount++;
        console.log(performanceCount);
        $("#performance-count").text(performanceCount);
    });
        
    //increase count of venues attended
    $("#log-venue").on("click", function() {
        venueCount++;
        console.log(venueCount);
        $("#venue-count").text(venueCount);
    });

    function savePerformance(song, artist) {
        let performanceRef;

        //Update count
        if (listOfPerformances.length > 0) {

            //Get performance if already in the list
            var item = listOfPerformances.find(perf => perf.song === song);

            //Update count on the list
            if (item != null) {
                item.count++;
            }
            //Add performance to list
            else {
                listOfPerformances.push({
                key: null,
                song: song,
                artist: artist,
                count: 1
            });
            }
        }
        //Add performance to list
        else {
            listOfPerformances.push({
                key: null,
                song: song,
                artist: artist,
                count: 1
            });
        }
        
        //Get item
        var item = listOfPerformances.find(perf => perf.song === song);

        //If there is no key, then it has not been added to firebase
        //Create new key in firebase
        if (item.key == null) {
            performanceRef = database.ref('performance').push();
            item.key = performanceRef.getKey();
        }
        //If there is a key, then it has been added to firebase
        //Get existing key
        else {
            let refPath = "performance/" + item.key;
            performanceRef = database.ref(refPath);
        }

        //Set the new performance to firebase
        performanceRef.set({
            key: item.key,
            song: item.song,
            artist: item.artist,
            count: item.count
        });
    }

    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref('performance').on("value", function(snapshot) {

        //value returned
        if (snapshot.val() != null) {

            //Write the value of snapshot
            console.log(snapshot.val());

            listOfPerformances = [];

            //Loop through keys in firebase
            //Get values and write to array
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();

                listOfPerformances.push({
                    key: childData.key,
                    song: childData.song,
                    artist: childData.artist,
                    count: childData.count
                });

                // Add Ids to get values
                // $(songId).text(childData.song);
                // $(artistId).text(childData.artist);
                // $(countId).text(childData.count);
            });
        }

        //Catch error
        }, function(errorObject) {

        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
    });




    // On Click of Button
    // $("#location-button").on("click", function() {
    //     //Save Location
    //     saveLocation("TestLocation", "TestAddress");
    // });

    function saveLocation(name, address) {
        let locationRef;

        //Update count
        if (listOfLocations.length > 0) {

            //Get location if already in the list
            var item = listOfLocations.find(loc => loc.name === name);

            //Update count on the list
            if (item != null) {
                item.count++;
            }
            //Add location to list
            else {
                listOfLocations.push({
                    key: null,
                    name,
                    address,
                    count: 1
                });
            }
        }
        //Add location to list
        else {
            listOfLocations.push({
                key: null,
                name,
                address,
                count: 1
            });
        }
        
        //Get item
        var item = listOfLocations.find(loc => loc.name === name);

        //If there is no key, then it has not been added to firebase
        //Create new key in firebase
        if (item.key == null) {
            locationRef = database.ref('location').push();
            item.key = locationRef.getKey();
        }
        //If there is a key, then it has been added to firebase
        //Get existing key
        else {
            let refPath = "location/" + item.key;
            locationRef = database.ref(refPath);
        }

        //Set the new location to firebase
        locationRef.set({
            key: item.key,
            name: item.name,
            address: item.address,
            count: item.count
        });
    }

    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref('location').on("value", function(snapshot) {

        //value returned
        if (snapshot.val() != null) {

            //Write the value of snapshot
            console.log(snapshot.val());

            listOfLocations = [];

            //Loop through keys in firebase
            //Get values and write to array
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();

                listOfLocations.push({
                    key: childData.key,
                    name: childData.name,
                    address: childData.address,
                    count: childData.count
                });

                // Add Ids to get values
                // $(nameId).text(childData.name);
                // $(addressId).text(childData.address);
                // $(countId).text(childData.count);
            });
        }

        //Catch error
        }, function(errorObject) {

        // In case of error this will print the error
        console.log("The read failed: " + errorObject.code);
    });
});