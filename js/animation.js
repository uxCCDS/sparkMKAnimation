(function(){

	var Arrow = function(){
		this.Line = document.getElementById('svg_line');
		this.LineTop = document.getElementById('svg_line_top');
		this.LineBottom = document.getElementById('svg_line_bottom');

		this.HasPlay = false;

		this.init();
	};
	Arrow.prototype={
		init:function(){
			this.initAsh();
			var me = this;
			$(document).bind('click',function(){
				if(!me.HasPlay){
					me.AshGo.play();
				}
			});

			//this.AshGo.play();
		},
		initAsh:function(){
			var me = this,
				t1=50,
				t2=30,
				t3=30;
			
			this.AshGo = new Ash.S([{
				dom:me.LineTop,
				attr:[{'stroke-dashoffset':-140},{'stroke-dashoffset':0}],
				time:t3,
				tween:'easeInInt',
				delay:t1+t2
			},{
				dom:me.LineBottom,
				attr:[{'stroke-dashoffset':-90},{'stroke-dashoffset':0}],
				time:t2,
				tween:'easeInInt',
				delay:t1
			},{
				dom:me.Line,
				attr:[{'stroke-dashoffset':-700},{'stroke-dashoffset':0}],
				time:t1,
				tween:'easeInOutInt'
			}],1,function(){
				me.HasPlay = true;
			});

			window.PlayArrow = function(){
				me.AshGo.play();
			}
		}
	};

	$(function(){
		new Arrow();
	});

})();