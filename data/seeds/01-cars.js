// ESNEK
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
    const defaultCars = [
        {
            vin: "123",
            make: "Toyata",
            model: "Corolla",
            mileage: 1234
        },
        {
            vin: "1234",
            make: "Audi",
            model: "A6",
            mileage: 1234
        },
        {
            vin: "12345",
            make: "volkswagen",
            model: "Polo",
            mileage: 1234
        },
        {
            vin: "123456",
            make: "Seat",
            model: "LeonFR",
            mileage: 1234
        },
        {
            vin: "1234567",
            make: "Renault",
            model: "Clio",
            mileage: 1234
        },
    ];

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate()
    await knex('cars').insert(defaultCars);
  };
  