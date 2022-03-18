

export function returnOnlyNamesJSON (recievedJSON : JSON){
  let ParsedJSON = JSON.parse(JSON.stringify(recievedJSON));
  let CountryNames = [];


  for(let i=0; i < ParsedJSON.length;i++){
    CountryNames.push(ParsedJSON[i].name);
  }

  return CountryNames;
}


export function returnAllCityFields (recievedJSON : JSON){
  let ParsedJSON = JSON.parse(JSON.stringify(recievedJSON));
  return ParsedJSON.current;
}

export function returnCurrentCityName (recievedJSON :JSON) {
  let ParsedJSON = JSON.parse(JSON.stringify(recievedJSON));
  return ParsedJSON.location;
}