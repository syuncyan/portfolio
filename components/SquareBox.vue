<template>
<div class="square">
  <a href="404.html" class="not" style="color: blue;">404</a>
  </div>
</template>

<script>

</script>

<style>
  @media screen and (min-width: 0px) {
    .square {
            width: 100px;
            margin: 0 auto;
              height: 100px;
              height: 100px;
              border-radius: 50%;
              background-image: url(soccer_ball.jpg);
              background-position: center;
              background-size: cover;
            }
            .not{
                 position: relative;
                 top: 40px;
                 font-size: 10px;
                }
  }
  @media screen and (min-width: 480px) {
    .square {
            width: 200px;
            margin: 0 auto;
              height: 200px;
              height: 200px;
              border-radius: 50%;
              background-image: url(soccer_ball.jpg);
              background-position: center;
              background-size: cover;
            }
            .not{
                 position: relative;
                 top: 80px;
                 font-size: 20px;
                }
  }
  @media screen and (min-width: 768px) {
    .square {
            width: 300px;
            margin: 0 auto;
              height: 300px;
              height: 300px;
              border-radius: 50%;
              background-image: url(soccer_ball.jpg);
              background-position: center;
              background-size: cover;
            }              
            .not{
                 position: relative;
                 top: 120px;
                 font-size: 30px;
                }
  }
.square:hover{
  box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
  transform: translateY(-10px);
  transition-duration: 0.5s;
}

</style>
