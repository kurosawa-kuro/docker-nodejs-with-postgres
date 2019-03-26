"use strict";

const Sequelize = require("sequelize");

(async () => {
  if (!process.env.POSTGRES_HOST) {
    throw Error(
      "process.env.POSTGRES_HOST must be a: user:pass@ipService:port "
    );
  }
  const sequelize = new Sequelize(
    `postgres://${process.env.POSTGRES_HOST}/heroes`
  );

  await sequelize.authenticate();

  console.log("postgres is running");

  const Hero = sequelize.define("hero", {
    name: Sequelize.STRING,
    power: Sequelize.STRING
  });
  Hero.removeAttribute("id");

  await Hero.sync({ force: true });
  var payload = {
    id: 1,
    name: "kuro",
    power: "pg"
  };

  Hero.create(payload);
  console.log("fin");
  console.log("fin3");
})();
