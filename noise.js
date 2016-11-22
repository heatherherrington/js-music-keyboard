$(document).ready( function() {

  $('.instrument').on('click', 'button', function() {
    var playClass = this.className.slice(-1);
    var playId = '#' + playClass + 'Audio';
    var note = $(playId)[0];
    note.pause();
    note.currentTime = 0;
    note.play();
  });

  // Once a button has focus, the default action is, on keyup for 'spacebar', to play that note.
  // This also happens on keydown 'return'. I tried to overcome this by doing both the function
  // below and doing ' && event.which != 13' in the keydown functions below - neither worked.
  // So, it will play the sound both when the required letter key is pressed, and when spacebar
  // and return are pressed, depending on which button has focus.
  // This annoys me, but I couldn't figure out how to fix it.

  // var spaceBar = function() {
  //   $('body').keyup(function(event) {
  //     if (event.which == 32)
  //     preventDefault();
  //   });
  // };

 $('body').keydown(function(event) {
   var playClass = event.key;
   var playId = '#' + playClass + 'Audio';
   var note = $(playId)[0];
   note.pause();
   note.currentTime = 0;
   note.play();
 });
});
