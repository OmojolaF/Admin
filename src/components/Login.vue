<template>
  <div>
    <div class="min-h-screen bg-purple-light py-6">
      <div class="sm:mx-auto bg-white px-9 py-4 my-10 mx-5 rounded-md sm:px-14 sm:py-8 max-w-xl">
        <div class="max-w-md mx-auto">
          <div class="text-2xl font-normal py-2 my-2 text-gray-900 text-center">
            <h1>Welcome Back!</h1>
          </div>
          <div class="placeholder-gray-800::placeholder">
            <form>
              <div class="py-2">
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address..."
                  class="w-full h-12 text-sm font-normal p-4 border border-purple-bord rounded-full focus:outline-none focus:ring-2"
                >
              </div>
              <div class="py-2">
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="w-full h-12 text-sm font-normal p-4 border border-purple-bord rounded-full focus:outline-none focus:ring-2"
                >
              </div>
              <div class="py-2">
                <input
                  v-model="checked"
                  type="checkbox"
                  name="remember"
                  id="customCheck"
                  class="focus:outline-none focus:ring-2 leading-6"
                >
                <label
                  for="customCheck"
                  class="align-top mx-2 font-normal leading-6 text-sm text-purple"
                >Remember Me</label>
              </div>
            </form>
            <router-link to="/dashboard">
              <button
                class="w-full my-2 py-3 px-5 font-normal text-sm text-white bg-purple-dark rounded-full hover:bg-purple-bright focus:outline-none focus:ring"
              >Login</button>
            </router-link>
            <hr class="mt-2 mb-2 border-gray-200">
            <h5 class="text-center text-xs text-purple-dark py-3">
              <a class="hover:text-purple-shine hover:underline">Forgot Password?</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      checked: false
    };
  },
  methods: {
    onSubmit() {
      console.log("processing form");
      alert("processing form");
      this.$router.push("/dashboard");
    }
  }
};
</script>
