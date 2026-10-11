let currentChapter = 0;

const chapters = document.querySelectorAll(".chapter");

const chapterNumber = document.getElementById("chapterNumber");

const backBtn = document.getElementById("backBtn");

const nextBtn = document.getElementById("nextBtn");



/* =========================
   CHAPTER NAVIGATION
========================= */


function showChapter() {

    chapters.forEach((chapter) => {
        chapter.classList.remove("active");
    });


    chapters[currentChapter].classList.add("active");


    chapterNumber.textContent = currentChapter + 1;



    /* Hide Back on Chapter 1 */

    if (currentChapter === 0) {

        backBtn.style.display = "none";

    } else {

        backBtn.style.display = "inline-block";

    }



    /* Hide Next on Last Chapter */

    if (currentChapter === chapters.length - 1) {

        nextBtn.style.display = "none";

    } else {

        nextBtn.style.display = "inline-block";

    }

}



/* Next Chapter */

function nextChapter() {

    if (currentChapter < chapters.length - 1) {

        currentChapter++;

        showChapter();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* Previous Chapter */

function previousChapter() {

    if (currentChapter > 0) {

        currentChapter--;

        showChapter();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* Start with Chapter 1 */

showChapter();





/* =========================
   MEMORY BOX
========================= */


function openMemory() {

    const box = document.querySelector(".closed-box");

    const content = document.getElementById("memoryContent");


    box.style.transform = "scale(0) rotate(20deg)";


    setTimeout(() => {

        box.innerHTML = "💌";

        box.style.transform = "scale(1) rotate(0deg)";

    }, 300);


    content.classList.add("show");

}





/* =========================
   LOVE GAME
========================= */


let noClicks = 0;


function noAnswer() {

    noClicks++;


    const yesBtn = document.getElementById("yesBtn");

    const noBtn = document.getElementById("noBtn");

    const message = document.getElementById("gameMessage");



    /* YES becomes bigger */

    const newSize = 1 + (noClicks * 0.25);

    yesBtn.style.transform = `scale(${newSize})`;



    /* Messages */

    if (noClicks === 1) {

        message.textContent = "Are u sure ? 👀";

    }


    else if (noClicks === 2) {

        message.textContent = "Wrong answer 🤨";

    }


    else if (noClicks === 3) {

        message.textContent = "Try again 😭";

    }


    else {

        message.textContent = "Last chance 🥺";

    }



    /* After several clicks NO disappears */

    if (noClicks >= 5) {

        noBtn.style.display = "none";

    }

}





function yesAnswer() {

    const message = document.getElementById("gameMessage");

    const teddy = document.getElementById("teddyContainer");


    message.innerHTML =
        "I knew it 🥺🥺🥺<br>U had no choice anyway 🙂😂";


    /* Show teddy */

    teddy.classList.add("show");


    /* Make YES bigger */

    document.getElementById("yesBtn").style.transform =
        "scale(1.15)";

}





/* =========================
   SECRET HEARTS
========================= */


const secretMessages = [

    "Nhabek niyaki 💋",

    "9hba dyalk ttnak elik 💋",

    "Swti tmot ela zbek 💋",

    "Skhona dyalk twhchatek 💋",

    "I wanna feel it inside me 💋"

];



function openSecret(number) {


    /* Close all hearts first */

    for (let i = 1; i <= 5; i++) {

        const heart =
            document.querySelector(
                `.secret-heart:nth-child(${i})`
            );


        const text =
            document.getElementById(
                "secret" + i
            );


        heart.classList.remove("open");

        text.textContent = "";

    }



    /* Open selected heart */

    const selectedHeart =
        document.querySelector(
            `.secret-heart:nth-child(${number})`
        );


    const selectedText =
        document.getElementById(
            "secret" + number
        );


    selectedText.textContent =
        secretMessages[number - 1];


    selectedHeart.classList.add("open");

}
