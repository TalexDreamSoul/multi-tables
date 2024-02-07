const fruits = [
  {
    w: 'apple',
    o: '苹果',
  },
  {
    w: 'pear',
    o: '梨',
  },
  {
    w: 'banana',
    o: '香蕉',
  },
  {
    w: 'grapes',
    o: '葡萄',
  },
  {
    w: 'watermelon',
    o: '西瓜',
  },
  {
    w: 'orange',
    o: '橘子',
  },
  {
    w: 'strawberry',
    o: '草莓',
  },
  {
    w: 'pineapple',
    o: '菠萝',
  },
  {
    w: 'mango',
    o: '芒果',
  },
  {
    w: 'lemon',
    o: '柠檬',
  },
  {
    w: 'peach',
    o: '桃子',
  },
  {
    w: 'cherry',
    o: '樱桃',
  },
  {
    w: 'tomato',
    o: '西红柿',
  },
  {
    w: 'coconut',
    o: '椰子',
  },
  {
    w: 'kiwi',
    o: '猕猴桃',
  },
  {
    w: 'pomegranate',
    o: '石榴',
  },
]

const animals = [
  {
    w: 'dog',
    o: '狗',
  },
  {
    w: 'cat',
    o: '猫',
  },
  {
    w: 'pig',
    o: '猪',
  },
  {
    w: 'cow',
    o: '牛',
  },
  {
    w: 'sheep',
    o: '羊',
  },
  {
    w: 'horse',
    o: '马',
  },
  {
    w: 'rabbit',
    o: '兔子',
  },
  {
    w: 'duck',
    o: '鸭子',
  },
  {
    w: 'chicken',
    o: '鸡',
  },
  {
    w: 'goose',
    o: '鹅',
  },
]

const vegetables = [
  {
    w: 'cabbage',
    o: '卷心菜',
  },
  {
    w: 'potato',
    o: '土豆',
  },
  {
    w: 'carrot',
    o: '胡萝卜',
  },
  {
    w: 'onion',
    o: '洋葱',
  },
  {
    w: 'garlic',
    o: '大蒜',
  },
  {
    w: 'pepper',
    o: '辣椒',
  },
  {
    w: 'lettuce',
    o: '生菜',
  },
]

const body = [
  {
    w: 'head',
    o: '头',
  },
  {
    w: 'hair',
    o: '头发',
  },
  {
    w: 'face',
    o: '脸',
  },
  {
    w: 'eye',
    o: '眼睛',
  },
  {
    w: 'nose',
    o: '鼻子',
  },
  {
    w: 'ear',
    o: '耳朵',
  },
  {
    w: 'mouth',
    o: '嘴巴',
  },
  {
    w: 'tooth',
    o: '牙齿',
  },
  {
    w: 'tongue',
    o: '舌头',
  },
  {
    w: 'neck',
    o: '脖子',
  },
  {
    w: 'shoulder',
    o: '肩膀',
  },
  {
    w: 'arm',
    o: '手臂',
  },
  {
    w: 'elbow',
    o: '肘部',
  },
  {
    w: 'hand',
    o: '手',
  },
  {
    w: 'finger',
    o: '手指',
  },
  {
    w: 'leg',
    o: '腿',
  },
  {
    w: 'knee',
    o: '膝盖',
  },
  {
    w: 'foot',
    o: '脚',
  },
  {
    w: 'toe',
    o: '脚趾',
  },
]

const others = [
  {
    w: 'book',
    o: '书',
  },
  {
    w: 'pen',
    o: '笔',
  },
  {
    w: 'pencil',
    o: '铅笔',
  },
  {
    w: 'ruler',
    o: '尺子',
  },
  {
    w: 'eraser',
    o: '橡皮',
  },
  {
    w: 'bag',
    o: '书包',
  },
  {
    w: 'desk',
    o: '桌子',
  },
  {
    w: 'chair',
    o: '椅子',
  },
  {
    w: 'bed',
    o: '床',
  },
  {
    w: 'window',
    o: '窗户',
  },
  {
    w: 'door',
    o: '门',
  },
  {
    w: 'floor',
    o: '地板',
  },
  {
    w: 'wall',
    o: '墙',
  },
  {
    w: 'ceiling',
    o: '天花板',
  },
]

const colors = [
  {
    w: 'red',
    o: '红色',
  },
  {
    w: 'blue',
    o: '蓝色',
  },
  {
    w: 'green',
    o: '绿色',
  },
  {
    w: 'yellow',
    o: '黄色',
  },
  {
    w: 'white',
    o: '白色',
  },
  {
    w: 'black',
    o: '黑色',
  },
  {
    w: 'purple',
    o: '紫色',
  },
  {
    w: 'orange',
    o: '橙色',
  },
  {
    w: 'pink',
    o: '粉红色',
  },
  {
    w: 'brown',
    o: '棕色',
  },
  {
    w: 'gray',
    o: '灰色',
  },
  {
    w: 'silver',
    o: '银色',
  },
  {
    w: 'gold',
    o: '金色',
  },
]

export const words = [
  ...fruits,
  ...animals,
  ...vegetables,
  ...body,
  ...colors,
  ...others,
  {
    w: 'fresh',
    o: '新鲜的',
  },
  {
    w: 'sled',
    o: '雪橇',
  },
  {
    w: 'spell',
    o: '拼读',
  },
  {
    w: 'kite',
    o: '风筝',
  },
  {
    w: 'car',
    o: '汽车',
  },
  {
    w: 'bus',
    o: '公交车',
  },
  {
    w: 'train',
    o: '火车',
  },
  {
    w: 'plane',
    o: '飞机',
  },
  {
    w: 'ship',
    o: '船',
  },
  {
    w: 'bike',
    o: '自行车',
  },
  {
    w: 'motorcycle',
    o: '摩托车',
  },
  {
    w: 'Tom',
    t: 'whole',
    a: ['Tim', 'Tony', 'Bob', 'Jerry', 'Bom', 'Tum', 'Tam', 'Tangmu', 'tmu', 'Hello', 'Chen yize', 'Yize Chen', '陈艺泽'],
    o: '你的英文名字',
  },
]
