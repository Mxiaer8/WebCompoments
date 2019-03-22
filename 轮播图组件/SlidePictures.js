//引入css文件
require('!style-loader!css-loader!./SlidePictures.css');

//引入jq文件
let _element = document.createElement('script');
_element.setAttribute('type','text/javaScript');
_element.setAttribute('src','https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js');
document.body.appendChild(_element);

// 轮播图
class SlidePicture {
	//轮播图图片初始化
	constructor(picturesPath) {
		this.picturesPath = picturesPath;
		this.picturesNum = picturesPath.length;
		this.radioNum = picturesPath.length;
		this.number = 0;
		this.timer = null;
	}

	init(width, height) {
        this.width = width;
        this.height = height;
		var pictureHtml = '';
		var radioHtml = '';

		for(var i = 0; i < this.picturesPath.length; i++) {
			pictureHtml += '<li><img class="my-photo" alt="loading" src="' + this.picturesPath[i] + '"></li>';
			radioHtml += '<li></li>';
		}
		pictureHtml += '<li><img class="my-photo" alt="loading" src=' + this.picturesPath[0] + '></li>';	//处理轮播图无缝链接
		
		//初始化轮播图ul
		var ul = document.getElementById('slide_img');
		ul.innerHTML = pictureHtml;
		ul.style.width = (this.picturesNum + 1) * 100 + '%';

		//初始化轮播图li
		var lis = ul.getElementsByTagName('li');
		var liWidth = 100 / (this.picturesNum + 1);
		for(var i = 0; i < lis.length; i++) {
			lis[i].style.width = liWidth + '%';
		}

		//初始化轮播图小圆点
		var radio = document.getElementById('num');
		var radioLis = radio.getElementsByTagName('li');
		radio.innerHTML = radioHtml;
	    radioLis[0].style.backgroundColor = 'red';
	    var _this = this;
	    for(var i = 0; i < radioLis.length; i++) {
	    	(function(i) {
	    		radioLis[i].onclick = function() {
	    			SlidePicture.prototype.radioOnclick(i, _this);
	    		}
	   		})(i);
		}
	}

	//小圆点轮播
	dealRadius(num) {
		var lis =  document.getElementById('num').getElementsByTagName('li');
		lis[num].style.backgroundColor = 'red';
		for(var i = 0; i < num; i++) {
			lis[i].style.backgroundColor = 'white';
		}
		for(var i = num + 1; i < this.picturesNum; i++) {
			lis[i].style.backgroundColor = 'white';
		}
	}


	//轮播图展示
	show() {	
        var _slide =  document.getElementsByClassName('slide_content')[0].getElementsByClassName('slide')[0];
        var image = document.getElementById('slide_img').getElementsByTagName('img');
        _slide.style.width = this.width;
        _slide.style.height = this.height;
        for(let i = 0; i < image.length; i++) {
             image[i].style.height = this.height;
        }
		var that = this;
		SlidePicture.prototype.startSlide = function() {
			that.number++;
			if(that.number == that.picturesNum + 1) {
				that.number = 1;
				$('#slide_img').css({left: '0px'});  //处理无缝衔接小圆点的跳转理无缝衔接图
				that.dealRadius(0); // 处理无缝衔接小圆点的跳转
            } 
              
                var imageLeft = -1 * that.number * that.width;
				$('#slide_img').animate({left: imageLeft},700);
				if(that.number == that.picturesNum) that.dealRadius(0);
				else that.dealRadius(that.number);			
		}
		
		this.timer = setInterval(this.startSlide, 4500);
		//console.log(this.timer);
	}

	//轮播图小圆点的点击实现
	radioOnclick(num, _this) {
		//console.log(_this.number);
		clearInterval(_this.timer);
		_this.dealRadius(num);
		var imageLeft = -1 * num * _this.width;
		if(!(_this.number == _this.picturesNum && num == 0)) $('#slide_img').animate({left: imageLeft},700);
		_this.number = num;
		_this.timer = setInterval(_this.startSlide , 4500);
	}		
};


export {SlidePicture};