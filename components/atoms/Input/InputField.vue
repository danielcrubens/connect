

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="['flex-1 outline-0 placeholder-gray-400', $attrs.class as string]"
    :placeholder="placeholder"
    :type="type"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
import type { InputFieldProps } from '@/types/input'

defineProps<InputFieldProps>() 
defineEmits(['update:modelValue'])
</script>