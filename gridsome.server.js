// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const collections = require("./src/admin/collections.json")

function find_collection_data(collection_name){
  for (index in collections){
    collection = collections[index];
    if (collection.name == collection_name){
      return collection;
    };
  };
};

function find_relationship_fields(collection){
  
  rel_fields = [];

  for (field_index in collection.fields){
    field = collection.fields[field_index]
    if (field.widget == 'relation'){
      rel_fields.push(field);

    } else if (field.widget == 'list'){
      
      if ( field.hasOwnProperty('field') ){
        subfield = field['field'];
        if (subfield.widget == 'relation'){
          rel_fields.push(subfield);
        }

      } else if ( field.hasOwnProperty('fields') ){

        for (sub_index in field.fields){
          subfield = field.fields[sub_index]
          if (subfield.widget == 'relation'){
            rel_fields.push(subfield);
          }
        }

      };
      

    };
  };

  return rel_fields;

}

function setup_collection_relationships(collection, index, actions) 
{ 

  Coll = actions.store.collections[collection.label_singular];
  Coll_rel_fields = find_relationship_fields(collection)

  for (field_index in Coll_rel_fields){
    field = Coll_rel_fields[field_index]
    related_collection_name = field.collection;
    related_collection = find_collection_data(related_collection_name);
    Coll.addReference(related_collection_name+"1", related_collection.label_singular);
  };

};



module.exports = function (api) {
  api.loadSource(actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });


  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      Work: {
        "agents": {
          type: `[Agent]`,
          resolve(obj, args, context, info) {
            var agents = [];
            for (c_index in obj.contributors){
              const c = obj.contributors[c_index]
              const c_id = c.contributor
              const c_obj = context.store.getCollection('Agent').getNodeById(c_id);
              //agents.push({'id': c_obj.id, 'role': c.contributor_role, 'agent': c_obj})
              agents.push(c_obj)
            };

            return agents;
          }
        },
      }
    })
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });


}
