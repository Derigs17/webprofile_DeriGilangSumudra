
const profileImage = document.querySelector('#profile img');

profileImage.addEventListener('click', function () {
    this.style.transform = 'scale(4)'; // Perbesar gambar saat diklik
});

profileImage.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)'; // Kembalikan ke ukuran aslinya saat kursor tidak lagi di atas gambar
});

