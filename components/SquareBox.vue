<template>
<div class="square">
  <a href="404.html" class="not" style="color: blue;">404</a>
  </div>
</template>

<script>

</script>

<style>
.square {
            width: 300px;
            text-align: center;
              height: 300px;
              position: relative;
              left: 38%;
              border-radius: 50%;
              background-image: url(soccer_ball.jpg);
              background-position: center;
              background-size: cover;
}
.square img{
  width: 100%;
  cursor: pointer;
}
.square:hover{
  box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
  transform: translateY(-10px);
  transition-duration: 0.5s;
}
.not{
  position: relative;
  top: 120px;
  font-size: 30px;
}
</style>
