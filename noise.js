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

  $('body').keydown(function(event) {
    if (event.key == 'c')
    playC();
  });

  $('body').keydown(function(event) {
    if (event.key == 'd')
    playD();
  });

  $('body').keydown(function(event) {
    if (event.key == 'e')
    playE();
  });

  $('body').keydown(function(event) {
    if (event.key == 'f')
    playF();
  });

  $('body').keydown(function(event) {
    if (event.key == 'g')
    playG();
  });

  $('body').keydown(function(event) {
    if (event.key == 'a')
    playA();
  });

  $('body').keydown(function(event) {
    if (event.key == 'b')
    playB();
  });
});
