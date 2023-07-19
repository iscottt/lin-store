// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList:[
      {
        id: 1,
        name:"全部"
      },
      {
        id: 2,
        name:"护肤"
      },
      {
        id: 3,
        name:"彩妆"
      },
      {
        id: 4,
        name:"香氛"
      },
      {
        id: 5,
        name:"奢侈包包"
      },
      {
        id: 6,
        name:"医美"
      },
      {
        id: 7,
        name:"小样"
      },
      {
        id: 8,
        name:"轻奢包包"
      },
      {
        id: 9,
        name:"皮具"
      },
      {
        id: 10,
        name:"首饰"
      },
      {
        id: 11,
        name:"运费"
      },
    ],
    curId: 1
  },
  chooseTab(opt){
    const curId = opt.currentTarget.dataset.item.id
    this.setData({
      curId
    })
  }
})