var exec=require("cordova/exec");module.exports={newContactUI:function(e){exec(e,null,"Contacts","newContact",[])},chooseContact:function(e,c){var t=function(c){var t=require("./contacts").create(c);e(t.id,t)};exec(t,null,"Contacts","chooseContact",[c])}};