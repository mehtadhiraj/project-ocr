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
                        imageId: '0001',
                        imagePath: '/images/eng-text.png',
                        imageText: [
                            {
                                // Details for 1st word in a sentence.
                                wordId: '0011',
                                word: 'Your',
                                color: '#000',
                                pixelLocation: '0,0,82,126',
                                suggestions: null
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '0012',
                                word: 'Amrica',
                                color: '#f00',
                                pixelLocation: '45,10,105,30',
                                suggestions: ['America', 'Amerigo', 'North America', 'South America', 'United States of America']
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '0013',
                                word: 'for Christ offering is making',
                                color: '#000',
                                pixelLocation: '0,0,82,126',
                                suggestions: null
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '0014',
                                word: 'lifechanging',
                                color: '#0f0',
                                pixelLocation: '10,50,100,80',
                                suggestions: ['life-changing', 'life', 'changing', 'life changing', 'Life Changing']
                            }
                        ]
                    },
                    {
                        // Details for 2nd image
                        imageId: '0002',
                        imagePath: '/images/eng-text.png',
                        imageText: [
                            {
                                // Details for 1st word in a sentence.
                                wordId: '0021',
                                word: 'Your',
                                color: '#000',
                                pixelLocation: '0,0,82,126',
                                suggestions: null
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '0022',
                                word: 'Amrica',
                                color: '#f00',
                                pixelLocation: '45,10,105,30',
                                suggestions: ['America', 'Amerigo', 'North America', 'South America', 'United States of America']
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '00023',
                                word: 'for Christ offering is making',
                                color: '#000',
                                pixelLocation: '0,0,82,126',
                                suggestions: null
                            },
                            {
                                // Details for 2nd word in a sentence.
                                wordId: '0024',
                                word: 'lifechanging',
                                color: '#0f0',
                                pixelLocation: '10,50,100,80',
                                suggestions: ['life-changing', 'life', 'changing', 'life changing', 'Life Changing']
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