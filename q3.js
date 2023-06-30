function leapYearRange(startYear, endYear) {
    const yearRange = [];
    for (let i = startYear; i <= endYear; i++) {
      yearRange.push(i);
    }
    const leapYears = [];
    yearRange.forEach(year => {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        leapYears.push(year);
      }
    });
    return leapYears;
  }
  
  const leapYears = leapYearRange(1996, 2023);
  console.log(leapYears);