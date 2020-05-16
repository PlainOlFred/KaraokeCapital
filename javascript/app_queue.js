$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#perfom-song-modal').modal();
    $('#clear-all-modal').modal();
    let queue = [];

   

    
 

    // Get a reference to the database services
    let toQueueDB = firebase.database().ref('toQueue');
    let queueDB = firebase.database().ref('queue');
    let historyDB = firebase.database().ref('hitory');
    
   

    toQueueDB.on("child_added", function(snapshot) {
        $('#clear-modal-btn').css('display','block')


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
           console.log(toQueueDB);
        });
           
    })

    //clear modal
    $('#clear-modal-btn').on('click', function(e){
        e.stopPropagation();
        
        $('#clear-all-modal').modal({
            dismissible: false
        }); 
        $('#clear-all-modal').modal('open');

        let currentSong = $(this).parent();
        


        $('#clear-all-song').on('click', function(){
           console.log(toQueueDB);
           let removeThis =firebase.database().ref('toQueue');
           toQueueDB.remove();
           $('#clear-modal-btn').css('display','none')

        });
           
    });

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