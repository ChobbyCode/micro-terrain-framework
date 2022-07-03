//Below Is code For Updates



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
}


input.onButtonPressed(Button.A, function () {
    if (move_axis == "false") {
        x_ofset += -1
    } else if (move_axis == "true") {
        y_ofset += -1
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
        x_ofset += 1
    } else if (move_axis == "true") {
        y_ofset += 1
    }
    drawScreen()
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
}
let objects_y: number[] = []
let objects_x: number[] = []
let x_ofset: number
let y_ofset: number
let move_axis: string
move_axis = "false"
// false = x axis
// true = y axis
x_ofset = 3
y_ofset = 1
objects_x = [0]
objects_y = [0]
drawScreen()


