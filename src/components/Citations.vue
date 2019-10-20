<template>
<div>
  <ol class='citations-list'>
    <li v-for="citation in citations" v-bind:key="citation.id" style="list-style-type: none;">
      <span class="citation-number">{{citation.footnote_number}}. </span>
      <p class="citation-title"><g-link :to="citation.path" class="title">{{citation.title}}</g-link></p>
      <p class="citation-comment">{{citation.citation_comment}}</p>
    </li>  
  </ol> 
</div>
</template>


<style>
ol.citations-list {
  color: #aaa;
  list-style-type: none;
  margin-top: 5px;
}

ol.citations-list li {
  position: relative;
  font: bold 1.2rem Helvetica, Verdana, sans-serif;
  margin-bottom: 20px;
}

ol.citations-list li p {
  font: 1.2rem Helvetica, sans-serif;
  padding-left: 20px;
  color: #555;
}

span.citation-number {
  position: absolute;
}

p.citation-title{
  margin-bottom: 1px;
}

p.citation-comment{
  margin-top: 1px;
}

</style>


<script>
export default {
  name: "Citations",
  props: {
    citations: {type: Array},
  },

};
</script>
