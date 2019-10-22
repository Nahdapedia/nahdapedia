<template>
    <g-link :to="node.path" class="linkified-node-link">{{node[title_field]}}</g-link>
</template>

<script>
export default {
  name: "LinkifyNode",
  props: ["node_id", "node_type", "title_field"]
  ,
  data: () => {
     return {
      node: {}
      }
  },
  methods: {
    async fetch_node(node_type, node_id){
      let vm = this;

      const result = await this.$fetch(`/${vm.node_type}/${vm.node_id}`);

      return result

    }
  },
  mounted: async function(){

    let vm = this;

    const result = await this.fetch_node(vm.node_type, vm.node_id)
    
    const node = result.data.item

    vm.node = node

  }


};
</script>

<style>

div.item-list{
  padding: 5px;
}

</style>
