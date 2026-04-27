<script setup>
import Paginate from "vuejs-paginate-next";

defineProps({
  pageCount: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-change"]);

function onPageClick(pageValue) {
  const raw =
    typeof pageValue === "object" && pageValue !== null
      ? pageValue.selected
      : pageValue;
  const numericPage = Number(raw);

  // vuejs-paginate-next returns a 1-based page number.
  if (Number.isFinite(numericPage) && numericPage > 0) {
    emit("page-change", numericPage);
  }
}
</script>

<template>
  <Paginate
    :page-count="pageCount"
    :click-handler="onPageClick"
    :force-page="currentPage"
    :page-range="3"
    :margin-pages="1"
    :prev-text="'Previous'"
    :next-text="'Next'"
    :container-class="'pagination mb-0'"
    :page-class="'page-item'"
    :page-link-class="'page-link'"
    :prev-class="'page-item'"
    :prev-link-class="'page-link'"
    :next-class="'page-item'"
    :next-link-class="'page-link'"
    :active-class="'active'"
    :disabled-class="'disabled'"
  />
</template>
