var app = getApp();

Page({
	data:{
		"hasBill": true,
		bill_list: [
			{
				data:"20170313",
				dayDetail:[
					{
						"wasteNo":"1234567",
						"orderType": 0,
						"amount": 2100,
						"oldBalance": 562100,
						"transTime": "20170313125921"
					},
					{
						"wasteNo":"1234567",
						"orderType": 1,
						"amount": 1000,
						"oldBalance": 572100,
						"transTime": "20170313180021"
					},

					{
						"wasteNo":"1234567",
						"orderType": 1,
						"amount": 1900,
						"oldBalance": 574000,
						"transTime": "20170313200021"
					}
				]
			},
			{
				data:"20170201",
				dayDetail:[
					{
						"wasteNo":"1234567",
						"orderType": 1,
						"amount": 4800,
						"oldBalance": 650000,
						"transTime": "20170212080650"
					},
					{
						"wasteNo":"1234567",
						"orderType": 0,
						"amount": 2000,
						"oldBalance": 670000,
						"transTime": "20170212150100"
					},

					{
						"wasteNo":"1234567",
						"orderType": 1,
						"amount": 800,
						"oldBalance": 670800,
						"transTime": "20170212180021"
					}
				]
			},
		],
	},
	onShow:function(){
		var bill_list = this.data.bill_list;
		for(var i=0;i<bill_list.length;i++){
			bill_list[i].data = bill_list[i].data.slice(0,4)+"年"+bill_list[i].data.slice(4,2)+"月";
			for(var j=0;j<bill_list[i].dayDetail.length;j++){
				bill_list[i].dayDetail[j].amount = (bill_list[i].dayDetail[j].amount/100).toFixed(2);
			}
		}
		this.setData({
			bill_list: bill_list
		});
	},
	queryBillMore: function(e){
		alert("11111111111111");
	}
});
