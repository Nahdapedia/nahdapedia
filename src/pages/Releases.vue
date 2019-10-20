<template>
  <Layout>
    <section class="items">
      <ItemList title_field="title" v-for="item in $page.allRelease.edges" :key="item.node.id" :item="item.node" />
    </section>
  </Layout>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  components: {
    ItemList
  },
  metaInfo: {
    title: "List of Releases"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allRelease (sortBy: "name", order: ASC){
    totalCount
    edges {
      node {
        id
        type
        title
        record_count
        artist {
          id
          name
          name_ar
        }
        release_type
        catalogue_numbers
        label{
          id
          name
        }
        media_type
        path
      }
    }

  }
}
</page-query>

<style>

</style>
