DROP DATABASE IF EXISTS karaoke_capital_db;

CREATE DATABASE karaoke_capital_db;

USE karaoke_capital_db;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    artist VARCHAR(50),
    PRIMARY KEY id
);

INSERT INTO songs (title, artist) VALUES ("happy birthday song", "unknow the artist");
INSERT INTO songs (title, artist) VALUES ("marry had a liitle lamb", "unknow the artist");
INSERT INTO songs (title, artist) VALUES ("jingle bells", "unknow the artist");