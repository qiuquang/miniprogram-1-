// pages/swiper/swiper.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [
            'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
            'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
          ],
          interval: 5000,
          duration: 1000,
          indicatorDots: false,
          indicatorColor: "#ffffff",
          activecolor:"#2971f6",
          autoplay: true,
          musicinfo: {
            poster: 'https://636c-cloud1-7gw7m0k679be1a14-1307431346.tcb.qcloud.la/fusheng.jpg?sign=8b7556c6e863a9a86d0417f025a65161&t=1631687809',
            name: '浮生',
            author: '刘莱斯',
            src: 'https://webfs.ali.kugou.com/202109151434/55cfd9f6b7f94040d4f81097c30c8737/G105/M07/01/11/qQ0DAFlZ9YGAJCmLAFCP2BsI1KI688.mp3',
          },
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
    
})