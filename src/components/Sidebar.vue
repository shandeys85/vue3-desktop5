<template>
  <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <div class="sidebar-brand">
      <a href="#" class="brand-link">
        <img src="https://adminlte.io/themes/v4/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image opacity-75 shadow"/>
        <span class="brand-text fw-light">AdminLTE 4</span>
      </a>
    </div>
    <div class="sidebar-search" role="search">
      <label for="sidebar-search-input" class="visually-hidden">Filter menu</label>
      <input type="search" id="sidebar-search-input" class="form-control form-control-sm" placeholder="Filter menu..." autocomplete="off" data-lte-toggle="sidebar-search" data-lte-target="#navigation"/>
      <p class="fs-7 text-secondary mt-2 mb-0" data-lte-search-empty role="status" hidden>Menu Tidak Ditemukan</p>
    </div>
    <div class="sidebar-wrapper">
      <nav class="mt-2" aria-label="Main navigation">
        <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" data-accordion="false" id="navigation">
          <li class="nav-item">
            <router-link to="/" class="nav-link mnsidebar" id="mnberanda" active-class="active" exact-active-class="active">
              <i class="nav-icon bi bi-speedometer"></i><p>Beranda</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tanggal" class="nav-link mnsidebar" id="mntgl" active-class="active">
              <i class="nav-icon bi bi-calendar"></i><p>Tanggal Lahir</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/jsononline" class="nav-link mnsidebar" id="mndata" active-class="active">
              <i class="nav-icon bi bi-table"></i><p>Data</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link mnsidebar" id="mntentang">
              <i class="nav-icon bi bi-leaf"></i><p>Tentang</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
