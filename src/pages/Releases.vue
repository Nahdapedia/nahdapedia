<template>
  <Layout>
    <section class="items">
      <ul class="releases-list">
        <li v-for="item in $page.allRelease.edges" :key="item.node.id" >
          <DiscIcon style="display: inline-block; margin-right: 5px;"></DiscIcon>
          <ItemList title_field="title" :item="item.node" display="inline" />
        </li>
      </ul>
    </section>

  </Layout>
</template>

<script>
import ItemList from "@/components/ItemList";
import DiscIcon from 'vue-ionicons/dist/md-disc.vue'

export default {
  components: {
    ItemList,
    DiscIcon
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

.releases-list{
  list-style-type: none;
}
.releases-list li{
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2rem;
}

.releases-list a{
  text-decoration: none;
}

</style>
