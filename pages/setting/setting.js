// pages/setting/setting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        LoginImages:'',
        Name:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(1)
        let that = this;
        wx.getStorage({
            key:"nickname",
            success:function(res){
                that.setData({
                    Name:res.data,
                })
            }
        }),
        wx.getStorage({
            key:"avatarUrl",
            success:function(res){
                that.setData({
                    LoginImages:res.data,
                })
            }
        })
    },

    exit(){
        let that = this
        wx.removeStorage({
          key: 'nickname',
          success: (res)=>{
              console.log('删除数据成功')
              this.setData({
                  Name:''
              })
          },
          fail:(res)=>{
              console.log('删除数据失败')
          },
          complete:(res)=>{}
        }),
        wx.removeStorage({
            key: 'avatarUrl',
            success: (res)=>{
                console.log('删除数据成功')
                this.setData({
                    LoginImages:''
                })
            },
            fail:(res)=>{
                console.log('删除数据失败')
            },
            complete:(res)=>{}
          })
        wx.switchTab({
          url: '/pages/user/user',
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