let myValue = 0
let fingertipColorArray = []
let itemName = ""
let itemColor = ""
let currentName = ""
let compareColors = []
let compareId = []
let myColorArray = []
let gridArray = []
let finalArray = []


const colorArray = [
    {
        name: 'square-0',
        color: 'aqua',
    },
    {
        name: 'square-1',
        color: 'bisque',
    },
    {
        name: 'square-2',
        color: 'blue',
    },
    {
        name: 'square-3',
        color: 'brown',
    },
    {
        name: 'square-4',
        color: 'chartreuse',
    },
    {
        name: 'square-5',
        color: 'crimson',
    },
    {
        name: 'square-6',
        color: 'darkgoldenrod',
    },
    {
        name: 'square-7',
        color: 'darkslategray',
    },
    {
        name: 'square-8',
        color: 'deeppink',
    },
    {
        name: 'square-9',
        color: 'forestgreen',
    },
    {
        name: 'square-10',
        color: 'fuchsia',
    },
    {
        name: 'square-11',
        color: 'gold',
    },
    {
        name: 'square-12',
        color: 'hotpink',
    },
    {
        name: 'square-13',
        color: 'indigo',
    },
    {
        name: 'square-14',
        color: 'indianred',
    },
    {
        name: 'square-15',
        color: 'lightpink',
    },
    {
        name: 'square-16',
        color: 'olive',
    },
    {
        name: 'square-17',
        color: 'palegreen',
    },
    {
        name: 'square-18',
        color: 'peru',
    },
    {
        name: 'square-19',
        color: 'pink',
    },
    {
        name: 'square-20',
        color: 'purple',
    },
    {
        name: 'square-21',
        color: 'red',
    },
    {
        name: 'square-22',
        color: 'saddlebrown',
    },
    {
        name: 'square-23',
        color: 'seagreen',
    },
    {
        name: 'square-24',
        color: 'violet',
    },
    {
        name: 'square-25',
        color: 'yellow',
    },
    {
        name: 'square-26',
        color: 'thistle',
    },
    {
        name: 'square-27',
        color: 'chocolate',
    },
    {
        name: 'square-28',
        color: 'gray',
    },
    {
        name: 'square-29',
        color: 'darkorange',
    },
    {
        name: 'square-30',
        color: 'khaki',
    },
    {
        name: 'square-31',
        color: 'lightsalmon',
    },
]

$(function () {
    $('#grid-button').css('opacity', '0.5');
    $('#grid-button').off('click');
    $('#display-container-2').hide()
    $('#fingertip-button').on('click', function () {
        if ($('#fingertip-container').is(":visible") === true) {
            $('#fingertip-container').hide()
        }
        else {
            $('#fingertip-container').show()
        }
    });
});

$("#grid-input").keyup(function () {
    if ($(this).val() > 9) {
        $(this).val(9)
    }
    else if ($(this).val() < 0) {
        $(this).val(0)
    }

    if ($(this).val() == "") {
        $('#grid-button').css('opacity', '0.5');
        $('#grid-button').off('click');
    }
    else {
        $('#grid-button').css('opacity', '1');
        $('#grid-button').on('click', function () {
            $('#display-container-1').hide()
            $('#display-container-2').show()
            myValue = $("#grid-input").val()
            createResponsiveGridArray()
            createGrid()
            $('#fingertip-container').hide()
            console.log($("#grid-input").val())
        });
    }
});

function createResponsiveGridArray() {
    let gridArray = []
    for (let i = 0; i < Math.floor((myValue * myValue) / 2); i++) {
        gridArray.push(colorArray[i])
    }
    let oldGridArray = gridArray
    let newGridArray = oldGridArray.concat(gridArray)

    newGridArray.forEach(function (item) {
        myColorArray.push(item.name)
    })

    newGridArray.forEach(function (item) {
        fingertipColorArray.push(item.color)
    })
    shuffle(fingertipColorArray)
    console.log(fingertipColorArray)

    for (let i = 0; i < myColorArray.length; i++) {
        myColorArray[i] = 'square-' + i
    }

    finalArray = newGridArray.map((obj, i) => ({ name: myColorArray[i], color: fingertipColorArray[i] }));
    console.log(finalArray);

    return finalArray
}

function checkForMatch() {
    if (compareColors[0] != compareColors[1]) {
        $('#' + compareId[0]).css({ 'background-color': '' })
        $('#' + compareId[1]).css({ 'background-color': '' })
    }
    else {
        $('#' + compareId[0]).css({ 'background-color': compareColors[0] })
        $('#' + compareId[1]).css({ 'background-color': compareColors[1] })
    }
    compareColors = []
    compareId = []
}


function createGrid() {
    if (myValue == 4 || myValue == 6 || myValue == 8) {
        $('#display-container-2').css({
            'height': (myValue * 75 + myValue * 3) + 'px',
            'width': ((myValue * 75 + myValue * 2) * 3) + 'px',
            'margin': 'auto',
            'float': 'left',
        })
        $('#game-container').css({
            'height': (myValue * 75 + myValue * 2) + 'px',
            'width': (myValue * 75 + myValue * 2) + 'px',
            'margin': 'auto',
            'border': '1px solid black',
            'float': 'left',
        })
        $('#fingertip-container').css({
            'height': (myValue * 75 + myValue * 2) + 'px',
            'width': (myValue * 75 + myValue * 2) + 'px',
            'margin': 'auto',
            'border': '1px solid black',
            'display': 'inline-block',
            'float': 'left',
        })
        for (i = 0; i < myValue * myValue; i++) {
            $("<div/>", {

                id: "square-" + i,
                "class": "colors",
                css: {
                    height: "75px",
                    width: "75px",
                    float: "left",
                    border: "1px solid black",
                },
                on: {
                    click: function () {
                        currentName = $(this).attr('id')
                        compareId.push(currentName)
                        //console.log($(this).attr('id'))

                        finalArray.forEach(function (item) {
                            if (currentName == item.name) {
                                itemName = item.name
                                itemColor = item.color
                                compareColors.push(itemColor)
                            }
                        })
                        //console.log(compareColors)
                        if (itemName == $(this).attr('id')) {
                            $(this).css({ 'background-color': itemColor })
                            if (compareColors.length === 2) {
                                setTimeout(checkForMatch, 1000)
                                setTimeout(function () {
                                    $(document).off('click');
                                })
                            }
                        }
                    }
                },
                appendTo: "#game-container"

            });
        }

        for (i = 0; i < myValue * myValue; i++) {
            $("<div/>", {

                id: "fingertip-square-" + i,
                "class": "colors",
                css: {
                    'background-color': fingertipColorArray[i],
                    height: "75px",
                    width: "75px",
                    float: "left",
                    border: "1px solid black",
                },

                appendTo: "#fingertip-container"

            });
        }
    }
    else {
        alert('The grid size should be 4, 6 or 8.')
        location.reload()
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}