var app = getApp();

Page({
	data:{
		hasCar: true,
		carList: [{"platNo":"粤B12345"},{"platNo":"粤B88888"},{"platNo":"粤B99999"},],
		deleteUrl: "",
		addUrl: ""
	},
	onShow:function(){
		
	},
	deleteCar: function(e){
		let platNo = e.currentTarget.dataset.plat;
		let url = this.data.deleteUrl;
		let data = {
			"platNo": platNo
		}
		console.log(data);
	},
	addCar: function(e){
		let type = e.currentTarget.dataset.type;
		let url = this.data.addUrl;
		if(type == "add"){
			var length = this.data.carList.length;
			if(length >= 3){
				wx.showToast({
					title: "一个用户只能绑定3张车牌.",
					success: function(){
						setTimeout(function(){wx.hideToast()},5000);
					}
				});
			}else{
				wx.navigateTo({url:url});
			}
		}else{
			let platNo = e.currentTarget.dataset.plat;
			console.log(url+"?platNo="+platNo);
			return false;
			wx.navigateTo({url:url+"?platNo="+platNo});
		}
	}
});
