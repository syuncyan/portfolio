<template>
    <div class="about-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <h4>About Page</h4>
        <h1>Name</h1>
        <p>Syunsuke.Fujino</p>
        <h2>From</h2>
        <p>Japan.okayama</p>
        <h3>Age</h3>
        <p>19 years old</p>
        <h5>likes</h5>
        <p>soccer</p>
        <h6>Birth Day</h6>
        <p>December 23</p>
    </div>
</template>

<script>
export default {
    name: "AboutPage",
}
</script>

<style scoped>

.about-container{
  background-image: url('~assets/soccer_field.jpg');
  background-size: contain
}
div .about-container{
    text-align: center;
  }
  @media screen and (min-width: 0px) {
    h1,h2,h3,h6,h5{
                text-align: center;
                font-size: 30px;
            }
            p{
                text-align: center;
                font-size: 15px;
                position: relative;
                bottom: 30px;
            }
            h4 {
                text-align: center;
                font-size: 300%;
                color: aqua;
            }
  
    .top{
        font-size: 30px;
        position: relative;
        top: 10px;
    }
}
@media screen and (min-width: 480px) {
    h1,h2,h3,h6,h5{
                text-align: center;
                font-size: 40px;
            }
            p{
                text-align: center;
                font-size: 25px;
                position: relative;
                bottom: 30px;
            }
            h4 {
                text-align: center;
                font-size: 400%;
                color: aqua;
            }
  
    .top{
        font-size: 50px;
        position: relative;
        top: 10px;
    }
}

@media screen and (min-width: 768px) {
    h1,h2,h3,h6,h5{
                text-align: center;
                font-size: 50px;
            }
            p{
                text-align: center;
                font-size: 30px;
            }
            h4 {
                text-align: center;
                font-size: 700%;
                color: red;
            }
  
    .top{
        font-size: 80px;
        position: relative;
        top: 100px;
    }
}
</style>
