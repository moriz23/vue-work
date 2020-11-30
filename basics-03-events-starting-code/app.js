const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Form Submitted');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter += num;
      return this.counter;
    },
    reduce(num) {
      this.counter -= num;
      return this.counter;
    },
  },
});

app.mount('#events');
