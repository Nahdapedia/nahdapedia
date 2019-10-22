<template>
  <Layout>
    <section class="items">
      <ul class="genres-list">
        <li v-for="item in $page.allGenre.edges" :key="item.node.id">
          <PriceTagIcon style="display: inline-block; margin-right: 5px;"></PriceTagIcon>
          <ItemList title_field="name" :item="item.node" display="inline" />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import ItemList from "@/components/ItemList";
import PriceTagIcon from "vue-ionicons/dist/md-pricetag.vue"

export default {
  components: {
    ItemList,
    PriceTagIcon
  },
  metaInfo: {
    title: "Genre Listing"
  }
};
</script>

<page-query>
query {
  allGenre (sortBy: "name", order: ASC){
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


.genres-list{
  list-style-type: none;
}
.genres-list li{
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2rem;
}

.genres-list a{
  text-decoration: none;
}

</style>
