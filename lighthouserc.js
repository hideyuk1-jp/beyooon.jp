module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      startServerCommand: 'npm run start',
      url: ['http://localhost:8000/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
