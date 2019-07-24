<template>

   <div id="container">
       <div class='colorBox'>
           <div>
                <div style="font-family:微软雅黑;font-weight:bold;font-size:40px;">选色区</div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">ColorPicker</div>
               <div>
                   <colorPicker class="colorTable" v-model="color"></colorPicker>
               </div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#ECAD55</div>
               <div style="backgroundColor:#ECAD55;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#FF7174</div>
               <div style="backgroundColor:#FF7174;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#767B77</div>
               <div style="backgroundColor:#767B77;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#7F5B8C</div>
               <div style="backgroundColor:#7F5B8C;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#FF7B3A</div>
               <div style="backgroundColor:#FF7B3A;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#82C82E</div>
               <div style="backgroundColor:#82C82E;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#36ADBB</div>
               <div style="backgroundColor:#36ADBB;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
           <div>
               <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">#69C9B8</div>
               <div style="backgroundColor:#69C9B8;width:15px;height:15px" @click="getColor($event)"></div>
           </div>
       </div>
       <div class='functionBox'>
           <div>
                <div style="font-family:微软雅黑;font-weight:bold;font-size:40px;">功能区</div>
           </div>
           <div class='functionBox-function'>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">全部填充灰色</div>
                    <div style="backgroundColor:#767B77;width:15px;height:15px" @click="setColor('#767B77')"></div>
                </div>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">全部填充白色</div>
                    <div style="backgroundColor:#ffffff;width:15px;height:15px" @click="setColor('#ffffff')"></div>
                </div>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">填充自定义色</div>
                    <div>
                        <colorPicker class="colorTable" v-model="allColor" v-on:change="setColor"></colorPicker>
                    </div>
                </div>
           </div>
       </div>
       <div class='defaultPlans'>
           <div>
                <div style="font-family:微软雅黑;font-weight:bold;font-size:40px;">方案区</div>
           </div>
           <div class='defaultPlans-Plans'>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">迈阿密</div>
                    <div style="backgroundColor:#767B77;width:15px;height:15px"></div>
                </div>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">切诺贝利</div>
                    <div style="backgroundColor:#ffffff;width:15px;height:15px"></div>
                </div>
                <div>
                    <div style="font-family:黑体;font-weight:bold;margin-bottom:5px;">核辐射</div>
                    <div>
                        <colorPicker class="colorTable" v-model="allColor"></colorPicker>
                    </div>
                </div>  
           </div>
       </div>       
    <div class="keyboard" style="border:4px solid">
        <div class="top">
           <div class="top-1">
               <div class="top-1-1 hasBorder" ref = '1' id='1' @click="handleClick($event)" @mouseover="handleOver($event)">Esc</div>
           </div>
           <div class="top-2">
               <div class="top-2-1 hasBorder" ref = '2' id='2' @click="handleClick($event)" @mouseover="handleOver($event)">F1</div>
               <div class="top-2-2 hasBorder" ref = '3' id='3' @click="handleClick($event)" @mouseover="handleOver($event)">F2</div>
               <div class="top-2-3 hasBorder" ref = '4' id='4' @click="handleClick($event)" @mouseover="handleOver($event)">F3</div>
               <div class="top-2-4 hasBorder" ref = '5' id='5' @click="handleClick($event)" @mouseover="handleOver($event)">F4</div>
           </div>
           <div class="top-3">
               <div class="top-3-1 hasBorder" ref = '6' id='6' @click="handleClick($event)" @mouseover="handleOver($event)">F5</div>
               <div class="top-3-2 hasBorder" ref = '7' id='7' @click="handleClick($event)" @mouseover="handleOver($event)">F6</div>
               <div class="top-3-3 hasBorder" ref = '8' id='8' @click="handleClick($event)" @mouseover="handleOver($event)">F7</div>
               <div class="top-3-4 hasBorder" ref = '9' id='9' @click="handleClick($event)" @mouseover="handleOver($event)">F8</div>
           </div>
           <div class="top-4">
               <div class="top-4-1 hasBorder" ref = '10' id='10' @click="handleClick($event)" @mouseover="handleOver($event)">F9</div>
               <div class="top-4-2 hasBorder" ref = '11' id='11' @click="handleClick($event)" @mouseover="handleOver($event)">F10</div>
               <div class="top-4-3 hasBorder" ref = '12' id='12' @click="handleClick($event)" @mouseover="handleOver($event)">F11</div>
               <div class="top-4-4 hasBorder" ref = '13' id='13' @click="handleClick($event)" @mouseover="handleOver($event)">F12</div>
           </div>
           <div class="top-5">
               <div class="top-5-1 hasBorder" ref = '14' id='14' @click="handleClick($event)" @mouseover="handleOver($event)">PS</div>
               <div class="top-5-2 hasBorder" ref = '15' id='15' @click="handleClick($event)" @mouseover="handleOver($event)">SL</div>
               <div class="top-5-3 hasBorder" ref = '16' id='16' @click="handleClick($event)" @mouseover="handleOver($event)">PB</div>
           </div>
        </div>
        <div class="bottom">
            <div class="bottom-1">
                <div class="bottom-1-1 hasBorder" ref = '17' id='17' @click="handleClick($event)" @mouseover="handleOver($event)">`~</div>
                <div class="bottom-1-2 hasBorder" ref = '18' id='18' @click="handleClick($event)" @mouseover="handleOver($event)">1!</div>
                <div class="bottom-1-3 hasBorder" ref = '19' id='19' @click="handleClick($event)" @mouseover="handleOver($event)">2@</div>
                <div class="bottom-1-4 hasBorder" ref = '20' id='20' @click="handleClick($event)" @mouseover="handleOver($event)">3#</div>
                <div class="bottom-1-5 hasBorder" ref = '21' id='21' @click="handleClick($event)" @mouseover="handleOver($event)">4$</div>
                <div class="bottom-1-6 hasBorder" ref = '22' id='22' @click="handleClick($event)" @mouseover="handleOver($event)">5%</div>
                <div class="bottom-1-7 hasBorder" ref = '23' id='23' @click="handleClick($event)" @mouseover="handleOver($event)">6^</div>
                <div class="bottom-1-8 hasBorder" ref = '24' id='24' @click="handleClick($event)" @mouseover="handleOver($event)">7&</div>
                <div class="bottom-1-9 hasBorder" ref = '25' id='25' @click="handleClick($event)" @mouseover="handleOver($event)">8*</div>
                <div class="bottom-1-10 hasBorder" ref = '26' id='26' @click="handleClick($event)" @mouseover="handleOver($event)">9(</div>
                <div class="bottom-1-11 hasBorder" ref = '27' id='27' @click="handleClick($event)" @mouseover="handleOver($event)">0)</div>
                <div class="bottom-1-12 hasBorder" ref = '28' id='28' @click="handleClick($event)" @mouseover="handleOver($event)">-_</div>
                <div class="bottom-1-13 hasBorder" ref = '29' id='29' @click="handleClick($event)" @mouseover="handleOver($event)">=+</div>
                <div class="bottom-1-14 hasBorder" ref = '30' id='30' @click="handleClick($event)" @mouseover="handleOver($event)">→</div>
                <div class="bottom-1-15 hasBorder" ref = '31' id='31' @click="handleClick($event)" @mouseover="handleOver($event)">Ins</div>
                <div class="bottom-1-16 hasBorder" ref = '32' id='32' @click="handleClick($event)" @mouseover="handleOver($event)">HM</div>
                <div class="bottom-1-17 hasBorder" ref = '33' id='33' @click="handleClick($event)" @mouseover="handleOver($event)">PU</div>
            </div>
            <div class="bottom-2">
                <div class="bottom-2-1 hasBorder" ref = '34' id='34' @click="handleClick($event)" @mouseover="handleOver($event)">Tab</div>
                <div class="bottom-2-2 hasBorder" ref = '35' id='35' @click="handleClick($event)" @mouseover="handleOver($event)">Q</div>
                <div class="bottom-2-3 hasBorder" ref = '36' id='36' @click="handleClick($event)" @mouseover="handleOver($event)">W</div>
                <div class="bottom-2-4 hasBorder" ref = '37' id='37' @click="handleClick($event)" @mouseover="handleOver($event)">E</div>
                <div class="bottom-2-5 hasBorder" ref = '38' id='38' @click="handleClick($event)" @mouseover="handleOver($event)">R</div>
                <div class="bottom-2-6 hasBorder" ref = '39' id='39' @click="handleClick($event)" @mouseover="handleOver($event)">T</div>
                <div class="bottom-2-7 hasBorder" ref = '40' id='40' @click="handleClick($event)" @mouseover="handleOver($event)">Y</div>
                <div class="bottom-2-8 hasBorder" ref = '41' id='41' @click="handleClick($event)" @mouseover="handleOver($event)">U</div>
                <div class="bottom-2-9 hasBorder" ref = '42' id='42' @click="handleClick($event)" @mouseover="handleOver($event)">I</div>
                <div class="bottom-2-10 hasBorder" ref = '43' id='43' @click="handleClick($event)" @mouseover="handleOver($event)">O</div>
                <div class="bottom-2-11 hasBorder" ref = '44' id='44' @click="handleClick($event)" @mouseover="handleOver($event)">P</div>
                <div class="bottom-2-12 hasBorder" ref = '45' id='45' @click="handleClick($event)" @mouseover="handleOver($event)">[{</div>
                <div class="bottom-2-13 hasBorder" ref = '46' id='46' @click="handleClick($event)" @mouseover="handleOver($event)">]}</div>
                <div class="bottom-2-14 hasBorder" ref = '47' id='47' @click="handleClick($event)" @mouseover="handleOver($event)">\|</div>
                <div class="bottom-2-15 hasBorder" ref = '48' id='48' @click="handleClick($event)" @mouseover="handleOver($event)">Del</div>
                <div class="bottom-2-16 hasBorder" ref = '49' id='49' @click="handleClick($event)" @mouseover="handleOver($event)">End</div>
                <div class="bottom-2-17 hasBorder" ref = '50' id='50' @click="handleClick($event)" @mouseover="handleOver($event)">PD</div>
            </div>
            <div class="bottom-3">
                <div class="bottom-3-1 hasBorder" ref = '51' id='51' @click="handleClick($event)" @mouseover="handleOver($event)">Caps</div>
                <div class="bottom-3-2 hasBorder" ref = '52' id='52' @click="handleClick($event)" @mouseover="handleOver($event)">A</div>
                <div class="bottom-3-3 hasBorder" ref = '53' id='53' @click="handleClick($event)" @mouseover="handleOver($event)">S</div>
                <div class="bottom-3-4 hasBorder" ref = '54' id='54' @click="handleClick($event)" @mouseover="handleOver($event)">D</div>
                <div class="bottom-3-5 hasBorder" ref = '55' id='55' @click="handleClick($event)" @mouseover="handleOver($event)">F</div>
                <div class="bottom-3-6 hasBorder" ref = '56' id='56' @click="handleClick($event)" @mouseover="handleOver($event)">G</div>
                <div class="bottom-3-7 hasBorder" ref = '57' id='57' @click="handleClick($event)" @mouseover="handleOver($event)">H</div>
                <div class="bottom-3-8 hasBorder" ref = '58' id='58' @click="handleClick($event)" @mouseover="handleOver($event)">J</div>
                <div class="bottom-3-9 hasBorder" ref = '59' id='59' @click="handleClick($event)" @mouseover="handleOver($event)">K</div>
                <div class="bottom-3-10 hasBorder" ref = '60' id='60' @click="handleClick($event)" @mouseover="handleOver($event)">L</div>
                <div class="bottom-3-11 hasBorder" ref = '61' id='61' @click="handleClick($event)" @mouseover="handleOver($event)">;:</div>
                <div class="bottom-3-12 hasBorder" ref = '62' id='62' @click="handleClick($event)" @mouseover="handleOver($event)">'"</div>
                <div class="bottom-3-13 hasBorder" ref = '63' id='63' @click="handleClick($event)" @mouseover="handleOver($event)">Enter</div>
            </div>
            <div class="bottom-4">
                <div class="bottom-4-1 hasBorder"  ref = '64' id='64' @click="handleClick($event)" @mouseover="handleOver($event)">Shift</div>
                <div class="bottom-4-2 hasBorder"  ref = '65' id='65' @click="handleClick($event)" @mouseover="handleOver($event)">Z</div>
                <div class="bottom-4-3 hasBorder"  ref = '66' id='66' @click="handleClick($event)" @mouseover="handleOver($event)">X</div>
                <div class="bottom-4-4 hasBorder"  ref = '67' id='67' @click="handleClick($event)" @mouseover="handleOver($event)">C</div>
                <div class="bottom-4-5 hasBorder"  ref = '68' id='68' @click="handleClick($event)" @mouseover="handleOver($event)">V</div>
                <div class="bottom-4-6 hasBorder"  ref = '69' id='69' @click="handleClick($event)" @mouseover="handleOver($event)">B</div>
                <div class="bottom-4-7 hasBorder"  ref = '70' id='70' @click="handleClick($event)" @mouseover="handleOver($event)">N</div>
                <div class="bottom-4-8 hasBorder"  ref = '71' id='71' @click="handleClick($event)" @mouseover="handleOver($event)">M</div>
                <div class="bottom-4-9 hasBorder"  ref = '72' id='72' @click="handleClick($event)" @mouseover="handleOver($event)">,<</div>
                <div class="bottom-4-10 hasBorder"  ref = '73' id='73' @click="handleClick($event)" @mouseover="handleOver($event)">.></div>
                <div class="bottom-4-11 hasBorder"  ref = '74' id='74' @click="handleClick($event)" @mouseover="handleOver($event)">/?</div>
                <div class="bottom-4-12 hasBorder"  ref = '75' id='75' @click="handleClick($event)" @mouseover="handleOver($event)">Shift</div>
                <div class="bottom-4-13 hasBorder"  ref = '76' id='76' @click="handleClick($event)" @mouseover="handleOver($event)">↑</div>
            </div>
            <div class="bottom-5">
                <div class="bottom-5-1 hasBorder"  ref = '77' id='77' @click="handleClick($event)" @mouseover="handleOver($event)">Ctrl</div>
                <div class="bottom-5-2 hasBorder"  ref = '78' id='78' @click="handleClick($event)" @mouseover="handleOver($event)">Win</div>
                <div class="bottom-5-3 hasBorder"  ref = '79' id='79' @click="handleClick($event)" @mouseover="handleOver($event)">Alt</div>
                <div class="bottom-5-4 hasBorder"  ref = '80' id='80' @click="handleClick($event)" @mouseover="handleOver($event)">Space</div>
                <div class="bottom-5-5 hasBorder"  ref = '81' id='81' @click="handleClick($event)" @mouseover="handleOver($event)">Alt</div>
                <div class="bottom-5-6 hasBorder"  ref = '82' id='82' @click="handleClick($event)" @mouseover="handleOver($event)">Fn</div>
                <div class="bottom-5-7 hasBorder"  ref = '83' id='83' @click="handleClick($event)" @mouseover="handleOver($event)">Doc</div>
                <div class="bottom-5-8 hasBorder"  ref = '84' id='84' @click="handleClick($event)" @mouseover="handleOver($event)">Ctrl</div>
                <div class="bottom-5-9 hasBorder"  ref = '85' id='85' @click="handleClick($event)" @mouseover="handleOver($event)">←</div>
                <div class="bottom-5-10 hasBorder"  ref = '86' id='86' @click="handleClick($event)" @mouseover="handleOver($event)">↓</div>
                <div class="bottom-5-11 hasBorder"  ref = '87' id='87' @click="handleClick($event)" @mouseover="handleOver($event)">→</div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      color: '#FF6600',
      allColor:'#FF0000',
      keyBoardData:[]
    }
  },
  mounted(){
      //为所有按键注册对象,建立查询关系等，通过ref作为桥梁操纵dom
      for(let i=1;i<=87;i++){
          this.keyBoardData.push({
              id:i,
              originColor:'#ffffff',
              currentColor:'#ffffff',
          })
      }  
  },
  methods:{
      setColor(hex){
          for(let i=0;i<=this.keyBoardData.length-1;i++){
              this.$refs[this.keyBoardData[i].id].style.backgroundColor = hex
              this.keyBoardData[i].currentColor = hex
          }
      },    
      getColor(e){
          this.color = e.srcElement.style.backgroundColor
      },
      searchKey(id){
          let keyObject
          this.keyBoardData.forEach((item)=>{
              if(item.id==id){
                  keyObject = item
              }
          })
          return keyObject
      },
      handleClick(e){
          this.$refs[e.srcElement.id].style.cssText  = 'box-shadow: 0px 0px 0px #302e2e'
          this.$refs[e.srcElement.id].style.backgroundColor  = '#708090'
          setTimeout(()=>{
              this.$refs[e.srcElement.id].style.cssText  = '10px 10px 0px #302e2e'
              this.$refs[e.srcElement.id].style.backgroundColor = this.color
              let keyObject = this.searchKey(e.srcElement.id)
              keyObject.currentColor = this.color
          },100)
      },
      handleOver(e){
          this.$refs[e.srcElement.id].style.cssText  = 'box-shadow: 0px 0px 0px #302e2e'
          this.$refs[e.srcElement.id].style.backgroundColor = '#708090'
          setTimeout(()=>{
              this.$refs[e.srcElement.id].style.cssText  = '10px 10px 0px #302e2e'
              let keyObject = this.searchKey(e.srcElement.id)
              this.$refs[e.srcElement.id].style.backgroundColor = keyObject.currentColor
          },100)
      },
      applyPlan(){
          for(let i=0;i<=this.keyBoardData.length-1;i++){
              this.$refs[this.keyBoardData[i].id].style.backgroundColor = this.keyBoardData[i].currentColor
          }
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,body{
        background-color:lightskyblue;
        
    }
    .colorBox{
        position: fixed;
        display: flex;
        flex-direction: column;
        left:5%;
        top:22%;
        z-index: 999;
        background-color:#F5F5F5
    }
    .colorBox >div{
        flex:1;
        font-size: 10px;
        margin: 10px;
    }
    .functionBox{
        position: fixed;
        display: flex;
        left:14%;
        top:10%;
        z-index: 999;
        flex-direction: column;
        background-color:#F5F5F5
    }
    .functionBox >div{
        flex:1;
        font-size: 10px;
        margin: 10px;
    }
    .functionBox-function {
        display: flex;
    }
    .functionBox-function >div {
        margin-right: 10px;
    }
    .defaultPlans{
        flex-direction: column;
        position: fixed;
        display: flex;
        left:14%;
        top:80%;
        z-index: 999;
        background-color:#F5F5F5
    }
    .defaultPlans >div{
        flex:2;
        font-size: 10px;
        margin: 10px;
    }
    .defaultPlans-Plans{
        display: flex;
    }
    .defaultPlans-Plans >div{
        margin-right: 10px;
    }
    .hasBorder{
        border:2px solid;
    }
    .keyboard{
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        box-shadow: 10px 10px 0px #302e2e;
        margin: 0 auto; /*水平居中*/
        position: relative;
        top: 50%; /*偏移*/
        transform: translateY(50%);
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
