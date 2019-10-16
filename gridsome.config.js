// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const collections = require("./src/admin/collections.json")

plugins = []

plugins.push(
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
  } ,
  {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`,
      modulePath: `src/admin/index.js` //our customized CMS in index.js
    }
  }
)


function setup_collection_plugin(collection, index) 
{ 

  plugins.push({
    use: '@gridsome/source-filesystem',
    options: {
      typeName: collection.label_singular.replace(/\s+/g, ''), //strip whitespace
      baseDir: `./static/data/${collection.name}/`,
      path: '*.json',
      pathPrefix: `/${collection.name}`
    }
  });

};

collections.forEach(setup_collection_plugin);


module.exports = {
  siteName: 'Nahdapedia',
  siteDescription: 'Nahdapedia',
  siteUrl: '',
  plugins: plugins,
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

