<template>
        <div class="skills-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <div class="container">
    <div class="background"><h6>Skills Page</h6></div>
        
    <h1>C言語</h1>
    <p>高校の時に3年間授業があった<br>専門学校でも1年間授業があった。</p>
    <h2>Python</h2>
    <p>高校の時<br>課題研究でさらっとやったことがある程度。</p>
    <h3>Ruby</h3>
    <p>高校3年生の時<br>授業でさらっとやったことがある程度</p>
    <h4>JavaScript</h4>
    <p>専門学校の授業でたぶん1年くらい授業があった。</p>
    <h5>Vue.js</h5>
    <p>今回のポートフォリオサイトの作成に使った。</p>
    </div>
    </div>
</template>

<script>
export default {
    name: "SkillsPage",
}
</script>

<style  scoped>  
    .skills-container{
    background-image: url('~assets/soccer_field.jpg');
    background-size: contain
  }
  div .skills-container{
    text-align: center;
  }
  p{
    position: relative;
    bottom: 30px;
  }
  @media screen and (min-width: 0px) {
    h1,h2,h3,h4,h5{
                text-align: center;
                font-size: 30px;
            }
            p{
                text-align: center;
                font-size: 15px;
            }
            h6 {
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
    h1,h2,h3,h4,h5{
                text-align: center;
                font-size: 40px;
            }
            p{
                text-align: center;
                font-size: 25px;
            }
            h6 {
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
    h1,h2,h3,h4,h5{
                text-align: center;
                font-size: 50px;
            }
            p{
                text-align: center;
                font-size: 30px;
            }
            h6 {
                text-align: center;
                font-size: 600%;
                color: aqua;
            }
  
    .top{
        font-size: 80px;
        position: relative;
        top: 100px;
    }
  }



  @media screen and (min-width: 1500px) {
    h1,h2,h3,h4,h5{
                text-align: center;
                font-size: 50px;
            }
            p{
                text-align: center;
                font-size: 30px;
            }
            h6 {
                text-align: center;
                font-size: 600%;
                color: aqua;
            }
  
    .top{
        font-size: 80px;
        position: relative;
        top: 100px;
    }

    .skills-container{
  background-position: center;
  background-repeat: no-repeat;
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
