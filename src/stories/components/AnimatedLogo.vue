<template>
    <svg :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg" :class="['quati-logo', { 'is-abstract': abstract }]">
        <defs>
            <!-- Gradiente com o efeito de reflexo para a primeira parte -->
            <linearGradient :id="gradientId" x1="0" y1="0" x2="0" y2="1">
                <stop offset="60%" stop-color="#1fa4de" />
                <stop offset="75%" stop-color="#7ccef4" />
                <stop offset="100%" stop-color="#5bbceb" />
            </linearGradient>

            <linearGradient :id="gradientReverseId" x1="0" y1="0" x2="0" y2="1">
                <stop offset="20%" stop-color="#5bbceb" />
                <stop offset="30%" stop-color="#7ccef4" />
                <stop offset="60%" stop-color="#1fa4de" />
            </linearGradient>

            <!-- É melhor manter estilos globais no bloco <style> do Vue, mas se 
           precisar ser portátil só copiando o SVG, eles vão aqui. -->
        </defs>

        <g transform="translate(180, 90)">
            <!-- Mascote animado usando foreignObject para preservar as animações CSS internas -->
            <foreignObject x="-90" y="-145" width="150" height="300">
                <object :data="mascotSvg" type="image/svg+xml"
                    style="width: 100%; height: 100%; object-fit: contain; pointer-events: none;"></object>
            </foreignObject>

            <!-- Primeira Parte -->
            <text x="0" y="0" text-anchor="middle" class="font-part-one stroke">
                {{ textPart1 }}
            </text>
            <text x="0" y="0" text-anchor="middle" class="font-part-one fill-part-one"
                :style="{ fill: `url(#${gradientId})` }">
                {{ textPart1 }}
            </text>

            <!-- Segunda Parte -->
            <text :x="part2OffsetX" y="70" text-anchor="middle" class="font-part-two stroke">
                {{ textPart2 }}
            </text>
            <text :x="part2OffsetX" y="70" text-anchor="middle" class="font-part-two fill-part-two"
                :style="{ fill: `url(#${gradientReverseId})` }">
                {{ textPart2 }}
            </text>
        </g>
    </svg>
</template>

<script setup>
import { computed } from 'vue'
import mascotSvg from '@/assets/teste_quati_animado_novo.svg'

const props = defineProps({
    textPart1: {
        type: String,
        default: 'Qua'
    },
    textPart2: {
        type: String,
        default: 'ti'
    },
    // Permite ajustar a caixa baseada no tamanho da palavra
    viewBox: {
        type: String,
        default: '0 0 360 200'
    },
    // Permite empurrar o segundo texto mais pra frente se a primeira palavra for grande
    part2OffsetX: {
        type: [Number, String],
        default: 30
    },
    abstract: {
        type: Boolean,
        default: false
    }
})

// Gerar um ID único previne bugs se você usar o logo 2x na mesma tela
const gradientId = computed(() => 'reflexo-gradient-' + Math.random().toString(36).substring(2, 9))
const gradientReverseId = computed(() => 'reflexo-gradient-' + Math.random().toString(36).substring(2, 9))
</script>

<style scoped>
/* Scoped garante que essas fontes não vazem para o resto do app */
.quati-logo {
    /* Tamanho maleável baseado no pai */
    height: 100%;
    /* max-width: 250px; */
    view-transition-name: quati-logo;
}

.font-part-one {
    font-family: 'Arial Black', Impact, sans-serif;
    font-size: 75px;
    font-weight: 900;
    letter-spacing: -4px;
}

.font-part-two {
    font-family: 'Arial Black', Impact, sans-serif;
    font-size: 90px;
    font-weight: 900;
    letter-spacing: -6px;
}

.stroke {
    fill: none;
    stroke: #373435;
    stroke-width: 14px;
    stroke-linejoin: round;
    stroke-linecap: round;
}

.fill-part-two {
    fill: #008ee0;
}

.is-abstract {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: blur(80px) saturate(150%);
    transform: scale(1.8);
    opacity: 0.6;
    pointer-events: none;
    z-index: -1;
    animation: float-bg 20s ease-in-out infinite alternate;
}

@keyframes float-bg {
    0% {
        transform: scale(1.8) translate(0, 0) rotate(0deg);
    }

    50% {
        transform: scale(2) translate(2%, 2%) rotate(5deg);
    }

    100% {
        transform: scale(1.8) translate(-2%, -2%) rotate(-5deg);
    }
}
</style>
