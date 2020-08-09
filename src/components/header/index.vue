<template>
  <div class="c-header">
    <router-link to="/">
      <p>iStore</p>
    </router-link>
    <img src="@/assets/search.png">
    <input type="text" name="c-search" placeholder="搜索">
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .c-header {
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 44px;
    top: 0;
    background: #000;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
  }
  .c-header p {
    color: #fff;
    font-size: 16px;
    margin-left: 27px;
  }
  .c-header img {
    width: 15px;
    position: absolute;
    right: 45px;
    opacity: 0.5;
    z-index: 2;
    cursor: pointer;
  }
  .c-header input {
    width: 255px;
    height: 24px;
    font-size: 9px;
    right: 27px;
    position: absolute;
    background: #282828;
    text-indent: 1.5em;
    color: #fff;
    border: 0px solid #000;
    border-radius: 10px;
    outline: none;
  }
@media screen and (min-width: 767Px) {
  .c-header {
    height: 30px;
  }
  .c-header p {
    font-size: 12px;
    margin-left: 25px;
  }
  .c-header input {
    width: 265px;
    height: 16px;
    right: 25px;
  }
  .c-header img {
    width: 12px;
    right: 37px;
  }
}
@media screen and (min-width: 1200Px) {
  .c-header {
    height: 15px;
  }
  .c-header p {
    font-size: 5px;
    margin-left: 10px;
  }
  .c-header input {
    width: 80px;
    height: 8px;
    right: 10px;
    font-size: 5px;
  }
  .c-header img {
    width: 6px;
    right: 15px;
  }
}
</style>
