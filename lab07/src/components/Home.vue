<script setup>
import mountainView from '../assets/images/mountfuji-destination1.jpg'
import oceanView from '../assets/images/halongbay-destination2.webp'
import cityView from '../assets/images/shibuya-destination3.webp'
</script>

<template>
  <section class="row g-4 align-items-center">
    <div class="col-12 col-lg-5">
      <h1 class="display-6 fw-bold">Welcome to Travel Explorer</h1>
      <p class="lead mt-3">
        Discover inspiring destinations around the world. Browse locations, search by category,
        and find your next adventure.
      </p>
    </div>

    <div class="col-12 col-lg-7">
      <div id="destinationCarousel" class="carousel slide shadow-sm rounded overflow-hidden" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="mountainView" class="d-block w-100 carousel-img" alt="Mountain destination" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Mountain Adventure</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="oceanView" class="d-block w-100 carousel-img" alt="Ocean destination" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ocean Getaway</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="cityView" class="d-block w-100 carousel-img" alt="City destination" />
            <div class="carousel-caption d-none d-md-block">
              <h5>City Discovery</h5>
            </div>
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
