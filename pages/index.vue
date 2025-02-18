<template>
    <section class="min-h-dvh flex flex-col justify-center gap-16">
      <div class="flex flex-col gap-8 items-center md:items-start">
        <img src="@/assets/images/logo.svg" alt="devstage" width="108.5" height="30" />
        <h1 class="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span class="text-blue">CodeCraft</span> Summit 2025
        </h1>
      </div>
      <div class="flex gap-5 items-stretch flex-col md:flex-row">
        <div class="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div class="flex items-center justify-between">
            <h2 class="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span class="flex items-center gap-2 text-purple font-semibold text-xs">
              <Radio :size="17" />
              AO VIVO
            </span>
          </div>
          <p class="text-gray-300 leading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>
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
      </div>
    </section>
</template>

<script setup lang="ts">
import { ArrowRight, Radio, User, Mail } from 'lucide-vue-next'
import Button from '@/components/atoms/Button/Button.vue'
import { InputRoot, InputIcon, InputField } from '@/components/atoms/Input'
</script>