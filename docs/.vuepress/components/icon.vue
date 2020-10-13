<template>
  <div class="wrap">
    <div class="icons" v-on:click="clip(type)" v-for="type in iconType">
      <div :class="[`icon icon-${type}`]"></div>
      <p class="entity">{{type}}</p>
    </div>
    <div class="toast" v-if="toast"><span class="icon-like"></span>复制到剪贴板成功！</div>
  </div>
</template>

<script>
  import {icons} from "./fonts/icon";
  import Clipboard from "clipboard";

  export default {
    data() {
      return {
        toast: false,
        icons: icons,
        iconType: Object.keys(icons)
      }
    },
    methods: {
      clip(icon) {
        const clipboard = new Clipboard('.wrap', {
          text: function () {
            return icon;
          }
        });
        clipboard.on('success', (e) => {
          this.toast = true;
          setTimeout(()=> {this.toast = false;}, 2000);
          e.clearSelection();
          clipboard.destroy();
        });
      }
    }
  }
</script>

<style scoped>
  @import url(./fonts/style.css);

  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .icons {
    width: 180px;
    height: 90px;
    margin-bottom: 10px;
  }

  .icons:hover {
    cursor: pointer;
    background: #456fff;
    color: #FFFFFF;
    box-shadow: 0px 0px 10px #DCDCDC;
    border-radius: 5px;
  }

  .icon {
    font-size: 40px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .entity {
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  .toast {
    position: fixed;
    top: 100px;
    left: 50%;
    background-color: #38c797;
    color: #FFFFFF;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 5px;
  }
</style>
