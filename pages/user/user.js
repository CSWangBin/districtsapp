'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'user',
    userInfo: null,
    userDetail: [{
      title: '浏览',
      number: 1
    }, {
      title: '关注',
      number: 4
    }, {
      title: '收藏',
      number: 20
    }],
    userList: [{
      icon: 'iconfont icon-xiaoxi',
      title: '我的消息',
      id: 'message'
    }, {
      icon: 'iconfont icon-lingdang',
        title: '学校关注',
        id: 'number'
      }, {
        icon: 'iconfont icon-lingdang',
        title: '培训关注',
        id: 'number'
      }, {
        icon: 'iconfont icon-lingdang',
        title: '关注文体用品',
        id: 'number'
      },
     {
      icon: 'iconfont icon-fapiao',
      title: '我的收藏',
      id: 'integral'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    this.setData({
      userInfo: app.data.userInfo
    });
    // TODO: onLoad
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=user.js.map
