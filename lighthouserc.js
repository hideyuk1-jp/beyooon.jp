module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './public',
      isSinglePageApplication: true,
      url: ['http://localhost/', 'http://localhost/blog/hello-world/'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://agile-garden-69796.herokuapp.com/',
      token: 'a72be09d-e54c-41e1-bb1f-d4b165ed0782',
    },
  },
};
