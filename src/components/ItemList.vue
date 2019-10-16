<template>
  <div class="item-list">
    <hr class="line">
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
.line {
  border: 0.5px solid #cdc8c5;
  margin: 30px 0;
}

.date {
  font-weight: 300;
}

.read {
  padding: 7px;
  color: #333;
  text-decoration: none;
  border: 2px dashed #fecd43;
}
</style>
