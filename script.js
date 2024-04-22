// Tampilkan modal saat halaman dimuat
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Sembunyikan modal saat tombol close diklik
function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Panggil fungsi showModal saat halaman dimuat
window.onload = function() {
    showModal();
};
