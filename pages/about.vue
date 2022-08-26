<template>
    <div class="about-container">
        <a href="/" class="top" style="color: blue;">Top</a>
        <div class="container">
    <div class="background"><h4>About Page</h4></div>

        <h1>Name</h1>
        <p>Syunsuke.Fujino</p>
        <h2>From</h2>
        <p>Japan.okayama</p>
        <h3>Age</h3>
        <p> years old</p>
        <h5>likes</h5>
        <p>soccer</p>
        <h6>Birth Day</h6>
        <p>December 23</p>

</div>

    </div>
</template>

<script>
export default {
    name: "AboutPage",
}
function getAge(year, month, day) {

// 今日の日付データを取得
const today = new Date();

// 生年月日の日付データを取得
const birthdate = new Date(year, month - 1, day);

// 今年の誕生日の日付データを取得
const currentYearBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

// 生まれた年と今年の差を計算
let age = today.getFullYear() - birthdate.getFullYear();

// 今日の日付と今年の誕生日を比較
if (today < currentYearBirthday) {
  // 今年誕生日を迎えていない場合、1を引く
  age--;
}
 // 年齢の値を返す
return age;
}
// 結果をコンソールに出力
console.log(getAge(2002, 12, 23));
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
                color: red;
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
                color: red;
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
@media screen and (min-width: 1400px) {
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
    .about-container{
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
