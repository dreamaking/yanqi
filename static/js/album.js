define(function(){

function Album( selector ){
	this.container = $( document.body );
	this.selector = selector;
	this.html =
	'<div class="album-box album-transparent">'
	+'	<div class="album-mist trans1"></div>'
	+'	<div class="album-wrap">'
	+'		<img src="">'
	+'	</div>'
	+'</div>';

	this.bindShow();
}

Album.prototype = {

	bindShow : function(){
		var self = this;
		self.container.delegate(self.selector, "click", function(e){
			var img = $(e.currentTarget).children("img");
			if( !img || !img.length ) return;
			self.run( img );
		});
	},

	run : function( img ){
		var self = this;
		self.container.append(self.html);
		$(".album-wrap").css({
			width : self.container.width(),
			height : self.container.height(),
		}).children("img").attr({
			src : img.attr("src")
		});
		setTimeout(function(){
			$(".album-wrap").addClass("trans1");
			$(".album-box").removeClass("album-transparent");
		}, 200);
		self.bindHide();
	},

	bindHide : function(){
		var self = this;
		$(".album-box").on("click", function(e){
			$(".album-box").remove();
		});
	}
};

return Album;
	
});