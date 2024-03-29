import { reactive } from 'vue'

import { useRouter } from 'vue-router'
import multiTable from './multi-table'
import words from './words'
import calc from './calc'
import choose from './words/choose'
import chooseWord from './words/choose-word'
import table from './multi-table/table'
import complesCalc from './calc/comples-calc'

export interface IOption {
  title: string
  answer: string | number
  options: string[] | number[]
  canChose: boolean
  displayText: string
  count: number
  correct: number
  showAnswer?: boolean
}

export interface Wrong {
  title: string
  ans: string | number
  choose: string | number
  options: string[] | number[]
  ts: number
  text: string
}

export const wrongs = useLocalStorage<Wrong[]>('wrongs', [])

function speak(_msg: string) {
  return new Promise((resolve) => {
    const msg = new SpeechSynthesisUtterance(_msg)
    msg.lang = 'zh-CN'
    msg.onend = resolve
    msg.onerror = resolve
    speechSynthesis.speak(msg)
  })
}

const hooks = [complesCalc, multiTable, words, calc, choose, chooseWord, table, complesCalc]

export function use(_ele: any) {
  let total = 100
  let time = -1
  let per = 0.8

  const router = useRouter()

  const _timing = ref({
    _: 0,
    t: time,
  })

  const option = reactive<IOption>({
    count: 1,
    correct: 0,
    title: '',
    answer: '',
    options: [],
    canChose: false,
    displayText: '',
    showAnswer: false,
  })

  async function end() {
    // did issues completed
    if (option.count < total) {
      await speak(`很遗憾，还有${total - option.count}题未完成，测试失败！`)
    }
    else {
      const _ = Math.round(option.correct / option.count)

      await speak(`练习结束, 正确率为${_ * 100}%`)

      if (per > 0)
        await speak(_ >= per ? '恭喜你，通过了测试！' : '很遗憾，没有通过测试！')
    }

    setTimeout(() => router.push('/assistant'), 1000)
  }

  function start(total_ = 100, time_ = -1, per_ = 0) {
    total = total_
    time = time_
    per = per_

    _timing.value.t = time

    nextTick(async () => {
      await speak('准备开始练习')

      if (time > 0) {
        async function timing() {
          _timing.value._ += 1

          if (_timing.value._ >= time)
            return end()

          setTimeout(timing, 1000)
        }

        timing()
      }

      await gen()
    })
  }

  async function gen() {
    const _gen = hooks[Math.floor(Math.random() * hooks.length)]

    option.canChose = false
    option.showAnswer = false
    _ele.value.style.color = ''

    const res = await _gen()

    option.title = res.title
    option.answer = res.answer
    option.options = res.options
    option.displayText = res.displayText

    if (Array.isArray(res.speak)) {
      for (const _speak of res.speak)
        await speak(_speak)
    }
    else { await speak(res.speak) }

    option.canChose = true
  }

  async function answer(ans: string | number) {
    if (!option.canChose)
      return

    option.count += 1
    option.canChose = false
    option.showAnswer = true

    if (ans === option.answer) {
      option.correct += 1
      await speak('答对了')

      if (option.count >= total) {
        end()

        return
      }
    }

    else {
      await speak('答错了')
      _ele.value.style.color = 'red'

      wrongs.value.push({
        title: option.title,
        ans: option.answer,
        choose: ans,
        options: option.options,
        ts: Date.now(),
        text: option.displayText,
      })
    }

    gen()
  }

  return [option, answer, start, _timing]
}
