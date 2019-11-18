var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips:{
      username:'',
      password:'',
      confirm:'',
      findMethod:'',
      code:'',
    },
    codeTime:'获取验证码',
    codeDisabled:true,
    codeNum:60,
    code:'',
    interval:null,
  },

  //自定义事件
  //提交事件
  submitClick:function(e){
    let formData = e.detail.value;
    let change = true;
    let {username,password,num} = app.globalData;
    if(num===0){
      this.setData({'tips.username':'目前尚未有注册用户请先进行用户注册'});
    }else{
      username.forEach((item,index)=>{
        if(!change)return false;
        if(formData.username!==item){
          change = false;
          this.setData({
            'tips.username':'用户输入有误',
          });
        }else{}
      });
    }
    if(formData.password.length<6){
      this.setData({
        'tips.password':'密码不能少于6位',
      });
      change = false;
    }
    if(formData.username===formData.confirm){
      this.setData({
        'tips.confirm':'两次输入的密码不同',
      });
      change = false;
    }
    if(formData.findMethod===''){
      this.setData({
        'tips.findMethods':'此处为必选项，请选择获取验证码的方式',
      });
      change = false;
    }
    if(this.data.codeTime==='获取验证码'){
      this.setData({
        'tips.code':'请点击按钮获取验证码',
      })
      change = false;
      if(this.data.codeTime==='重新获取'&&change){
        this.setData({
          'tips.code':'验证码已过期，请重新获取',
        });
        change = false;
        if(this.data.code!==formData.code&&change){
          this.setData({
            'tips.code':'验证码输入错误',
          });
          change = false;
        }
      }
    }
    if(change){
      wx.showToast({
        title:'修改密码',
        success:()=>{

        }
      });
    }
  },
  // 重置事件
  resetClick:function(){
    this.setData({
      tips:{
        username:'',
        password:'',
        confirm:'',
        findMethod:'',
        code:'',
      },
      codeTime:'获取验证码',
      codeDisabled:true,
      codeNum:60,
      codeCheck:{
        code:'',
        overTime:false,
      },
      method:'',
    });
    clearInterval(this.data.interval);
  },
  //验证码事件
  codeClick:function(){
    let code = parseInt(Math.random()*9000+1000);
    let {codeNum} = this.data;
    wx.showModal({
      title:'验证码',
      content:`验证码为${code}`,
      showCancle:false,
      complete:()=>{
        this.setData({
          codeTime:`${codeNum}s`,
          codeDisabled:true,
          'codeCheck.code':code,
          'codeCheck.overTime':false,
        });
        let interval = setInterval(()=>{
          codeNum--;
          if(codeNum===0){
            clearInterval(interval);
            this.setData({
              codeTime:'重新发送',
              codeDisabled:false
            });
          }else{
            this.setData({
              codeTime:`${codeNum}s`,
            });
          }
        },1000);
        this.setData({
          interval:interval,
          code:code,
        });
      }
    });
  },
  //单选框改变事件
  radioChange:function(e){
    this.setData({
      method:e.detail.value,
      codeDisabled:false,
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