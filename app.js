$(function(){

  
  let menu = $(".menu");
  let sidelist = $(".sidelist");
  let searchIcon =$(".searchIcon")
  let serchArea =$(".serchArea")
  let xicon=$(".xicon")
  let on=$(".on")
  let off=$(".off")
  let body=$("body")
  let darkmood=$(".darkmood")
  let preelodergif=$(".preelodergif")

  $(window).on("load",function(){
    preelodergif.fadeOut(500);
  })

  on.click(function(){
    on.hide()
    off.show()
    body.toggleClass("darkmood")
  })
 off.click(function(){
  off.hide()
  on.show()
  body.toggleClass("darkmood")
 })

 
 
  





  menu.click(function(){
    sidelist.toggleClass("active");
  })

  searchIcon.click(function(){
  serchArea .toggle(200)
  })
  xicon.click(function(){
    serchArea .toggle(200)
    })

  searchIcon.click(function(){
    searchIcon.hide()
    xicon.show()
  })
  xicon.click(function(){
    xicon.hide()
    searchIcon.show()
  })
  




})