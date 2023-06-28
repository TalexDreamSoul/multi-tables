<script setup>
import { onMounted, ref } from 'vue'

const table = ref({
  type: '',
  a: '',
  c: 0,
  n: 1,
  t: -1,
  text: '',
  canChose: false,
  wrong: [],
  options: [],
})

const container = ref()

function speak(_msg) {
  return new Promise((resolve) => {
    const msg = new SpeechSynthesisUtterance(_msg)
    msg.lang = 'zh-CN'
    msg.onend = resolve
    msg.onerror = resolve
    speechSynthesis.speak(msg)
  })
}

async function generateRandomOptions() {
  table.value.type = '乘法题'

  const options = []
  const n1 = Math.floor(Math.random() * 2) + 1
  const n2 = Math.floor(Math.random() * 9) + 1

  const answer = n1 * n2
  options.push(answer)

  while (options.length < 4) {
    const random = Math.floor(Math.random() * 10) + 1
    if (!options.includes(random))
      options.push(random)
  }

  table.value.a = answer
  table.value.text = `${n2} x ${n1}`
  table.value.options = options.sort(() => Math.random() - 0.5)
  await speak(`${n2} 乘以 ${n1} 得多少}`)

  table.value.canChose = true
}

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
    w: 'Tom',
    t: 'whole',
    a: ['Tim', 'Tony', 'Bob', 'Jerry', 'Bom', 'Tum', 'Tam', 'Tangmu', 'tmu'],
    o: '你的英文名字',
  },
]

async function generateWordOptions() {
  table.value.type = '单词题'

  const _w = words[Math.floor(Math.random() * words.length)]

  if (_w.t) {
    // 完整选出
    const options = []

    const _a = [..._w.a].sort(() => Math.random() - 0.5).slice(0, 3)

    options.push(_w.w, ..._a)

    table.value.a = _w.w
    table.value.text = _w.o
    table.value.options = options.sort(() => Math.random() - 0.5)

    await speak(`${_w.o}是什么`)
  }
  else {
    // 随机缺失

    const word = _w.w
    const n = Math.floor(Math.random() * (word.length - 1)) + 1

    // 从单词的第不少于n个字母开始取
    const starSlice = Math.random() * (word.length - n)

    const _a = [...word].slice(starSlice, starSlice + n)

    const options = [_a.join('')]

    // 随机生成3个错误答案
    while (options.length < 4) {
      // 生成长度为 n 的随机字母组合
      const random = [...Array(n)].map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('')

      if (!options.includes(random))
        options.push(random)
    }

    table.value.a = _a.join('')

    // 将文本从第 startSlice 个字母开始替换为 _ 替换 starSlice + n 个字母
    table.value.text = `${word.slice(0, starSlice)}${_a.map(() => '_').join('')}${word.slice(starSlice + n)}`
    table.value.options = options.sort(() => Math.random() - 0.5)

    await speak('哪些是单词')
    await speak(word)
    await speak('中所缺失的')
  }

  table.value.canChose = true
}

async function genMathQuestions() {
  table.value.type = '计算题'

  const options = []

  const n1 = Math.floor(Math.random() * 40) + 1
  const n2 = Math.floor(Math.random() * 20) + 1
  const n3 = Math.floor(Math.random() * 10) + 1

  const symbol1 = Math.random() > 0.5 ? 1 : -1
  const symbol2 = Math.random() > 0.5 ? 1 : -1

  const answer = n1 + symbol1 * n2 + symbol2 * n3

  options.push(answer)

  while (options.length < 4) {
    const random = Math.floor(Math.random() * 300) + 1
    if (!options.includes(random))
      options.push(random)
  }

  table.value.a = answer
  table.value.options = options.sort(() => Math.random() - 0.5)
  table.value.text = `${n1} ${symbol1 === 1 ? '+' : '-'} ${n2} ${symbol2 === 1 ? '+' : '-'} ${n3}`

  await speak('这道题的答案是多少')

  table.value.canChose = true
}

async function genMultiTableFormula() {
  table.value.type = '乘法口诀题'

  const options = []

  const n1 = Math.floor(Math.random() * 9) + 1
  const n2 = Math.floor(Math.random() * 9) + 1

  const answer = genFormula(n1, n2)

  options.push(answer)

  while (options.length < 4) {
    const random = genFormula(Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1, false)
    if (!options.includes(random))
      options.push(random)
  }

  table.value.a = answer
  table.value.options = options.sort(() => Math.random() - 0.5)
  table.value.text = '正确的是哪一个'

  await speak('下列哪一个是正确的乘法口诀')

  table.value.canChose = true
}

