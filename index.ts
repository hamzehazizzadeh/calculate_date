export interface ICalculateDateResult {
  year: number;
  month: number;
  day: number;
}

export const calculateDate = (date: Date | any): ICalculateDateResult => {
  let dob: Date = new Date(date);

  //execute if user entered a date
  //extract and collect only date from date-time string
  let mdate: string = date.toString();
  let dobYear: number = parseInt(mdate.substring(0, 4), 10);
  let dobMonth: number = parseInt(mdate.substring(5, 7), 10);
  let dobDate: number = parseInt(mdate.substring(8, 10), 10);

  //get the current date from system
  let today: Date = new Date();
  //date string after broking
  let birthday: Date = new Date(dobYear, dobMonth - 1, dobDate);

  //calculate the difference of dates
  let diffInMillisecond: number = today.valueOf() - birthday.valueOf();

  //convert the difference in milliseconds and store in day and year letiable
  let year_age: number = Math.floor(diffInMillisecond / 31536000000);
  let day_age: number = Math.floor(
    (diffInMillisecond % 31536000000) / 86400000
  );

  let month_age: number = Math.floor(day_age / 30);
  day_age = day_age % 30;

  return {
    year: year_age,
    month: month_age,
    day: day_age,
  };
};
