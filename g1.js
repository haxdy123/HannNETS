let currentIndex = 0;
const contents = document.querySelectorAll('.content');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    contents[currentIndex].style.display = 'none'; // Sembunyikan konten saat ini
    currentIndex++; // Pindah ke konten berikutnya

    if (currentIndex < contents.length) {
        contents[currentIndex].style.display = 'block'; // Tampilkan konten berikutnya
    } else {
        alert('Ini adalah konten terakhir.'); // Tindakan jika sudah di konten terakhir
        currentIndex = contents.length - 1; // Reset indeks
    }
});
