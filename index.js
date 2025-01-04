function Calculate()
{
    let year;
    let month;
    let days;

    let currentDay=parseInt(cd.value.slice(8,10), 10);
    let currentMonth=parseInt(cd.value.slice(5,7), 10);
    let currentYear=parseInt(cd.value.slice(0,4), 10);
    console.log("Current date:-",currentYear,currentMonth,currentDay);

    let birthDay=parseInt(dob.value.slice(8,10), 10);
    let birthMonth=parseInt(dob.value.slice(5,7), 10);
    let birthYear=parseInt(dob.value.slice(0,4), 10);
    console.log("DOB:-",birthYear,birthMonth,birthDay);

    if(currentDay>=birthDay)
    {
        days = currentDay - birthDay;
    }    
    else
    {
        days = currentDay + new Date(currentYear,currentMonth).getDate() - birthDay;
        currentMonth --;
    }
    if(currentMonth>=birthMonth)
    {
        month = currentMonth - birthMonth;
    }
    else
    {
        month = currentMonth + 12 - birthMonth;
        currentYear --;
    }
    year = currentYear - birthYear;

    if(year<0)
    {
        agetext.innerHTML = "KYA MAZAK KAR RAHA HA BHAI SUBHA SE MAI HE MILA KYA TAKO";
    }
    else
    {
        agetext.innerHTML = year + " Years, " + month + " Months, " + days + " Days ";
    }
}
