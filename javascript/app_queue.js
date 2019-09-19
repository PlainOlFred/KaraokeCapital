$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-song-modal').modal();
    let queue = [];

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


    $('.add-song').on('click', function(){
        $('#perform-song-modal').modal('open');
    })
    
    // modal btn listeners
    $('#add-to-queue-modal').modal('open');
    $('#no-performed-song').on('click', function(){
    
    });
    $('#yes-performed-song').on('click', function(){
        console.log('yes');
        


    });

    //adds song to queue page
    $('#yes-add-song').on('click', function(){
        console.log('remove');
        //remove Avtar
        
    }); 

   

    // Get a reference to the database services
    let toQueueDB = firebase.database().ref('toQueue');
    let queueDB = firebase.database().ref('queue');
    let historyDB = firebase.database().ref('hitory');
    
   

    toQueueDB.on("child_added", function(snapshot) {

        let song= snapshot.val()[0];
        let artist = snapshot.val()[1];
        let cover = snapshot.val()[2];
        let lyric = snapshot.val()[3];

        let ava = new Avatar(song, artist, cover, lyric);
        let avaItem = ava.createQueueAva();
        $('#queue-collection').prepend(avaItem);
        
        
        
        //Catch error
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
        });
    

   
});