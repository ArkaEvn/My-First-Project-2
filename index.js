let lagu = [
    ["L'AMOUR DE MA VIE", 'Billie Eilish', '327K', '87M', 'BE.jpeg', 'background: linear-gradient(#102840, #061019)', 'Billie Eilish - LAMOUR DE MA VIE (Official Lyric Video).mp3', 'background-color: #23313e;'],
    ['Fly Me To The Moon', 'Frank Sinatra', '2.2M', '224M', 'FS.jpeg', 'background: linear-gradient(#0b2a3f, #041119)', 'Fly Me To The Moon (2008 Remastered).mp3', 'background-color: #1f313d;'],
    ['When I Was Your Man', 'Bruno Mars', '2.4M', '2.4B', 'BM.jpg', 'background: linear-gradient(#400a0a, #180403);', 'Bruno Mars - When I Was Your Man.mp3', 'background-color: #3d1f1f;'],
];


let konten = document.getElementById("container");

for (let i = 0; i < lagu.length; i++) {
    let judul = lagu[i][0]
    let artis = lagu[i][1]
    let likes = lagu[i][2]
    let plays = lagu[i][3]
    let gambar = lagu[i][4]
    let bg = lagu[i][5]
    let song = lagu[i][6]
    let bgButton = lagu[i][7]


let card = `    <div class="lagu" style="${bg}">
            <img src="${gambar}" alt="" srcset="">
            <div class="title">
                <h2>${judul}</h2>
            <small>
                ${artis}
            </small>
            </div>
            <div class="bawah">
                <div class="kanan" style="${bgButton}"><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"/></svg>${likes}</div>
                <div class="kiri" style="${bgButton}"><svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"/></svg>${plays}</div>
            </div>
            <div class="song">
                 <audio class="audioplay" src="${song}" type="audio/mp3"></audio>
                <button class="buttonplay"><svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg></button>
            </div>
    </div>
 `;
 
konten.innerHTML += card;
};

//!!!!!!!CHAT GPT AREA!!!!!!! 
// (YANG BAWAH INI SAYA ISENG AJA, TAPI KARENA BELUM PAHAM MAKANYA DIBIKININ SAMA CHATGPT)
// BUTTON UNTUK PLAY LAGU


// Setelah semua card dimasukin
setTimeout(() => {
    const buttons = document.querySelectorAll('.buttonplay');
    const audios = document.querySelectorAll('.audioplay');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const audio = audios[index];

            // Pause semua audio kecuali yang diklik
            audios.forEach((a, i) => {
                if (i !== index) {
                    a.pause();
                    a.currentTime = 0;
                    buttons[i].innerText = 'p';
                }
            });

            // Toggle play/pause
            if (audio.paused) {
                audio.play();
                btn.innerHTML = 'p'; 
            } else {
                audio.pause();
                btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
            }

            // Balikin tombol ke ▶️ pas lagu selesai otomatis
            audio.onended = () => {
                btn.innerHTML = 'p';
            };
        });
    });
}, 100);

