<template>
  <section>
    <header>
      <h1>Users</h1>
    </header>
    <user-data @add-user="addUser"></user-data>
    <ul>
      <active-user
        v-for="user in users"
        :key="user"
        :name="user.name"
        :age="user.age"
      ></active-user>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: 'Mohammed Rizvi',
          age: 36,
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        name: name,
        age: +age,
      };
      this.users.push(newUser);
    },
  },
};
</script>

<style>
section {
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  max-width: 40rem;
}

header {
  background-color: #151781;
  color: #fff;
  border-radius: 0.5rem 0.5rem 0 0;
}
h1 {
  margin: 0;
  text-align: center;
  padding: 2rem;
  font-size: 3rem;
}
</style>
