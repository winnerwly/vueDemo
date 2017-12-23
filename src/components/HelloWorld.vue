<template>
<div id="wrapper">
  <div id="show-area">

     <ul>
       <li>1<a href="#"><img src="./1.jpg"></a></li>
       <li>2<a href="#"><img src="./2.jpg"></a></li>
       <li>3<a href="#"><img src="./3.jpg"></a></li>
       <li>4<a href="#"><img src="./4.jpg"></a></li>
       <li>5<a href="#"><img src="./2.jpg"></a></li>
     </ul>
     
      <div id="button-left" title="下一张">前</div>
      <div id="button-right" title="上一张">后</div>
      
    <div id="controler"></div><!--控制按钮,为了日后方便后台操作这里的控制按钮在js代码中控制添加-->
  </div>
</div>
</template>

<script>
export default {
  name: 'helloworld',
  mounted(){

    $(function(){
      let i = 0
      let imgWidth = $("#show-area ul li").width()

      let clone = $("#show-area ul li").first().clone()
      $("#show-area ul").append(clone)
      //复制第一张图片并且添加到最后达到无缝连接的效果

      let size = $("#show-area ul li").length//得到所有li的个数


      /*第一步*/
      //一开始循环添加按钮
      for(let j = 0 ; j<size - 1 ; j++){
        $("#controler").append("<div></div>")
      }
      //为什么要size - 1？因为最后一张图片只是作一个过渡效果我们显示的始终还是4张图片
      //所以添加按钮的时候我们也应该添加4个按钮
      $("#controler div").eq(0).addClass("onclick")




      /*第二步*/
      //左按钮
      $("#button-left").click(function(){
        stopTimer()
        Toleft()
      })


      //右按钮
      $("#button-right").click(function(){
        stopTimer()
        Toright()
      })






      /*第3步*/
      //按钮移出移入事件
      $("#controler div").hover(
        function(){
          stopTimer()
          console.log('移入了小圆点。。。。')
          i = $(this).index()
          $("#show-area ul").stop().animate({left:-i * imgWidth})
          $(this).addClass("onclick").siblings().removeClass("onclick")
        },
        function(){
          console.log('移出了小圆点。。。。')
        }
      )      

      //ul鼠标移出移入事件
      $("div#show-area").hover(
        function(){
          console.log('鼠标移入了...')
          stopTimer()
        },function(){
          console.log('鼠标移出了...')
          startTimer()
        }
      )

      //两个方向按钮鼠标移出移入事件

      //定时器


      const startTimer = function (){
        window.timer = setTimeout(function(){
          console.log('我执行了一次定时器！！！！')
          Toleft()
          clearInterval(window.aaa)
          let i=3
          window.aaa = setInterval(function(){
            console.log(i)
            i--
          },1000)
          startTimer()
        },3000)   
      }

      const stopTimer = function(){
        clearInterval(window.aaa)
        clearTimeout(window.timer)
      }
      // 开启定时器
      startTimer()




      /*第2.1步*/
      //左按钮实现的函数
      function Toleft(){

        i++;
        if(i==size){
        // 当当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）
        // 并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置并且第二张图片滑入达到无缝效果
        //（css的变换效果很快我们肉眼是很难看见的）
          $("#show-area ul").css({left:0})
          i = 1
        }
        $("#show-area ul").stop().animate({left:-i*imgWidth},1000)

        if(i == size -1){
          $("#controler div").eq(0).addClass("onclick").siblings().removeClass("onclick")

        }else{
          $("#controler div").eq(i).addClass("onclick").siblings().removeClass("onclick")  

        }
      }


      /*第2.2步*/
      //右按钮实现的函数
      function Toright(){

        // 同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置
        //（size-1），并且让倒数第二张图片滑动进来
        i--;
        if(i==-1){
          $("#show-area ul").css({left:-(size - 1)*imgWidth})
          i=size-2

        }   
        $("#show-area ul").animate({left:-i*imgWidth},1000)
        $("#controler div").eq(i).addClass("onclick").siblings().removeClass("onclick")

      }

    })
  },
  beforeDestroy(){
    clearInterval(window.timer)
    clearInterval(window.aaa)
    log(清除了轮播图的定时器)
  }
}

</script>
<style>
  *{
    padding:0px;
    margin:0px;
    border:0px;
}
img{
  width: 800px;
  height: 450px;
}
li{
    list-style-type:none;
}
a{
    text-decoration:none;
}
#wrapper{
    margin:0px auto;
    border:0px;
    padding:0px;
}
#show-area{
    width:800px;
    height:450px;
    position:relative;
    margin:0px auto;
    overflow:hidden;
}
#show-area ul{
    position:relative;
    width:4800px;
    height:450px;
    right:0;
}
#show-area ul li{
    float:left;
    width:800px;
}
#controler{
    /*width:120px;*/
    text-align:center;
    position:absolute;
    top:425px;
    left:50%;
    z-index:1;
}
#controler div{
  margin: 5px;
    height:5px;
    width:5px;
    padding: 5px;
    border-radius:100%;
    border: 2px solid red;
    background-color:#ccc;
    /*float:left;*/
   display: inline-block;
    opacity:0.9;/*透明度50%*/
    filter:Alpha(opacity=90);/*为了适应旧的浏览器*/
}
#button-left{
    /*display:none;*/
   text-align: center;
   line-height: 60px;
    color:#fff;
    position: absolute;
    top: 189px;
    left: 0px;
    width: 60px;
    height: 60px;
    background-color: red;
    z-index:222;
}
#button-right{
  text-align: center;
  line-height: 60px;
    /*display:none;*/
    color:#fff;
    position: absolute;
    top: 189px;
    left: 740px;
    width: 60px;
    height: 60px;
    background-color: red;
    z-index:2222;
}
.onclick{
    background-color:#FFF !important;
}
</style>