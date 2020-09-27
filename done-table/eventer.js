$('#exampleModal').on('show.bs.modal',function(event){
  var button = $(event.relatedTarget)
  var tid = button.attr('id')
  console.log(tid)
  var tid_number = tid.split('-')[1]
  console.log(tid_number)
  inputdata = tid_get(tid_number,alldata)

  // モーダルに値を入力
  var modal = $(this)
  modal.find('.modal-title').text(inputdata['table_name'])
})

$('.autogene').on('click',function(event){
  var button = $(event.relatedTarget)
  var tid = button.attr('id')
  console.log(tid)
  var tid_number = tid.split('-')[1]
  console.log(tid_number)
  var done_number = ramdom_from_done(String(tid_number),all_data)

  select_id_input = `inputdone-${tid_number}`
  $('#'+select_id_input).val(done_number)
})
