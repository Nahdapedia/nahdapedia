<template>
  <Layout>
    <ReleaseHeading type="Release" :title="$page.item.title" :label="$page.item.label"/>
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Title: </div>
        <div class="field-value ten columns">{{$page.item.title}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Title (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.title_ar}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Media type: </div>
        <div class="field-value ten columns">{{$page.item.media_type}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Record count: </div>
        <div class="field-value ten columns">{{ $page.item.record_count}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Release type: </div>
        <div class="field-value ten columns">{{$page.item.release_type}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Artists: </div>
        <div class="field-value ten columns">
            <ItemList title_field="name" v-for="artist in $page.item.artist" :key="artist.id" :item="artist" />
        </div>

      </div>
      <div class="field-row row">
        <div class="field-label two columns">Catalogue numbers: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(catno, cat_index) in $page.item.catalogue_numbers" v-bind:key="cat_index">{{catno}}</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Release ($id: ID!) {
   item: release (id: $id) {
    id
    type
    title
    record_count
    artist {
        id
        name
        name_ar
        path
    }
    release_type
    catalogue_numbers
    label{
        id
        name
        path
    }
    media_type
  }
}
</page-query>

<style>


</style>

<script>
import PageHeading from '@/components/PageHeading.vue'
import ReleaseHeading from '@/components/ReleaseHeading.vue'
import ItemList from "@/components/ItemList";

export default {
  components: {PageHeading, ReleaseHeading, ItemList}
}

</script>