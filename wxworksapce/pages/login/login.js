var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,//文本框中的用户名
    password:null,//文本框中的密码
    adminUsername:'1143581505',//管理员的用户名
    adminPassword:'HUFAN2674551706',//管理员的密码
    tipsText:'',//提示文字
  },

  //自定义事件
  // 登录点击事件
  loginClick:function(){
    let{username,password,adminPassword,adminUsername}=this.data;
    let{globalUsername,globalPassword,num}=app.globalData;
    if(username===adminUsername&&password===adminPassword){
      wx.redirectTo({
        url:'../user/user',
      });
    }else{
      if(username===null||password===null){
        this.setData({
          tipsText:'用户名或密码不能为空',
        });
      }else if(num===0){
        this.setData({
          tipsText:'请先注册用户或者登录管理员账号'
        });
      }
      let exit = false;
      globalUsername.forEach((item)=>{
        if(exit)return false;
        if(item===username){
          exit = true;
          if(globalPassword[item]===password){
            wx.redirectTo({
              url:'../user/user',
            });
            this.setData({
              tipsText:'',
            });
          }else{
            this.setData({
              tipsText:'密码输入错误',
            });
          }
        }else{
          this.setData({
            tipsText:'用户名输入错误',
          });
        }
      });
    }
  },
  //忘记密码点击事件
  forgetClick:function(){
    wx.redirectTo({
      url:'../forget-password/forget-password'
    });
  },
  // 注册点击事件
  registerClick:function(){
    wx.redirectTo({
      url:'../register/register'
    });
  },
  // 服务协议点击事件
  serveClick:function(){
    wx.showModal({
      title:'服务协议',
      content:'目前还没有什么协议，你登就完事了',
      showCancel:false,
    });
  },
  // 文本框改变事件
  changeInput:function(e){
    switch(e.currentTarget.dataset.attr){
      case 'username':this.setData({username:e.detail.value});break;
      case 'password':this.setData({password:e.detail.value});break;
      default:break;
    }
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
    console.log(app.globalData);
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