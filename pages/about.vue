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
h1,h2,h3,h5,h6{
    text-align: center;
    font-size: 50px;
}

p{
    text-align: center;
    font-size: 30px;
    position: relative;
    top: -30px;
}

h4{
    text-align: center;
    font-size: 70px;
    color: red;
}

.about-container{
  background-image: url('~assets/soccer_field.jpg');
  background-size: cover
}

.top{
    position: relative;
    left: 48%;
    top: 50px;
    font-size: 30px;
}
</style>