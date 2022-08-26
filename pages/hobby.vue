<template>
      <div class="hobby-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <h6>Hobby Page</h6>
        
        <h1>SOCCER</h1><br>
        <p>サッカーを14年目やってます。<br>今も社会人でやってます。</p>
        <h2>Sports</h2>
        <p>週に5回程度、ランニングをしたり体を動かしたりしてます。</p>
        <h3>Youtube</h3>
        <p>暇なときは、大体Youtubeを見ています。</p>
        <h4>Tik Tok</h4>
        <p>暇な時でYoutubeを見ていないときはTik Tokを見ています。</p>
        <h5>Sleeping</h5>
        <p>とてもとても暇なときはだいたい寝ています。</p>
    </div>
</template>

<script>
export default {
   name: "HobbyPage",
}


</script>
<style  scoped>  
h6 {
      text-align: center;
      font-size: 800%;
      color: gray
  }
  h1,h2,h3,h4,h5{
      text-align: center;
      font-size: 50px;
  }

  p{
      text-align: center;
      font-size: 30px;
      color: black;
  }

  .top{
      font-size: 80px;
      position: relative;
      top: 100px;
  }

  div .hobby-container{
    text-align: center;
  }
  .hobby-container{
  background-image: url('~assets/soccer_field.jpg');
  background-size: contain
}
</style>