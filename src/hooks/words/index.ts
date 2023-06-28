const words = [
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
    w: 'kite',
    o: '风筝',
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
    w: 'potato',
    o: '土豆',
  },
  {
    w: 'Tom',
    t: 'whole',
    a: ['Tim', 'Tony', 'Bob', 'Jerry', 'Bom', 'Tum', 'Tam', 'Tangmu', 'tmu'],
    o: '你的英文名字',
  },
]

export default async function () {
  const _w = words[Math.floor(Math.random() * words.length)]

  let answer, options, displayText, speak: string | string[]

  if (_w.t) {
    // 完整选出

    const _a = [..._w.a].sort(() => Math.random() - 0.5).slice(0, 3)

    options = [_w.w, ..._a]

    answer = _w.w
    displayText = _w.o

    speak = `${_w.t} 是什么`
  }
  else {
    // 随机缺失

    const word = _w.w
    const n = Math.floor(Math.random() * (word.length - 1)) + 1

    // 从单词的第不少于n个字母开始取
    const starSlice = Math.random() * (word.length - n)

    const _a = [...word].slice(starSlice, starSlice + n)

    options = [_a.join('')]

    // 随机生成3个错误答案
    while (options.length < 4) {
      // 生成长度为 n 的随机字母组合
      const random = [...Array(n)].map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('')

      if (!options.includes(random))
        options.push(random)
    }

    answer = _a.join('')

    // 将文本从第 startSlice 个字母开始替换为 _ 替换 starSlice + n 个字母
    displayText = `${word.slice(0, starSlice)}${_a.map(() => '_').join('')}${word.slice(starSlice + n)} (${_w.o})`

    speak = [
      '哪些是单词',
      word,
      '中所缺失的',
    ]
  }

  return {
    title: '单词题',
    answer,
    displayText,
    options: options!.sort(() => Math.random() - 0.5),
    speak,
  }
}
