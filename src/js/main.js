/* require css/less/scss */
require('../sass/style.scss');

//在页面加载完后立即执行多个函数方案
    function addloadEvent(func){
        var oldonload=window.onload;
        if(typeof window.onload !="function"){
            window.onload=func;
        }
        else{
            window.onload=function(){
                if(oldonload){
                   oldonload(); 
                }
                func();
            };
        }
    }
    //在页面加载完后立即执行多个函数方案结束
    addloadEvent(b);
    function b(){
    	//获取外围容器
    	var Box=document.querySelector(".box");
    	//获取小图片容器
    	var s_Box=document.querySelector(".left");
    	//获取大图片容器
    	var b_Box=document.querySelector(".right");
    	//获取大图片
    	var b_Image=b_Box.getElementsByTagName("img")[0];
    	//获取放大镜
    	var f_Box=document.querySelector(".pointer");
    	//移入放大镜和大图片容器显示
    	s_Box.onmouseover=function(){
    		f_Box.style.display="block";
    		b_Box.style.display="block";
    	};
    	//移出放大镜和大图片容器隐藏
    	s_Box.onmouseout=function(){
    		f_Box.style.display="none";
    		b_Box.style.display="none";
    	};
    	//移动事件
    	s_Box.onmousemove=function(ev){
    		//获取鼠标坐标window兼容ie
    		var e= ev|| window.event;
    		//当前鼠标x轴-容器相对body偏移量-小容器相对父容器偏移值-放大镜宽度的一半=放大镜的当前位置
    		var left = e.clientX-Box.offsetLeft-s_Box.offsetLeft-f_Box.offsetWidth/2;
    		//公式同上
    		var top = e.clientY-Box.offsetTop-s_Box.offsetTop-f_Box.offsetHeight/2;
    		//判断当放大镜移出容器时在边缘显示
    		if(left<0){
    			left=0;
    		}else if(left>(s_Box.offsetWidth-f_Box.offsetWidth)){
    			left=s_Box.offsetWidth-f_Box.offsetWidth;
    		}
    		if(top<0){
    			top=0;
    		}else if(top>(s_Box.offsetHeight-f_Box.offsetHeight)){
    			top=s_Box.offsetHeight-f_Box.offsetHeight;
    		}
    		//放大镜当前位置
    		f_Box.style.left = left+"px";
    		f_Box.style.top = top+"px";
    		//获取比例
    		var z = b_Image.offsetWidth / s_Box.offsetWidth;
    		//用放大镜偏移量*比例=大图片的偏移量，方向相反所以负值
    		b_Image.style.left= -left*z +"px";
    		b_Image.style.top= -top*z +"px";
    	};
    }
