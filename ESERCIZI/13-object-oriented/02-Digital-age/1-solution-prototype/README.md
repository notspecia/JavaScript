## Author Details

* Name: Gabriele Speciale
* Date: 2024-09-17
* Concat: gabriele.speciale@edu.itspiemonte.it



## Description

● a Video has the following methods and properties
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





## Approach to solution

this script creates a `Video` constructor function with basic properties and methods and extends it with a `MusicVideo` constructor, which adds additional functionality like the `play()` method

### 1. **video constructor function**:
- defines two properties: `title` (a string) and `seconds` (a number)
- the constructor accepts a `config` object to allow flexibility when creating instances
- if `title` or `seconds` are missing from the `config` object, default values are used

### 2. **musicvideo constructor function**:
- extends the `Video` constructor using `call()` and adds the `artist` property
- the prototype of `MusicVideo` is set to inherit from `Video`
- similar to `Video`, it accepts a `config` object to allow flexible instance creation

### 3. **watch method**:
- this method is added to the `Video.prototype` and prints a message indicating how many seconds of the video were watched
- if the number of seconds is not provided, it defaults to the full video duration

### 4. **play method**:
- exclusive to `MusicVideo`, this method prints a message showing the title and artist of the music video
- this method is part of the `MusicVideo.prototype` and is available only for instances of `MusicVideo`

### 5. **instance creation**:
- an array `musicVideoCollection` is created to store both `Video` and `MusicVideo` instances
- each instance is created with random values for `title`, `seconds`, and `artist` (for `MusicVideo`), using pre-defined arrays

### 6. **method execution**:
- the `watch()` method is called for each instance in the array
- the `play()` method is called only for instances of `MusicVideo`, using the `instanceof` operator to distinguish between `Video` and `MusicVideo` instances






## files

* index.html
* main.js