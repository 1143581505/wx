Page({

  /**
   * 页面的初始数据
   */
  data: {
	buttonList:[{
		name:"用药反馈",
		url:"",
	},{
		name:"实时病例",
		url:"",
	},{
		name:"医生建议",
		url:"",
	},{
		name:"联系我们",
		url:"",	
	}],
	illness:true,
	userdurg:true,

  },
	click(){
		this.setData({
			illness:false
		})
	},
	click2(){
		this.setData({
			userdurg:false
		})
	},
	submit(){
		wx.showToast({
		  title: '谢谢你的反馈',
		  icon: 'success',
		  duration: 2000
		});
		this.setData({
			userdurg:true,
			illness:true
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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