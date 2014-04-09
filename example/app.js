var win = Titanium.UI.createWindow();

var mod = require('com.iosbrighness');
Titanium.API.info("Jayesh joshi module loaded : " + mod);
var Slidecontrol = Titanium.UI.createSlider({
    top : 10,
    width : '100%',
    height : 50
});
Titanium.API.info("device brighness value for slider : " + mod.getBrightNeesDevice);
//When Application launch at first
var sldiervalue = mod.getBrightNeesDevice;
Slidecontrol.value = sldiervalue;

Titanium.App.addEventListener('resume', function(e) {
    // change broghness from devic so that will adjust over here
    var sldiervalue = mod.getBrightNeesDevice;
    Slidecontrol.value = sldiervalue;
});

Slidecontrol.addEventListener('change', function(e) {
    Titanium.API.info("slider value for device brighness:" + e.value);
    mod.setBrightnessDevice(e.value);
});
win.add(Slidecontrol);
win.open();
