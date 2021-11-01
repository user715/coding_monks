const Basic=[
    {
        id: "0",
        topic: "sorting",
        subtopics: ["Bubblesort","Insertionsort","Selectionsort"]
    },
    {
        id: "1",
        topic: "sorting",
        subtopics: ["Bubblesort","Insertionsort","Selectionsort"]
    },
    {
        id: "2",
        topic: "sorting",
        subtopics: ["Bubblesort","Insertionsort","Selectionsort"]
    },
    
    
    ];
    
    const Intermediate=[
        {
            id: 0+parseInt(Basic.length),
            topic: "sorting-i",
            subtopics: ["Bubblesort-i","Insertionsort","Selectionsort"]
        },
        {
            id: 1+parseInt(Basic.length),
            topic: "sorting-i",
            subtopics: ["Bubblesort-i","Insertionsort","Selectionsort"]
        },
        {
            id: 2+parseInt(Basic.length),
            topic: "sorting-i",
            subtopics: ["Bubblesort-i","Insertionsort","Selectionsort"]
        },
        
        
        ];
    
        const Advanced=[
            {
                id: 0+parseInt(Basic.length)+parseInt(Intermediate.length),
                topic: "sorting-a",
                subtopics: ["Bubblesort-a","Insertionsort","Selectionsort"]
            },
            {
                id: 1+parseInt(Basic.length)+parseInt(Intermediate.length),
                topic: "sorting-a",
                subtopics: ["Bubblesort-a","Insertionsort","Selectionsort"]
            },
            {
                id: 2+parseInt(Basic.length)+parseInt(Intermediate.length),
                topic: "sorting-a",
                subtopics: ["Bubblesort-a","Insertionsort","Selectionsort"]
            },
            
            
            ];          
            module.exports={Basic,Intermediate,Advanced};