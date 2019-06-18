<template>
<div id="app">

</div>
</template>

<script>
import SVG from './svg';

export default {
  name: 'app',
  data () {
    return {
      svg: null
    };
  },
  mounted () {
    const body = document.getElementsByTagName('body')[0];
    this.svg = new SVG({
      width: body.clientWidth,
      height: body.clientHeight
    }, document.getElementById('app'));

    this.svg.line({ x1: 0, y1: 80, x2: 100, y2: 20, stroke: 'green' });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>
