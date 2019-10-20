<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="item-name">
      <h1>Genre: {{$page.genre.name}}</h1>
      <p class="item-name">id: {{ $page.item.id}}</p>
      <p class="item-name">Title: {{ $page.item.title}}</p>
      <p class="item-name">BibTex Entry: {{ $page.genre.bibtex}}</p>
    </div>
    <div class="item-content">
      <p v-html="$page.item" />
    </div>
  </Layout>
</template>

<page-query>
query Reference ($id: ID!) {
   item: reference (id: $id) {
    id
    type
    title
    bibtex
    path
  }
}
</page-query>

<style>

</style>