'use strict';import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,__ipow__,
__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,filter,float,
getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import{BASE_URL}from"./const.js";var __name__="model";export var Model=__class__("Model",[object],{__module__:__name__,get __init__(){return __get__(this,function(self){self._todos=[];self.start_time=$("#input_data_start").val();self.end_time=$("#input_data_stop").val()})},
get load_all_todos(){return __get__(this,function(self){self.start_time=$("#input_data_start").val();self.end_time=$("#input_data_stop").val();$.ajax(dict([["url","{}events/otherlists/{}/{}".format(BASE_URL,self.start_time,self.end_time)],["type","GET"]])).done(self._success_load_all_todos).fail(function __lambda__(d){return alert("\u30b5\u30fc\u30d0\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002")})})},get _success_load_all_todos(){return __get__(this,function(self,data){console.log(self.start_time);self._todos=
data;$("body").trigger("todos-updated")})},get get_all_todos(){return __get__(this,function(self){return self._todos})},get get_todo(){return __get__(this,function(self,todo_id){for(var todo of self._todos)if(todo["id"]==todo_id)return todo;return null})}});

//# sourceMappingURL=model.map
