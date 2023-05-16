// 非常重要 等待页面结构加载完毕在执行方法！！！！！ 也就是先生成这些对象才能通过js获取操作
document.addEventListener('DOMContentLoaded', function () {
  initCrumbDate()
  leftTabClick()
  bottomTabClick()
  rightPanelClick()
  rightOver()
  smallAndCompress()
  compressClick()
  arrowClick()
  bigGlass()
  renderGoodsInfo()
  renderGoodCondition()
  goodParamClick()
  choosedDelete()
  footerInputClick()
})
// 1. 实现面包屑导航
function initCrumbDate() {
  let container = document.querySelector('.wrap .con .conPoin') // 获得面包屑导航的容器
  let pathData = goodData.path // 获得每一个节点
  pathData.forEach(function (item, index) {
    let aNode = document.createElement('a') // 将每一个节点创建成a链接
    // console.log(item)
    aNode.innerText = item.title// a标签的内容
    if (index !== pathData.length - 1) {
      // 因为设置的内容goodData里面最后一个孩子没有url属性 所以为undefined的值
      // 所以需要判断最后一个path的值
      aNode.href = item.url // a标签的链接地址 
    }
    container.appendChild(aNode) // 将孩子上树到容器
  });
}

// 2. 实现左侧选项卡切换功能
function leftTabClick() {
  let menu = document.querySelectorAll('.wrap .productDetail .aside .tabWrap h4 ') // 获得菜单的俩个点
  let content = document.querySelectorAll('.wrap .productDetail .aside .tabContent > div') // 获得对应的俩个内容
  menu.forEach(function (h4item, index) { // 先循环绑定这俩个菜单点
    h4item.addEventListener('click', function () {
      menu.forEach(function (h4item2) { // 排他也就是移除其他的样式
        h4item2.classList.remove('active')
      })
      h4item.classList.add('active') // 给当前的添加样式 // h4item换成this也ok
      // 对应的内容通过下标改变
      content.forEach(function (divitem, divindex) {
        // 排他
        content.forEach(function (divitem2) {
          divitem2.classList.remove('active')
        })
        content[index].classList.add('active') // 给当前的index对应的内容显示出来
      })
    })
  })
}

// 3.实现底部选项卡切换功能
function bottomTabClick() {
  let content = document.querySelectorAll('.wrap .productDetail .detail .intro .tabContent > div')
  let list = document.querySelectorAll('.wrap .productDetail .detail .intro .tabWrap li')
  list.forEach(function (item, index) {
    item.addEventListener('click', function () {  // 绑定事件
      list.forEach(function (item2) {  // 菜单排他
        item2.classList.remove('active')
      })
      item.classList.add('active') // 给当前添加
      content.forEach(function (item) {
        item.classList.remove('active')  // 内容排他
      })
      content[index].classList.add('active') // 通过菜单的下标 给当前对应的内容添加
    })
  })
}

// 4.右侧面板上面的按钮折叠功能
function rightPanelClick() {
  let btn = document.querySelector('.wrap .toolBar .but')
  let content = document.querySelector('.wrap .toolBar')
  let isClose = true
  btn.addEventListener('click', function () { // 给打开按钮绑定事件
    if (isClose) { // 用一个局部变量isopen 来操作判断
      btn.classList.replace('list', 'cross')   // 打开 就是替换类名
      content.classList.replace('toolWrap', 'toolOut')
    } else {
      btn.classList.replace('cross', 'list')  // 关闭
      content.classList.replace('toolOut', 'toolWrap')

    }
    isClose = !isClose  // 一次操作后取反
  })
}

// 5.实现右侧悬浮菜单功能
function rightOver() {
  let list = document.querySelectorAll('.wrap .toolBar .toolList li')
  list.forEach(function (item) { // 遍历绑定li
    // 获得li里面的i标签和em标签
    let iELe = item.querySelector('i')
    let emELe = item.querySelector('em')
    item.addEventListener('mouseenter', function () {
      iELe.style.backgroundColor = 'rgb(200,17,34)'  // 悬浮的时候i标签变成便变色
      emELe.style.left = -62 + 'px' // em 标签的left变出来
    })
    item.addEventListener('mouseleave', function () {
      iELe.style.backgroundColor = 'rgb(122,110,110)'  // 变回去
      emELe.style.left = 35 + 'px' // 变回去
    })
  })
}

