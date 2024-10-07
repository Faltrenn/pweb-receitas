// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com', // Substitua pelo domínio do seu link externo
          port: '',
          pathname: '/**',
        },
      ],
    },
  };