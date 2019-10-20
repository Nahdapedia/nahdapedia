<template>
  <Layout>
    <br>
    <g-link to="/" class="link">  &larr; Go Back</g-link>
    <div class="genre-name">
      <h1>Genre: {{$page.item.name}}</h1>
      <p class="item-name">id: {{ $page.item.id}}</p>
      <p class="item-name">Name: {{ $page.item.title}}</p>
      <p class="item-name">Name (Arabic): {{ $page.item.title_ar}}</p>
      <p class="item-name">Alternate Names:</p>
      <ul>
        <li v-for="(alt_title, alt_index) in $page.item.alternate_titles" v-bind:key="alt_index">{{alt_title}}</li>
      </ul>
      <p class="item-genre">Genre: {{ $page.item.genre.id}}</p>
      <p class="item-name">Artists and Contributors:</p>
      <ul>
        <li v-for="contributor in $page.item.contributors" v-bind:key="contributor.id">
          {{contributor.contributor_role}} | {{contributor.name}}
        </li>
      </ul>
      <p class="item-name">Path: {{ $page.item.path}}</p>
    </div>
    <div class="item-content">
      <p v-html="this.contributors" />
    </div>
  </Layout>
</template>

<page-query>
query Work ($id: String!) {
   item: work (id: $id) {
    id
    title
    title_ar
    alternate_titles
    lyrics
    genre {
      id
      name
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

import collections from '~/admin/collections.json'

export default {
  data () {
    return {
      "model": collections,
      "contributors": {}
    }
  },
  props: {
    "content_type": String
  },
  methods: {
    find_collection_data(collection_name){
      for (index in collections){
        collection = collections[index];
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
    fetch_complex_relation(node, fieldname){
          
          coll = find_collection_data(content_type);

          field = coll.fields[fieldname]

          related_content_type = field['relation']
          fk_field = field['fk']
          additional_fields = field['additional_fields']

          const node_id = $page.item.id;
          const contributor_role = item.contributor_role
          
          node_field_value = node[fieldname]

          var related_nodes = [];

          for (rel_obj in node_field_value){

            fk_value = rel_obj[fk_field];

            const result = await this.$fetch(`/${node.type}/${fk_value}`);

            var related_node = result.data.item

            for (additional_field in additional_fields){
              related_node[additional_field] = item[additional_field];
            }

            related_nodes.push(related_node)

          }

          return related_nodes
            
      },
      set_complex_relations(node){

          object_refs_fields =  Object.keys(collection.object_refs)

          for (const fieldname in object_refs_fields){

            const related_nodes = fetch_complex_relation(node, fieldname);
            node[field] = related_nodes
            
          };
      }
  },
  async mounted () {
    try {
      
      this.set_complex_relations(this.$page.item)

    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style>

.item-name {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
  padding: 2em 0;
  font-family: 'Stylish';
}

.item-name_ar {
  font-size: 16px;
  font-weight: 400;
}

.item-content {
  font-size: 20px;
}
</style>