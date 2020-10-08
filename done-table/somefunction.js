var progress_color =[
  "rgba(130, 130, 130, 0.61)",
  "rgba(74, 255, 0, 0.6)",
  "rgba(55, 189, 255, 0.6)",
  "rgba(73, 28, 255, 0.6)",
  "rgba(226, 231, 9, 0.6)",
  "rgba(255, 122, 0, 0.6)",
  "rgba(255, 48, 48, 0.6)"
]

function tid_get(tid,data){
  outputdata=""
  data.forEach((item, i) => {
    // console.log(item['tid'])
    if (item['tid'] == tid){
      // console.log(item)
      outputdata = item
      // console.log(outputdata)
    }
  });
  return outputdata
}


// 返り値として、
// var tidlist = ["1","3","4"]
// var lenlist = [13,24,57]
// var graphrow = [5,10,15]
// var tablename = ["test1","test2","test3"]
// var tablelength = 3
// このようにしたい
function table_list(data){
  tablelength = data.length
  data.forEach((item, i) => {
    tidlist.push(item['tid']);
    lenlist.push(item['len']);
    graphrow_list.push(item['graphrow']);
    tablename_list.push(item['table_name']);
    rowdesplay_list.push(item['row_desplay']);

      if (item['tags'] == "" || item['tags'] == [] ||item['tags'] == undefined){
        empty = []
      tag_list.push(empty)
      }
      else{
      tag_list.push(item['tags'])
      item['tags'].forEach((item, i) => {
        taglist_unique.push(item)
        taglist_unique = Array.from(new Set(taglist_unique))
      });

      }

    var all_donetime = item['alldone_times']
    var table_length = item['len']
    var done = item['done'].length
    text_achivementrate = " "+ all_donetime + "回 " + Math.round((done/table_length)*100) + "%"

    achivementratelist.push(text_achivementrate)
  });
}

function ramdom_from_done(tid,data){
  inputdata = tid_get(tid,data);
  console.log(inputdata)
  donelist = inputdata['done'];
  len = inputdata['len'];
  var min = 1 ;
  var max = len ;
  var i = 0
  var ramdom_index = 0
  var end = 0
  while(i=1){
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    if (donelist.includes(String(a))){
      i = 0
    }
    else{
        ramdom_index = a
        end = 1
        console.log(ramdom_index)
        break;
    }
  }
  console.log("pass")
  console.log(inputdata)
  if (end == 1){
  if (Object.keys(inputdata['row_desplay']).includes("L")){
    console.log(inputdata['row_desplay'])
    return inputdata['row_desplay']['L'][ramdom_index-1]
  }
  else{
    return ramdom_index
  }
}
}



function show_the_achivement(data){
  data.forEach((item, i) => {
    var all_donetime = item['alldone_times']
    var all_detail = item['detail']
    var all_done = item['done']
    // console.log(item)
    var tid = item['tid']
    var over_list = []
    if (item['all_donetime'] != 0){
    var td =`td-${tid}`

      $('#main_tablepart').find('.'+td).animate({
        backgroundColor:progress_color[all_donetime-1],
    },1000)
  }
    item['done'].forEach((item, i) => {
      var segment = `segment-${tid}-${item}`
      console.log(segment,all_donetime)
      $('#main_tablepart').find('#'+segment).animate({
        backgroundColor:progress_color[all_donetime],
    },1000)
    });
    all_detail.forEach((item1, i) => {
      if (item1['times'] > all_donetime + 1){
        appending_overlist =item1['name']
        if (!over_list.includes(appending_overlist)){
         over_list.push(appending_overlist)
       }
      // console.log("over_list",over_list)
    over_list.forEach((over_name, i) => {
      var serach_max = 0
      // console.log(over_name)
      all_detail.forEach((item, i) => {
        if (item['name'] == over_name){
          // console.log(item['times'])
          if (item['times'] > serach_max){
            search_max = item['times']
          }
        }

      });
      var segment = `segment-${tid}-${over_name}`
        $('#main_tablepart').find('#'+segment).animate({
          backgroundColor:progress_color[search_max-1],
      },1000)
    });
      }
    });
    // 達成率のほうの編集をする。
    var achivementrate = item['done'].length / item['len']

    });
}

function setting_table(data,tid){
  var match_data = ""
  data.forEach((item, i) => {
    if (item['tid'] == tid){
      match_data = item
    }
  });
  console.log(match_data)
 return match_data
}

function get_tag(data){
  return_data = []
  data.forEach((item, i) => {
  var item_key = Object.keys(item)
    if (item_key.includes("tags")){
        return_data.push(item['tags'])
    }

  });
  return return_data
}

function check_exist(data,tid){
  console.log(data)
  result = setting_table(data,tid)
  _tag = result['tags']
  if (_tag != undefined){
  _tag.forEach((item, i) => {
    tag_index="tag-" + item
    console.log(tag_index)
    $("#"+tag_index).prop('checked',true)
  });
  }

}
