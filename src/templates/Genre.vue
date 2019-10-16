<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="genre-name">
      <h1>Genre: {{$page.genre.name}}</h1>
      <p class="genre-name_ar">id: {{ $page.genre.id}}</p>
      <p class="genre-name_ar">Name: {{ $page.genre.name}}</p>
      <p class="genre-name_ar">Name (Arabic): {{ $page.genre.name_ar}}</p>
      <p class="genre-name_ar">Path: {{ $page.genre.path}}</p>
    </div>
    <div class="genre-content">
      <p v-html="$page.genre.name" />
    </div>
  </Layout>
</template>

<page-query>
query Genre ($id: String!) {
   genre: genre (id: $id) {
    id
    name
    name_ar
    path
  }
}
</page-query>

<style>

.genre-name {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
}

.genre-name_ar {
  font-size: 16px;
  font-weight: 400;
}

.genre-content {
  font-size: 20px;
}
</style>