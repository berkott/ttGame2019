cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device-gyroscope.orientation",
    "file": "plugins/cordova-plugin-device-gyroscope/www/orientation.js",
    "pluginId": "cordova-plugin-device-gyroscope",
    "clobbers": [
      "orientation"
    ]
  },
  {
    "id": "cordova-plugin-device-gyroscope.gyroscope",
    "file": "plugins/cordova-plugin-device-gyroscope/www/gyroscope.js",
    "pluginId": "cordova-plugin-device-gyroscope",
    "clobbers": [
      "navigator.gyroscope"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.Acceleration",
    "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "Acceleration"
    ]
  },
  {
    "id": "cordova-plugin-device-motion.accelerometer",
    "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
    "pluginId": "cordova-plugin-device-motion",
    "clobbers": [
      "navigator.accelerometer"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device-gyroscope": "0.2.0",
  "cordova-plugin-device-motion": "2.0.1"
};
// BOTTOM OF METADATA
});