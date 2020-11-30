const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputValue: '',
      toggle: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.toggle ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
    },
    hideList() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount('#assignment');
