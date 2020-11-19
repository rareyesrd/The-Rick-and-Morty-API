var app = new Vue({
  el: "#app",
  data: {
      info: null
  },
  mounted () {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => (this.info = response.data.results))
  }
});
