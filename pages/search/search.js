Page({
    data: {
      isclose: true,
      searchvalue: "",
      searchsubmit: true,
      searchreset: false,
      hotsearch1: [{ message: "苹果" }, { message: "雪梨" }, { message: "荔枝" }, { message: "龙眼" }, { message: "香蕉" }, { message: "白菜" }],
      hotsearch2: [{ message: "山竹" }, { message: "芒果" }, { message: "菠萝蜜" }, { message: "橘子" }, { message: "葡萄" }],
      historydata: [],
      historydatashow: false,
      searchresult: false,
      inputsearch: "",
    },
    inputoperation: function (e) {
      this.setData({
        searchsubmit: false,
        searchreset: true,
        isclose: false,
        searchvalue: e.detail.value
      })
    
    },
    /*换一批*/
    changeother: function () {
      this.setData({
        falg: !this.data.falg
      })
    },
    /*点击搜索*/
    searchbegin: function () {
      let that = this
      wx.setStorage({
        key: "historydata",
        data: that.data.historydata.concat(that.data.searchvalue)
      })
      console.log(that.data.historydata)
      this.setData({
        searchresult: true,
      })
  
  
    },
   /*清除*/
    remove: function () {
      var _this = this
      wx: wx.showModal({
        content: '清除所有历史记录?',
        success: function (res) {
          if (res.confirm) {
            wx: wx.removeStorage({
              key: 'historydata',
              success: function (res) {
                _this.setData({
                  historydata: []
                })
                wx.setStorageSync("historydata", [])
              },
            })
          } else {
            console.log("点击取消")
          }
        },
      })
    },
    //进入详情页
    gotodetail: function(){
      wx.navigateTo({
        url: ''
      })
    },
    /* 生命周期函数--监听页面加载*/
    onLoad: function (options) {
      // 历史搜索
      let that = this
      wx.getStorage({
        key: 'historydata',
        success: function (res) {
          console.log(res.data)
          that.setData({
            historydatashow: true,
            historydata: res.data
          })
        }
      })
    },
  
    /*生命周期函数--监听页面初次渲染完成*/
    onReady: function () {
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },
    /**生命周期函数--监听页面隐藏*/
    onHide: function () {
    },
    /**生命周期函数--监听页面卸载 */
    onUnload: function () {
  
    },
    /** 页面相关事件处理函数--监听用户下拉动作*/
    onPullDownRefresh: function () {
  
    },
  
    /* 页面上拉触底事件的处理函数*/
    onReachBottom: function () {
  
    },
  })