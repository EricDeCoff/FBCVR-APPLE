var callback;module.exports={start:function(e,n,a,t){var i=new PluginResult(a,t);window.removeEventListener("devicemotion",callback),callback=function(e){var n={x:e.accelerationIncludingGravity.x,y:e.accelerationIncludingGravity.y,z:e.accelerationIncludingGravity.z,timestamp:e.timestamp};i.callbackOk(n,!0)},window.addEventListener("devicemotion",callback),i.noResult(!0)},stop:function(e,n,a,t){var i=new PluginResult(a,t);window.removeEventListener("devicemotion",callback),i.ok("removed")}};