// 6. 实现小图的缩略图显示
function smallAndCompress() {
  // 小图片框默认是第一张图
  let smallsrc = goodData.imgsrc[0].s
  let smallimg = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom') // 小容器
  // 下面缩略图列表容器
  let listcont = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list')
  let list = goodData.imgsrc  // 获得全部缩略图数据
  let small = document.createElement('img')
  small.src = smallsrc // 小容器图片地址写入
  smallimg.appendChild(small) // 上树
  list.forEach(function (item) { // 缩略图上树
    var compressImg = document.createElement('img') // 创建img节点
    var li = document.createElement('li')  // 创建li节点
    compressImg.src = item.s // img写出src属性
    li.appendChild(compressImg) // 图片上树li
    listcont.appendChild(li) // li上树列表容器
  })
}

// 7. 实现点击缩略图 小图显示对应的图片
let index = 0 // 非常重要因为后面大图要用对应的
function compressClick() {
  // 获得每个li
  let compress = document.querySelectorAll('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list > li')
  // 获得小容器图片
  let small = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom img')
  compress.forEach(function (item, i) { // 将图片的下标传给index给后面大图用
    item.onclick = function () { // 绑定事件
      var src = item.firstElementChild.src  // 先获得缩略图的src属性
      small.src = src  // 给到小容器里面的图片
      index = i
    }
  })
}

// 8. 实现缩略图左右箭头的点击事件
function arrowClick() {
  // 获得总长度的图片ul 通过偏移量左右移动
  let ul = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .itemCon .list')
  // 给左右按钮绑定事件
  let rightArrow = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .next')
  let leftArrow = document.querySelector('.wrap .con .mainCon .previewWrap .specScroll .prev')
  let index = 0
  // console.log(ul.children[0].style.marginRight)   // 这样写获取不到右边距 因为是行内样式
  // console.log(getComputedStyle(ul.children[0]).marginRight)  // 25px  用computerstyle可以获得
  rightArrow.onclick = function () {
    if (index !== 10) {
      index++
    } else {
      return // 退出函数
    }
    console.log(index)
    ul.style.left = -index * 75 + 'px'
  }
  leftArrow.onclick = function () {
    if (index !== 1) {
      index--
    } else {
      return // 退出函数
    }
    console.log(index)
    ul.style.left = -index * 75 + 'px'
  }
}

// 9. 实现放大镜效果
function bigGlass() {
  // 获得小容器图片 进去后 mask显示 big显示 mask是创建出来的
  let smallcont = document.querySelector('.wrap .con .mainCon .previewWrap .preview .zoom')
  let smallpre = document.querySelector('.wrap .con .mainCon .previewWrap .preview')

  let mask = document.createElement('div') // 创建mask
  let bigBox = document.createElement('div')  // 创建大盒子
  let bigImg = new Image()


  smallcont.onmouseenter = function (event) { // 进入
    // 进去显示  
    bigImg.src = goodData.imgsrc[index].b // 获得大图片的地址 通过缩略图传来的index下标找到
    mask.classList.add('mask')
    bigBox.classList.add('bigBox')
    bigBox.appendChild(bigImg)  // 大图片上树 大盒子
    smallcont.appendChild(mask) // mask上树小盒子   上树只能够上最近的  父亲元素 zoom
    smallpre.appendChild(bigBox) // 大盒子上树 他的父亲为preview
  }
  smallcont.onmouseleave = function () { // 出来
    smallcont.removeChild(mask) // 删除孩子
    smallpre.removeChild(bigBox) // 同理
  }
  smallcont.onmousemove = function (event) {
    // 控制mask移动  
    var moveX = event.clientX - smallcont.getBoundingClientRect().left - mask.offsetWidth / 2
    var moveY = parseInt(event.clientY - smallcont.getBoundingClientRect().top - mask.offsetHeight / 2)

    if (moveX <= 0) {// 限制在小容器内
      moveX = 0
    }
    if (moveY <= 0) {
      moveY = 0
    }
    let limX = smallcont.offsetWidth - mask.offsetWidth
    let limY = smallcont.offsetHeight - mask.offsetHeight
    if (moveX > limX) { // 限制右边
      moveX = limX
    }
    if (moveY > limY) { // 限制下边
      moveY = limY
    }
    mask.style.left = moveX + 'px'
    mask.style.top = moveY + 'px'
    // 移动大容器里面的图片
    let bigMoveX = moveX * 2
    let bigMoveY = moveY * 2
    bigImg.style.top = -bigMoveY + 'px'
    bigImg.style.left = -bigMoveX + 'px'

  }
}

