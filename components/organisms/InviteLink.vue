<template>
   <InputRoot>
        <InputIcon>
          <Link :size="18" />
        </InputIcon>
        <InputField :value="defaultValue" readonly />
        <IconButton class="-mr-2">
          <Copy :size="18" />
        </IconButton>
      </InputRoot>
</template>

<script setup lang="ts">
import {Copy,Link} from 'lucide-vue-next'
import IconButton from '@/components/atoms/Button/IconButton.vue'
import { InputField, InputIcon, InputRoot } from '@/components/atoms/Input'
const defaultValue = 'http://localhost:3000/invite/123'
</script>