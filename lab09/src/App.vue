<script setup>
import { computed, ref, watch } from "vue";
import units from "./data/units.json";
import SearchBox from "./components/SearchBox.vue";
import RowsPerPageSelector from "./components/RowsPerPageSelector.vue";
import UnitTable from "./components/UnitTable.vue";
import Pagination from "./components/Pagination.vue";

const searchTerm = ref("");
const currentPage = ref(1);
const rowsPerPage = ref(5);
const pageSizeOptions = [5, 10, 15];

const filteredUnits = computed(() => {
  const query = searchTerm.value.trim().toLowerCase();

  if (!query) {
    return units;
  }

  return units.filter((unit) =>
    [unit.code, unit.desc, unit.cp, unit.type]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
});

const pageCount = computed(() =>
  Math.max(1, Math.ceil(filteredUnits.value.length / rowsPerPage.value)),
);

const paginatedUnits = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value;
  return filteredUnits.value.slice(start, start + rowsPerPage.value);
});

watch([searchTerm, rowsPerPage], () => {
  currentPage.value = 1;
});

watch(pageCount, (newCount) => {
  if (currentPage.value > newCount) {
    currentPage.value = newCount;
  }
});

function handlePageChange(pageNumber) {
  const parsedPage = Number(pageNumber);
  if (!Number.isFinite(parsedPage)) {
    return;
  }

  currentPage.value = Math.min(
    Math.max(1, Math.trunc(parsedPage)),
    pageCount.value,
  );
}
</script>

<template>
  <main class="container py-4">
    <h1 class="mb-4">Lab 09 - Unit Pagination</h1>

    <div class="row g-3 align-items-end mb-3">
      <div class="col-md-8">
        <SearchBox v-model="searchTerm" />
      </div>
      <div class="col-md-4">
        <RowsPerPageSelector v-model="rowsPerPage" :options="pageSizeOptions" />
      </div>
    </div>

    <UnitTable :units="paginatedUnits" />

    <div class="mt-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
      <small class="text-muted">
        Showing {{ paginatedUnits.length }} of {{ filteredUnits.length }} unit(s)
      </small>
      <Pagination
        :current-page="currentPage"
        :page-count="pageCount"
        @page-change="handlePageChange"
      />
    </div>
  </main>
</template>
