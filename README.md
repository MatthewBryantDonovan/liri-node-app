# Liri Bot ~

Liri bot will will take any of the commands below and give the user the following information:

1. `node liri concert-this <band here>` -
    * Band name
    * Name of the venue
    * Venue location
    * Date of the Event
2. `node liri spotify-this-song <song here>` -
    * Artist(s)
    * Song name
    * Preview song link
    * Album
3. `node liri movie-this <movie here>` - 
    * Title
    * Year released
    * IMDB Rating
    * Rotten Tomatoes Rating
    * Country produced
    * Language
    * Plot
    * Actors
4. `node liri do-what-it-says` - 
    * It will run some pre-selected calls that I have specified in the random.txt file.

## Call Examples ~

1. `node liri concert-this <band here>` -



--Blink-182 concert--
<br>Name of the venue: The Forum
<br>Venue location: Los Angeles, CA
<br>Date of the Event: Jan 18th 2020



--Blink-182 concert--
<br>Name of the venue: Ohio State Reformatory
<br>Venue location: Mansfield, OH
<br>Date of the Event: Jul 10th 2020



2. `node liri spotify-this-song <song here>` -



Artist(s): Soundgarden
<br>Song name: Spoonman
<br>Preview song: https://open.spotify.com/track/1jMaB19DiVR8OihLSuYFOt
<br>Album: Superunknown (20th Anniversary)



3. `node liri movie-this <movie here>` - 



Title: Stardust
<br>Year released: 2007
<br>IMDB Rating: 7.6/10
<br>Rotten Tomatoes Rating: 77%
<br>Country produced: UK, USA
<br>Language: English
<br>Plot: In a countryside town bordering on a magical land, a young man makes a promise to his beloved that 
<br>he'll retrieve a fallen star by venturing into the magical realm.
<br>Actors: Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly



4. `node liri do-what-it-says` - 



Artist(s): Noriko Mitose
<br>Song name: Radical Dreamers -Le Tresor Interdit-
<br>Preview song: https://open.spotify.com/track/4qsyVDZdjslzghC3NfKQuO
<br>Album: Chrono Cross Original Soundtrack



5. `node liri` (Missing argument case) - 



Liri does not recognize your command. Please use one of the following:
<br>
<br>concert-this <artist/band name here>
<br>spotify-this-song <song name here>
<br>movie-this <movie name here>
<br>do-what-it-says



6. `node liri <command here> askdjfhlashdflksdhjf` (Error case) - 


There was an error finding that movie! Please try again!

# Example Pictures ~

* #### concert-this

![concert-this Picture](./demo/concert-this.PNG)

* #### spotify-this-song

![spotify-this-song Picture](./demo/spotify-this-song.PNG)

* #### movie-this

![movie-this Picture](./demo/movie-this.PNG)

* #### do-what-it-says

![do-what-it-says Picture](./demo/do-what-it-says.PNG)


