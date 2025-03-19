fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah);
    // console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = `
    <div class="col-lg-8 mt-5">
        <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <h2>Waktu : ${data.Infogempa.gempa.Tanggal} ${data.Infogempa.gempa.Jam}</h2>
        <h2>Magnitude : ${data.Infogempa.gempa.Magnitude}</h2>
        <h2>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</h2>
        <h2>Potensi : ${data.Infogempa.gempa.Potensi}</h2>
    </div>
    <div class="col-lg-4">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" class="img-fluid" />
    </div>`;
})

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    data.Infogempa.gempa.forEach( (list) => { 
        console.log(list);
        document.getElementById("gempabumi15").innerHTML += `
        <div class="col-lg-4 p-3">
        <div class="card p-3">
            <h4>Wilayah : ${list.Wilayah}</h4>
            <p>Waktu : ${list.Tanggal} ${list.Jam}</p>
            <p>Magnitude : ${list.Magnitude}</p>
            <p>Kedalaman : ${list.Kedalaman}</p>
            <p>Potensi : ${list.Potensi}</p>
        </div>
        </div>
        `;
    })
})