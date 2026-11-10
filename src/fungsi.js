export function getHariKelahiran(tgl) {
  let hariArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  let date = new Date(tgl);
  return hariArray[date.getDay()];
}

export function getPasaranJawa(tgl) {
  let pasaranArray = ['Wage', 'Kliwon', 'Legi', 'Pahing', 'Pon'];
  let date = new Date(tgl);
  let utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  let selisihHari = Math.floor(utcDate / (1000 * 60 * 60 * 24));
  let indexPasaran = ((selisihHari % 5) + 5) % 5;
  return pasaranArray[indexPasaran];
}

export function getZodiak(tgl) {
  let date = new Date(tgl);
  let xt = date.getDate();
  let xb = date.getMonth() + 1;
  if ((xb == 3 && xt >= 21) || (xb == 4 && xt <= 19)) return 'Aries';
  if ((xb == 4 && xt >= 20) || (xb == 5 && xt <= 20)) return 'Taurus';
  if ((xb == 5 && xt >= 21) || (xb == 6 && xt <= 20)) return 'Gemini';
  if ((xb == 6 && xt >= 21) || (xb == 7 && xt <= 22)) return 'Cancer';
  if ((xb == 7 && xt >= 23) || (xb == 8 && xt <= 22)) return 'Leo';
  if ((xb == 8 && xt >= 23) || (xb == 9 && xt <= 22)) return 'Virgo';
  if ((xb == 9 && xt >= 23) || (xb == 10 && xt <= 22)) return 'Libra';
  if ((xb == 10 && xt >= 23) || (xb == 11 && xt <= 21)) return 'Scorpio';
  if ((xb == 11 && xt >= 22) || (xb == 12 && xt <= 21)) return 'Sagitarius';
  if ((xb == 12 && xt >= 22) || (xb == 1 && xt <= 19)) return 'Capricorn';
  if ((xb == 1 && xt >= 20) || (xb == 2 && xt <= 18)) return 'Aquarius';
  if ((xb == 2 && xt >= 19) || (xb == 3 && xt <= 20)) return 'Pisces';
  return 'Tidak diketahui';
}

export function getShio(tgl) {
  let shioArray = ['Monyet', 'Ayam', 'Anjing', 'Babi', 'Tikus', 'Kerbau', 'Macan', 'Kelinci', 'Naga', 'Ular', 'Kuda', 'Kambing'];
  let date = new Date(tgl);
  return shioArray[date.getFullYear() % 12];
}
