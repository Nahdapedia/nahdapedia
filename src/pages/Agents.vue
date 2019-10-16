<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metaData.siteName" />
      <p v-html="$page.metaData.siteDescription" />
    </header>
    <section class="posts">
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
  metaData {
    siteName
    siteDescription
  }
  allAgent {
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
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 20px;
  padding: 0.7em;
}

.header p {
  font-weight: 200;
}
</style>
