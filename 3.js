let direction = 0
let mark_down = 0
let time_down = 0
let mark_up = 0
let time_up = 0
let mark_right = 0
let time_right = 0
let mark_left = 0
let time_left = 0
let mark = 0
let display: grove.TM1637 = null
grove.onGesture(GroveGesture.Left, () => {
    if (time_left && mark_left) {
        mark += 1
        mark_left = 0
    }
})
grove.onGesture(GroveGesture.Right, () => {
    if (time_right && mark_right) {
        mark += 1
        mark_right = 0
    }
})
grove.onGesture(GroveGesture.Up, () => {
    if (time_up && mark_up) {
        mark += 1
        mark_up = 0
    }
})
grove.onGesture(GroveGesture.Down, () => {
    if (time_down && mark_down) {
        mark += 1
        mark_down = 0
    }
})
display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.showIcon(IconNames.Heart)
basic.forever(() => {
    display.show(mark)
    if (input.runningTime() <= 180000) {
        if (grove.measureInCentimeters(DigitalPin.P2) < 100) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            mark = 0
            basic.showIcon(IconNames.Sad)
        } else {
            direction = Math.random(4)
            if (direction == 0) {
                time_left = 1
                mark_left = 1
                basic.showString("L")
                basic.pause(2900)
                time_left = 0
            } else if (direction == 1) {
                time_right = 1
                mark_right = 1
                basic.showString("R")
                basic.pause(2900)
                time_right = 0
            } else if (direction == 2) {
                time_up = 1
                mark_up = 1
                basic.showString("U")
                basic.pause(2900)
                time_up = 0
            } else if (direction == 3) {
                time_down = 1
                mark_down = 1
                basic.showString("D")
                basic.pause(2900)
                time_down = 0
            }
        }
    } else {
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("TIME OUT")
    }
})



