<script setup lang="ts">
// withDefaults TS中放默认值的  defineProps 接收参数的 后跟指定接受参数类型
withDefaults(defineProps<{ collapse: boolean }>(), { collapse: false });
</script>

<template>
  <div class="h-14 flex justify-center items-center">
    <svg width="24" height="24" viewBox="0 0 73 73" fill="none">
      <mask
        id="svg_0e141a1f73__a"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="34"
        y="2"
        width="39"
        height="71"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M71.503 2.721L55.511 20.005a.595.595 0 00-.145.523 3.59 3.59 0 01-6.106 3.213L35.304 37.698a2.08 2.08 0 00-.604 1.628l1.375 18.373L51.01 72.633a1.25 1.25 0 002.084-.535L72.968 3.53c.164-.611-.325-1.09-.842-1.09a.836.836 0 00-.623.281z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#svg_0e141a1f73__a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.093-.342l-18.56 20.06a.59.59 0 00-.148.521 3.63 3.63 0 01-6.17 3.255l-14.791 14.79 1.462 19.536 16.61 16.609L74.093-.341z"
          fill="#38F"
        />
      </g>
      <mask
        id="svg_0e141a1f73__b"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="34"
        y="2"
        width="39"
        height="71"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M71.503 2.721L55.511 20.005a.595.595 0 00-.145.523 3.59 3.59 0 01-6.106 3.213L35.304 37.698a2.08 2.08 0 00-.604 1.628l1.375 18.373L51.01 72.633a1.25 1.25 0 002.084-.535L72.968 3.53c.164-.611-.325-1.09-.842-1.09a.836.836 0 00-.623.281z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#svg_0e141a1f73__b)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M73.87.162L55.51 20.005a.591.591 0 00-.146.523 3.59 3.59 0 01-6.105 3.213L34.722 38.278a.29.29 0 00-.084.227l1.436 19.193L73.095 1.844 73.87.162z"
          fill="#005DE0"
        />
      </g>
      <mask
        id="svg_0e141a1f73__c"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="71"
        height="39"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.47.032L.903 19.907a1.25 1.25 0 00-.536 2.083l14.935 14.936 18.373 1.375a2.08 2.08 0 001.628-.604l13.955-13.956a3.59 3.59 0 01-.053-5.128 3.587 3.587 0 013.267-.977.595.595 0 00.522-.146L70.278 1.498c.6-.554.163-1.498-.57-1.498a.917.917 0 00-.238.032z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#svg_0e141a1f73__c)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M73.341-1.093L53.282 17.466a.591.591 0 01-.522.149 3.63 3.63 0 00-3.255 6.17l-14.79 14.791-19.536-1.462-16.609-16.61L73.341-1.093z"
          fill="#46EBD5"
        />
      </g>
      <mask
        id="svg_0e141a1f73__d"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="71"
        height="39"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M69.47.032L.903 19.907a1.25 1.25 0 00-.536 2.083l14.935 14.936 18.373 1.375a2.08 2.08 0 001.628-.604l13.955-13.956a3.59 3.59 0 01-.053-5.128 3.587 3.587 0 013.267-.977.595.595 0 00.522-.146L70.278 1.498c.6-.554.163-1.498-.57-1.498a.917.917 0 00-.238.032z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#svg_0e141a1f73__d)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M72.838-.87L52.995 17.49a.592.592 0 01-.522.146 3.59 3.59 0 00-3.213 6.105L34.722 38.278a.29.29 0 01-.228.084l-19.192-1.436L71.156-.095l1.682-.775z"
          fill="#00D0B6"
        />
      </g>
    </svg>
    <Transition name="fade" mode="out-in">
      <span class="title" v-if="!collapse">剑指OFFER</span>
    </Transition>
  </div>
</template>

<style scoped>
.title {
  @apply ml-2 text-sm whitespace-nowrap;
  color: var(--el-text-color-regular);
}
.fade-enter-active,
.fade-leave-active {
  transition: width calc(var(--el-transition-duration) - 0.2s);
}
</style>
