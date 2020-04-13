/* Full Screen Event */
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  /* Back to Home Page */
  $('#home').on('click',function(){
    $('#main-content').load('./layout/home/homecontent.html');
  });
  /* Loads Unit 1 */
  $('#basic-unit-1').on('click',function(){
    $('#main-content').load('./tacticslistening/basic/unit1/unit1.html');
  });
  
