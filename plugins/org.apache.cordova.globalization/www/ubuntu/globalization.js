function convertStringToDateOptions(e){var t={formatLength:"short",selector:"date and time"};if(e)for(var r in t)t.hasOwnProperty(r)&&typeof t[r]==typeof e[r]&&(t[r]=e[r]);var n=["short","medium","long","full"],o=["date","time","date and time"];return t.formatLength=n.indexOf(t.formatLength),t.selector=o.indexOf(t.selector),-1===t.formatLength&&(t.formatLength=0),-1===t.selector&&(t.selector=0),t}function convertStringToNumberOptions(e){var t={type:"decimal"};if(e)for(var r in t)t.hasOwnProperty(r)&&typeof t[r]==typeof e[r]&&(t[r]=e[r]);var n=["decimal","percent","currency"];return t.type=n.indexOf(t.type),-1===t.type&&(t.type=0),t}function isInt(e){return e%1===0}var exec=require("cordova/exec"),argscheck=require("cordova/argscheck"),GlobalizationError=require("./GlobalizationError");module.exports={isDayLightSavingsTime:function(e,t,r){argscheck.checkArgs("dfF","Globalization.isDayLightSavingsTime",arguments),exec(t,r,"Globalization","isDayLightSavingsTime",[{time_t:e.getTime()}])},dateToString:function(e,t,r,n){argscheck.checkArgs("dfFO","Globalization.dateToString",arguments);var o=convertStringToDateOptions(n);exec(t,r,"Globalization","dateToString",[{time_t:e.getTime(),formatLength:o.formatLength,selector:o.selector}])},stringToDate:function(e,t,r,n){argscheck.checkArgs("sfFO","Globalization.stringToDate",arguments);var o=convertStringToDateOptions(n);exec(t,r,"Globalization","stringToDate",[{dateString:e,formatLength:o.formatLength,selector:o.selector}])},getDateNames:function(e,t,r){argscheck.checkArgs("fFO","Globalization.getDateNames",arguments);var n={type:"wide",item:"months"};if(r)for(var o in n)n.hasOwnProperty(o)&&typeof n[o]==typeof r[o]&&(n[o]=r[o]);var a=["days","months"],i=["narrow","wide"];n.item=a.indexOf(n.item),n.type=i.indexOf(n.type),-1===n.item&&(n.item=0),-1===n.type&&(n.type=0),exec(e,t,"Globalization","getDateNames",[n])},numberToString:function(e,t,r,n){argscheck.checkArgs("nfFO","Globalization.numberToString",arguments);var o=convertStringToNumberOptions(n);exec(t,r,"Globalization","numberToString",[{type:o.type,isInt:isInt(e),number:e}])},stringToNumber:function(e,t,r,n){argscheck.checkArgs("sfFO","Globalization.stringToNumber",arguments);var o=convertStringToNumberOptions(n);exec(t,r,"Globalization","stringToNumber",[o.type,e])},getDatePattern:function(e,t,r){argscheck.checkArgs("fFO","Globalization.getDatePattern",arguments);var n=convertStringToDateOptions(r);exec(e,t,"Globalization","getDatePattern",[n.formatLength,n.selector])},getNumberPattern:function(e,t,r){argscheck.checkArgs("fFO","getNumberPattern",arguments);var n=convertStringToNumberOptions(r);Cordova.exec(e,t,"Globalization","getNumberPattern",[n.type])},getCurrencyPattern:function(e,t,r){argscheck.checkArgs("sfF","Globalization.getCurrencyPattern",arguments),r(new GlobalizationError(GlobalizationError.PATTERN_ERROR,"unimplemented"))}},require("cordova/exec/proxy").add("navigator.globalization",module.exports);