// pages/buy/buy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        price:'',
        title:'',
        num:'',
        detailed:'',
        weight:'',
        moneymath:'',
        yunfei:'',
        line_flag1:true,
        line_flag2:false,
        messge01:true,
        messge02:false,
        weixin:true,
        zhifubao:false
    },

    oncilck1:function(){
        let that = this
        that.setData({
            line_flag1:true,
            line_flag2:false,
            messge01:true,
            messge02:false
        })
    },
    oncilck2:function(){
        let that = this
        that.setData({
            line_flag1:false,
            line_flag2:true,
            messge01:false,
            messge02:true
        })
    },
    weixin:function(){
        let that = this
        that.setData({
            zhifubao:false,
            weixin:true,
        })
    },
    zhifubao:function(){
        let that = this
        that.setData({
            zhifubao:true,
            weixin:false,
        })
    },

    buy_ok(){
        let that = this
        that.setData({
            line_flag1:false,
            line_flag2:true,
            messge01:false,
            messge02:true
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        var options = JSON.parse(decodeURIComponent(options.passData))
        console.log(options)
        console.log("接收参数"+options.price)
        console.log("接收参数"+options.num)
        console.log("接收参数"+options.title)
        console.log("接收参数"+options.weight)
        console.log("接收参数"+options.math)
        console.log("接收参数"+options.yunfei)
        that.setData({
          price:options.price,
          num: options.num,
          moneymath: options.yunfei,
          title:options.title,
          weight:options.weight
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