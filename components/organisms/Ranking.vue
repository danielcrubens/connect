<template>
  <section class="w-full max-w-[440px] space-y-5">
    <h2 class="text-gray-200 text-xl font-heading font-semibold leading-none">
      Ranking de indicações
    </h2>
    <div class="space-y-4">
      <div class="card-ranking">
        <span>
          <span>1&ordm;</span> | Daniel Rubens
        </span>
        <span class="font-heading">
          1030
        </span>
        <img src="@/assets/images/medal-gold.svg" alt="Medalha de ouro" class="absolute top-0 right-8" />
      </div>

      <div class="card-ranking">
        <span>
          <span >2&ordm;</span> | Daniel Rubens
        </span>
        <span class="font-heading ">
          1030
        </span>
        <img src="@/assets/images/medal-silver.svg" alt="Medalha de prata" class="absolute top-0 right-8" />
      </div>

      <div class="card-ranking">
        <span>
          <span >3&ordm;</span> | Daniel Rubens
        </span>
        <span class="font-heading">
          1090
        </span>
        <img src="@/assets/images/medal-cooper.svg" alt="Medalha de bronze" class="absolute top-0 right-8" />
      </div>
    </div>
  </section>
</template>
 <style escoped>
  @reference "tailwindcss";

  .card-ranking {
  @apply relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3;
}
.card-ranking span:first-child {
  @apply text-sm text-gray-300 leading-none
}
.card-ranking span:nth-child(2) {
  @apply font-semibold text-2xl
}
.card-ranking span:nth-child(3) {
  @apply   text-gray-200 leading-none;
}
</style>