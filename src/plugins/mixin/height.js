const minHeight = {
  data: function () {
    return {
      minHeight: '500px'
    }
  },
  created () {
    let currheight = 0
    currheight = document.documentElement.clientHeight - 350
    currheight = currheight > 500 ? (currheight + 'px') : '500px'
    this.minHeight = currheight
    window.onresize = () => {
      currheight = document.documentElement.clientHeight - 350
      currheight = currheight > 500 ? (currheight + 'px') : '500px'
      this.minHeight = currheight
    }
  }
}

export default minHeight
