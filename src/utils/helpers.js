/*
script from:
kmaida/convert-UNIX-timestamp.js
https://gist.github.com/kmaida/6045266
*/
export const convertTimestamp=function(timestamp) {
   var d = new Date(timestamp ),	// Convert the passed timestamp to milliseconds
     yyyy = d.getFullYear(),
     mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
     dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
     time;

   // ie: 2013-02-18, 8:35 AM
   time =   mm + '/' + dd +'/'+ yyyy ;

   return time;
 }
