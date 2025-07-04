/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vesta-mr.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
} 