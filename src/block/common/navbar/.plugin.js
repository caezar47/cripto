/*var form = document.querySelector('#form');
var readyTask = form.querySelector('#value');
var allTask = form.querySelector('#max');
var progress = document.querySelector('.form__progress');
var progressLine = progress.querySelector('.form__progress-line');

form.addEventListener('submit',  function(e) {
  e.preventDefault();
  var valueTask = 0;
  var valueAllTask = 0;

  valueTask = readyTask.value;
  valueAllTask = allTask.value;
  
  //console.log(valueTask);
 // console.log(valueAllTask);
  if(valueTask == ''){
  	alert('Введите значение выполненых заданий');
  }
  else if(valueAllTask == ''){
  	alert('Введите общее количество заданий');
  }
  else if(valueTask < valueAllTask){
	progress.setAttribute('data-max',valueAllTask);
  	progressLine.setAttribute('data-value',valueTask);
  	progressLine.setAttribute('style','width: calc(100% - ('+valueTask+'/'+valueAllTask+')*100%)');
  } else {    
  	alert('Выполненых заданий не может быть больше общего количество заданий');
  }
}); */