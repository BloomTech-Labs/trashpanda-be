const db = require(`../dbConfig`);

function findByPostalCode(postal_code){
    return db('postal_codes')
            .where({postal_code})
            .first()
}

async function add(processedPostal){
     await db('postal_codes').insert(processedPostal);

    return findByPostalCode(processedPostal.postal_code)
}

module.exports = PostalCodes = {
    findByPostalCode,
    add
  };