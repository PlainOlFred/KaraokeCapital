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
        console.log(avaItem);
    };

    loadData();
});