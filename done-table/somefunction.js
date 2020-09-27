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
  while(i=1){
    var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    if (donelist.includes(String(a))){
      i = 0
    }
    else{
        return a
    }
  }
}

function show_the_achivement(data){
  data.forEach((item, i) => {
    var all_donetime = item['alldone_times']
    console.log(item)
    var tid = item['tid']
    if (item['all_donetime'] != 0){
    var td =`td-${tid}`

      $('#main_tablepart').find('.'+td).css("background-color",progress_color[all_donetime-1])
    }
    item['done'].forEach((item, i) => {
      var segment = `segment-${tid}-${item}`
      console.log(segment,all_donetime)
      $('#main_tablepart').find('#'+segment).css("background-color",progress_color[all_donetime])
    });
    });
}
