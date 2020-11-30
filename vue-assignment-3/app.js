const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not There Yet';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return 'Too much!';
      }
    },
  },
  methods: {
    add(num) {
      this.number = this.number + num;
      console.log(this.number);
    },
  },
});

app.mount('#assignment');
