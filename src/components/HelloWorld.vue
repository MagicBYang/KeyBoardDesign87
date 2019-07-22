<template>

   <div id="container">
    <colorPicker class="colorTable" v-model="color"/>
    <div class="keyboard" style="border:4px solid">
        <div class="top">
           <div class="top-1">
               <div class="top-1-1 hasBorder" @click="handleClick($event)">Esc</div>
           </div>
           <div class="top-2">
               <div class="top-2-1 hasBorder" @click="handleClick($event)">F1</div>
               <div class="top-2-2 hasBorder" @click="handleClick($event)">F2</div>
               <div class="top-2-3 hasBorder" @click="handleClick($event)">F3</div>
               <div class="top-2-4 hasBorder" @click="handleClick($event)">F4</div>
           </div>
           <div class="top-3">
               <div class="top-3-1 hasBorder" @click="handleClick($event)">F5</div>
               <div class="top-3-2 hasBorder" @click="handleClick($event)">F6</div>
               <div class="top-3-3 hasBorder" @click="handleClick($event)">F7</div>
               <div class="top-3-4 hasBorder" @click="handleClick($event)">F8</div>
           </div>
           <div class="top-4">
               <div class="top-4-1 hasBorder" @click="handleClick($event)">F9</div>
               <div class="top-4-2 hasBorder" @click="handleClick($event)">F10</div>
               <div class="top-4-3 hasBorder" @click="handleClick($event)">F11</div>
               <div class="top-4-4 hasBorder" @click="handleClick($event)">F12</div>
           </div>
           <div class="top-5">
            <div class="top-5-1 hasBorder" @click="handleClick($event)">PS</div>
            <div class="top-5-2 hasBorder" @click="handleClick($event)">SL</div>
            <div class="top-5-3 hasBorder" @click="handleClick($event)">PB</div>
           </div>
        </div>
        <div class="bottom">
            <div class="bottom-1">
                <div class="bottom-1-1 hasBorder" @click="handleClick($event)">`~</div>
                <div class="bottom-1-2 hasBorder" @click="handleClick($event)">1!</div>
                <div class="bottom-1-3 hasBorder" @click="handleClick($event)">2@</div>
                <div class="bottom-1-4 hasBorder" @click="handleClick($event)">3#</div>
                <div class="bottom-1-5 hasBorder" @click="handleClick($event)">4$</div>
                <div class="bottom-1-6 hasBorder" @click="handleClick($event)">5%</div>
                <div class="bottom-1-7 hasBorder" @click="handleClick($event)">6^</div>
                <div class="bottom-1-8 hasBorder" @click="handleClick($event)">7&</div>
                <div class="bottom-1-9 hasBorder" @click="handleClick($event)">8*</div>
                <div class="bottom-1-10 hasBorder" @click="handleClick($event)">9(</div>
                <div class="bottom-1-11 hasBorder" @click="handleClick($event)">0)</div>
                <div class="bottom-1-12 hasBorder" @click="handleClick($event)">-_</div>
                <div class="bottom-1-13 hasBorder" @click="handleClick($event)">=+</div>
                <div class="bottom-1-14 hasBorder" @click="handleClick($event)">→</div>
                <div class="bottom-1-15 hasBorder" @click="handleClick($event)">Ins</div>
                <div class="bottom-1-16 hasBorder" @click="handleClick($event)">HM</div>
                <div class="bottom-1-17 hasBorder" @click="handleClick($event)">PU</div>
            </div>
            <div class="bottom-2">
                <div class="bottom-2-1 hasBorder" @click="handleClick($event)">Tab</div>
                <div class="bottom-2-2 hasBorder" @click="handleClick($event)">Q</div>
                <div class="bottom-2-3 hasBorder" @click="handleClick($event)">W</div>
                <div class="bottom-2-4 hasBorder" @click="handleClick($event)">E</div>
                <div class="bottom-2-5 hasBorder" @click="handleClick($event)">R</div>
                <div class="bottom-2-6 hasBorder" @click="handleClick($event)">T</div>
                <div class="bottom-2-7 hasBorder" @click="handleClick($event)">Y</div>
                <div class="bottom-2-8 hasBorder" @click="handleClick($event)">U</div>
                <div class="bottom-2-9 hasBorder" @click="handleClick($event)">I</div>
                <div class="bottom-2-10 hasBorder" @click="handleClick($event)">O</div>
                <div class="bottom-2-11 hasBorder" @click="handleClick($event)">P</div>
                <div class="bottom-2-12 hasBorder" @click="handleClick($event)">[{</div>
                <div class="bottom-2-13 hasBorder" @click="handleClick($event)">]}</div>
                <div class="bottom-2-14 hasBorder" @click="handleClick($event)">\|</div>
                <div class="bottom-2-15 hasBorder" @click="handleClick($event)">Del</div>
                <div class="bottom-2-16 hasBorder" @click="handleClick($event)">End</div>
                <div class="bottom-2-17 hasBorder" @click="handleClick($event)">PD</div>
            </div>
            <div class="bottom-3">
                <div class="bottom-3-1 hasBorder" @click="handleClick($event)">Caps</div>
                <div class="bottom-3-2 hasBorder" @click="handleClick($event)">A</div>
                <div class="bottom-3-3 hasBorder" @click="handleClick($event)">S</div>
                <div class="bottom-3-4 hasBorder" @click="handleClick($event)">D</div>
                <div class="bottom-3-5 hasBorder" @click="handleClick($event)">F</div>
                <div class="bottom-3-6 hasBorder" @click="handleClick($event)">G</div>
                <div class="bottom-3-7 hasBorder" @click="handleClick($event)">H</div>
                <div class="bottom-3-8 hasBorder" @click="handleClick($event)">J</div>
                <div class="bottom-3-9 hasBorder" @click="handleClick($event)">K</div>
                <div class="bottom-3-10 hasBorder" @click="handleClick($event)">L</div>
                <div class="bottom-3-11 hasBorder" @click="handleClick($event)">;:</div>
                <div class="bottom-3-12 hasBorder" @click="handleClick($event)">'"</div>
                <div class="bottom-3-13 hasBorder" @click="handleClick($event)">Enter</div>
            </div>
            <div class="bottom-4">
                <div class="bottom-4-1 hasBorder" @click="handleClick($event)">Shift</div>
                <div class="bottom-4-2 hasBorder" @click="handleClick($event)">Z</div>
                <div class="bottom-4-3 hasBorder" @click="handleClick($event)">X</div>
                <div class="bottom-4-4 hasBorder" @click="handleClick($event)">C</div>
                <div class="bottom-4-5 hasBorder" @click="handleClick($event)">V</div>
                <div class="bottom-4-6 hasBorder" @click="handleClick($event)">B</div>
                <div class="bottom-4-7 hasBorder" @click="handleClick($event)">N</div>
                <div class="bottom-4-8 hasBorder" @click="handleClick($event)">M</div>
                <div class="bottom-4-9 hasBorder" @click="handleClick($event)">,<</div>
                <div class="bottom-4-10 hasBorder" @click="handleClick($event)">.></div>
                <div class="bottom-4-11 hasBorder" @click="handleClick($event)">/?</div>
                <div class="bottom-4-12 hasBorder" @click="handleClick($event)">Shift</div>
                <div class="bottom-4-13 hasBorder" @click="handleClick($event)">↑</div>
            </div>
            <div class="bottom-5">
                <div class="bottom-5-1 hasBorder" @click="handleClick($event)">Ctrl</div>
                <div class="bottom-5-2 hasBorder" @click="handleClick($event)">Win</div>
                <div class="bottom-5-3 hasBorder" @click="handleClick($event)">Alt</div>
                <div class="bottom-5-4 hasBorder" @click="handleClick($event)">Space</div>
                <div class="bottom-5-5 hasBorder" @click="handleClick($event)">Alt</div>
                <div class="bottom-5-6 hasBorder" @click="handleClick($event)">Fn</div>
                <div class="bottom-5-7 hasBorder" @click="handleClick($event)">Doc</div>
                <div class="bottom-5-8 hasBorder" @click="handleClick($event)">Ctrl</div>
                <div class="bottom-5-9 hasBorder" @click="handleClick($event)">←</div>
                <div class="bottom-5-10 hasBorder" @click="handleClick($event)">↓</div>
                <div class="bottom-5-11 hasBorder" @click="handleClick($event)">→</div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import { constants } from 'fs';
export default {
  name: 'HelloWorld',
  data () {
    return {
      color: '#FF6600',
    }
  },
  methods:{
      handleClick(e){
          e.srcElement.style.backgroundColor = this.color
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,body{
        background-color:lightskyblue
    }
    
    .hasBorder{
        border:2px solid;
    }

    .keyboard{
        box-shadow: 10px 10px 0px #302e2e;
        margin-top: 200px;
        margin-left: 250px;
        display: flex;
        flex-direction: column;
        vertical-align: center;
        line-height: 63.34px;
        max-width: 1350.5px;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        background-color:white
    }
    .top{
        flex:1.5;
        display:flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        margin-bottom:20px;
    }
    .top .top-1{
        flex:0.7;
        display: flex;
        justify-content: flex-start;
        max-width: 165px;
    }
    .top-1 >div{
        box-shadow: 3px 3px 0px #302e2e;
        margin-left: 12px;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 12.72px; 
        
    }
    .top .top-2{
        flex:4;
        display: flex;
        justify-content: flex-start;
        max-width: 335px;
        margin-left: 82px;
        
    }
    .top-2 >div{
        box-shadow: 3px 3px 0px #302e2e;
        margin-right: 5px;
        padding-left: 20px;
        padding-right: 20px; 
        min-width: 23.5px;
    }

    .top .top-3{
        flex:4;
        display: flex;
        justify-content: flex-start;
        margin-left: -15px;
        max-width: 310px; 
    }
    .top-3 >div{
        box-shadow: 3px 3px 0px #302e2e;
        margin-right: 5px;
        padding-left: 20px;
        padding-right: 20px;
        min-width: 23.5px;
    }
    .top .top-4{
        flex:4;
        display: flex;
        justify-content: flex-start;
        max-width: 323px; 
    }
    .top-4 >div{
        box-shadow: 3px 3px 0px #302e2e;
        margin-right: 5px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 18px;
        min-width: 33.5px;
        
    }
    .top-4 .top-4-1{
        margin-left: 15.5px;
    }
    .top .top-5{
        flex:3;
        margin-left: -20px;
        max-width: 933.5px;
        display: flex;
        justify-content: flex-start;
    }
    .top-5 >div{
        box-shadow: 3px 3px 0px #302e2e;
        margin-right: 5px;
        padding-left: 20px;
        padding-right: 15px;
        font-size:18px;
        min-width: 28.5px;
    }
    .top-5 .top-5-1{
        margin-left: 35.5px;
    }
    .bottom{
        text-align: center;
        flex:4.5;
        display: flex;
        flex-direction: column;
    }
    .bottom >div{
        margin-left: 12px;
        margin-bottom:5px;
        flex:1;

        max-height: 80px;  
    }      
    .bottom .bottom-1{
        display: flex;
    }
    .bottom .bottom-1 >div{
        box-shadow: 3px 3px 0px #302e2e;
        flex:1;
        max-width: 63.5px;
        margin-right:5px;
    }
    .bottom .bottom-1-14{
        min-width: 130px;
    }
    .bottom .bottom-1-15{
        font-size: 16px;
        margin-left: 32px;
    }
    .bottom .bottom-1-16{
        font-size: 16px;
    }
    .bottom .bottom-1-17{
        font-size: 16px;
    }
    .bottom .bottom-2{
        display: flex;
    }
    .bottom .bottom-2 >div{
        box-shadow: 3px 3px 0px #302e2e;
        flex:1;
        max-width: 63.5px;
        margin-right:5px;
    }
    .bottom .bottom-2-1{
        min-width: 100px;
    }
    .bottom .bottom-2-14{
        min-width: 94px;
    }
    .bottom .bottom-2-15{
        font-size: 16px;
        margin-left: 32px;
    }
    .bottom .bottom-2-16{
        font-size: 16px;
    }
    .bottom .bottom-2-17{
        font-size: 16px;
    }
    .bottom .bottom-3{
        display: flex;
        justify-content: flex-start
    }
    .bottom .bottom-3 >div{
        box-shadow: 3px 3px 0px #302e2e;
        flex:1;
        max-width: 63.5px;
        margin-right:5px;
    }
    .bottom .bottom-3-1{
        min-width: 120px;
    }
    .bottom .bottom-3-13{
        min-width: 146px;
    }
    .bottom .bottom-4{
        display: flex;
        justify-content: flex-start
    }
    .bottom .bottom-4 >div{
        box-shadow: 3px 3px 0px #302e2e;
        flex:1;
        max-width: 63.5px;
        margin-right:5px;
    }
    .bottom .bottom-4-1{
        min-width: 169.5px;
    }
    .bottom .bottom-4-12{
        min-width: 169.5px;
    }
    .bottom .bottom-4-13{
        margin-left: 105px
    }
    .bottom .bottom-5{
        display: flex;
        justify-content: flex-start
    }
    .bottom .bottom-5 >div{
        box-shadow: 3px 3px 0px #302e2e;
        flex:1;
        max-width: 63.5px;
        margin-right:5px;
    }
    .bottom .bottom-5-1{
        min-width: 86px;
    }
    .bottom .bottom-5-2{
        min-width: 86px;
    }
    .bottom .bottom-5-3{
        min-width: 86px;
    }
    .bottom .bottom-5-4{
        min-width: 429.5px;
    }
    .bottom .bottom-5-5{
        min-width: 86px;
    }
    .bottom .bottom-5-6{
        min-width: 86px;
    }
    .bottom .bottom-5-8{
        min-width: 86px;
    }
    .bottom .bottom-5-9{
        margin-left: 33.5px
    }

 
</style>
