

export function convertDate(date: string | Date) {
    let dateObject = new Date(date);
  
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();
  
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = monthNames[month];
  
    let dayWithSuffix = day + getOrdinalSuffix(day);
  
    return `${monthName} ${dayWithSuffix}, ${year}`;
  }
  
  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  

  export function convertDateWithSlashes(date: Date) {
    let isPM = date.getHours() > 11;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}; ${hours}:${minutes} ${
      isPM ? "PM" : "AM"
    }`;
  }