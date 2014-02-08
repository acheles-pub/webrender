!function(i,k){var c=k.prototype.trim;var b=k.prototype.trimRight;var g=k.prototype.trimLeft;var e=function(o){return o*1||0};var a=function(p,q){if(q<1){return""}var o="";while(q>0){if(q&1){o+=p}q>>=1,p+=p}return o};var l=[].slice;var j=function(o){if(o==null){return"\\s"}else{if(o.source){return o.source}else{return"["+n.escapeRegExp(o)+"]"}}};var f={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};var d={};for(var m in f){d[f[m]]=m}d["'"]="#39";var h=(function(){function o(r){return Object.prototype.toString.call(r).slice(8,-1).toLowerCase()}var p=a;var q=function(){if(!q.cache.hasOwnProperty(arguments[0])){q.cache[arguments[0]]=q.parse(arguments[0])}return q.format.call(null,q.cache[arguments[0]],arguments)};q.format=function(y,x){var C=1,A=y.length,u="",D,r=[],v,t,w,s,z,B;for(v=0;v<A;v++){u=o(y[v]);if(u==="string"){r.push(y[v])}else{if(u==="array"){w=y[v];if(w[2]){D=x[C];for(t=0;t<w[2].length;t++){if(!D.hasOwnProperty(w[2][t])){throw new Error(h('[_.sprintf] property "%s" does not exist',w[2][t]))}D=D[w[2][t]]}}else{if(w[1]){D=x[w[1]]}else{D=x[C++]}}if(/[^s]/.test(w[8])&&(o(D)!="number")){throw new Error(h("[_.sprintf] expecting number but found %s",o(D)))}switch(w[8]){case"b":D=D.toString(2);break;case"c":D=k.fromCharCode(D);break;case"d":D=parseInt(D,10);break;case"e":D=w[7]?D.toExponential(w[7]):D.toExponential();break;case"f":D=w[7]?parseFloat(D).toFixed(w[7]):parseFloat(D);break;case"o":D=D.toString(8);break;case"s":D=((D=k(D))&&w[7]?D.substring(0,w[7]):D);break;case"u":D=Math.abs(D);break;case"x":D=D.toString(16);break;case"X":D=D.toString(16).toUpperCase();break}D=(/[def]/.test(w[8])&&w[3]&&D>=0?"+"+D:D);z=w[4]?w[4]=="0"?"0":w[4].charAt(1):" ";B=w[6]-k(D).length;s=w[6]?p(z,B):"";r.push(w[5]?D+s:s+D)}}}return r.join("")};q.cache={};q.parse=function(r){var u=r,v=[],x=[],w=0;while(u){if((v=/^[^\x25]+/.exec(u))!==null){x.push(v[0])}else{if((v=/^\x25{2}/.exec(u))!==null){x.push("%")}else{if((v=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(u))!==null){if(v[2]){w|=1;var y=[],t=v[2],s=[];if((s=/^([a-z_][a-z_\d]*)/i.exec(t))!==null){y.push(s[1]);while((t=t.substring(s[0].length))!==""){if((s=/^\.([a-z_][a-z_\d]*)/i.exec(t))!==null){y.push(s[1])}else{if((s=/^\[(\d+)\]/.exec(t))!==null){y.push(s[1])}else{throw new Error("[_.sprintf] huh?")}}}}else{throw new Error("[_.sprintf] huh?")}v[2]=y}else{w|=2}if(w===3){throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported")}x.push(v)}else{throw new Error("[_.sprintf] huh?")}}}u=u.substring(v[0].length)}return x};return q})();var n={VERSION:"2.3.0",isBlank:function(o){if(o==null){o=""}return(/^\s*$/).test(o)},stripTags:function(o){if(o==null){return""}return k(o).replace(/<\/?[^>]+>/g,"")},capitalize:function(o){o=o==null?"":k(o);return o.charAt(0).toUpperCase()+o.slice(1)},chop:function(p,o){if(p==null){return[]}p=k(p);o=~~o;return o>0?p.match(new RegExp(".{1,"+o+"}","g")):[p]},clean:function(o){return n.strip(o).replace(/\s+/g," ")},count:function(r,q){if(r==null||q==null){return 0}r=k(r);q=k(q);var p=0,s=0,o=q.length;while(true){s=r.indexOf(q,s);if(s===-1){break}p++;s+=o}return p},chars:function(o){if(o==null){return[]}return k(o).split("")},swapCase:function(o){if(o==null){return""}return k(o).replace(/\S/g,function(p){return p===p.toUpperCase()?p.toLowerCase():p.toUpperCase()})},escapeHTML:function(o){if(o==null){return""}return k(o).replace(/[&<>"']/g,function(p){return"&"+d[p]+";"})},unescapeHTML:function(o){if(o==null){return""}return k(o).replace(/\&([^;]+);/g,function(p,r){var q;if(r in f){return f[r]}else{if(q=r.match(/^#x([\da-fA-F]+)$/)){return k.fromCharCode(parseInt(q[1],16))}else{if(q=r.match(/^#(\d+)$/)){return k.fromCharCode(~~q[1])}else{return p}}}})},escapeRegExp:function(o){if(o==null){return""}return k(o).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(s,p,r,q){var o=n.chars(s);o.splice(~~p,~~r,q);return o.join("")},insert:function(q,o,p){return n.splice(q,o,0,p)},include:function(p,o){if(o===""){return true}if(p==null){return false}return k(p).indexOf(o)!==-1},join:function(){var o=l.call(arguments),p=o.shift();if(p==null){p=""}return o.join(p)},lines:function(o){if(o==null){return[]}return k(o).split("\n")},reverse:function(o){return n.chars(o).reverse().join("")},startsWith:function(p,o){if(o===""){return true}if(p==null||o==null){return false}p=k(p);o=k(o);return p.length>=o.length&&p.slice(0,o.length)===o},endsWith:function(p,o){if(o===""){return true}if(p==null||o==null){return false}p=k(p);o=k(o);return p.length>=o.length&&p.slice(p.length-o.length)===o},succ:function(o){if(o==null){return""}o=k(o);return o.slice(0,-1)+k.fromCharCode(o.charCodeAt(o.length-1)+1)},titleize:function(o){if(o==null){return""}return k(o).replace(/(?:^|\s)\S/g,function(p){return p.toUpperCase()})},camelize:function(o){return n.trim(o).replace(/[-_\s]+(.)?/g,function(p,q){return q.toUpperCase()})},underscored:function(o){return n.trim(o).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(o){return n.trim(o).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(o){return n.titleize(k(o).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(o){return n.capitalize(n.underscored(o).replace(/_id$/,"").replace(/_/g," "))},trim:function(p,o){if(p==null){return""}if(!o&&c){return c.call(p)}o=j(o);return k(p).replace(new RegExp("^"+o+"+|"+o+"+$","g"),"")},ltrim:function(p,o){if(p==null){return""}if(!o&&g){return g.call(p)}o=j(o);return k(p).replace(new RegExp("^"+o+"+"),"")},rtrim:function(p,o){if(p==null){return""}if(!o&&b){return b.call(p)}o=j(o);return k(p).replace(new RegExp(o+"+$"),"")},truncate:function(q,p,o){if(q==null){return""}q=k(q);o=o||"...";p=~~p;return q.length>p?q.slice(0,p)+o:q},prune:function(r,q,s){if(r==null){return""}r=k(r);q=~~q;s=s!=null?k(s):"...";if(r.length<=q){return r}var o=function(t){return t.toUpperCase()!==t.toLowerCase()?"A":" "},p=r.slice(0,q+1).replace(/.(?=\W*\w*$)/g,o);if(p.slice(p.length-2).match(/\w\w/)){p=p.replace(/\s*\S+$/,"")}else{p=n.rtrim(p.slice(0,p.length-1))}return(p+s).length>r.length?r:r.slice(0,p.length)+s},words:function(p,o){if(n.isBlank(p)){return[]}return n.trim(p,o).split(o||/\s+/)},pad:function(s,q,o,p){s=s==null?"":k(s);q=~~q;var r=0;if(!o){o=" "}else{if(o.length>1){o=o.charAt(0)}}switch(p){case"right":r=q-s.length;return s+a(o,r);case"both":r=q-s.length;return a(o,Math.ceil(r/2))+s+a(o,Math.floor(r/2));default:r=q-s.length;return a(o,r)+s}},lpad:function(q,p,o){return n.pad(q,p,o)},rpad:function(q,p,o){return n.pad(q,p,o,"right")},lrpad:function(q,p,o){return n.pad(q,p,o,"both")},sprintf:h,vsprintf:function(p,o){o.unshift(p);return h.apply(null,o)},toNumber:function(p,o){if(!p){return 0}p=n.trim(p);if(!p.match(/^-?\d+(?:\.\d+)?$/)){return NaN}return e(e(p).toFixed(~~o))},numberFormat:function(r,u,o,s){if(isNaN(r)||r==null){return""}r=r.toFixed(~~u);s=typeof s=="string"?s:",";var t=r.split("."),q=t[0],p=t[1]?(o||".")+t[1]:"";return q.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+s)+p},strRight:function(p,o){if(p==null){return""}p=k(p);o=o!=null?k(o):o;var q=!o?-1:p.indexOf(o);return ~q?p.slice(q+o.length,p.length):p},strRightBack:function(p,o){if(p==null){return""}p=k(p);o=o!=null?k(o):o;var q=!o?-1:p.lastIndexOf(o);return ~q?p.slice(q+o.length,p.length):p},strLeft:function(p,o){if(p==null){return""}p=k(p);o=o!=null?k(o):o;var q=!o?-1:p.indexOf(o);return ~q?p.slice(0,q):p},strLeftBack:function(p,o){if(p==null){return""}p+="";o=o!=null?""+o:o;var q=p.lastIndexOf(o);return ~q?p.slice(0,q):p},toSentence:function(t,s,q,p){s=s||", ";q=q||" and ";var o=t.slice(),r=o.pop();if(t.length>2&&p){q=n.rtrim(s)+q}return o.length?o.join(s)+q+r:r},toSentenceSerial:function(){var o=l.call(arguments);o[3]=true;return n.toSentence.apply(n,o)},slugify:function(p){if(p==null){return""}var r="ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",q="aaaaaaaaceeeeeiiiilnoooooouuuunczz",o=new RegExp(j(r),"g");p=k(p).toLowerCase().replace(o,function(t){var s=r.indexOf(t);return q.charAt(s)||"-"});return n.dasherize(p.replace(/[^\w\s-]/g,""))},surround:function(o,p){return[p,o,p].join("")},quote:function(o){return n.surround(o,'"')},exports:function(){var o={};for(var p in this){if(!this.hasOwnProperty(p)||p.match(/^(?:include|contains|reverse)$/)){continue}o[p]=this[p]}return o},repeat:function(q,r,p){if(q==null){return""}r=~~r;if(p==null){return a(k(q),r)}for(var o=[];r>0;o[--r]=q){}return o.join(p)},levenshtein:function(t,r){if(t==null&&r==null){return 0}if(t==null){return k(r).length}if(r==null){return k(t).length}t=k(t);r=k(r);var u=[],q,s;for(var p=0;p<=r.length;p++){for(var o=0;o<=t.length;o++){if(p&&o){if(t.charAt(o-1)===r.charAt(p-1)){s=q}else{s=Math.min(u[o],u[o-1],q)+1}}else{s=p+o}q=u[o];u[o]=s}}return u.pop()}};n.strip=n.trim;n.lstrip=n.ltrim;n.rstrip=n.rtrim;n.center=n.lrpad;n.rjust=n.lpad;n.ljust=n.rpad;n.contains=n.include;n.q=n.quote;if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){module.exports=n}exports._s=n}if(typeof define==="function"&&define.amd){define("underscore.string",[],function(){return n})}i._=i._||{};i._.string=i._.str=n}(this,String);