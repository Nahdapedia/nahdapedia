<template>
  <Layout>
    <PageHeading type="Reference" :title="$page.item.title" />
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Nahdapedia id: </div>
        <div class="field-value ten columns">{{ $page.item.id}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Title: </div>
        <div class="field-value ten columns">{{$page.item.title}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">BibTex Entry: </div>
        <div class="field-value ten columns">{{$page.item.bibtex}}</div>
      </div>
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

<script>

import PageHeading from '@/components/PageHeading.vue'

export default {
  components: {PageHeading}
}

</script>