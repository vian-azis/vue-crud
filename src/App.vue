<template>
  <div class="d-flex h-100 bg-dark" style="min-height: 100vh">
    <div class="cover-container d-flex w-100 h-100 py-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0 text-white">Learn App</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <router-link :to="{ name: 'transaction.index' }" class="nav-link">Home</router-link>
          </nav>
        </div>
      </header>

      <router-view></router-view>

      <footer class="mt-auto text-white-50">
        <p>
          Cover template for
          <a href="https://getbootstrap.com/">Bootstrap</a>, by
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
      </footer>
    </div>
  </div>
</template>

<style>
@media (min-width:767px) {
  input[type="date"] {
    position: relative;
  }

  input[type="date"]:after {
    /* font-family: "Font Awesome 6 Free";
    font-weight: 900;
    content: "\f133"; */
    padding: 0 5px;
  }

  input[type="date"]:hover:after {
    color: #4285F4;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }

  input[type="date"]::-webkit-inner-spin-button {
    z-index: 1;
  }

  input[type="date"]::-webkit-clear-button {
    z-index: 1;
  }
}

@media (min-width:767px) {
  input[type="datetime-local"] {
    position: relative;
  }

  input[type="datetime-local"]:after {
    /* font-family: "Font Awesome 6 Free";
    font-weight: 900;
    content: "\f133"; */
  }

  input[type="datetime-local"]:hover:after {
    color: #4285F4;
  }

  input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
  }

  input[type="datetime-local"]::-webkit-inner-spin-button {
    z-index: 1;
  }

  input[type="datetime-local"]::-webkit-clear-button {
    z-index: 1;
  }
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tooltip {
  z-index: 99999;
}

.tooltip-inner {
  max-width: 500px;
  color: black;
  background-color: rgb(255, 255, 255);
  border-radius: .35rem;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 20px 0px
}

.bs-tooltip-auto[x-placement^=top] .arrow::before,
.bs-tooltip-top .arrow::before {
  border-top-color: rgb(255, 255, 255);
}

.bs-tooltip-auto[x-placement^=right] .arrow::before,
.bs-tooltip-right .arrow::before {
  border-right-color: rgb(255, 255, 255);
}

.bs-tooltip-auto[x-placement^=bottom] .arrow::before,
.bs-tooltip-bottom .arrow::before {
  border-bottom-color: rgb(255, 255, 255);
}

.bs-tooltip-auto[x-placement^=left] .arrow::before,
.bs-tooltip-left .arrow::before {
  border-left-color: rgb(255, 255, 255);
}

.hover-text {
  cursor: pointer;
  color: #fff;
}

.hover-text:hover {
  cursor: pointer;
  color: #4285F4;
}

.item-circle {
  border-radius: 50%;
  padding: 6px 12px;
}

.item-circle-delete {
  border-radius: 50%;
  padding: 0px 5px !important;
}

.c-pointer {
  cursor: pointer;
}

/*
 * Globals
 */

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
  /* Prevent inheritance from `body` */
}

/*
 * Base structure
 */

body {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.cover-container {
  max-width: 42em;
}

/*
 * Header
 */

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link+.nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>

<script>
export default {
  name: "App",
};
</script>
