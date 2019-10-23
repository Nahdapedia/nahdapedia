<template>
    <header class="header">
        <div id="headerdiv">
          <a href="/"><span id="nahda">NAHDA</span><span id="pedia">PEDIA</span></a>
          <h6>{{$static.metadata.siteDescription}}</h6>
        </div>
        
    </header>
</template>


<style>

.header{
  padding-top: 6rem;
}

#headerdiv a{

  text-decoration: none;
  color: #222222;

}

#nahda, #pedia{
  font-weight: 100; 
  font-family: 'Rubik', sans-serif;
  line-height: 3rem;
}

#nahda{
  font-size: 10rem;
}

#pedia{
  font-size: 6rem;
  color: #414141;
}

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