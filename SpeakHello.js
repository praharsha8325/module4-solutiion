(function(window) {
    var helloSpeaker = new Object();
  //  var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log("Hello " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
