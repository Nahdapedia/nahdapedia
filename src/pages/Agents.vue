<template>
  <Layout>
    <section class="items">
      <ItemList title_field="name" v-for="item in $page.allAgent.edges" :key="item.node.id" :item="item.node" />
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
    title: "Agent Listing"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allAgent (sortBy: "name", order: ASC){
    totalCount
    edges {
      node {
        id
        name
        name_ar
        type
        path
      }
    }

  }
}
</page-query>

<style>

</style>
