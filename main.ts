input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Skull)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Ghost)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
