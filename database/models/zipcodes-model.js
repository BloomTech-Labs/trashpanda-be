const db = require(`../dbConfig`);

function findByZipcode(zipcode){
    return db('zipcodes')
            .where({zipcode})
            .first()
}

async function add(processedZip){
     await db('zipcodes').insert(processedZip);

    return findByZipcode(processedZip.zipcode)
}

module.exports = Zipcodes = {
    findByZipcode,
    add
  };