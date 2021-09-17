// pages/tapevent/tapevent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    },
    scrollToTop() {
        wx.pageScrollTo({
          duration: 300,
          selector:".pagetop"
        })
      },
      
      scrollToPosition() {
        wx.pageScrollTo({
          duration: 300,
          selector:"#pageblock"
        })
      },

      toastTap() {
        wx.showToast({
          title: '购买成功',
          icon: 'success',
          duration: 2000
        })
      },

      modalTap() {
        wx.showModal({
          title: '学习声明',
          content: '学习小程序的开发是一件有意思的事情，我决定每天打卡学习',
          showCancel: true,
          confirmText: '确定',
          success(res) {
            if (res.confirm) {
              console.log('用户点击了确定')
            } else if (res.cancel) {
              console.log('用户点击了取消')
            }
          }
        })
      },

      actionSheetTap() {
        wx.showActionSheet({
          itemList: ['添加照片', '删除照片', '更新照片', '查询更多'],
          success(e) {
            console.log(e.tapIndex)
          }
        })
      },
      navigateTo() {
        wx.navigateTo({
          url: '/pages/home/imgshow/imgshow'
        })
      },
      switchTab() {
        wx.switchTab({
          url: "/pages/list/list",
        })
      },
      redirectTo() {
        wx.redirectTo({
            url: '/pages/home/imgshow/imgshow'
        })
      },
})