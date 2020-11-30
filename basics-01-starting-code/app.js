const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Get a job after learning vue!',
      courseGoalB: '<h2>Go back to school if no job. iA will get a job</h2>',
      vueLink: 'https://v3.vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
