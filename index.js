"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDate = void 0;
const calculateDate = (date) => {
    let dob = new Date(date);
    //execute if user entered a date
    //extract and collect only date from date-time string
    let mdate = date.toString();
    let dobYear = parseInt(mdate.substring(0, 4), 10);
    let dobMonth = parseInt(mdate.substring(5, 7), 10);
    let dobDate = parseInt(mdate.substring(8, 10), 10);
    //get the current date from system
    let today = new Date();
    //date string after broking
    let birthday = new Date(dobYear, dobMonth - 1, dobDate);
    //calculate the difference of dates
    let diffInMillisecond = today.valueOf() - birthday.valueOf();
    //convert the difference in milliseconds and store in day and year letiable
    let year_age = Math.floor(diffInMillisecond / 31536000000);
    let day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);
    let month_age = Math.floor(day_age / 30);
    day_age = day_age % 30;
    return {
        year: year_age,
        month: month_age,
        day: day_age,
    };
};
exports.calculateDate = calculateDate;
