let active_play = document.querySelector(".active_play"),
active_music = document.querySelector(".active_music"),
title = document.querySelector(".promo_title"),
forward_play = document.querySelector(".forward_play"),
img = document.querySelector(".promo__player_img img"),
item_name = document.querySelectorAll(".promo__item_name"),
item_play = document.querySelectorAll(".promo__item_play"),
audio = document.querySelectorAll(".promo__item_box audio"),
promo__item_img = document.querySelectorAll(".promo__item_img"),
item_img = document.querySelectorAll(".promo__item_img img"),
backward_play = document.querySelector(".backward_play")

let counter = 0;
const music_list = [];

audio.forEach((item, index) => {
    console.log(item.src);
    
    let info = {
        music_src: item.src
    }
    music_list.push(info);
});

active_play.addEventListener("click", () => {    
    if(active_music.paused) {
        active_play.src = "icons/pause-circle-solid.svg";
        active_music.play();
    } else {
        active_play.src = "icons/play-circle-solid.svg";
        active_music.pause();
    }
});

forward_play.addEventListener("click", () => {
    counter++;
    if(counter >= music_list.length) {
        counter = 0;
    }
    console.log(music_list[counter].music_src);
    title.textContent = item_name[counter].textContent;
    active_music.src = music_list[counter].music_src;
    active_music.play();
    if(active_play.src == "icons/play-circle-solid.svg") {
        active_play.src = "icons/pause-circle-solid.svg";
    } else {
        active_play.src = "icons/play-circle-solid.svg";
    }
})

backward_play.addEventListener("click" , () => {
    counter--;
    if(counter < 0) {
        counter = music_list.length - 1;
    }
    console.log(music_list[counter].music_src);
    title.textContent = item_name[counter].textContent;
    active_music.src = music_list[counter].music_src;
    active_music.play();
    if(active_play.src == "icons/pause-circle-solid.svg") {
        active_play.src = "icons/play-circle-solid.svg";
    } else {
        active_play.src = "icons/pause-circle-solid.svg";
    }
})