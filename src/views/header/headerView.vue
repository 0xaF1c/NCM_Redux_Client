<script setup lang="ts">

import {
  NLayoutHeader,
  NSwitch,
  NIcon,
  GlobalTheme,
  NSpace,
  NAvatar,
  NPopconfirm,
  useMessage,
  NButton
} from 'naive-ui'
import {
  Square24Regular,
  SquareMultiple24Regular,
  Subtract24Filled,
  Dismiss24Filled
} from '@vicons/fluent'
import searchView from './searchView.vue'

import { useToggleTheme } from '../../utils/toggleTheme'
import { WeatherMoon16Filled, WeatherSunny16Filled, ArrowRight24Filled, ArrowLeft24Filled } from '@vicons/fluent'
import { ref, watch } from 'vue'
import { getUserStatus } from '../../requests/getUserStatus'
import { isLoggedIn, logout } from '../../utils/auth'
import { useLoginModal } from '../../components/login/useLoginModal'
import { useRouter, useRoute } from 'vue-router'


const route = useRoute()
const { back, forward } = useRouter()
const { theme, toggleTheme, currentTheme, currentThemeBool } = useToggleTheme()
const { success, info } = useMessage()
const { showLoginModal } = useLoginModal()


const emits = defineEmits<{
  (e: 'update:theme', data: GlobalTheme | null): void
  (e: 'update:show', data: boolean): void
}>()

const onThemeToggle = () => {
  toggleTheme()
  emits('update:theme', theme.value)
}

const profile = ref()
const backDisable = ref(window.history?.state.back === null)
const forwardDisable = ref(window.history?.state.forward === null)
const maximize = ref(false)

watch(
  () => route.path,
  () => {
    backDisable.value = window.history?.state.back === null
    forwardDisable.value = window.history?.state.forward === null
  }
)
const onBack = () => {
  if (window.history?.state.back === null) return;
  backDisable.value = window.history?.state.back === null

  back()
}
const onForward = () => {
  forwardDisable.value = window.history?.state.forward === null
  forward()
}

const onMaximizeToggle = () => {
  maximize.value = !maximize.value
  window.ipcRenderer.invoke('onMaximizeToggle', maximize.value)
}
const onHidden = () => {
  window.ipcRenderer.invoke('hidden')

}
const onClose = () => {
  window.ipcRenderer.invoke('close')
}
const onHeaderMouseup = () => {
  setTimeout(async () => {
    maximize.value = await window.ipcRenderer.invoke('isMaximized')
    let timer = null
    if (maximize.value) {
      if (timer == null) {
        timer = setInterval(async () => {
          maximize.value = await window.ipcRenderer.invoke('isMaximized')
          
          if (!maximize.value) clearInterval(timer!)
        }, 500)
      }
    }
  }, 100)
}
; (async () => {
  if (isLoggedIn()) {
    const _profile = (await getUserStatus())?.data?.data?.profile

    if (_profile) {
      success('获取状态成功')
      profile.value = _profile

    }

  } else {
    info('您还未登录')
  }
  window.onmouseup = onHeaderMouseup
})()
const handlePositiveClick = () => {
  success('退出登录成功')
  logout()
}

</script>

<template>
  <n-layout-header style="z-index: 10" bordered class="header" @click="onHeaderMouseup">
    <n-space align="center" justify="space-around" style="-webkit-app-region: drag;">
      <n-space align="center">
        <img src="/cloud_music.svg" width="70" />
        <div style="display: flex; align-items: center;">
          <h1>NCM</h1>__
          <span>Redux</span>
        </div>
      </n-space>


      <n-button quaternary circle :disabled="backDisable" @click="onBack">
        <template #icon>
          <n-icon :size="25" :component="ArrowLeft24Filled"></n-icon>
        </template>
      </n-button>
      <n-button quaternary circle :disabled="forwardDisable" @click="onForward">
        <template #icon>
          <n-icon :size="25" :component="ArrowRight24Filled"></n-icon>
        </template>
      </n-button>
    </n-space>
    <searchView />

    <n-space align="center" justify="space-between">
      <n-switch v-model:value="currentThemeBool" @click="onThemeToggle" size="large">
        <template #icon>
          <n-icon v-show="currentTheme == 'light'" :component="WeatherSunny16Filled"></n-icon>
          <n-icon v-show="currentTheme == 'dark'" :component="WeatherMoon16Filled"></n-icon>
        </template>
      </n-switch>


      <n-popconfirm
        @positive-click="handlePositiveClick"
        positive-text="确认"
        negative-text="取消"
        v-if="isLoggedIn()"
      >
        <template #trigger>
          <n-avatar :src="profile?.avatarUrl ?? './default.png'" size="large" circle />
        </template>
        您是否要退出登录
      </n-popconfirm>
      <n-avatar v-if="!isLoggedIn()" @click="showLoginModal()" src="./default.png" size="large" circle />
      <n-space justify="center">
        <n-button size="large" circle quaternary @click="onHidden">
          <template #icon>
            <n-icon :component="Subtract24Filled"></n-icon>
          </template>
        </n-button>
        <n-button size="large" circle quaternary @click="onMaximizeToggle">
          <template #icon>
            <n-icon v-show="maximize" :component="SquareMultiple24Regular"></n-icon>
            <n-icon v-show="!maximize" :component="Square24Regular"></n-icon>
          </template>
        </n-button>
        <n-button size="large" circle quaternary @click="onClose">
          <template #icon>
            <n-icon :component="Dismiss24Filled"></n-icon>
          </template>
        </n-button>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

<style scoped lang="less">
@import url('../../styles/varible.less');

.n-input {
  width: 400px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: @total-padding-left;
  padding-right: @total-padding-right;
  -webkit-app-region: drag;
  * {
    -webkit-app-region: no-drag;
  }
}

.n-avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>