<template>
    <header class="header">
        <h1>{{$static.metadata.siteName}}</h1>
        <h5>{{$static.metadata.siteDescription}}</h5>
    </header>
</template>

<style>

</style>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default{
  name: 'Header'
}
</script>