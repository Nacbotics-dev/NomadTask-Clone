import GetApiMethod from "./GetApiMethod";

function GetCountryList() {
    let data = GetApiMethod('list-user-countries/');
    return(data)
}

export default GetCountryList;