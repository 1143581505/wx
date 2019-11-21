var app = getApp();
var {bgMusic} = app.globalData;

// components/Mytitle/MyTitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toHome: function () {
      wx.reLaunch({
        url: '../../pages/medicineM/medicineM'
      });
    },
    playVoice: function(){
      bgMusic.paused?bgMusic.play():bgMusic.pause();
    },
    playMap: function(){
      wx.authorize({scope: "scope.userLocation",});
      wx.chooseLocation();
    },
    playMessage:function(){
      wx.wx.navigateTo({
        url: '../../pages/message/message',
      });
    },
    refresh:function(){
      this.triggerEvent('myevent');
    },
    playVideo:function(){},
  },
  //组件的生命周期
  lifetimes:{
    attached:function(){
    },
    detached:function(){
      
    },
  }
})
