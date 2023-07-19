// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false
  },
  toggleEdit(){
    this.setData({
      isEdit: !this.data.isEdit
    })
  }
})