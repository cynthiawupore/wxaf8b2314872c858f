import  QRCode  from  '../../libs/qrCode'

Page({
    data: {
        hasQR:false,
        text:''
    },
    onLoad: function(options) { },
    onShow: function() { },
    onReady: function() { },
    onHide: function() { },
    onUnload: function() { },
    onPullDownRefresh: function() { },
    onReachBottom: function() { },
    onPageScroll: function() { },
    onShareAppMessage: function (res) {
        return  {
            title: '【文字转二维码】将您的话语放进二维码里',
            path: '/src/pages/index/index',
            imageUrl:  '/src/assets/share.png'
        }
    },



    bindFormSubmit(e) {
        wx.showLoading({
            title: '正在生成二维码...',
        })
        if(!e.detail.value.textarea){
            wx.showToast({
                title: '请先在上方输入文字',
                icon: 'none',
                duration: 2000
            })
            return
        }
        this.createQR(e.detail.value.textarea)
    },

    createQR(textarea) {
        this.setData({
            hasQR:true
        })
        const qrcode = new QRCode('QR', {
            text: textarea,
            width: 300,
            height: 300,
            colorDark : '#333',
            colorLight : '#f7f7f7',
            correctLevel : QRCode.correctLevel.H
        });
        wx.hideLoading()
    }
})
