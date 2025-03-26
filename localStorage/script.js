let data; // deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu'); // ambil element daftar_tamu

// panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value; // ambil value dari input
    let keperluan = document.getElementById('keperluan').value; // ambil value dari input
    console.log(nama);

    // cek apakah local storage kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; // buat array kosong
    } else {
        // ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    }

    data.push({nama_pengunjung: nama, perlu: keperluan}); // masukkan value input nama ke dalam array
    
    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); // simpan ke local storage

    // kosongkan isi elemen daftar_tamu
    daftar_tamu.innerHTML = '';
    // panggil fungsi tampil
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu')); // cek apakah local storage kosong

    data.forEach( (item) => {
        daftar_tamu.innerHTML += `<li>
            ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
}