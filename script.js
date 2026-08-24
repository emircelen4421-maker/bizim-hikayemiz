const LETTER = `Bir yıl önce hayatıma girdiğinde, bugün seni bu kadar çok seveceğimi bilmiyordum.

Seninle geçen zaman bana şunu öğretti; bazı insanlar hayatına sadece girmez, hayatının bir parçası olur. Sen de benim için tam olarak öyle oldun.

Birlikte geçirdiğimiz her an, ettiğimiz her sohbet, attığın en küçük mesaj bile bende ayrı bir iz bıraktı. Bazen sadece senin yanımda olduğunu bilmek bile yetiyor.

İyi ki o gün seni tanımışım. İyi ki seni seçmişim, iyi ki sen de beni seçmişsin.

Bu sadece ilk yılımız. Ben daha seninle yaşayacağımız nice güzel anıyı şimdiden merak ediyorum.

İlk yılımız kutlu olsun sevgilim. ♥
Seni gerçekten çok seviyorum.

İyi ki varsın. İyi ki biz varız.
`;

const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);


/* =========================
   LOADER
========================= */

function removeLoader() {
    const loader = $("#loader");

    if (!loader) return;

    loader.style.opacity = "0";

    setTimeout(() => {
        if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader);
        }
    }, 1000);
}


/* Sayfa tamamen açılınca loader'ı kaldır */
window.addEventListener("load", () => {
    setTimeout(removeLoader, 700);
});


/* Herhangi bir yükleme sorunu olsa bile
   2 saniyeden fazla loader'da kalmasın */
setTimeout(removeLoader, 2500);


/* =========================
   ELEMENTLER
========================= */

const openBtn = $("#openBtn");
const continueBtn = $("#continueBtn");
const story = $("#story");
const memories = $("#memories");

const musicBtn = $("#musicBtn");
const music = $("#bgMusic");

const typedEl = $("#typed");
const gallery = $("#gallery");
const replay = $("#replay");


/* =========================
   MÜZİK
========================= */

async function startMusic() {

    if (!music) return;

    try {

        music.volume = 0.7;

        await music.play();

        if (musicBtn) {
            musicBtn.classList.add("playing");
        }

    } catch (error) {

        console.log("Müzik başlatılamadı:", error);

    }
}


/* =========================
   MÜZİK BUTONU
========================= */

if (musicBtn) {

    musicBtn.addEventListener("click", async () => {

        if (!music) return;

        if (music.paused) {

            await startMusic();

        } else {

            music.pause();

            musicBtn.classList.remove("playing");

        }

    });

}


/* =========================
   HİKÂYEMİZİ AÇ
========================= */

let opened = false;

if (openBtn) {

    openBtn.addEventListener("click", async (event) => {

        event.preventDefault();

        /* Butona basıldığı için müzik başlayabilir */
        await startMusic();


        /* Mektuba geç */

        if (story) {

            story.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        /* Mektubu yazdır */

        setTimeout(() => {

            typeLetter();

        }, 900);

    });

}


/* =========================
   MEKTUP
========================= */

let typed = false;

function typeLetter() {

    if (typed || !typedEl) return;

    typed = true;

    typedEl.textContent = "";

    let i = 0;


    function write() {

        if (i >= LETTER.length) return;

        typedEl.textContent += LETTER[i];

        const character = LETTER[i];

        i++;


        setTimeout(
            write,
            character === "\n" ? 250 : 18
        );

    }


    write();

}


/* =========================
   ANILARA GEÇ
========================= */

if (continueBtn && memories) {

    continueBtn.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        memories.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


/* =========================
   FOTOĞRAFLAR
========================= */

const names = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg",
    "foto10.jpg",
    "foto11.jpg",
    "foto12.jpg"
];


const captions = [
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥",
    "♥"
];


function loadGallery() {

    if (!gallery) return;

    gallery.innerHTML = "";


    names.forEach((name, index) => {

        const photo = document.createElement("div");

        photo.className = "photo";


        const image = document.createElement("img");

        image.src = "photos/" + name;

        image.alt = "Bizim anımız";


        image.onload = () => {

            setTimeout(() => {

                photo.classList.add("show");

            }, index * 120);

        };


        image.onerror = () => {

            photo.remove();

        };


        const caption = document.createElement("div");

        caption.className = "caption";

        caption.textContent =
            captions[index] || "♥";


        photo.appendChild(image);

        photo.appendChild(caption);

        gallery.appendChild(photo);

    });

}


loadGallery();


/* =========================
   NAV
========================= */

$$(".nav-dots button").forEach((button) => {

    button.addEventListener("click", () => {

        const target = button.dataset.target;

        const section = $("#" + target);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   SECTION ANİMASYONLARI
========================= */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.35
    }
);


$$("section").forEach((section) => {

    observer.observe(section);

});


/* =========================
   UÇAN KALPLER
========================= */

function createHeart() {

    const hearts = $("#hearts");

    if (!hearts) return;


    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.textContent =
        Math.random() > 0.25 ? "♥" : "♡";


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        10 + Math.random() * 18 + "px";


    heart.style.animationDuration =
        7 + Math.random() * 7 + "s";


    hearts.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createHeart, 1000);


/* =========================
   PARILTILAR
========================= */

const sparkles = $("#sparkles");

if (sparkles) {

    for (let i = 0; i < 25; i++) {

        const sparkle = document.createElement("i");

        sparkle.className = "spark";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.animationDelay =
            Math.random() * 2 + "s";

        sparkles.appendChild(sparkle);

    }

}


/* =========================
   BAŞTAN İZLE
========================= */

if (replay) {

    replay.addEventListener("click", () => {

        typed = false;

        if (typedEl) {
            typedEl.textContent = "";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {

            startMusic();

        }, 500);

    });

}
