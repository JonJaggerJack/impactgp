<template>
  <div>
    <!-- Hero -->
    <section class="i-wrapper py-16 sm:py-20">
      <div class="i-container relative mx-auto">
        <p class="mb-3 text-xs text-primary font-bold uppercase">Ce que nous faisons</p>
        <h1 class="text-3xl sm:text-5xl">
          Nos <span class="text-blue opacity-80">services</span>
        </h1>
        <div class="mt-8 max-w-2xl">
          <p class="text-lg font-medium">
            Impact Group offre un accompagnement complet aux jeunes entrepreneurs
            congolais — de l'idée à la réalisation — pour que chaque initiative puisse
            grandir et contribuer à l'économie de la RDC.
          </p>
        </div>
      </div>
    </section>

    <!-- Services grid -->
    <section class="i-wrapper bg-blue bg-opacity-[0.04] py-16">
      <div class="i-container mx-auto">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Service 1 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Accompagnement technique</h3>
            <p class="text-gray-600 leading-relaxed">
              Nous fournissons les outils, méthodes et expertises nécessaires pour créer,
              structurer et gérer une entreprise efficacement. Nos experts vous
              accompagnent à chaque étape de votre parcours entrepreneurial.
            </p>
          </div>

          <!-- Service 2 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Accompagnement financier</h3>
            <p class="text-gray-600 leading-relaxed">
              Nous facilitons l'accès aux Institutions de Microfinance (IMF) et aux
              partenaires financiers pour donner à vos projets les ressources nécessaires
              à leur développement.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Formations & ateliers</h3>
            <p class="text-gray-600 leading-relaxed">
              Des ateliers pratiques sur la planification d'entreprise, la gestion
              financière, le marketing et le leadership pour renforcer durablement vos
              compétences entrepreneuriales.
            </p>
          </div>

          <!-- Service 4 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Réseautage & mise en relation</h3>
            <p class="text-gray-600 leading-relaxed">
              Notre réseau de plus de 1 000 jeunes entrepreneurs et notre Forum annuel
              offrent des opportunités uniques de connexions, de collaborations et de
              partenariats à travers toute la RDC.
            </p>
          </div>

          <!-- Service 5 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Entrepreneuriat féminin</h3>
            <p class="text-gray-600 leading-relaxed">
              Nous promouvons activement la participation des femmes dans l'économie en
              offrant un accompagnement adapté aux entrepreneures congolaises et en
              soutenant leurs initiatives.
            </p>
          </div>

          <!-- Service 6 -->
          <div class="rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue bg-opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-blue">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-blue">Promotion de la paix</h3>
            <p class="text-gray-600 leading-relaxed">
              Nous engageons les jeunes dans le processus de paix en RDC, convaincus que
              la stabilité économique et la paix sociale sont indissociables pour un
              développement durable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="i-wrapper bg-blue py-16">
      <div class="i-container mx-auto text-center">
        <h2 class="text-2xl font-bold text-white sm:text-3xl">
          Prêt à démarrer votre aventure entrepreneuriale ?
        </h2>
        <p class="mt-4 text-gray-200 max-w-xl mx-auto">
          Contactez-nous dès aujourd'hui et découvrez comment Impact Group peut vous
          accompagner vers le succès.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/nous-contacter" class="i-btn i-btn__white">
            <span class="text-blue font-semibold">Nous contacter</span>
          </NuxtLink>
          <NuxtLink to="/evenements" class="i-btn border border-white">
            <span class="text-white font-semibold">Voir nos évènements</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Nos services - Impact Group",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les services d'Impact Group : accompagnement technique, financier, formations, réseautage et promotion de l'entrepreneuriat féminin en RDC.",
    },
    { property: "og:title", content: "Nos services - Impact Group" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "fr_FR" },
    {
      property: "og:description",
      content:
        "Découvrez les services d'Impact Group : accompagnement technique, financier, formations, réseautage et promotion de l'entrepreneuriat féminin en RDC.",
    },
  ],
});
</script>
