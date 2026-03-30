input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        turtle.setSpeed(1e+262)
        turtle.back(1e+61)
    }
    basic.clearScreen()
})
basic.forever(function () {
    for (let index = 0; index < 9; index++) {
        turtle.setSpeed(1e+29)
        turtle.forward(1000)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        turtle.forward(1000)
    }
    basic.clearScreen()
})
