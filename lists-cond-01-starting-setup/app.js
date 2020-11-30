const app = Vue.createApp({
  data() {
    return {
      goals: [],
      inputValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputValue);
      console.log(this.goals);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
