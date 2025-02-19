<template>
   <InputRoot>
        <InputIcon>
          <Link :size="18" />
        </InputIcon>
        <InputField :modelValue="linkInvite" readonly />
        <IconButton class="-mr-2" @click="handleClick ">
          <Copy :size="18"  />
        </IconButton>
      </InputRoot>
</template>

<script setup lang="ts">
import {Copy,Link} from 'lucide-vue-next'
import IconButton from '@/components/atoms/Button/IconButton.vue'
import { InputField, InputIcon, InputRoot } from '@/components/atoms/Input'
import type { InviteLinkProps } from '@/types/input'

const props = defineProps<InviteLinkProps>()

const handleClick = () => {
  navigator.clipboard.writeText(props.linkInvite)
}

</script>