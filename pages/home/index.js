// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popularList: [{
        img: '/assets/imgs/lipstick.png',
        bg: 'bg-red-thin',
        title: '唇部产品'
      },
      {
        img: '/assets/imgs/water.png',
        bg: 'bg-pink-thin',
        title: '水乳'
      },
      {
        img: '/assets/imgs/essence.png',
        bg: 'bg-blue-thin',
        title: '精华'
      },
      {
        img: '/assets/imgs/mianshuang.png',
        bg: 'bg-purple-thin',
        title: '面霜眼霜'
      },
      {
        img: '/assets/imgs/fangshai.png',
        bg: 'bg-cyan-thin',
        title: '防晒隔离'
      },
    ],
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goDetail(){
    wx.navigateTo({
      url: '/pages/goods-detail/index',
    })
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