const allMusic = [
    {
        name : "Boom Bap Flick",
        artist : "Quincas Moreira",
        img : "music_view01",
        audio : "music_audio01"
    },{
        name : "It Was a Time",
        artist : "TrackTribe",
        img : "music_view02",
        audio : "music_audio02"
    },{
        name : "Emotional Mess",
        artist : "Amy Lynn & the Honey Men",
        img : "music_view03",
        audio : "music_audio03"
    },{
        name : "Forever Young",
        artist : "Otis McDonald",
        img : "music_view04",
        audio : "music_audio04"
    },{
        name : "I Wish I Knew",
        artist : "Otis McDonald",
        img : "music_view05",
        audio : "music_audio05"
    },{
        name : "Ice & Fire",
        artist : "King Canyon",
        img : "music_view06",
        audio : "music_audio06"
    },{
        name : "Jingle Bells",
        artist : "DJ Williams",
        img : "music_view07",
        audio : "music_audio07"
    },{
        name : "Mulholland",
        artist : "King Canyon",
        img : "music_view08",
        audio : "music_audio08"
    },{
        name : "Spooky Boop",
        artist : "Otis McDonald",
        img : "music_view09",
        audio : "music_audio09"
    },{
        name : "We Cruisin'",
        artist : "Otis McDonald",
        img : "music_view10",
        audio : "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");

let musicIndex = 2; // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             // 뮤직 제목
    musicArtist.innerText = allMusic[num-1].artist;         // 뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       // 뮤직 이미지
    musicView.alt = allMusic[num-1].name;                   // 뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`;  // 뮤직 오디오 파일
};

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();
});