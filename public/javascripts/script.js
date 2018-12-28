//Editing the text from  the given suggestion and highlighting the image
$('.text-word').mouseenter(function(){
    let dataThis      = this,
        listContainer = this.nextElementSibling,                  // Accessing ul list 
        listItems     = listContainer.children,                   // Accessing complete list
        dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid,
        suggestions   = dataAttributes.suggestions.split(','),
        wordId        = '#'+$(this).attr('id'),
        data          = { items: [] };

    listContainer.style.display = "inline-block";
    
    // // Creating an object of suggetions
    // suggestions.forEach(function(suggestion) {
    //     data.items.push({
    //         "display_name":suggestion
    //     })
    // });

    // // Autocomplete text suggestion
    // $(wordId).autocomplete({
    //     source: $.map(data.items, function(item) {
    //         return item.display_name;
    //     }),
    //     minLength: 0
    // }).click(function () {
    //     $('.ui-menu').css('display', 'inline-block')
    // });
   
    cvi_map.add(document.getElementById(imageid), {
        opacity: '25', 
        areacolor: '00ff00'
    });
    extAreaOver(imageid, dataAttributes.wordid);                  // Highlight the image area

    $(listContainer).mouseleave(function(){
        listContainer.style.display = "none";                     // Fade away suggestion
        cvi_map.remove(document.getElementById(imageid));         // Fade away image highlight
    });

    //Get the selected list item and change text to selected item
    $(listItems).on('click', function(){
        let selectedSuggestion = $(this).text();
        dataThis.innerText = selectedSuggestion;
        dataThis.style.color = '#00f';
    });
});

//For text with no suggestion
$('.text-no-suggestion').mouseenter( function(){
    let dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid;
        
    cvi_map.add(document.getElementById(imageid), {
        opacity: '25', 
        areacolor: '00ff00'
    });
    extAreaOver(imageid, dataAttributes.wordid);                  // Highlight the image area
    
}).mouseleave(function(){
    let dataAttributes= $(this).data(),                           // Fetching all data attributes
        imageid       = dataAttributes.imageid;
    cvi_map.remove(document.getElementById(imageid));             // Fade away image highlight
})

// Image hover get data
$('.map-image').mouseenter(function(){
    let imageid = $(this).attr('id');

    if(imageid != null || imageid != undefined){
        cvi_map.remove(document.getElementById(imageid));             // Fade away image highlight
        cvi_map.add(document.getElementById(imageid), {
            opacity: '25', 
            areacolor: 'fff'
        });
    }

    $("area").mouseenter(function(){
        let areaData = $(this).data();
        let wordElement = document.getElementById(areaData.textid);
        let imageId = areaData.imageid;
        wordElement.style.backgroundColor = "#aaa";

        $('area').mouseleave(function(){
            wordElement.style.backgroundColor = "cornsilk";    
        })
    })
})

//Update Text 
/**
 * Get all the values from contenteditable field
 * save it to the document in defined json format
 */
$('.save-text-button').on('click', function(){
    let pdfSelectTag = document.getElementById('pdf');
    let pdfName = pdfSelectTag.value;
    let updatePdfWord = {};
    updatePdfWord = {
        "pdfData": [
            {
                "pdfName": pdfName,
                "imageData": []
            }
        ]
    };
    let taginput = $(this).prev();
    console.log(taginput)
    let childTaginput = taginput.children('span');
    updatePdfWord.pdfData[0].imageData.push({
        "imageId": childTaginput[0].getAttribute('data-imageid')
    });
    for(let i=0; i<childTaginput.length; i++){
        updatePdfWord.pdfData[0].imageData.push({
            "imageText": [{
                wordId: childTaginput[i].getAttribute('data-wordid'),
                word: childTaginput[i].innerText,
                color: childTaginput[i].style.color,
                pixelLocation: childTaginput[i].getAttribute('data-coords')
            }]
        });
    }
    console.log(updatePdfWord);
})

// let data = {
//     item: [
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'},
//         {display_name: 'Dhiraj'}
//     ]
// }

// let tgas = ['America', 'life', 'Dhiraj Mukul', 'Dhiraj Rocks']

// $('.text-word').mouseenter(function() {
//     $(".autocomplete").autocomplete({
//         source: tgas,
//         delay: 50,
//         minLength: 1
//     });
// });























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