let selectedCont = 0 // 默认勾选的数量为0
// 10. 商品的基本信息
function renderGoodsInfo() {
  let goodMore = goodData.goodsDetail // 获得变量的基本信息 然后传到goodBase里面
  let goodBase = `<div class="info1"><h3 class="infoName">
  ${goodMore.title}
 </h3>
 <p class="news">
  ${goodMore.recommend}
 </p>
 <div class="priceArea">
   <div class="priceArea1">
     <div class="title">
       价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格
     </div>
     <div class="price">
       <i>￥</i>
       <em>${goodMore.price}</em>
       <span>降价通知</span>
     </div>
     <div class="remark">
       <i>累计评价</i>
       <span>19876</span>
     </div>
   </div>
   <div class="priceArea2">
     <div class="title">
       促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销
     </div>
     <div class="fixWidth">
       <i>加价购</i>
       <span>
       ${goodMore.promoteSales.content}
       </span>
     </div>
   </div>
 </div>
 <div class="support">
   <div>
     <div class="title">
       支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持
     </div>
     <div class="fixWidth">
     ${goodMore.support}
     </div>
   </div>
   <div>
     <div class="title">配&nbsp;送&nbsp;至</div>
     <div class="fixWidth">${goodMore.address}</div>
   </div>
 </div></div>`
  let par = document.querySelector('.wrap .con .mainCon .infoWrap .info1') // 父元素
  par.innerHTML = goodBase // 将上面字符串内容设置为父元素的文本 类似于子元素上树 用于许多元素一起上树
  // 搭配区域的左侧价格 和 总价 
  let leftPrice = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .master p')
  leftPrice.innerText = '￥' + goodMore.price

  // 获得全部选中复选框的个数  搭配数量
  let allinputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits .suitsItem input')
  let selectedPrice = 0
  // 遍历input找到被勾选的个数
  allinputs.forEach(function (item) {
    if (item.checked) {
      selectedCont++
      selectedPrice += parseInt(item.value) // 表单里的值为string
    }
  })
  // 把数量给到对应的地方
  let goodsCount = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result > div span')
  goodsCount.innerText = selectedCont

  // 总价格
  let totalPrice = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
  let realTotalPrice = goodMore.price + selectedPrice
  totalPrice.innerText = '￥' + realTotalPrice

}

// 11. 渲染商品参数
function renderGoodCondition() {
  let crumbData = goodData.goodsDetail.crumbData // 获得数据列表
  // dl的父亲
  let chooseArea = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea')
  crumbData.forEach(function (item) {
    // 创建dl
    let dl = document.createElement('dl')
    // 创建dl里面的dt
    let dt = document.createElement('dt')
    dt.innerText = item.title
    // dt上树dl
    dl.appendChild(dt)
    // 遍历crumbDate里面的data创建dd
    let dds = item.data // 获得一组里面的所有dd
    dds.forEach(function (dd) { // dd遍历创建
      let ddCreat = document.createElement('dd')
      ddCreat.innerText = dd.type  // 内容
      ddCreat.setAttribute('price', dd.changePrice) // 给每一个dd设置改变价格
      dl.appendChild(ddCreat) // 创建完上树
    })
    // dl上树chooseArea
    chooseArea.appendChild(dl)
  })
}

let PamraContainer = [0, 0, 0, 0] // 上树的容器 四个值最多 覆盖值 非常重要
// 12. 单击商品参数切换 加上创建选上框
function goodParamClick() {
  let choosed = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea .choosed')
  let dls = document.querySelectorAll('.wrap .con .mainCon .infoWrap .choose .chooseArea dl')

  // 功能1：获取dl 选择里面的dd 绑定点击事件
  dls.forEach(function (dl, index) { // 将dl的下标 传给参数容器
    let dds = dl.querySelectorAll('dd') //  获得dd
    dds.forEach(function (dd) {     // 遍历dds
      dd.onclick = function () {  // 给dd绑定事件
        dds.forEach(function (dd2) {
          dd2.style.color = 'rgb(102,102,102)'  // 排他
        })
        this.style.color = 'red' // 给当前dd高亮显示

        // 功能2 ：先获得选中的内容 再上传到参数容器中
        PamraContainer[index] = {
          text: this.innerText,
          price: parseInt(this.getAttribute('price'))
        }// 把对应的下标内容设置当前dd的内容
        console.log(PamraContainer)

        // 调用汇总价格
        calcTotalPrice()
        choosed.innerText = '' // 原被选择的内容设置为0 非常重要
        // 循环容器 创建节点上树
        PamraContainer.forEach(function (value, markindex) { // 遍历容器 里面的值已经点击完后 value就是值
          if (!value) {
            return
          }
          // 创建容器内容里面的mark mark里面的a
          let mark = document.createElement('mark')
          mark.innerText = value.text// 将mark的内容设置为 点击dd的内容
          let aELe = document.createElement('a')
          aELe.innerText = 'X'
          // 给a添加属性index好让删除的时候可以获得下标 让dl变成默认选中第一个dd
          aELe.setAttribute('dlIndex', markindex)
          mark.appendChild(aELe) // a上树mark
          choosed.appendChild(mark) // mark上树choosed
        })
      }
    })
  })
}

