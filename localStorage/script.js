let data; // deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu'); // ambil element daftar_tamu

// panggil fungsi tampil
tampil();

function simpan(){
    let nama = document.getElementById('nama').value; // ambil value dari input
    let keperluan = document.getElementById('keperluan').value; // ambil value dari input
    let jk = document.getElementById('jk').value;
    console.log(jk);

    // cek apakah local storage kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; // buat array kosong
    } else {
        // ambil data dari local storage
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    }

    data.push({nama_pengunjung: nama, perlu: keperluan, jk: jk}); // masukkan value input nama ke dalam array
    
    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); // simpan ke local storage

    // kosongkan isi elemen daftar_tamu
    daftar_tamu.innerHTML = '';
    // panggil fungsi tampil
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu')); // cek apakah local storage kosong

    console.log(data.length); // tampilkan jumlah data di console

    document.getElementById('total_tamu').innerHTML = `<h2>Total tamu <br> ${data.length}</h2>`;

    let total_laki=0; 
    let total_perempuan=0;

    data.forEach( (item) => {
        if(item.jk == 'L'){
            total_laki++;
        } else if(item.jk == 'P'){
            total_perempuan++;
        }

        daftar_tamu.innerHTML += `<div class='col-lg-2 rounded text-center text-white ${item.jk == 'L' ? 'bg-success' : 'bg-warning' } p-3 m-1'>
            <h4>${item.nama_pengunjung}</h4>
            ${item.perlu} <br> ${item.jk}
        </div>`
    })
    document.getElementById('tamu_laki').innerHTML = `<h2>Tamu laki-laki <br> ${total_laki}</h2>`;
    document.getElementById('tamu_perempuan').innerHTML = `<h2>Tamu perempuan <br> ${total_perempuan}</h2>`;
}