const music = new Audio("./music/diwali.m4a");
let MusicId = 1;
let Image = "./Music-poster/Diwali.jpeg";

let PlayIcon = document.querySelector(".playbtn");
let PlayIcon1 = document.querySelector(".playbtn1");
let PauseIcon = document.querySelector(".pausebtn");
let PauseIcon1 = document.querySelector(".pausebtn1");
let FullScreen = document.querySelector(".fullScreenPlayer");
let FullBtnClose = document.querySelector(".FullCloseBtn");
let FullBtn = document.querySelector(".FullBtn");
let MusicName = document.querySelector(".playerName");
let MusicAlbum = document.querySelector(".playerAlbum");
let MusicImg = document.querySelector("#POSTER");
let MusicName1 = document.querySelector(".FullPlayerName");
let Player = document.querySelector(".player");
let FullBack = document.querySelector(".fullBack");
let NextBtn = document.querySelector(".NextBtn");
let PrevBtn = document.querySelector(".PrevBtn");
let SEEK = document.querySelector(".seek");
let MAIN = document.querySelector(".main");
let MainSection = document.querySelector(".section-main");
let FullPlayerBack = document.querySelector(".fullPlayer");
let MobileMusicImg = document.querySelector(".MobileImg");
let MobileName = document.querySelector(".mobileName");
let MobilePlayer = document.querySelector(".mobile-player");
let MobileAlbum = document.querySelector(".mobileAlbum");
let LyricsSection = document.querySelector(".Lyrics");

PauseIcon.addEventListener("click", () => {
  music.pause();
  PlayIcon.style.display = "block";
  PauseIcon.style.display = "none";
});
PauseIcon1.addEventListener("click", () => {
  music.pause();
  PlayIcon1.style.display = "block";
  PauseIcon1.style.display = "none";
});

function Play() {
  music.play();
  PauseIcon.style.display = "block";
  PlayIcon.style.display = "none";
}
function Pause() {
  music.pause();
  PlayIcon.style.display = "block";
  PauseIcon.style.display = "none";
}
function Play1() {
  music.play();
  PauseIcon1.style.display = "block";
  PlayIcon1.style.display = "none";
}
function Pause1() {
  music.pause();
  PlayIcon1.style.display = "block";
  PauseIcon1.style.display = "none";
}



