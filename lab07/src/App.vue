<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Collapse } from 'bootstrap'

const mainNavEl = ref(null)
let mobileNavCollapse = null

function handleNavLinkClick() {
  if (window.innerWidth < 768) {
    mobileNavCollapse?.hide()
  }
}

function toggleMobileNav() {
  if (window.innerWidth < 768) {
    mobileNavCollapse?.toggle()
  }
}

function handleBrandClick() {
  if (window.innerWidth < 768) {
    mobileNavCollapse?.hide()
  }
}

onMounted(() => {
  if (mainNavEl.value) {
    mobileNavCollapse = Collapse.getOrCreateInstance(mainNavEl.value, {
      toggle: false
    })
  }
})

onUnmounted(() => {
  mobileNavCollapse?.dispose()
  mobileNavCollapse = null
})
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/" @click="handleBrandClick">Travel Explorer</router-link>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMobileNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="mainNav" ref="mainNavEl" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="handleNavLinkClick">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/travel" @click="handleNavLinkClick">Travel Destinations</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" @click="handleNavLinkClick">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <router-view />
    </main>
  </div>
</template>
