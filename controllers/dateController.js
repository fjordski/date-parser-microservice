const express = require('express');
const app = express();
const moment = require('moment');

exports.returnDate = function(req, res) {
  const date = req.params.date;
  const naturalDateValid = moment(date);
  const unixDateValid = moment.unix(date);
  let dateObj = {};
  
  dateObj.natural = naturalDateValid.isValid() ? naturalDateValid.format('MMMM Do YYYY') : false;
  dateObj.unix = unixDateValid.format("MMMM Do YYYY");
  res.render('index', { dateObj: JSON.stringify(dateObj) })
}