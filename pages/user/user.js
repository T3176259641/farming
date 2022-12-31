Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:'',
    Name:'',
    flag1:1,
    flag2:0
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
                    flag1:0,
                    flag2:1
                })
            },
            fail:function(){
                that.setData({
                    flag1:1,
                    flag2:0
                })
            }
        }),
        wx.getStorage({
            key:"avatarUrl",
            success:function(res){ 
                that.setData({
                    image:res.data,
                    flag1:0,
                    flag2:1
                })
            },
            fail:function(){
                that.setData({
                    flag1:1,
                    flag2:0
                })
            }
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
    console.log(2)
    let that = this;
        wx.getStorage({
            key:"nickname",
            success:function(res){
                that.setData({
                    Name:res.data,
                    flag1:false,
                    flag2:true
                })
            },
            fail:function(){
                that.setData({
                    flag1:1,
                    flag2:0
                })
            }
        }),
        wx.getStorage({
            key:"avatarUrl",
            success:function(res){
                that.setData({
                    image:res.data,
                    flag1:false,
                    flag2:true
                })
            },
            fail:function(){
                that.setData({
                    flag1:1,
                    flag2:0
                })
            }
        })
        if(that.Name == ""){
            that.setData({
                flag1:1,
                flag2:0
            })
        }
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
    wx.showNavigationBarLoading();
    wx.reLaunch({
	  //加载页面地址
      url: '/pages/user/user',
      success:function(res){
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
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