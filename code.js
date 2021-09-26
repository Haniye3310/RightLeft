var game={
	player:{top:450,right:550},
	computer:{top:0, right:0},
	input:function(a){
		switch(a){
			case 'top':
			case 'right':
			case 'left':
			case 'bottom':
				var di=this.move(this.player,a);
				if(di==false)return false;
				break;
		};
		this.computermove();
		this.updatemonitor();
		this.checkwin();
	},
	checkwin:function(){
		if(this.player.top==this.computer.top&&this.player.right==this.computer.right){
			alert('you win:)))');
			this.player={top:450,right:550};
			this.computer={top:0, right:0};
			this.updatemonitor();
		};
	},
	move:function(ob,direction){
		switch(direction){
			case 'top':
				if(ob.top>=50)ob.top-=50;
				else return false;
				break;
			case 'right':
				if(ob.right>=50)ob.right-=50;
				else return false;
				break;
			case 'left':
				if(ob.right<550)ob.right+=50;
				else return false;
				break;
			case 'bottom':
				if(ob.top<450)ob.top+=50;
				else return false;
				break;
		};
		return true;
	},
	computermove:function(){
		var comdir=Array('top','bottom','right','left');
		var i=Math.round(Math.random()*4);
		if(i>=4)i=3;
		var can=this.move(this.computer,comdir[i]);
		if(can==false)this.computermove();
	},
	updatemonitor:function(){
		document.getElementById('player').style='top:'+this.player.top+'px ; right:'+this.player.right+'px';
		document.getElementById('computer').style='top:'+this.computer.top+'px ; right:'+this.computer.right+'px';
	},
}