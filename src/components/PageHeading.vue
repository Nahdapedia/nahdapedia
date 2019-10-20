<template>
    <div class="page-heading">
      <div class="content-type">{{type}}</div>
      <div class="content-title">
          <h2><span>{{title}}</span></h2>
      </div>
    </div>
</template>

<style>
.page-heading{
    margin-top: 15px;
    margin-bottom: 15px;
}
.content-type{
    color: #777;
}

</style>


<script>
export default{
  name: 'PageHeading',
  props: ['type', 'title']
}
</script>