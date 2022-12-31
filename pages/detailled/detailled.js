// pages/goods1/goods1.js
// index/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      is_shoucang: 0,
      goods_info: '【现货顺丰冷链】泰国进口山竹水果5斤3斤 进口生鲜新鲜山竹甄选品质水果5A大果 3斤装【3A果/18个左右】',
      img01:'https://img95.699pic.com/photo/50107/5771.jpg_wh860.jpg',
      img02:'https://tse1-mm.cn.bing.net/th/id/R-C.bf88967f6a2550a05c7b008c722e4eb2?rik=QeFZ5jVebgXwCg&riu=http%3a%2f%2fpic134.huitu.com%2fres%2f20191213%2f1149609_20191213104452076070_1.jpg&ehk=apSpgTkQaCcuXsdO%2bYDXR4hI5Ws%2frmygfCbos4J%2f2Qs%3d&risl=&pid=ImgRaw&r=0',
      img03:'https://tse1-mm.cn.bing.net/th/id/R-C.8bfb38f97c733254266bcbba015e1568?rik=XOBLliYgpcMAlg&riu=http%3a%2f%2fpic138.huitu.com%2fres%2f20200309%2f1149609_20200309104803811070_1.jpg&ehk=xqw444hZtSFeCZI%2fsmaedkMvk7dvQaPDQhRouEAgiGE%3d&risl=&pid=ImgRaw&r=0',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      pjDataList: [{
          headpic: 'https://tse1-mm.cn.bing.net/th/id/R-C.86a0fa17b9b37ff7518b552e2517a0ae?rik=CX0%2fMchuLIBQVA&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f201809%2f11%2f1536666825645562.jpg&ehk=g6IGr0cDabvrRd5KSQdbup2trGpltKDfA7Hx7eopcm0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          author: '张三',
          add_time: '2022-02-01',
          content: '真实太好吃了!'
        },
        {
          headpic: 'https://tse1-mm.cn.bing.net/th/id/R-C.7b9f3020f3c91e5f76b4df2e7ea25de1?rik=deUQMVk41dSjNQ&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202007%2f2020071213324342.jpg&ehk=2kp7%2fRJpUGhKSaZH2j2g8lKPBohMH9veb%2f4AuNFaemc%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
          author: '李四',
          add_time: '2022-03-01',
          content: '好吃到爆炸！'
        }
      ], //评价数据
      content:'【现货顺丰冷链】泰国进口山竹水果5斤3斤 进口生鲜新鲜山竹甄选品质水果5A大果 3斤装【3A果/18个左右】',
      kucun:'充足',
      xiaoliang:99999,
      price:'0.00'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //console.log("接收参数"+options.img1)
        let that = this
        var options=JSON.parse(decodeURIComponent(options.passData))
        console.log(options)
        console.log("接收参数"+options.img1)
        console.log("接收参数"+options.img2)
        console.log("接收参数"+options.img3)
        console.log("接收参数"+options.goods_info)
        console.log("接收参数"+options.price)
        console.log("接收参数"+options.shoppingnum)
        that.setData({
          goods_info:options.goods_info,
          img01: options.img1,
          img02: options.img2,
          img03: options.img3,
          price:options.price,
          xiaoliang:options.shoppingnum
        })
    },

    buy0(){
      wx.switchTab({
        url: '/pages/shoppingcar/shoppingcar',
      })
    },
    buy(e){
      var title=e.currentTarget.dataset.title
      var price=e.currentTarget.dataset.price
      var passData={
        title:title,
        price:price
      }
      wx.navigateTo({
        url: "/pages/buy/buy?passData="+encodeURIComponent(JSON.stringify(passData)),
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
  