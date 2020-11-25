function detect(){
  send_file = {}
  var session_id = $.cookie("session_id")
  console.log(session_id)
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
    if (data['error'] == "no_session_id"){
      location.href = '/login.html'
    }
    $('#answer').text(data['user_id'])
    ret = data['user_id']
    guest(ret)
    return ret
    test()
  }).fail(function(xhr, textStatus, errorThrown) {
        console.log("NG:" + textStatus.status);
        location.href = '/login.html'
        ret = 0
        return ret
    }
  )
  }
}


function guest(ret){
  $("#web_title").text(ret)
}
