<template>
  <form class="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
          <h2 class="font-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>
          <div class="space-y-3">
            <InputRoot>
              <InputIcon>
                <User :size="18" />
              </InputIcon>
              <InputField type="text" placeholder="Nome completo" />
            </InputRoot>
            <InputRoot>
              <InputIcon>
                <Mail :size="18" />
              </InputIcon>
              <InputField type="text" placeholder="E-mail" />
            </InputRoot>
          </div>
          <Button type="submit">
            Confirmar
            <ArrowRight />
          </Button>
  </form>
</template>
<script setup lang="ts">
import { ArrowRight, User, Mail } from 'lucide-vue-next'
import Button from '@/components/atoms/Button/Button.vue'
import { InputRoot, InputIcon, InputField } from '@/components/atoms/Input'
</script>