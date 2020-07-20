var moment = require('moment-timezone');
var config = require('config')

/**
 * obtain the time zone
 * @return time zone
 ***/
var currentDate = function (format) {
    var timezone = config.get('app.timezone');
    if(format)
      return moment.tz(new Date().toISOString(), timezone).format(format)
  else
      return moment.tz(new Date().toISOString(), timezone).format()
}

var format_date = function (date, format) {
    var timezone = config.get('app.timezone');
    if(format)
      return moment.tz(date.toISOString(), timezone).format(format)
  else
    return moment.tz(date.toISOString(), timezone).format()
}

var format_date_string = function (date, format) {
    var timezone = config.get('app.timezone');
    if(format)
      return moment.tz(new Date(date).toISOString(), timezone).format(format)
  else
    return moment.tz(new Date(date).toISOString(), timezone).format()
}

var isDateInRage = function (date, range) {
    var current_date = new Date(currentDate().substring(0,19));
    var date = new Date(date.replace(" ","T"));
    if ((Math.abs(current_date - date) / 36e5) < range )
        return true;
    return false;
}


/**
 * validate if is date range format valid
 * @param startDate start date of the range to evaluated
 * @param endDate end date of the range to evaluated
 * @return true or false, depending of the validation
 * **/
var isDateRangeFormatValid = function(startDate, endDate) {
    if (!startDate || !endDate || startDate == NaN || startDate == 'Invalid Date' || endDate == NaN || endDate == 'Invalid Date')
        return false;
    return true;
}


var get_start_date = (date) => {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);

  return format_date(date, 'YYYY-MM-DD HH:mm:ss');
};;

var get_end_date = (date) => {
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);

  return format_date(date, 'YYYY-MM-DD HH:mm:ss');;
};


module.exports.currentDate = currentDate;
module.exports.isDateRangeFormatValid = isDateRangeFormatValid;
module.exports.isDateInRage = isDateInRage;
module.exports.format_date = format_date;
module.exports.format_date_string = format_date_string;
module.exports.get_start_date = get_start_date;
module.exports.get_end_date = get_end_date;
