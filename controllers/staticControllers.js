module.exports.index = function(req, res, next){
    console.log('controller');
    res.render('./index', {
        pdfData: [
            {
                // 1st pdf details
                pdfName: 'MyPDF',
                imageData: [
                    {
                        // Details for 1st image
                        imagePath: '/images/eng-text.png',
                        imageText: [
                            {
                                // Details for 1st word in a sentence.
                                word: 'Your',
                                color: '#000',
                                pixelLocation: '400*500',
                                suggestions: null
                            },
                            {
                                // Details for 2nd word in a sentence.
                                word: 'Amrica',
                                color: '#f00',
                                pixelLocation: '450*500',
                                suggestions: ['America', 'Amerigo', 'North America', 'South America', 'United States of America']
                            }
                            // .... nth details of words follows here
                        ]
                    }
                ]
                //...... nth image details comes here
            }
            // ..... nth pdf details comes here
        ]   
    });
}