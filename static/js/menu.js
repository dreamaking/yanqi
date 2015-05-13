function Menu(){
	this.cfg = window.cfg;
	this.container = $("#container");
	this.box = $('<div class="menu-box trans05"></div>');
	this.btn = $("#menu-btn");
	this.status = false;
	this.data = [
		{
			text : "首页",
			type : "link",
			icon : "menu-home",
			url : this.cfg.home
		},{
			text : "关于我们",
			type : "parent",
			icon : "menu-user",
			kids : [
				{
					text : "中心介绍",
					url : this.cfg.centerIntro
				},{
					text : "北控置业",
					url : this.cfg.companyIntro
				}
                                //,{
				//	text : "北控集团",
				//	url : this.cfg.groupIntro
				//}
			]
		},{
                         text : "会场信息",
                         type : "link", 
                         icon : "menu-loc",
                         url : this.cfg.boardroom
                                
                },{
			text : "预约中心",
			type : "link",
			icon : "menu-phone",
			url : this.cfg.bookingCenter
		},{
			text : "新闻资讯",
			type : "parent",
			icon : "menu-news",
			kids : [
				{
					text : "展会活动",
					url : this.cfg.expoActivity
				},{
					text : "企业资讯",
					url : this.cfg.companyNews
				},{
					text : "行业动态",
					url : this.cfg.industryNews
				}
			]
		},{
			text : "联系我们",
			icon : "menu-talk",
			type : "parent",
			kids : [
                                {
                                        text : "交通信息",
                                        url : this.cfg.transportInfo
                                },{
					text : "联系方式",
					url : this.cfg.contactInfo
				},{
					text : "意见留言",
					url : this.cfg.yourSay
				}
			]
		}
	];

	this.init();
	this.bind1st();
	this.bind2nd();
	this.bindToggle();
}

Menu.prototype = {

	init : function(){
		var self = this;		
		self.box.append('<div class="menu-mist mist-white"></div>');
		self.container.append(self.box);
		for(var i = 0; i < self.data.length; i++){
			self.render(i);
		}
	},

	render : function(i){
		var self = this,
			dat = self.data[i],
			one = '<div class="menu-one-1st '+ dat.icon +'" data-i="'+ i +'">'+ dat.text +'</div>';
		self.box.append(one);
	},

	bind1st : function(){
		var self = this;
		self.container.delegate(".menu-one-1st", "click", function(e){
			var one = $(e.currentTarget);
			if(one.hasClass("menu-checked")) return;
			var	i = one.attr("data-i"),
				dat = self.data[i];
			if(dat.type == "link"){
				location.href = dat.url;
			}
			if(dat.type == "parent"){
				var subbox = $(".menu-subbox");
				if(subbox) subbox.remove();
				var	subbox = $('<div class="menu-subbox"></div>');
				one.append(subbox);
				subbox
					.append('<div class="menu-mist mist-black"></div>')
					.append('<div class="menu-arrow"></div>');
				self.renderKids(dat.kids, subbox);

				var checked = $(".menu-checked");
				if(checked) checked.removeClass("menu-checked");
				one.addClass("menu-checked");
			}
		});
	},

	renderKids : function(kids, subbox){
		var self = this;
		for(var i = 0; i < kids.length; i++){
			var dat = kids[i],
				one = '<div class="menu-one-2nd" data-url="'+ dat.url +'">'+ dat.text +'</div>';
			subbox.append(one);
		}
	},

	bind2nd : function(){
		var self = this;
		self.container.delegate(".menu-one-2nd", "click", function(e){
			var one = $(e.currentTarget),
				url = one.attr("data-url");
			one.css({color : "yellow"});
			location.href = url;
		});
	},

	bindToggle : function(){
		var self = this;
		self.btn.on("click", function(){
			if(self.status){
				self.hide();
			}else{
				self.show();
			}
		});
		$(document).delegate(".container", "click", function(e){
			var target = $(e.target);
			if(!self.status) return;
			if(target.hasClass("menu-btn")) return;
			if(target.hasClass("menu-box")) return;
			if(target.hasClass("menu-one-1st")) return;
			if(target.hasClass("menu-one-2nd")) return;
			if(target.hasClass("menu-subbox")) return;
			if(target.hasClass("menu-arrow")) return;
			self.hide();
		});
	},

	show : function(){
		var self = this;
		if(self.status) return;
		self.status = true;
		// self.box.show();
		self.box.addClass("menu-show");
	},

	hide : function(){
		var self = this;
		if(!self.status) return;
		self.status = false;
		// self.box.hide();
		self.box.removeClass("menu-show");
		var subbox = $(".menu-subbox");
		if(subbox) subbox.remove();
	}

};
