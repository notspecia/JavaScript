/**
 * @file        main.js
 * @author      Gabriele Speciale
 * @date        2024-09-17
 * @description 
 * 
 * ● a Video has the following methods and properties
    ○ title (a string)
    ○ seconds (a number)
    ○ watch(x seconds [optional]) prints "you watched X seconds of 'TITLE'" 
      e.g. "you watched 120 seconds of 'Lord of the rings'". if x is missing, 
      prints "you watched all SECONDS seconds of 'TITLE'" 
      e.g. "you watched all 160 seconds of 'Lord of the rings'"

   ● a MusicVideo extends Video and has these extra methods and properties
    ○ artist (a string)
    ○ play() prints "you played 'TITLE' by 'ARTIST'"
      e.g. "you played 'Another Brick in the Wall' by 'Pink Floyd'"

   ● use the prototype method, not classes, to write the constructors for Video and MusicVideo
    ○ the constructor functions accept a single config object
    ○ all arguments are optional, use defaults if missing

   ● create an array that contains a mix of Video and MusicVideo instances

   ● loop through the array, and for each item:
    ○ call the watch() method 
    ○ call the play() method only if it's a MusicVideo. Hint: use instanceof

   ● optional:
    ○ in a new folder, repeat the exercise using the class syntax rather than the prototype method
    ○ all behaviors should be identical
 */


//! classes used to create istances ----------------------------------------------------------

// CLASS for the creation of `video` istances
class Video {

    // constructor function to assign the title and seconds to the video
    constructor(config) {
        this.title = config.title || "untitled";
        this.seconds = config.seconds || null;
    }

    /* creation of an method that can be used by the requests created both with: 
    `Video` that with `MusicVideo` (also inheritance this class `extends`) */
    watch() {
        if (this.seconds) {
            console.log(`you watched ${this.seconds} seconds of ${this.title}`);

        } else {
            console.log(`you watched all seconds of ${this.title}`);
        }
    }
}



// CLASS for the creation of `musicVideo` istances
class MusicVideo extends Video {

    // constructor function to assign the artist, + addition to the properties SUPERIORS (class `Video`) heredity
    constructor(config) {
        super(config);
        this.artist = config.artist || "unknown";
    }

    // method that can be used by the istances created with `MusicVideo`
    play() {
        console.log(`you played ${this.title} by ${this.artist}`);
    }
}



//! creation of the instances and execution of the methods -----------------------------------


// array that will contain a mix of videos and songs, with random data!
let musicVideoCollection = [];

// array with a mix of video/song titles
const titles = [
    "the godfather", "bohemian rhapsody", "inception", "imagine", "pulp fiction", "hotel california",
    "the dark knight", "stairway to heaven", "fight club", "billie jean", "forrest gump", "shape of you",
    "schindler's list", "smells like teen spirit", "the matrix", "let it be", "the shawshank redemption",
    "rolling in the deep", "interstellar", "yesterday", "the social network", "thriller", "gladiator", "hey jude",
    "the avengers", "sweet child o' mine", "the silence of the lambs", "i will always love you", "jurassic park", "wonderwall"
];

// array with a mix of durations (in seconds) for videos and musicVideos
const seconds = [
    3600, 7200, 180, 4500, 60, 5400, 120, 240, 900, 86400, 43200, 30, 300, 2700, 150, 10800,
    1200, 720, 28800, 600, 360, 480, 14400, 6000, 30, 75, 540, 12600, 450, 172800
];

// array with a mix of artists/actors
const artists = [
    "leonardo dicaprio", "freddie mercury", "christopher nolan", "john lennon", "quentin tarantino",
    "eagles", "christian bale", "led zeppelin", "brad pitt", "michael jackson", "tom hanks", "ed sheeran",
    "steven spielberg", "kurt cobain", "keanu reeves", "paul mccartney", "morgan freeman", "adele",
    "matthew mcconaughey", "the beatles", "david fincher", "whitney houston", "russell crowe",
    "guns n' roses", "anthony hopkins", "robert downey jr.", "amy winehouse", "jodie foster",
    "dolly parton", "chris pratt", "oasis"
];



//! creation of 30 random instances of: video/musicVideo
for (let i = 0; i < 30; i++) {

    // randomly decide the type of instance to create (0 -> video, 1 -> musicVideo)
    const randomInstance = Math.round(Math.random());

    
    // if the random number is 0, create a video instance
    if (randomInstance === 0) {
        let video = new Video({
            title: titles[Math.floor(Math.random() * titles.length)],
            seconds: seconds[Math.floor(Math.random() * seconds.length)]
        });

        // add the new video instance to the global array
        musicVideoCollection.push(video);

        // else if the random number is 1, create a musicVideo instance
    } else {
        let musicVideo = new MusicVideo({
            title: titles[Math.floor(Math.random() * titles.length)],
            seconds: seconds[Math.floor(Math.random() * seconds.length)],
            artist: artists[Math.floor(Math.random() * artists.length)]
        });

        // add the new music video instance to the global array
        musicVideoCollection.push(musicVideo);
    }
}


// print the array containing all instances for debugging
console.log(musicVideoCollection);


// execute the methods available in the prototype for each instance
for (videoOrMusicVideo of musicVideoCollection) {

    // this method is used by both types of instances (video and musicVideo), they inherit it
    videoOrMusicVideo.watch();

    // if it's true, it means this instance is a musicVideo, so use the .play() method
    if (videoOrMusicVideo instanceof MusicVideo) {
        videoOrMusicVideo.play();
    }

    // space between each instance output
    console.log("\n\n");
}


//! video.play(); --> results in an error -> play() doesn't exist in the `Video` constructor, it's defined in the `MusicVideo` constructor