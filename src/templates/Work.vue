<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="genre-name">
      <h1>Genre: {{$page.item.name}}</h1>
      <p class="item-name">id: {{ $page.item.id}}</p>
      <p class="item-name">Name: {{ $page.item.title}}</p>
      <p class="item-name">Name (Arabic): {{ $page.item.title_ar}}</p>
      <p class="item-name">Alternate Names:</p>
      <ul>
        <li v-for="(alt_title, alt_index) in $page.item.alt_titles" v-bind:key="alt_index">{{alt_title}}</li>
      </ul>
      <p class="item-name">Artists and Contributors:</p>
      <ul>
        <li v-for="contributor in $page.item.contributors" v-bind:key="contributor.id">{{alt_title}}</li>
      </ul>
      <p class="item-name">Path: {{ $page.item.path}}</p>
    </div>
    <div class="item-content">
      <p v-html="$page.item.name" />
    </div>
  </Layout>
</template>

<page-query>
query Work ($id: String!) {
   item: work (id: $id) {
    id
    title
    title_ar
    alternate_titles
    lyrics
    genre
    contributors
    citations
  }
}
</page-query>

<style>

.item-name {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
}

.item-name_ar {
  font-size: 16px;
  font-weight: 400;
}

.item-content {
  font-size: 20px;
}
</style>