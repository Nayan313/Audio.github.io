const TopSongData = [
  {
    id: 1,
    SongName: "Diwali",
    AlbumName: "Apurva",
    Poster: `<img src="./Music-poster/Diwali.jpeg"></img>`,
    FullPoster: "rgba(233,108,123,1)",
    Seek: "rgba(233,108,123,1)",
    Music: "./Music/Diwali.m4a",
  },
  {
    id: 2,
    SongName: "Aaj ke Baad",
    AlbumName: "Stay prem ki khata",
    Poster: `<img src="./Music-poster/aaj ke baad.jpeg"></img>`,
    FullPoster: "rgb(235,172,99)",
    Seek: "rgb(235,172,99)",
    Music: "./Music/Aaj Ke Baad.m4a",
  },
  {
    id: 3,
    SongName: "Apna Bana",
    AlbumName: "Bhediya",
    Poster: `<img src="./Music-poster/apna.jpeg"></img>`,
    FullPoster: "RGB(9 145 230)",
    Seek: "RGB(9 145 230)",
    Music: "./Music/Apna Bana Le.m4a",
  },
  {
    id: 4,
    SongName: "Chaleya",
    AlbumName: "Jawaan",
    Poster: `<img src="./Music-poster/chaleya.jpeg"></img>`,
    FullPoster: "rgb(196,95,98)",
    Seek: "rgb(196,95,98)",
    Music: "./Music/Chaleya.m4a",
  },
  {
    id: 5,
    SongName: "Kesariya",
    AlbumName: "Bhrmastra",
    Poster: `<img src="./Music-poster/kesariya.jpeg"></img>`,
    FullPoster: "rgb(226,137,72)",
    Seek: "rgb(226,137,72)",
    Music: "./Music/Kesariya.m4a",
  },
  {
    id: 6,
    SongName: "Raataan Lambiyan",
    AlbumName: "Shershah",
    Poster: `<img src='./Music-poster/Raataan Lambiyan.jpeg'></img>`,
    FullPoster: "rgb(86,42,33)",
    Seek: "rgb(86,42,33)",
    Music: "./Music/Raataan Lambiyan.m4a",
  },
];

const EnglishSongData = [
  {
    id: 7,
    SongName: "Closer",
    AlbumName: "Closer",
    FullPoster: "rgb(154,141,134)",
    Seek: "rgb(154,141,134)",
    Poster: `<img src="./Music-poster/closer.jpeg"></img>`,
    Music: "./Music/Closer.m4a",
  },
  {
    id: 8,
    SongName: "Let me love",
    AlbumName: "let Me",
    FullPoster: "rgb(225,187,121)",
    Seek: "rgb(225,187,121)",
    Poster: `<img src="./Music-poster/let me.jpeg"></img>`,
    Music: "./Music/Let Me Love You.m4a",
  },
  {
    id: 9,
    SongName: "On My Way",
    AlbumName: "Allen Walker",
    FullPoster: "rgb(26,68,100)",
    Seek: "rgb(26 68 100)",
    Poster: `<img src="./Music-poster/on my way.jpeg"></img>`,
    Music: "./Music/On My Way.m4a",
  },
];







let songOT = "";
for (let item of TopSongData) {
  songOT += `
    <div class="song-box">
                <div class="song-box-img-section" >
                    ${item.Poster}</div>
                <div class="song-box-detail">
                    <div class="song-inner-box-details">
                        <h4 class="song-box-name">${item.SongName}</h4>
                        <p class="song-box-singer">${item.AlbumName}</p>
                    </div>
                </div>
                <div class="song-play-btn" id="${item.id}">
                <div class="play-button" id="${item.id}" >
                    <img src="./contant/svg/play.svg" alt="" id="${item.id}">
                </div>
            </div>
    </div>`;
}

document.querySelector(".top-song").innerHTML = songOT;
document.querySelector(".new-released").innerHTML = songOT;
document.querySelector(".hindi-main-part").innerHTML = songOT;



let EnglishOutput = "";
for (let item of EnglishSongData) {
  EnglishOutput += `
    <div class="song-box">
                <div class="song-box-img-section" >
                    ${item.Poster}</div>
                <div class="song-box-detail">
                    <div class="song-inner-box-details">
                        <h4 class="song-box-name">${item.SongName}</h4>
                        <p class="song-box-singer">${item.AlbumName}</p>
                    </div>
                </div>
                <div class="song-play-btn" id="${item.id}">
                <div class="play-button" id="${item.id}" >
                    <img src="./contant/svg/play.svg" alt="" id="${item.id}">
                </div>
            </div>
    </div>`;
}

document.querySelector(".english-main-part").innerHTML = EnglishOutput;



let LibraryOutput = "";
for (let item of TopSongData) {
  LibraryOutput += `<div class="library-song">
  <div alt="img" class="playerImg">
  ${item.Poster}</div>
  <div class="info-player-song">
  <p class="player-name">${item.SongName}</p>
  <p class="player-album">${item.AlbumName}</p>
  </div>
  </div>`;
}
document.querySelector(".library-section-song").innerHTML = LibraryOutput;



// ${item.title}
// let http = new XMLHttpRequest();

// http.open('get', 'https://nayan313.github.io/music-api/music.json', true);

// http.send();

// http.onload = function(){

//    if(this.readyState == 4 && this.status == 200){

//       let products = JSON.parse(this.responseText);

//       console.log(products)
// let output = "";
// for (let item of products) {
//   output += `
//     <div class="song-box">
//                 <div class="song-box-img-section">
//                     ${item.Poster}                </div>
//                 <div class="song-box-detail">
//                     <div class="song-inner-box-details">
//                         <h4 class="song-box-name">${item.SongName}</h4>
//                         <p class="song-box-singer">${item.AlbumName}</p>
//                     </div>
//                 </div>
//                 <div class="song-play-btn" id="${item.id}">
//                     <div class="play-button" id="${item.id}">
//                         <img src="./contant/svg/play.svg" alt="" id="${item.id}">
//                     </div>
//                 </div>
//     </div>`;
// }

// document.querySelector(".top-song").innerHTML = output;
// document.querySelector(".new-released").innerHTML = output;
// document.querySelector(".hindi-main-part").innerHTML = output;


//    }

// }
