<template>
  <Layout>
    <PageHeading type="Artist" :title="$page.item.name" />
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Nahdapedia id: </div>
        <div class="field-value ten columns">{{ $page.item.id}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Name: </div>
        <div class="field-value ten columns">{{$page.item.name}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Name (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.name_ar}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Alternate Names: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(alt_name, alt_index) in $page.item.alternate_names" v-bind:key="alt_index">{{alt_name}}</li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Usual Role: </div>
        <div class="field-value ten columns">{{$page.item.usual_role}}</div>
      </div>    
      <div class="field-row row">
        <div class="field-label row">Main artist in: </div>
        <div class="field-value container" v-for="edge in $page.item.artist_in.edges" :key="edge.node.id" >
          <div class="appears-in-release-title row" style="display: block;  width: 100%;">
            <a :href="$url('release/' + edge.node.id)">{{edge.node.title}}</a>
          </div>
          <div class="label row" style="display: block; width: 100%;">
            <span class="appears-in-label-name">{{edge.node.label.name}}</span>
            <span class="appears-in-catalogue-numbers "> {{ edge.node.catalogue_numbers.join(' / ') }} </span>
          </div>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label row">Appears on tracks in: </div>
        <div class="field-value container" v-for="edge in appears_in.edges" :key="edge.node.id" >
          <div class="appears-in-release-title row" style="display: block;  width: 100%;">
            <a :href="$url('release/' + edge.node.id)">{{edge.node.title}}</a>
          </div>
          <div class="label row" style="display: block; width: 100%;">
            <span class="appears-in-label-name">{{edge.node.label.name}}</span>
            <span class="appears-in-catalogue-numbers "> {{ edge.node.catalogue_numbers.join(' / ') }} </span>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Agent ($id:ID!) {
  item: agent (id: $id) {
    id
    type
    name
    name_ar
    alternate_names
    usual_role
    path
    artist_in:belongsTo{
      edges{
        node{
          ... on Release {
            id
            title
            label {
              id
              name
              path
            }
            catalogue_numbers
          }
        }
      }
    }
  }

}
</page-query>

<style>

span.appears-in-label-name {
  font-size: 1rem;
  color: #555555;
}

span.appears-in-catalogue-numbers {
  font-size: 0.9rem;
  color: #777777;
}

</style>

<script>
import PageHeading from '@/components/PageHeading.vue'
import AgentAppearsIn from './AgentAppearsIn.vue'
import ReleaseHeading from '@/components/ReleaseHeading.vue'
import LinkifyNode from '@/components/LinkifyNode.vue'

export default {
  components: {PageHeading, LinkifyNode, ReleaseHeading},
  data: () => {
    return {
      "appears_in": {}
    }
  },
  methods: {
    async fetch_appears(agent_id){
      let vm = this;

      const result = await this.$fetch(`/agent/${agent_id}/appears_in`);

      return result

    }
  },
  mounted: async function(){

    let vm = this;

    const result = await this.fetch_appears(vm.$page.item.id)
    
    const appears_in = result.data['appears_in']
    
    vm.appears_in = appears_in

  }

}

</script>