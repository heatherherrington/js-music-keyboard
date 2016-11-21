$(document).ready( function() {

  var audioC = $('#cAudio')[0];
  var audioD = $('#dAudio')[0];
  var audioE = $('#eAudio')[0];
  var audioF = $('#fAudio')[0];
  var audioG = $('#gAudio')[0];
  var audioA = $('#aAudio')[0];
  var audioB = $('#bAudio')[0];

  var aC = function() {
    audioC.pause();
    audioC.currentTime = 0;
    audioC.play();
  };

  $('.c').click(function() {
    aC();
  });

  $('.d').click(function() {
    audioD.pause();
    audioD.currentTime = 0;
    audioD.play();
  });

  $('.e').click(function() {
    audioE.pause();
    audioE.currentTime = 0;
    audioE.play();
  });

  $('.f').click(function() {
    audioF.pause();
    audioF.currentTime = 0;
    audioF.play();
  });

  $('.g').click(function() {
    audioG.pause();
    audioG.currentTime = 0;
    audioG.play();
  });

  $('.a').click(function() {
    audioA.pause();
    audioA.currentTime = 0;
    audioA.play();
  });

  $('.b').click(function() {
    audioB.pause();
    audioB.currentTime = 0;
    audioB.play();
  });

  $('body').keydown(function(event) {
    if (event.which == 'a') //'which' is better than 'keyCode' because 'which' also works with mouse; 32 = space; 13 = enter
    audioA.pause();
    audioA.currentTime = 0;
    audioA.play();
  });
});
