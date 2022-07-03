input.onButtonPressed(Button.A, function () {
    if (move_axis == "false") {
        x_ofset += -1
    } else if (move_axis == "true") {
        y_ofset += -1
    }
    if (multiplayer == true) {
        radio.sendString("x" + (x_ofset + 2))
        radio.sendString("y" + (y_ofset + 2))
    }
    drawScreen()
    Update()
})
input.onButtonPressed(Button.AB, function () {
    if (move_axis == "false") {
        move_axis = "true"
    } else {
        move_axis = "false"
    }
})
input.onButtonPressed(Button.B, function () {
    if (move_axis == "false") {
        x_ofset += 1
    } else if (move_axis == "true") {
        y_ofset += 1
    }
    drawScreen()
    Update()
    if(multiplayer == true){
        radio.sendString("x" +( x_ofset + 2))
        radio.sendString("y" +( y_ofset + 2))
    }
})
// Update
function drawScreen() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let i = 0; i <= objects_x.length - 1; i++) {
        led.plot(objects_x[i] - x_ofset, objects_y[i] - y_ofset)
    }
    led.plot(2, 2)
    if(multiplayer == true){
        led.plot((multi_x - x_ofset), (multi_y - y_ofset))
    }
   
}

function Update(){

}

function multisetup(){

    radio.setGroup(88881414142141)

    radio.sendString("x" + x_ofset + 2)
    radio.sendString("y" + y_ofset + 2)
}
radio.onReceivedString(function(ReceivedString: string) {
        if(multiplayer == true){
        drawScreen()
            let type: string
            type = ReceivedString.charAt(0)
            if(type == "x"){
                multi_x = parseInt(ReceivedString.substr(1, ReceivedString.length))
            }else if(type == "y"){
                multi_y = parseInt(ReceivedString.substr(1, ReceivedString.length))
            }
            led.plot((multi_x - x_ofset), (multi_y - y_ofset))
        }
        
})

let objects_y: number[] = []
let objects_x: number[] = []
let x_ofset: number
let y_ofset: number
let move_axis: string
let multiplayer: boolean
let multi_x: number
let multi_y: number
move_axis = "false"
// false = x axis
// true = y axis
x_ofset = 3
y_ofset = 1
objects_x = [1, 1, 4, 15]
objects_y = [2, 1, 3, 2]
multiplayer = false
//if multiplayer = true then call multisetup
drawScreen()
