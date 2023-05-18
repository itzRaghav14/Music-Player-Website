// Setup DOM
const music = new Audio('../audio/7.mp3');

const songs = [
    {
        id : 1,
        songName : `
            <span> On My Way </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Alan Walker
            </span>
        `,
        poster : '../img/1.jpg'
    },
    {
        id : 2,
        songName : `
            <span> Alan Walker - Fade </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Alan Walker
            </span>
        `,
        poster : '../img/2.jpg'
    },
    {
        id : 3,
        songName : `
            <span> Cartoon - On & On </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Daniel Levi
            </span>
        `,
        poster : '../img/3.jpg'
    },
    {
        id : 4,
        songName : `
            <span> Warriyo - Mortals </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Mortals
            </span>
        `,
        poster : '../img/4.jpg'
    },
    {
        id : 5,
        songName : `
            <span> Ertugrul Gazi </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Ertugrul
            </span>
        `,
        poster : '../img/5.jpg'
    },
    {
        id : 6,
        songName : `
            <span> Electronic Music </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Electro
            </span>
        `,
        poster : '../img/6.jpg'
    },
    {
        id : 7,
        songName : `
            <span> Agar Tum Sath Ho </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Tamashaa
            </span>
        `,
        poster : '../img/7.jpg'
    },
    {
        id : 8,
        songName : `
            <span> Suna Hai </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Neha Kakkar
            </span>
        `,
        poster : '../img/8.jpg'
    },
    {
        id : 9,
        songName : `
            <span> Dilber </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Satyamev Jayate
            </span>
        `,
        poster : '../img/9.jpg'
    },
    {
        id : 10,
        songName : `
            <span> Duniya </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Luka Chuppi
            </span>
        `,
        poster : '../img/10.jpg'
    },
    {
        id : 11,
        songName : `
            <span> Lagdi Lahore Di </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Street Dancer 3D
            </span>
        `,
        poster : '../img/11.jpg'
    },
    {
        id : 12,
        songName : `
            <span> Putt Jaat Da </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Putt Jatt Da
            </span>
        `,
        poster : '../img/12.jpg'
    },
    {
        id : 13,
        songName : `
            <span> Baarishein </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Atif Aslam
            </span>
        `,
        poster : '../img/13.jpg'
    },
    {
        id : 14,
        songName : `
            <span> Vaaste </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Dhvani Bhanushali
            </span>
        `,
        poster : '../img/14.jpg'
    },
    {
        id : 15,
        songName : `
            <span> Lut Gaye </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Jubin Nautiyal
            </span>
        `,
        poster : '../img/15.jpg'
    },
    {
        id : 16,
        songName : `
            <span> Tu Meri Zindagi Hai Tu </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Jubin Nautiyal
            </span>
        `,
        poster : '../img/16.jpg'
    },
    {
        id : 17,
        songName : `
            <span> Batao Yad Hai Tumko Jab Vo Dil Ko Churaya Tha </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Rahat Fateh Ali
            </span>
        `,
        poster : '../img/17.jpg'
    },
    {
        id : 18,
        songName : `
            <span> Mere Dhol Judaiyan </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                Ali Sethi Seha
            </span>
        `,
        poster : '../img/18.jpg'
    },
    {
        id : 19,
        songName : `
            <span> Ek Munde Pagal Ne Sare </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                AP Dhillon
            </span>
        `,
        poster : '../img/19.jpg'
    },
    {
        id : 20,
        songName : `
            <span> Dunny 82K </span> <br> 
            <span class="subtitle text-[0.75rem] text-complementary-1">
                AP Dhillon
            </span>
        `,
        poster : '../img/20.jpg'
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


// Master Play

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

function playMusic() {
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
}

function pauseMusic() {
    music.pause();
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');
}

masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0) {
        playMusic();
        wave.classList.add('active-wave');
    } else {
        pauseMusic();
        wave.classList.remove('active-wave');
    }
});

let posterMasterPlay = document.getElementById('poster-master-play');
let title = document.getElementById('title');
let index = 0;

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `../audio/${index}.mp3`;
        posterMasterPlay.src = `../img/${index}.jpg`;
        playMusic();
        
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let songName = elss.songName;
            title.innerHTML = songName;
        });

    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

function timeToStringTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if(seconds < 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
}

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    currentStart.innerText = timeToStringTime(music_curr);
    currentEnd.innerText = timeToStringTime(music_dur);

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});

seek.addEventListener('change', () => {
    music.currentTime = seek.value / 100 * music.duration;
});

let vol = document.getElementById('vol');
let volIcon = document.getElementById('vol-icon');
let volBar = document.getElementById('vol-bar');
let volDot = document.getElementById('vol-dot');

vol.addEventListener('change', () => {
    if(vol.value == 0) {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-off-fill');
    } else if(vol.value > 50) {
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
        volIcon.classList.add('bi-volume-up-fill');
    } else {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-off-fill');
        volIcon.classList.add('bi-volume-down-fill');
    }
    volBar.style.width = `${vol.value}%`;
    volDot.style.left = `${vol.value}%`;
    music.volume = vol.value / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index = (index - 2 + songs.length) % songs.length + 1;
    music.src = `../audio/${index}.mp3`;
    posterMasterPlay.src = `../img/${index}.jpg`;
    playMusic();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let songName = elss.songName;
        title.innerHTML = songName;
    });

});

next.addEventListener('click', () => {
    index = (index) % songs.length + 1;
    music.src = `../audio/${index}.mp3`;
    posterMasterPlay.src = `../img/${index}.jpg`;
    playMusic();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let songName = elss.songName;
        title.innerHTML = songName;
    });
});

// Popular Songs Left Right

let pop_song_left = document.getElementById('pop-song-left');
let pop_song_right = document.getElementById('pop-song-right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

// Popular Artists Left Right

let pop_art_left = document.getElementById('pop-art-left');
let pop_art_right = document.getElementById('pop-art-right');
let item = document.getElementsByClassName('item')[0];

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
