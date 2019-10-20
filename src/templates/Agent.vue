<template>
  <Layout>
    <PageHeading type="Artist" :title="$page.item.name" />
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
      <div class="field-row row">
        <div class="field-label two columns">Alternate Names: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(alt_name, alt_index) in $page.item.alternate_names" v-bind:key="alt_index">{{alt_name}}</li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Usual Role: </div>
        <div class="field-value ten columns">{{$page.item.usual_role}}</div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Agent ($id: ID!) {
   item: agent (id: $id) {
    id
    type
    name
    name_ar
    alternate_names
    usual_role
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