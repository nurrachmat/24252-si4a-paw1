fetch("https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=16.71.18.1001")
.then(res => res.json())
.then(data => {
    console.log(data);
    
    document.getElementById("cuaca").innerHTML = `
    <body class="bg-light">
    <div class="container mt-1">
        <div class="table-responsive">
            <table class="table table-primary" rules="rows">
            <tr>
                <th style="border-right: none;">Desa/Kelurahan</th>
                <td style="border-right: none;">${data.lokasi.desa}</td>
                <th style="border-right: none;">Kecamatan</th>
                <td style="border-right: none;">${data.lokasi.kecamatan}</td>
            </tr>
            <tr>
                <th style="border-right: none;">Kota/Kabupaten</th>
                <td style="border-right: none;">${data.lokasi.kotkab}</td>
                <th style="border-right: none;">Provinsi</th>
                <td style="border-right: none;">${data.lokasi.provinsi}</td>
            </tr>
            </table>
        <div>
    </div>`;


data.data.forEach((data1) => {
    data1.cuaca.forEach((data2) => {
        data2.forEach((data3) => {
            document.getElementById("daftarCuaca").innerHTML += `
            <div class="col-lg-4 col-pb-2">
                <div class="card p-3 d-flex flex-row mb-3">
                    <div class="w-25 ps-2">
                        <img src="${data3.image}" class="w-50" alt="">
                    </div>
                    <div class="w-75">
                        <div class="text-muted small">${data3.datetime}</div>
                        <div>${data3.weather_desc}</div>
                    </div>
                </div>
            </div>`;
        });
    });
    });
});