<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
  <button @click="saveChanges">Save Changes</button>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved chnages');
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeRouterEnter(to, from, next) {
    console.log('UserList cmp beforeRouterEnter');
    console.log(to, from);
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
