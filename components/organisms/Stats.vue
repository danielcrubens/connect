<template>
  <section class="grid md:grid-cols-3 gap-3">
    <div
      class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        1042
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Acessos ao link
      </span>
      <MousePointerClick :size="17" class=" text-purple top-3 left-3 absolute" />
    </div>

    <div
      class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        1042
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Inscrições feitas
      </span>
      <BadgeCheck :size="17" class=" text-purple top-3 left-3 absolute" />
    </div>

    <div
      class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        3&ordm;
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Posição no ranking
      </span>
      <Medal :size="17" class=" text-purple top-3 left-3 absolute" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BadgeCheck,
  Medal,
  MousePointerClick,
} from 'lucide-vue-next'
</script>