let paper = ""
let scissor = ""
let result = ""
let stone = ""
let coming_str = ""
input.onButtonPressed(Button.B, () => {
    radio.sendString(" GO！")
})
input.onGesture(Gesture.TiltLeft, () => {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . . # . .
        . # . # .
        `)
    radio.sendString(scissor)
})
input.onButtonPressed(Button.A, () => {
    radio.sendString(" BATTLE？")
})
input.onGesture(Gesture.TiltRight, () => {
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # . . # .
        . . . . #
        `)
    radio.sendString(stone)
})
input.onGesture(Gesture.ScreenUp, () => {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    radio.sendString(paper)
})
radio.onDataPacketReceived( ({ receivedString }) =>  {
    basic.showString(receivedString)
    result = receivedString
    if (result == "w") {
        basic.showIcon(IconNames.Happy)
    }
    if (result == "e") {
        basic.showIcon(IconNames.Asleep)
    }
    if (result == "d") {
        basic.showIcon(IconNames.Sad)
    }
})
coming_str = ""
stone = "st"
paper = "p"
scissor = "sc"
radio.setGroup(10)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
basic.showIcon(IconNames.Heart)
