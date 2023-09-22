const baseUrl = 'http://localhost:3000/';

module.exports = {
  ci: {
    collect: {
      url: [
        baseUrl,
        `${baseUrl}blogs`,
        `${baseUrl}services`,
        `${baseUrl}terms_conditions`,
        `${baseUrl}about_us`,
      ],
      startServerCommand: 'yarn start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
