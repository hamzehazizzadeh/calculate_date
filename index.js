exports.calculateDate = (date) => {
  var dob = new Date(date);

  //check user provide input or not
  if (!date) {
    return "The date is not valid";
  }

  //execute if user entered a date
  //extract and collect only date from date-time string
  var mdate = date.toString();
  var dobYear = parseInt(mdate.substring(0, 4), 10);
  var dobMonth = parseInt(mdate.substring(5, 7), 10);
  var dobDate = parseInt(mdate.substring(8, 10), 10);

  //get the current date from system
  var today = new Date();
  //date string after broking
  var birthday = new Date(dobYear, dobMonth - 1, dobDate);

  //calculate the difference of dates
  var diffInMillisecond = today.valueOf() - birthday.valueOf();

  //convert the difference in milliseconds and store in day and year variable
  var year_age = Math.floor(diffInMillisecond / 31536000000);
  var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

  var month_age = Math.floor(day_age / 30);
  day_age = day_age % 30;

  //DOB is greater than today?s date, generate an error: Invalid date
  if (dob > today) {
    return "Date cannot be larger than date now";
  } else {
    return {
      year: year_age,
      month: month_age,
      day: day_age,
    };
  }
};
