function getRandomColor () {
    let rgb = []
    for (let i = 0 ; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }
  
  Page({
    onReady (res) {
      this.videoContext = wx.createVideoContext('myVideo')
      this.videoContext.requestFullScreen();
    },
    inputValue: '',
    bindInputBlur (e) {
      this.inputValue = e.detail.value
    },
    bindSendDanmu () {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      })
    }
  })
  