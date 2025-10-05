<template>
  <ClientOnly v-if="!colorMode?.forced">
    <u-switch
      checked-icon="material-symbols:bedtime"
      unchecked-icon="material-symbols:light-mode"
      v-model="isDark"
      color="neutral"
      size="sm"
    ></u-switch>
    <template #fallback>
      <div class="size-8"></div>
    </template>
  </ClientOnly>
</template>
<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set(_isDark) {
        colorMode.preference = _isDark ? "dark" : "light";
    },
});
</script>
