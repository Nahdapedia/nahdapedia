<template>
  <Layout>
    <PageHeading type="Maqam" :title="$page.item.name" />
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
        <div class="field-label two columns">Works in this maqam: </div>
        <div class="field-value ten columns">
          <ul class="works-list">
            <li v-for="work in $page.item.works.edges" :key="work.node.id" >
              <MusicalNotesIcon style="display: inline-block; margin-right: 5px;"></MusicalNotesIcon>
              <ListingItem title_field="title" :item="work.node" display="inline" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
  ul.works-list{
    list-style-type: none;
  }

</style>

<page-query>
query Maqam ($id: ID!){
  item: maqam (id: $id) {
    id
    name
    name_ar
    works:belongsTo(sortBy: "title", order: ASC){
      totalCount
      edges{
        node{
          ... on Work {
            id
            title
            title_ar
            path
          }
        }
      }
  	}  
  }
}
</page-query>

<script>
import PageHeading from '@/components/PageHeading.vue'
import MusicalNotesIcon from 'vue-ionicons/dist/md-musical-notes.vue'
import ListingItem from "@/components/ListingItem.vue";

export default {
  components: {PageHeading, MusicalNotesIcon, ListingItem}
}

</script>