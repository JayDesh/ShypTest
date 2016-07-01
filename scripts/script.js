/* Function to print the calendar on browser
* @input: weeks - number of partial or complete weeks to determine number of rows to print.
* @input: startDay - Index of the cell number to start printing the dates at.
*/
function createCalendar(weeks, startDay, lastDayOfMonth){
  const DAYS = 7;
  var dayCounter = 1,
      dayNumber = 0,
      displayDate = '',
      row,
      cell,
      table = document.getElementById('calendarTable');

// For each week create a row.
  for ( var i=0;i<weeks;i++ ){
    row = table.insertRow(i);
// For each day create a cell inside the row.
    for( var j=0;j<DAYS;j++ ){
      cell = row.insertCell(j);
      dayCounter++;
      if( dayCounter > startDay && dayCounter <= lastDayOfMonth + startDay  ){
        dayNumber = ++dayNumber;
        //Add leading 0 for single digits.
        displayDate = dayNumber < 10 ? '0' + dayNumber : dayNumber.toString();
        cell.innerHTML = "<div>"+ displayDate + "</div>";
      }else{
        // If cells are empty style them with emptyCells class.
        cell.className = 'emptyCells';
      }
    }
  }
}

/*
* Function to calculate Number of weeks for a particular month.
* This is used to determine the number of rows to be added in the month calendar ( table ).
* @input: Year
* @input: Month of the Year.
* @output: Number of weeks ( rows ) to be added in the calendar.
* Need to add error handling in case of incorrect input.
*/
function calculateNumberofWeeks(year, month){
  return Math.ceil ( ( calculateStartDay( year, month ) +  calculateMonthEndDay( year, month ) ) / 7 ) ;
}

/*
* Function to dynamically calculate the start day of the month.
* This is used to determine the column in which we should put the first day of the month.
* @input: Year
* @input: Month of the Year.
* @output: Number between 0-6. Day number, which corresponds to the day of week.
* This function needs to be coded if we need to create a calendar for any month & year combination.
*/
function calculateStartDay( year, month ){
  return 6;
}

/*
* Function to calculate the last day of the month.
* @input: Year
* @input: Month of the Year.
* @output: Number
* This function needs to be coded if we need to create a calendar for any month & year combination.
*/
function calculateMonthEndDay(year, month){
  return 31;
}

window.onload = function() {
  createCalendar(calculateNumberofWeeks(), calculateStartDay(), calculateMonthEndDay());
};
