let today = new Date();

exports.getDate = function() {

  const options ={
    weekday:"long",
    month:"long",
    day:"numeric"
  };

  return today.toLocaleDateString("en-US",options);
}

exports.getDay = function (){

  const options ={
    weekday:"long",
  };
  return today.toLocaleDateString("en-US",options);

}
