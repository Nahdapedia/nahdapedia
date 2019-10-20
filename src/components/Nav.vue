<template>
  <nav class="navbar">
    <div class="container">
        <ul class="navbar-list">
            <li class="navbar-item two columns"><g-link to="/agents" class="navbar-link">Artists ({{$static.artists.totalCount}})</g-link></li>
            <li class="navbar-item two columns"><g-link to="/works" class="navbar-link">Works ({{$static.works.totalCount}})</g-link></li>
            <li class="navbar-item two columns"><g-link to="/genres" class="navbar-link">Genres ({{$static.works.totalCount}})</g-link></li>
            <li class="navbar-item two columns"><g-link to="/releases" class="navbar-link">Releases ({{$static.releases.totalCount}})</g-link></li>
            <li class="navbar-item two columns"><g-link to="/labels" class="navbar-link">Labels ({{$static.labels.totalCount}})</g-link></li>
        </ul>
    </div>
  </nav>
</template>

<static-query>
query {
  artists: allAgent {
    totalCount
  }
  works: allWork {
    totalCount
  }
  releases: allRelease {
    totalCount
  }
  genres: allGenre {
    totalCount
  }
  labels: allLabel {
    totalCount
  }
}
</static-query>


<style>
.navbar {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.navbar > .container {
    width: 100%;
}

.navbar-list {
    list-style: none;
    margin-bottom: 0;
}

.navbar-item {
    position: relative;
    float: left;
    margin-bottom: 0;
}

.navbar-link {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .2rem;
    margin-right: 35px;
    text-decoration: none;
    line-height: 6.5rem;
    color: #222;
}

.navbar-link.active {
    color: #33C3F0;
}

</style>

<script>
export default {
    name: 'Nav'
}
</script>
