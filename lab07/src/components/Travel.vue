<script setup>
import { computed, ref } from 'vue'
import destinations from '../assets/destinations.json'

const query = ref('')
const currentPage = ref(1)
const itemsPerPage = 4

const filteredDestinations = computed(() => {
  const text = query.value.trim().toLowerCase()

  if (!text) {
    return destinations
  }

  return destinations.filter((destination) => {
    return [destination.name, destination.country, destination.description, destination.category]
      .join(' ')
      .toLowerCase()
      .includes(text)
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredDestinations.value.length / itemsPerPage)))

const paginatedDestinations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredDestinations.value.slice(start, end)
})

const pageList = computed(() => Array.from({ length: totalPages.value }, (_, index) => index + 1))

function changePage(page) {
  if (page < 1 || page > totalPages.value) {
    return
  }
  currentPage.value = page
}

function onSearch() {
  currentPage.value = 1
}
</script>

<template>
  <section>
    <h2 class="mb-3">Travel Destinations</h2>
    <p class="text-muted mb-4">Search by destination name, country, description, or category.</p>

    <div class="row mb-4">
      <div class="col-12 col-md-8 col-lg-6">
        <input
          v-model="query"
          type="text"
          class="form-control"
          placeholder="Search destinations..."
          @input="onSearch"
        />
      </div>
    </div>

    <div class="row g-3">
      <div v-for="destination in paginatedDestinations" :key="destination.id" class="col-12 col-md-6">
        <article class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ destination.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ destination.country }} | {{ destination.category }}</h6>
            <p class="card-text">{{ destination.description }}</p>
          </div>
        </article>
      </div>

      <div v-if="paginatedDestinations.length === 0" class="col-12">
        <p class="alert alert-warning mb-0">No destinations matched your search.</p>
      </div>
    </div>

    <nav class="mt-4" aria-label="Destination pages">
      <ul class="pagination flex-wrap">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" type="button" @click="changePage(currentPage - 1)">Previous</button>
        </li>

        <li
          v-for="page in pageList"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
        >
          <button class="page-link" type="button" @click="changePage(page)">{{ page }}</button>
        </li>

        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" type="button" @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </section>
</template>
