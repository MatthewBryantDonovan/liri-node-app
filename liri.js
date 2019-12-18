require("dotenv").config();
var fs = require("fs");
var moment = require('moment');
var keys = require("./keys.js");
var axios = require('axios');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var media = process.argv.slice(3).join(" ");
console.log("\n-------------------------------\n");

switch (command) {
    case "concert-this":
        artist = media;
        band();
        break;
    case "spotify-this-song":
        songName = media;
        music();
        break;
    case "movie-this":
        film = media;
        movie();
        break;
    case "do-what-it-says":
        doIt();
        break;
    default:
        console.log("Liri does not recognize your command. Please use one of the following:\n");
        console.log("concert-this <artist/band name here>");
        console.log("spotify-this-song <song name here>");
        console.log("movie-this <movie name here>");
        console.log("do-what-it-says");
        console.log("\n-------------------------------\n");
        
        break;
}

var artist = "blink 182";
var songName = "The Sign";
var film = "Mr. Nobody";
var whichThis = "";
var randomizer = [];
var selected = "";
var selectedArray = [];

// 1. `node liri.js concert-this <artist/band name here>`
function band() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&limit=5")
        .then(function (response) {
            // handle success
            response.data.forEach(function (i) {
                console.log("Name of the venue: " + i.venue.name);
                console.log("Venue location: " + i.venue.city + ", " + i.venue.region);
                console.log("Date of the Event: " + moment(i.datetime).format("MMM Do YYYY"));
                console.log("\n-------------------------------\n");
            })

            if (response.data[0] == undefined) {
                console.log("There are no upcoming concerts for this band!");
                console.log("\n-------------------------------\n");
            }

        })
        .catch(function (error) {
            // handle error
            console.log("There was an error finding that band! Please try again!");
            console.log("\n-------------------------------\n");
        })
}

// 2. `node liri.js spotify-this-song '<song name here>'`
function music() {
    spotify.search({
        type: 'track',
        query: songName,
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log("There was an error finding that song! Please try again!\n\n-------------------------------\n");
        } else if (data.tracks.items.length != 0){
            
            var artists = "";
            data.tracks.items.forEach(function (i) {
                data.tracks.items[0].artists.forEach(function (i) {
                    artists += " " + i.name + ", ";
                });
                artists = artists.substring(0, artists.length - 2);
                console.log("Artist(s):" + artists);
                console.log("Song name: " + data.tracks.items[0].name);
                console.log("Preview song: " + data.tracks.items[0].external_urls.spotify);
                console.log("Album: " + data.tracks.items[0].album.name);
                console.log("\n-------------------------------\n");
                artists = "";
            });
        } else {
            console.log("There was an error finding that song! Please try again!\n\n-------------------------------\n");
        }
    });
}

// 3. `node liri.js movie-this '<movie name here>'`
function movie() {
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + film)
        .then(function (response) {
            // handle success
            var rtnScore = "";
            var imdbScore = "";
            if (response.data.Response != "False") {
                if (response.data.Ratings != undefined) {
                    response.data.Ratings.forEach(function (i) {
                        if (i.Source == "Rotten Tomatoes") {
                            rtnScore = i.Value;
                        }
                        if (i.Source == "Internet Movie Database") {
                            imdbScore = i.Value;
                        }
                    })
                } else {
                    imdbScore = response.data.Year;
                    rtnScore = "N/A";
                }

                console.log("Title: " + response.data.Title);
                console.log("Year released: " + response.data.Year);
                console.log("IMDB Rating: " + imdbScore);
                console.log("Rotten Tomatoes Rating: " + rtnScore);
                console.log("Country produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("\n-------------------------------\n");
            } else {
                console.log("There was an error finding that movie! Please try again!");
                console.log("\n-------------------------------\n");
            }
        })
        .catch(function (error) {
            // handle error
            console.log("There was an error finding that movie! Please try again!");
            console.log("\n-------------------------------\n");
        })
}

// 4. `node liri.js do-what-it-says`
function doIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        } else {
            randomizer = data.split("::\r\n");
            selected = randomizer[Math.floor((Math.random() * randomizer.length))];
            selectedArray = selected.split(":,:");
            whichThis = selectedArray[0];
            switch (whichThis) {
                case "concert-this":
                    artist = selectedArray[1];
                    band();
                    break;
                case "spotify-this-song":
                    songName = selectedArray[1];
                    music();
                    break;
                case "movie-this":
                    film = selectedArray[1];
                    movie();
                    break;
                default:
                    console.log("Something randomly happened and it wasn't good! Please check your random.txt file format!");
                    break;
            }
        }

    });
}

// 9. Make it so liri.js can take in one of the following commands:
//    * `concert-this`
//    * `spotify-this-song`
//    * `movie-this`
//    * `do-what-it-says`