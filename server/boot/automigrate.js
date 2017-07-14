"use strict";

module.exports = function(app) {
    app.dataSources.mysql.automigrate('Product', err => {
        if (err) throw err;
        console.log('Models Synced!');
    })
}