<template>
      <div class="hobby-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <div class="container">
    <div class="background"><h6>Hobby Page</h6></div>
        <h1>SOCCER</h1><br>
        <p>サッカーを14年目やってます。<br>今も社会人でやってます。</p>
        <h2>Sports</h2>
        <p>週に5回程度<br>ランニングをしたり体を動かしたりしてます。</p>
        <h3>Youtube</h3>
        <p>暇なときは、大体Youtubeを見ています。</p>
        <h4>Tik Tok</h4>
        <p>暇な時でYoutubeを見ていないとき<br>Tik Tokを見ています。</p>
        <h5>Sleeping</h5>
        <p>とてもとても暇なときはだいたい寝ています。</p>
    </div>  
        </div>
      
</template>

<script>
export default {
   name: "HobbyPage",
}


</script>
<style  scoped>  


  div .hobby-container{
    text-align: center;
  }
  .hobby-container{
  background-image: url('~assets/soccer_field.jpg');
  background-size: contain
}
@media screen and (min-width: 0px) {
    h6 {
      text-align: center;
      font-size: 300%;
      color: gray
  }
  h1,h2,h3,h4,h5{
      text-align: center;
      font-size: 30px;
  }

  p{
      text-align: center;
      font-size: 15px;
      color: black;
      position: relative;
      bottom: 30px;
  }

  .top{
      font-size: 30px;
      position: relative;
      top: 10px;
  }

}

@media screen and (min-width: 480px) {
    h6 {
      text-align: center;
      font-size: 400%;
      color: gray
  }
  h1,h2,h3,h4,h5{
      text-align: center;
      font-size: 40px;
  }

  p{
      text-align: center;
      font-size: 25px;
      color: black;
      position: relative;
      bottom: 30px;
  }

  .top{
      font-size: 50px;
      position: relative;
      top: 10px;
  }

}

@media screen and (min-width: 768px) {
    h6 {
      text-align: center;
      font-size: 600%;
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
}
  .background {
  width: 100%;
}

.container {
  animation: zoomin 1s ease-out forwards;
}

@keyframes zoomin {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
