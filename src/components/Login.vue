<template>
  <div class="login">
    <h2>Please sign in</h2>
    <form>
      <input type="email" placeholder="Email address" required autofocus>
      <input type="password" placeholder="Password" required>
      <button type="submit" class="btn">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
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