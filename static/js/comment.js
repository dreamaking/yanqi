function Comment(){
	this.container = $("#container");
	this.content = $("#content");
	this.btn = $("#submit");
	this.input = $("#comment");
	this.lag = 500;
	this.status = true;
	this.reply = "亲：您的消息已收到！工作人员会尽快处理！感谢您的支持！";

	this.bindCommit();
	this.bindFocus();
}

Comment.prototype = {
	
	bindCommit : function(){
		var self = this;
		self.btn.on("click", function(){
			if(!self.status) return;
			var val = self.input.val().replace(/(^\s*)|(\s*$)/g, "");
			if(!val) return;
			if(val.length > 500){
				new Mask("评论不得超过500字");
				return;
			}
			self.status = false;
			//ajax请求可以写在这里
			self.input.val("");
			self.guestSay(val);			
			setTimeout(function(){
				self.hostSay(self.reply);
				self.status = true;
			}, self.lag * 3);
		});
	},

	hostSay : function(text){
		var self = this,
			one = $('<div class="say-one trans05"></div>'),
			html = 
			'<div class="say-icon host-icon">'
			+'	<img src="{STATIC_URL}/img/host-icon.png">'
			+'</div>'
			+'<div class="say-text host-text">'
			+'	<div class="say-frame host-frame"></div>'
			+'	<div class="say-arrow host-arrow"></div>'
			+'	<span class="say-inner">'+ text +'</span>'
			+'</div>';
		one.append(html);
		self.content.append(one);
		self.scroll();
		setTimeout(function(){
			one.addClass("solid");
		}, self.lag);
	},

	guestSay : function(text){
		var self = this,
			one = $('<div class="say-one trans05"></div>'),
			html =
			'<div class="say-icon guest-icon">'
			+'	<img src="{STATIC_URL}/img/guest-icon.png">'
			+'</div>'
			+'<div class="say-text guest-text trans05">'
			+'	<div class="say-frame guest-frame trans05"></div>'
			+'	<div class="say-arrow guest-arrow"></div>'
			+'	<span class="say-inner">'+ text +'</span>'
			+'</div>';
		one.append(html);
		self.content.append(one);
		self.scroll();
		setTimeout(function(){
			one.addClass("solid");
			self.resize(one);
		}, self.lag);
	},

	scroll : function(){
		var self = this,
			content = document.getElementById("content");
		// self.content.css({scrollTop : content.scrollHeight});
		content.scrollTop = content.scrollHeight;
	},

	resize : function(one){
		var self = this,
			text = one.children(".say-text"),
			frame = text.children(".say-frame"),
			fW = frame.width(),
			inner = text.children(".say-inner"),
			iW = inner.width(),
			delta = fW - iW - 20;
		frame.css({left : delta});
		text.css({paddingLeft : delta + 10});
	},

	bindFocus : function(){
		var self = this;
		self.input.on("click",function(){
			// document.getElementById("comment").focus();
			// var container = document.getElementById("container");
			document.body.scrollTop = 1000;
		});
	}

	
};