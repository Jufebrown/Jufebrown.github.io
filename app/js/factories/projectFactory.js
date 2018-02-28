module.exports = $http => ({
  getProjects() {
    $http
      .get('../../assets/data/projects.json')
      .then(({ data: { projects } }) => projects);
  },
});
