<template>
    <div class="page-heading release-heading">
        <div class="content-type">{{type}}</div>
        <h6 class="label"><g-link :to="label.path">[{{label.name}}]</g-link></h6>
        <div class="content-title"><h2><span>{{title}}</span></h2></div>
    </div>
</template>

<style>
div.page-heading{
    margin-top: 15px;
    margin-bottom: 15px;
}
div.content-type{
    color: #777;
}
.page-heading h6.label{
    color: #0FA0CE;
    margin-bottom: 1px;
}

.page-heading a {
    text-decoration: none;
}

</style>


<script>
import PageHeading from './PageHeading.vue';

export default {
  extends: PageHeading,
  name: 'ReleaseHeading',
  props: ['type', 'title', 'label']
}
</script>