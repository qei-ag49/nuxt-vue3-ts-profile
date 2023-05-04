// [
//   globals: {
//     "defineProps": "readonly",
//     "defineEmits": "readonly",
//     "defineExpose": "readonly",
//     "withDefaults": "readonly",
//   }
// ]

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "prettier",
    "prettier/vue"
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "prettier/prettier": ["error", { tabWidth: 2 }]
  }
}
