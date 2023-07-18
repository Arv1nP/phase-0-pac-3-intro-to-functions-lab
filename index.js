function shout(string) {
    return string .toUpperCase();
}
function whisper(string) {
    return string .toLowerCase();
  }
function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
 /* function sayHiToHeadphonedRoommate(string){
     return string .toUpperCase();
}
if (sayHiToHeadphonedRoommate = (string.toUpperCase()) ?  ( console.log("YES INDEED!") ) : ( cosole.log("I can't hear you!")));

function sayHiToHeadphonedRoommate(string){
     return string == "Let's have dinner together!";
}
if ( sayHiToHeadphonedRoommate= (string == "Let's have dinner together!") ? (console.log("I would love to!")) : (null));*/
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
     }}