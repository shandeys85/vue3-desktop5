<template>
  <nav class="app-header navbar navbar-expand bg-body">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button" aria-label="Toggle sidebar"><i class="bi bi-list"></i></a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" data-lte-toggle="fullscreen" aria-label="Toggle fullscreen">
            <i data-lte-icon="maximize" class="bi bi-arrows-fullscreen"></i>
            <i data-lte-icon="minimize" class="bi bi-fullscreen-exit d-none"></i>
          </a>
        </li>
        <li class="nav-item dropdown user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            <img src="https://adminlte.io/themes/v4/assets/img/user2-160x160.jpg" class="user-image rounded-circle shadow" alt="User Image" />
            <span class="d-none d-md-inline">Mike</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
            <li class="user-header text-bg-primary">
              <img src="https://adminlte.io/themes/v4/assets/img/user2-160x160.jpg" class="rounded-circle shadow" alt="User Image" />
              <p>Mike <small>Programmer</small></p>
            </li>
            <li class="user-footer">
              <a href="#" class="btn btn-outline-secondary">Ganti Password</a>
              <a href="#" class="btn btn-outline-danger float-end">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
