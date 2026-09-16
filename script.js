// ==========================
// TOMBOL "KLIK AKU"
// ==========================
// Mengambil nama dari link
const params = new URLSearchParams(window.location.search);

const nama = params.get("nama");

if (nama) {
    document.getElementById("namaTeman").textContent = nama;
}

function showMessage() {

    // Mengambil bagian pesan
    const message = document.getElementById("message");

    // Menampilkan pesan
    message.classList.remove("hidden");

    // Mengubah teks tombol
    const button = document.querySelector("button");

    button.innerHTML = "💗 Pesan Untukmu 💗";

    // Membuat hati berjatuhan
    createHearts();
}


// ==========================
// ANIMASI HATI
// ==========================

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = "-20px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        // Animasi hati
        const duration =
            Math.random() * 3 + 3;

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );


        // Hapus hati setelah animasi selesai
        setTimeout(() => {

            heart.remove();

        }, duration * 1000);
    }
}