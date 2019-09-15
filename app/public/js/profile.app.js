var profileApp = new Vue({
  el: '#randomProfileApp',
  data: {
    profile: [
      {
      "name": "rolf hegdal",
      "country": "india",
      "dob": "1975-11-12T06:34:44Z",
      "age": "42",
      "email": "rolf.hegdal@example.com",
      }
    ]
  },
  methods: {
    fetchProfile()
    {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {profileApp.profile = json});
    }
  },
  created() {
    this.fetchProfile()
  }
});
