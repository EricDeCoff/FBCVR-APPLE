var File=function(t,i,s,e,a){this.name=t||"",this.localURL=i||null,this.type=s||null,this.lastModified=e||null,this.lastModifiedDate=e||null,this.size=a||0,this.start=0,this.end=this.size};File.prototype.slice=function(t,i){var s=this.end-this.start,e=0,a=s;arguments.length&&(e=0>t?Math.max(s+t,0):Math.min(s,t)),arguments.length>=2&&(a=0>i?Math.max(s+i,0):Math.min(i,s));var h=new File(this.name,this.localURL,this.type,this.lastModified,this.size);return h.start=this.start+e,h.end=this.start+a,h},module.exports=File;