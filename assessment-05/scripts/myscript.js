function getHolidays(){

let months = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12];

for (var m of months){
    switch(m){
        case 1:
            document.getElementById("jan-hol").innerHTML = "MLK Day <br> New Years Day";
            break;
        case 2:
            document.getElementById("feb-hol").innerHTML = "Valentine's Day <br> Groundhog's Day <br> President's Day";
            break;
        case 3:
            document.getElementById("mar-hol").innerHTML = "Mardi Gras <br> St. Patrick's Day <br> Earth Day";
            break;
        case 4:
            document.getElementById("apr-hol").innerHTML = "April's Fools Day <br> Patriot's Day <br> Easter Sunday";
            break;
        case 5:
            document.getElementById("may-hol").innerHTML = "National Teacher's Day <br> Mother's Day <br> Cinco de Mayo <br> Memorial Day";
            break;
        case 6:
            document.getElementById("jun-hol").innerHTML = "Father's Day <br> Juneteenth Day <br> Flag Day";
            break;
        case 7:
            document.getElementById("jul-hol").innerHTML = "Independence Day <br> National Hot Dog Day";
            break;
        case 8:
            document.getElementById("aug-hol").innerHTML = "National Watermelon Day <br> National S'mores Day";
            break;
        case 9:
            document.getElementById("sep-hol").innerHTML = "Labor Day <br> 9/11 Remembrance Day <br> Native American Day <br> Grandparent's Day";
            break;
        case 10:
            document.getElementById("oct-hol").innerHTML = "Columbus Day <br> Halloween <br> Indigenous People Day";
            break;
        case 11:
            document.getElementById("nov-hol").innerHTML = "Dia de los Muertos <br> Veteran's Day <br> Thanksgiving Day <br> Black Friday";
            break;
        case 12:
            document.getElementById("dec-hol").innerHTML = "Christmas <br> Boxing Day <br> New Year's Eve <br> Kwanzaa";
            break;
    }
}






}