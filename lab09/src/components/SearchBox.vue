<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="form-label" for="search">Search Units</label>
  <input
    id="search"
    type="text"
    class="form-control"
    :value="modelValue"
    placeholder="Search by code, description, credit points, or type"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
