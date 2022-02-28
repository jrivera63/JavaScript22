function calculate() {
    var chi = '';
    var zod = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);


    switch (year) {
        case 1921:
        case 1933:
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
            chi = "Rooster"
            break;
        case 1922:
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
            chi = "Dog"
            break;
        case 1923:
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
            chi = "Pig"
            break;
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1925:
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
        case 1926:
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        case 1927:
        case 1939:
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
            chi = "Rabbit"
            break;
        case 1928:
        case 1940:
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
            chi = "Dragon"
            break;
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
            chi = "Snake"
            break;
        case 1930:
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
            chi = "Horse"
            break;
        case 1931:
        case 1943:
        case 1955:
        case 1967:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
            chi = "Goat"
            break;
        case 1932:
        case 1944:
        case 1956:
        case 1968:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
            chi = "Monkey"
            break;
        default:
            chi = "That year is not included in my program.";

    }

    if (month == 1){
        if (date <= 19){
            zod = "Capricorn";
        } else if (20 <= date && date <= 31){
            zod = "Aquarius";
        }
    } else if (month == 2){
        if (date <= 18){
            zod = 'Aquarius';
        } else if (19 <= date && date <= 29){
            zod = 'Pisces';
        }
    } else if (month == 3){
        if (date <= 20){
            zod = 'Pisces';
        } else if (21 <= date && date <= 31){
            zod = 'Aries';
        }
    } else if (month == 4){
        if (date <= 19){
            zod = 'Aries';
        } else if (20 <= date && date <= 30){
            zod = 'Taurus';
        }
    } else if (month == 5){
        if (date <= 20){
            zod = 'Taurus';
        } else if (21 <= date && date <= 31){
            zod = 'Gemini';
        }
    } else if (month == 6){
        if (date <= 20){
            zod = 'Gemini';
        } else if (21 <= date && date <= 30){
            zod = 'Cancer';
        }
    } else if (month == 7){
        if (date <= 22){
            zod = 'Cancer';
        } else if (23 <= date && date <= 31){
            zod = 'Leo';
        }
    } else if (month == 8){
        if (date <= 22){
            zod = 'Leo';
        } else if (23 <= date && date <= 31){
            zod = 'Virgo';
        }
    } else if (month == 9){
        if (date <= 22){
            zod = 'Virgo';
        } else if (23 <= date && date <= 30){
            zod = 'Libra';
        }
    } else if (month == 10){
        if (date <= 22){
            zod = 'Libra';
        } else if (23 <= date && date <= 31){
            zod = 'Scorpio';
        }
    } else if (month == 11){
        if (date <= 21){
            zod = 'Scorpio';
        } else if (22 <= date && date <= 30){
            zod = 'Sagittarius';
        }
    } else if (month == 12){
        if (date <= 21){
            zod = 'Sagittarius';
        } else if (22 <= date && date <= 31){
            zod = 'Capricorn';
        }
    }



    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your zodiac sign is: " + zod;




}