/* 
	Project: Admin Panel
	Author: William Viker <william.viker@gmail.com> 
	File: adminpanel.js
*/

function loadScript(url, callback)
{
   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= url;
   script.onreadystatechange = callback;
   script.onload = callback
   head.appendChild(script);
}

loadScript("js/adminpanel/jquery.js");
