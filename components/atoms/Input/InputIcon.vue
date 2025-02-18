<template>
  <span
    :class="[
      'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
      $attrs.class as string
    ]"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import type { InputIconProps } from '@/types/input'

defineProps<InputIconProps>()
</script>