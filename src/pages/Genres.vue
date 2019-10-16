<template>
  <Layout>
    <header class="header">
      <h1 v-html="$page.metaData.siteName" />
      <p v-html="$page.metaData.siteDescription" />
    </header>
    <section class="posts">
      <GenreList v-for="item in $page.allGenre.edges" :key="item.node.id" :item="item.node" />
    </section>
  </Layout>
</template>

<script>
import GenreList from "@/components/GenreList";
export default {
  components: {
    GenreList
  },
  metaInfo: {
    title: "Genre Listing"
  }
};
</script>

<page-query>
query {
  metaData {
    siteName
    siteDescription
  }
  allGenre {
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
