/*******************************************************
 * Copyright (C) 2020 Tim Nguyen <mr.phucnguyen@hotmail.com>
 * 
 * This file is part of Ankiviet Project.
 * 
 * Ankiviet Project can not be copied and/or distributed without the express
 * permission of Tim Nguyen
 *******************************************************/

$( document ).ready(function() {
    /* Initial Home Page*/
    $('#sidebar-wrapper').load('./layout/sidebar/sidebar.html');
    $('#navigation-bar').load('./layout/nav/navbar.html');
    $('#main-content').load('./layout/home/homecontent.html');
});
