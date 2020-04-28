/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Praharsha", "Johnson", "Jerome Taylor", "Jason Roy", "Virat Kohli", "Mahesh Babu", "Dale Steyn", "SRH", "Brain Laura", "Jimmy Anderson"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
