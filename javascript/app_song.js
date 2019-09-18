$(document).ready(function () {


    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //populate by song
    $('#song-search').change(function(){
        let urlSong =`https://deezerdevs-deezer.p.rapidapi.com/track/${song}`;
        $.ajax({
        url: urlSong,
        method: 'GET',
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "7e5a34b3cfmshc5b7f554f6185efp1d35edjsna7c7811d870d"
        }
        }).then(function(response){
        console.log(response)
        })

    })
      
    


    function callSongs() {
        //let type = $(this).attr("data-type");
        //let queryURL = "https://api.genius.com/search?access_token=0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn&q=" + type;
        let token = "0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn"
        let queryURL = "https://api.genius.com/search?access_token=" + token + "&q=weezer";

        $.ajax({
            url:queryURL,
            method: "GET",
            dataType: 'json',
        }).then(function(response) {
            $(".collection").text(JSON.stringify(response));
            //then(function(data) {
                // fetch(response.hits.map(function(hit) {
                // }));
            //});
            console.log(response);
        });
    };
    callSongs();
})
    

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
<<<<<<< HEAD

        $('#add-to-queue-modal').modal('open');
       
    })
});
=======
        $('#add-to-queue-modal').modal('open');  
    })
});
>>>>>>> 0cf6c7c8e1570381902f882ecc3185ef98a42fcf
