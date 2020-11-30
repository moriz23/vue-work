const app = Vue.createApp({
  data() {
    return {
      keyDownValue: '',
      enterValue: '',
    };
  },
  methods: {
    showAlert() {
      alert('This is an Alert!!!!');
    },
    keyDownOutput(event) {
      this.keyDownValue = event.target.value;
    },
    enterOutput() {
      this.enterValue = this.keyDownValue;
    },
  },
});

app.mount('#assignment');