function genFormula(num1, num2, state = true) {
  const e = [
    '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一',
    '十二', '十三', '十四', '十五', '十六', '十七', '十八', '二十', '二十一',
    '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八',
    '二十九', '三十', '三十一', '三十二', '三十三', '三十四', '三十五',
    '三十六', '三十七', '三十八', '三十九', '四十', '四十一', '四十二',
    '四十三', '四十四', '四十五', '四十六', '四十七', '四十八', '四十九',
    '五十', '五十一', '五十二', '五十三', '五十四', '五十五', '五十六',
    '五十七', '五十八', '五十九', '六十', '六十一', '六十二', '六十三',
    '六十四', '六十五', '六十六', '六十七', '六十八', '六十九', '七十',
    '七十一', '七十二', '七十三', '七十四', '七十五', '七十六', '七十七',
    '七十八', '七十九', '八十', '八十一', '八十二', '八十三', '八十四',
    '八十五', '八十六', '八十七', '八十八', '八十九', '九十', '九十一',
  ]

  return `${e[num1 - 1]}${e[num2 - 1]}得${e[state ? num1 * num2 - 1 : Math.floor(Math.random() * 81) + 1]}`
}

function gen() {
  const gens = [generateRandomOptions, generateWordOptions, genMathQuestions, genMultiTableFormula]

  const _gen = gens[Math.floor(Math.random() * gens.length)]

  table.value.t = -1
  container.value.style.color = ''

  _gen()
}

async function answer(ans) {
  if (!table.value.canChose)
    return
  table.value.n += 1
  table.value.canChose = false
  table.value.t = table.value.options.indexOf(table.value.a)
  if (ans === table.value.a) {
    table.value.c += 1
    await speak('答对了')
  }

  else {
    await speak('答错了')
    container.value.style.color = 'red'

    const arr = table.value.wrong

    if (table.value.t !== -1) {
      arr.push({
        text: table.value.text,
        ans: table.value.a,
        choose: ans,
      })
    }
  }

  gen()
}

onMounted(() => {
  gen()
})
</script>

<template>
  <div class="Mention">
    第 {{ table.n }} 題，答对 {{ table.c }} 題 | 正确率：{{ (table.c / table.n * 100).toFixed(2) }}%
  </div>

  <div ref="container" :class="{ canChose: table.canChose }" absolute left="50%" top="50%" class="Multi-Container">
    <div class="Multi-Content">
      {{ table.text }}
    </div>
    <div class="Multi-Options">
      <div
        v-for="(option, index) in table.options" :key="option" :class="{ t: table.t === index }" class="Multi-Option"
        @click="answer(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>

  <div class="Multi-Wrongs">
    <div v-for="wrong in table.wrong" :key="wrong" class="Multi-Wrong">
      {{ wrong.text }} | 正确答案：{{ wrong.ans }} | 你的答案：{{ wrong.choose }}
    </div>
  </div>
</template>

<style>
.Multi-Wrongs {
  position: absolute;

  top: 50%;
  left: 0;

  height: 3rem;

  text-align: center;

  font-size: .5rem;
  font-weight: bold;

  transform: translate(0, -50%);
}

.Mention {
  position: absolute;
  margin-top: 5rem;

  top: 0;
  left: 0;

  width: 100%;
  height: 3rem;

  text-align: center;

  font-size: 1.5rem;
  font-weight: bold;
}

.Multi-Content {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.Multi-Options {
  display: flex;

  flex-direction: column;

  gap: 1rem;
}

.Multi-Option:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

.Multi-Option {
  position: relative;

  text-align: center;

  width: 12rem;
  height: 3rem;
  line-height: 3rem;

  /* color: #eee; */
  opacity: .5;
  pointer-events: none;
  border-radius: 1rem;
  transition: .25s;
  background-color: #eeeeee80;
}

.Multi-Option.t {
  background-color: #4caf50 !important;
  color: #fff;
  opacity: 1;
  pointer-events: auto;
}

.Multi-Container.canChose .Multi-Option {
  opacity: 1;
  pointer-events: auto;
}

.Multi-Container {
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  user-select: none;
}
</style>
