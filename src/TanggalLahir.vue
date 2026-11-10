<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="mb-0 fs-3">Tanggal Lahir</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="app-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary card-outline mb-4">
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Isi dengan Tanggal Lahir Anda</label>
                <input type="date" class="form-control" id="txttgllahir" style="font-size: 25px;" v-model="tglInput"/>
              </div>
              <div class="mb-3" style="font-size: 30px;">
                Hari Kelahiran: {{ hasil_hari }}<br>
                Pasaran: {{ hasil_pasaran }}<br>
                Zodiak: {{ hasil_zodiak }}<br>
                Shio: {{ hasil_shio }}
              </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-primary" @click="hitungTgl" style="margin: 3px;">Hitung & Simpan</button>
              <button type="button" class="btn btn-danger" @click="resetForm" style="margin: 3px;">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getHariKelahiran, getPasaranJawa, getZodiak, getShio } from "./fungsi.js";
import { dataStore } from "./store.js";

let tglInput = ref("");
let hasil_hari = ref("???");
let hasil_pasaran = ref("???");
let hasil_zodiak = ref("???");
let hasil_shio = ref("???");

function hitungTgl() {
  if (tglInput.value == "") {
    window.Swal.fire({
      icon: 'warning',
      title: 'Perhatian',
      text: 'Silakan isi tanggal lahir terlebih dahulu!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });
    return;
  }
  
  hasil_hari.value = getHariKelahiran(tglInput.value);
  hasil_pasaran.value = getPasaranJawa(tglInput.value);
  hasil_zodiak.value = getZodiak(tglInput.value);
  hasil_shio.value = getShio(tglInput.value);

  // Simpan data spesifik tanggal lahir ke dalam store
  dataStore.riwayatTanggal.unshift({
    id: dataStore.riwayatTanggal.length + 1,
    tanggal: tglInput.value,
    hari: hasil_hari.value,
    pasaran: hasil_pasaran.value,
    zodiak: hasil_zodiak.value,
    shio: hasil_shio.value
  });

  window.Swal.fire({
    icon: 'success',
    title: 'Berhasil',
    text: 'Data Tanggal Lahir, Hari, Pasaran, Zodiak & Shio berhasil disimpan ke Menu Data!',
    timer: 2000,
    showConfirmButton: false
  });
}

function resetForm() {
  tglInput.value = "";
  hasil_hari.value = "???";
  hasil_pasaran.value = "???";
  hasil_zodiak.value = "???";
  hasil_shio.value = "???";
}
</script>
