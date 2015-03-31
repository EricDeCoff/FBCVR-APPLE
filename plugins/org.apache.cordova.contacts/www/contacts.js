var argscheck=require("cordova/argscheck"),exec=require("cordova/exec"),ContactError=require("./ContactError"),utils=require("cordova/utils"),Contact=require("./Contact"),fieldType=require("./ContactFieldType"),contacts={fieldType:fieldType,find:function(c,e,t,r){if(argscheck.checkArgs("afFO","contacts.find",arguments),c.length){r=r||{filter:"",multiple:!0};var a=function(c){for(var t=[],r=0,a=c.length;a>r;r++)t.push(contacts.create(c[r]));e(t)};exec(a,t,"Contacts","search",[c,r])}else t&&t(new ContactError(ContactError.INVALID_ARGUMENT_ERROR))},pickContact:function(c,e){argscheck.checkArgs("fF","contacts.pick",arguments);var t=function(e){var t=e instanceof Contact?e:contacts.create(e);c(t)};exec(t,e,"Contacts","pickContact",[])},create:function(c){argscheck.checkArgs("O","contacts.create",arguments);var e=new Contact;for(var t in c)"undefined"!=typeof e[t]&&c.hasOwnProperty(t)&&(e[t]=c[t]);return e}};module.exports=contacts;