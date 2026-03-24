<template>
  <div class="quati-mascot-container" :class="stateClass">
    <object :data="mascotSvg" type="image/svg+xml" class="quati-mascot-img"
      aria-label="Quati Mascot Animado"></object>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import mascotSvg from '@/assets/teste_quati_animado_novo.svg';

const props = defineProps({
  state: {
    type: String,
    default: 'idle', // 'idle', 'hover', 'entrance'
    validator: (value) => ['idle', 'hover', 'entrance'].includes(value),
  }
});

const stateClass = computed(() => `is-${props.state}`);
</script>

<style scoped lang="scss">
.quati-mascot-container {
  display: inline-block;
  transition: all 0.3s ease;

  &.is-entrance {
    animation: slide-up-fade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  &.is-hover {
    transform: translateY(-10px) scale(1.05);
    filter: drop-shadow(0 15px 25px rgba(var(--v-theme-primary), 0.3));
  }
}

.quati-mascot-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes slide-up-fade {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
