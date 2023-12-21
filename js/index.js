function PrintFn() {
  window.print();
}

// swiper function
const LeftIcon = document.querySelector(".left-icon");
const RightIcon = document.querySelector(".right-icon");
const CardSection = document.querySelector(".new-card-section");

LeftIcon.addEventListener("click", () => {
  CardSection.scrollLeft -= 350;
});
RightIcon.addEventListener("click", () => {
  CardSection.scrollLeft += 350;
});

// selection button

const TopBtn = document.getElementById("TopBtn-active");
const NewBtn = document.getElementById("NewBtn-active");
const HindiBtn = document.getElementById("HindiBtn-active");
const EnglishBtn = document.getElementById("EnglishBtn-active");

const TopSong = document.querySelector(".top-song");
const NewReleased = document.querySelector(".new-released");
const HindiPart = document.querySelector(".hindi-main-part");
const EnglishPart = document.querySelector(".english-main-part");

function TopSongActiveBtn() {
  TopSong.style.display = "flex";
  NewReleased.style.display = "none";
  HindiPart.style.display = "none";
  EnglishPart.style.display = "none";
  TopBtn.classList.add("choose-btn");
  NewBtn.classList.remove("choose-btn");
  HindiBtn.classList.remove("choose-btn");
  EnglishBtn.classList.remove("choose-btn");
}

function NewReleasedActiveBtn() {
  TopSong.style.display = "none";
  NewReleased.style.display = "flex";
  HindiPart.style.display = "none";
  EnglishPart.style.display = "none";
  TopBtn.classList.remove("choose-btn");
  NewBtn.classList.add("choose-btn");
  HindiBtn.classList.remove("choose-btn");
  EnglishBtn.classList.remove("choose-btn");
}

function HindiPartActiveBtn() {
  TopSong.style.display = "none";
  NewReleased.style.display = "none";
  HindiPart.style.display = "flex";
  EnglishPart.style.display = "none";
  TopBtn.classList.remove("choose-btn");
  NewBtn.classList.remove("choose-btn");
  HindiBtn.classList.add("choose-btn");
  EnglishBtn.classList.remove("choose-btn");
}

function EnglishPartActiveBtn() {
  TopSong.style.display = "none";
  NewReleased.style.display = "none";
  HindiPart.style.display = "none";
  EnglishPart.style.display = "flex";
  TopBtn.classList.remove("choose-btn");
  NewBtn.classList.remove("choose-btn");
  HindiBtn.classList.remove("choose-btn");
  EnglishBtn.classList.add("choose-btn");
}

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("title").innerHTML = greet;

function FullPlayer() {
  FullScreen.style.zIndex = "99";
  FullScreen.style.transform = "translateX(0%)";
  FullBtn.style.display = "none";
  FullBtnClose.style.display = "inline";
  MainSection.style.opacity = "0";
  MainSection.style.position = "fixed";
  Player.classList.add("fullPlayer");
  FullPlayerBack.style.background = "transparent";
}

function FullPlayerClose() {
  FullScreen.style.zIndex = "-99";
  FullScreen.style.transform = "translateX(-130%)";
  FullBtn.style.display = "inline";
  FullBtnClose.style.display = "none";
  MainSection.style.opacity = "1";
  MainSection.style.position = "absolute";
  Player.classList.remove("fullPlayer");
  Player.style.display = "none";
  MobilePlayer.style.display = "block";
}

let FullFunction = document.querySelector(".mobile-player");

FullFunction.addEventListener("click", () => {
  FullScreen.style.zIndex = "99";
  FullScreen.style.transform = "translateX(0%)";
  FullBtn.style.display = "none";
  Player.style.display = "flex";
  FullBtnClose.style.display = "inline";
  MainSection.style.opacity = "0";
  MainSection.style.position = "fixed";
  Player.classList.add("fullPlayer");
  MobilePlayer.style.display = "none";
  FullPlayerBack.style.background = "transparent";
});
  