// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nahdapedia',
  siteDescription: 'Nahdapedia',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        remark: {
          plugins: [
            // ...local plugins
          ]
            
                }
        }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js` //our customized CMS in index.js
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Genre',
        baseDir: './src/data/genre/',
        path: '*.json',
        pathPrefix: '/genre'
      }
    }
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
        // ...global plugins
      ]
    }
  },
  templates: {
    Genre: [
        {
          path: '/genre/:id/:name',
          component: 'src/templates/Genre.vue'
        }
      ]
  }

}
