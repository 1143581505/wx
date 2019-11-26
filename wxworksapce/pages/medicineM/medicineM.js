//medicineM.js
var app = getApp();
var {bgMusic,medicineList} = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicineList:app.globalData.medicineList,
  },
  //自定义事件
  toStore:function(){
	wx.navigateTo({
	  url: '../store/store',
	});  
  },
  refresh:function(){
    wx.redirectTo({
      url: './medicineM',
    });
  },
  toFeedback() {
    wx.navigateTo({
      url: '../feedback/feedback',
    });
  },
  toPersonal() { 
    wx.navigateTo({
      url:'../personal/personal'
    })
  },
  changeColor:function(e){
    let num = e.currentTarget.dataset.num;
    let color = '#c0c0c0';
    let inx = null;
    this.data.medicineList.forEach((item,index)=>{
      if(item.num===num){
        item.color==='red'?color='#c0c0c0':color='red';
        inx = index;
      }
    });
    this.setData({
      [`medicineList[${inx}].color`]:color,
    });
    app.globalData.medicineList.forEach((item)=>{
      this.data.medicineList.forEach((itemTwo)=>{
        if(itemTwo.num===item.num){
          item.color=itemTwo.color;
        }
      });
    });
  },
  search:function(e){
	  // console.log(e)
    const searchData = e.detail.value;
    let newData = app.globalData.medicineList.filter((item)=>{
      for(let key in item){
        if(key==='specification'&&searchData===(item[key]+'片')){
          return true;
        }else if(searchData===(item[key]+'')&&key!=='specification'){
          return true;
        }else if(searchData===''){
          return true;
        }
      }
      return false;
    });
    this.setData({
      medicineList:newData,
    });
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
    player();
    function player() {
      bgMusic.title = "his";
      bgMusic.src = "https://m701.music.126.net/20191121171000/490f2bc437bfe16f3549c8a6c8fc8d54/jdyyaac/0553/535f/5152/296e44119ed52c24cdc4f80330096bfc.m4a";
      bgMusic.onEnded(() => {
        player();
      })
    }
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
