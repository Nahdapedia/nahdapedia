<template>
  <Layout>
    <section class="posts">
      <div class="post-title index-page-title">
        <h1>{{$page.item.title}}</h1>
      </div>
      <div class="post-content index-page-content">
        <p v-html="$page.item.content" />
      </div>
      <div class="post-citations">
        <div class="field-label"><h2>References:</h2></div>
        <div class="field-value row">
          <Citations :citations="node.citations" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Post {
   item: post (id: "c5965f8f-52e6-4124-84e8-2bebc8a4bc5c") {
    type
    title
    excerpt
    date
    citations {
      footnote_number
      citation_comment
      citation_reference
    }
    content
    path
  }
}
</page-query>

<style>
.post-citations{
  margin-top: 45px;
}

</style>



<script>
import Citations from '@/components/Citations.vue'

import collections from '~/admin/collections.json'

export default {
  components: {
    Citations
  },
  data () {
    return {
      "collections": collections,
      "node": {}
    }
  },
  methods: {
    find_collection_data(collection_name){

      for (const index in this.collections){
        const collection = this.collections[index];
        if (collection.name == collection_name){
          return collection;
        };
      };
    },
    async fetch_complex_relation (node, fieldname){
          
          var collection_metadata = this.find_collection_data(node.type);

          console.log(collection_metadata)

          var field = collection_metadata.object_refs[fieldname]

          const related_content_type = field.relation
          const fk_field = field.fk
          const additional_fields = field.additional_fields


          const node_id = node.id;
          
          var node_field_value = node[fieldname]


          var related_nodes = [];

          for (const rel_obj_index in node_field_value){

            var rel_obj = node_field_value[rel_obj_index]

            var fk_value = rel_obj[fk_field];


            const result = await this.$fetch(`/${related_content_type}/${fk_value}`);

            var related_node = result.data.item

            for (const i in additional_fields){
              const additional_field = additional_fields[i]
              related_node[additional_field] = rel_obj[additional_field];
            }

            related_nodes.push(related_node)

          }

          return related_nodes
            
      },
      async set_complex_relations (node){

        var collection_metadata = this.find_collection_data(node.type);

        for (const fieldname in collection_metadata.object_refs){


          const related_nodes = await this.fetch_complex_relation(node, fieldname);

          node[fieldname] = related_nodes
          
        };

        return node;
      },

  },
  async mounted () {
    try {
      
      var node = this.$page.item

      node = await this.set_complex_relations(node);

      this.node = node

    } catch (error) {
      console.log(error)
    }
  }
};
</script>
