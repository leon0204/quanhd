// pages/index/index.js
import {
  HTTP
} from "../../utils/http.js"
let http = new HTTP
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    http.request({
      //获取test参数 
      url: "priceList",
      success: (res) => {

        for (var k in res.o_data) {
          var arr = res.o_data[k].TicketPrice.match(/\d+(.\d+)?/g);

          res.o_data[k].PriceAfter = res.o_data[k].Price - parseInt(arr[1])
          if ((res.o_data[k].PriceAfter).toString().length >= 4) {
            res.o_data[k].PriceAfter = (res.o_data[k].PriceAfter).toFixed(2)
          }
        }


        this.setData({
          listData: this.data.listData.concat(res.o_data)
        })
        // console.log(res.o_data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})