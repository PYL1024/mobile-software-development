// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['北京市','北京市','朝阳区'],
    now:{
      temp:0,
      text:'未知',
      icon:999,
      humidity:0,
      pressure:0,
      vis:0,
      windDir:0,
      windSpeed:0,
      windScale:0
    }
  },

  /**
   * 获取天气信息
   */
  getWeather:function() {
    var that = this;
    wx.request({
      url: 'https://ka67cdph36.re.qweatherapi.com/geo/v2/city/lookup',
      data: {
        location:that.data.region[2],
        key:'f966a5e556894308898c6367461751d7'
      },
      success(res1) {
        // const cityData = res1.data.location[0];
        wx.request({
          url: 'https://ka67cdph36.re.qweatherapi.com/v7/weather/now',
          data: {
            location:res1.data.location[0].id,
            key:'f966a5e556894308898c6367461751d7'
          },
          success:function(res2) {
            that.setData({now:res2.data.now});
          }
        })
      }
    })
  },

  /**
   * 更新地区信息
   */
  regionChange:function(e) {
    this.setData({region:e.detail.value});
    this.getWeather();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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