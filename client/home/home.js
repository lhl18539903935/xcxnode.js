// home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bb:'div',
    scrollId:'a1',
    scrollLeft:0,
    tem:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  aa:function (e) {
    console.log(e)
    this.data.bb = 'wwww'
    // this.setData({
    //   bb:'wocao'
    // })
  },
  tap:function (e) {
      this.setData({
        scrollId:e.target.id,
        scrollLeft:e.target.offsetLeft - 150
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