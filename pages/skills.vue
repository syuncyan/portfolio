<template>
        <div class="skills-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <h6>Skills Page</h6>
    <h1>C言語</h1>
    <p>高校の時に3年間授業があった、専門学校でも1年間授業があった。。</p>
    <h2>Python</h2>
    <p>高校の時の課題研究でさらっとやったことがある程度。</p>
    <h3>Ruby</h3>
    <p>高校3年生の時の授業でさらっとやったことがある程度</p>
    <h4>JavaScript</h4>
    <p>専門学校の授業でたぶん1年くらい授業があった。</p>
    <h5>MySql</h5>
    <p>高校の時に1年くらい、専門学校ではそこそこ授業があったきがする。</p>
    </div>
</template>

<script>
export default {
    name: "SkillsPage",
}
</script>

<style  scoped>  
            h1,h2,h3,h4,h5{
                text-align: center;
                font-size: 50px;
            }
            p{
                text-align: center;
                font-size: 30px;
            }
            .top{
                position: relative;
                left: 48%;
                top: 50px;
                font-size: 30px;
            }
            h6 {
                text-align: center;
                font-size: 70px;
                color: aqua;
            }
  
    .top{
        position: relative;
        left: 48%;
        top: 50px;
        font-size: 30px;
    }
    .skills-container{
    background-image: url('~assets/soccer_field.jpg');
    background-size: cover
  }
  </style>