let constructCount = 0;

function Avatar(song, artist, cover, lyrics){
    this.song =song;
    this.artist = artist;
    this.cover = cover;
    this.lyrics = lyrics;
}
Avatar.prototype.createAva = function(){
    let avaItem = $('<li>');
    avaItem.attr({
        'class' : 'collection-item avatar',
        'data-song' : this.song,
        'data-artist' : this.artist,
        'data-cover' : this.cover,
        'data-lyrics' : this.lyrics,
        'id' : 'ava-' + constructCount
    });

    let img = $('<img>');
    img.attr({
        'src' : this.cover,
        'class' : 'circle', 
        
    });
    let songBlock = $('<span>');
    songBlock.attr('class', 'title');
    songBlock.text(this.song);
    let artistBlock = $('<p>');
    artistBlock.text(this.artist);

    //add Button
    let addBtn = $('<button>Add</button>');
    addBtn.attr({
        'class' : 'secondary-content addBtn'
    })
    //lyrics Button
    let lyricsBtn = $('<button>Lyrics</button>').addClass('lyricsBtn');
    avaItem.append([img, songBlock, artistBlock, addBtn, lyricsBtn]);
        
    constructCount++;
    return avaItem;
}


//Avater for songs in Queue
Avatar.prototype.createQueueAva = function(){
    let avaItem = $('<li>');
    avaItem.attr({
        'class' : 'collection-item avatar',
        'data-song' : this.song,
        'data-artist' : this.artist,
        'data-cover' : this.cover,
        'data-lyrics' : this.lyrics,
    });

    let img = $('<img>');
    img.attr({
        'src' : this.cover,
        'class' : 'circle',   
    });
    let songBlock = $('<span>');
    songBlock.attr('class', 'title');
    songBlock.text(this.song);
    let artistBlock = $('<p>');
    artistBlock.text(this.artist);

    //Perform Button
    let performBtn = $('<button>Perform</button>');
    performBtn.attr({
        'class' : 'secondary-content performBtn'
    })
    //lyrics Button
    let lyricsBtn = $('<button>Lyrics</button>').addClass('lyricsBtn');
    avaItem.append([img, songBlock, artistBlock, performBtn, lyricsBtn]);
        
    constructCount++;
    return avaItem;
}