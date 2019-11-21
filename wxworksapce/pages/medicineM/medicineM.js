//medicineM.js
var app = getApp();
var {bgMusic} = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicineList: [
      {
        "num": 1,
        "name": "阿莫西林1",
        "specification": 12,
        "production": "江苏",
        "unit": "盒",
        "batchNum": 1010107,
        "receive": {}
      },
      {
        "num": 2,
        "name": "阿莫西林2",
        "specification": 12,
        "production": "四川",
        "unit": "盒",
        "batchNum": 1010108,
        "receive": {}
      },
      {
        "num": 3,
        "name": "阿莫西林3",
        "specification": 12,
        "production": "上海",
        "unit": "盒",
        "batchNum": 1010109,
        "receive": {}
      },
      {
        "num": 4,
        "name": "阿莫西林4",
        "specification": 12,
        "production": "广州",
        "unit": "盒",
        "batchNum": 1010110,
        "receive": {}
      },
      {
        "num": 5,
        "name": "阿莫西林5",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010111,
        "receive": {}
      },
      {
        "num": 6,
        "name": "阿莫西林6",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010112,
        "receive": {}
      },
      {
        "num": 7,
        "name": "阿莫西林7",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010113,
        "receive": {}
      },
      {
        "num": 8,
        "name": "阿莫西林8",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010114,
        "receive": {}
      },
      {
        "num": 9,
        "name": "阿莫西林9",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010115,
        "receive": {}
      },
      {
        "num": 10,
        "name": "阿莫西林10",
        "specification": 12,
        "production": "湖北",
        "unit": "盒",
        "batchNum": 1010116,
        "receive": {}
      }
    ]
  },
  //自定义事件
  refresh:function(){
    wx.navigateTo({
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    bgMusic.title = 'hospital';
    bgMusic.src = 'https://m701.music.126.net/20191121171000/490f2bc437bfe16f3549c8a6c8fc8d54/jdyyaac/0553/535f/5152/296e44119ed52c24cdc4f80330096bfc.m4a';
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
