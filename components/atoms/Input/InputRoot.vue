<template>
  <div
    :data-error="error"
    :class="[
      'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger',
      props.class
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { InputRootProps } from '@/types/input'

const props = defineProps<InputRootProps>();
const error = props.error ?? false;
</script>