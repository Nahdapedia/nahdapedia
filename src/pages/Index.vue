<template>
  <Layout>
    <section class="items">
      <div class="post-title index-page-title">
        <h1>{{$static.item.title}}</h1>
      </div>
      <div class="post-content index-page-content">
        <div v-html="$static.item.content" />
      </div>
    </section>
  </Layout>
</template>

<static-query>
query Post {
   item: post (id: "c5965f8f-52e6-4124-84e8-2bebc8a4bc5c") {
    type
    title
    excerpt
    date
    citations {
      footnote_number
      citation_comment
      citation_reference
    }
    content
    path
  }
}
</static-query>

<style>
.post-citations{
  margin-top: 45px;
}

</style>



<script>


</script>
