$(document).ready(function () {
  const userId = "0QRrkhbCmMaTiK1m1NoBKJM20DH3";




  const database = firebase.database();
  const songsObj = database.ref("songs");

  songsObj.on("value", function (snap) {
    console.log(snap.val());
  });

  function addSong(test) {
    songsObj.child('favorite/mine').set({
      test
    })
  }

addSong('test')

  function removeSong() {}

  function displaySongs() {}

  function writeUserData(userId, name, email) {
    firebase
      .database()
      .ref("users/" + userId + "/favor")
      .set({
        username: name,
        email: email,
      });
  }

  writeUserData('212', "jeremy", 'example@test.com')



});
