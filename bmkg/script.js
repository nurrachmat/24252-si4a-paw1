fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah);
    // console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = `<h1>${data.Infogempa.gempa.Wilayah}</h1>
    <p>Waktu : ${data.Infogempa.gempa.Tanggal} ${data.Infogempa.gempa.Jam}</p>
    <p>Magnitude : ${data.Infogempa.gempa.Magnitude}</p>
    <p>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</p>
    <p>Potensi : ${data.Infogempa.gempa.Potensi}</p>
    <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" />`
})