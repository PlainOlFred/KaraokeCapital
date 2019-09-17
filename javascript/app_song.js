$(document).ready(function () {


    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();
   

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let obj =this;
        let song = obj.data.song;
        let song = obj.data.artist;
       console.log(song);
       console.log(artist);
        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
            onCloseEnd: function(){ 
            console.log(obj.data)   
        }

    }); 

        $('#add-to-queue-modal').modal('open');
       
    })
});