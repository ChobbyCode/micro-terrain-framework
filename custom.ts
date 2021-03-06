//MicroTerrain.Pop()
//MicroTerrain.Push(0, 0)
//MicroTerrain.Scene([], [])


//BSD 2 - Clause License

//Copyright(c) 2022, Jacob Hadfield All rights reserved.



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
     * Use This To Disable Movement On The X Axis
     */
    //% block

    export function DisableXMovement(): void{
        allow_move_x = false
    }
    /**
     * Use This To Disable Movement On The Y Axis
     */
    //% block
    export function DisableYMovement(): void{
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
}



let objects_y: number[] = []
let objects_x: number[] = []
let x_ofset: number
let y_ofset: number
let move_axis: string
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
move_axis = "false"
x_ofset = 3
y_ofset = 1
objects_x = [0]
objects_y = [0]
drawScreen()