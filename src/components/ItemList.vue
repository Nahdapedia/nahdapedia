<template>
  <div class="item-list">
    <g-link :to="item.path" class="title">{{this.$props.item[this.$props.title_field]}}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {type: Object},
    title_field: {default: "title"}
  },


};
</script>

<style>

div.item-list{
  padding: 5px;
}
</style>
