// pages/store/store.js
import {formatTime} from '../../utils/util'

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	search:'',
	logIndex:0,
	storeList:app.globalData.storeControl,
  },
  search:function(e){
	  console.log(e)
	  this.setData({
		  search:e.detail.value,
	  });
	  var that = this
    // const searchData = e.detail.value;
	let newData = app.globalData.storeControl.filter((item,index)=>{
		return app.globalData.storeControl[index].name ==this.data.search
	})
	
    if(this.data.search==''){
		console.log(2)
		this.setData({
			storeList:app.globalData.storeControl,
		})
	}else{
		console.log(1)
		this.setData({
			storeList:newData,
		})
	}
	console.log(newData)
  },
  
  add(e){
	var newNum = this.data.storeList[e.currentTarget.dataset.index].changeStore+1;
	this.setData({
		['storeList['+e.currentTarget.dataset.index+'].changeStore']:newNum,
	})
	
  },
  minus(e){
	  var newNum =this.data.storeList[e.currentTarget.dataset.index].changeStore-1;
	  this.setData({
	  	['storeList['+e.currentTarget.dataset.index+'].changeStore']:newNum,
	  })
  },
  logs(e){
	  var index = e.currentTarget.dataset.index;
	  this.setData({
		  logIndex:e.currentTarget.dataset.index
	  })
	  var time = new Date();
	  console.log(this.data.storeList[index].changeStore)
	  var operation = (this.data.storeList[index].changeStore>=0)?'入库':'出库';
	  var nums =this.data.storeList[e.currentTarget.dataset.index].changeStore;
	  var num =(nums>=0)?nums:(-nums);
	  var that = this;
	  wx.showModal({
	    title: this.data.storeList[e.currentTarget.dataset.index].name,
	    content: formatTime(time)+' '+ operation+num,
	    success (res) {
	      if (res.confirm) {
			  var newNum = that.data.storeList[e.currentTarget.dataset.index].specification+that.data.storeList[e.currentTarget.dataset.index].changeStore;
			  console.log(newNum)
	        that.setData({
				['storeList['+e.currentTarget.dataset.index+'].changeStore']:0,
				['storeList['+e.currentTarget.dataset.index+'].specification']:newNum
			})
			
	      } else if (res.cancel) {
	        console.log('用户点击取消')
	      }
	    }
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