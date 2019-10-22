<template>
  <Layout>
    <ReleaseHeading type="Release" :title="$page.item.title" :label="$page.item.label"/>
    <div class="page-fields container">
      <div class="field-row row">
        <div class="field-label two columns">Title: </div>
        <div class="field-value ten columns">{{$page.item.title}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Title (Arabic): </div>
        <div class="field-value ten columns">{{$page.item.title_ar}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Media type: </div>
        <div class="field-value ten columns">{{$page.item.media_type}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Record count: </div>
        <div class="field-value ten columns">{{ $page.item.record_count}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Release type: </div>
        <div class="field-value ten columns">{{$page.item.release_type}}</div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Artists: </div>
        <div class="field-value ten columns">
            <ItemList title_field="name" v-for="artist in $page.item.artist" :key="artist.id" :item="artist" />
        </div>

      </div>
      <div class="field-row row">
        <div class="field-label two columns">Catalogue numbers: </div>
        <div class="field-value ten columns">
          <ul>
            <li v-for="(catno, cat_index) in $page.item.catalogue_numbers" v-bind:key="cat_index">{{catno}}</li>
          </ul>
        </div>
      </div>
      <div class="field-row row">
        <div class="field-label two columns">Tracks: </div>
        <div class="field-value ten columns">
            <table class="u-full-width">
                <thead>
                    <tr>
                    <th v-for="tfield in track_fields" :key="tfield" :item="tfield">{{tfield}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="track in this.$page.item.tracks" :key="track.id" :item="track">
                        <td>
                            <div>
                                <LinkifyNode class="linkified-work" title_field="title" node_type="work" :node_id="track.work"/>
                            </div>
                            <div class="track-label"><span class="track-label track-record-number">Record number: </span>{{track.record_number}}</div>
                            <div class="track-label"><span class="track-label track-side-number">Side number: </span>{{track.record_number}}</div>
                            <div class="track-label"><span class="track-label track-catalogue-number">Catalogue number: </span>{{track.catalogue_number}}</div>
                            <div class="track-label"><span class="track-label track-matrix-number">Matrix number: </span>{{track.matrix_number}}</div>
                        </td>
                        <td>
                            <div class="track-contributor" v-for="c in track.contributors" :key="c.contributor" :item="c">
                                <ol class="contributor-list">
                                    <li>
                                        <LinkifyNode class="linkified-contributor" title_field="name" v-for="c in track.contributors" :key="c.id" node_type="agent" :node_id="c.contributor"/>
                                        <p>{{c.contributor_role}}</p>
                                    </li>
                                </ol>
                            </div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </Layout>
</template>


<style>
.track-label{
    font-size: 0.9rem;
}
.linkified-contributor{
    text-decoration: none;
}
.contributor-list{
    list-style-type: none;
}
</style>

<page-query>
query Release ($id: ID!) {
   item: release (id: $id) {
    id
    type
    title
    record_count
    artist {
        id
        name
        name_ar
        path
    }
    release_type
    catalogue_numbers
    label{
        id
        name
        path
    }
    media_type
    tracks{
        record_number
        side_number
        track_number
        work
        contributors{
            contributor
            contributor_role
        }
    }
  }
}
</page-query>

<script>
import PageHeading from '@/components/PageHeading.vue'
import ReleaseHeading from '@/components/ReleaseHeading.vue'
import ItemList from "@/components/ItemList";
import LinkifyNode from "@/components/LinkifyNode"

export default {
  components: {PageHeading, ReleaseHeading, ItemList, LinkifyNode},
  data: () => {
      return {
        track_fields: ['Work', 'Artists/Contributors']
      }
  }
}

</script>