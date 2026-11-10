<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <h1 class="mb-0 fs-3">Data Tanggal Lahir</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="app-content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Daftar Riwayat Tanggal Lahir, Hari, Pasaran, Zodiak & Shio</h3>
          <div class="card-tools">
            <div class="input-group" style="width: 16rem">
              <span class="input-group-text"><i class="bi bi-search" aria-hidden="true"></i></span>
              <input v-model="katakunci" type="search" class="form-control" placeholder="Filter Data ..."/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div id="tabel-dtx"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { dataStore } from './store.js';

let katakunci = ref("");
let tablex;

onMounted(() => {
  tablex = new Tabulator('#tabel-dtx', {
    data: dataStore.riwayatTanggal,
    layout: 'fitColumns',
    placeholder: "Belum ada data tanggal lahir yang dihitung.",
    columns: [
      { formatter: "rownum", titile: "No", width: 60, hozAlign: "center", headerHozAlign: "center" },
      { title: "Tanggal Lahir", field: "tanggal", hozAlign: "center", headerHozAlign: "center" },
      { title: "Hari Kelahiran", field: "hari", hozAlign: "center", headerHozAlign: "center" },
      { title: "Pasaran", field: "pasaran", hozAlign: "center", headerHozAlign: "center" },
      { title: "Zodiak / Bintang", field: "zodiak", hozAlign: "center", headerHozAlign: "center" },
      { title: "Shio", field: "shio", hozAlign: "center", headerHozAlign: "center" },
    ],
    pagination: true,
    paginationSize: 10,
    paginationSizeSelector: [10, 25, 50, 100],
  });
});

watch(katakunci, (value) => {
  if (tablex) {
    if (value) {
      tablex.setFilter([
        [
          { field: 'tanggal', type: 'like', value: value },
          { field: 'hari', type: 'like', value: value },
          { field: 'pasaran', type: 'like', value: value },
          { field: 'zodiak', type: 'like', value: value },
          { field: 'shio', type: 'like', value: value },
        ]
      ]);
    } else {
      tablex.clearFilter();
    }
  }
});
</script>
