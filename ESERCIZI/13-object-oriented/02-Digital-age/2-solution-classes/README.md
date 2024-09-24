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






## Approach to Solution

this script implements a `Video` class with basic properties and methods and a `MusicVideo` class that extends `Video`, adding additional functionality like the `play()` method.

### 1. **Video Class**:
- defines two properties: `title` (a string) and `seconds` (a number).
- the constructor accepts a `config` object to allow flexibility when creating instances.
- if `title` or `seconds` are missing from the `config` object, default values are used.

### 2. **MusicVideo Class**:
- extends the `Video` class using `super()` and adds the `artist` property.
- the constructor also accepts a `config` object for flexible instance creation.

### 3. **Watch Method**:
- this method is added to the `Video` class and prints a message indicating how many seconds of the video were watched.
- if the number of seconds is not provided, the full video duration is used.

### 4. **Play Method**:
- exclusive to `MusicVideo`, this method prints a message showing the title and artist of the music video.
- it is part of the `MusicVideo` class and available only for instances of `MusicVideo`.

### 5. **Instance Creation**:
- an array `musicVideoCollection` is created to store both `Video` and `MusicVideo` instances.
- each instance is created with random values for `title`, `seconds`, and `artist` (for `MusicVideo`), using predefined arrays.

### 6. **Method Execution**:
- the `watch()` method is called for each instance in the array.
- the `play()` method is called only for instances of `MusicVideo`, using the `instanceof` operator to distinguish between `Video` and `MusicVideo` instances.





## files

* index.html
* main.js