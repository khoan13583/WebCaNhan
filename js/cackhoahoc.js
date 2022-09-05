// bài 1
$(document).ready(function(){
    $('body').addClass('loaded');
    runFunction();
})

function setLang(code){
    window.localStorage.setItem('lang',code);
    location.reload();
}

function getLang(){
    if (typeof localStorage.getItem('lang') === 'undefined' ){
        window.localStorage.setItem('lang','vi-VN');
    }
    return window.localStorage.getItem('lang');
};
function runFunction(){
    var lang = getLang();
    $('.multilang').each(function(i,obj){
        $("#"+ obj.id).html(labels[obj.id][lang]).attr("title",labels[obj.id][lang]);
    })
}
// bài 2
function showCourseList()
{ var lang=getLang(); 

$.each(courseList,function(i, obj) {
btn="<td><div class='d-grid gap-2'><button class='btn btn-success btn-lg' onclick='regCourse(\""+i+"\")'><i class='far fa-check-square'></i></button></div></td>"; 

 $("#course_List").append("<tr><td>"+obj.code+"</td><td>"+obj.name[lang]+
"</td></td><td class='text-end'>"+newDate(obj.startDate)+"</td><td class='text-end'>"+newDate(obj.endDate)+"</td><td class='text-end'>"+(obj.fee[lang]).toLocaleString()+"</td>"+btn+"</tr>");
 });

}

function newDate(date){
	var d = new Date(date);
	var ngay =  d.getDate();
	var thang = d.getMonth() + 1;
	var nam = d.getFullYear();
	if (thang == 12){
		thang == 1;
	}
	return ngay+"/"+thang+"/"+nam;
}
$(document).ready(function(){
	showCourseList();
 })
