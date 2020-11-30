const app = Vue.createApp({
  data() {
    return {
      toggle: true,
      className: '',
      secondClassName: '',
    };
  },
  methods: {
    toggleElement() {
      this.toggle = !this.toggle;
    },
  },
  computed: {
    classNameValue() {
      return this.className;
    },
    secondClassNameValue() {
      return this.secondClassName;
    },
    toggleClass() {
      return this.toggle ? 'hidden' : 'visible';
    },
    paragraphVisibility() {
      return {
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        visible: this.toggle,
        hidden: !this.toggle,
      };
    },
  },
});

app.mount('#assignment');
