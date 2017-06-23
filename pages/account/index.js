var app = getApp();

Page({
	data:{
		"title": "个人中心",
		mobileNo: "138****8888",
		balance: 0.00,
		car_url: "../car/index",
		bill_url: "bill",
		record_url: "record",
		pwd_url: "",
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
