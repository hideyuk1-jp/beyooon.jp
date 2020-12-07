module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './public',
      isSinglePageApplication: true,
      url: [
        'http://localhost/',
        'http://localhost/blog/hello-world/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
