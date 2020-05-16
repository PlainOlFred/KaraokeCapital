$(document).ready(function () {
  const database = firebase.database();

  const topSongsElem = $("#index-song-collection");

  const songListRef = database.ref("songs");

  songListRef.on('value', function(snapshot) {

    const songs = snapshot.val();
    console.log(songs)


    for(i in songs) {
      let listItem;
      let song = new Avatar(songs[i].name, songs[i].artist)
      if (true) {
        listItem = song.createPerformedAva()
      } 
      topSongsElem.append(listItem)
    }


  })





















  function addSongToSongList(song) {
    //song
    songListRef.push(song)


  }




  function updateSongOnSongList(name, data) {
    songListRef.child(String(name)).set(data)
  }

  // addSongToSongList({
  //   name: "song 1",
  //   artist: "artist 2"
  // })


});
