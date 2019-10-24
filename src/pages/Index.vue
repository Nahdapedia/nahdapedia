<template>
  <Layout>
    <section class="posts">
      <div class="post-title index-page-title">
        <h1>{{$page.item.title}}</h1>
      </div>
      <div class="post-content index-page-content">
        <p v-html="$page.item.content" />
      </div>
    </section>
  </Layout>
</template>

<page-query>
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
</page-query>

<style>
.post-citations{
  margin-top: 45px;
}

</style>



<script>
import Citations from '@/components/Citations.vue'

import collections from '~/admin/collections.json'

export default {
  components: {
    Citations
  }
};
</script>
