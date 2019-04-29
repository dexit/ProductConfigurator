<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo_plint-sites.jpg">
    <div id="login-cntr">
      <p>My logged in state: {{loggedin}}</p>
      <p>Ik ben ingelogd? {{ ingelogd }}</p>
      <p>Using the global way of mapState {{ account.auth }} en {{ account.showLoginForm }}</p>
      <button @click="showLogin">Show Login</button>
    </div>
    
    <div id="configurator">
      <p>Currently we have {{ products.length }} product{{products.length > 1 ? 's' : ''}}</p>
      <ul>
        <li v-for="product in products" :key="product.id">{{ product.id}}</li>
      </ul>
      <p>Current price: &euro; {{ price }}</p>
      <button @click="addProduct">Add product</button><button @click="removeProduct(0)">Remove product</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  components: {},
  computed: {
    ...mapState('account', {
      loggedin: state => state.auth,
      ingelogd: 'auth',
    }),
    ...mapState(['account']), // makes this.account available as a whole. This works since it is a toplevel
    ...mapState('configurator', {
      products: 'products',
      price: 'price'
    })
  },
  methods: {
    ...mapActions('account', [
      'showLogin',
    ]),
    ...mapActions('configurator', [
      'addProduct',
      'removeProduct',
      'updatePrice'
    ]),
  },
  mounted() {
    // updatePrice to have a correct baseprice when we start
    this.updatePrice()
  },
}
</script>

<style lang="less">
body {
  margin: 0;
  background: #fdfdfd;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

p {
  margin: 0 0 10px 0;
}

button {
  width: 150px;
  padding: 6px 18px;
  border-radius: 3px;
  background: #1da025;
  color: white;
  font-size: 14px;
}

#login-cntr {
  background: #e2e1f9;
  padding: 20px 0;
}

#configurator {
  padding: 20px 0;

  ul {
    list-style: none;
  }
}
</style>
