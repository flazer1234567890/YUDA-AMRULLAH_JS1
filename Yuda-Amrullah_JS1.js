//contoh penggunaan if
// if +salah satu tag percabangan di Javascript
//percabangan yang dimaksud adalah program hanya akan dijalankan jika salah satu syarat/kondisi terpenuhi
//iff hanya menggunakan 1 logic (1 kondisi)

//penggunaan "if" dalam kondisi yang terpenuhi
//jika nilai dari mahasiswa memiliki nilai 90 atau lebih dari 90 , maka mahasiswa tersebut dinyatakan  "lulus"
let nilaiKelulusan = 90;
if (nilaiKelulusan >= 90) {
  document.writeln("<p> lulus </p>");
}

//penggunaan "if" dalam kondisi yang tidak terpenuhi

nilaiMatematika = 80;
if (nilaiMatematika >= 90) {
  document.writeln("<p> lulus </p>");
}

document.writeln("</br>");

/*"else" sama seperti if namu memiliki 2 logic
yang artinya jika kondisi pertama tidak terpenuhi maka akan dilanjutkan ke kondisi yang kedua. namun jika kondisi yang pertama terpenuhi maka program yang kedua tidak akan dijalankan.*/

//jika seorang bertanya tentang harga suatu menu
//Contoh else kondisi tidak terpenuhi (false)
let menuMasakan = "air putih";
if (menuMasakan === "Nasi Goreng") {
  document.writeln("<p>Rp.15000,-</p>");
} else {
  document.writeln("<p>menu tidak tersedia</p>");
}

//contoh else terpenuhi (true)
menuMasakan = "Nasi Goreng";
if ((menuMasakan = "Nasi Goreng")) {
  document.writeln("<p>Rp.15000,-</p>");
} else {
  document.writeln("<p>menu tidak tersedia</p>");
}

//ada seorang mahasiswa yang bertanya jika dia mempunyai uang 25000, dia dapat membeli apa
//contoh else yang kondisi dibanyak
let uang = "25000";
if (uang <= 10000) {
  document.writeln("<p>Nasi Goreng</p>");
} else if (uang <= 25000) {
  document.writeln("<p>Bakso</p>");
} else {
  document.writeln("<p>Air Putih</p>");
}

//nested if
//ada seorang mahasiswa yang ingin mencari namaya difitur pencarian yang memuat nama dan semester.

let namaMahasiswa = "yuda Amrullah";
let Semester = 5;
if (namaMahasiswa == "Yuda Amrullah") {
  if (Semester === 5) {
    document.writeln("<p>Selamat Datang</p>");
  } else {
    document.writeln("<p>Semester yang dimasukkan salah</p>");
  }
} else {
  document.writeln("<P>mahasiswa tidak ditemukan</P>");
}

namaMahasiswa = "Yuda Amrullah";
Semester = 5;
if (namaMahasiswa == "Yuda Amrullah") {
  if (Semester === 2) {
    document.writeln("<p>Selamat Datang</p>");
  } else {
    document.writeln("<p>Semester yang dimasukkan salah</p>");
  }
} else {
  document.writeln("<P>mahasiswa tidak ditemukan</P>");
}

namaMahasiswa = "riza Amrullah";
Semester = 5;
if (namaMahasiswa == "Yuda Amrullah") {
  if (Semester === 2) {
    document.writeln("<p>Selamat Datang</p>");
  } else {
    document.writeln("<p>Semester yang dimasukkan salah</p>");
  }
} else {
  document.writeln("<P>mahasiswa tidak ditemukan</P>");
}

//switch
let JadwalMingguan = "kamis";

switch (JadwalMingguan) {
  case "senin":
    document.writeln("<p>kalkulusr</p>");
    break;
  case "selasa":
    document.writeln("<p>fisika dasar</p>");
    break;
  case "rabu":
    document.writeln("<p>elektronika dasar</p>");
    break;
  case "kamis":
    document.writeln("<p>fisika dasar II</p>");
    break;
  case "jumat":
    document.writeln("<p>Fisika Matematika</p>");
    break;
  default:
    document.writeln("<p>tidak adak perkuliahan</p>");
}
// for statment
for (let nomerUndian = 1; nomerUndian <= 10; nomerUndian++) {
  document.writeln("<p>19087</p>");
}

//while, do while

while (false) {
  document.writeln("<p>BANGUN......!</p>");
}
//ganti "false" menjadi true maka akan terjadi infinite loop

let alarm = false;
while (alarm) {
  document.writeln("<p>BANGUN......!</p>");
  alaram = confirm("lagi");
}

let alaram = 8;
while (alaram <= 8) {
  document.writeln("<p>Bangun Bang..!</p>");
  alaram++;
}

let hitungan = 1;
while (hitungan <= 10) {
  document.writeln("<p>" + hitungan + "X </p>");
  hitungan++;
}

//function

function volumetotal(p, l, t) {
  let volumeKubus = p * p * p;
  let volumeBalok = p * l * t;
  total = volumeKubus + volumeBalok;
  return total;
}

document.writeln(volumetotal(8, 6, 4));
