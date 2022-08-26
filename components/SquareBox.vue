<template>
<div class="square"
      :style="{background:activeColor}"
      @click="changecolor">
      <p class="text">{{text}}</p>
      </div>
</template>

<script>
export default {
  data () {
    return {
      activeColor: this.sColor,
    }
  },
  props:[
    'pColor',
    'sColor',
    'text',
  ],
  methods: {
    changecolor() {
      if(this.activeColor === this.pColor){
        this.activeColor = this.sColor
      }else{
        this.activeColor = this.pColor
      }
    }
  },
}
</script>

<style>
.square {
            width: 300px;
              height: 300px;
              position: relative;
              left:10%;
              border-radius: 50%;
              background-image: url(soccer_ball.jpg);
              background-position: center;
              background-size: cover;
}
.text{
  text-align: center;
  position: absolute;
  top: 30%;
  left: 20%;
  color: rgb(12, 12, 12);
  font-size: 60px;
}
</style>