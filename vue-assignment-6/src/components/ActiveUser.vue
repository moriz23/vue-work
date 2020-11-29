<template>
  <li>
    <h2>Name {{ name }}</h2>
    <h2>Age: {{ age }} Years</h2>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
