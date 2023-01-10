// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Height:65,
        SHeight:820,
        shoppingWidth:500,
        sp1:15,
        sp2:0,
        sp3:0,
        sp4:15,
        /*第一层海报*/
        remmcommend_imglsit:[
            {
                id:1,
                img:'https://img10.360buyimg.com/imgzone/jfs/t1/217162/5/5096/146653/619862c1E5e4938d6/6a5e469501ca7a0b.jpg'
            },
            {
                id:2,
                img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnews.southcn.com%2Fnfplus%2Fnfpjx%2Fcontent%2Fattachment%2F20200501%2F2cbb7c1c-056d-4675-8311-43a0ddb7b253.jpg&refer=http%3A%2F%2Fnews.southcn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653119234&t=23781472a043c82e8eb65224eae10393'
            },
            {
                id:3,
                img:'https://img2.baidu.com/it/u=1244031192,103957828&fm=253&fmt=auto&app=138&f=PNG?w=321&h=500'
            }
        ],
        /*第二层海报*/ 
        remomend_tab:[
            {
                id:4,
                img:'https://img2.baidu.com/it/u=2847502460,1070858268&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500'
            },
            {
                id:5,
                img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.ibaotu.com%2F00%2F00%2F00%2F00G888piC5DZ.jpg&refer=http%3A%2F%2Fpic.ibaotu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653103250&t=1c900f1f739a3e888de86dfc486db797'
            },
            {
                id:6,
                img:'https://img2.baidu.com/it/u=3143948731,264811896&fm=253&fmt=auto&app=138&f=JPEG?w=860&h=403'
            },
            {
                id:7,
                img:'https://img1.baidu.com/it/u=2437416679,982464964&fm=253&fmt=auto&app=138&f=JPEG?w=1000&h=500'
            },
        ],
        shopping_nev:[
            {
                id:1,
                images:'https://img.alicdn.com/imgextra/i1/1854370052/O1CN01oTuDC01CFrK7hme2e_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i3/1979630181/O1CN01R5vpeO1DCwRGATQBJ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i1/14662633/TB2BfpYezgy_uJjSZJnXXbuOXXa_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'新鲜冰糖心萝卜即食甜脆水果冰淇淋萝卜农产品',
                price:'26.80',
                shoppingnum:'2000',
                shoppingvaluate:'96'
                },     
                {
                id:2,
                images:'https://img.alicdn.com/imgextra/i2/1854370052/O1CN019SItUG1CFrKfYDJlv_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i3/51362556/O1CN01snv5D21Ukh21pE9yf_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i3/29819689/O1CN01BuuKnf2LRc8mj4Rub_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'正宗山东白萝卜新鲜当季脆甜即食水果农家自种蔬菜',
                price:'16.50',
                shoppingnum:'200',
                shoppingvaluate:'43'
                },  
                {
                id:3,
                images:'https://img.alicdn.com/imgextra/i3/29819689/O1CN01BuuKnf2LRc8mj4Rub_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i2/744360137/O1CN01kOmEcH1CsmwPNssYD_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i3/1923100033/O1CN01ZLU5EN1C79lDoMofC_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'福建漳州农家种植南方细长白萝卜',
                price:'19.90',
                shoppingnum:'11',
                shoppingvaluate:'7'
                },
                
                {
                id:4,
                images:'https://img.alicdn.com/imgextra/i2/229820017/O1CN01CXL8Gj1BzpRa05a6w_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i3/449980053/O1CN01mC3QOw1CGJgbw5olF_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i2/229820017/O1CN015qhXCR1BzpTVQlNkO_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'山东蜜薯烟薯25号农科院溏心地瓜红薯',
                price:'15.80',
                shoppingnum:'39999',
                shoppingvaluate:'23456'
                },
                
                {
                id:5,
                images:'https://img.alicdn.com/imgextra/i4/126160250/O1CN019xsuko1DiXbUTCrPr_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i4/133643076/O1CN01KJodnD1Yar2ETsAjo_!!0-saturn_solar.jpg_468x468q75.jpg_.webp', 
                images2:'https://img.alicdn.com/imgextra/i2/1299090133/O1CN01VBPCkw1CqxQ3j3gnU_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'现挖新鲜红薯产地直销农家自种沙地红蜜薯',
                price:'9.90',
                shoppingnum:'13449',
                shoppingvaluate:'8844'
                },
                
                {
                id:6,
                images:'https://img.alicdn.com/imgextra/i3/297890177/O1CN01vx484T1DB6qYVjfSh_!!2-saturn_solar.png_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i1/119829376/O1CN01gPs6jP2J8GBJb4tWL_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i2/317310039/O1CN01Nu9veJ1C9uA1nTYhh_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'海南澄迈桥头富硒地瓜带箱10斤',
                price:'29.80',
                shoppingnum:'1235',
                shoppingvaluate:'985'
                },
                
                {
                id:7,
                images:'https://img.alicdn.com/imgextra/i1/129136099/O1CN01nZLq9S1uvOJjuAKgJ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i4/329320138/O1CN01TfElHo1CtFNkGzsSg_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i1/1859330138/O1CN01v2LfWR1CtFMPwJUUs_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'种蘑菇菌平菇菌蘑菇大菌包菌棒盆栽',
                price:'4.90',
                shoppingnum:'21235',
                shoppingvaluate:'19985'
                },
                {
                id:8,
                images:'https://img.alicdn.com/imgextra/i3/1576180126/O1CN01A5tvlh1CnkbFntJXH_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i1/54894460/O1CN01p9UlvM1ioj3mfdcju_!!2-saturn_solar.png_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i4/1766620086/O1CN01OKrL221CVQnZHK6fL_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'鸡枞菌种原种菌种包蘑菇菌菇包食用菌',
                price:'18.90',
                shoppingnum:'30',
                shoppingvaluate:'21'
                },
                
                {
                id:9,
                images:'https://img.alicdn.com/imgextra/i1/1543990023/O1CN012nOqu71C2ZmdzNQSY_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i4/1610940162/O1CN01jyVb4u1D4EqubuIB5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i2/50216342/O1CN01BgLG2k1wigVorphrW_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'香菇种植菌食用菌家庭包蘑菇菌种',
                price:'35.60',
                shoppingnum:'199',
                shoppingvaluate:'100'
                },
                
                {
                id:10,
                images:'https://img.alicdn.com/imgextra/i1/1660640026/O1CN01rXdPPZ1C3x3Ahwiul_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images1:'https://img.alicdn.com/imgextra/i4/1720670041/O1CN01I2VkjY1CAoudir0fg_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                images2:'https://img.alicdn.com/imgextra/i4/2855960048/O1CN01kSV2Cs1CE1lGAjR2F_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',
                title:'新鲜辣椒大红辣椒现摘农家小辣椒当季蔬菜',
                price:'28.50',
                shoppingnum:'389',
                shoppingvaluate:'196'
                }
        ]
    },

    NoCode(){
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
            url: "/pages/detailled/detailled?passData="+ encodeURIComponent(JSON.stringify(passData)),
            })
    },

    shoppingcar(){
        wx.switchTab({
          url: '/pages/shoppingcar/shoppingcar',
        })
    },
    

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        wx.reLaunch({
          //加载页面地址
          url: '/pages/recommend/recommend',
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