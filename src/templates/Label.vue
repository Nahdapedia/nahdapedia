<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="genre-name">
      <h1>Genre: {{$page.item.name}}</h1>
      <p class="item-name">id: {{ $page.item.id}}</p>
      <p class="item-name">Name: {{ $page.item.name}}</p>
      <p class="item-name">Name (Arabic): {{ $page.item.name_ar}}</p>
      <ul>
      <p class="item-name">Alternate Names:</p>
        <li v-for="(alt_name, alt_index) in $page.item.alternate_names" v-bind:key="alt_index">{{alt_name}}</li>
      </ul>
      <p class="item-name">Path: {{ $page.item.path}}</p>
    </div>
    <div class="item-content">
      <p v-html="$page.item.name" />
    </div>
  </Layout>
</template>

<page-query>
query Label ($id: String!) {
   item: label (id: $id) {
    id
    name
    name_ar
    alternate_names
    lc
    path
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