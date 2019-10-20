<template>
    <div class="page-heading work-heading">
        <h6 v-if="genre == undefined" class="content-type">Work</h6>
        <h6 v-else class="content-type">{{genre.name}}</h6>
        <div class="content-title"><h2><span>{{title}}</span></h2></div>
    </div>
</template>

<style scoped>
.page-heading{
    margin-top: 15px;
    margin-bottom: 15px;
}

h6.content-type{
    color: #777;
    margin-bottom: 1px;
}

</style>


<script>
import PageHeading from './PageHeading.vue';

export default {
  extends: PageHeading,
  name: 'WorkHeading',
  props: ['type', 'title', 'genre']
}
</script>