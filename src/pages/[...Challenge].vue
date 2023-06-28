<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { use } from '../hooks/index'

const dom = ref(null)
const route = useRoute()

const [option, answer, start, timing] = use(dom)

const types = {
  normal: [100, -1, 0],
  medium: [100, 15 * 60, 0],
  hard: [100, 15 * 60, 0.8],
}

onMounted(() => {
  const _p = route.params.Challenge

  let type = 'normal'

  if (_p.length === 2)
    type = _p[1]

  const _ = types[type]

  start(_[0], _[1], _[2])
})
</script>

<template>
  <div v-if="timing.t > 0" :style="`--p: ${100 - Math.round(timing._ / timing.t * 100)}%`" class="Timing">
    时间剩余 ({{ timing.t - timing._ }} 秒)
  </div>

  <div class="Mention" :class="{ show: !option.canChose }">
    第 {{ option.count }} 題，答对 {{ option.correct }} 題 | 正确率：{{ (option.correct / option.count * 100).toFixed(2) }}%
  </div>

  <div class="Theme" :class="{ show: !option.canChose }">
    {{ option.title }}
  </div>

  <div ref="dom" :class="{ canChose: option.canChose }" absolute left="50%" top="50%" class="Multi-Container">
    <div class="Multi-Content">
      {{ option.displayText }}
    </div>
    <div class="Multi-Options">
      <div
        v-for="item in option.options" :key="item" :class="{ t: option.showAnswer && option.answer === item }"
        class="Multi-Option" @click="answer(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style>
.Timing::before {
    content: '';
    position: absolute;

    top: -5px;
    left: 0;

    width: var(--p, 100%);
    height: 8px;

    font-size: 1rem;
    transition: .25s all;
    background-color: #E6C149a0;
}

.Timing {
  position: absolute;

  top: 5px;
  left: 0;

  width: 100%;
  height: 8px;

  font-size: 1rem;
}

.show {
  opacity: 1 !important;
}

.Theme {
  position: absolute;

  top: 20%;
  left: 0;

  width: 100%;
  height: 3rem;

  text-align: center;

  opacity: .5;
  font-size: 1.5rem;
  font-weight: bold;
}

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

  opacity: .5;
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
  color: #eeeeee;
  background-color: #26262650;
}

.Multi-Option {
  position: relative;

  text-align: center;

  width: 12rem;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 3rem;

  /* color: #eee; */
  opacity: .5;
  pointer-events: none;
  border-radius: 1rem;
  transition: .25s;
  background-color: #21212180;
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
