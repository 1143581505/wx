var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	username:'1143581505',
    imgUrls: [
	  '../../images/page4.jfif',
	  '../../images/page2.jfif',
	  '../../images/page3.jfif'
	],
	interval: 4000,
	duration: 1000,
	opArray:[{
		color:'blue',
		icon:'fa fa-plus-square fa-lg',
		text:'药品领用',
		url:'../medicineM/medicineM'
	},{
		color:'#168589',
		icon:'fa fa-commenting fa-1g',
		text:'用药反馈',
		url:'../feedback/feedback'
	},{
		color:'#425066',
		icon:'fa fa-envelope fa-1g',
		text:'消息',
		url:'../message/message'
	},{
		color:'#ff2d51',
		icon:'fa fa-user-plus fa-1g',
		text:'我的',
		url:'../personal/personal'
	}]
  },
  toOtherurl(e){
	 if(app.globalData.globalUsername.length>0){
	wx.navigateTo({
		url:e.currentTarget.dataset.url
		}) 
	 }else{
		wx.navigateTo({
		  url:'../login/login'
		}) 
	 }
	  
	 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //  wx.setStorage({
	  // key:"name",
	  // data:'1143581505',
	  // success(res){
		 //  console.log(res)
	  // }
   //  })
	// wx.getStorage({
	// 	key:"name",
	// 	success(res){
	// 		console.log(res)
	// 	}
	// })  
	// wx.getStorageInfo({
	//   success(res){
	// 	  console.log(res)
	//   }
	// })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})