<script setup lang="ts">
type Job = {
  id: number
  title: string
  description: string
  cover: string
  createdAt: string
}

definePageMeta({
  layout: "custom"
})

const { data: jobs } = await useFetch<Job[]>(
  "https://62fe320941165d66bfbabe7e.mockapi.io/apt/v1/jobs"
)
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test"
  },
  script: [{ children: "console.log('Hello world')" }]
})
// const text = useToUpper("it works!")
</script>
<template>
  <!-- <h1>求人一覧{{ text }}{{ name }}</h1> -->
  <p>aaaaaaaaaaaaaaa</p>

  <!-- <img src="@/images/logo01.svg" /> -->
  <JobsItem v-for="job in jobs" :key="job.id" :job="job" />
</template>

<style scoped lang="scss">
img {
  width: 100px;
  height: auto;
}
</style>