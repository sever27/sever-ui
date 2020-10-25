<template>
  <div class="mini-toast">
      <span class="toast-msg">{{propData}}</span>
  </div>
</template>
<script>
export default {
  name:"mini-toast",
  props:{
    propData:{
        type: String,
        default: '默认值'
    }
  },
  data(){
    return {
    }
  },
}
</script>
<style lang="scss">
  .mini-toast{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  .toast-msg{
    color: #ffffff;
    background:rgba(0,0,0,0.5);
    padding:0.3rem;
    border-radius: 0.1rem;
    font-size: 0.34rem;
  }
</style>