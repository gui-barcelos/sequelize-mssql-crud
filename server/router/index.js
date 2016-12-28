'use strict';

const routes = [
    require('./routes/product')
];

module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};