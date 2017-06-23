var app = getApp();

Page({
	data:{
		"title": "泊林停车"
	},
	outSideParking: function(e){
		var url = e.currentTarget.dataset.url+"?parkingType=0";
		wx.navigateTo({"url":url});
	},
	inSideParking: function(e){
		var url = e.currentTarget.dataset.url+"?parkingType=1";
		wx.navigateTo({"url":url});
	}
});