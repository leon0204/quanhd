// pages/detail/detail.js
import {
  HTTP
} from "../../utils/http.js"
let http = new HTTP

//获取应用实例
var app = getApp();

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
  onLoad: function (options) {
    http.request({
      //获取test参数 
      url: "priceDetail",
      data:{
        IDStr:"568240400765"
      },
      success: (res) => {

        wx.setNavigationBarTitle({
          title: res.Name//页面标题为路由参数
        })


          var arr = res.TicketPrice.match(/\d+(.\d+)?/g);

          res.PriceAfter = res.Price - parseInt(arr[1])
          if ((res.PriceAfter).toString().length >= 4) {
            res.PriceAfter = (res.PriceAfter).toFixed(2)
          }


        this.setData({
          listData: this.data.listData.concat(res)
        })
        console.log(res)
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