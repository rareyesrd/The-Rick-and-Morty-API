var app = new Vue({
    el: "#app",
    data: {
      info: null,
      episodes: null,
      search: null
    },
    methods: {
      getInfo() {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(response => (this.info = response.data.results))
          .catch(e => console.log(e))
      },
      getEpisode() {
        axios
          .get('https://rickandmortyapi.com/api/episode/')
          .then(response => (this.episodes = response.data.results))
          .catch(e => console.log(e))
      }
    },
  mounted() {
    this.getInfo();
    this.getEpisode();
  }
});