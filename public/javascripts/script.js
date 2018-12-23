$('.text-word').mouseenter( function(){
    let word = $(this).text();
    let suggestions = $(this).attr('data-suggestions');
    let listContainer = $(this).nextAll(); 
    console.log(listContainer.nextAll().css('display', 'inline'));
    // console.log(listContainer.hasClass(".suggestion_list"));
})






























// $('body').on({
//     'mouseenter': function(){
//             var txt = $(this).html();
//         }
//     },
//     'p'
// );
// $(function() {
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
    
      
// function placeCaretAtEnd(el) {
//     el.focus();
//     if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
//         var range = document.createRange();
//         range.selectNodeContents(el);
//         range.collapse(false);
//         var sel = window.getSelection();
//         sel.removeAllRanges();
//         sel.addRange(range);
//     } else if (typeof document.body.createTextRange != "undefined") {
//         var textRange = document.body.createTextRange();
//         textRange.moveToElementText(el);
//         textRange.collapse(false);
//         textRange.select();
//     }
// }
      
      
// function split( val ) {
//     return val.split( /,\s*/ );
// }
// function extractLast( term ) {
//     return split( term ).pop();
// }
 
// $( "#tags" )
//     // don't navigate away from the field on tab when selecting an item
//     .bind( "keyup", function( event ) {
//         if ( event.keyCode === $.ui.keyCode.TAB && $( this ).data( "ui-autocomplete" ).menu.active ) {
//           event.preventDefault();
//         }
//     })
//     .autocomplete({
//         minLength: 0,
//         source: function( request, response ) {
//             // delegate back to autocomplete, but extract the last term
//             response( $.ui.autocomplete.filter(
//             availableTags, extractLast( request.term ) ) );
//         },
//         focus: function() {
//             // prevent value inserted on focus
//             return false;
//         },
//         select: function (event, ui) {
//             var value = $(this).html();
//             var terms = split(value);
//             terms.pop();
//             terms.push(ui.item.value);
//             $(this).html(terms+", ");
//             placeCaretAtEnd(this);
          
//             return false;
//         }   
//     });
// });