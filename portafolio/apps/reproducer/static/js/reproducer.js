'use strict'

var reproducer = document.querySelector('#audio');
var playList = [
    ['../static/audios/Cheka_Wey.mp3', 
    'Cheka Wey', 'Volumen Prohibido', 'Cartel de Santa', 
    '03:12', '../static/img/cover/cover0.png'],
    ['../static/audios/DOUBLE_CHERRY_BLOSSOM.mp3',
    'DOUBLE CHERRY BLOSSOM', 'ULTRA DANCEHALL', 'Nachi',
    '03:52', '../static/img/cover/cover1.png'],
    ['../static/audios/One_More_Night.mp3',
    'One More Night', 'Overxposed', 'Maroon5', 
    '03:39', '../static/img/cover/cover2.png'],
    ['../static/audios/Rocking_to_the_Beat(110 Mix).mp3',
    'Rocking to the Beat(110 Mix)', 'Holix', 'C-show',
    '03:51', '../static/img/cover/cover3.png'],
    ['../static/audios/Whistle.mp3',
    'Whistle', 'Wild Ones', 'Flo-Rida',
    '03:45', '../static/img/cover/cover4.png']
];
var counter = 0;
//Init reproducer
reproducer.load(playList[counter][0]);
document.querySelector('#origin').src = playList[counter][0];

reproducer.addEventListener('ended', ()=> {
    if(counter < 3) {
        counter+=1;
        reproducer.load(playList[counter][0]);
        document.querySelector('#origin').src = playList[counter][0];
        setInfo(counter);
        reproducer.play();
    } else {
        reproducer.pause();
    }
});
function setInfo(counter) {
    $('#info-name').text('Nombre: '+playList[counter][1]);
    $('#info-album').text('Album: '+playList[counter][2]);
    $('#info-artist').text('Artista: '+playList[counter][3]);
    $('#info-duration').text('Duración: '+playList[counter][4]);
    document.querySelector('#cover-img').src = '' + playList[counter][5];
    let track = ('#track'+counter);
    $('.track').css({
        'color':'white',
        'border':'none'
    });
    $('' + track).css({
        'color':'red',
        'border':'solid purple',
        'padding-top':'10px'
    });
}
function selectTrack(count) {
    counter = count;
    reproducer.load(playList[counter][0]);
    document.querySelector('#origin').src = playList[counter][0];
    document.querySelector('#play-img').src = "../static/img/icons/btn-pause.png";
    setInfo(counter);
    reproducer.play();
}

$('#play_btn').click(function () { 
    if (reproducer.paused == true) {
        document.querySelector('#play-img').src = "../static/img/icons/btn-pause.png";
        reproducer.play();
    } else {
        document.querySelector('#play-img').src = "../static/img/icons/btn-play.png";
        reproducer.pause();
    }
    setInfo(counter);
});

$('#left_btn').click(function () { 
    if(counter > 0) {
        counter-=1;
        reproducer.load(playList[counter][0]);
        document.querySelector('#origin').src = playList[counter][0];
        document.querySelector('#play-img').src = "../static/img/icons/btn-pause.png";
        setInfo(counter);
        reproducer.play();
    }
});

$('#right_btn').click(function () { 
    if(counter < 4) {
        counter+=1;
        reproducer.load(playList[counter][0]);
        document.querySelector('#origin').src = playList[counter][0];
        document.querySelector('#play-img').src = "../static/img/icons/btn-pause.png";
        setInfo(counter);
        reproducer.play();
    }
});

$('#volumen').click(function () {
    volumen = this.value;
    audio.volume = volumen;
});