<template>
  <section>
    <h2>Task 1: jQuery getJSON()</h2>
    <p>Posts from JsonPlaceholder (showing <code>id</code> and <code>title</code>).</p>

    <p v-if="loading">Loading posts...</p>
    <p v-else-if="error" class="error">{{ error }}</p>

    <ul v-else class="list">
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.id }}.</strong> {{ post.title }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import $ from "jquery";
import { onMounted, ref } from "vue";

const posts = ref([]);
const loading = ref(true);
const error = ref("");

onMounted(() => {
  $.getJSON("https://jsonplaceholder.typicode.com/posts")
    .done((data) => {
      posts.value = data.map((item) => ({
        id: item.id,
        title: item.title,
      }));
    })
    .fail(() => {
      error.value = "Failed to load posts from JsonPlaceholder.";
    })
    .always(() => {
      loading.value = false;
    });
});
</script>
