<script setup lang="ts">
import {Application, Sprite, Texture} from 'pixi.js';
import { onMounted,ref } from 'vue';
import {assetsLoader} from './files/assetsLoader'
let app:any = ref()
let clientWidth:any
let clientHeigth:any
let sprite:any
let bgTexture:any
  // Append the application canvas to the document body
  onMounted(async ()=>{
    clientWidth= document.getElementById('game-container')?.offsetWidth
    clientHeigth = document.getElementById('game-container')?.offsetHeight
    console.log(document.getElementById('game-container'))
    // Create a new application
    app = new Application();
    // Initialize the application
    await app.init({ backgroundAlpha: 0,width: 100,height:100});
    console.log(app)
    document.getElementById('game-container')?.appendChild(app.canvas);
    app.renderer.resize( clientWidth , clientHeigth )

    await assetsLoader()

    bgTexture = Texture.from('main_bg')
    sprite = new Sprite(bgTexture)
    console.log(sprite)
    if(clientWidth < clientHeigth){
      let sRatio =  clientHeigth / bgTexture.height
      sprite.scale.set(sRatio)
    }
    else{
      let sRatio =  clientWidth / bgTexture.width
      sprite.scale.set(sRatio)
    }
    sprite.x = clientWidth/2
    sprite.y = clientHeigth/2
    sprite.anchor.set(0.5)
    app.stage.addChild(sprite)
  })
  window.addEventListener('resize',()=>{
    console.log('resized')
    console.log(app.renderer)
    clientWidth = document.getElementById('game-container')?.offsetWidth
    clientHeigth = document.getElementById('game-container')?.offsetHeight
    console.log(clientWidth,' cWidth')
    console.log(clientHeigth,' cHeight')
    app.renderer.resize(clientWidth,clientHeigth)
    if(sprite){
     if(clientWidth < clientHeigth){
        console.log('portrait')
        let sRatio =  clientHeigth / bgTexture.height
        console.log(sRatio)
        sprite.scale.set(sRatio)
      }
      else{
        console.log('landscape')
        let sRatio =  clientWidth / bgTexture.width
        console.log(sRatio)
        sprite.scale.set(sRatio)
      }
    }
    sprite.x = clientWidth/2
    sprite.y = clientHeigth/2
    sprite.anchor.set(0.5)
  })
</script>

<template>
  <!-- <div class="header"></div>
  <div class="content"></div> -->
  <div class="header"></div>
  <div class="content">
    <div id="game-container">
    </div>
  </div>
 

</template>

<style scoped>
.header{
  width: 100%;
  height: 100px;
  background-color: aqua;
}
.content{
  width: 100%;
  height: calc(100% - 100px);
}
#game-container{
  width: 100%;
  height: 100%;
}
</style>
