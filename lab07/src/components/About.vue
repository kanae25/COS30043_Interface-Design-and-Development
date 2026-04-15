<script setup>
import { computed, ref } from 'vue'
import mountainView from '../assets/images/mountfuji-destination1.jpg'
import oceanView from '../assets/images/halongbay-destination2.webp'

const firstName = ref('')
const lastName = ref('')
const preferredScene = ref('mountain')

const welcomeMessage = computed(() => {
  const fullName = `${firstName.value} ${lastName.value}`.trim()
  return fullName ? `Welcome, ${fullName}!` : 'Welcome, traveler!'
})

const selectedImage = computed(() => {
  return preferredScene.value === 'mountain' ? mountainView : oceanView
})
</script>

<template>
  <section class="row g-4 justify-content-center about-section">
    <div class="col-12 col-lg-6">
      <h2>{{ welcomeMessage }}</h2>
      <p>Please enter your name and choose your preferred view.</p>

      <div class="card p-3 shadow-sm">
        <div class="mb-3">
          <label for="firstName" class="form-label">First Name</label>
          <input id="firstName" v-model="firstName" type="text" class="form-control" placeholder="Enter first name" />
        </div>

        <div class="mb-3">
          <label for="lastName" class="form-label">Last Name</label>
          <input id="lastName" v-model="lastName" type="text" class="form-control" placeholder="Enter last name" />
        </div>

      </div>
    </div>

    <div class="col-12 col-lg-6">
      <div class="card p-3 shadow-sm">
        <h3 class="h5">Choose Your Preferred View</h3>

        <div class="form-check mt-2">
          <input id="mountainOption" v-model="preferredScene" class="form-check-input" type="radio" value="mountain" />
          <label class="form-check-label" for="mountainOption">Mountain</label>
        </div>

        <div class="form-check mb-3">
          <input id="oceanOption" v-model="preferredScene" class="form-check-input" type="radio" value="ocean" />
          <label class="form-check-label" for="oceanOption">Ocean</label>
        </div>

        <img :src="selectedImage" class="img-fluid rounded about-image" alt="Selected destination view" />
      </div>
    </div>
  </section>
</template>