PrevBtn.addEventListener("click", () => {
  MusicId -= 1;

  PauseIcon.style.display = "block";
  PlayIcon.style.display = "none";
  PauseIcon1.style.display = "block";
  PlayIcon1.style.display = "none";

  const GetSongMusic = TopSongData.filter((filterMusic) => {
    return filterMusic.id == MusicId;
  });
  GetSongMusic.forEach((ResultFilterMusic) => {
    let { Music } = ResultFilterMusic;
    MusicSrc = Music;
    music.src = `${MusicSrc}`;
    music.play();
  });
  let GetEngMusic = EnglishSongData.filter((filterEngMusic) => {
    return filterEngMusic.id == MusicId;
  });
  GetEngMusic.forEach((ResultEngFilterMusic) => {
    let { Music } = ResultEngFilterMusic;
    MusicSrc = Music;
    music.src = `${MusicSrc}`;
    music.play();
  });
  GetSongMusic.forEach((ResultFilterMusicName) => {
    let { SongName, AlbumName, Poster, FullPoster } = ResultFilterMusicName;
    // 1
    MusicName.innerHTML = ResultFilterMusicName.SongName;
    MobileName.innerHTML = ResultFilterMusicName.SongName;
    document.title = ResultFilterMusicName.SongName + "-Audio";
    MobileAlbum.innerHTML = ResultFilterMusicName.AlbumName;
    MusicAlbum.innerHTML = ResultFilterMusicName.AlbumName;
    MusicImg.innerHTML = ResultFilterMusicName.Poster;
    MobileMusicImg.innerHTML = ResultFilterMusicName.Poster;
    FullBack.style.background = ResultFilterMusicName.FullPoster;
    SEEK.style.background = ResultFilterMusicName.FullPoster;
    MAIN.style.background = ResultFilterMusicName.FullPoster;
    LyricsSection.style.background = ResultFilterMusicName.FullPoster;
  });
  GetEngMusic.forEach((ResultEngFilterMusic) => {
    let { SongName, AlbumName, Poster, FullPoster } = ResultEngFilterMusic;
    // 2
    MusicName.innerHTML = ResultEngFilterMusic.SongName;
    MobileName.innerHTML = ResultEngFilterMusic.SongName;
    document.title = ResultEngFilterMusic.SongName + "-Audio";
    MusicAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
    MobileAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
    MusicImg.innerHTML = ResultEngFilterMusic.Poster;
    MobileMusicImg.innerHTML = ResultEngFilterMusic.Poster;
    FullBack.style.background = ResultEngFilterMusic.FullPoster;
    SEEK.style.background = ResultEngFilterMusic.FullPoster;
    MAIN.style.background = ResultEngFilterMusic.FullPoster;
    LyricsSection.style.background = ResultEngFilterMusic.FullPoster;
  });
});
NextBtn.addEventListener("click", () => {
  MusicId++;
  PauseIcon.style.display = "block";
  PlayIcon.style.display = "none";
  PlayIcon1.style.display = "none";
  PauseIcon1.style.display = "block";

  const GetSongMusic = TopSongData.filter((filterMusic) => {
    return filterMusic.id == MusicId;
  });
  GetSongMusic.forEach((ResultFilterMusic) => {
    let { Music } = ResultFilterMusic;
    MusicSrc = Music;
    music.src = `${MusicSrc}`;
    music.play();
  });
  let GetEngMusic = EnglishSongData.filter((filterEngMusic) => {
    return filterEngMusic.id == MusicId;
  });
  GetEngMusic.forEach((ResultEngFilterMusic) => {
    let { Music } = ResultEngFilterMusic;
    MusicSrc = Music;
    music.src = `${MusicSrc}`;
    music.play();
  });
  GetSongMusic.forEach((ResultFilterMusicName) => {
    let { SongName, AlbumName, Poster, FullPoster } = ResultFilterMusicName;
    // 3
    MusicName.innerHTML = ResultFilterMusicName.SongName;
    MobileName.innerHTML = ResultFilterMusicName.SongName;
    document.title = ResultFilterMusicName.SongName + "-Audio";
    MobileAlbum.innerHTML = ResultFilterMusicName.AlbumName;
    MusicAlbum.innerHTML = ResultFilterMusicName.AlbumName;
    MusicImg.innerHTML = ResultFilterMusicName.Poster;
    MobileMusicImg.innerHTML = ResultFilterMusicName.Poster;
    MusicName.innerHTML = ResultFilterMusicName.SongName;
    FullBack.style.background = ResultFilterMusicName.FullPoster;
    SEEK.style.background = ResultFilterMusicName.FullPoster;
    MAIN.style.background = ResultFilterMusicName.FullPoster;
    LyricsSection.style.background = ResultFilterMusicName.FullPoster;
  });
  GetEngMusic.forEach((ResultEngFilterMusic) => {
    let { SongName, AlbumName, Poster, FullPoster } = ResultEngFilterMusic;
    // 4
    MusicName.innerHTML = ResultEngFilterMusic.SongName;
    MobileName.innerHTML = ResultEngFilterMusic.SongName;
    document.title = ResultEngFilterMusic.SongName + "-Audio";
    MusicAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
    MobileAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
    MusicImg.innerHTML = ResultEngFilterMusic.Poster;
    MobileMusicImg.innerHTML = ResultEngFilterMusic.Poster;
    FullBack.style.background = ResultEngFilterMusic.FullPoster;
    SEEK.style.background = ResultEngFilterMusic.FullPoster;
    MAIN.style.background = ResultEngFilterMusic.FullPoster;
    LyricsSection.style.background = ResultEngFilterMusic.FullPoster;
  });
});

