<template>
  <Layout>
    <PageHeading type="Label" :title="$page.item.name" :label="$page.item.label"/>
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Name: </div>
        <div class="field-value ten columns">{{$page.item.name}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Name (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.name_ar}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">LC: </div>
        <div class="field-value ten columns">{{$page.item.lc}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Alternate Names: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(alt_name, alt_index) in $page.item.alternate_names" v-bind:key="alt_index">{{alt_name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Label ($id: ID!) {
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

</style>


<script>
import PageHeading from '@/components/PageHeading.vue'

export default {
  components: {PageHeading}
}

</script>