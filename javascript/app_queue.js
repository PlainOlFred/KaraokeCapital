$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#perfom-song-modal').modal();
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

    
    
        // modals
    //perform modal
    $('#queue-collection').on('click', '.performBtn', function(e){
        e.stopPropagation();
        console.log('clicked')
        
        $('#perform-song-modal').modal({
            dismissible: false
        }); 
        $('#perform-song-modal').modal('open');

        let currentSong = $(this).parent();
        

            // modal btn listeners
        $('#perform-song').on('click', function(){
            console.log('yes');

        });
        $('#no-perform-song').on('click', function(){
            console.log('no');
        });
        $('#remove-song').on('click', function(){

          
            

        })
        



    })

    //lyric modal
    $('#queue-collection').on('click', '.lyricsBtn', function(){
       
        let song = $(this).parent().attr('data-song');
        let artist = $(this).parent().attr('data-artist');
        let cover = $(this).parent().attr('data-cover');
        let lyric = $(this).parent().attr('data-lyrics');

        $('#lyric-modal').modal({
            dismissible: false,
            style: 'position: relative; height: 1000px'    
        }); 
        $('#lyric-modal').modal('open');
        $('#lyric-modal-title').empty();
        $('#lyric-modal-artist').empty();
        $('#lyric-modal-image').empty();
        $('#lyric-display').empty();


        $('#lyric-modal-title').text(song);
        $('#lyric-modal-artist').text(artist);
        $('#lyric-modal-image').attr({
            src : cover,
            style: 'height: 150px; position : absolute; top : 0px; right: 0px'
        })
        //use this link to display lyrics
        let lyricLink = $(`<a>${song}</a>`);
        lyricLink.attr({
            'href' : 'https://genius.com'+lyric,
            'target' : '_blank' 
        });
        $('#lyric-display').attr({
            style: 'height: 200%; position: relative; top: 40px'
        })
        $('#lyric-display').append(lyricLink);


        
    }); 
    


    

   

   
});