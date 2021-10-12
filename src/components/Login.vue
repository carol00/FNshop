<template>
  <div class="login">
    <h2>Please sign in</h2>
    <form>
      <input type="email" placeholder="Email address" v-model="user.username" required autofocus>
      <input type="password" placeholder="Password" v-model="user.password" required autocomplete="off">
      <button type="submit" class="btn" @click="login">Sign in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      const user = this.user;
      axios.post(`${process.env.VUE_APP_APIPATCH}/admin/signin`, user).then((res) => {
        if(res.data.success) {
          const token = res.data.token;
          const expired = res.data.expired;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/');
        }
      })
    }
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common['Authorization'] = `${token}`;
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  display: grid;
  align-content: center;
}

form {
  display: grid;
  margin: 15px auto;
  width: 40%;
}

input {
  margin-bottom: -1px;
}

form > input:first-child {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

form > input:last-of-type {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

button {
  margin-top: 15px;
}

button:hover {
  background: #4f7fab;
}
</style>