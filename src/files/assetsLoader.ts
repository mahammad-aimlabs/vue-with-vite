import {Assets} from 'pixi.js';
import {assets as manifest} from './assets';
export async function assetsLoader(){
   console.log(manifest)
    await Assets.init({ manifest });

 // Load a bundle...
    await Assets.loadBundle('load-screen',(progress)=>{
        console.log(progress)
    }).then((assets)=>{
        console.log(assets['main_bg'])
    })

    // Assets.add({alias: 'bunnyBooBoo', src: './assets/main_bg.png'});
    // const bunny = await Assets.load('bunnyBooBoo');
    // console.log(bunny)
}