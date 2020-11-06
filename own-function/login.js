function detect(){
  console.log("sssss")
  check_url = "http://127.0.0.1:8000/check"
  send_file = {}
  var session_id = $.cookie("session_id")
  if ( session_id == undefined){
    location.href = './login.html'
  }
  else{
    send_file["session_id"] = session_id
    console.log(send_file)
    $.ajax({
      "url":check_url,
      "type":"POST",
      data: JSON.stringify(send_file),
      contentType:'application/json'
  }).done(function(data){
    console.log(data)
    $('#answer').text(data['user_id'])
  }).fail(function(xhr, textStatus, errorThrown) {
        console.log("NG:" + textStatus.status);
        location.href = '/login.html'
    }
  )
  }
}
