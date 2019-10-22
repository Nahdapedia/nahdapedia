<template>
  <Layout>
    <section class="items">
      <ul class="labels-list">
        <li v-for="item in $page.allLabel.edges" :key="item.node.id">
          <RadioIcon style="display: inline-block; margin-right: 5px;"></RadioIcon>
          <ItemList title_field="name" :item="item.node" display="inline" />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import ItemList from "@/components/ItemList";
import RadioIcon from "vue-ionicons/dist/md-radio.vue"

export default {
  components: {
    ItemList,
    RadioIcon
  },
  metaInfo: {
    title: "Label Listing"
  }
};
</script>

<page-query>
query {
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

.labels-list{
  list-style-type: none;
}
.labels-list li{
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2rem;
}

.labels-list a{
  text-decoration: none;
}

</style>
