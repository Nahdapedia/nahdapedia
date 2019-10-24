<template>
  <Layout>
    <WorkHeading type="Work" :title="$page.item.title" :genre="$page.item.genre" />
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Nahdapedia id: </div>
        <div class="field-value ten columns">{{$page.item.id}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Title: </div>
        <div class="field-value ten columns">{{$page.item.title}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Title (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.title_ar}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Alternate titles: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(alt_title, alt_index) in $page.item.alternate_titles" v-bind:key="alt_index">{{alt_title}}</li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Genre: </div>
        <div class="field-value ten columns"><g-link :to="$url($page.item.genre.path)">{{$page.item.genre.name | $page.item.genre.name_ar}}</g-link></div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Maqam: </div>
        <div class="field-value ten columns"><g-link :to="$url($page.item.maqam.path)">{{$page.item.maqam.name | $page.item.maqam.name_ar}}</g-link></div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Artists and Contributors: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="contributor in node.contributors" v-bind:key="contributor.id">
              {{contributor.contributor_role}}: <g-link :to="contributor.path" class="title">{{contributor.name}} | {{contributor.name_ar}}</g-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Artists and Contributors: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="agent in $page.item.agents" v-bind:key="agent.id">
              {{get_agent_role(agent.id)}}: <g-link :to="agent.path" class="title">{{agent.name}} | {{agent.name_ar}}</g-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Citations: </div>
        <div class="field-value ten columns">
          <Citations :citations="$page.item.citations" />
        </div>
      </div>

    </div>
  </Layout>
</template>

<page-query>
query Work ($id: ID!) {
   item: work (id: $id) {
    id
    type
    path
    title
    title_ar
    alternate_titles
    lyrics
    genre {
      id
      name
      name_ar
      path
    }
    maqam {
      id
      name
      name_ar
      path
    }
    contributors {
      contributor_role
      contributor
    }
    citations {
      footnote_number
      citation_comment
      citation_reference
    }
  }
}
</page-query>

<script>

import PageHeading from '@/components/PageHeading.vue'
import WorkHeading from '@/components/WorkHeading.vue'
import Citations from '@/components/Citations.vue'

import collections from '~/admin/collections.json'


export default {
  components: {WorkHeading, Citations},
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
    relation_simple_fields(){
      
      rel_fields = [];

      for (field_index in collection.fields){
        field = collection.fields[field_index]
        if (field.widget == 'relation'){
          rel_fields.push(field);
        }
      };

      return rel_fields;

    },
    relation_list_fields(collection){
  
      rel_fields = [];

      for (field_index in collection.fields){
        if (field.widget == 'list'
        && field.hasOwnProperty('field') 
        && field['field'].widget == 'relation'){
          nested_field = field['field'];
          rel_fields.push(nested_field);
        }
      }
      
      return rel_fields;

    },
    relation_object_fields(collection){
  
      rel_fields = [];

      for (field_index in collection.fields){
        if (field.widget == 'list'
        && field.hasOwnProperty('fields')){
          for (sub_index in field.fields){
            nested_field = field.fields[sub_index]
            if (nested_field.widget == 'relation'){
              rel_fields.push(nested_field);
            }
          }
        }
      }
      
      return rel_fields;

    },
    async fetch_complex_relation (node, fieldname){
          
          var collection_metadata = this.find_collection_data(node.type);

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
      get_agent_role(agent_id){
        for (const c_index in this.$page.item.contributors){
          const c = this.$page.item.contributors[c_index]
          if (c.contributor === agent_id){
            return c.contributor_role
          } 
        }
      }
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
}

</script>

<style>

</style>