Array.from(document.getElementsByClassName("song-play-btn")).forEach(
  (element) => {
    element.addEventListener("click", (getMusic) => {
      MusicId = getMusic.target.id;
      PlayIcon.style.display = "none";
      PauseIcon.style.display = "block";
      PlayIcon1.style.display = "none";
      PauseIcon1.style.display = "block";
      const GetSongMusic = TopSongData.filter((filterMusic) => {
        return filterMusic.id == MusicId;
      });
      console.log(MusicId);
      GetSongMusic.forEach((ResultFilterMusic) => {
        let { Music } = ResultFilterMusic;
        MusicSrc = Music;
        music.src = `${MusicSrc}`;
        music.play();
      });
      let GetEngMusic = EnglishSongData.filter((filterEngMusic) => {
        return filterEngMusic.id == MusicId;
      });
      GetEngMusic.forEach((ResultEngFilterMusic) => {
        let { Music } = ResultEngFilterMusic;
        MusicSrc = Music;
        music.src = `${MusicSrc}`;
        music.play();
      });
      console.log(MusicSrc);
      GetSongMusic.forEach((ResultFilterMusicName) => {
        let { SongName, AlbumName, Poster, FullPoster } = ResultFilterMusicName;
        // 5
        MusicName.innerHTML = ResultFilterMusicName.SongName;
        MobileName.innerHTML = ResultFilterMusicName.SongName;
        document.title = ResultFilterMusicName.SongName + "-Audio";
        MobileAlbum.innerHTML = ResultFilterMusicName.AlbumName;
        MusicAlbum.innerHTML = ResultFilterMusicName.AlbumName;
        MusicImg.innerHTML = ResultFilterMusicName.Poster;
        MobileMusicImg.innerHTML = ResultFilterMusicName.Poster;
        MusicName.innerHTML = ResultFilterMusicName.SongName;
        FullBack.style.background = ResultFilterMusicName.FullPoster;
        SEEK.style.background = ResultFilterMusicName.FullPoster;
        MAIN.style.background = ResultFilterMusicName.FullPoster;
        LyricsSection.style.background = ResultFilterMusicName.FullPoster;
      });
      GetEngMusic.forEach((ResultEngFilterMusic) => {
        let { SongName, AlbumName, Poster, FullPoster } = ResultEngFilterMusic;
        // 6
        MusicName.innerHTML = ResultEngFilterMusic.SongName;
        MobileName.innerHTML = ResultEngFilterMusic.SongName;
        document.title = ResultEngFilterMusic.SongName + "-Audio";
        MusicAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
        MobileAlbum.innerHTML = ResultEngFilterMusic.AlbumName;
        MusicImg.innerHTML = ResultEngFilterMusic.Poster;
        MobileMusicImg.innerHTML = ResultEngFilterMusic.Poster;
        FullBack.style.background = ResultEngFilterMusic.FullPoster;
        SEEK.style.background = ResultEngFilterMusic.FullPoster;
        MAIN.style.background = ResultEngFilterMusic.FullPoster;
        LyricsSection.style.background = ResultEngFilterMusic.FullPoster;
      });
    });
  }
);

let CurrentStart = document.querySelector("#CurrentStart");
let CurrentEnd = document.querySelector("#CurrentEnd");
let seek = document.querySelector(".seek");
let seek11 = document.querySelector(".seek11");
let bar1 = document.querySelector(".bar1");
let bar11 = document.querySelector(".bar11");
let seekControl = document.querySelector(".seekControl");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let MusicCurrent = music.currentTime;
  let MusicDuration = music.duration;
  let Min1 = Math.floor(MusicDuration / 60);
  let Sec1 = Math.floor(MusicDuration % 60);
  let Min2 = Math.floor(MusicCurrent / 60);
  let Sec2 = Math.floor(MusicCurrent % 60);

  if (Sec1 < 10) {
    Sec1 = `0${Sec1}`;
  }

  if (Sec2 < 10) {
    Sec2 = `0${Sec2}`;
  }
  CurrentEnd.innerHTML = `${Min1}:${Sec1}`;
  CurrentStart.innerHTML = `${Min2}:${Sec2}`;

  let ProgressBar = parseInt((MusicCurrent / MusicDuration) * 100);
  seekControl.value = ProgressBar;
  let SeekBar = seekControl.value;
  seek.style.width = `${SeekBar}%`;
  dot.style.left = `${SeekBar}%`;
  seekControl.addEventListener("change", () => {
    music.currentTime = (seekControl.value * music.duration) / 100;
  });
  let SeekBar1 = seekControl.value;
  console.log(SeekBar1);
  seek11.style.width = `${SeekBar1}%`;
});
