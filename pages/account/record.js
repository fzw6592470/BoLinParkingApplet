var app = getApp();

Page({
	data:{
		hasRecord: false,
	},
	onShow:function(){
		this.setData({
			balance: (Math.random()*100).toFixed(2)
		});
	},
	turnUrl: function(e){
		let url = e.currentTarget.dataset.url;
		wx.navigateTo({url:url});
	},
	loginout: function(e){
		console.log("loginout.");
	}
});
