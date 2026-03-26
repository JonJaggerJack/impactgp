<template>
  <div class="min-h-screen flex flex-col items-center justify-center i-wrapper py-24 text-center">
    <div class="i-container mx-auto max-w-xl">
      <p class="text-6xl font-bold text-blue opacity-20">404</p>
      <h1 class="mt-4 text-3xl sm:text-4xl font-bold text-blue">
        Page introuvable
      </h1>
      <p class="mt-6 text-gray-500 text-lg">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink to="/" class="i-btn i-btn__primary">
          <span class="text-white">Retour à l'accueil</span>
        </NuxtLink>
        <NuxtLink to="/nous-contacter" class="i-btn i-btn__white border border-gray-300">
          <span>Nous contacter</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Page introuvable - Impact Group",
});
</script>
