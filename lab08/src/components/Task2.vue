<template>
  <section>
    <h2>Task 2: JavaScript fetch()</h2>
    <p>Units loaded from <code>src/assets/units.json</code>.</p>

    <p v-if="loading">Loading units...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <table v-else>
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Credit Points</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unit in units" :key="unit.code">
          <td>{{ unit.code }}</td>
          <td>{{ unit.desc }}</td>
          <td>{{ unit.cp }}</td>
          <td>{{ unit.type }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import unitsUrl from "../assets/units.json?url";

const units = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch(unitsUrl);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    units.value = await response.json();
  } catch (err) {
    error.value = `Failed to load units: ${err.message}`;
  } finally {
    loading.value = false;
  }
});
</script>
