(function(window) {
    var byeSpeaker = new Object();
   // var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log("Good Bye " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
