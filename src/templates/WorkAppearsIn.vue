<template>
    <pre>{{$page.appears_in}}</pre>
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
  name: 'WorkAppears',
  props: ['id']
}
</script>

<page-query>
query allRelease($id:String!) {
  appears_in: allRelease (sortBy: "name", order: ASC,
  filter: {tracks: {work: {eq: $id}}}){
    totalCount
    edges {
      node {
        id
        type
        title
        catalogue_numbers
        label{
          id
          name
        }
        path
      }
    }
  }
}
</page-query>
