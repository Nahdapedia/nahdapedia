<template>
    <div class="container page-heading release-heading">
        <div class="content-type row">{{type}}</div>
        <div class="label-catalogue row">
            <div class="label">
                <g-link :to="label.path">{{label.name}}</g-link>
                <span class="catalogue-numbers "> {{ catalogue_numbers.join(' / ') }} </span>
            </div>
        </div>
        <div class="content-title row">{{title}}</div>
        <div class="artist">
            <LinkifyNode class="linkified-artist" v-for="a in artist" :key="a.id" title_field="name" node_type="agent" :node_id="a.id"/>
        </div>
    </div>
</template>

<style>

div.release-heading{
    width: 100%;
}

div.page-heading{
    margin-top: 2rem;
    margin-bottom: 3rem;
}

div.content-type{
    color: #777;
}

div.content-title{
    font-size: 4.2rem;
    line-height: 1.25;
    letter-spacing: -.1rem;
    font-weight: 300;
}

div.label{
    display: inline-block;
    float: left;
    text-align: left;
    vertical-align: middle;
    font-family: 'Rubik', sans-serif;
}
span.catalogue-numbers{
    text-align: right;
    padding-left: 0.5rem;
    vertical-align: middle;
    font-family: 'Rubik', sans-serif;
    color: #777777;
    font-size: 1rem;
}

div.content-title{
    display: block;
    width:100%;
}
.page-heading h6.label{
    color: #0FA0CE;
    margin-bottom: 1px;
}

.page-heading a {
    text-decoration: none;
}

.content-title h2 {
    margin-bottom: 0.5rem;
}

.linkified-artist{
    display: inline-block;
}

div.artist a{
    padding-left: 1rem;
    font-weight: bold;
    color: #aaaaaa;
}

</style>


<script>
import PageHeading from './PageHeading.vue';
import LinkifyNode from './LinkifyNode.vue'

export default {
  extends: PageHeading,
  components: {LinkifyNode},
  name: 'ReleaseHeading',
  props: ['type', 'title', 'label', 'artist', 'catalogue_numbers']
}
</script>