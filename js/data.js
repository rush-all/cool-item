// 模拟得是后端给咱们前端得数据  咱们之后要通过这份数据动态创建咱们得页面  不再像之前一样
// 在页面当中写死内容了
var goodData = {
  path: [
    {
      title: '手机、数码、通讯',
      url: '###',
    },
    {
      title: '手机',
      url: '###',
    },
    {
      title: 'Apple苹果',
      url: '###',
    },
    {
      title: 'iphone 6S系列',
    },
  ],
  imgsrc: [
    { b: './img/b3.png', s: './img/s3.png' },
    { b: './img/b2.png', s: './img/s2.png' },
    { b: './img/b3.png', s: './img/s3.png' },
    { b: './img/b1.png', s: './img/s1.png' },
    { b: './img/b2.png', s: './img/s2.png' },
    { b: './img/b3.png', s: './img/s3.png' },
    { b: './img/b1.png', s: './img/s1.png' },
    { b: './img/b2.png', s: './img/s2.png' },
    { b: './img/b3.png', s: './img/s3.png' },
    { b: './img/b1.png', s: './img/s1.png' },
    { b: './img/b2.png', s: './img/s2.png' },
    { b: './img/b3.png', s: './img/s3.png' },
    { b: './img/b1.png', s: './img/s1.png' },
    { b: './img/b2.png', s: './img/s2.png' },
    { b: './img/b3.png', s: './img/s3.png' },
  ],
  goodsDetail: {
    title: 'Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信5G手机',
    recommend:
      '推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返',
    price: 5300,
    promoteSales: {
      type: '加价购',
      content:
        '满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品',
    },
    support: '以旧换新，闲置手机回收 4G套餐超值抢 礼品购',
    address: '广东省 深圳市 南山区',
    evaluateNum: 19876,
    crumbData: [
      {
        title: '选择颜色',
        data: [
          {
            type: '金色',
            changePrice: 0,
          },
          {
            type: '银色',
            changePrice: 40,
          },
          {
            type: '黑色',
            changePrice: 90,
          },
        ],
      },
      {
        title: '内存容量',
        data: [
          {
            type: '64G',
            changePrice: 0,
          },
          {
            type: '128G',
            changePrice: 300,
          },
          {
            type: '256G',
            changePrice: 900,
          },
          {
            type: '512G',
            changePrice: 1300,
          },
        ],
      },
      {
        title: '选择版本',
        data: [
          {
            type: '公开版',
            changePrice: 0,
          },
          {
            type: '移动版',
            changePrice: -1000,
          },
        ],
      },
      {
        title: '购买方式',
        data: [
          {
            type: '官方标配',
            changePrice: 0,
          },
          {
            type: '优惠移动版',
            changePrice: -240,
          },
          {
            type: '电信优惠版',
            changePrice: -390,
          },
        ],
      },
    ],
  },
}
