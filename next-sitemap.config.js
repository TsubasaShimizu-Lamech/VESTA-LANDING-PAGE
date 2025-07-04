/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vesta.lamech.jp',
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