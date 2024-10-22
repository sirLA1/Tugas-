// Mengambil elemen form dan tombol submit
const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

// Fungsi validasi sederhana untuk memeriksa apakah input telah diisi
function validateForm(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mendapatkan nilai input form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Memeriksa apakah semua field sudah diisi
    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua field!');
    } else if (!validateEmail(email)) {
        alert('Harap masukkan email yang valid!');
    } else {
        alert('Pesan berhasil dikirim!');
        form.reset(); // Mengosongkan form setelah pengiriman berhasil
    }
}

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Menambahkan event listener untuk menangani pengiriman form
form.addEventListener('submit', validateForm);