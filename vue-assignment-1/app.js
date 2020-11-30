const app = Vue.createApp({
  data() {
    return {
      name: 'Mohammed Rizvi',
      age: 30,
      img: 'https://miro.medium.com/max/4800/1*WSN4Dx07bs92MlVV3tTaSw.png',
    };
  },
  methods: {
    randNum() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
