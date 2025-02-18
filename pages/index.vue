<template>
  <div>
   
      <Button>
        Enviar
        <ArrowRight />
      </Button>
      <IconButton>
        <Copy />
      </IconButton>
      <InputRoot :error="hasError">
        <InputIcon>
          <Mail :size="20" />
        </InputIcon>
        <InputField 
          :key="email" :modelValue="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
      </InputRoot>
    </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Copy, Mail } from 'lucide-vue-next'
import IconButton from '@/components/atoms/Button/IconButton.vue'
import Button from '@/components/atoms/Button/Button.vue'
import { InputRoot, InputIcon, InputField } from '~/components/atoms/Input'

const email = ref('')
const hasError = ref(false)
</script>