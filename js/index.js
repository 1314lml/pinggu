function $(id){
		return document.getElementById(id);
	}
	var index=0;
	var imgw=878;
	var box=$('box');
	var imgs=$('imgs');
	var t=null;
	var next=$('next');
	var pave=$('pave');
	var buttons=$('buttons').getElementsByTagName('span');
	buttons[index].className='act';
	var btnLen=buttons.length;
	for(var i=0;i<btnLen;i++) {
		buttons[i].i=i;
		buttons[i].onmouseover=function(){ 
			imgs.style.left=-imgw*this.i+'px';
			buttons[index].className='';
			index=this.i; 
			this.className='act';
		}
	}
		function move(dir) {
		var oldIndex=index;
		index=index+dir;
		if(index<0){
			index=btnLen-1;
		}
		if(index>btnLen-1){
			index=0;
		}
		imgs.style.left=-imgw*index+'px';
			buttons[oldIndex].className='';
			buttons[index].className='act';
	}
	pave.onclick=function(){
		move(-1);
	}
	next.onclick=function(){
		move(1);
	}
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(next.onclick,2000);
	}
	box.onmouseout();