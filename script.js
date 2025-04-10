function formatHarga() {
    let harga = document.getElementById("harga").value.replace(/[^0-9]/g, '');
    document.getElementById("harga").value = harga ? "Rp " + parseInt(harga).toLocaleString('id-ID') : '';
}
function hitungDiskon() {
    const harga = parseInt(document.getElementById("harga").value.replace(/[^0-9]/g, ''));
    const diskon = parseFloat(document.getElementById("diskon").value);
    const errorMessage = document.getElementById("error-message");
    const result = document.getElementById("result");
    if (isNaN(harga) || harga <= 0) return errorMessage.textContent = "Error: Harga tidak valid! Harga harus lebih besar dari 0.";
    if (isNaN(diskon) || diskon < 0 || diskon > 100) return errorMessage.textContent = "Error: Persentase diskon tidak valid! Harus antara 0 dan 100.";
    const hargaDiskon = (diskon / 100) * harga;
    const hargaSetelahDiskon = harga - hargaDiskon;
    const formatRupiah = angka => "Rp " + angka.toLocaleString('id-ID');
    result.innerHTML = `
        <p>Harga Sebelum Diskon: ${formatRupiah(harga)}</p>
        <p>Harga Diskon: ${formatRupiah(hargaDiskon)}</p>
        <p>Harga Setelah Diskon: ${formatRupiah(hargaSetelahDiskon)}</p>
    `;
}
function refreshForm() {
    document.getElementById("harga").value = "";
    document.getElementById("diskon").value = "";
    document.getElementById("error-message").textContent = "";
    document.getElementById("result").innerHTML = "";
}
