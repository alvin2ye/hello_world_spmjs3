var moment = require('moment');
var $ = require("jquery");
var now = moment().format('MMMM Do YYYY, h:mm:ss a');
$("body").append(now);
module.exports = now;

