$(document).ready( function() {

  var audioC = $('#cAudio')[0];
  var audioD = $('#dAudio')[0];
  var audioE = $('#eAudio')[0];
  var audioF = $('#fAudio')[0];
  var audioG = $('#gAudio')[0];
  var audioA = $('#aAudio')[0];
  var audioB = $('#bAudio')[0];

  var playC = function() {
    audioC.pause();
    audioC.currentTime = 0;
    audioC.play();
  };

  var playD = function() {
    audioD.pause();
    audioD.currentTime = 0;
    audioD.play();
  };

  var playE = function() {
    audioE.pause();
    audioE.currentTime = 0;
    audioE.play();
  };

  var playF = function() {
    audioF.pause();
    audioF.currentTime = 0;
    audioF.play();
  };

  var playG = function() {
    audioG.pause();
    audioG.currentTime = 0;
    audioG.play();
  };

  var playA = function() {
    audioA.pause();
    audioA.currentTime = 0;
    audioA.play();
  };

  var playB = function() {
    audioB.pause();
    audioB.currentTime = 0;
    audioB.play();
  };

  $('.c').click(function() {
    playC();
  });

  $('.d').click(function() {
    playD();
  });

  $('.e').click(function() {
    playE();
  });

  $('.f').click(function() {
    playF();
  });

  $('.g').click(function() {
    playG();
  });

  $('.a').click(function() {
    playA();
  });

  $('.b').click(function() {
    playB();
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
