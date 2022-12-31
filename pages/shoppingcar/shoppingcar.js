// pages/search/search.js
let recordStartX = 0, currentOffsetX = 0, curIndex = 0; //按下初始值，当前滑块初始值，当前滑块下标
Page({

  data: {
    carts:// 购物车内商品数据
    [
      { id: 1, title: ' 【现货顺丰冷链】泰国进口山竹5斤3斤 进口生鲜新鲜山竹甄选品质5A大果 3斤装【3A果/18个左右】', num: 4, price: 380, zhl:4,guig:5,src:'https://img11.360buyimg.com/n7/jfs/t1/85154/17/25088/137626/6231b626E643080cf/29aa42a58c33cca1.jpg',selected: true },
      { id: 2, title: '烟台红富士苹果12个礼盒 净重2.6kg起 单果190-240g 生鲜 新鲜', num: 1, price: 54,
      zhl:8,guig:2, src:'	https://img11.360buyimg.com/n7/jfs/t1/167493/14/12148/97249/604b1bf6E40ea4c95/ba5d6001257d3f44.jpg',selected: true },
      { id: 3, title: '自然故事 海南三亚贵妃芒 芒果5斤装 单果110g-200g 芒果 红金龙芒果  京东生鲜 产地直发 ', num: 2, price: 85,zhl:6,guig:30, src:'https://img12.360buyimg.com/n7/jfs/t1/170776/10/9133/150808/6040738eEe60c3b05/69ee326c4a2f8d50.jpg',selected: true }
    ],
    //  hasList: tue,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAll: true,    // 全选状态，默认不全选
    selectNum: 0,         //选中的件数
    fee: 1,             // 支付金额，单位为分
    paymentArgs: 'A', // 将传递到功能页函数的自定义参数
    currencyType: 'USD', // 货币符号，页面显示货币简写 US$ 
    version: 'develop', // 上线时，version 应改为 "release"，并确保插件所有者小程序已经发布

  },
  //计算总价格
  totlePrice: function () {
    let carts = this.data.carts;
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;
        num += carts[i].num;
      }
    }
    this.setData({
      selectNum: num,
      totalPrice: total.toFixed(2)
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.totlePrice()
  },
  //选中反选
  selected: function (e) {
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let selectAll = this.data.selectAll;
    let count = 0;
    carts[index].selected = !carts[index].selected;
    //判断全选状态
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        count++;
      }
    }
    if (count == 3) {
      selectAll = true;
    } else {
      selectAll = false;
    }
    this.setData({
      carts: carts,
      selectAll: selectAll
    });
    this.totlePrice();
  },
  //全选
  selectedAll: function () {
    let selectAll = this.data.selectAll;   // 是否全选状态
    selectAll = !selectAll;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAll;    // 改变所有商品状态
    }
    this.setData({
      selectAll: selectAll,
      carts: carts
    });
    this.totlePrice();     // 获取总价
  },
  //增加
  addNum : function(e){
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.totlePrice();
  },
  //减少
  subNum : function(e){
    const index = e.currentTarget.dataset.num;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.totlePrice();
  },
  delete: function(e){
    
  },

  onPullDownRefresh:function(){
    wx.showNavigationBarLoading();
    wx.reLaunch({
      url: '/pages/shoppingcar/shoppingcar',
      success:function(res){
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },
  buy(e){
    var price = e.currentTarget.dataset.price01
    var num = e.currentTarget.dataset.num
    var title = e.currentTarget.dataset.title
    var weight = e.currentTarget.dataset.weight
    var math = e.currentTarget.dataset.math
    var yunfei = e.currentTarget.dataset.yunfei
    var passData={
      price:price,
      num:num,
      title:title,
      weight:weight,
      math:math,
      yunfei:yunfei
    }
    console.log(passData)
    wx.navigateTo({
      url: "/pages/buy/buy?passData="+encodeURIComponent(JSON.stringify(passData)),
    })
  },
})

