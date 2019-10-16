<template>
  <div class="item-list">
    <hr class="line">
    <h1 class="name">{{item.name}} | {{item.name_ar}}</h1>
    <g-link :to="item.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["item"]
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
