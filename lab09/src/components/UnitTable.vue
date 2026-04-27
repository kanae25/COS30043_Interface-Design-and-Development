<script setup>
defineProps({
  units: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="table-responsive">
    <table class="table table-striped table-bordered align-middle">
      <thead class="table-dark">
        <tr>
          <th scope="col">Unit Code</th>
          <th scope="col">Description</th>
          <th scope="col">Credit Points</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="units.length === 0">
          <td colspan="4" class="text-center py-3">No matching units found.</td>
        </tr>
        <tr v-for="unit in units" :key="unit.code">
          <td>{{ unit.code }}</td>
          <td>{{ unit.desc }}</td>
          <td>{{ unit.cp }}</td>
          <td>{{ unit.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
