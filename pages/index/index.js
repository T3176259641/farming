Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height:65,
    SHeight:360,
    seckillHeight:150,
    show_swiper:500,
    sp1:15,
    shopping_view_ArryList:[
      {
        id:1,
        images:'/pages/images/tuijain.png',
        icon_tilte:'推荐'
      },
      {
        id:2,
        images:'/pages/images/maicai.png',
        icon_tilte:'一起买菜'
      },
      {
        id:3,
        images:'/pages/images/userlogin.png',
        icon_tilte:'用户认证'
      },
      {
        id:4,
        images:'/pages/images/chanpin.png',
        icon_tilte:'农合专区'
      },
      {
        id:5,
        images:'/pages/images/parest.png',
        icon_tilte:'领农豆'
      },
      {
        id:6,
        images:'/pages/images/fruit.png',
        icon_tilte:'领水果'
      },
      {
        id:7,
        images:'/pages/images/vip-fill.png',
        icon_tilte:'特权申请'
      },
      {
        id:8,
        images:'/pages/images/youhui.png',
        icon_tilte:'领优惠卷'
      }
    ],
    seckillList:[
      {
        id:9,
        img01:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b64758f9a6bfa8012160f78feaab.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653103378&t=9453b106ed94459d86b7e609e1534584',
        img02:'https://img2.baidu.com/it/u=2096817917,2486492437&fm=253&fmt=auto&app=138&f=JPEG?w=699&h=500'
      },
      {
        id:10,
        img01:'https://img2.baidu.com/it/u=3376027181,2006788129&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        img02:'https://img0.baidu.com/it/u=1633019971,2141861024&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=325'
      },
      {
        id:10,
        img01:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-u-4.51miz.com%2Fpreview%2Fmuban%2F00%2F00%2F42%2F46%2FM-424656-3EF0E21D.jpg-1.jpg&refer=http%3A%2F%2Fimg-u-4.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653103711&t=a5588404a3168b69c61cec6550d40a5a',
        img02:'https://img2.baidu.com/it/u=1859371400,835578181&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
      },
    ],
    seckillList_childs:[
      {
        id:11,
        images:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01adbb6002952711013e39911777f7.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653103817&t=43619030e349f321eac44067a8c2f230',
        Image02:'https://img2.baidu.com/it/u=4105485049,3709017877&fm=253&fmt=auto&app=120&f=JPEG?w=499&h=384'
      },
      {
        id:12,
        images:'https://img.chemicalbook.com/SupplyImg/2018-12-28/201812281503066429560.jpg',
        Image02:'https://img2.baidu.com/it/u=3780924603,3943537956&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500'
      },
      {
        id:13,
        images:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F15489285%2Forigin893cb69d735b489548b45b2f0a280f36.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMTU0ODkyODUvb3JpZ2luODkzY2I2OWQ3MzViNDg5NTQ4YjQ1YjJmMGEyODBmMzYuanBn%2Fsign%2F35abec90429cb9fc7cc8eeea6a2ee284.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653104143&t=e20c1c2a7a7fd6a3f4ce3b40972c4cae',
        Image02:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.51miz.com%2Fpreview%2Fmuban%2F00%2F00%2F38%2F39%2FM-383934-C7D4B6F6.jpg-1.jpg&refer=http%3A%2F%2Fimg.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653104209&t=741df48ae4afc556a05ca110c130fcc7'
      },
    ],
    show_shopping_ListArray:[
      // 商品数据
      {
        id:100,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-03-27/d134c331-c7a6-4c3c-8f6a-e467f47b8f92.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-03-02/0ee32de5-1ef3-41f1-8094-288686736ce4.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2022-03-02/0ee32de5-1ef3-41f1-8094-288686736ce4.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'山东羊角蜜甜瓜1新鲜0水果斤当季脆蜜奶香时令批发价脆整箱包邮',
        shoppingprice:'29.9',
        shoppingnum:'6999',
        shoppingevaluate:'86'
      },
      {
        id:101,
        images_l01:'https://img.pddpic.com/mms-material-img/2021-08-22/cf110775-96ac-41ab-ab32-6df0c0339cfa.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2021-08-12/ee495edc-c712-4f80-a11c-4d9c5bc06215.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2021-08-12/b4139c96-cc25-483b-a093-ff7474d38278.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'正宗徐香猕猴桃陕西绿心弥猴桃新鲜奇异果当季孕妇水果泥猴桃批发',
        shoppingprice:'39.9',
        shoppingnum:'10万',
        shoppingevaluate:'48'
      },
      {
        id:102,
        images_l01:'https://img.pddpic.com/mms-material-img/2021-10-14/4e7cd923-9b6e-414f-b40d-058df292c2b2.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2021-10-14/a74c28e3-c9b0-4f18-b1c2-a83ea6a4ecfa.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img2.baidu.com/it/u=294939885,2332893641&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        shoppingtitle:'【精品推荐】正宗海南哈密瓜新鲜水果西州蜜网纹甜瓜批发当季晓密',
        shoppingprice:'12.8',
        shoppingnum:'2.8万',
        shoppingevaluate:'59'
      },
      {
        id:103,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-02-28/4b2c308f-2aa1-4108-aaae-cc4904d0ce6e.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-02-22/4453d87f-0ebb-4afa-9e45-63a0fc77f461.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2022-03-03/0bfbf6f4-4838-4043-b701-ba9779b6d131.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'云南沃柑超甜橘子应季水果整箱批发爆甜桔子1-10斤非广西武鸣沃柑',
        shoppingprice:'9.9',
        shoppingnum:'5.8万',
        shoppingevaluate:'86'
      },
      {
        id:104,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-04-12/cc7447ad-c539-4642-8ef0-ee8d5ac3571b.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-03-23/f9350c45-3419-483a-bd09-2de49b84a35b.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2022-03-23/0e209a2d-70fc-4794-9ba3-77cd66697468.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'新鲜应季现摘批发黄心油桃农家特产整箱新鲜脆多汁大果孕妇水果',
        shoppingprice:'5.9',
        shoppingnum:'5万',
        shoppingevaluate:'99'
      },
      {
        id:105,
        images_l01:'https://img.pddpic.com/mms-material-img/2021-04-23/ba57fc57-a428-4da5-95a3-c5fbc70f1cab.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2021-04-29/415b09d8-7a8c-43bd-8813-f3fab756b9ef.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2021-04-23/ba57fc57-a428-4da5-95a3-c5fbc70f1cab.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'【爆汁】枇杷果新鲜水果现摘蒙自甜枇杷果 当季孕妇琵琶果子批发',
        shoppingprice:'8.9',
        shoppingnum:'6358',
        shoppingevaluate:'89'
      },
      {
        id:106,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-03-12/9efca20a-9eb6-4346-836f-f6862354f405.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-03-12/d0cce109-4839-4776-b285-2529af0f6d80.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2021-05-13/ac4a9168-0e4b-4f10-9993-bf4834a75e6c.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'【当天发出】海南小台农芒果10斤/5斤/2斤香甜可口当季新鲜水果箱',
        shoppingprice:'8.8',
        shoppingnum:'20万',
        shoppingevaluate:'100'
      },
      {
        id:107,
        images_l01:'https://img.pddpic.com/mms-material-img/2021-08-12/b4139c96-cc25-483b-a093-ff7474d38278.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/goods/images/2020-05-20/7383eb18-bb21-487a-a3fc-dd1cf7b0ec67.jpg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img.pddpic.com/goods/images/2020-05-20/76eba0fb-0e3a-48e7-915f-7978404785b3.jpg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'正宗真徐香猕猴桃新鲜陕西绿心弥核桃奇异果当季孕妇水果批发',
        shoppingprice:'39.9',
        shoppingnum:'9000',
        shoppingevaluate:'98'
      },
      {
        id:108,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-04-13/5c70bc05-2854-4215-8093-6e8730754f88.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-04-13/6aed5bfe-7bd3-4870-ac6b-322b16c794db.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l03:'https://img-1.pddpic.com/mms-material-img/2022-04-13/da6dd443-0912-4943-9be3-50dbf3a1f3cb.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'现摘山东大樱桃国产车厘子美早红灯新鲜水果孕妇整箱批发2/3/5斤1',
        shoppingprice:'19.8',
        shoppingnum:'4500',
        shoppingevaluate:'86'
      },
      {
        id:109,
        images_l01:'https://img.pddpic.com/mms-material-img/2022-04-03/006bcb1d-9673-4cf3-ab5c-a90cf196fe56.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp',
        images_l01:'https://img.pddpic.com/mms-material-img/2022-04-15/a6a9a028-b1e0-4730-b43e-962ba9d89b2d.jpeg?imageView2/2/w/1300/q/80/format/webp',
        images_l02:'https://img-1.pddpic.com/mms-material-img/2022-04-15/e404c42e-c8f5-47f1-b438-e69f95f86f37.jpeg?imageView2/2/w/1300/q/80/format/webp',
        shoppingtitle:'泰国一级金枕头榴莲带壳新鲜水果一整个3-10斤批发特价包邮彩盒箱',
        shoppingprice:'299.9',
        shoppingnum:'4855',
        shoppingevaluate:'66'
      },
      {
        id:110,
        images_l01:'https://img2.baidu.com/it/u=3483753088,1299013782&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500',
        images_l02:'https://img1.baidu.com/it/u=350436414,1966796623&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=752',
        images_l03:'https://img0.baidu.com/it/u=133440909,1192457286&fm=253&fmt=auto&app=138&f=JPEG?w=601&h=500',
        shoppingtitle:' 北京同仁堂 灵芝60g 灵芝片泡水饮用 片大均匀 芝气浓郁 健康饮补',
        shoppingprice:'380.9',
        shoppingnum:'20万',
        shoppingevaluate:'90.6'
      },
    ]
  },

  navigatefun(e){
    var img01 = e.currentTarget.dataset.img1;
    var img02=e.currentTarget.dataset.img2;
    var img03=e.currentTarget.dataset.img3;
    var title01=e.currentTarget.dataset.title01;
    var price01=e.currentTarget.dataset.price;
    var salec = e.currentTarget.dataset.num
    var passData={
      img1:img01,
      img2:img02,
      img3:img03,
      goods_info:title01,
      price:price01,
      shoppingnum:salec
    }
    wx.navigateTo({
      url: "/pages/detailled/detailled?passData="+    encodeURIComponent(JSON.stringify(passData)),
    })
  },
  NoCode(res){
    var tuijian = res.currentTarget.dataset.key
    console.log(tuijian)
    wx.showModal({
        title: '提示',
        content: '该功能尚未开放，请留意官方通知',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
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
    wx.showNavigationBarLoading();
    wx.reLaunch({
	  //加载页面地址
      url: '/pages/index/index',
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