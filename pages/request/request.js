// pages/request/request.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    login(){
        wx.getUserProfile({
          desc: '用于用户信息验证',
          success:function(res){
            console.log(res)
            console.log(res.userInfo.nickName)
            console.log(res.userInfo.avatarUrl)
            let nickname = res.userInfo.nickName
            let avatarUrl = res.userInfo.avatarUrl
            /**************************************** */
            wx.setStorage({
              key:'nickname',
              data:nickname,
              success:function(){
                console.log("存储数据成功！")
              },
              fail:function(){
                console.log('存储数据失败！')
              }
            }),
            wx.setStorage({
              key:'avatarUrl',
              data:avatarUrl,
              success:function(){
                console.log("存储数据成功！")
                wx.switchTab({
                  url: '/pages/user/user',
                })
              },
              fail:function(){
                console.log('存储数据失败！')
              }
            })
            /***************************************************** */
          }
        })
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

    }
})