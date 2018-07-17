let _4dstr = ""
let _4dstr_last = ""
let _4dstr_first = ""
let _4dnum = 0
input.onButtonPressed(Button.A, () => {
    _4dnum = Math.random(9999)
    _4dnum = _4dnum + 1
    _4dstr = "000" + _4dnum
    _4dstr = _4dstr.substr(_4dstr.length - 4, _4dstr.length)
    _4dstr_first = _4dstr.substr(0, 1)
    _4dstr_last = _4dstr.substr(_4dstr.length - 1,  _4dstr.length)
    basic.showString("" + _4dstr + ";")
    basic.showString("" + _4dstr_first + ";")
    basic.showString("" + _4dstr_last)
})

basic.showIcon(IconNames.Happy)
