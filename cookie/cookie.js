function check_Authentication(){
  var session_id =  $.cookie("session_id")
  console.log(session_id)
  if(session_id != undefined){
    console.log("pass")
  }
  else{
    window.open('./login.html', '_parent');
  }
}
