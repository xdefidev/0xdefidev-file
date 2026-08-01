module.exports = {
  siteUrl: 'https://xdefidev.xyz',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/components/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    const priority =
      path === '/' || path === '/en'
        ? 1.0
        : path.includes('/blog/')
        ? 0.6
        : path.startsWith('/services')
        ? 0.8
        : 0.7;

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
};
