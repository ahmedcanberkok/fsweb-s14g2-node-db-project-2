exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.createTable("cars", t=> {
    t.increments("cars_id");
    t.string("vin").notNullable().unique()
    t.string("make").notNullable()
    t.string("model").notNullable()
    t.integer("mileage").notNullable()
    t.string("title")
    t.string("transmission")
  })
};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.dropTableIfExists("cars");
};
