
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Community',function(table){
    table.increments().primary();
    table.string('Name');
    table.string('Compony or Organisation')
    table.sting('Address');
    table.sting('Service');
    table.integer('Landline');
    table.integer('Cell')

  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('Community',function(table){
    table.dropColumn('name');
  })
};
