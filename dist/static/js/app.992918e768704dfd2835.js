webpackJsonp([1],{"9vSG":function(t,r){},NHnr:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("7+uW"),o={render:function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},o,!1,function(t){e("9vSG")},null,null).exports,a=e("/ocq"),s={name:"HelloWorld",data:function(){return{color:"#FF6600",allColor:"#FF0000",keyBoardData:[]}},mounted:function(){for(var t=1;t<=87;t++)this.keyBoardData.push({id:t,originColor:"#ffffff",currentColor:"#ffffff"})},methods:{setColor:function(t){for(var r=0;r<=this.keyBoardData.length-1;r++)this.$refs[this.keyBoardData[r].id].style.backgroundColor=t,this.keyBoardData[r].currentColor=t},getColor:function(t){this.color=t.srcElement.style.backgroundColor},searchKey:function(t){var r=void 0;return this.keyBoardData.forEach(function(e){e.id==t&&(r=e)}),r},handleClick:function(t){var r=this;this.$refs[t.srcElement.id].style.cssText="box-shadow: 0px 0px 0px #302e2e",this.$refs[t.srcElement.id].style.backgroundColor="#708090",setTimeout(function(){r.$refs[t.srcElement.id].style.cssText="10px 10px 0px #302e2e",r.$refs[t.srcElement.id].style.backgroundColor=r.color,r.searchKey(t.srcElement.id).currentColor=r.color},100)},handleOver:function(t){var r=this;this.$refs[t.srcElement.id].style.cssText="box-shadow: 0px 0px 0px #302e2e",this.$refs[t.srcElement.id].style.backgroundColor="#708090",setTimeout(function(){r.$refs[t.srcElement.id].style.cssText="10px 10px 0px #302e2e";var e=r.searchKey(t.srcElement.id);r.$refs[t.srcElement.id].style.backgroundColor=e.currentColor},100)},applyPlan:function(){for(var t=0;t<=this.keyBoardData.length-1;t++)this.$refs[this.keyBoardData[t].id].style.backgroundColor=this.keyBoardData[t].currentColor}}},c={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"container"}},[e("div",{staticClass:"colorBox"},[t._m(0),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("ColorPicker")]),t._v(" "),e("div",[e("colorPicker",{staticClass:"colorTable",model:{value:t.color,callback:function(r){t.color=r},expression:"color"}})],1)]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#ECAD55")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#ECAD55",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#FF7174")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#FF7174",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#767B77")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#767B77",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#7F5B8C")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#7F5B8C",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#FF7B3A")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#FF7B3A",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#82C82E")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#82C82E",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#36ADBB")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#36ADBB",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("#69C9B8")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#69C9B8",width:"15px",height:"15px"},on:{click:function(r){return t.getColor(r)}}})])]),t._v(" "),e("div",{staticClass:"functionBox"},[t._m(1),t._v(" "),e("div",{staticClass:"functionBox-function"},[e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("全部填充灰色")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#767B77",width:"15px",height:"15px"},on:{click:function(r){return t.setColor("#767B77")}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("全部填充白色")]),t._v(" "),e("div",{staticStyle:{backgroundColor:"#ffffff",width:"15px",height:"15px"},on:{click:function(r){return t.setColor("#ffffff")}}})]),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("填充自定义色")]),t._v(" "),e("div",[e("colorPicker",{staticClass:"colorTable",on:{change:t.setColor},model:{value:t.allColor,callback:function(r){t.allColor=r},expression:"allColor"}})],1)])])]),t._v(" "),e("div",{staticClass:"defaultPlans"},[t._m(2),t._v(" "),e("div",{staticClass:"defaultPlans-Plans"},[t._m(3),t._v(" "),t._m(4),t._v(" "),e("div",[e("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[t._v("核辐射")]),t._v(" "),e("div",[e("colorPicker",{staticClass:"colorTable",model:{value:t.allColor,callback:function(r){t.allColor=r},expression:"allColor"}})],1)])])]),t._v(" "),e("div",{staticClass:"keyboard",staticStyle:{border:"4px solid"}},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-1"},[e("div",{ref:"1",staticClass:"top-1-1 hasBorder",attrs:{id:"1"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Esc")])]),t._v(" "),e("div",{staticClass:"top-2"},[e("div",{ref:"2",staticClass:"top-2-1 hasBorder",attrs:{id:"2"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F1")]),t._v(" "),e("div",{ref:"3",staticClass:"top-2-2 hasBorder",attrs:{id:"3"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F2")]),t._v(" "),e("div",{ref:"4",staticClass:"top-2-3 hasBorder",attrs:{id:"4"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F3")]),t._v(" "),e("div",{ref:"5",staticClass:"top-2-4 hasBorder",attrs:{id:"5"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F4")])]),t._v(" "),e("div",{staticClass:"top-3"},[e("div",{ref:"6",staticClass:"top-3-1 hasBorder",attrs:{id:"6"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F5")]),t._v(" "),e("div",{ref:"7",staticClass:"top-3-2 hasBorder",attrs:{id:"7"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F6")]),t._v(" "),e("div",{ref:"8",staticClass:"top-3-3 hasBorder",attrs:{id:"8"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F7")]),t._v(" "),e("div",{ref:"9",staticClass:"top-3-4 hasBorder",attrs:{id:"9"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F8")])]),t._v(" "),e("div",{staticClass:"top-4"},[e("div",{ref:"10",staticClass:"top-4-1 hasBorder",attrs:{id:"10"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F9")]),t._v(" "),e("div",{ref:"11",staticClass:"top-4-2 hasBorder",attrs:{id:"11"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F10")]),t._v(" "),e("div",{ref:"12",staticClass:"top-4-3 hasBorder",attrs:{id:"12"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F11")]),t._v(" "),e("div",{ref:"13",staticClass:"top-4-4 hasBorder",attrs:{id:"13"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F12")])]),t._v(" "),e("div",{staticClass:"top-5"},[e("div",{ref:"14",staticClass:"top-5-1 hasBorder",attrs:{id:"14"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("PS")]),t._v(" "),e("div",{ref:"15",staticClass:"top-5-2 hasBorder",attrs:{id:"15"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("SL")]),t._v(" "),e("div",{ref:"16",staticClass:"top-5-3 hasBorder",attrs:{id:"16"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("PB")])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("div",{staticClass:"bottom-1"},[e("div",{ref:"17",staticClass:"bottom-1-1 hasBorder",attrs:{id:"17"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("`~")]),t._v(" "),e("div",{ref:"18",staticClass:"bottom-1-2 hasBorder",attrs:{id:"18"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("1!")]),t._v(" "),e("div",{ref:"19",staticClass:"bottom-1-3 hasBorder",attrs:{id:"19"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("2@")]),t._v(" "),e("div",{ref:"20",staticClass:"bottom-1-4 hasBorder",attrs:{id:"20"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("3#")]),t._v(" "),e("div",{ref:"21",staticClass:"bottom-1-5 hasBorder",attrs:{id:"21"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("4$")]),t._v(" "),e("div",{ref:"22",staticClass:"bottom-1-6 hasBorder",attrs:{id:"22"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("5%")]),t._v(" "),e("div",{ref:"23",staticClass:"bottom-1-7 hasBorder",attrs:{id:"23"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("6^")]),t._v(" "),e("div",{ref:"24",staticClass:"bottom-1-8 hasBorder",attrs:{id:"24"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("7&")]),t._v(" "),e("div",{ref:"25",staticClass:"bottom-1-9 hasBorder",attrs:{id:"25"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("8*")]),t._v(" "),e("div",{ref:"26",staticClass:"bottom-1-10 hasBorder",attrs:{id:"26"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("9(")]),t._v(" "),e("div",{ref:"27",staticClass:"bottom-1-11 hasBorder",attrs:{id:"27"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("0)")]),t._v(" "),e("div",{ref:"28",staticClass:"bottom-1-12 hasBorder",attrs:{id:"28"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("-_")]),t._v(" "),e("div",{ref:"29",staticClass:"bottom-1-13 hasBorder",attrs:{id:"29"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("=+")]),t._v(" "),e("div",{ref:"30",staticClass:"bottom-1-14 hasBorder",attrs:{id:"30"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("→")]),t._v(" "),e("div",{ref:"31",staticClass:"bottom-1-15 hasBorder",attrs:{id:"31"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Ins")]),t._v(" "),e("div",{ref:"32",staticClass:"bottom-1-16 hasBorder",attrs:{id:"32"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("HM")]),t._v(" "),e("div",{ref:"33",staticClass:"bottom-1-17 hasBorder",attrs:{id:"33"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("PU")])]),t._v(" "),e("div",{staticClass:"bottom-2"},[e("div",{ref:"34",staticClass:"bottom-2-1 hasBorder",attrs:{id:"34"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Tab")]),t._v(" "),e("div",{ref:"35",staticClass:"bottom-2-2 hasBorder",attrs:{id:"35"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Q")]),t._v(" "),e("div",{ref:"36",staticClass:"bottom-2-3 hasBorder",attrs:{id:"36"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("W")]),t._v(" "),e("div",{ref:"37",staticClass:"bottom-2-4 hasBorder",attrs:{id:"37"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("E")]),t._v(" "),e("div",{ref:"38",staticClass:"bottom-2-5 hasBorder",attrs:{id:"38"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("R")]),t._v(" "),e("div",{ref:"39",staticClass:"bottom-2-6 hasBorder",attrs:{id:"39"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("T")]),t._v(" "),e("div",{ref:"40",staticClass:"bottom-2-7 hasBorder",attrs:{id:"40"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Y")]),t._v(" "),e("div",{ref:"41",staticClass:"bottom-2-8 hasBorder",attrs:{id:"41"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("U")]),t._v(" "),e("div",{ref:"42",staticClass:"bottom-2-9 hasBorder",attrs:{id:"42"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("I")]),t._v(" "),e("div",{ref:"43",staticClass:"bottom-2-10 hasBorder",attrs:{id:"43"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("O")]),t._v(" "),e("div",{ref:"44",staticClass:"bottom-2-11 hasBorder",attrs:{id:"44"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("P")]),t._v(" "),e("div",{ref:"45",staticClass:"bottom-2-12 hasBorder",attrs:{id:"45"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("[{")]),t._v(" "),e("div",{ref:"46",staticClass:"bottom-2-13 hasBorder",attrs:{id:"46"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("]}")]),t._v(" "),e("div",{ref:"47",staticClass:"bottom-2-14 hasBorder",attrs:{id:"47"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("\\|")]),t._v(" "),e("div",{ref:"48",staticClass:"bottom-2-15 hasBorder",attrs:{id:"48"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Del")]),t._v(" "),e("div",{ref:"49",staticClass:"bottom-2-16 hasBorder",attrs:{id:"49"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("End")]),t._v(" "),e("div",{ref:"50",staticClass:"bottom-2-17 hasBorder",attrs:{id:"50"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("PD")])]),t._v(" "),e("div",{staticClass:"bottom-3"},[e("div",{ref:"51",staticClass:"bottom-3-1 hasBorder",attrs:{id:"51"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Caps")]),t._v(" "),e("div",{ref:"52",staticClass:"bottom-3-2 hasBorder",attrs:{id:"52"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("A")]),t._v(" "),e("div",{ref:"53",staticClass:"bottom-3-3 hasBorder",attrs:{id:"53"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("S")]),t._v(" "),e("div",{ref:"54",staticClass:"bottom-3-4 hasBorder",attrs:{id:"54"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("D")]),t._v(" "),e("div",{ref:"55",staticClass:"bottom-3-5 hasBorder",attrs:{id:"55"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("F")]),t._v(" "),e("div",{ref:"56",staticClass:"bottom-3-6 hasBorder",attrs:{id:"56"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("G")]),t._v(" "),e("div",{ref:"57",staticClass:"bottom-3-7 hasBorder",attrs:{id:"57"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("H")]),t._v(" "),e("div",{ref:"58",staticClass:"bottom-3-8 hasBorder",attrs:{id:"58"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("J")]),t._v(" "),e("div",{ref:"59",staticClass:"bottom-3-9 hasBorder",attrs:{id:"59"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("K")]),t._v(" "),e("div",{ref:"60",staticClass:"bottom-3-10 hasBorder",attrs:{id:"60"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("L")]),t._v(" "),e("div",{ref:"61",staticClass:"bottom-3-11 hasBorder",attrs:{id:"61"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v(";:")]),t._v(" "),e("div",{ref:"62",staticClass:"bottom-3-12 hasBorder",attrs:{id:"62"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("'\"")]),t._v(" "),e("div",{ref:"63",staticClass:"bottom-3-13 hasBorder",attrs:{id:"63"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Enter")])]),t._v(" "),e("div",{staticClass:"bottom-4"},[e("div",{ref:"64",staticClass:"bottom-4-1 hasBorder",attrs:{id:"64"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Shift")]),t._v(" "),e("div",{ref:"65",staticClass:"bottom-4-2 hasBorder",attrs:{id:"65"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Z")]),t._v(" "),e("div",{ref:"66",staticClass:"bottom-4-3 hasBorder",attrs:{id:"66"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("X")]),t._v(" "),e("div",{ref:"67",staticClass:"bottom-4-4 hasBorder",attrs:{id:"67"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("C")]),t._v(" "),e("div",{ref:"68",staticClass:"bottom-4-5 hasBorder",attrs:{id:"68"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("V")]),t._v(" "),e("div",{ref:"69",staticClass:"bottom-4-6 hasBorder",attrs:{id:"69"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("B")]),t._v(" "),e("div",{ref:"70",staticClass:"bottom-4-7 hasBorder",attrs:{id:"70"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("N")]),t._v(" "),e("div",{ref:"71",staticClass:"bottom-4-8 hasBorder",attrs:{id:"71"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("M")]),t._v(" "),e("div",{ref:"72",staticClass:"bottom-4-9 hasBorder",attrs:{id:"72"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v(",<")]),t._v(" "),e("div",{ref:"73",staticClass:"bottom-4-10 hasBorder",attrs:{id:"73"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v(".>")]),t._v(" "),e("div",{ref:"74",staticClass:"bottom-4-11 hasBorder",attrs:{id:"74"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("/?")]),t._v(" "),e("div",{ref:"75",staticClass:"bottom-4-12 hasBorder",attrs:{id:"75"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Shift")]),t._v(" "),e("div",{ref:"76",staticClass:"bottom-4-13 hasBorder",attrs:{id:"76"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("↑")])]),t._v(" "),e("div",{staticClass:"bottom-5"},[e("div",{ref:"77",staticClass:"bottom-5-1 hasBorder",attrs:{id:"77"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Ctrl")]),t._v(" "),e("div",{ref:"78",staticClass:"bottom-5-2 hasBorder",attrs:{id:"78"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Win")]),t._v(" "),e("div",{ref:"79",staticClass:"bottom-5-3 hasBorder",attrs:{id:"79"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Alt")]),t._v(" "),e("div",{ref:"80",staticClass:"bottom-5-4 hasBorder",attrs:{id:"80"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Space")]),t._v(" "),e("div",{ref:"81",staticClass:"bottom-5-5 hasBorder",attrs:{id:"81"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Alt")]),t._v(" "),e("div",{ref:"82",staticClass:"bottom-5-6 hasBorder",attrs:{id:"82"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Fn")]),t._v(" "),e("div",{ref:"83",staticClass:"bottom-5-7 hasBorder",attrs:{id:"83"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Doc")]),t._v(" "),e("div",{ref:"84",staticClass:"bottom-5-8 hasBorder",attrs:{id:"84"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("Ctrl")]),t._v(" "),e("div",{ref:"85",staticClass:"bottom-5-9 hasBorder",attrs:{id:"85"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("←")]),t._v(" "),e("div",{ref:"86",staticClass:"bottom-5-10 hasBorder",attrs:{id:"86"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("↓")]),t._v(" "),e("div",{ref:"87",staticClass:"bottom-5-11 hasBorder",attrs:{id:"87"},on:{click:function(r){return t.handleClick(r)},mouseover:function(r){return t.handleOver(r)}}},[t._v("→")])])])])])},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticStyle:{"font-family":"微软雅黑","font-weight":"bold","font-size":"40px"}},[this._v("选色区")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticStyle:{"font-family":"微软雅黑","font-weight":"bold","font-size":"40px"}},[this._v("功能区")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticStyle:{"font-family":"微软雅黑","font-weight":"bold","font-size":"40px"}},[this._v("方案区")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[this._v("迈阿密")]),this._v(" "),r("div",{staticStyle:{backgroundColor:"#767B77",width:"15px",height:"15px"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",[r("div",{staticStyle:{"font-family":"黑体","font-weight":"bold","margin-bottom":"5px"}},[this._v("切诺贝利")]),this._v(" "),r("div",{staticStyle:{backgroundColor:"#ffffff",width:"15px",height:"15px"}})])}]};var l=e("VU/8")(s,c,!1,function(t){e("Z/Nq")},"data-v-7190803e",null).exports;n.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"HelloWorld",component:l}]}),v=e("uDiQ"),u=e.n(v);n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:d,components:{App:i},template:"<App/>"})},"Z/Nq":function(t,r){}},["NHnr"]);