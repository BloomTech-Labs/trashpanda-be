
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category_images').del()
    .then(async function () {
      // Inserts seed entries

      await knex("category_images").insert([

        { category_id: 1, image_url: "https://i.imgur.com/Zeb0clO.png" }, //Automotive
        { category_id: 2, image_url: "https://i.imgur.com/B7itNtW.png" }, //Batteries
        { category_id: 3, image_url: "https://i.imgur.com/GzORf2L.png" }, //Construction
        { category_id: 4, image_url: "https://i.imgur.com/inom47B.png" }, //Electronics
        { category_id: 96, image_url: "https://i.imgur.com/OGuODCp.png" }, //Garden
        { category_id: 5, image_url: "https://i.imgur.com/XGTZZiZ.png" }, //Glass
        { category_id: 95, image_url: "https://i.imgur.com/AVBtq3Q.png" }, //Hazardous
        { category_id: 101, image_url: "https://i.imgur.com/X1HgwkW.png" }, //Holiday
        { category_id: 98, image_url: "https://i.imgur.com/1LHBp0H.png" }, //Household
        { category_id: 6, image_url: "https://i.imgur.com/crpnTcY.png" }, //Metal
        { category_id: 7, image_url: "https://i.imgur.com/xUuieJr.png" }, //Paint
        { category_id: 8, image_url: "https://i.imgur.com/qWAF23j.png" }, //Paper
        { category_id: 9, image_url: "https://i.imgur.com/YNA58oU.png" },//Plastic


        //------Everything below this is possibly repeated and possibly NOT retrieved when getting our categories. 
        //I put it here just incase.
        { category_id: 82, image_url: "https://i.imgur.com/B7itNtW.png" }, //Batteries???
        { category_id: 86, image_url: "https://i.imgur.com/GzORf2L.png" }, //Construction???
        { category_id: 80, image_url: "https://i.imgur.com/inom47B.png" }, //Electronics?
        { category_id: 79, image_url: "https://i.imgur.com/XGTZZiZ.png" }, //Glass?
        { category_id: 85, image_url: "https://i.imgur.com/AVBtq3Q.png" }, //Hazardous products???
        { category_id: 81, image_url: "https://i.imgur.com/crpnTcY.png" }, //Metals?

      ]);
    });
};
