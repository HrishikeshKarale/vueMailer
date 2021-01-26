// https://codesource.io/sending-emails-with-vuejs-and-nodemailer/ //
https://github.com/Wisdom132/Vuenodemailer
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-4 mt-5">
          <div class="card p-2">
            <form @submit.prevent="registerUser">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  id="name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  id="email"
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  id="phone"
                />
              </div>
              <button class="btn btn-primary" type="submit">
                <span
                  v-if="loader"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      user: {
        name: "",
        email: "",
        phone: ""
      },
      loader: false
    };
  },
  methods: {
    async registerUser() {
      this.loader = true;
      try {
        debugger;
        let response = await this.axios.post(
          "http://localhost:4000/user",
          this.user
        );
        console.log(response);
        alert("Registration Was successful");
        this.loader = false;
      } catch (err) {
        alert("Something Went Wrong");
        this.loader = false;
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
