<template>

  <div class="user-creation-modal">
    <modal btntext="+ User">
      <div class="title" slot="header">User creation</div>
      <div slot="body">
        <br>Username: <input type="text" v-model="username" placeholder="Please type in your username."><br>
        <br>Password: <input type="text" v-model="password" placeholder="Please type in your password."><br>
        <br>First name: <input type="text" v-model="firstName" placeholder="Please type in your first name."><br>
        <br>Last name: <input type="text" v-model="lastName" placeholder="Please type in your last name."><br>
        <!-- radio buttons for selecting role -->
        <br>Learner <input type="radio" value="learner" v-model="role"><br>
        <br>Admin <input type="radio" value="admin" v-model="role"><br>
      </div>
      <div slot="footer">
        <button class="create-btn" type="button" @click="createNewUser">Create User</button>
      </div>
    </modal>
  </div>

</template>


<script>

  const actions = require('../../actions');

  module.exports = {
    components: {
      modal: require('../modal'),
    },
    data() {
      return {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: 'learner',
      };
    },
    methods: {
      createNewUser() {
        const payload = {
          password: this.password,
          username: this.username,
          first_name: this.firstName,
          last_name: this.lastName,
          facility: this.facility,
        };
        this.createUser(payload, this.role);
      },
    },
    vuex: {
      getters: {
        facility: state => state.facility,
      },
      actions: {
        createUser: actions.createUser,
      },
    },
  };

</script>


<style lang="stylus" scoped>

  .title
    display: inline

  .create-btn
    float: right

</style>