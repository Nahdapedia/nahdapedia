<template>
  <Layout>
    <section class="items">
      <ul class="works-list">
        <li v-for="item in $page.allWork.edges" :key="item.node.id" >
          <MusicalNotesIcon style="display: inline-block; margin-right: 5px;"></MusicalNotesIcon>
          <ItemList title_field="title" :item="item.node" display="inline" />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import ItemList from "@/components/ItemList";
import MusicalNotesIcon from 'vue-ionicons/dist/md-musical-notes.vue'

export default {
  components: {
    ItemList,
    MusicalNotesIcon
  },
  metaInfo: {
    title: "List of Works"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allWork (sortBy: "title", order: ASC){
    totalCount
    edges {
      node {
        id
        title
        title_ar
        genre {
          id
          name
        }
        path
      }
    }
  }
}
</page-query>

<style>

.works-list{
  list-style-type: none;
}
.works-list li{
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 2rem;
}

.works-list a{
  text-decoration: none;
}

</style>
