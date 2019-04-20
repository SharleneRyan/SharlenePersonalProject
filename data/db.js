const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
   getFamilyServicesDbInfo,
  
}


function getFamilyServicesDbInfo(FamilyServicesName, db = connection) {
  return db('FamilyServices')
    .where('name', '=', FamilyServicesName)
    .select()
}
