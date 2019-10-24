// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const collections = require("./src/admin/collections.json")

plugins = []


function setup_collection_plugin(collection, index) 
{ 
  if (!collection.hasOwnProperty('refs')){
    refs = {}
  } else {
    refs = collection.refs;
  }

  plugins.push({
    use: '@gridsome/source-filesystem',
    options: {
      typeName: collection.label_singular.replace(/\s+/g, ''), //strip whitespace
      baseDir: `./static/data/${collection.name}/`,
      path: '*.json',
      pathPrefix: `/${collection.name}`,
      refs: refs
    }
  });

};

collections.forEach(setup_collection_plugin);

plugins.push(
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'static/post/**/*.md',
      typeName: 'post',
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


module.exports = {
  siteName: 'Nahdapedia',
  siteDescription: 'The open database cataloguing Egyptian artists and recordings of the Nahda era.',
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
    Agent: [
      {
        path: '/agent/:id',
        component: './src/templates/Agent.vue'
      },
      {
        name: 'appears_in',
        path: '/agent/:id/appears_in',
        component: './src/templates/AgentAppearsIn.vue'
      }
    ],
    Work: [
      {
        path: '/work/:id',
        component: './src/templates/Work.vue'
      },
      {
        name: 'appears_in',
        path: '/work/:id/appears_in',
        component: './src/templates/WorkAppearsIn.vue'
      }
    ]
  }

}
