/* "use strict";

module.exports = function(app) {
    app.dataSources.mysql.automigrate('Product', err => {
        if (err) throw err;
        console.log('Models Synced!');
    })
} */

"use strict";
// Auto update append the products when server restarted.
module.exports = function(app) {
    //app.dataSources.mysql.autoupdate('Product', err => {
    app.dataSources.mongodb.autoupdate(['Product', 'Company', 'Category', 'Account'], err => {
        if (err) throw err;
        console.log('Models Synced!');
    })
}