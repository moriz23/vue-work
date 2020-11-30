// const button = document.querySelector('button');
// let input = document.getElementById('goal');
// const ul = document.querySelector('ul');

// const addGoal = (e) => {
//   const ul = document.querySelector('ul');
//   const li = document.createElement('li');
//   let value = input.value;
//   li.textContent = value;
//   ul.appendChild(li);
//   value = '';
// };

// button.addEventListener('click', addGoal);

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');
