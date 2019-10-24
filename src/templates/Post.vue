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
query Post {($id:ID)
   item: post (id: $id) {
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
