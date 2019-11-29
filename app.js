//app.js
App({
  globalData:{
    globalUsername:[],//注册的用户
    globalPassword:{},//注册用户的密码
    num:0,//注册用户的数量
    globalEmail:{},//邮箱保存
    gloablPhone:{},//电话保存
    bgMusic: wx.getBackgroundAudioManager(),//背景音乐的播放

    medicineList: [  //药品领用数据
        {
          "num": 1,
          "name": "阿莫西林1",
          "specification": 12,
          "production": "江苏",
          "unit": "盒",
          "batchNum": 1010107,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 2,
          "name": "阿莫西林2",
          "specification": 12,
          "production": "四川",
          "unit": "盒",
          "batchNum": 1010108,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 3,
          "name": "阿莫西林3",
          "specification": 12,
          "production": "上海",
          "unit": "盒",
          "batchNum": 1010109,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 4,
          "name": "阿莫西林4",
          "specification": 12,
          "production": "广州",
          "unit": "盒",
          "batchNum": 1010110,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 5,
          "name": "阿莫西林5",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010111,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 6,
          "name": "阿莫西林6",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010112,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 7,
          "name": "阿莫西林7",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010113,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 8,
          "name": "阿莫西林8",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010114,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 9,
          "name": "阿莫西林9",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010115,
          "receive": {},
          "color":'#c0c0c0'
        },
        {
          "num": 10,
          "name": "阿莫西林10",
          "specification": 12,
          "production": "湖北",
          "unit": "盒",
          "batchNum": 1010116,
          "receive": {},
          "color":'#c0c0c0'
        }
    ],

    // 药品管理
    storeControl:[
      {
        "num": 1,
        "name": "阿莫西林1",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
      "num": 2,
      "name": "阿莫西林2",
      "specification": 12,
        "changeStore":0,
      "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
      "num": 3,
      "name": "阿莫西林3",
      "specification": 12,
        "changeStore":0,
      "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
      "num": 4,
      "name": "阿莫西林4",
      "specification": 12,
        "changeStore":0,
      "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 5,
        "name": "阿莫西林5",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
      "num": 6,
      "name": "阿莫西林6",
      "specification": 12,
        "changeStore":0,
      "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
      "num": 7,
      "name": "阿莫西林7",
      "specification": 12,
        "changeStore":0,
      "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 8,
        "name": "阿莫西林8",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 9,
        "name": "阿莫西林9",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 10,
        "name": "阿莫西林10",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 11,
        "name": "阿莫西林11",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-10 入库15箱',"2019-10-20 出库5箱"]
      },
      {
        "num": 12,
        "name": "阿莫西林12",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-17 入库9箱',"2019-10-20 出库8箱"]
      },
      {
        "num": 13,
        "name": "阿莫西林13",
        "specification": 12,
        "changeStore":0,
        "log":['2019-08-12 入库20箱',"2019-10-20 出库9箱"]
      }
    ],

    factoryList: [
      {
        "factoryNum": 1001,
        "address": "陕西省西安市汉城南路151号",
        "factoryName": "西安杨森制药有限公司",
        "factoryPhone": "029-87340201",
        "product": "药品"
      },
      {
        "factoryNum": 1002,
        "address": "陕西省西安市万寿北路34号",
        "factoryName": "西安顺康制药有限公司",
        "factoryPhone": "029-87340201",
        "product": "药品"
      },
      {
        "factoryNum": 1003,
        "address": "陕西省西安市顺城北路西段49号",
        "factoryName": "西安正大制药有限公司",
        "factoryPhone": "029-85502598",
        "product": "药品"
      },
      {
        "factoryNum": 1004,
        "address": "陕西省西安市雁塔区西影路51号",
        "factoryName": "西安大恒制药有限责任公司",
        "factoryPhone": "029-85692537",
        "product": "药品"
      },
      {
        "factoryNum": 1005,
        "address": "陕西省西安市高新技术开发区新型工业园16号",
        "factoryName": "西安海欣制药有限公司",
        "factoryPhone": "029-88384898",
        "product": "药品"
      },
      {
        "factoryNum": 1006,
        "address": "北京市北京市东城区",
        "factoryName": "宜昌广翔生物科技有限公司",
        "factoryPhone": "027-87605759",
        "product": "药品"
      },
      {
        "factoryNum": 1007,
        "address": "湖北省武汉市江汉区新华下路169号菱湖上品",
        "factoryName": "武汉泓强医药有限公司",
        "factoryPhone": "13377877201",
        "product": "药品"
      }
    ]//厂家查询数据
  },
})