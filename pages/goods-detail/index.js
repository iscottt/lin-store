// pages/goods-detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val: 0,
    clearable: 1,
    showPopup: false,
    swiperList: [{
        img: '/assets/imgs/banner.png',
        url: '/pages/document/system/system',
        type: 'eve' //直接跳转类型
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
        url: '/pages/custom/home',
        type: 'eve' //直接跳转类型
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
        type: 'eve' //事件方式
      },
      {
        img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
        type: 'eve'
      },
    ]
  },
  togglePopup(opt){
    const showPopup  = opt.currentTarget.dataset.visible
    console.log(showPopup)
    this.setData({showPopup})
  },
  onShow() {
    console.log(this.data.sys_info)
  },
  clearableChange(e) {
    this.setData({
      clearable: e.detail
    })
  },

  //减少
  onCutVal(e) {
    console.log(e.detail)
  },
  //增加
  onAddVal(e) {
    console.log(e.detail)
  },
  //内容改变
  onVal(e) {
    console.log(e.detail)
    this.setData({
      val: e.detail.val
    })
  },
})