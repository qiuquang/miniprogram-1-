// pages/pagexuanran/pagexuanran.js
let lesson = "云开发技术训练营";
let enname = "CloudBase Camp";
let x = 3, y = 4, z = 5.001, a = -3, b = -4, c = -5;
let now = new Date();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        charat: lesson.charAt(4),
        concat: enname.concat(lesson),
        uppercase:enname.toUpperCase(),
        abs:Math.abs(b),
        pow: Math.pow(x, y),
        sign:Math.sign(a),
        now:now,
        nowString:now.toString(),
        fullyear:now.getFullYear(),
        date:now.getDate(),
        day: now.getDay(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        time: now.getTime(),
        bgcolor: "#000",
        muted: true,
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
    redTap:function(){
        this.setData({
          bgcolor: "#cd584a"
        })
      },
      yellowTap:function(){
        this.setData({
          bgcolor: "#f8ce5f"
        })
      },
      changeMuted: function (e) {
        this.setData({
          muted: !this.data.muted
        })
      },
})