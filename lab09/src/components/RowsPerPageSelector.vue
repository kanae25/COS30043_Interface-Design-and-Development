<script setup>
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  options: {
    type: Array,
    default: () => [5, 10, 15],
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="form-label" for="rows-per-page">Rows per page</label>
  <select
    id="rows-per-page"
    class="form-select"
    :value="modelValue"
    @change="emit('update:modelValue', Number($event.target.value))"
  >
    <option v-for="size in options" :key="size" :value="size">{{ size }}</option>
  </select>
</template>
