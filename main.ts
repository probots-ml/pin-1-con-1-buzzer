pins.digitalWritePin(DigitalPin.P8, 1)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(900)
})
