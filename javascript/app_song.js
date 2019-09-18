$(document).ready(function () {


    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //populate by song
   
    $('#song-search').on('change', function(){
        console.log('fuck')
        let songSearch = $(this)[0].value;
        callSongs(songSearch);
        $(this)[0].value = ' '
    })
    
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
            console.log(hits)
            for(let i = 0; i<hits.length; i++){
                let song = hits[i].result['title'];
                let artist = hits[i].result['primary_artist']['name'];
                let cover = hits[i].result['song_art_image_thumbnail_url'];
                let lyrics =  hits[i].result['path'];
                
                //New Avatar
                let ava = new Avatar(song, artist, cover);
                console.log(ava);
                let avaItem = ava.createAva();
                $('#song-collection').prepend(avaItem);
            }
        });
    };
    
    

    //populate by artist
   

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let song = $(this).attr('data-song');
        let artist = $(this).attr('data-artist');
        let cover = $(this).attr('data-cover');
    

        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
            onCloseEnd: function(){ 
            console.log(song) 
            }
        }); 
        $('#add-to-queue-modal').modal('open');
        
        $('#add-song').on('click', function(){
            console.log('firebase')
            console.log(song);
            console.log(artist);
            console.log(cover)
            //
            //fire here with these varibles


        })
    }); 
});
    
