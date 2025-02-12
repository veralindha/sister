const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.querySelector(".close-button");
const messageContainer = document.getElementById("messageContainer");
const nextButton = document.getElementById("nextMessage");
const backButton = document.createElement("button"); // Create back button
backButton.textContent = "Back";
nextButton.textContent = "Next";
backButton.classList.add("back-button"); // Add class for styling
nextButton.classList.add("next-button"); // Add class for styling
modal.querySelector(".modal-content").insertBefore(backButton, nextButton);
window.addEventListener('load', (event) => {
    document.getElementById('myAudio').play();
});

let currentAudio;

function playMusic(audioFile) {
  const audio = document.getElementById('myAudio');

  // Hentikan audio yang sedang diputar (jika ada)
  if (currentAudio) {
    currentAudio.pause();
  }

  // Set sumber audio baru
  audio.src = `${audioFile}.mp3`; // Ganti .mp3 dengan format file audio Anda

  // Putar audio baru
  audio.play();

  // Simpan referensi audio yang sedang diputar
  currentAudio = audio;
}

let currentMessageIndex = 0;
const messages = [
    "Yang ke loro, umure kamu sudah rong puluh tiga, tidak keroso ya sudah setuek itu",
    "seperti biasae, dungonya tetep yang terapik buat kedepanya.",
    "harapanya semoga jadi budak kicik yang amanah, patuh pada wong tua, jadi budak kicik yang soleha.",
    "mugo dilancarkan rezekinya, sholat jangan di tinggalno, percuma punya duwit akeh tapi sholat di tinggalne, sama aja dengan tidak patuh pada orang tua..",
    "rezeki osing harus uang, kmu sehat alhamdulillah.. bersyukur banget, jaga awak di kadohan.",
    "isun hanya bisa berpesen, teteplah letih dan ojo bersemangat.",
    "nah omongan iki mau ojo dirungokkan, ini pesen yang bener, tetaplah semangat walau hp nya sudah iphone :)",
    "dah sekian dari isun, wassalamualaikum wr wb.",
    "nyoh balesen iki dengan mengidek tombol di ngisor iki"
];

openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
    updateButtonText(); // Update button text when modal opens
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    currentMessageIndex = 0; // Reset index when modal closes
    updateButtonText(); // Update button text when modal closes
});

nextButton.addEventListener("click", () => {
    if (nextButton.textContent === "IDEK!!") {
        redirectToWhatsApp();
        modal.style.display = "none"; // Close the modal
    } else {
        currentMessageIndex++;
        if (currentMessageIndex >= messages.length) {
            currentMessageIndex = 0; // Go back to the first message
        }
        messageContainer.innerHTML = `<p>${messages[currentMessageIndex]}</p>`;
        updateButtonText(); // Update button text after each click
    }
});

backButton.addEventListener("click", () => {
    currentMessageIndex--;
    if (currentMessageIndex < 0) {
        currentMessageIndex = messages.length - 1; // Go to the last message
    }
    messageContainer.innerHTML = `<p>${messages[currentMessageIndex]}</p>`;
    updateButtonText(); // Update button text after each click
});

function updateButtonText() {
    if (currentMessageIndex === messages.length - 1) {
        nextButton.textContent = "IDEK!!";
    } else {
        nextButton.textContent = "Next";
    }
}

function redirectToWhatsApp() {
    const phoneNumber = "+6285175321022"; // Replace with the recipient's phone number
    const message = " "; // Replace with your desired message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank"); // Open WhatsApp in a new tab
}