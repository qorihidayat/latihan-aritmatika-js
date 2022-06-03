
//Ambil Data Array
const videos = Array.from(document.querySelectorAll('[data-duration'));

//Filter text Javascript
let jsLanjut = videos.filter((jsLanjut) => jsLanjut.textContent.includes('JAVASCRIPT'))

    //Ambil dataset.duration
    .map(item => item.dataset.duration)

    // change duration to int
    .map(waktu => {
        //Split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })

    .reduce((total, next) => total + next);


const jam = Math.round(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.round(jsLanjut / 60);
const detik = jsLanjut - menit * 60 + 6;
console.log(detik);


//simpan di Dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.innerHTML = `${jam}:${menit}:${detik}`;
const totVid = document.querySelector('.jumlah-video');
totVid.textContent = videos.filter((jsLanjut) => jsLanjut.textContent.includes('JAVASCRIPT')).length;