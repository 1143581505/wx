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
        phone:'',
        email:'',
    },//提示信息
  },

  //自定义方法
  //提交注册表单 
  submitClick:function(e){
    this.setData({
        tips:{
            username:'',
            password:'',
            confirm:'',
            phone:'',
            email:'',
        }
    });
    let formData = e.detail.value;
    let sub = true;
    let tel = new RegExp(/^1[34578]\d{9}$/);
    let mail = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if(formData.username.length<2){
        this.setData({
            'tips.username':'用户名不能小于两位',
        });
        sub=false;
    }
    if(formData.password.length<6){
        this.setData({
            'tips.password':'密码不能小于6位',
        });
        sub=false;
    }
    if(formData.password!==formData.confirm){
        this.setData({
            'tips.confirm':'两次输入的密码不同',
        });
        sub=false;
    }
    if(!tel.test(formData.phone)){
        this.setData({
            'tips.phone':'电话号码输入有误',
        });
        sub=false;
    }
    if(!mail.test(formData.email)){
        this.setData({
            'tips.email':'邮箱输入有误',
        });
        sub=false;
    }
    let {globalUsername,globalPassword,num,globalEmail,gloablPhone} = app.globalData;
    globalUsername.forEach((item)=>{
        if(formData.username===item){
            this.setData({
                'tips.username':'用户名已被注册',
            });
            sub=false;
        }
    });
    if(sub&&formData.username==='1143581505'){
        this.setData({
            'tips.username':'用户名已被注册',
        });
        sub=false;
    }
    if(sub){
        wx.showToast({
            title:'注册成功',
            icon:'success',
            success:()=>{
                globalUsername[num] = formData.username;
                globalPassword[formData.username] = formData.password;
                globalEmail[formData.username] = formData.email;
                gloablPhone[formData.username] = formData.phone;
                app.globalData.num+=1;
                wx.redirectTo({
                    url:'../login/login',
                });
            },
        });
    }
  },
  //重置表单方法   
  resetClick:function(){
    this.setData({
        tips:{
            username:'',
            password:'',
            confirm:'',
            phone:'',
            email:'',
        }
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