<template>
  <Layout>
    <PageHeading type="Genre" :title="$page.item.name" />
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Nahdapedia id: </div>
        <div class="field-value ten columns">{{ $page.item.id}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Name: </div>
        <div class="field-value ten columns">{{$page.item.name}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Name (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.name_ar}}</div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Genre ($id: ID!) {
   item: genre (id: $id) {
    id
    name
    name_ar
    path
    works:belongsTo{
      edges{
        node{
          ... on Work{
            title
          }
        }
      }
    }
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