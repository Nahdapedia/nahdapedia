<template>
  <Layout>
    <section class="items">
      <ul class="artists-list">
        <li v-for="item in $page.allAgent.edges" :key="item.node.id" >
          <MicrophoneIcon style="display: inline-block; margin-right: 5px;"></MicrophoneIcon>
          <ListingItem title_field="name" :item="item.node" display="inline"/>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import ListingItem from "@/components/ListingItem";
import MicrophoneIcon from 'vue-ionicons/dist/md-microphone.vue'

export default {
  components: {
    ListingItem,
    MicrophoneIcon
  },
  metaInfo: {
    title: "Artists Listing"
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

.artists-list{
  list-style-type: none;
}
.artists-list li{
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2rem;
}

.artists-list a{
  text-decoration: none;
}

</style>
