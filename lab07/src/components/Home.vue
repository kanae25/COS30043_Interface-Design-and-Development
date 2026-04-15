<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Carousel } from 'bootstrap'
import mountainView from '../assets/images/mountfuji-destination1.jpg'
import oceanView from '../assets/images/halongbay-destination2.webp'
import cityView from '../assets/images/shibuya-destination3.webp'

const carouselEl = ref(null)
let carouselInstance = null

onMounted(() => {
  if (carouselEl.value) {
    carouselInstance = new Carousel(carouselEl.value, {
      interval: 3000,
      ride: 'carousel',
      pause: false
    })
  }
})

onUnmounted(() => {
  carouselInstance?.dispose()
  carouselInstance = null
})
</script>

<template>
  <section class="row g-4 align-items-center justify-content-center home-section">
    <div class="col-12 col-lg-5">
      <h1 class="display-6 fw-bold">Welcome to Travel Explorer</h1>
      <p class="lead mt-3">
        Discover inspiring destinations around the world. Browse locations, search by category,
        and find your next adventure.
      </p>
    </div>

    <div class="col-12 col-lg-7">
      <div ref="carouselEl" id="destinationCarousel" class="carousel slide shadow-sm rounded overflow-hidden">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="mountainView" class="d-block w-100 carousel-img" alt="Mountain destination" />
          </div>
          <div class="carousel-item">
            <img :src="oceanView" class="d-block w-100 carousel-img" alt="Ocean destination" />
          </div>
          <div class="carousel-item">
            <img :src="cityView" class="d-block w-100 carousel-img" alt="City destination" />
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#destinationCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#destinationCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
