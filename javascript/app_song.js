$(document).ready(function () {

    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //populate by song
   
    $('#song-search').on('change', function(){
        let songSearch = $(this)[0].value;
        callSongs(songSearch);
        $(this)[0].value = ' ';
    })

    //get lyrics
    $('.lyricBtn').on('clicked', function(e){
        e.stopPropagation();
        console.log('lyrics')
    })
    
    $('body').on('click', '.lyricBtn', function(e){
        e.stopPropagation();    
    });

    //api request
    function callSongs(songSearch) {
        let search = songSearch
        let token = "0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn"
        let queryURL = "https://api.genius.com/search?access_token=" + token + `&q=${search}`;

        $.ajax({
            url:queryURL,
            method: "GET",
            dataType: 'json',
        }).then(function(response) {
            let hits =response.response['hits']
            //console.log(hits)
            for(let i = 0; i<hits.length; i++){
                let song = hits[i].result['title'];
                let artist = hits[i].result['primary_artist']['name'];
                let cover = hits[i].result['song_art_image_thumbnail_url'];
                let lyrics =  hits[i].result['path'];
                
                //New Avatar
                let ava = new Avatar(song, artist, cover, lyrics);
                //console.log(ava);
                let avaItem = ava.createAva();
                $('#song-collection').append(avaItem);
            }

        });
    };
    
    // MODALS
    // 
    // open  add song modal
    $('#song-collection').on('click', '.addBtn', function(e){
        e.stopPropagation();
        let song = $(this).parent().attr('data-song');
        let artist = $(this).parent().attr('data-artist');
        let cover = $(this).parent().attr('data-cover');
        let lyrics = $(this).parent().attr('data-lyrics');
    
        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false
        }); 

        $('#add-to-queue-modal').modal('open');

        //add song to queue
        $('#add-song').on('click', function(){

            let ava = new Avatar(song, artist, cover, lyrics);
            let avaItem = ava.createAva();
            // console.log('firebase')
            // console.log(song);
            // console.log(artist);
            // console.log(cover)
            // console.log(lyrics)
            console.log('this was clicked');
            console.log(avaItem)

            $('#queue-collection-test').append(avaItem);
        });
    }); 


    //Open Lyrics Modal
    $('#song-collection').on('click', '.lyricsBtn', function(){
       
        let song = $(this).parent().attr('data-song');
        let artist = $(this).parent().attr('data-artist');
        let cover = $(this).parent().attr('data-cover');
        let lyric = $(this).parent().attr('data-lyrics');

        $('#lyric-modal').modal({
            dismissible: false,
            style: 'position: relative; height: 1000px'    
        }); 
        $('#lyric-modal').modal('open');
        
        $('#lyric-modal-title').text(song);
        $('#lyric-modal-artist').text(artist);
        $('#lyric-modal-image').attr({
            src : cover,
            style: 'height: 150px; position : absolute; top : 0px; right: 0px'
        })
        //use this link to display lyrics
        let lyricLink = $(`<a>${song}</a>`);
        lyricLink.attr({
            'href' : 'https://genius.com/'+lyric,
            'target' : '_blank' 
        });
        $('#lyric-display').attr({
            style: 'height: 200%; position: relative; top: 40px'
        })
        $('#lyric-display').append(lyricLink);
        
    }); 
});
    
