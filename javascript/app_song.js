$(document).ready(function () {


    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //populate by song
    $('#song-search').change(function(){
       let songSearch = $(this).val().tirm().replace(/ /, '')
       
    })
      
    


    function callSongs(songSearch) {
        let search = songSearch
        //let type = $(this).attr("data-type");
        //let queryURL = "https://api.genius.com/search?access_token=0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn&q=" + type;
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
                let song = hits[i]['result']['title']
                let artist = hits[i].result.primary_artist['name']
                let cover =hits[i].result['song_art_image_thumbnail_url']

                let ava = new Avatar(song, artist, cover)
                ava.createAva()
            }
        });
    };
    let songSearch = 'blink 182'
    callSongs(songSearch);  
    
    

    //populate by artist
   

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let song = $(this).attr('data-song');
        let artist = $(this).attr('data-artist');
       console.log(song);
       console.log(artist);

        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
            onCloseEnd: function(){ 
            //send data to database
            console.log(song) 
            }

        }); 

        $('#add-to-queue-modal').modal('open');
       
    })
    
});
