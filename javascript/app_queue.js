$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-song-modal').modal();

    $('.add-song').on('click', function(){
        $('#add-song-modal').modal('open');
    })
    
    // modal btn listeners
    $('#add-to-queue-modal').modal('open');
    $('#no-performed-song').on('click', function(){
    
    });
    $('#yes-performed-song').on('click', function(){
        console.log('yes');
        $(".collection").prepend("<div class='row'>"+spotifySong+"</div>");


    });

    //adds song to queue page
    $('#yes-add-song').on('click', function(){
        console.log('yes');
        //remove Avtar
        $("history-collection").prepend("<div class='row'>"+spotifySong+"</div>");
    }); 

    function loadData(){
        document.getElementById("result").innerHTML = localStorage.getItem(avaItem); //nonfunctional
    };

    ////////////////////FIREBASE///////////////////
    
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

    // Get a reference to the database service
    var database = firebase.database();


    // Using .on("value", function(snapshot)) syntax will retrieve the data
    // from the database (both initially and every time something changes)
    // This will then store the data inside the variable "snapshot". We could rename "snapshot" to anything.
    database.ref('performance').on("value", function(snapshot) {
    
        // Setting initial value
        let listOfPerformances = [];

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
    
    loadData();
});