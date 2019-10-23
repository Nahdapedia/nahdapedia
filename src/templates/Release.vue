<template>
  <Layout>
    <ReleaseHeading type="Release"
                    :title="$page.item.title"
                    :label="$page.item.label"
                    :artist="$page.item.artist"
                    :catalogue_numbers="$page.item.catalogue_numbers"
                    />
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
        <div class="field-label two columns">Tracks: </div>
        <div class="field-value ten columns">
            <table class="u-full-width">
                <thead>
                    <tr>
                    <th v-for="tfield in track_fields" :key="tfield" :item="tfield">{{tfield}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="track in this.$page.item.tracks" :key="track.id">
                        <td class="track-track-details">
                            <div class="track-label track-label-record-number">
                                <DiscIcon style="display: inline-block; margin-right: 5px;" />
                                <span class="track-record-number">{{track.record_number}}</span>
                                <span class="track-side-number"> - Side: {{track.side_number}}</span>
                            </div>
                            <div class="track-label"><span class="track-catalogue-number">Catalogue: {{track.catalogue_number}}</span></div>
                            <div class="track-label"><span class="track-matrix-number">Matrix: {{track.matrix_number}}</span></div>
                        </td>
                        <td class="track-work-info">
                            <div>
                                <LinkifyNode class="linkified-work" title_field="title" node_type="work" :node_id="track.work"/>
                            </div>
                        </td>
                        <td class="track-contributors">
                            <ol class="contributor-list">
                                    <li class="contributor-item"  v-for="c in track.contributors" :key="c.contributor" :item="c">
                                        <LinkifyNode class="linkified-contributor" title_field="name" :key="c.id" node_type="agent" :node_id="c.contributor"/>
                                        <p>{{c.contributor_role}}</p>
                                    </li>
                            </ol>
                            
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
div.release-heading {
    margin-bottom: 3rem;

}

.track-label{
    font-size: 1.1rem;
}

div.track-label-record-number,
span.track-record-number{
    font-size: 2.2rem;
}
span.track-side-number{
    font-size: 1.1rem;
}

.linkified-contributor{
    text-decoration: none;
}

.track-contributors ol.contributor-list{
    list-style-type: none;
}

td.track-track-details,
td.track-work-info{
    vertical-align: top;
}

li.contributor-item,
li.contributor-item p{
    margin-top: 0px;
    margin-bottom: 1px;
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
        catalogue_number
        matrix_number
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
import DiscIcon from 'vue-ionicons/dist/md-disc.vue'

export default {
  components: {PageHeading, ReleaseHeading, ItemList, LinkifyNode, DiscIcon},
  data: () => {
      return {
        track_fields: ['Track', 'Work', 'Artists/Contributors']
      }
  }
}

</script>