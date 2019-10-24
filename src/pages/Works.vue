<template>
  <Layout>
    <section class="items">
      <ul class="works-list">
        <li v-for="item in $page.allWork.edges" :key="item.node.id" >
          <MusicalNotesIcon style="display: inline-block; margin-right: 5px;"></MusicalNotesIcon>
          <ListingItem title_field="title" :item="item.node" display="inline" />
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import ListingItem from "@/components/ListingItem.vue";
import MusicalNotesIcon from 'vue-ionicons/dist/md-musical-notes.vue'

export default {
  components: {
    ListingItem,
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
        maqam {
          id
          name
          name_ar
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
