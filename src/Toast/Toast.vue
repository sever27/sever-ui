<template>
  <div v-show="visible" class="sever-toast">
      <span class="toast-msg">{{msg}}</span>
  </div>
</template>
<script>
export default {
  name:"sever-toast",
  data(){
    return {
      visible:true,
      msg:'',
      timeout:''
    }
  },
  methods:{
  }
}
</script>
<style lang="scss">
  .sever-toast{
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