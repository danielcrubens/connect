<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900',
      props.class
    ]"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@/types/button'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  disabled: false
})
</script>