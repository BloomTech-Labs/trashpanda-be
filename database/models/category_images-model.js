const db = require("../dbConfig");

function getImageURL(familyId) {
    return db("category_images")
        .select("image_url")
        .where({ category_id: familyId })
        .first();
}

module.exports = {
    getImageURL
}