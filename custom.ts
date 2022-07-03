//MicroTerrain.Pop()
//MicroTerrain.Push(0, 0)
//MicroTerrain.Scene([], [])

/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf043"
namespace MicroTerrain {
    /**
     * Use This At The Start Of Your Project To Set A Default Scene.
     * The Length Of X Does Have To Be The Same As Length Y.
     * Positions Go X Then Y On The Arrays
     */
    //% block
    export function Scene(Place_X: number[], Place_Y: number[]): void {
        objects_x = Place_X
        objects_y = Place_Y
        drawScreen()
    }
    /**
     * Add Object To End Of The Scene
     */
    //% block
    export function Push(Place_X: number, Place_Y: number): void {
        objects_x.push(Place_X)
        objects_y.push(Place_Y)
        drawScreen()
    }
    /**
     * Remove Value At End Of The Scene
     */
    //% block
    export function Pop(): void {
        objects_x.pop()
        objects_y.pop()
    }
    /**
     * Used When Imported Source Code
     */
    //% block
    export function Source(): void {

    }
    /**
     * Use This To Setup Multiplayer
     */
    //% block

    export function Port(port: number){
        //radio.setGroup(port)
        //multiplayer = true
    }

    /**
     * Use This To Setup Multiplayer
     */
    //% block

    export function DisableXMovement(){
        allow_move_x = false
    }
    export function DisableYMovement() {
        allow_move_y = false
    }
}
 

input.onButtonPressed(Button.A, function () {
    if (move_axis == "false") {
        if(allow_move_x == true){
            x_ofset += -1
        }
    } else if (move_axis == "true") {
        if(allow_move_y == true){
            y_ofset += -1
        }
    }
    if(multiplayer == true){
        radio.sendString("x" + x_ofset)
        radio.sendString("y" + y_ofset)
    }
    drawScreen()
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
        if(allow_move_x == true){
            x_ofset += 1
        }
    } else if (move_axis == "true") {
        if(allow_move_y == true){
            y_ofset += 1
        }
    }
    if (multiplayer == true) {
        radio.sendString("x" + x_ofset)
        radio.sendString("y" + y_ofset)
    }
    drawScreen()
})

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
    if(multiplayer = true){
        led.plot((multi_x - x_ofset - 2), (multi_y - y_ofset - 2))
    }
}

radio.onReceivedString(function(receivedString: string) {
    if (receivedString.charAt(0) == "x"){
        multi_x = parseInt(receivedString.substr(1, receivedString.length))
    }else if(receivedString.charAt(0) == "y"){
        multi_x = parseInt(receivedString.substr(1, receivedString.length))
    }else{

        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    }

    drawScreen()
})



let objects_y: number[] = []
let objects_x: number[] = []
let x_ofset: number
let y_ofset: number
let move_axis: string
let multiplayer : boolean
let multi_x: number
let multi_y: number
let collision: boolean
let allow_move_x: boolean
let allow_move_y: boolean
allow_move_x = true
allow_move_y = true
collision = false
multi_x = 0
multi_y = 0
multiplayer = false
move_axis = "false"
x_ofset = 3
y_ofset = 1
objects_x = [0]
objects_y = [0]
drawScreen()