// 13. 单击动态mark的 删除功能
function choosedDelete() {
  // 用事件委托 点击choosed时候绑定事件 里面的a 也可以触发事件
  let choosed = document.querySelector('.wrap .con .mainCon .infoWrap .choose .chooseArea .choosed')
  let dls = document.querySelectorAll('.wrap .con .mainCon .infoWrap .choose .chooseArea dl')
  choosed.onclick = function (event) { // 给choosed绑定事件
    if (event.target.localName !== 'a') { // 如果点击的不是a标签则不触发删除 不运行下面内容
      return
    }
    let markNode = event.target.parentNode // 获得a的父亲元素 mark
    // 找到mark的父亲元素choosed然后 remove mark
    choosed.removeChild(markNode) // 最后再移除

    let realDlIndex = event.target.getAttribute('dlIndex')
    // 点了删除之后 也就是dl有一行没选择任何东西 要显示 默认选中第一个 
    let dds = dls[realDlIndex].querySelectorAll('dd')
    dds.forEach(function (dd) {
      dd.style.color = 'rgb(102,102,102)'  // 所有的dd都变灰色
    })
    console.log(PamraContainer)
    PamraContainer[realDlIndex] = 0 // 在删除后 容器里面的对应下标的值也要删除 不然后面点击又会出现
    dds[0].style.color = 'red' // 第一个颜色为红色
    // 调用汇总价格
    calcTotalPrice()
  }
}

// 汇总价格
function calcTotalPrice() {
  let realTotalPrice = document.querySelector('.wrap .con .mainCon .infoWrap .info1 .priceArea .priceArea1 .price em')
  let originPrice = goodData.goodsDetail.price // 5300 默认价格
  let addPrice = 0
  PamraContainer.forEach(function (item) {// 遍历购物车 也就是参数容器的price汇总
    if (!item) {
      return
    }
    addPrice += item.price   // 添加到这里
  })
  realTotalPrice.innerText = originPrice + addPrice

  // 左下角动态价格
  let leftPriceCont = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .master p')
  let inputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits input')
  let rightPrice = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
  let selectedPrice = 0 // 选择陪购价格
  inputs.forEach(function (item) { // 循环input获得已经被选中的内容
    if (item.checked) {
      selectedPrice += parseInt(item.value)
    }
  })
  console.log(selectedPrice)
  // 左侧总价格
  leftPriceCont.innerText = '￥' + realTotalPrice.innerText
  // 右侧总价格 
  rightPrice.innerText = '￥' + (parseInt(leftPriceCont.innerText.substring(1)) + selectedPrice)
}

// 14.单击搭配区域input元素事件处理
function footerInputClick() {
  // 获取input
  let inputs = document.querySelectorAll('.wrap .productDetail .detail .fitting .goodSuits .suits input')
  let rightCont = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result .price')
  let rightCount = document.querySelector('.wrap .productDetail .detail .fitting .goodSuits .result > div span')
  let rightPrice = parseInt( rightCont.innerText.substring(1)) // 获得右侧的价格
  let selePrice = 0 // 选择的配件价格
  inputs.forEach(function (item) {
    item.onclick = function () {
      if (item.checked) {
        selectedCont++
        rightPrice += parseInt(this.value)
      } else {
        selectedCont--
        rightPrice -= parseInt(this.value)
      }
      rightCont.innerText = '￥'+ rightPrice
      rightCount.innerText = selectedCont
    }
  })
}