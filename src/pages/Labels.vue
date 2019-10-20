<template>
  <Layout>
    <section class="posts">
      <ItemList title_field="name" v-for="item in $page.allLabel.edges" :key="item.node.id" :item="item.node" />
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
    title: "Label Listing"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allLabel (sortBy: "name", order: ASC){
    totalCount
    edges {
      node {
        id
        name
        name_ar
        alternate_names
        lc
        type
        path
      }
    }

  }
}
</page-query>

<style>

</style>
