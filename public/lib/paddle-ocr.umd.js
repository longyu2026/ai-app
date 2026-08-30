(()=>{var pe=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Lr=Object.getOwnPropertyNames;var Sr=Object.prototype.hasOwnProperty;var ct=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(r){throw e=[r],r}};var ot=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Xr=(n,t)=>{for(var e in t)pe(n,e,{get:t[e],enumerable:!0})},Nr=(n,t,e,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Lr(t))!Sr.call(n,i)&&i!==e&&pe(n,i,{get:()=>t[i],enumerable:!(r=Ar(t,i))||r.enumerable});return n};var Br=n=>Nr(pe({},"__esModule",{value:!0}),n);var Oe=ot((Dt,ce)=>{(function(n,t){typeof Dt=="object"&&typeof ce=="object"?ce.exports=t():typeof define=="function"&&define.amd?define([],t):typeof Dt=="object"?Dt.paddlejs=t():(n.paddlejs=n.paddlejs||{},n.paddlejs.core=t())})(Dt,(function(){return(()=>{var n={911:(r,i)=>{"use strict";var u=(function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(u!==void 0)return u;throw new Error("unable to locate global object")})();r.exports=i=u.fetch,u.fetch&&(i.default=u.fetch.bind(u)),i.Headers=u.Headers,i.Request=u.Request,i.Response=u.Response},994:(r,i,u)=>{"use strict";u.r(i),u.d(i,{PaddlejsBackend:()=>fe,Runner:()=>Jt,Transformer:()=>V,coreUtils:()=>c,env:()=>S,interfaces:()=>v,registerBackend:()=>Yn,registerOp:()=>Gn});var c={};u.r(c),u.d(c,{AddItemToVars:()=>B,delUselessData:()=>N,findVarByKey:()=>F,getGlobalInterface:()=>x,getOrMakeGlobalProperty:()=>w,traverseVars:()=>A});var v={};function x(){var m;if(typeof window<"u")m=window;else if(u.g!==void 0)m=u.g;else{if(typeof self>"u")throw new Error("Could not find a global object");m=self}return m}function w(m,p){var d=x();return d[m]||(d[m]=p),d[m]}function F(m,p){return Array.isArray(m)?m.find((function(d){return d.name===p})):m[p]}function B(m,p){var d=Array.isArray(m),y=Array.isArray(p)?p:[p];d?y.forEach((function(g){for(var I=null,l=0;l<m.length;l++)if(m[l].name===g.name){I=l;break}I!==null?m[I]=g:m.push(g)})):y.forEach((function(g){m[g.name]=g}))}function A(m,p){Array.isArray(m)?m.forEach((function(d){p(d)})):Object.keys(m).forEach((function(d){p(m[d])}))}function N(m){if(m.ops=null,m.vars instanceof Array)for(var p=0;p<m.vars.length;p++)m.vars[p].data&&delete m.vars[p].data;else for(var d in m.vars)m.vars[d].data&&delete m.vars[d].data}u.r(v),u.d(v,{BufferType:()=>an,GraphType:()=>hn,UniformType:()=>Pn,WasmMemoryType:()=>ln});let S=w("env",new((function(){function m(){this.ENV={}}return m.prototype.set=function(p,d){this.ENV[p]=d},m.prototype.get=function(p){return this.ENV[p]},m})()));var U=function(m,p,d,y){return new(d||(d=Promise))((function(g,I){function l(h){try{a(y.next(h))}catch(f){I(f)}}function s(h){try{a(y.throw(h))}catch(f){I(f)}}function a(h){var f;h.done?g(h.value):(f=h.value,f instanceof d?f:new d((function(P){P(f)}))).then(l,s)}a((y=y.apply(m,p||[])).next())}))},$=function(m,p){var d,y,g,I,l={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return I={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(I[Symbol.iterator]=function(){return this}),I;function s(a){return function(h){return(function(f){if(d)throw new TypeError("Generator is already executing.");for(;l;)try{if(d=1,y&&(g=2&f[0]?y.return:f[0]?y.throw||((g=y.return)&&g.call(y),0):y.next)&&!(g=g.call(y,f[1])).done)return g;switch(y=0,g&&(f=[2&f[0],g.value]),f[0]){case 0:case 1:g=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,y=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(!((g=(g=l.trys).length>0&&g[g.length-1])||f[0]!==6&&f[0]!==2)){l=0;continue}if(f[0]===3&&(!g||f[1]>g[0]&&f[1]<g[3])){l.label=f[1];break}if(f[0]===6&&l.label<g[1]){l.label=g[1],g=f;break}if(g&&l.label<g[2]){l.label=g[2],l.ops.push(f);break}g[2]&&l.ops.pop(),l.trys.pop();continue}f=p.call(m,l)}catch(P){f=[6,P],y=0}finally{d=g=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}})([a,h])}}};let tn=(function(){function m(p){this.urlConf={dir:"",main:""},this.separateChunk=!0,this.chunkNum=1,this.dataType="binary",this.params={type:"fetch"},this.inNode=!1,this.isLocalFile=!1,this.realFetch=function(){throw new Error("ERROR: empty fetch funciton")};var d=p,y="model.json";if(p.endsWith(".json")){var g=p.lastIndexOf("/")+1;d=p.substr(0,g),y=p.substr(g)}else p.charAt(p.length-1)!=="/"&&(d=p+"/");this.isLocalFile=d.indexOf("http")!==0,this.urlConf={dir:this.isLocalFile?d.charAt(0)==="/"?""+d:"/"+d:d,main:y},this.inNode=S.get("platform")==="node"}return m.prototype.load=function(){return U(this,void 0,void 0,(function(){var p;return $(this,(function(d){switch(d.label){case 0:return[4,this.fetchModel()];case 1:return p=d.sent(),this.separateChunk=!!p.chunkNum&&p.chunkNum>0,this.chunkNum=this.separateChunk?p.chunkNum:0,this.separateChunk?this.dataType!=="binary"?[3,3]:[4,this.fetchChunks().then((function(y){return m.allocateParamsVar(p.vars,y)}))]:[3,3];case 2:d.sent(),d.label=3;case 3:return[2,p]}}))}))},m.prototype.fetchOneChunk=function(p){return U(this,void 0,void 0,(function(){return $(this,(function(d){switch(d.label){case 0:return S.get("fetch")?[4,S.get("fetch")(p,{type:"arrayBuffer"})]:[3,2];case 1:return[2,d.sent()];case 2:return[2,this.fetch(p).then((function(y){return y.arrayBuffer()}))]}}))}))},m.prototype.fetchJson=function(p){return this.fetch(p).then((function(d){return d.json()}))},m.prototype.getFileName=function(p){return"chunk_"+p+".dat"},m.prototype.fetchChunks=function(){return U(this,void 0,void 0,(function(){var p,d,y;return $(this,(function(g){for(p=this.chunkNum,d=[],y=1;y<=p;y++)d.push(this.fetchOneChunk(this.urlConf.dir+this.getFileName(y)));return[2,Promise.all(d).then((function(I){var l,s=0,a=[];I.forEach((function(P){l=new Float32Array(P),a.push(l),s+=l.length}));var h=new Float32Array(s),f=0;return a.forEach((function(P){P.forEach((function(_){h[f]=_,f+=1}))})),h}))]}))}))},m.allocateParamsVar=function(p,d){var y,g=0,I=Array.isArray(d)?d:Object.values(d);A(p,(function(l){y=l.shape.reduce((function(s,a){return s*a})),l.persistable&&(l.data=I.slice(g,g+y),g+=y)}))},m.prototype.fetch=function(p,d){if(S.get("fetch"))return S.get("fetch")(p,d||{});var y=(d||this.params).method||"get",g=new(this.inNode?u(911).Headers:Headers);return this.realFetch=this.inNode?this.isLocalFile?this.fetchLocalFile:u(911):window.fetch.bind(window),this.realFetch(p,{method:y,headers:g})},m.prototype.fetchLocalFile=function(p){var d=u(993);return new Promise((function(y,g){try{y(d.readFileSync(p,"utf8"))}catch(I){g(I)}}))},m.prototype.fetchModel=function(){var p=this,d=this.params,y=this.urlConf.dir+this.urlConf.main,g=null;return d.type==="fetch"&&(g=new Promise((function(I,l){p.fetch(y,d).then((function(s){return S.get("fetch")?s:p.isLocalFile&&p.inNode?JSON.parse(s):s.json()})).then((function(s){return I(s)})).then((function(s){return l(s)}))}))),g},m})();var an,ln,Pn,hn;(function(m){m.FrameBuffer="frameBuffer",m.ColorBuffer="colorBuffer"})(an||(an={})),(function(m){m.memory100="100",m.memory200="200",m.memory300="300",m.memory400="400",m.memory500="500",m.memory600="600",m.memory700="700",m.memory800="800",m.memory900="900"})(ln||(ln={})),(function(m){m.uniform1f="1f",m.uniform1fv="1fv",m.uniform1i="1i",m.uniform1iv="1iv",m.uniform2f="2f",m.uniform2fv="2fv",m.uniform2i="2i",m.uniform2iv="2iv",m.uniform3f="3f",m.uniform3fv="3fv",m.uniform3i="3i",m.uniform3iv="3iv",m.uniform4f="4f",m.uniform4fv="4fv",m.uniform4i="4i",m.uniform4iv="4iv"})(Pn||(Pn={})),(function(m){m.SingleOutput="single",m.MultipleOutput="multiple",m.MultipleInput="multipleInput"})(hn||(hn={}));var sn={opRegistry:{ops:{}},backend:"",backendInstance:null};function Gn(m,p){var d=m.conf,y=m.params,g=m.main,I=m.mainFunc,l=m.textureFuncConf,s=m.commonFuncConf,a=m.behaviors,h=a===void 0?[]:a,f=sn.backend+"_"+p;sn.opRegistry.ops[f]||(sn.opRegistry.ops[f]={name:p,conf:d,params:y,main:g,mainFunc:I,textureFuncConf:l,commonFuncConf:s,behaviors:h})}function Yn(m,p,d){m&&(sn.backend=m),p&&(sn.backendInstance=p),d&&Object.keys(d).forEach((function(y){Gn(d[y],y)}))}sn=w("GLOBALS",sn);var bn=x();bn.ImageBitmap||(bn.ImageBitmap=function(){});let R=(function(){function m(p,d){this.id="",this.type="",this.inputs={},this.outputs={},this.attrs={},this.subAttrs=[],this.next="",this.opData=null,this.isPacked=!1,this.bufferType=an.FrameBuffer,this.uniform=null;var y=p.inputs,g=p.outputs,I=p.attrs,l=I===void 0?{}:I,s=p.type,a=p.isPacked,h=a!==void 0&&a,f=p.bufferType,P=f===void 0?an.FrameBuffer:f,_=p.uniform,T=_===void 0?null:_;this.id=s+"_"+ +new Date+"_"+d,this.inputs=y,this.outputs=g,this.attrs=l,this.subAttrs=p["sub-attrs"]||[],this.uniform=T,this.type=s,this.isPacked=h,this.bufferType=P,this.next="",this.opData=null}return Object.defineProperty(m.prototype,"inputsName",{get:function(){var p=this,d=[];return Object.keys(this.inputs).forEach((function(y){d.push(p.inputs[y][0])})),d},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"outputsName",{get:function(){return this.outputs.Output||this.outputs.Out||this.outputs.Y},enumerable:!1,configurable:!0}),m.prototype.execute=function(p){sn.backendInstance.runProgram(this.opData,p)},m})(),V=function(m){this.name=m};var nn,un=(nn=function(m,p){return(nn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,y){d.__proto__=y}||function(d,y){for(var g in y)Object.prototype.hasOwnProperty.call(y,g)&&(d[g]=y[g])})(m,p)},function(m,p){function d(){this.constructor=m}nn(m,p),m.prototype=p===null?Object.create(p):(d.prototype=p.prototype,new d)}),J={conv2d:function(m,p){var d=m.attrs.strides,y=m.inputs.Input[0],g=m.inputs.Filter[0];if(y==="image")return!1;var I=F(p,y).shape,l=F(p,g).shape;return!d.find((function(s){return s>1}))&&I[I.length-1-2]%4==0&&l.length===4&&l[0]%4==0&&l[1]%4==0}};function xn(m){return{type:"packed_2_unpacked",attrs:{},inputs:{Input:[m.inputName]},outputs:{Output:[m.outputName]}}}function Cn(m){return{type:"unpacked_2_packed",attrs:{},inputs:{Input:[m.inputName]},outputs:{Output:[m.outputName]}}}function An(m,p){Object.keys(m.inputs).forEach((function(d){m.inputs[d]=[m.inputs[d]+"_packed"]})),Object.keys(m.outputs).forEach((function(d){m.outputs[d]=[m.outputs[d]+"_packed"]})),m.type=m.type+"_packing",m.id=m.type+"_"+ +new Date+"_"+p.length,m.isPacked=!0}let Nn=(function(m){function p(){return m.call(this,"TexturePacking")||this}return un(p,m),p.prototype.transform=function(){for(var d=[],y=0;y<arguments.length;y++)d[y]=arguments[y];if(sn.backend==="webgl"&&S.get("webgl_pack_channel")){var g=d[0],I=d[1],l=d[2],s=g.type==="depthwise_conv2d"?"conv2d":g.type,a=J[s];if(a&&a(g,I)){var h=g.inputs,f=g.outputs,P=h.Input[0],_=f.Output?f.Output[0]:f.Out[0],T=Cn({inputName:P,outputName:P+"_packed"}),b=l.length;l.push(new R(T,b)),An(g,l);var E=xn({inputName:_+"_packed",outputName:_}),C=l.length+1;l.push(new R(E,C))}}},p})(V);var mn=(function(){var m=function(p,d){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,g){y.__proto__=g}||function(y,g){for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&(y[I]=g[I])})(p,d)};return function(p,d){function y(){this.constructor=p}m(p,d),p.prototype=d===null?Object.create(d):(y.prototype=d.prototype,new y)}})();let Fn=(function(m){function p(){return m.call(this,"FormatInputsX")||this}return mn(p,m),p.prototype.transform=function(){for(var d=[],y=0;y<arguments.length;y++)d[y]=arguments[y];var g=d[0],I=["concat","connect","fc","rnn_origin","rnn_matmul","stack"];if(I.includes(g.type)){var l=g.inputs;if((g.type==="rnn_origin"||g.type==="rnn_matmul")&&l.WeightList.length>0)l.WeightList.forEach((function(_,T){l["weightlist_"+T]=[_]}));else{var s=l.X||l.Input;if(S.get("backend")!=="wasm")s.length>1&&(s.forEach((function(_,T){l["origin"+(T>0?"_"+T:"")]=[_]})),delete l.X,delete l.Input);else{if(s.length>4)throw Error("Not yet supporting concat input tensors more than 4.");if(s.length>1){var a=s[0],h=s[1],f=s[2],P=s[3];l.X=[a],h&&(l.Y=[h]),f&&(l.Z=[f],g.type+="_mul"),P&&(l.M=[P])}}}}},p})(V);var Sn=(function(){var m=function(p,d){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,g){y.__proto__=g}||function(y,g){for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&(y[I]=g[I])})(p,d)};return function(p,d){function y(){this.constructor=p}m(p,d),p.prototype=d===null?Object.create(d):(y.prototype=d.prototype,new y)}})(),ut=function(){for(var m=0,p=0,d=arguments.length;p<d;p++)m+=arguments[p].length;var y=Array(m),g=0;for(p=0;p<d;p++)for(var I=arguments[p],l=0,s=I.length;l<s;l++,g++)y[g]=I[l];return y};function ft(m,p){var d=F(p,m);return d?d.shape:[]}function ht(m,p,d,y){for(var g=ut(p),I=0,l=0,s=m;l<s.length;l++)I+=ft(s[l],y)[d];return g[d]=I,{name:m[m.length-1]+"_out",shape:g}}let Zn=(function(m){function p(){return m.call(this,"splitOp")||this}return Sn(p,m),p.prototype.transform=function(){for(var d,y=[],g=0;g<arguments.length;g++)y[g]=arguments[g];for(var I=y[0],l=y[1],s=0,a=I.length;s<a;s++){var h=I[s];if(h.type==="concat"&&(!((d=h.inputs)===null||d===void 0)&&d.X)&&!(h.inputs.X.length<=4)){var f=h.attrs,P=h.inputs,_=h.outputs,T=P.X,b=T.length,E=Math.ceil((b-4)/3)+1,C=_.Out[0],O=ft(C,l),L=f.axis||0;L=L>-1?L:O.length+L;for(var M=[],X=[],D=T.slice(0,4),k=void 0,W=0;W<E;W++){var j=W===0?D:T.slice(3*W+1,3*(W+1)+1),z=ht(j,O,L,l);W!==0&&j.splice(0,0,k.name),z.shape[L]+=k?k.shape[L]:0;var G={Out:[z.name]};X.push({attrs:f,inputs:{X:j},outputs:G,type:"concat"}),M.push(z),k=z}X[E-1].outputs.Out=[C],I.splice.apply(I,ut([s,1],X)),B(l,M)}}},p})(V);var Ft=function(){for(var m=0,p=0,d=arguments.length;p<d;p++)m+=arguments[p].length;var y=Array(m),g=0;for(p=0;p<d;p++)for(var I=arguments[p],l=0,s=I.length;l<s;l++,g++)y[g]=I[l];return y};function Kn(m){if(m.length<4){for(var p=[],d=0;d<4-m.length;d++)p.push(1);return p.concat(m)}return Ft(m)}function kt(m){return m.reduce((function(p,d){return p+d}))}function Wt(m,p){var d=m.length;return 4-d+(p>-1?p:d+p)}function Ot(m,p){for(var d=p[0],y=p[1],g=p[2],I=p[3],l=g*I,s=y*g*I,a=[],h=0;h<d;h++)for(var f=0;f<I;f++)for(var P=0;P<y;P++)for(var _=0;_<g;_++)a.push(m[h*s+P*l+_*I+f]);return new Float32Array(a)}function Ut(m){for(var p,d=m.data,y=m.shape,g=Ft(y).reverse(),I=0,l=g.length-1;I<l;I++)p=se(p||d,g[I]);return p}function se(m,p){for(var d=[],y=0,g=m.length;y<g;y+=p)d.push(m.slice(y,y+p));return d}var jt=(function(){var m=function(p,d){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,g){y.__proto__=g}||function(y,g){for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&(y[I]=g[I])})(p,d)};return function(p,d){function y(){this.constructor=p}m(p,d),p.prototype=d===null?Object.create(d):(y.prototype=d.prototype,new y)}})(),At="fetch_pack";let ae=(function(m){function p(){return m.call(this,"PackOut")||this}return jt(p,m),p.prototype.transform=function(){for(var d=[],y=0;y<arguments.length;y++)d[y]=arguments[y];if(S.get("webgl_pack_output")&&S.get("webglVersion")!==1){var g=d[0],I=d[1],l=g.find((function(L){return L.type==="fetch"})),s=l.inputs.X[0],a=F(I,s),h=Kn(a.shape),f=h[0],P=h[1],_=h[2],T=h[3],b={attrs:{},inputs:{X:[s]},outputs:{Y:[At]},type:"pack_out"},E=P*T,C=Math.ceil(f*_/4),O={name:At,shape:[1,1,C,E],persistable:!1};l.inputs.X=[At],l.attrs.origin_shape=[f,P,_,T],g.push(b),B(I,[O])}},p})(V);var Lt=(function(){var m=function(p,d){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,g){y.__proto__=g}||function(y,g){for(var I in g)Object.prototype.hasOwnProperty.call(g,I)&&(y[I]=g[I])})(p,d)};return function(p,d){function y(){this.constructor=p}m(p,d),p.prototype=d===null?Object.create(d):(y.prototype=d.prototype,new y)}})(),St="img_pre_processed",pt="img_origin";let Xt=(function(m){function p(){return m.call(this,"FeedProcess")||this}return Lt(p,m),p.prototype.transform=function(){for(var d=[],y=0;y<arguments.length;y++)d[y]=arguments[y];var g=d[0],I=d[1],l=d[2];if(l.webglFeedProcess||S.get("webgl_gpu_pipeline")){var s=l.mean,a=s===void 0?[0,0,0]:s,h=l.std,f=h===void 0?[1,1,1]:h,P=l.scale,_=P===void 0?[1,1]:P,T=l.pos,b=T===void 0?[0,0]:T,E=l.feedShape,C=F(I,"image"),O=C.shape,L=O[2],M=O[3];C.shape=[1,1,L,M];var X=Object.assign({},C);X.name=St,X.shape=[1,3,E.fh,E.fw],X.persistable=!1,delete X.data;var D=Object.assign({},C);D.name=pt,D.shape=[1,1,E.fh,E.fw],D.persistable=!1,delete D.data,B(I,[D,X]);var k=g.find((function(G){var q=G.inputs;return Object.keys(q).find((function(en){return q[en][0]==="image"}))})),W=k.inputs;Object.keys(W).forEach((function(G){W[G][0]==="image"&&(W[G][0]=St)}));var j={attrs:{mean:a,std:f},inputs:{X:[pt]},outputs:{Y:[St]},type:"feedPost"},z={attrs:{mean:a,std:f,scale:_,pos:b},inputs:{X:["image"]},outputs:{Y:[pt]},type:"imgFeed",uniform:{u_scale:{type:Pn.uniform2fv,value:[1,1]},u_pos:{type:Pn.uniform2fv,value:[0,0]},u_keep_ratio:{type:Pn.uniform1i,value:1}},isPacked:!0};g.splice(1,0,j),g.splice(1,0,z)}},p})(V),Nt={preTransforms:[new Zn,new ae,new Xt],transforms:[new Fn,new Nn],postTransforms:[]};var Qn,yt=function(){for(var m=0,p=0,d=arguments.length;p<d;p++)m+=arguments[p].length;var y=Array(m),g=0;for(p=0;p<d;p++)for(var I=arguments[p],l=0,s=I.length;l<s;l++,g++)y[g]=I[l];return y};function et(m,p){return m&&m[p]||[]}(function(m){m.PreTransforms="preTransforms",m.Transforms="transforms",m.PostTransforms="postTransforms"})(Qn||(Qn={}));let qn=(function(){function m(p,d){this.weightMap=[],this.ops=[],this.vars=[],this.config={},this.type=hn.SingleOutput,this.plugins=null,this.ops=p.ops,this.vars=p.vars,this.type=d.type||this.type,this.plugins=d.plugins,this.config=d,p.feedShape&&(this.config.feedShape=p.feedShape)}return m.prototype.createGraph=function(){return this.preTransforms(),this.createOpsMap(),this.arrangeMap(),this.postTransforms(),this.weightMap},m.prototype.preTransforms=function(){var p=this;yt(Nt.preTransforms,et(this.plugins,Qn.PreTransforms)).forEach((function(d){d.transform(p.ops,p.vars,p.config)}))},m.prototype.transforms=function(p,d){var y=this;yt(Nt.transforms,et(this.plugins,Qn.Transforms)).forEach((function(g){g.transform(p,y.vars,d)}))},m.prototype.postTransforms=function(){var p=this;yt(Nt.postTransforms,et(this.plugins,Qn.PostTransforms)).forEach((function(d){d.transform(p.weightMap,p.vars,p.type)}))},m.prototype.createOpsMap=function(){for(var p=[],d=0;d<this.ops.length;d++){var y=p.length,g=this.ops[d],I=new R(g,y);this.transforms(I,p),p.push(I)}this.weightMap=p},m.prototype.arrangeMap=function(){for(var p={},d=[],y={},g=function(s){for(var a=I.weightMap[s],h=0;h<a.outputsName.length;h++){var f=a.outputsName[h];p[f]=!0}d[s]=0,y[a.id]=s,a.inputsName.length>1?a.inputsName.forEach((function(P){p[P]===!0&&d[s]++})):d[s]=a.inputsName.length},I=this,l=0;l<this.weightMap.length;l++)g(l);this.topoSort(this.weightMap,d,y)},m.prototype.topoSort=function(p,d,y){var g=[];g.push(p[0]);for(var I=p.slice(0),l=null,s=p[0];g.length>0;){l!=null&&(p[y[l.id]].next=s.id),l=s,s=g.pop()||{};for(var a=0;a<s.outputsName.length;a++)for(var h=0;h<I.length;h++)for(var f=0;f<I[h].inputsName.length;f++)if(I[h].inputsName[f]===s.outputsName[a]&&(d[y[I[h].id]]--,d[y[I[h].id]]===0)){g.push(p[y[I[h].id]]),I.splice(h,1),h--;break}}},m.prototype.getFeedExecutor=function(){return this.weightMap.find((function(p){return p.type==="feed"}))},m.prototype.getFetchExecutor=function(){return this.weightMap.find((function(p){return p.type==="fetch"}))},m.prototype.getExecutorById=function(p){return this.weightMap.find((function(d){return d.id===p}))},m})(),Bt=(function(){function m(p){this.opts={},this.isPacked=!1,this.name="",this.tensorId="",this.total=1,this.shape=[],this.unformattedShapeLength=0,this.shape_texture=[],this.exceedMax=!1,this.data=null,this.persistable=!1,this.interpType="NEAREST",this.dataLayout="",this.runtime=0,this.binding=0;var d=p.isPacked,y=d!==void 0&&d,g=p.name,I=p.runtime,l=I===void 0?0:I,s=p.persistable,a=s!==void 0&&s,h=p.type,f=p.dataLayout,P=p.interpType,_=P===void 0?"NEAREST":P,T=p.shape,b=p.data,E=p.binding,C=E===void 0?0:E;this.opts=p,this.isPacked=y,this.name=g,this.runtime=l,this.binding=C,this.persistable=a,this.interpType=_,this.tensorId=h,this.dataLayout=f,this.unformattedShapeLength=T.length,this.shape=Kn(T),this.total=this.shape.reduce((function(O,L){return O*L})),p.noLayout||b&&b.length&&(this.data=(function(O,L,M,X){if(L==="nhwc"){var D=M[0],k=M[1],W=Ot(O,[D,M[2],M[3],k*(X?4:1)]);return new Float32Array(W)}return new Float32Array(O)})(b,this.dataLayout,this.shape,this.isPacked),p.data=null)}return Object.defineProperty(m.prototype,"width_texture",{get:function(){var p=this.shape_texture.length;return this.shape_texture[p-1]||1},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"height_texture",{get:function(){var p=this.shape_texture.length;return this.shape_texture[p-2]||1},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"width_shape",{get:function(){var p=this.shape.length;return this.shape[p-1]},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"height_shape",{get:function(){var p=this.shape.length;return this.shape[p-2]},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"channel",{get:function(){var p=this.shape.length;return this.shape[p-3]},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"length_shape",{get:function(){return this.shape.length||0},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"length_unformatted_shape",{get:function(){return this.unformattedShapeLength||0},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"total_shape",{get:function(){return this.total},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"numbers_shape",{get:function(){for(var p=[],d=this.shape.length,y=0;y<d-1;y++){var g=this.shape.slice(y+1).reduce((function(I,l){return I*l}));p.push(g)}return p.push(1),p},enumerable:!1,configurable:!0}),m})(),Ht={adaptPaddings:function(){for(var m in this.processedAttrs)if(Object.prototype.hasOwnProperty.call(this.processedAttrs,m)&&m==="paddings"){var p=this.processedAttrs[m],d=p[0],y=p[1];return void(d===0&&y===1&&(this.processedAttrs[m][1]=0))}},setAdaptive:function(){this.processedAttrs.adaptive&&this.processedAttrs.ksize.length===2&&this.processedAttrs.ksize[0]===1&&this.processedAttrs.ksize[1]===1&&(this.processedAttrs.adaptive=!1,this.processedAttrs.global_pooling=!0)},isGlobalPooling:function(){var m,p=this.tensorDataMap.origin,d=((m=p?.shape)===null||m===void 0?void 0:m.length)||0;d>2&&this.processedAttrs.global_pooling&&(this.processedAttrs.ksize=[p.shape[d-2],p.shape[d-1]])},setPacked:function(){var m=this.processedAttrs.ispacked;this.tensorDataMap.origin&&m&&this.name.indexOf("pool")>-1&&(this.name+="_winograd")},mergeAttrs:function(){this.processedAttrs=this.subAttrs.reduce((function(m,p){return Object.assign(m,p)}),{})},isApplySeparableConv:function(){if(!this.isPackedOp){var m=this.processedAttrs.groups,p=this.tensorDataMap.filter;if(this.name==="depthwise_conv2d"&&(this.name="conv2d"),p){var d=p.shape,y=d[0],g=d[1];y===m&&g===1&&(this.name+="_depthwise")}}},batchComputeConv2d:function(){var m=this.tensorDataMap.filter.shape[1];this.processedAttrs.filter_nearest_vec4=4*Math.floor(m/4),this.processedAttrs.filter_remainder_vec4=m%4},processBias:function(){var m=this.tensorDataMap.bias;if(m&&this.isPackedOp){m.packed=!0;var p=m.shape,d=[p[p.length-1]/4,1,1];m.shape=d}},isAdaptiveAvg:function(){var m=this.processedAttrs,p=m.adaptive,d=m.pooling_type;p&&d==="avg"&&(this.name+="_avg_adaptive")},isMax:function(){var m=this.processedAttrs.pooling_type==="max"?1:0;this.processedAttrs.pooling_type=m,m===1&&(this.name+="_max")},transToPrelu:function(){this.processedAttrs.multi_value="0.0",this.processedAttrs.active_function="prelu"},transToRelu6:function(){this.processedAttrs.multi_value=this.processedAttrs.threshold,this.processedAttrs.active_function="relu6"},transToHardSigmoid:function(){this.processedAttrs.multi_value=this.processedAttrs.slope||.2,this.processedAttrs.bias_value=this.processedAttrs.offset||.5,this.processedAttrs.active_function="hardSigmoid"},transToLeakyrelu:function(){this.processedAttrs.multi_value=this.processedAttrs.alpha,this.processedAttrs.active_function="leakyRelu",this.name="relu"},transToPow:function(){this.processedAttrs.multi_value=this.processedAttrs.factor||2,this.processedAttrs.active_function="pow_func",this.name="pow"},transToSigmoid:function(){this.processedAttrs.active_function="sigmoid"},transToSqrt:function(){this.processedAttrs.active_function="sqrt"},transToTanh:function(){this.processedAttrs.active_function="tanh_func"},transToExp:function(){this.processedAttrs.active_function="exp"},transToScale:function(){var m=this.processedAttrs.scale;this.processedAttrs.multi_value=m!==void 0?m:1,this.processedAttrs.bias_value=this.processedAttrs.bias||0;var p=this.processedAttrs.bias_after_scale;this.processedAttrs.active_function=p||p===void 0?"scale":"scaleWidthBias"},setActiveFunc:function(){var m=this.name.replace("conv2d-elementwise_add-","");this.processedAttrs=Object.assign({active_function:"scale",multi_value:"1.0",bias_value:"0.0",fuse_relu:!1},this.processedAttrs),m==="leaky_relu"&&(this.processedAttrs.multi_value=this.processedAttrs.alpha,this.processedAttrs.active_function="leakyRelu")},normalizePerm:function(){var m=this.tensorDataMap.origin.shape.length,p=this.processedAttrs.axis,d=p.length;if(d-m>0&&(d=(p=p.map((function(l){return l-1})).filter((function(l){return l>=0}))).length),d>4)throw Error("op transpoes2 axis length exceeds maximum length 4, get "+d);for(var y=new Array(d).fill(0),g=0;g<d;g++)y[p[g]]=g;var I=[];for(g=0;g<4;g++)I[g]=y[g]||0;this.processedAttrs.perm_arr=I,this.processedAttrs.perm_size=d},normalizeDim:function(){for(var m=this.tensorDataMap.origin.shape,p=Kn(m),d=Wt(m,this.processedAttrs.axis),y=[],g=0;g<p[d];g++)y[g]=g;if(this.processedAttrs.target_length=y.length,this.processedAttrs.target_value=y,this.processedAttrs.inputs_dim=p[d],this.processedAttrs.dim=d,this.processedAttrs.num===0&&(this.processedAttrs.num=Object.values(this.tensorDataMap).filter((function(P){return P.tensorName==="out"})).length||1),S.get("backend")==="wasm"){this.processedAttrs.fourInputs=!1;var I=this.tensorDataMap.counter;if(I){var l=Kn(I.shape);this.processedAttrs.counter_num=l[d]}var s=this.tensorDataMap.appender;if(s){var a=Kn(s.shape);this.processedAttrs.append_num=a[d]}var h=this.tensorDataMap.fourth;if(h){this.processedAttrs.fourInputs=!0;var f=Kn(h.shape);this.processedAttrs.fourth_num=f[d]}}},processElementwiseAxis:function(){var m=this.tensorDataMap.origin.shape,p=this.tensorDataMap.counter.shape,d=this.processedAttrs.axis===void 0?-1:this.processedAttrs.axis;this.processedAttrs.counterLen=p.length,kt(m)===kt(p)?(this.processedAttrs.axis=0,this.processedAttrs.counterLen=4):(d===-1&&(d=m.length-p.length),this.processedAttrs.axis=Wt(m,d))},genElementwiseCounterPos:function(){for(var m=this.processedAttrs,p=m.counterLen,d=["0","0","0","0"],y=m.axis,g=4-p;g<4;g++)d[g]="oPos["+y+++"]";this.processedAttrs.counterPos=d.join(",")},flattenShape:function(){var m=Object.values(this.tensorDataMap).find((function(d){return d.shape.length>2}));if(m){var p=Kn(m.shape);m.shape=[p[0]*p[2],p[1]*p[3]]}},reshape:function(){var m=this.tensorDataMap.origin,p=this.tensorDataMap.counter,d=this.tensorDataMap.out;if(p.shape.length>m.shape.length){var y=p;p=m,m=y}if(m.shape.length>2&&p.shape.length===2){var g=(function(I,l){I===void 0&&(I=[]),l===void 0&&(l=[]);var s=I.reduce((function(a,h){return a*h}));return l.length===1?[1,s]:[l[0],s/l[0]]})(m.shape,d.shape);m.shape=g}},checkIsMerge:function(){var m=this.name.replace("conv2d-elementwise_add-","");this.name="conv2d_elementwise_add",m==="leaky_relu"&&(this.processedAttrs.alpha&&(this.processedAttrs.multi_value=this.processedAttrs.alpha),this.processedAttrs.active_function="leakyRelu")}};var rt=function(){return(rt=Object.assign||function(m){for(var p,d=1,y=arguments.length;d<y;d++)for(var g in p=arguments[d])Object.prototype.hasOwnProperty.call(p,g)&&(m[g]=p[g]);return m}).apply(this,arguments)};let xt=(function(){function m(p,d,y,g,I){this.name="",this.isPackedOp=!1,this.processedAttrs={},this.subAttrs=[],this.uniform=null,this.inputTensors=[],this.outputTensors=[],this.dataLayout="",this.iLayer=0,this.program=[],this.isFinalOp=!1,this.bufferType=an.FrameBuffer,this.tensorDataMap={},this.tensorData=[];var l=p.type,s=p.inputs,a=p.outputs,h=p.attrs,f=p.isPacked,P=p.bufferType,_=P===void 0?an.FrameBuffer:P,T=p.uniform,b=T===void 0?null:T;this.modelName=I,this.subAttrs=p.subAttrs,this.name=l,this.isPackedOp=f,this.bufferType=_,this.dataLayout=y.dataLayout||"",this.iLayer=d,this.isFinalOp=g,this.uniform=b,this.initExtendedAttrs(h),this.constructTensorData(s,a,y.vars),this.buildTensor();var E=this.buildShaderParams();this.buildProgram(E)}return m.prototype.initExtendedAttrs=function(p){for(var d in p)if(Object.prototype.hasOwnProperty.call(p,d)){var y=p[d];this.processedAttrs[d]=y}},m.prototype.constructTensorData=function(p,d,y){var g=this;Object.keys(d).forEach((function(P){d[P].forEach((function(_,T){d[P][T]=g.getTensorVar(_,y)}))})),Object.keys(p).forEach((function(P){p[P]=[g.getTensorVar(p[P][0],y)]}));var I=function(P){if(Object.prototype.hasOwnProperty.call(d,P))try{var _=d[P]||[{}],T=l.getExactTensorName(P,"output");T&&_.forEach((function(b,E){b.tensorName=T,g.tensorDataMap[T+"_"+E]=rt(rt({},b),{tensorName:T,runtime:E})}))}catch(b){console.error(b)}},l=this;for(var s in d)I(s);for(var s in p)if(Object.prototype.hasOwnProperty.call(p,s)){var a=p[s].length>0?p[s]:[{}],h=this.getExactTensorName(s,"input");if(h){var f=a[0];f.tensorName=h,this.tensorDataMap[h]=rt(rt({},f),{tensorName:h})}}},m.prototype.getExactTensorName=function(p,d){return d==="input"?{input:"origin",x:"origin",y:"counter",w:"weight"}[p.toLowerCase()]||p.toLowerCase():{output:"out",y:"out",out:"out",scale:"scale",bias:"bias",mean:"mean",variance:"variance",mask:"out",boxes:"out",variances:"out"}[p.toLowerCase()]},m.prototype.getTensorVar=function(p,d){var y=F(d,p.replace(/_packed$/,""));return y&&p.endsWith("_packed")?(function(g,I){var l=g.shape.length===3?Ft([1],g.shape):g.shape,s=l[0],a=l[1],h=l[2],f=l[3],P=Object.assign({},g);if(P.name=I,P.packed=!1,a%4==0){var _=a/4;P.packed=!0,P.shape=[s,_,h,f]}return P})(y,p):y},m.prototype.buildProgram=function(p){var d=this,y=this.name,g=sn.backend+"_"+y,I=sn.opRegistry.ops[g];try{if(!I&&S.get("backend")!=="wasm")throw new Error("[unregistered op] "+y);var l=this.inputTensors;this.program=this.outputTensors.map((function(s,a){return sn.backendInstance.createProgram({op:I,outTensor:s,inputTensors:l,shaderParams:p[a],runtime:a,isFinalOp:d.isFinalOp})}))}catch(s){console.error(s)}},m.prototype.processTensorDataAndAttrs=function(){var p=this;try{this.name.indexOf("conv2d-elementwise_add")>-1?this.name="conv2d_elementwise_add":this.name.indexOf("max_pool2d_with_index")>-1&&(this.name="pool2d_max");var d=sn.backend+"_"+this.name;(sn.opRegistry.ops[d]&&sn.opRegistry.ops[d].behaviors||[]).forEach((function(y){try{Ht[y].call(p)}catch(g){console.error(g)}}))}catch(y){console.error(y)}},m.prototype.buildTensor=function(){var p=this;this.processTensorDataAndAttrs();var d=Object.values(this.tensorDataMap);d.forEach((function(y,g){var I,l=y.tensorName,s=new Bt({type:p.modelName+"_"+y.name,name:l,shape:y.shape,data:y.data||null,persistable:y.persistable||!1,interpType:y.interpType||"NEAREST",isPacked:p.isPackedOp||y.packed||!1,binding:g,noLayout:(I=sn.backendInstance)===null||I===void 0?void 0:I.noLayout,dataLayout:p.dataLayout,runtime:y.runtime||0});l==="out"?p.outputTensors.push(s):p.inputTensors.push(s),y.shape=s.shape,y.total=s.total})),this.tensorDataMap=null,this.tensorData=d},m.prototype.buildShaderParams=function(){var p=this,d=[];return this.outputTensors.forEach((function(){var y=JSON.parse(JSON.stringify(p.processedAttrs));d.push(y)})),d},m})();var Vn=function(){return(Vn=Object.assign||function(m){for(var p,d=1,y=arguments.length;d<y;d++)for(var g in p=arguments[d])Object.prototype.hasOwnProperty.call(p,g)&&(m[g]=p[g]);return m}).apply(this,arguments)};let Gt=(function(){function m(){this.targetContext={},this.gapFillWith="#fff",this.mean=[0,0,0],this.std=[1,1,1],this.bgr=!1,this.pixelWidth=1,this.pixelHeight=1,this.inputFeed=[],this.targetCanvas=S.get("canvas2d")||document.createElement("canvas"),this.targetContext=this.targetCanvas.getContext("2d")}return m.prototype.process=function(p,d,y){var g=d.fill,I=d.mean,l=d.std,s=d.bgr,a=d.keepRatio,h=a===void 0||a,f=d.scale,P=f===void 0?0:f,_=y.fc,T=_===void 0?3:_,b=y.fh,E=y.fw,C=p,O={gapFillWith:g||this.gapFillWith,mean:I||this.mean,std:l||this.std,bgr:s||this.bgr,keepRatio:h,scale:P,targetSize:{width:E,height:b},targetShape:[1,T,b,E]};return this.fromPixels(C,O)||[]},m.prototype.fromPixels=function(p,d){var y=[],g={gapFillWith:d.gapFillWith,dx:0,dy:0,dWidth:d.targetSize.width,dHeight:d.targetSize.height},I=p,l=p.path&&p.width&&p.height;if(!l&&!(p instanceof ImageBitmap||p instanceof HTMLVideoElement||p instanceof HTMLImageElement||p instanceof HTMLCanvasElement))return[{data:y,shape:d.shape||d.targetShape,name:"image",persistable:!0}];this.pixelWidth=p.naturalWidth||p.width,this.pixelHeight=p.naturalHeight||p.height;var s=S.get("webgl_gpu_pipeline")||d.webglFeedProcess;return this.fitToTargetSize(l?I.path:I,g,Vn(Vn({},d),{inGPU:s})),y=this.getImageData(g),s?[{data:y=Float32Array.from(y.data),shape:[1,1,g.dHeight,g.dWidth],name:"image",persistable:!0}]:[{data:y=this.allReshapeToRGB(y,d),shape:d.targetShape||d.shape,name:"image",persistable:!0}]},m.prototype.allReshapeToRGB=function(p,d){for(var y=d.mean,g=d.std,I=d.targetShape,l=d.bgr,s=d.normalizeType,a=s===void 0?0:s,h=I[1],f=I[2],P=I[3],_=p.data||p,T=new Float32Array(f*P*h),b=0,E=0;E<f;++E)for(var C=E*P,O=0;O<P;++O)for(var L=C+O,M=0;M<h;++M){var X=l?4*L+(2-M):4*L+M;T[b]=a===0?_[X]/255:(_[X]-128)/128,T[b]-=y[M],T[b]/=g[M],b++}return Ot(T,[1,f,P,h])},m.prototype.fitToTargetSize=function(p,d,y){var g=y||{},I=g.keepRatio,l=I===void 0||I,s=g.inGPU,a=s!==void 0&&s,h=g.scale,f=h===void 0?0:h,P=d.dWidth,_=d.dHeight,T=a?this.pixelWidth:P,b=a?this.pixelHeight:_,E=a?this.pixelWidth:P,C=a?this.pixelHeight:_,O=0,L=0;if(f){if(E-P<0||C-_<0)throw new Error("scale size smaller than target size");this.pixelWidth>this.pixelHeight?(C=f,E=Math.round(C*this.pixelWidth/this.pixelHeight)):(E=f,C=Math.round(E*this.pixelHeight/this.pixelWidth)),this.targetCanvas.width=T=E,this.targetCanvas.height=b=C,d.dx=(E-P)/2,d.dy=(C-_)/2}else l&&(P/_*this.pixelHeight/this.pixelWidth>=1?a?(T=Math.round(C*P/_),O=Math.floor((T-E)/2)):(E=Math.round(C*this.pixelWidth/this.pixelHeight),O=Math.floor((P-E)/2)):a?(b=Math.round(E*_/P),L=Math.floor((b-C)/2)):(C=Math.round(E*this.pixelHeight/this.pixelWidth),L=Math.floor((_-C)/2))),this.targetCanvas.width=d.dWidth=T,this.targetCanvas.height=d.dHeight=b;this.targetContext.fillStyle=d.gapFillWith,this.targetContext.fillRect(0,0,this.targetCanvas.width,this.targetCanvas.height),this.targetContext.drawImage(p,O,L,E,C)},m.prototype.getImageData=function(p){var d=p.dx,y=p.dy,g=p.dWidth,I=p.dHeight;return this.targetContext.getImageData(d,y,g,I)},m.prototype.cover=function(p,d,y,g){var I=y,l=g;return y/g*d/p>=1?I=Math.round(l*p/d):l=Math.round(I*d/p),[I/y,l/g]},m})();var $n=function(){return($n=Object.assign||function(m){for(var p,d=1,y=arguments.length;d<y;d++)for(var g in p=arguments[d])Object.prototype.hasOwnProperty.call(p,g)&&(m[g]=p[g]);return m}).apply(this,arguments)};function qt(m,p,d){for(var y=[],g=0,I=m.length;g<I;g++){var l=m[g];l>p&&y.push({score:l,i:g})}return y.sort((function(s,a){return a.score-s.score})).slice(0,d)}function zt(m){var p=m[0],d=m[1],y=m[2],g=m[3];return y<p||g<d?0:(y-p)*(g-d)}function le(m,p){if(p[0]>m[2]||p[2]<m[0]||p[1]>m[3]||p[3]<m[1])return 0;var d=zt(m),y=zt(p),g=(function(I,l){var s=I[0],a=I[1],h=I[2],f=I[3],P=l[0],_=l[1],T=l[2],b=l[3],E=Math.max(s,P),C=Math.max(a,_);return(Math.min(h,T)-E)*(Math.min(f,b)-C)})(m,p);return g/(d+y-g)}let ue={multiclass_nms:function(m,p){var d=m[0],y=d===void 0?[]:d,g=m[1],I=g===void 0?[]:g,l=Ut(y),s=Ut(I);if(!l||!s)return[];if(l=l[0],s=s[0],!(l&&l.length&&s&&s.length))return[];for(var a=p.nms_top_k,h=a===void 0?100:a,f=p.nms_eta,P=f===void 0?1:f,_=p.keep_top_k,T=_===void 0?100:_,b=p.background_label,E=b===void 0?0:b,C=p.nms_threshold,O=C===void 0?.3:C,L=p.score_threshold,M=L===void 0?0:L,X=[],D=0,k=s.length;D<k;D++){var W=[];if(D!==E){var j=qt(s[D],M,h);if(j&&j.length){var z=j.shift(),G=l[z.i];for(W.push($n($n({},z),{box:G,label:D}));j.length;){var q=j.shift();G=l[q.i];for(var en=!0,cn=0,H=W;cn<H.length;cn++)if(le(G,H[cn].box)>O){en=!1;break}en&&W.push($n($n({},q),{box:G,label:D})),en&&P<1&&O>.5&&(O*=P)}X=X.concat(W)}}}var Q=X.sort((function(Z,K){return K.score-Z.score})).slice(0,T).sort((function(Z,K){return Z.label-K.label})).map((function(Z){return(function(){for(var K=0,rn=0,vn=arguments.length;rn<vn;rn++)K+=arguments[rn].length;var gn=Array(K),yn=0;for(rn=0;rn<vn;rn++)for(var Tn=arguments[rn],_n=0,On=Tn.length;_n<On;_n++,yn++)gn[yn]=Tn[_n];return gn})([Z.label,Z.score],Z.box)}));return Q&&Q.length?Q:[]}};var wn=function(m,p,d,y){return new(d||(d=Promise))((function(g,I){function l(h){try{a(y.next(h))}catch(f){I(f)}}function s(h){try{a(y.throw(h))}catch(f){I(f)}}function a(h){var f;h.done?g(h.value):(f=h.value,f instanceof d?f:new d((function(P){P(f)}))).then(l,s)}a((y=y.apply(m,p||[])).next())}))},zn=function(m,p){var d,y,g,I,l={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return I={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(I[Symbol.iterator]=function(){return this}),I;function s(a){return function(h){return(function(f){if(d)throw new TypeError("Generator is already executing.");for(;l;)try{if(d=1,y&&(g=2&f[0]?y.return:f[0]?y.throw||((g=y.return)&&g.call(y),0):y.next)&&!(g=g.call(y,f[1])).done)return g;switch(y=0,g&&(f=[2&f[0],g.value]),f[0]){case 0:case 1:g=f;break;case 4:return l.label++,{value:f[1],done:!1};case 5:l.label++,y=f[1],f=[0];continue;case 7:f=l.ops.pop(),l.trys.pop();continue;default:if(!((g=(g=l.trys).length>0&&g[g.length-1])||f[0]!==6&&f[0]!==2)){l=0;continue}if(f[0]===3&&(!g||f[1]>g[0]&&f[1]<g[3])){l.label=f[1];break}if(f[0]===6&&l.label<g[1]){l.label=g[1],g=f;break}if(g&&l.label<g[2]){l.label=g[2],l.ops.push(f);break}g[2]&&l.ops.pop(),l.trys.pop();continue}f=p.call(m,l)}catch(P){f=[6,P],y=0}finally{d=g=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}})([a,h])}}};let Jt=(function(){function m(p){this.runnerConfig={},this.isPaused=!1,this.model={},this.weightMap=[],this.isExecuted=!1,this.test=!1,this.graphGenerator={},this.mediaProcessor=null,this.needPreheat=!0,this.feedShape={},this.runnerConfig=Object.assign({},p),this.needPreheat=p.needPreheat===void 0||p.needPreheat,this.modelName=p.modelName||Date.now().toString(),this.weightMap=[],S.set("ns",x()),S.get("platform")!=="node"&&(this.mediaProcessor=new Gt)}return m.prototype.init=function(){return wn(this,void 0,void 0,(function(){var p;return zn(this,(function(d){switch(d.label){case 0:return sn.backendInstance?(this.isExecuted=!1,S.get("backend")!=="wasm"?[3,2]:[4,Promise.all([this.load(),sn.backendInstance.init()])]):(console.error("ERROR: Haven't register backend"),[2]);case 1:return d.sent(),[3,5];case 2:return[4,sn.backendInstance.init()];case 3:return d.sent(),[4,this.load()];case 4:d.sent(),d.label=5;case 5:return this.genFeedData(),this.genGraph(),this.genOpData(),S.get("backend")!=="wasm"?[3,7]:(this.model=Object.assign(this.model,this.runnerConfig),p=this.model,[4,sn.backendInstance.initWasm(this.model,this.weightMap)]);case 6:return p.index=d.sent(),[2,[]];case 7:return this.needPreheat?[4,this.preheat()]:[3,9];case 8:return[2,d.sent()];case 9:return[2]}}))}))},m.prototype.load=function(){return wn(this,void 0,void 0,(function(){var p,d,y,g,I,l,s,a;return zn(this,(function(h){switch(h.label){case 0:return p=this.runnerConfig,d=p.modelPath,y=p.modelObj,g=y===void 0?null:y,d?(I=new tn(d),l=this,[4,I.load()]):[3,2];case 1:return l.model=h.sent(),[3,3];case 2:g?.model&&g?.params&&(s=g.model,a=g.params,tn.allocateParamsVar(s.vars,a),this.model=s),h.label=3;case 3:return[2]}}))}))},m.prototype.genGraph=function(){this.graphGenerator=new qn(this.model,this.runnerConfig),this.weightMap=this.graphGenerator.createGraph()},m.prototype.genOpData=function(){var p=this,d=0;this.weightMap.forEach((function(y,g){var I=y.type;if(I!=="feed"&&I!=="fetch"){d++;var l=g===p.weightMap.length-2,s=new xt(y,d,p.model,l,p.modelName);y.opData=s}})),N(this.model)},m.prototype.preheat=function(){return wn(this,void 0,void 0,(function(){var p;return zn(this,(function(d){switch(d.label){case 0:return[4,this.checkModelLoaded()];case 1:return d.sent(),[4,this.execute()];case 2:return p=d.sent(),this.isExecuted=!0,[2,p]}}))}))},m.prototype.checkModelLoaded=function(){return wn(this,void 0,void 0,(function(){return zn(this,(function(p){switch(p.label){case 0:return this.weightMap.length!==0?[3,2]:(console.info("It's better to preheat the model before running."),[4,this.load()]);case 1:p.sent(),this.genFeedData(),this.genGraph(),this.genOpData(),this.isExecuted=!1,p.label=2;case 2:return[2]}}))}))},m.prototype.predict=function(p,d){return wn(this,void 0,void 0,(function(){var y,g,I;return zn(this,(function(l){switch(l.label){case 0:return this.isPaused||!this.mediaProcessor?[2]:(y=[],y=this.runnerConfig.webglFeedProcess?[p]:this.mediaProcessor.process(p,this.runnerConfig,this.feedShape),g=[],S.get("backend")!=="wasm"?[3,3]:[4,sn.backendInstance.predict(y[0].data,this.model.index)]);case 1:return l.sent(),[4,this.read()];case 2:return I=l.sent(),g=this.postProcess(I),[3,5];case 3:return this.updateFeedData(y),[4,this.execute()];case 4:g=l.sent(),l.label=5;case 5:return this.isExecuted=!0,[2,d?d(g):g]}}))}))},m.prototype.predictWithFeed=function(p,d,y){var g;return wn(this,void 0,void 0,(function(){var I,l,s,a,h,f,P,_,T,b,E,C;return zn(this,(function(O){switch(O.label){case 0:return I=this.feedShape,l=I.fc,s=l===void 0?3:l,a=I.fw,h=I.fh,Array.isArray(p)?!((g=p[0])===null||g===void 0)&&g.data?((b=p[0].data)instanceof Float32Array||(p[0].data=new Float32Array(b)),f=p):f=[{data:new Float32Array(p),shape:y||[1,s,h,a],name:"image",persistable:!0}]:(_=(P=p).width,T=P.height,b=P.data,f=[{data:new Float32Array(b),shape:y||[1,s,T||h,_||a],name:"image",persistable:!0}]),E=[],S.get("backend")!=="wasm"?[3,3]:[4,sn.backendInstance.predict(f[0].data,this.model.index)];case 1:return O.sent(),[4,this.read()];case 2:return C=O.sent(),E=this.postProcess(C),[3,5];case 3:return this.updateFeedData(f),[4,this.execute()];case 4:E=O.sent(),O.label=5;case 5:return this.isExecuted=!0,[2,d?d(E):E]}}))}))},m.prototype.genFeedData=function(){var p,d=this.runnerConfig,y=d.type,g=d.feedShape,I=d.webglFeedProcess;this.feedShape=this.model.feedShape||g;var l,s=this.feedShape,a=s.fc,h=a===void 0?3:a,f=s.fh,P=s.fw,_=this.model.vars;if(y===hn.MultipleInput){var T=this.model.ops&&this.model.ops[0]&&((p=this.model.ops[0].inputs)===null||p===void 0?void 0:p.X);T.length>1&&(l=T.map((function(C){var O=F(_,C),L=O.shape.reverse(),M=L[0],X=L[1],D=L[2],k=L[3],W=k===void 0?1:k;return O.data=new Float32Array(W*D*X*M),O})))}else{var b=S.get("backend")!=="wasm"&&I?4:h;l=F(_,"image");var E={name:"image",shape:[1,b,f,P]};l=Object.assign(E,l,{data:new Float32Array(b*f*P).fill(1),persistable:!0})}B(_,l)},m.prototype.updateFeedData=function(p){var d=p[0],y=this.weightMap.find((function(W){return W.opData?W.opData.inputTensors.find((function(j){return j.tensorId.endsWith("_image")})):null})),g=y.opData.inputTensors.find((function(W){return W.tensorId.endsWith("_image")}));g.data=d.data;var I=this.runnerConfig,l=I.webglFeedProcess,s=l!==void 0&&l,a=I.keepRatio,h=a===void 0||a;if(s||S.get("webgl_gpu_pipeline")){var f=d.shape||[1,1,d.height,d.width],P=new Uint8Array(d.data||[]);if(d.width&&d.height&&!d.data){var _=d.naturalWidth||d.width;f=[1,1,d.naturalHeight||d.height,_],P=d}var T=g.opts;T.shape=f;var b=y.opData,E=new Bt(T);E.data=P,b.inputTensors=[E];var C=f.slice(-2),O=C[0],L=C[1],M=b.outputTensors[0].shape.slice(-2),X=M[0],D=M[1],k=this.mediaProcessor.cover(L,O,D,X);y.uniform.u_scale.value=k,y.uniform.u_keep_ratio.value=+h}},m.prototype.execute=function(){return wn(this,void 0,void 0,(function(){var p,d;return zn(this,(function(y){switch(y.label){case 0:return p=this.graphGenerator.getFeedExecutor(),this.executeOp(p),[4,this.read()];case 1:return d=y.sent(),[2,this.postProcess(d)]}}))}))},m.prototype.postProcess=function(p){var d=S.get("backend")==="wasm";if(S.get("debug"))return p;var y=p,g=this.model,I=g.multiOutputs,l=g.postOps;if(I)if(d)y=I.map((function(_,T){var b;return(b={})[_.name]=p[T],b}));else{var s=0;y=I.map((function(_){var T,b=_.shape.reduce((function(C,O){return C*O})),E=p.slice(s,b+s);return s+=b,(T={})[_.name]=E,T}))}if(I&&l&&l.length)for(var a=function(_,T){var b=l[_],E=b.type,C=b.attrs,O=b.inputs,L=ue[E];if(!L)return{value:void 0};var M=(function(){for(var D=0,k=0,W=arguments.length;k<W;k++)D+=arguments[k].length;var j=Array(D),z=0;for(k=0;k<W;k++)for(var G=arguments[k],q=0,en=G.length;q<en;q++,z++)j[z]=G[q];return j})(y),X=Object.keys(O).map((function(D){var k=O[D],W=k.name,j=k.shape,z=M.filter((function(G){return G[W]}));return z&&z[0]&&z[0][W]?{name:D,tensorId:W,data:z[0][W],shape:j}:(console.error("\u672A\u83B7\u53D6\u5230"+W+"\u7684\u6570\u636E"),null)}));y=L(X,C)},h=0,f=l.length;h<f;h++){var P=a(h);if(typeof P=="object")return P.value}return y},m.prototype.executeOp=function(p){var d;if(p.type!=="fetch"){if(p.type!=="feed"&&p.execute(this.isExecuted),S.get("debug")&&((d=p.opData)===null||d===void 0?void 0:d.outputTensors)&&p.opData.outputTensors[p.opData.outputTensors.length-1]&&p.opData.outputTensors[p.opData.outputTensors.length-1].tensorId===this.modelName+"_"+(S.get("ns").layerName||S.get("layerName")))console.info(p.opData.name+"_"+p.opData.iLayer,"runner op");else if(p.next){var y=p.next,g=this.graphGenerator.getExecutorById(y);this.executeOp(g)}}},m.prototype.read=function(){return wn(this,void 0,void 0,(function(){var p,d,y;return zn(this,(function(g){switch(g.label){case 0:return p=this.graphGenerator.getFetchExecutor(),d=F(this.model.vars,p.inputs.X[0]),y={name:d.name,shape:p.attrs.origin_shape||d.shape,index:this.model.index},[4,sn.backendInstance.read(y)];case 1:return[2,g.sent()]}}))}))},m.prototype.stopPredict=function(){this.isPaused=!0},m})(),fe=function(){}},993:()=>{}},t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}return e.d=(r,i)=>{for(var u in i)e.o(i,u)&&!e.o(r,u)&&Object.defineProperty(r,u,{enumerable:!0,get:i[u]})},e.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),e.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),e.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e(994)})()}))});var Ae=ot((Mt,de)=>{(function(n,t){typeof Mt=="object"&&typeof de=="object"?de.exports=t():typeof define=="function"&&define.amd?define([],t):typeof Mt=="object"?Mt.paddlejs=t():(n.paddlejs=n.paddlejs||{},n.paddlejs.webglBackend=t())})(Mt,(function(){return(()=>{"use strict";var n={400:(r,i,u)=>{u.r(i),u.d(i,{GLHelper:()=>bn,glInstance:()=>I,ops:()=>g,webgl_types:()=>c});var c={};u.r(c),u.d(c,{UniformType:()=>S});var v={};u.r(v),u.d(v,{exp_func:()=>Kn,hardSigmoid:()=>ft,leakyRelu:()=>mn,pow_func:()=>Zn,prelu:()=>An,relu6:()=>Nn,scale:()=>Fn,scaleWidthBias:()=>Sn,sigmoid:()=>ut,sqrt:()=>ht,tanh_func:()=>Ft,transferFromNHWCtoNCHW:()=>Cn});var x={};function w(){var l;if(typeof window<"u")l=window;else if(u.g!==void 0)l=u.g;else{if(typeof self>"u")throw new Error("Could not find a global object");l=self}return l}function F(l,s){var a=w();return a[l]||(a[l]=s),a[l]}u.r(x),u.d(x,{getPixelsFromTexturePos:()=>Ut,getSamplerCode:()=>jt,getTensorPosFromArrayIndex:()=>Ot,getValueFromTensorPos:()=>kt,getValueFromTensorPosPacking:()=>Wt,moveTexture2PosToReal:()=>se});var B={opRegistry:{ops:{}},backend:"",backendInstance:null};B=F("GLOBALS",B);var A=w();A.ImageBitmap||(A.ImageBitmap=function(){});let N=F("env",new((function(){function l(){this.ENV={}}return l.prototype.set=function(s,a){this.ENV[s]=a},l.prototype.get=function(s){return this.ENV[s]},l})()));var S;(function(l){l.uniform1f="1f",l.uniform1fv="1fv",l.uniform1i="1i",l.uniform1iv="1iv",l.uniform2f="2f",l.uniform2fv="2fv",l.uniform2i="2i",l.uniform2iv="2iv",l.uniform3f="3f",l.uniform3fv="3fv",l.uniform3i="3i",l.uniform3iv="3iv",l.uniform4f="4f",l.uniform4fv="4fv",l.uniform4i="4i",l.uniform4iv="4iv"})(S||(S={}));var U;function $(l){for(var s=l.length,a=(function(){for(var f=0,P=0,_=arguments.length;P<_;P++)f+=arguments[P].length;var T=Array(f),b=0;for(P=0;P<_;P++)for(var E=arguments[P],C=0,O=E.length;C<O;C++,b++)T[b]=E[C];return T})(l),h=[];s>1;)a.splice(0,1),h.push(a.reduce((function(f,P){return f*P}))),s--;return h}function tn(l,s){if(l.length===1)return"float "+s+" = float("+l[0]+");";for(var a=l.length,h=`
        vec`+a+" "+s+" = vec"+a+`(
    `,f=0;f<a;f++)h+="float("+l[f]+"),";return h.slice(0,-1)+");"}function an(l,s,a){if(l.length===0)return"";if(N.get("webglVersion")===2)return l.reduce((function(f,P,_){return f+(_<l.length-1?a+"("+P+"), ":a+"("+P+"));")}),a+" "+s+"[] = "+a+"[](");var h=l.reduce((function(f,P,_){return f+`
            `+s+"["+_+"] = "+a+"("+P+");"}),"");return`
        `+a+" "+s+"["+l.length+`];
        `+h+`
    `}function ln(l,s,a){if(l.length===0)return"";var h=l.reduce((function(f,P,_){return f+(_===0?`
            `+a+" res = "+a+`(0);
            if (index == `+_+`) {
                res = arr[`+_+`];
            }`:`
            else if (index == `+_+`) {
                res = arr[`+_+`];
            }`)}),"");return`
    `+a+" getValueFromArrByIndex_"+s+"("+a+"["+l.length+`] arr, int index) {
        `+(N.get("webglVersion")===2?a+" res = arr[index];":h)+`
        return res;
    }
    `}(function(l){l.INT_TYPE="int",l.FLOAT_TYPE="float"})(U||(U={}));var Pn,hn;(function(l){l[l.VS_SHADER=0]="VS_SHADER",l[l.FS_SHADER=1]="FS_SHADER"})(Pn||(Pn={})),(function(l){l[l.FLOAT_VEC2=35664]="FLOAT_VEC2",l[l.FLOAT_VEC3=35665]="FLOAT_VEC3",l[l.FLOAT_VEC4=35666]="FLOAT_VEC4",l[l.INT_VEC2=35667]="INT_VEC2",l[l.INT_VEC3=35668]="INT_VEC3",l[l.INT_VEC4=35669]="INT_VEC4",l[l.BOOL=35670]="BOOL",l[l.BOOL_VEC2=35671]="BOOL_VEC2",l[l.BOOL_VEC3=35672]="BOOL_VEC3",l[l.BOOL_VEC4=35673]="BOOL_VEC4",l[l.FLOAT_MAT2=35674]="FLOAT_MAT2",l[l.FLOAT_MAT3=35675]="FLOAT_MAT3",l[l.FLOAT_MAT4=35676]="FLOAT_MAT4",l[l.SAMPLER_2D=35677]="SAMPLER_2D",l[l.SAMPLER_CUBE=35678]="SAMPLER_CUBE",l[l.FLOAT=5126]="FLOAT",l[l.INT=5124]="INT"})(hn||(hn={}));var sn,Gn=function(l,s,a){this.size=l,this.type=s,this.location=a},Yn=function(l,s,a){this.size=l,this.type=s,this.location=a},bn=(function(){function l(){}return l.getWebglVersion=function(){return N.get("webglVersion")},l.createCanvas=function(){return N.get("canvas")||document&&document.createElement("canvas")},l.setWebglVersion=function(s){N.set("webglVersion",s)},l.setWebGLRenderingContext=function(s){return this.gl=s,s},l.getWebGLRenderingContext=function(){return this.gl?this.gl:this.createWebGLRenderingContext()},l.createWebGLRenderingContext=function(){if(this.gl)return this.gl;var s=this.createCanvas();if(!s)return null;s.addEventListener&&s.addEventListener("webglcontextlost",(function(h){throw h.preventDefault(),Error("webgl context is lost~")}),!1);var a=s.getContext("webgl2",this.WEBGL_ATTRIBUTES);return a?N.set("webglVersion",2):(N.set("webglVersion",1),a=s.getContext("webgl",this.WEBGL_ATTRIBUTES)||s.getContext("experimental-webgl",this.WEBGL_ATTRIBUTES)),a},l.printStates=function(s){console.log("1. isBlendEnable = "+s.isEnabled(s.BLEND)),console.log("2. isCullFaceEnable = "+s.isEnabled(s.CULL_FACE)),console.log("3. isDepthTestEnable = "+s.isEnabled(s.DEPTH_TEST)),console.log("4. isDitherEnable = "+s.isEnabled(s.DITHER)),console.log("5. isPolygonOffsetFillEnable = "+s.isEnabled(s.POLYGON_OFFSET_FILL)),console.log("6. isSampleAlphtToCoverageEnable = "+s.isEnabled(s.SAMPLE_ALPHA_TO_COVERAGE)),console.log("7. isSampleCoverageEnable = "+s.isEnabled(s.SAMPLE_COVERAGE)),console.log("8. isScissorTestEnable = "+s.isEnabled(s.SCISSOR_TEST)),console.log("9. isStencilTestEnable = "+s.isEnabled(s.STENCIL_TEST))},l.printWebGLInfo=function(s){console.log("renderer = "+s.getParameter(s.RENDERER)),console.log("version = "+s.getParameter(s.VERSION)),console.log("vendor = "+s.getParameter(s.VENDOR)),console.log("glsl version = "+s.getParameter(s.SHADING_LANGUAGE_VERSION))},l.printWebGLTextureInfo=function(s){console.log("MAX_COMBINED_TEXTURE_IMAGE_UNITS = ",s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),console.log("MAX_TEXTURE_IMAGE_UNITS = ",s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS)),console.log("MAX_TEXTURE_SIZE = ",s.getParameter(s.MAX_TEXTURE_SIZE)),console.log("MAX_CUBE_MAP_TEXTURE_SIZE = ",s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE))},l.triggerContextLostEvent=function(s){var a=s.getExtension("WEBGL_lose_context");a!==null&&a.loseContext()},l.checkGLError=function(s){var a=s.getError();return a!==0&&(console.log("WebGL Error NO: ",a),!0)},l.setDefaultState=function(s){s.clearColor(0,0,0,0),s.clearDepth(1),s.enable(s.DEPTH_TEST),s.enable(s.CULL_FACE),s.enable(s.SCISSOR_TEST)},l.setViewport=function(s,a){s.viewport(a[0],a[1],a[2],a[3])},l.initShader=function(s,a,h){var f=this.createShader(s,a);return this.compileShader(s,h,f),f},l.createShader=function(s,a){var h;if((h=a===Pn.VS_SHADER?s.createShader(s.VERTEX_SHADER):s.createShader(s.FRAGMENT_SHADER))===null)throw new Error("WebGLShader\u521B\u5EFA\u5931\u8D25\uFF01");return h},l.compileShader=function(s,a,h){return s.shaderSource(h,a),s.compileShader(h),s.getShaderParameter(h,s.COMPILE_STATUS)!==!1||(console.error(s.getShaderInfoLog(h)),s.deleteShader(h),!1)},l.createProgram=function(s){var a=s.createProgram();if(a===null)throw new Error("WebGLProgram\u521B\u5EFA\u5931\u8D25\uFF01");return a},l.linkProgram=function(s,a,h,f,P,_){return P===void 0&&(P=null),_===void 0&&(_=null),s.attachShader(a,h),s.attachShader(a,f),P!==null&&P(s,a),s.linkProgram(a),s.getProgramParameter(a,s.LINK_STATUS)===!1?(console.error(s.getProgramInfoLog(a)),s.deleteShader(h),s.deleteShader(f),s.deleteProgram(a),!1):(s.validateProgram(a),s.getProgramParameter(a,s.VALIDATE_STATUS)===!1?(console.error(s.getProgramInfoLog(a)),s.deleteShader(h),s.deleteShader(f),s.deleteProgram(a),!1):(_!==null&&_(s,a),!0))},l.getProgramActiveAttribs=function(s,a,h){for(var f=s.getProgramParameter(a,s.ACTIVE_ATTRIBUTES),P=0;P<f;P++){var _=s.getActiveAttrib(a,P);_&&(h[_.name]=new Yn(_.size,_.type,s.getAttribLocation(a,_.name)))}},l.getProgramAtciveUniforms=function(s,a,h){for(var f=s.getProgramParameter(a,s.ACTIVE_UNIFORMS),P=0;P<f;P++){var _=s.getActiveUniform(a,P);if(_){var T=s.getUniformLocation(a,_.name);T!==null&&(h[_.name]=new Gn(_.size,_.type,T))}}},l.createBuffer=function(s){var a=s.createBuffer();if(a===null)throw new Error("WebGLBuffer\u521B\u5EFA\u5931\u8D25\uFF01");return a},l.getColorBufferData=function(s){var a=new Uint8Array(s.drawingBufferWidth*s.drawingBufferHeight*4);return s.readPixels(0,0,s.drawingBufferWidth,s.drawingBufferHeight,s.RGBA,s.UNSIGNED_BYTE,a),a},l.setUniformParam=function(s,a,h,f){switch(h){case S.uniform1f:s.uniform1f(a,f);break;case S.uniform1fv:s.uniform1fv(a,f);break;case S.uniform1i:s.uniform1i(a,f);break;case S.uniform1iv:s.uniform1iv(a,f);break;case S.uniform2f:s.uniform2f(a,f[0],f[1]);break;case S.uniform2fv:s.uniform2fv(a,f);break;case S.uniform2i:s.uniform2i(a,f[0],f[1]);break;case S.uniform2iv:s.uniform2iv(a,f);break;case S.uniform3f:s.uniform3f(a,f[0],f[1],f[2]);break;case S.uniform3fv:s.uniform3fv(a,f);break;case S.uniform3i:s.uniform3i(a,f[0],f[1],f[2]);break;case S.uniform3iv:s.uniform3iv(a,f);break;case S.uniform4f:s.uniform4f(a,f[0],f[1],f[2],f[3]);break;case S.uniform4fv:s.uniform4fv(a,f);break;case S.uniform4i:s.uniform4i(a,f[0],f[1],f[2],f[3]);break;case S.uniform4iv:s.uniform4iv(a,f);break;default:console.error("["+h+"]: unknown uniform type")}},l.genTextureInfoFromTensorShape=function(s,a){var h=s||4096,f=a.shape,P=f===void 0?[]:f,_=P[0],T=P[1],b=P[2],E=P[3];if(_*b<=h&&T*E<=h)a.shape_texture=[_*b,T*E];else{var C=(function(){for(var G=0,q=0,en=arguments.length;q<en;q++)G+=arguments[q].length;var cn=Array(G),H=0;for(q=0;q<en;q++)for(var Q=arguments[q],Z=0,K=Q.length;Z<K;Z++,H++)cn[H]=Q[Z];return cn})(P).sort((function(G,q){return G-q})),O=C[0],L=C[1],M=C[2],X=O*C[3],D=L*M;if(X>h||D>h){var k=[X,D].sort((function(G,q){return G-q})),W=k[0],j=k[1],z=(function(G,q){var en=q;if(G%en==0)return en;for(;en<G&&G%en!=0;)en++;return en})(j,Math.ceil(j/h));if(X=W*z,D=Math.ceil(j/z),N.get("debug")&&console.error("\u5927\u5C0F\u8D85\u9650",P,[D,X]),X>h||D>h)throw new Error("Requested texture size ["+X+"x"+D+"] greater than WebGL maximum on this browser / GPU ["+h+"x"+h+"].")}a.shape_texture=[D,X]}},l.WEBGL_ATTRIBUTES={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0,powerPreference:"high-performance"},l.gl=null,l})();(function(l){l[l.GL_REPEAT=0]="GL_REPEAT",l[l.GL_MIRRORED_REPEAT=1]="GL_MIRRORED_REPEAT",l[l.GL_CLAMP_TO_EDGE=2]="GL_CLAMP_TO_EDGE"})(sn||(sn={}));var R=(function(){function l(){}return l.getTextureConfig=function(s){var a,h,f,P,_,T,b,E,C=s,O=!0,L=!0;return N.get("webglVersion")===2?(a=C.getExtension("EXT_color_buffer_float"),f=C.HALF_FLOAT,P=C.R32F,_=C.RGBA32F,T=C.R16F,b=C.RGBA16F,h=C.RED,E=C.RGBA32F):(P=C.RGBA,T=C.RGBA,b=C.RGBA,_=C.RGBA,h=C.RGBA,E=C.RGBA,a=C.getExtension("OES_texture_float"),f=C.getExtension("OES_texture_half_float").HALF_FLOAT_OES,O=this.isDownloadFloatTextureEnabled(C,E),L=this.isFloatTextureReadPixelsEnabledMethod(C,1,O)),{textureFloat:a,textureHalfFloat:f,internalFormat:P,internalFormatPacked:_,internalFormatHalfFloat:T,internalFormatPackedHalfFloat:b,textureFormat:h,downloadInternalFormat:E,frameBufferSupportFloat:O,isFloatTextureReadPixelsEnabled:L}},l.isFloatTextureReadPixelsEnabledMethod=function(s,a,h){var f=s;if(a===0)return!1;if(a===1){if(f.getExtension("OES_texture_float")==null)return!1}else if(f.getExtension("EXT_color_buffer_float")==null||f.getExtension("EXT_color_buffer_half_float")==null)return!1;var P=f.createFramebuffer(),_=f.createTexture();f.bindTexture(f.TEXTURE_2D,_);var T=a===2?f.RGBA32F:f.RGBA;f.texImage2D(f.TEXTURE_2D,0,T,1,1,0,f.RGBA,h?f.FLOAT:f.getExtension("OES_texture_half_float").HALF_FLOAT_OES,null),f.bindFramebuffer(f.FRAMEBUFFER,P),f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,_,0);var b=f.checkFramebufferStatus(f.FRAMEBUFFER)===f.FRAMEBUFFER_COMPLETE;f.readPixels(0,0,1,1,f.RGBA,f.FLOAT,new Float32Array(4));var E=f.getError()===f.NO_ERROR;return b&&E},l.isDownloadFloatTextureEnabled=function(s,a){var h=s.createTexture();s.bindTexture(s.TEXTURE_2D,h),s.texImage2D(s.TEXTURE_2D,0,a,1,1,0,s.RGBA,s.FLOAT,null);var f=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,f),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,h,0);var P=s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE;return s.bindTexture(s.TEXTURE_2D,null),s.bindFramebuffer(s.FRAMEBUFFER,null),s.deleteTexture(h),s.deleteFramebuffer(f),P},l.uploadDataToTexture=function(s,a,h,f){s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var P=h.width_texture,_=h.height_texture,T=h.data,b=s.RGBA,E=s.RGBA,C=s.FLOAT,O=T;if(T instanceof Uint8Array||T instanceof Uint8ClampedArray)C=s.UNSIGNED_BYTE;else{if(!(T instanceof Float32Array||T instanceof Array))return void s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,T);if(N.get("webglVersion")===2){var L=N.get("webgl_force_half_float_texture");b=f?L?a.internalFormatPackedHalfFloat:a.internalFormatPacked:L?a.internalFormatHalfFloat:a.internalFormat,E=f?s.RGBA:a.textureFormat}else{for(var M=new Float32Array(P*_*4),X=0;X<T.length;X++)f?M[X]=T[X]:(M[4*X]=T[X],M[4*X+1]=0,M[4*X+2]=0,M[4*X+3]=0);O=M}}s.texImage2D(s.TEXTURE_2D,0,b,P,_,0,E,C,O)},l.genOutputTexture=function(s,a,h,f){var P=h.interpType,_=h.width_texture,T=h.height_texture,b=s.createTexture();s.bindTexture(s.TEXTURE_2D,b),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,P==="LINEAR"?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,P==="LINEAR"?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);var E=N.get("webgl_force_half_float_texture"),C=E?a.internalFormatPackedHalfFloat:a.internalFormatPacked,O=N.get("webglVersion")===2?E?s.HALF_FLOAT:s.FLOAT:a.frameBufferSupportFloat?s.FLOAT:a.textureHalfFloat,L=f?a.isFloatTextureReadPixelsEnabled?O:s.UNSIGNED_BYTE:null;return s.texImage2D(s.TEXTURE_2D,0,C,_,T,0,s.RGBA,f?L:O,null),s.bindTexture(s.TEXTURE_2D,null),b},l})(),V=[`
    precision highp float;
    precision highp int;

    attribute vec4 position;
    varying vec2 vCoord;

    void main() {
        vCoord.x = (position.x + 1.0) / 2.0;
        vCoord.y = (position.y + 1.0) / 2.0;
        gl_Position = position;
    }
    `,`#version 300 es
    in vec4 position;
    out vec2 vCoord;

    void main() {
        vCoord.x = (position.x + 1.0) / 2.0;
        vCoord.y = (position.y + 1.0) / 2.0;
        gl_Position = position;
    }
    `],nn=new Float32Array([-1,1,-1,-1,1,1,1,-1]),un=["length_shape","length_unformatted_shape","width_shape","height_shape","width_texture","height_texture","offset_x","offset_y","channel","total_shape","numbers_shape"],J={float:["multi_value","bias_value"],bool:["fuse_relu"]};function xn(){return`
    `+(N.get("useModAdaptor")?`
            int calMod(int a, int b) {
                float modV = mod(float(a), float(b));
                if (modV == float(b)) {
                    modV = 0.0;
                }
                return int(modV);
            }
        `:`
            int calMod(int a, int b) {
                return a - a / b * b;
            }
        `)+`
    `+(N.get("useDivisionAdaptor")?`
            int calDivision(int a, int b) {
                return int(float(a) / (float(b) - 0.0001));
            }
        `:`
            int calDivision(int a, int b) {
                return a / b;
            }
        `)+`
    
    float tanh_calc(float num) {
        float res = (exp(2.0 * num) - 1.0) / (exp(2.0 * num) + 1.0);
        return res;
    }
    
    `}let Cn=`
ivec4 transferFromNHWCtoNCHW(
    int sumVal,
    const int channel,
    const int width_shape,
    const int height_shape,
    const int total_shape) {

    int n_origin = int(total_shape/(channel * width_shape * height_shape));
    int new_a = calMod(sumVal, width_shape);
    sumVal = int((sumVal - new_a) / width_shape);
    int new_b = calMod(sumVal, height_shape);
    sumVal = int((sumVal - new_b) / height_shape);
    int new_g = calMod(sumVal, channel);
    sumVal = int((sumVal - new_g) / channel);
    int new_r = calMod(sumVal, n_origin);
    return ivec4(new_r,new_g,new_b,new_a);
}
`;var An=`
float prelu(float x, float p, float b) {
    float result = x;
    if (x < 0.0) {
        result = x * p;
    }

    return result;
}`,Nn=`
float relu6(float x, float threshold, float b) {
    float result = min(max(0.0, x), threshold);
    return result;
}`,mn=`
float leakyRelu(float x, float p, float b) {
    float result = max(x, x * p);
    return result;
}`,Fn=`
float scale(float x, float p, float b) {
    float result = p * x + b;
    return result;
}`,Sn=`
float scaleWidthBias(float x, float p, float b) {
    float result = p * (x + b);
    return result;
}`,ut=`
float sigmoid(float x, float y, float z) {
    float result = 1.0 / (1.0 + exp(-x));
    return result;
}`,ft=`
    float hardSigmoid(float x, float slope, float offset) {
        float result = max(0.0, min(1.0, slope * x + offset));
        return result;
    }
`,ht=`
    float sqrt(float x, float slope, float offset) {
        return sqrt(x);
    }
`,Zn=`
    float pow_func(float x, float factor, float offset) {
        return pow(x, factor);
    }
`,Ft=`
float tanh_func(float x, float y, float z) {
    return tanh_calc(x);
}`,Kn=`
float exp_func(float x, float y, float z) {
    float result = exp(x);
    return result;
}`;function kt(l,s){var a=s.width_shape,h=s.height_shape,f=s.channel,P=s.width_texture;return`
    float getValueFromTensorPos_`+l+`(int n, int c, int h, int w) {
        int index = n * `+a*h*f+" + c * "+a*h+" + h * "+a+` + w;
        // 0.01 hack: \u5728 PC/WISE \u673A\u5668\u4E0A\uFF0C\u51FA\u73B0\u67D0\u4E2A\u503C\uFF08\u6BD4\u5982 index \u4E3A 3520\uFF09 float(index) \u548C float(3520) \u8FD4\u56DE\u503C\u4E0D\u540C\u7684\u60C5\u51B5\uFF0C\u76EE\u524D +0.01 hack
        int pos_w = int(mod(float(index) + 0.01, float(`+P+`)));
        int pos_h = index / int(`+P+`);
        vec4 pixels = TEXTURE2D(texture_`+l+`,
            vec2(
                (float(pos_w)  + 0.5) / float(`+P+`),
                (float(pos_h) + 0.5) / float(`+s.height_texture+`)
            )
        );
        return pixels.r;
    }`}function Wt(l,s){var a=s.channel,h=s.height_shape,f=s.width_texture,P=s.height_texture,_=s.width_shape;return`
    vec4 getValueFromTensorPosPacking_`+l+`(int n, int c, int h, int w) {
        int index = n * `+_*h*a+" + c * "+_*h+" + h * "+_+` + w;
        // 0.01 hack: \u5728 PC/WISE \u8BBE\u5907\u4E0A\uFF0C\u51FA\u73B0\u67D0\u4E2A\u503C\uFF08\u6BD4\u5982 index \u4E3A 3520\uFF09 float(index) \u548C float(3520) \u8FD4\u56DE\u503C\u4E0D\u540C\u7684\u60C5\u51B5\uFF0C\u76EE\u524D +0.01 hack
        int pos_w = int(mod(float(index) + 0.01, float(`+f+`)));
        int pos_h = index / int(`+f+`);
        vec4 pixels = TEXTURE2D(texture_`+l+`,
            vec2(
                (float(pos_w)  + 0.5) / float(`+f+`),
                (float(pos_h) + 0.5) / float(`+P+`)
            )
        );
        return pixels;
    }`}function Ot(l,s){var a=s.numbers_shape,h=s.length_shape;if(h===1)return`
            int getTensorPosFromArrayIndex_`+l+`(int n) {
                return calMod(n, `+a[0]+`);
            }
        `;for(var f="ivec"+h+"("+a.join(", ")+")",P="pos[0] = n / "+a[0]+";",_=1;_<h;_++)P+=`
            n = calMod(n, `+a[_-1]+`);
            pos[`+_+"] = calDivision(n, "+a[_]+`);
        `;return`
    ivec`+h+" shapeVec_"+l+" = "+f+`;
    ivec`+h+" getTensorPosFromArrayIndex_"+l+`(int n) {
        ivec`+h+` pos;
        `+P+`
        return pos;
    }
    `}function Ut(l){return`
    #define getPixelsFromTexturePos_`+l+"(pos) TEXTURE2D(texture_"+l+`, pos)
    `}function se(l,s){return`
    vec2 moveTexture2PosToReal_`+l+`(vec2 v) {
        vec2 v2;
        v2.x = v.x * float(`+s.width_texture+`);
        v2.y = v.y * float(`+s.height_texture+`);
        return v2;
    }
    `}function jt(l){return"uniform sampler2D texture_"+l+";"}function At(l,s,a,h,f){var P,_,T="",b=s.name,E=s.mainFunc,C=s.textureFuncConf,O=C===void 0?{}:C,L=s.commonFuncConf;try{var M=(function(H,Q,Z){for(var K={},rn=Object.assign({},Q),vn=[],gn=0,yn=H;gn<yn.length;gn++){for(var Tn=yn[gn],_n=Tn.name,On={},Bn=0,Dn=un;Bn<Dn.length;Bn++)Tn[Rn=Dn[Bn]]!==void 0&&(On[Rn]=Tn[Rn]);K[_n]=On,vn.push(_n)}for(var En=0,Xn=Object.keys(J);En<Xn.length;En++)for(var Tt=Xn[En],it=0,Jn=J[Tt];it<Jn.length;it++){var Rn;Q[Rn=Jn[it]]!==void 0&&(rn[Rn]=Tt+"("+Q[Rn]+")")}return Q.active_function&&(rn.active_function=Q.active_function),rn.runtime=Z,{textureParams:K,opParams:rn,active_function:Q.active_function}})(a,h,f),X=M.textureParams,D=M.opParams,k=M.active_function,W=N.get("webglVersion")===2?` #version 300 es
            #ifdef GL_FRAGMENT_PRECISION_HIGH
            precision highp float;
            precision highp int;
        #else
            precision mediump float;
            precision mediump int;
        #endif      
        `:` #ifdef GL_FRAGMENT_PRECISION_HIGH
            precision highp float;
            precision highp int;
        #else
            precision highp float;
            precision highp int;
        #endif
        `,j=(function(H){var Q=H.frameBufferSupportFloat,Z=H.isFinalOp,K=H.isFloatTextureReadPixelsEnabled;return N.get("webglVersion")===2?`
        // \u9876\u70B9shader\u900F\u4F20\u7684\u6750\u8D28\u5750\u6807
        in vec2 vCoord;
        out vec4 outColor;
        void setOutput(float result) {
            result = fuse_op(result);
            outColor.r = result;
        }
        void setPackedOutput(vec4 result) {
            outColor = result;
        }
        int calCeil(int a, int b) {
            return int(ceil(float(a) / float(b)));
        }
        `+xn()+`
    `:Q?`
            varying vec2 vCoord;
            varying vec4 outColor;
            void setOutput(float result) {
                result = fuse_op(result);
                gl_FragColor.r = result;
            }
            void setPackedOutput(vec4 result) {
                gl_FragColor = result;
            }
            int calCeil(int a, int b) {
                return int(ceil(float(a) / float(b)));
            }
            `+xn()+`
    `:Z&&!K?`
        varying vec2 vCoord;
        varying vec4 outColor;

        const float FLOAT_MAX = 1.70141184e38;
        const float FLOAT_MIN = 1.17549435e-38;

        #define isnan(value) isnan_custom(value)
        bool isnan_custom(float val) {
            return (val > 0. || val < 1. || val == 0.) ? false : true;
        }

        `+xn()+`

        int calCeil(int a, int b) {
            return int(ceil(float(a) / float(b)));
        }

        lowp vec4 encode_float(highp float v) {
            if (isnan(v)) {
            return vec4(255, 255, 255, 255);
            }

            highp float av = abs(v);

            if(av < FLOAT_MIN) {
            return vec4(0.0, 0.0, 0.0, 0.0);
            } else if(v > FLOAT_MAX) {
            return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
            } else if(v < -FLOAT_MAX) {
            return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
            }

            highp vec4 c = vec4(0,0,0,0);

            highp float e = floor(log2(av));
            highp float m = exp2(fract(log2(av))) - 1.0;

            c[2] = floor(128.0 * m);
            m -= c[2] / 128.0;
            c[1] = floor(32768.0 * m);
            m -= c[1] / 32768.0;
            c[0] = floor(8388608.0 * m);

            highp float ebias = e + 127.0;
            c[3] = floor(ebias / 2.0);
            ebias -= c[3] * 2.0;
            c[2] += floor(ebias) * 128.0;

            c[3] += 128.0 * step(0.0, -v);

            return c / 255.0;
        }

        void setOutput(float result) {
                result = fuse_op(result);
                gl_FragColor = encode_float(result);
        }
        `:`
            #define isnan(value) isnan_custom(value)
            bool isnan_custom(float val) {
                return (val > 0. || val < 1. || val == 0.) ? false : true;
            }

            varying vec2 vCoord;
            varying vec4 outColor;
            void setOutput(float result) {
                result = fuse_op(result);
                if(isnan(result)) {
                    gl_FragColor.r = 0.0;
                }else {
                    gl_FragColor.r = result;
                }
            }

            void setPackedOutput(vec4 result) {
                gl_FragColor = result;
            }

            `+xn()+`

            int calCeil(int a, int b) {
                return int(ceil(float(a) / float(b)));
            }
        `})(l),z=(function(H){var Q="",Z="";if(H.fuse_opt)for(var K in H.fuse_opt){var rn=K,vn=0,gn=0;switch(K){case"scale":var yn=H.fuse_opt.scale.bias_after_scale;vn=(_n=H.fuse_opt.scale.scale)!==void 0?_n:1,gn=H.fuse_opt.scale.bias||0,yn===!1&&yn!==void 0&&(rn="scaleWidthBias");break;case"relu":rn="prelu";break;case"relu6":vn=H.fuse_opt[K].threshold;break;case"hard_sigmoid":rn="hardSigmoid",vn=H.fuse_opt[K].slope||.2,gn=H.fuse_opt[K].offset||.5;break;case"leakyRelu":vn=H.fuse_opt[K].alpha;break;case"pow":rn="pow_func",vn=H.fuse_opt[K].factor||2;break;case"tanh":rn="tanh_func";break;case"exp":rn="exp_func"}if(K==="hard_swish"){var Tn=H.fuse_opt.hard_swish.offset!==void 0?H.fuse_opt.hard_swish.offset:3,_n=H.fuse_opt.hard_swish.scale!==void 0?H.fuse_opt.hard_swish.scale:6;Z+="res = res * min(max(0.0, res + float("+Tn+")), float("+(H.fuse_opt.hard_swish.threshold!==void 0?H.fuse_opt.hard_swish.threshold:6)+")) / float("+_n+");"}else K==="dropout"?Z+=`
                if (`+(H.fuse_opt.dropout.dropout_implementation==="downgrade_in_infer")+`) {
                    res = res * (1.0 - float(`+H.fuse_opt.dropout.dropout_prob+`));
                }`:(Q+=v[rn],Z+="res = "+rn+"(res, float("+vn+"), float("+gn+"));")}return`
        `+Q+`
        
        float fuse_op(float x) {
            float res = x;
            `+Z+`
            return res;
        }
    `})(D),G=(function(H,Q,Z,K){if(!H)return"";var rn=Object.assign({},H);rn["@all"]&&(function(En,Xn){var Tt=Xn.filter((function(Jn){return Jn.name!=="out"})),it=En["@all"];Tt.forEach((function(Jn){var Rn=Jn.name;En[Rn]?En[Rn].concat(it):En[Rn]=it})),delete En["@all"]})(rn,K);for(var vn="",gn="",yn=0,Tn=Object.keys(rn);yn<Tn.length;yn++){var _n=Tn[yn];if(Q[_n]){gn+=jt(_n);for(var On=0,Bn=rn[_n];On<Bn.length;On++){var Dn=Bn[On];if(x[Dn])try{vn+=x[Dn](_n,Q[_n],Z)}catch(En){console.error(En)}}}}return`
    `+gn+`
    `+vn+`
    `})(O,X,D,a),q=(function(H){return H===void 0?"":`
        int layer_run_time = `+H+`;
    `})(f),en=(function(H){var Q,Z,K,rn,vn;return`
        
    vec2 _2d_shape_texture_out = vec2(float(`+H.width_texture+"), float("+H.height_texture+`));
    
        `+(Z=(Q=H).height_shape,K=Q.width_shape,`
    ivec4 getOutputTensorPos() {
        vec2 outCoord = vCoord.xy * (_2d_shape_texture_out);
        int index = int(outCoord.x) + int(outCoord.y) * int(`+Q.width_texture+`);

        int n1 = int(index / `+(rn=K*Z*Q.channel)+`);
        int c1 = int(calMod(index, `+rn+") / "+(vn=K*Z)+`);
        int h1 = int(calMod(index, `+vn+") / "+K+`);
        int w1 = calMod(index, `+K+`);
        return ivec4(n1, c1, h1, w1);
    }
    
    `)})(X.out),cn=(function(H){if(!H)return"";for(var Q="",Z=0,K=H;Z<K.length;Z++){var rn=K[Z];v[rn]&&(Q+=v[rn])}return Q})(L);P=T=" "+W+`
            `+z+`
            `+j+`
            `+cn+`
            `+(k?v[k]:"")+`
            `+G+`
            `+q+`
            `+en+`
            `+E(X,D)+`
        `,_=N.get("webglVersion")===1?"texture2D":"texture",T=P.replace(/\bTEXTURE2D\b/g,_)}catch(H){console.error("["+b+"]: "+H)}return T}let ae=(function(){function l(s,a,h,f){var P=s;this.vShader=a;try{this.fShader=this.initShader(P,h,"fragment"),this.shape=f&&f.shape;var _=this.program=P.createProgram();P.attachShader(_,this.vShader),P.attachShader(_,this.fShader),P.linkProgram(_)}catch(T){throw new Error(T)}}return l.prototype.initShader=function(s,a,h){h===void 0&&(h="vertex");var f,P=h==="vertex"?s.VERTEX_SHADER:s.FRAGMENT_SHADER;if(h==="vertex"&&this.vShader)f=this.vShader;else if(f=s.createShader(P),h==="vertex"&&(this.vShader=f),s.shaderSource(f,a),s.compileShader(f),!s.getShaderParameter(f,s.COMPILE_STATUS))throw new Error("compile: "+s.getShaderInfoLog(f));return f},l.prototype.setProgram=function(s,a,h){s.useProgram(this.program),h||this.runVertexShader(s,a)},l.prototype.runVertexShader=function(s,a){var h=s.getAttribLocation(this.program,"position");s.enableVertexAttribArray(h),s.bindBuffer(s.ARRAY_BUFFER,a),s.vertexAttribPointer(h,2,s.FLOAT,!1,0,0)},l.Sampler="uSampler",l})();var Lt,St=(Lt=function(l,s){return(Lt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,h){a.__proto__=h}||function(a,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(a[f]=h[f])})(l,s)},function(l,s){function a(){this.constructor=l}Lt(l,s),l.prototype=s===null?Object.create(s):(a.prototype=s.prototype,new a)}),pt=function(l,s,a,h){return new(a||(a=Promise))((function(f,P){function _(E){try{b(h.next(E))}catch(C){P(C)}}function T(E){try{b(h.throw(E))}catch(C){P(C)}}function b(E){var C;E.done?f(E.value):(C=E.value,C instanceof a?C:new a((function(O){O(C)}))).then(_,T)}b((h=h.apply(l,s||[])).next())}))},Xt=function(l,s){var a,h,f,P,_={label:0,sent:function(){if(1&f[0])throw f[1];return f[1]},trys:[],ops:[]};return P={next:T(0),throw:T(1),return:T(2)},typeof Symbol=="function"&&(P[Symbol.iterator]=function(){return this}),P;function T(b){return function(E){return(function(C){if(a)throw new TypeError("Generator is already executing.");for(;_;)try{if(a=1,h&&(f=2&C[0]?h.return:C[0]?h.throw||((f=h.return)&&f.call(h),0):h.next)&&!(f=f.call(h,C[1])).done)return f;switch(h=0,f&&(C=[2&C[0],f.value]),C[0]){case 0:case 1:f=C;break;case 4:return _.label++,{value:C[1],done:!1};case 5:_.label++,h=C[1],C=[0];continue;case 7:C=_.ops.pop(),_.trys.pop();continue;default:if(!((f=(f=_.trys).length>0&&f[f.length-1])||C[0]!==6&&C[0]!==2)){_=0;continue}if(C[0]===3&&(!f||C[1]>f[0]&&C[1]<f[3])){_.label=C[1];break}if(C[0]===6&&_.label<f[1]){_.label=f[1],f=C;break}if(f&&_.label<f[2]){_.label=f[2],_.ops.push(C);break}f[2]&&_.ops.pop(),_.trys.pop();continue}C=s.call(l,_)}catch(O){C=[6,O],h=0}finally{a=f=0}if(5&C[0])throw C[1];return{value:C[0]?C[1]:void 0,done:!0}})([b,E])}}};let Nt=(function(l){function s(){var a=l.call(this)||this;return a.cacheTextures={},a.uniformLocations={},a.texturesMap={},a.queryList=[],a.currentTexture=null,a.width_shape_out=1,a.height_shape_out=1,a.width_texture_out=1,a.height_texture_out=1,a.channel=0,a.total_shape=0,a}return St(s,l),s.prototype.init=function(){return pt(this,void 0,void 0,(function(){var a;return Xt(this,(function(h){return a=this.gl=bn.createWebGLRenderingContext(),this.gl?(this.glVersion=bn.getWebglVersion(),this.textureConf=R.getTextureConfig(a),this.MAX_TEXTURE_SIZE=N.get("MAX_TEXTURE_SIZE")||a.getParameter(a.MAX_TEXTURE_SIZE),a.disable(a.DEPTH_TEST),a.disable(a.STENCIL_TEST),a.disable(a.BLEND),a.disable(a.DITHER),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SAMPLE_COVERAGE),a.enable(a.SCISSOR_TEST),a.enable(a.CULL_FACE),a.cullFace(a.BACK),this.vertexBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,nn,a.STATIC_DRAW),this.vShader=bn.initShader(a,Pn.VS_SHADER,V[this.glVersion-1]),this.frameBuffer=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer),this.pbo=a.createBuffer(),[2]):[2]}))}))},s.prototype.createProgram=function(a){var h=this,f=a.op,P=a.outTensor,_=a.inputTensors,T=a.shaderParams,b=a.runtime,E=a.isFinalOp,C=null;try{var O=(function(){for(var X=0,D=0,k=arguments.length;D<k;D++)X+=arguments[D].length;var W=Array(X),j=0;for(D=0;D<k;D++)for(var z=arguments[D],G=0,q=z.length;G<q;G++,j++)W[j]=z[G];return W})([P],_);O.forEach((function(X){return bn.genTextureInfoFromTensorShape(h.MAX_TEXTURE_SIZE,X)}));var L=At(this.textureConf,f,O,T,b);(C=new ae(this.gl,this.vShader,L,P)).fsCode=L;var M=R.genOutputTexture(this.gl,this.textureConf,P,E);this.texturesMap[P.tensorId]=M,this.program=C}catch(X){console.error("webgl createProgram: "+f.name+" -- "+X)}return C},s.prototype.runProgram=function(a,h){var f=this,P=(function(T,b){if(b===2&&N.get("performance")){var E=T.getExtension("EXT_disjoint_timer_query_webgl2");if(!E)return;var C=T.createQuery();return T.beginQuery(E.TIME_ELAPSED_EXT,C),C}return null})(this.gl,this.glVersion),_=a.isPackedOp;a.program.forEach((function(T,b){var E=a.outputTensors[b],C=E.tensorId;f.setOutProps(E),a.bufferType==="frameBuffer"?f.attachFrameBuffer(C):f.attachColorBuffer(),T.setProgram(f.gl,f.vertexBuffer,h),f.program=T,f.render(a,h,b,_)})),a.tensorData=null,P&&(this.queryList.push({name:a.name,query:P,count:1}),P=(function(T,b,E){if(b===2&&N.get("performance")){var C=T.getExtension("EXT_disjoint_timer_query_webgl2");if(!C)return;T.endQuery(C.TIME_ELAPSED_EXT)}return E})(this.gl,this.glVersion,P))},s.prototype.read=function(a){return pt(this,void 0,void 0,(function(){var h,f,P;return Xt(this,(function(_){switch(_.label){case 0:return N.get("webgl_gpu_pipeline")?(h=this.gl,this.frameBuffer=h.createFramebuffer(),h.bindFramebuffer(h.FRAMEBUFFER,this.frameBuffer),[2,[]]):(f=this.createPBO(),[4,this.createAndWaitForFence()]);case 1:return _.sent(),P=a?a.shape:[],[2,this.downloadFloat32TensorFromBuffer(f,P)]}}))}))},s.prototype.createPBO=function(){var a,h=this.textureConf;if(this.glVersion===2){var f=this.gl,P=this.pbo;f.bindBuffer(f.PIXEL_PACK_BUFFER,P);var _=16*this.width_texture_out*this.height_texture_out;return f.bufferData(f.PIXEL_PACK_BUFFER,_,f.STREAM_READ),f.readPixels(0,0,this.width_texture_out,this.height_texture_out,f.RGBA,f.FLOAT,0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),P}var T=this.gl,b=T.FLOAT;return h.isFloatTextureReadPixelsEnabled?a=new Float32Array(this.width_texture_out*this.height_texture_out*4):(a=new Uint8Array(this.width_texture_out*this.height_texture_out*4),b=T.UNSIGNED_BYTE),T.readPixels(0,0,this.width_texture_out,this.height_texture_out,T.RGBA,b,a),h.isFloatTextureReadPixelsEnabled?a:new Float32Array(a.buffer)},s.prototype.createAndWaitForFence=function(){return pt(this,void 0,void 0,(function(){var a,h,f,P,_=this;return Xt(this,(function(T){return a=this.gl,h=a.fenceSync!=null,f=function(){return!0},h&&(P=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0),a.flush(),f=function(){var b=a.clientWaitSync(P,0,0);return b===a.ALREADY_SIGNALED||b===a.CONDITION_SATISFIED}),[2,new Promise((function(b){_.pollItem(f,b)}))]}))}))},s.prototype.pollItem=function(a,h){var f=function(){a()?h():setTimeout(f,1)};f()},s.prototype.downloadFloat32TensorFromBuffer=function(a,h){var f=4*this.width_texture_out*this.height_texture_out;if(this.glVersion===2){var P=this.gl,_=new Float32Array(f);P.bindBuffer(P.PIXEL_PACK_BUFFER,a),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);var T=[];if(N.get("webgl_pack_output"))return Array.from(_).slice(0,(function(L){return L.reduce((function(M,X){return M*X}),1)})(h));for(var b=0;b<this.width_texture_out*this.height_texture_out;b++)T.push(_[4*b]);return T}var E=a,C=[];for(b=0;b<this.width_texture_out*this.height_texture_out;b++){var O=this.textureConf.isFloatTextureReadPixelsEnabled?4*b:b;C.push(E[O])}return C},s.prototype.setOutProps=function(a){var h=a.width_shape,f=h===void 0?1:h,P=a.height_shape,_=P===void 0?1:P,T=a.width_texture,b=T===void 0?1:T,E=a.height_texture,C=E===void 0?1:E,O=a.channel,L=O===void 0?0:O,M=a.total_shape,X=M===void 0?0:M;this.width_shape_out=f,this.height_shape_out=_,this.width_texture_out=b,this.height_texture_out=C,this.channel=L,this.total_shape=X},s.prototype.attachColorBuffer=function(){var a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,null),a.canvas.width=this.width_shape_out,a.canvas.height=this.height_shape_out,a.viewport(0,0,a.canvas.width,a.canvas.height),a.scissor(0,0,a.canvas.width,a.canvas.height)},s.prototype.attachFrameBuffer=function(a){this.currentTexture=this.texturesMap[a];var h=this.gl;h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,this.currentTexture,0),h.viewport(0,0,this.width_texture_out,this.height_texture_out),h.scissor(0,0,this.width_texture_out,this.height_texture_out)},s.prototype.render=function(a,h,f,P){var _=this;h===void 0&&(h=!1),P===void 0&&(P=!1);var T=a.inputTensors,b=T===void 0?[]:T,E=a.uniform,C=E===void 0?null:E,O=a.iLayer,L=O===void 0?0:O,M=a.modelName,X=this.gl,D=0;b.forEach((function(k){_.initTexture(D,k,P);var W=_.getUniformLoc("texture_"+k.name,L,h,f,M);W&&X.uniform1i(W,D++)})),C&&this.setUniform(C,L,h,f,M),X.drawArrays(X.TRIANGLE_STRIP,0,4)},s.prototype.initTexture=function(a,h,f){var P,_=this.gl,T=this.textureConf,b=h.tensorId,E=f||h.isPacked,C=h.data;if(h.persistable){this.cacheTextures=this.cacheTextures||{};var O=this.cacheTextures[b];O?(P=O,C&&bn.genTextureInfoFromTensorShape(this.MAX_TEXTURE_SIZE,h)):(P=_.createTexture(),this.cacheTextures[b]=P)}else P=this.texturesMap[b];_.activeTexture(_["TEXTURE"+a]),_.bindTexture(_.TEXTURE_2D,P),C&&(R.uploadDataToTexture(_,T,h,E),h.data=null)},s.prototype.setUniform=function(a,h,f,P,_){var T=this,b=Object.keys(a),E=this.gl;b.forEach((function(C){var O=a[C].type,L=a[C].value,M=T.getUniformLoc(C,h,f,P,_);bn.setUniformParam(E,M,O,L)}))},s.prototype.getUniformLoc=function(a,h,f,P,_){var T=_+"_";if(f)return this.uniformLocations[T+h][a+P];var b=this.gl.getUniformLocation(this.program.program,a);return this.uniformLocations[T+h]=this.uniformLocations[T+h]||{},this.uniformLocations[T+h][a+P]=b,b},s.prototype.dispose=function(){},s})((function(){})),Qn={mainFunc:function(l,s){var a=l.origin,h=l.filter,f=l.out,P=l.bias,_=s.groups,T=_===void 0?1:_,b=s.strides,E=b===void 0?[]:b,C=s.paddings,O=C===void 0?[]:C,L=s.dilations,M=L===void 0?[]:L,X=s.fuse_relu,D=s.filter_nearest_vec4,k=s.filter_remainder_vec4,W=s.act_type,j=W===void 0?"":W,z=s.padding_algorithm,G=z===void 0?"":z,q=s.hard_swish_offset,en=q===void 0?3:q,cn=s.hard_swish_scale,H=cn===void 0?6:cn,Q=s.hard_swish_threshold,Z=Q===void 0?6:Q,K=E[0],rn=K===void 0?1:K,vn=E[1],gn=vn===void 0?1:vn,yn=O[0],Tn=yn===void 0?0:yn,_n=O[1],On=_n===void 0?0:_n,Bn=M[0],Dn=Bn===void 0?1:Bn,En=M[1],Xn=En===void 0?1:En;return G==="SAME"&&Math.ceil((a.width_shape-h.width_shape)/rn)+1!==f.width_shape&&(Tn=1,On=1),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        int x = oPos.a;
        int c = oPos.g;
        int y = oPos.b;
        int b = oPos.r;
        float res = 0.0;

        // \u83B7\u53D6output\u7684\u5750\u6807
        int oTensorChannel = (c / (`+f.channel+" / "+T+")) * "+h.channel+`;
        int oy = y * `+rn+" - "+Tn+`;
        for (int fy = 0; fy < `+h.height_shape+`; fy++) {
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                oy += `+Dn+`;
                continue;
            }
            int ox = x * `+gn+" - "+On+`;
            for (int fx = 0; fx < `+h.width_shape+`; fx++) {
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    ox += `+Xn+`;
                    continue;
                }
                // channel\u8BA1\u7B97
                for (int j = 0; j < `+D+`; j += 4) {
                    vec4 fValues = vec4(
                        getValueFromTensorPos_filter(c, j, fy, fx),
                        getValueFromTensorPos_filter(c, j + 1, fy, fx),
                        getValueFromTensorPos_filter(c, j + 2, fy, fx),
                        getValueFromTensorPos_filter(c, j + 3, fy, fx)
                    );

                    vec4 oValues = vec4(
                        getValueFromTensorPos_origin(b, oTensorChannel + j, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + j + 1, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + j + 2, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + j + 3, oy, ox)
                      );

                    res += dot(fValues, oValues);
                }

                if (`+k+` == 1) {
                    res += dot(
                        getValueFromTensorPos_filter(c, `+D+`, fy, fx),
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+`, oy, ox));
                } else if (`+k+` == 2) {
                    vec2 fValues = vec2(
                        getValueFromTensorPos_filter(c, `+D+`, fy, fx),
                        getValueFromTensorPos_filter(c, `+D+` + 1, fy, fx)
                    );
                    vec2 oValues = vec2(
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+`, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+` + 1, oy, ox)
                      );
                    res += dot(fValues, oValues);
                } else if (`+k+` == 3) {
                    vec3 fValues = vec3(
                        getValueFromTensorPos_filter(c, `+D+`, fy, fx),
                        getValueFromTensorPos_filter(c, `+D+` + 1, fy, fx),
                        getValueFromTensorPos_filter(c, `+D+` + 2, fy, fx)
                    );
                    vec3 oValues = vec3(
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+`, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+` + 1, oy, ox),
                        getValueFromTensorPos_origin(b, oTensorChannel + `+D+` + 2, oy, ox)
                    );
                    res += dot(fValues, oValues);
                }

                ox += `+Xn+`;
            }
            oy += `+Dn+`;
        }

        `+(P?"res += getValueFromTensorPos_bias(0, 0, 0, c);":"")+`

        if (`+X+`) {
            res = max(0.0, res);
        }
        else if (`+(j==="relu6")+`) {
            res = min(max(0.0, res), 6.0);
        }
        else if (`+(j==="hard_swish")+`) {
            res = res * min(
                max(0.0, res + float(`+en+`)),
                float(`+Z+`)
            ) / float(`+H+`);
        }

        setOutput(res);
    }
    `},textureFuncConf:{filter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"],bias:["getValueFromTensorPos"]},behaviors:["adaptPaddings","isApplySeparableConv","batchComputeConv2d","processBias"]};function yt(l,s){var a=l[0],h=l[1],f=l[2],P=l[3];if(a===1&&h===1)return[[1,1,f],3,[P],1,[f,P]];var _=l.slice(0,s),T=l.slice(s);return[_,_.length,T,T.length,[_.reduce((function(b,E){return b*E})),T.reduce((function(b,E){return b*E}))]]}function et(l,s,a){if(a===1)return`
            int getTensorPosFromArrayIndex_`+l+`(int n) {
                return calMod(n, `+s[0]+`);
            }
        `;var h=$(s);return h.push(1),`
    ivec`+a+" shapeVec_"+l+" = ivec"+a+"("+h.join(", ")+`);
    ivec`+a+" getTensorPosFromArrayIndex_"+l+`(int n) {
        ivec`+a+` pos;
        pos[0] = n / shapeVec_`+l+`[0];
        for (int i = 1; i < `+a+`; i++) {
            n = calMod(n, shapeVec_`+l+`[i - 1]);
            pos[i] = n / shapeVec_`+l+`[i];
        }
        return pos;
    }
    `}function qn(l){return l===1?"int":"ivec"+l}function Bt(l){var s=l.total_shape,a=l.channel,h=l.height_shape,f=l.width_shape;return[s/a/h/f,a,h,f]}let Ht={mainFunc:function(l,s){var a=l.origin,h=s.transpose_X,f=h!==void 0&&h,P=s.transpose_Y,_=P!==void 0&&P,T=s.trans_x,b=T!==void 0&&T,E=s.trans_y,C=f||b,O=_||E!==void 0&&E;return`
    void main() {
        float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        ivec4 origin_pos = out_pos;
        if (`+C+`) {
            origin_pos[3] = origin_pos[2];
        }
        ivec4 counter_pos = out_pos;
        if (`+O+`) {
            counter_pos[2] = counter_pos[3];
        }

        for (int j = 0; j < `+(C?a.height_shape:a.width_shape)+`; j++) {
            if (`+C+`) {
                origin_pos[2] = j;
            }
            else {
                origin_pos[3] = j;
            }
            if (`+O+`) {
                counter_pos[3] = j;
            }
            else {
                counter_pos[2] = j;
            }
            float o = getValueFromTensorPos_origin(origin_pos[0], origin_pos[1], origin_pos[2], origin_pos[3]);
            float c = getValueFromTensorPos_counter(counter_pos[0], counter_pos[1], counter_pos[2], counter_pos[3]);
            
            res += c * o;
        }
        setOutput(res);
    }
    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]}};function rt(l,s){var a=l[0],h=l[1],f=l[2],P=l[3];if(a===1&&h===1)return[[1,1,f],3,[P],1,[f,P]];var _=l.slice(0,s),T=l.slice(s);return[_,_.length,T,T.length,[_.reduce((function(b,E){return b*E})),T.reduce((function(b,E){return b*E}))]]}function xt(l,s,a){if(a===1)return`
            int getTensorPosFromArrayIndex_`+l+`(int n) {
                return calMod(n, `+s[0]+`);
            }
        `;var h=$(s);return h.push(1),`
    ivec`+a+" shapeVec_"+l+" = ivec"+a+"("+h.join(", ")+`);
    ivec`+a+" getTensorPosFromArrayIndex_"+l+`(int n) {
        ivec`+a+` pos;
        pos[0] = n / shapeVec_`+l+`[0];
        for (int i = 1; i < `+a+`; i++) {
            n = calMod(n, shapeVec_`+l+`[i - 1]);
            pos[i] = n / shapeVec_`+l+`[i];
        }
        return pos;
    }
    `}function Vn(l){return l===1?"int":"ivec"+l}function Gt(l){var s=l.total_shape,a=l.channel,h=l.height_shape,f=l.width_shape;return[s/a/h/f,a,h,f]}let $n={mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        vec2 outCoord = vCoord.xy * (_2d_shape_texture_out);
        int index = int(outCoord.x) + int(outCoord.y) * int(`+l.out.width_texture+`);
        ivec4 originPos = getTensorPosFromArrayIndex_origin(index);
        float res = getValueFromTensorPos_origin(originPos[0], originPos[1], originPos[2], originPos[3]);
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getTensorPosFromArrayIndex","getValueFromTensorPos"]}},qt={mainFunc:function(l,s){var a=l.out,h=l.origin,f=s.align_mode,P=f===void 0?1:f,_=s.align_corners,T=_===void 0||_;return`
    // start\u51FD\u6570

    vec4 getData(float n, float scale, bool align_flag, int in_len) {
        float m = align_flag ? ((n + 0.5) / scale - 0.5) : (n / scale);
        int a1 = int(floor(m));
        a1 = a1 > 0 ? a1 : 0;
        int a2 = (a1 + 1) < (in_len - 1) ? (a1 + 1) : (in_len - 1);

        float idx_src = (n + 0.5) / scale - 0.5;
        idx_src = idx_src > 0.0 ? idx_src : 0.0;
        float b1 = align_flag ? (idx_src - float(a1)) : (n / scale - float(a1));
        float b2 = 1.0 - b1;
        return vec4(float(a1), float(a2), b1, b2);
    }

    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();

        bool align_flag = `+P+" == 0 && !"+T+`;

        float scale_x = 0.0;
        float scale_y = 0.0;
        if (`+T+`) {
            scale_x = float(`+a.width_shape+" - 1) / float("+h.width_shape+` - 1);
            scale_y = float(`+a.height_shape+" - 1) / float("+h.height_shape+` - 1);
        }
        else {
            scale_x = float(`+a.width_shape+") / float("+h.width_shape+`);
            scale_y = float(`+a.height_shape+") / float("+h.height_shape+`);
        }

        vec4 vx = getData(float(oPos.a), scale_x, align_flag, `+h.width_shape+`);
        vec4 vy = getData(float(oPos.b), scale_y, align_flag, `+h.height_shape+`);

        int x1 = int(vx.r);
        int x2 = int(vx.g);
        float x3 = vx.b;
        float x4 = vx.a;
        int y1 = int(vy.r);
        int y2 = int(vy.g);
        float y3 = vy.b;
        float y4 = vy.a;

        float value11 = getValueFromTensorPos_origin(oPos.r, oPos.g, y1, x1);
        float value12 = getValueFromTensorPos_origin(oPos.r, oPos.g, y2, x1);
        float value21 = getValueFromTensorPos_origin(oPos.r, oPos.g, y1, x2);
        float value22 = getValueFromTensorPos_origin(oPos.r, oPos.g, y2, x2);
        float value = x4 * y4 * value11 + x4 * y3 * value12 + x3 * y4 * value21 + x3 * y3 * value22;
        setOutput(float(value));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},zt=qt;var le={relu:["transToPrelu"],relu6:["transToRelu6"],leaky_relu:["transToLeakyrelu"],transToLeakyrelu:["transToLeakyrelu"],scale:["transToScale"],sigmoid:["transToSigmoid"],hard_sigmoid:["transToHardSigmoid"],pow:["transToPow"],exp:["transToExp"],sqrt:["transToSqrt"],tanh:["transToTanh"]};function ue(l,s){var a=s.multi_value,h=a===void 0?1:a,f=s.bias_value,P=f===void 0?0:f;return`
    // start\u51FD\u6570
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        float o = getPixelsFromTexturePos_origin(vCoord).r;
        float res = `+s.active_function+"(o, float("+h+"), float("+P+`));
        setOutput(res);
    }
    `}function wn(l){return{mainFunc:ue,textureFuncConf:{origin:["getPixelsFromTexturePos"]},behaviors:le[l]}}let zn={mainFunc:function(l,s){var a=s.axes,h=Array.isArray(a)?a:[a],f=[0,1,2,3].filter((function(P){return P>=h.length}));return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        o = getValueFromTensorPos_origin(`+[0,1,2,3].map((function(P){return h.indexOf(P)>-1?0:"oPos["+f.splice(0,1)+"]"})).join(",")+`);
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},Jt={mainFunc:function(l,s){var a=l.origin,h=l.out,f=s.align_corners;return`
    // start\u51FD\u6570
    int getData(float n, float scale, bool align_corners) {
        float m = align_corners ? (n / scale + 0.5) : (n / scale);
        return int(floor(m));
    }

    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        
        float scale_x = 0.0;
        float scale_y = 0.0;
        if (`+f+`) {
            scale_x = float(`+h.width_shape+" -1) / float("+a.width_shape+` - 1);
            scale_y = float(`+h.height_shape+" - 1) / float("+a.height_shape+` - 1);
        }
        else {
            scale_x = float(`+h.width_shape+") / float("+a.width_shape+`);
            scale_y = float(`+h.height_shape+") / float("+a.height_shape+`);
        }
    
        int vx = getData(float(oPos.a), scale_x, `+f+`);
        int vy = getData(float(oPos.b), scale_y, `+f+`);
        
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, vy, vx);
        setOutput(float(o));
}
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},commonFuncConf:["transferFromNHWCtoNCHW"]};var fe=function(){for(var l=0,s=0,a=arguments.length;s<a;s++)l+=arguments[s].length;var h=Array(l),f=0;for(s=0;s<a;s++)for(var P=arguments[s],_=0,T=P.length;_<T;_++,f++)h[f]=P[_];return h};let m={mainFunc:function(l,s){var a=l.origin,h=l.image,f=l.out,P=s.variances,_=P===void 0?[.1,.1,.2,.2]:P,T=s.fixed_sizes,b=s.fixed_ratios,E=s.densities,C=s.flatten_to_2d,O=s.clip,L=s.step_w,M=L===void 0?0:L,X=s.step_h,D=X===void 0?0:X,k=s.offset,W=k===void 0?.5:k,j=s.runtime,z=j===void 0?0:j,G=h.height_shape,q=h.width_shape,en=a.height_shape,cn=a.width_shape,H=f.total_shape,Q=f.channel,Z=f.height_shape,K=f.width_shape,rn=H/Q/Z/K,vn=$([rn,Q,Z,K]),gn=M,yn=D;M!==0&&D!==0||(gn=q/cn,yn=G/en);var Tn=Math.round(.5*(gn+yn)),_n=b.map((function(jn){return Math.sqrt(jn)})),On=_n.length===1?"sqrt_fixed_ratios":"sqrt_fixed_ratios[r]",Bn=b.length,Dn=Z,En=rn,Xn=Q;C&&(En=en,Xn=cn,Dn=Z/en/cn);var Tt=$([En,Xn,Dn,K]),it=Ot("out1",{numbers_shape:fe(Tt,[1]),length_shape:4}),Jn=E.map((function(jn){return jn*jn*Bn})),Rn=Jn.length,Ir=(function(jn){var bt="ivec2 calRemain(int remain, int curAccIndex, int s) {",Ct=jn.length;if(Ct===1)bt+=`
            int accIndex0 = density_acc_shape;

            if (remain >= accIndex0) {
                s++;
                remain -= accIndex0;
            }
            else {
                return ivec2(remain, s);
            }
            `;else for(var nt=0;nt<Ct;nt++)bt+=`
            int accIndex`+nt+" = density_acc_shape["+nt+`];

            if (remain >= accIndex`+nt+`) {
                s++;
                remain -= accIndex`+nt+`;
            }
            else {
                return ivec2(remain, s);
            }
            `;return bt+`
    }
    `})(Jn),Fr=O?"v = min(max(v, 0.), 1.);":"",Or=Rn===1?"density_acc_shape":"density_acc_shape[0]",Fe=`
    float getFloat4TensorVal(vec4 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
        else if (index == 2) {
            return tensor[2];
        }
        else if (index == 3) {
            return tensor[3];
        }
    }
    float getFloat3TensorVal(vec3 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
        else if (index == 2) {
            return tensor[2];
        }
    }
    float getFloat2TensorVal(vec2 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
    }
    float getFloat1TensorVal(float tensor, int index) {
        return tensor;
    }
    int getInt4TensorVal(ivec4 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
        else if (index == 2) {
            return tensor[2];
        }
        else if (index == 3) {
            return tensor[3];
        }
    }
    int getInt3TensorVal(ivec3 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
        else if (index == 2) {
            return tensor[2];
        }
    }
    int getInt2TensorVal(ivec2 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
    }

    int getInt1TensorVal(int tensor, int index) {
       return tensor;
    }

    `+it+`
    
        `+tn(E,"densities")+`
        `+tn(T,"fixed_sizes")+`
        `+tn(_n,"sqrt_fixed_ratios")+`
        `+(function(jn,bt){if(jn.length===1)return"int "+bt+" = int("+jn[0]+");";for(var Ct=jn.length,nt=`
        ivec`+Ct+" "+bt+" = ivec"+Ct+`(
    `,he=0;he<Ct;he++)nt+=jn[he]+",";return nt.slice(0,-1)+");"})(Jn,"density_acc_shape")+`
    
    `+Ir+`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        int rr = int(oPos.r);
        int gg = int(oPos.g);
        int bb = int(oPos.b);
        int aa = int(oPos.a);

        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        int index = rr * `+vn[0]+" + gg * "+vn[1]+" + bb * "+vn[2]+` + aa;
        ivec4 realOutPos = getTensorPosFromArrayIndex_out1(index);
        int h = realOutPos.r;
        int w = realOutPos.g;
        int b = realOutPos.b;
        int a = realOutPos.a;
    `;return z===1?`
        `+tn(_,"variances")+`
        `+Fe+`
        setOutput(getFloat4TensorVal(variances, aa));
        }`:`
            `+Fe+`
            // \u6C42idx \u5BF9\u5E94\u7684 s, r, di, dj
            int s = 0;
            int remain = b;
            int curAccIndex = `+Or+`;

            ivec2 remainInfo = calRemain(remain, curAccIndex, s);
            remain = remainInfo[0];
            s = remainInfo[1];
            int density = int(getFloat`+E.length+`TensorVal(densities, s));
            int r = int(floor(float(remain / density / density)));
            remain -= r * density * density;

            float di = floor(float(remain / density));
            float dj = float(remain - int(di) * density);

            float center_x = (float(w) + float(`+W+")) * float("+gn+`);
            float center_y = (float(h) + float(`+W+")) * float("+yn+`);
            float fixed_size = getFloat`+T.length+`TensorVal(fixed_sizes, s);
            float shift = float(`+Tn+`) / float(density);

            float v = 0.0;
            if (a == 0 || a == 2) {
                float box_width_ratio = fixed_size * `+On+`;
                float density_center_x = center_x - float(`+Tn+`) / 2. + shift / 2.;
                float center_x_temp = density_center_x + dj * shift;
                if (a == 0) {
                    v = max((center_x_temp - box_width_ratio / 2.) / float(`+q+`), 0.);
                }
                else {
                    v = min((center_x_temp + box_width_ratio / 2.) / float(`+q+`), 1.);
                }
            }
            else {
                float box_height_ratio = fixed_size / `+On+`;
                float density_center_y = center_y - float(`+Tn+`) / 2. + shift / 2.;
                float center_y_temp = density_center_y + di * shift;
                if (a == 1) {
                    v = max((center_y_temp - box_height_ratio / 2.) / float(`+G+`), 0.);
                }
                else {
                    v = min((center_y_temp + box_height_ratio / 2.) / float(`+G+`), 1.);
                }
            }

            `+Fr+`

            setOutput(v);
        }
        `},textureFuncConf:{image:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]}},p={mainFunc:function(l,s){var a=l.origin,h=l.image,f=l.out,P=s.variances,_=P===void 0?[.1,.1,.2,.2]:P,T=s.flip,b=s.clip,E=s.step_w,C=E===void 0?0:E,O=s.step_h,L=O===void 0?0:O,M=s.offset,X=M===void 0?.5:M,D=s.runtime,k=D===void 0?0:D,W=s.min_sizes,j=W===void 0?[]:W,z=s.max_sizes,G=z===void 0?[]:z,q=s.aspect_ratios,en=q===void 0?[]:q,cn=s.min_max_aspect_ratios_order,H=cn!==void 0&&cn,Q=h.height_shape,Z=h.width_shape,K=a.height_shape,rn=a.width_shape,vn=f.channel,gn=f.height_shape,yn=C,Tn=L;C!==0&&L!==0||(yn=Z/rn,Tn=Q/K);var _n=[1];en.forEach((function(Xn){Xn!==1&&(_n.push(Math.sqrt(Xn)),T&&_n.push(Math.sqrt(1/Xn)))}));var On=_n.length,Bn=`
        `+an(j,"min_sizes",U.FLOAT_TYPE)+`
        `+an(G,"max_sizes",U.FLOAT_TYPE)+`
        `+an(_n,"aspect_ratios",U.FLOAT_TYPE)+`
    `,Dn=b?"res = min(max(res, 0.), 1.);":"",En=`
    float getFloat4TensorVal(vec4 tensor, int index) {
        if (index == 0) {
            return tensor[0];
        }
        else if (index == 1) {
            return tensor[1];
        }
        else if (index == 2) {
            return tensor[2];
        }
        else if (index == 3) {
            return tensor[3];
        }
    }

    
        `+ln(j,"min_sizes",U.FLOAT_TYPE)+`
        `+ln(G,"max_sizes",U.FLOAT_TYPE)+`
        `+ln(_n,"aspect_ratios",U.FLOAT_TYPE)+`
    

    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        int nn = int(oPos.r);
        int cc = int(oPos.g);
        int hh = int(oPos.b);
        int ww = int(oPos.a);


        `+Bn+`

    `;return k===1?`
            `+tn(_,"variances")+`
            `+En+`
            float res = 0.0;
            res = getFloat4TensorVal(variances, ww);
            setOutput(float(res));
        }`:`
            `+En+`
            int idx = nn * `+vn*gn+" + cc * "+gn+` + hh;
            int as_num = `+On+`;
            float offset = `+X+`;
            
            int feature_width = `+rn+`;
            int num_priors = `+gn+`;
            float step_width = float(`+yn+`);
            float step_height = float(`+Tn+`);

            float im_width = float(`+Z+`);
            float im_height = float(`+Q+`);

            bool min_max_aspect_ratios_order = `+H+`;

            // \u6C42idx \u5BF9\u5E94\u7684 h w p m
            int h = int(idx / (num_priors * feature_width));
            int w = calMod(idx / num_priors, feature_width);
            int p = calMod(idx, num_priors);
            int m = `+(G.length>0)+` ? int(p / (as_num + 1)) : int(p / as_num);
            float cx = (float(w) + offset) * step_width;
            float cy = (float(h) + offset) * step_height;
            float min_size = getValueFromArrByIndex_min_sizes(min_sizes, m);
            float bw = 0.0;
            float bh = 0.0;

            `+(G.length>0?`
            int s = calMod(p, as_num + 1);
            if (`+!H+`) {
                if (s < as_num) {
                    float ar = getValueFromArrByIndex_aspect_ratios(aspect_ratios, s);
                    bw = min_size * ar / 2.0;
                    bh = min_size / ar / 2.0;
                }
                else {
                    float max_size = getValueFromArrByIndex_max_sizes(max_sizes, m);
                    bw = sqrt(min_size * max_size) / 2.0;
                    bh = bw;
                }
            }
            else {
                if (s == 0) {
                    bh = min_size / 2.0;
                    bw = bh;
                }
                else if (s == 1) {
                    float max_size = getValueFromArrByIndex_max_sizes(max_sizes, m);
                    bw = sqrt(min_size * max_size) / 2.0;
                    bh = bw;
                }
                else {
                    float ar = getValueFromArrByIndex_aspect_ratios(aspect_ratios, s - 1);
                    bw = min_size * sqrt(ar) / 2.0;
                    bh = min_size / sqrt(ar) / 2.0;
                }
            }`:`
            int s = calMod(p, as_num);
            float ar = getValueFromArrByIndex_aspect_ratios(aspect_ratios, s);
            bw = min_size * ar / 2.0;
            bh = min_size / ar / 2.0;
        `)+`
            float res = 0.0;
            if (ww == 0) {
                res = (cx - bw) / im_width;
            }
            else if (ww == 1) {
                res = (cy - bh) / im_height;
            }
            else if (ww == 2) {
                res = (cx + bw) / im_width;
            }
            else {
                res = (cy + bh) / im_height;
            }

            `+Dn+`

            setOutput(float(res));
        }
        `},textureFuncConf:{image:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:[]},d={mainFunc:function(l,s){for(var a=l.out,h=(function(j,z){var G={};for(var q in j)Object.prototype.hasOwnProperty.call(j,q)&&z.indexOf(q)<0&&(G[q]=j[q]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function"){var en=0;for(q=Object.getOwnPropertySymbols(j);en<q.length;en++)z.indexOf(q[en])<0&&Object.prototype.propertyIsEnumerable.call(j,q[en])&&(G[q[en]]=j[q[en]])}return G})(l,["out"]),f=h.origin,P=f.width_shape,_=f.height_shape,T=f.channel,b=f.total_shape,E=f.length_unformatted_shape,C=[b/(P*_*T),T,_,P].slice(4-E),O=Object.keys(h).length,L=s.axis<0?s.axis+C.length+1:s.axis,M=1,X=1,D=0;D<L;D++)M*=C[D];for(D=L;D<C.length;D++)X*=C[D];var k=a.total_shape/M,W="";return W=Array.from(Array(O).keys()).reduce((function(j,z){return j+(z===0?`
            if (i == 0) {
                ivec4 co = getTensorPosFromArrayIndex_origin(j);
                o = getValueFromTensorPos_origin(co.r, co.g, co.b, co.a);
            }`:`
            else if (i == `+z+`) {
                ivec4 co = getTensorPosFromArrayIndex_origin_`+z+`(j);
                o = getValueFromTensorPos_origin_`+z+`(co.r, co.g, co.b, co.a);
            }`)}),W),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        int sumVal = oPos.a
            + oPos.b * `+a.width_shape+`
            + oPos.g * `+a.height_shape+" * "+a.width_shape+`
            + oPos.r * `+a.channel+" * "+a.width_shape+" * "+a.height_shape+`;

        int index = calMod(sumVal, `+k+`);

        int layer = sumVal / `+k+`;

        int i = index / `+X+`;
        int j = calMod(index, `+X+") + layer * "+X+`;

        float o = 0.0;
        `+W+`
        setOutput(float(o));
    }
    `},textureFuncConf:{"@all":["getValueFromTensorPos","getTensorPosFromArrayIndex"]}},y={mainFunc:function(l,s){var a=l.out,h=l.origin,f=s.axes,P=s.starts,_=s.ends,T=s.decrease_axis;if(f.length>1||P.length>1||_.length>1||T&&T.length===0)throw Error("[slice op feature]: current support one dim, support decrease_axis");var b=h.width_shape,E=h.height_shape,C=h.channel,O=h.total_shape,L=h.length_unformatted_shape,M=[O/(b*E*C),C,E,b],X=f[0];if(X<0&&(X=X+L+1),(X=4-L+X)!==4)throw Error("[slice op feature]: unsupport axis value");for(var D=P[0],k=_[0],W=M[0],j=M[1],z=M[2],G=M[3],q=[],en=D;en<k;en++)for(var cn=0;cn<W;cn++)for(var H=0;H<j;H++)for(var Q=0;Q<z;Q++)q.push(cn*j*z*G+H*z*G+Q*G+en);var Z=an(q,"arr",U.INT_TYPE);return`
    `+ln(q,"arr",U.INT_TYPE)+`

    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        `+Z+`

        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        int sumVal = oPos.a
            + oPos.b * `+a.width_shape+`
            + oPos.g * `+a.height_shape+" * "+a.width_shape+`
            + oPos.r * `+a.channel+" * "+a.width_shape+" * "+a.height_shape+`;

        int index = getValueFromArrByIndex_arr(arr, sumVal);

        float res = 0.0;
        ivec4 co = getTensorPosFromArrayIndex_origin(index);
        res = getValueFromTensorPos_origin(co.r, co.g, co.b, co.a);
        setOutput(float(res));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos","getTensorPosFromArrayIndex"]}};var g={arg_max:{mainFunc:function(l,s){var a=l.origin,h=s.axis,f=h===void 0?-1:h,P=s.flatten,_=a.total_shape,T=a.height_shape,b=a.width_shape,E=a.channel,C=a.length_unformatted_shape,O=_/(b*T*E),L=f<0?3:4-C+f,M=[O,E,T,b][L];return`

    void main() {
        ivec4 oPos = getOutputTensorPos();
        float o = 0.0;
        int pos = 0;
        if (`+!P+`) {
            if (`+L+` == 1) {
                float tmp = getValueFromTensorPos_origin(oPos.g, 0, oPos.b, oPos.a);
                for (int index = 0; index < `+M+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, index, oPos.b, oPos.a);
                    if (o > tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
            else if (`+L+` == 2) {
                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, 0, oPos.a);
                for (int index = 0; index < `+M+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, index, oPos.a);
                    if (o > tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
            else if (`+L+` == 3) {
                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, 0);
                for (int index = 0; index < `+M+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, index);
                    if (o > tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
            else {
                float tmp = getValueFromTensorPos_origin(0, oPos.g, oPos.b, oPos.a);
                for (int index = 0; index < `+M+`; index++) {
                    o = getValueFromTensorPos_origin(index, oPos.g, oPos.b, oPos.a);
                    if (o > tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
        }
        else {
            int index = 0;
            float tmp = getValueFromTensorPos_origin(0, 0, 0, 0);
            for (int n = 0; n < `+O+`; n++) {
                for (int c = 0; c < `+E+`; c++) {
                    for (int h = 0; h < `+T+`; h++) {
                        for (int w = 0; w < `+b+`; w++) {
                            o = getValueFromTensorPos_origin(n, c, h, w);
                            if (o > tmp) {
                                tmp = o;
                                pos = index;
                            }
                            index++;
                        }
                    }
                }
            }
        }
        setOutput(float(pos));
    }`},textureFuncConf:{origin:["getValueFromTensorPos"]}},arg_min:{mainFunc:function(l,s){for(var a=l.origin,h=s.axis,f=h===void 0?-1:h,P=s.flatten,_=a.total_shape,T=a.height_shape,b=a.width_shape,E=a.channel,C=_/(b*T*E),O=[C,E,T,b],L=0,M=0;M<4&&!(O[M]>1);M++)L++;var X=f<0?4-L+f:f,D=O[X=L+X];return`
    void main() {
        ivec4 oPos = getOutputTensorPos();
        float o = 0.0;
        int pos = 0;
        if (`+!P+`) {
            if (`+X+` == 1) {
                float tmp = getValueFromTensorPos_origin(oPos.g, 0, oPos.b, oPos.a);
                for (int index = 0; index < `+D+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, index, oPos.b, oPos.a);
                    if (o < tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
            else if (`+X+` == 2) {
                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, 0, oPos.a);
                for (int index = 0; index < `+D+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, index, oPos.a);
                    if (o < tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
            else if (`+X+` == 3) {
                float tmp = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, 0);
                for (int index = 0; index < `+D+`; index++) {
                    o = getValueFromTensorPos_origin(oPos.g, oPos.b, oPos.a, index);
                    if (o < tmp) {
                        tmp = o;
                        pos = index;
                    }
                }     
            }
            else {
                float tmp = getValueFromTensorPos_origin(0, oPos.g, oPos.b, oPos.a);
                for (int index = 0; index < `+D+`; index++) {
                    o = getValueFromTensorPos_origin(index, oPos.g, oPos.b, oPos.a);
                    if (o < tmp) {
                        tmp = o;
                        pos = index;
                    }
                }
            }
        }
        else {
            int index = 0;
            float tmp = getValueFromTensorPos_origin(0, 0, 0, 0);
            for (int n = 0; n < `+C+`; n++) {
                for (int c = 0; c < `+E+`; c++) {
                    for (int h = 0; h < `+T+`; h++) {
                        for (int w = 0; w < `+b+`; w++) {
                            o = getValueFromTensorPos_origin(n, c, h, w);
                            if (o < tmp) {
                                tmp = o;
                                pos = index;
                            }
                            index++;
                        }
                    }
                }
            }
        }
        setOutput(float(pos));
    }`},textureFuncConf:{origin:["getValueFromTensorPos"]}},conv2d:Qn,conv2d_packing:{mainFunc:function(l,s){var a=l.origin,h=l.filter,f=l.out,P=l.bias,_=s.groups,T=_===void 0?1:_,b=s.strides,E=b===void 0?[]:b,C=s.paddings,O=C===void 0?[]:C,L=s.dilations,M=L===void 0?[]:L,X=s.fuse_relu,D=s.act_type,k=s.hard_swish_offset,W=k===void 0?3:k,j=s.hard_swish_scale,z=j===void 0?6:j,G=s.hard_swish_threshold,q=G===void 0?6:G,en=E[0],cn=en===void 0?1:en,H=E[1],Q=H===void 0?1:H,Z=O[0],K=Z===void 0?0:Z,rn=O[1],vn=rn===void 0?0:rn,gn=M[0],yn=gn===void 0?1:gn,Tn=M[1],_n=Tn===void 0?1:Tn;return`
    void main() {
        ivec4 oPos = getOutputTensorPos();
        int x = oPos.a;
        int c = oPos.g;
        int y = oPos.b;
        int b = oPos.r;
        vec4 res = vec4(0.0, 0.0, 0.0, 0.0);

        int oy = y * `+cn+" - "+K+`;
        for (int fy = 0; fy < `+h.height_shape+`; fy++) {
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                oy += `+yn+`;
                continue;
            }
            int ox = x * `+Q+" - "+vn+`;
            for (int fx = 0; fx < `+h.width_shape+`; fx++) {
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    ox += `+_n+`;
                    continue;
                }
                // channel\u8BA1\u7B97
                for (int j = 0; j < `+h.channel+`; j += 1) {
                    int c0 = (c / (`+f.channel+" * 4 / "+T+")) * "+h.channel+` + j;
                    vec4 fValue = getValueFromTensorPosPacking_filter(c * 4, j, fy, fx);
                    vec4 oValue = getValueFromTensorPosPacking_origin(b, c0, oy, ox);

                    for (int packed_index = 0; packed_index < 4; packed_index++) {
                        if (packed_index == 0) {
                            res.r += dot(fValue, oValue);
                        } else if (packed_index == 1) {
                            int c1 = ((c + 1) / (`+f.channel+" * 4 / "+T+")) * "+h.channel+` + j;
                            oValue = getValueFromTensorPosPacking_origin(b, c1, oy, ox);
                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 1, j, fy, fx);
                            res.g += dot(fValue, oValue);
                        } else if (packed_index == 2) {
                            int c2 = ((c + 2) / (`+f.channel+" * 4 / "+T+")) * "+h.channel+` + j;
                            oValue = getValueFromTensorPosPacking_origin(b, c2, oy, ox);
                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 2, j, fy, fx);
                            res.b += dot(fValue, oValue);
                        } else if (packed_index == 3) {
                            int c3 = ((c + 3) / (`+f.channel+" * 4 / "+T+")) * "+h.channel+` + j;
                            oValue = getValueFromTensorPosPacking_origin(b, c3, oy, ox);
                            fValue = getValueFromTensorPosPacking_filter(c * 4 + 3, j, fy, fx);
                            res.a += dot(fValue, oValue);
                        }
                    }
                }
                ox += `+_n+`;
            }
            oy += `+yn+`;
        }

        `+(P?"res += getValueFromTensorPosPacking_bias(0, c, 0, 0);":"")+`

        if (`+X+`) {
            res = max(vec4(0.0, 0.0, 0.0, 0.0), res);
        }
        else if (`+(D==="relu6")+`) {
            res = min(max(vec4(0.0, 0.0, 0.0, 0.0), res), vec4(6.0, 6.0, 6.0, 6.0));
        }
        else if (`+(D==="hard_swish")+`) {
            res = res * min(
                max(vec4(0.0, 0.0, 0.0, 0.0), res + vec4(`+W+`)),
                vec4(`+q+`)
            ) / vec4(`+z+`);
        }

        setPackedOutput(res);
    }
    `},textureFuncConf:{filter:["getValueFromTensorPosPacking"],origin:["getValueFromTensorPosPacking"],bias:["getValueFromTensorPosPacking"]},behaviors:["adaptPaddings","isApplySeparableConv","batchComputeConv2d","processBias"]},conv2d_transpose:{mainFunc:function(l,s){var a=l.origin,h=l.filter,f=l.out,P=l.bias,_=s.groups,T=_===void 0?1:_,b=s.strides,E=b===void 0?[]:b,C=s.paddings,O=C===void 0?[]:C,L=s.dilations,M=L===void 0?[]:L,X=s.fuse_relu,D=s.act_type,k=E[0],W=k===void 0?1:k,j=E[1],z=j===void 0?1:j,G=O[0],q=G===void 0?0:G,en=O[1],cn=en===void 0?0:en;cn=h.height_shape-cn-1,q=h.width_shape-q-1;var H=M[0],Q=H===void 0?1:H,Z=M[1],K=Z===void 0?1:Z;return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        int x = oPos.a;
        int c = oPos.g;
        int y = oPos.b;
        int b = oPos.r;
        float res = 0.0;
        int temp_x = 0;
        int temp_y = 0;
        float o = 0.0;
        float f = 0.0;

        // \u83B7\u53D6output\u7684\u5750\u6807
        int oTensorChannel = int(c * `+T+" / "+f.channel+") * "+a.channel+`;
        int oy = y - `+cn+`;
        const int groupLen = int(`+a.channel+" / "+T+`);
        int groupIndex = int(c / groupLen);

        for (int fy = 0; fy < `+h.height_shape+`; fy++) {
            if (oy < 0) {
                oy += `+Q+`;
                continue;
            }
            int ox = x - `+q+`;
            for (int fx = 0; fx < `+h.width_shape+`; fx++) {

                if (ox < 0) {
                    ox += `+K+`;
                    continue;
                }
                // channel\u8BA1\u7B97
                for (int j = 0; j < groupLen; j++) {
                    int curIndex = j + b * groupLen;
                    if (calMod(ox, int(`+z+")) == 0 && calMod(oy, int("+W+`)) == 0) {
                        temp_x = int(floor(float(ox) / float(`+z+`)));
                        temp_y = int(floor(float(oy) / float(`+W+`)));
                        if (temp_x < `+a.width_shape+" && temp_y < "+a.height_shape+`) {
                            o = getValueFromTensorPos_origin(b, curIndex , temp_y, temp_x);
                            f = getValueFromTensorPos_filter(
                                curIndex,
                                int(c / `+T+`),
                                `+h.height_shape+`-1-fy,
                                `+h.width_shape+`-1-fx
                            );
                            res += f * o;
                        }
                    }
                }
                ox += `+K+`;
            }
            oy += `+Q+`;
        }
        
        `+(P?"res += getValueFromTensorPos_bias(0, 0, 0, c);":"")+`
        
        if (`+X+`) {
            res = max(0.0, res);
        }
        else if (`+(D==="relu6")+`) {
            res = min(max(0.0, res), 6.0);
        }
        
        setOutput(float(res));
    }
`},textureFuncConf:{filter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"],bias:["getValueFromTensorPos"]},behaviors:["adaptPaddings","isApplySeparableConv","batchComputeConv2d","processBias"]},depthwise_conv2d:Qn,conv2d_depthwise:Qn,conv2d_elementwise_add:{mainFunc:function(l,s){var a=l.origin,h=l.filter,f=l.out,P=l.counter,_=s.active_function,T=s.groups,b=T===void 0?1:T,E=s.axis,C=s.strides,O=C===void 0?[]:C,L=s.paddings,M=L===void 0?[]:L,X=s.dilations,D=X===void 0?[]:X,k=s.multi_value,W=s.bias_value,j=O[0],z=j===void 0?1:j,G=O[1],q=G===void 0?1:G,en=M[0],cn=en===void 0?0:en,H=M[1],Q=H===void 0?0:H,Z=D[0],K=Z===void 0?1:Z,rn=D[1],vn=rn===void 0?1:rn;return`
    // start\u51FD\u6570

    float getValueFromCounter(int index) {
        float xPos = float(index) / float(`+P.width_shape+`);
        vec4 pixels = TEXTURE2D(texture_counter, vec2(xPos, 0.5));
        return pixels.r;
    }
    void main(void) {
        ivec4 oPos = getOutputTensorPos();

        int x = oPos.a;
        int c = oPos.g;
        int y = oPos.b;
        int b = oPos.r;
        int addAxis = oPos[`+E+`];
        float res = getValueFromCounter(addAxis);

        // \u83B7\u53D6output\u7684\u5750\u6807
        int oTensorChannel = (c / (`+f.channel+" / "+b+")) * "+h.channel+`;
        int oy = y * `+z+" - "+cn+`;
        for (int fy = 0; fy < `+h.height_shape+`; fy++) {
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                oy += `+K+`;
                continue;
            }
            int ox = x * `+q+" - "+Q+`;
            for (int fx = 0; fx < `+h.width_shape+`; fx++) {
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    ox += `+vn+`;
                    continue;
                }
                // channel\u8BA1\u7B97
                for (int j = 0; j < `+h.channel+`; j++) {
                    float f = getValueFromTensorPos_filter(c, j, fy, fx);
                    float o = getValueFromTensorPos_origin(b, oTensorChannel + j, oy, ox);
                    res += f * o;
                }
                ox += `+vn+`;
            }
            oy += `+K+`;
        }
        setOutput(`+_+"(res,  "+k+",  "+W+`));
    }
`},textureFuncConf:{filter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"],counter:["getValueFromTensorPos"]},behaviors:["mergeAttrs","checkIsMerge","setActiveFunc"]},pool2d:{mainFunc:function(l,s){var a=l.origin,h=s.strides,f=h===void 0?[]:h,P=s.paddings,_=P===void 0?[]:P,T=s.pooling_type,b=s.ksize,E=f[0],C=E===void 0?1:E,O=f[1],L=O===void 0?1:O,M=_[0],X=M===void 0?0:M,D=_[1],k=D===void 0?0:D,W=b[0],j=b[1];return`
    // start\u51FD\u6570
    void main(void) {
        float res = 0.0;
        if (`+T+` == 1) {
            res = -1.70141184e38;
        }
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        // X\u3001Y\u65B9\u5411\u7684\u79FB\u52A8\u6B65\u957F
        int count_pool = 0;
        int oy_base = out_pos[2] * `+C+" - "+X+`;
        int ox_base = out_pos[3] * `+L+" - "+k+`;
        for (int fy = 0; fy < `+W+`; fy++) {
            int oy = oy_base + fy;
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                continue;
            }
            for (int fx = 0; fx < `+j+`; fx++) {
                int ox = ox_base + fx;
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    continue;
                }
                // origin\u6570\u636E
                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);
                if (`+T+` == 1) {
                    if (curr > res) {
                        res = curr;
                    }
                } else {
                    res += curr;
                    // \u5728\u5E73\u5747\u6C60\u5316\u6A21\u5F0F\u5FFD\u7565\u586B\u5145\u503C(exclusive\u9ED8\u8BA4\u4E3Atrue\uFF09
                    count_pool++;
                }
            }
        }
        if (`+T+` != 1) {
            res = res / float(count_pool);
        }
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["isMax","setPacked","setAdaptive","isGlobalPooling"]},pool2d_max:{mainFunc:function(l,s){var a=l.origin,h=s.strides,f=h===void 0?[]:h,P=s.paddings,_=P===void 0?[]:P,T=s.ksize,b=s.global_pooling,E=s.runtime,C=f[0],O=C===void 0?1:C,L=f[1],M=L===void 0?1:L,X=_[0],D=X===void 0?0:X,k=_[1],W=k===void 0?0:k,j=T[0],z=T[1],G=(function(cn){var H=cn.total_shape,Q=cn.channel,Z=cn.height_shape,K=cn.width_shape;return[H/Q/Z/K,Q,Z,K]})(a),q="",en="setOutput(float(res));";return E===0&&b===!0&&(q=`
            if (curr > res) {
                index = `+G[2]*G[3]+" * out_pos[1] + "+G[3]+` * oy + ox;
            }
        `,en="setOutput(float(index));"),`
    // start\u51FD\u6570
    void main(void) {
        float res = -1.70141184e38;
        int index = 0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        int b = out_pos[0];
        int c = out_pos[1];
        int y = out_pos[2];
        int x = out_pos[3];
        // X\u3001Y\u65B9\u5411\u7684\u79FB\u52A8\u6B65\u957F
        int oy_base = out_pos[2] * `+O+" - "+D+`;
        int ox_base = out_pos[3] * `+M+" - "+W+`;
        for (int fy = 0; fy < `+j+`; fy++) {
            int oy = oy_base + fy;
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                continue;
            }
            for (int fx = 0; fx < `+z+`; fx++) {
                int ox = ox_base + fx;
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    continue;
                }
                // origin\u6570\u636E
                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);
                `+q+`
                res = max(res, curr);
            }
        }
        `+en+`
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["isMax","setPacked","setAdaptive","isGlobalPooling"]},pool2d_winograd:{mainFunc:function(l,s){var a=l.origin,h=l.pool,f=s.strides,P=f===void 0?[]:f,_=s.paddings,T=_===void 0?[]:_,b=s.type_pool,E=P[0],C=E===void 0?1:E,O=P[1],L=O===void 0?1:O,M=T[0],X=M===void 0?0:M,D=T[1],k=D===void 0?0:D,W=a.height_shape,j=a.width_texture,z=a.height_texture;return`

    float getValueFromTensorPosPacked_origin(int r, int g, int b, int a) {
        int y = b / 2;
        int yOffset = calMod(b, 2);
        int x = a / 2;
        int xOffset = calMod(a, 2);
        int height = `+W+" + "+a.offset_y+`;
        vec4 pixels = TEXTURE2D(
            texture_origin,
            vec2((float(x) + 0.5) / float(`+j+`),
            (float(g * height / 2 + y) + 0.5) / float(`+z+`))
        );
        int index = 0;
        if (xOffset == 0 && yOffset == 0) {
            return pixels[0];
        }
        else if (xOffset == 1 && yOffset == 0) {
            return pixels[1];
        }
        else if (xOffset == 0 && yOffset == 1) {
            return pixels[2];
        }
        return pixels[3];
    }

    // start\u51FD\u6570
    void main(void) {
        float res = (-1.0 / exp(-20.0));
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        // int b = out_pos[0];
        // int c = out_pos[1];
        // int y = out_pos[2];
        // int x = out_pos[3];
        // X\u3001Y\u65B9\u5411\u7684\u79FB\u52A8\u6B65\u957F
        int count_pool = 0;
        int oy_base = out_pos[2] * `+C+" - "+X+`;
        int ox_base = out_pos[3] * `+L+" - "+k+`;

        for (int fy = 0; fy < `+h.height_shape+`; fy++) {
            int oy = oy_base + fy;
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                continue;
            }
            for (int fx = 0; fx < `+h.width_shape+`; fx++) {
                int ox = ox_base + fx;
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    continue;
                }
                // origin\u6570\u636E
                float curr = getValueFromTensorPosPacked_origin(out_pos[0], out_pos[1], oy, ox);
                if (`+b+` == 1) {
                    if (curr > res) {
                        res = curr;
                    }
                } else {
                    res += curr;
                    // \u5728\u5E73\u5747\u6C60\u5316\u6A21\u5F0F\u5FFD\u7565\u586B\u5145\u503C(exclusive\u9ED8\u8BA4\u4E3Atrue\uFF09
                    count_pool++;
                }
            }
        }
        if (`+b+` != 1) {
            res = res / float(count_pool);
        }
        setOutput(res);
    }
    `},behaviors:["isMax","setPacked","setAdaptive","isGlobalPooling"]},elementwise_add:{mainFunc:function(l,s){var a=s.counterPos,h=s.Scale_y,f=h===void 0?1:h,P=s.Scale_x,_=P===void 0?1:P,T=s.Scale_out,b=T===void 0?1:T;return`
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);

        float c = getValueFromTensorPos_counter(`+a+`);
        float res = float(`+b/f+") * c + float("+b/_+`) * o;
        setOutput(float(res));
    }
    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:["processElementwiseAxis","genElementwiseCounterPos"]},elementwise_mul:{mainFunc:function(l,s){var a=l.counter,h=s.counterPos,f=s.Scale_y,P=f===void 0?1:f,_=s.Scale_x,T=_===void 0?1:_,b=s.Scale_out,E=b===void 0?1:b;return`
    ivec4 formatNCHW(int n, int c, int h, int w) {
        int newN = n;
        int newC = c;
        int newH = h;
        int newW = w;

        if (n >= `+a.height_texture/a.height_shape+`) {
            newN = int(`+a.height_texture/a.height_shape+`);
        }
        if (c >= `+a.channel+`) {
            newC = int(`+(a.channel-1)+`);
        }
        if (h >= `+a.height_shape+`) {
            newH = `+(a.height_shape-1)+`;
        }
        if (w >= `+a.width_shape+`) {
            newW = `+(a.width_shape-1)+`;
        }
        return ivec4(newN, newC, newH, newW);
    }

    // start\u51FD\u6570
    void main() {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos1 = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos1.r, oPos1.g, oPos1.b, oPos1.a);
        ivec4 oPos = formatNCHW(oPos1.r, oPos1.g, oPos1.b, oPos1.a);

        float c = getValueFromTensorPos_counter(`+h+`);
        float res = float(`+E/T+") * o * float("+1/P+`) * c;
        setOutput(float(res));
    }

    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:["processElementwiseAxis","genElementwiseCounterPos"]},elementwise_div:{mainFunc:function(l,s){var a=l.counter,h=s.counterPos,f=s.Scale_y,P=f===void 0?1:f,_=s.Scale_x,T=_===void 0?1:_,b=s.Scale_out,E=b===void 0?1:b;return`
    ivec4 formatNCHW(int n, int c, int h, int w) {
        int newN = n;
        int newC = c;
        int newH = h;
        int newW = w;

        if (n >= `+a.height_texture/a.height_shape+`) {
            newN = int(`+a.height_texture/a.height_shape+`);
        }
        if (c >= `+a.channel+`) {
            newC = int(`+(a.channel-1)+`);
        }
        if (h >= `+a.height_shape+`) {
            newH = `+(a.height_shape-1)+`;
        }
        if (w >= `+a.width_shape+`) {
            newW = `+(a.width_shape-1)+`;
        }
        return ivec4(newN, newC, newH, newW);
    }

    // start\u51FD\u6570
    void main() {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos1 = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos1.r, oPos1.g, oPos1.b, oPos1.a);
        ivec4 oPos = formatNCHW(oPos1.r, oPos1.g, oPos1.b, oPos1.a);

        float c = getValueFromTensorPos_counter(`+h+`);
        float res = float(`+E+") * (float("+1/T+") * o / (float("+1/P+`) * c));
        setOutput(float(res));
    }

    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:["processElementwiseAxis","genElementwiseCounterPos"]},elementwise_pow:{mainFunc:function(l,s){var a=s.counterPos,h=s.Scale_y,f=h===void 0?1:h,P=s.Scale_x,_=P===void 0?1:P,T=s.Scale_out,b=T===void 0?1:T;return`
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);

        float c = getValueFromTensorPos_counter(`+a+`);
        float res = pow(float(`+b/_+") * o, float("+b/f+`) * c);
        setOutput(float(res));
    }
    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:["processElementwiseAxis","genElementwiseCounterPos"]},elementwise_sub:{mainFunc:function(l,s){var a=s.counterPos,h=s.Scale_y,f=h===void 0?1:h,P=s.Scale_x,_=P===void 0?1:P,T=s.Scale_out,b=T===void 0?1:T;return`
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);

        float c = getValueFromTensorPos_counter(`+a+`);
        float res = float(`+b/_+") * o - float("+b/f+`) * c;
        setOutput(float(res));
    }
    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]},behaviors:["processElementwiseAxis","genElementwiseCounterPos"]},mul:{mainFunc:function(l,s){var a=l.origin,h=l.counter,f=s.x_num_col_dims,P=s.y_num_col_dims,_=Bt(a),T=Bt(h),b=yt(_,f),E=b[0],C=b[1],O=b[2],L=b[3],M=b[4],X=yt(T,P),D=X[0],k=X[1],W=X[2],j=X[3];return`
    `+et("x1",E,C)+`
    `+et("x2",O,L)+`
    `+et("y1",D,k)+`
    `+et("y2",W,j)+`

    // start\u51FD\u6570
    void main(void) {
        float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 opos = getOutputTensorPos();
        float temp = 0.0;

        // output is 2D
        int b = opos.b;
        int a = opos.a;

        `+qn(C)+` x1 = getTensorPosFromArrayIndex_x1(b);
        `+qn(j)+` y2 = getTensorPosFromArrayIndex_y2(a);

        for (int j = 0; j < `+M[1]+`; j++) {
            `+qn(L)+` x2 = getTensorPosFromArrayIndex_x2(j);
            `+qn(k)+` y1 = getTensorPosFromArrayIndex_y1(j);

            ivec4 xPos = ivec4(`+qn(C)+"(x1), "+qn(L)+`(x2));
            ivec4 yPos = ivec4(`+qn(k)+"(y1), "+qn(j)+`(y2));

            float o = getValueFromTensorPos_origin(xPos.r, xPos.g, xPos.b, xPos.a);
            float c = getValueFromTensorPos_counter(yPos.r, yPos.g, yPos.b, yPos.a);
            res += c * o;
        }

        setOutput(res);
    }
    `},textureFuncConf:{counter:["getValueFromTensorPos"],origin:["getValueFromTensorPos"]}},matmul:Ht,matmul_v2:Ht,fc:{mainFunc:function(l,s){var a=l.origin,h=l.weight,f=s.x_num_col_dims,P=s.y_num_col_dims,_=Gt(a),T=Gt(h),b=rt(_,f),E=b[0],C=b[1],O=b[2],L=b[3],M=b[4],X=rt(T,P),D=X[0],k=X[1],W=X[2],j=X[3];return`
    `+xt("x1",E,C)+`
    `+xt("x2",O,L)+`
    `+xt("y1",D,k)+`
    `+xt("y2",W,j)+`

    // start\u51FD\u6570
    void main(void) {
        float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 opos = getOutputTensorPos();
        float bias = getValueFromTensorPos_bias(opos.r, opos.g, opos.b, opos.a);
        float temp = 0.0;

        // output is 2D
        int b = opos.b;
        int a = opos.a;

        `+Vn(C)+` x1 = getTensorPosFromArrayIndex_x1(b);
        `+Vn(j)+` y2 = getTensorPosFromArrayIndex_y2(a);

        for (int j = 0; j < `+M[1]+`; j++) {
            `+Vn(L)+` x2 = getTensorPosFromArrayIndex_x2(j);
            `+Vn(k)+` y1 = getTensorPosFromArrayIndex_y1(j);

            ivec4 xPos = ivec4(`+Vn(C)+"(x1), "+Vn(L)+`(x2));
            ivec4 yPos = ivec4(`+Vn(k)+"(y1), "+Vn(j)+`(y2));

            float o = getValueFromTensorPos_origin(xPos.r, xPos.g, xPos.b, xPos.a);
            float c = getValueFromTensorPos_weight(yPos.r, yPos.g, yPos.b, yPos.a);
            res += c * o;
        }

        res = res + bias;
        setOutput(res);
    }
    `},textureFuncConf:{weight:["getValueFromTensorPos"],origin:["getValueFromTensorPos"],bias:["getValueFromTensorPos"]}},dropout:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        if (`+(s.dropout_implementation==="downgrade_in_infer")+`) {
            o = o * (1.0 - float(`+s.dropout_prob+`));
        }
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},concat:{mainFunc:function(l,s){var a=s.dim,h=Object.keys(l).filter((function(_){return _!=="out"})).map((function(_){return l[_]})).map((function(_){var T=_.width_shape,b=_.height_shape,E=_.channel;return[_.total_shape/(T*b*E),E,b,T][a]})),f=h.map((function(_,T){return h.slice(0,T+1).reduce((function(b,E){return b+E}),0)})),P="";return f.forEach((function(_,T){P+=T===0?`
            if (oPos[`+a+"] < "+_+`) {
                o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
            }
            `:`
            else if (oPos[`+a+"] < "+_+`) {
                oPos[`+a+"] = oPos["+a+"] - "+f[T-1]+`;
                o = getValueFromTensorPos_origin_`+T+`(oPos.r, oPos.g, oPos.b, oPos.a);
            }
            `})),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        `+P+`
        setOutput(float(o));
    }
    `},textureFuncConf:{"@all":["getValueFromTensorPos"]},behaviors:["normalizeDim"]},concat_mul:{mainFunc:function(l,s){var a=s.dim,h=Object.keys(l).filter((function(_){return _!=="out"})).map((function(_){return l[_]})).map((function(_){var T=_.width_shape,b=_.height_shape,E=_.channel;return[_.total_shape/(T*b*E),E,b,T][a]})),f=h.map((function(_,T){return h.slice(0,T+1).reduce((function(b,E){return b+E}),0)})),P="";return f.forEach((function(_,T){P+=T===0?`
            if (oPos[`+a+"] < "+_+`) {
                o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
            }`:`
            else if (oPos[`+a+"] < "+_+`) {
                oPos[`+a+"] = oPos["+a+"] - "+f[T-1]+`;
                o = getValueFromTensorPos_origin_`+T+`(oPos.r, oPos.g, oPos.b, oPos.a);
            }
            `})),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        `+P+`
        setOutput(float(o));
    }
    `},textureFuncConf:{"@all":["getValueFromTensorPos"]},behaviors:["normalizeDim"]},split:{mainFunc:function(l,s){var a=s.target_length,h=s.num,f=s.dim,P=s.sections;return`
    // start\u51FD\u6570
    void main(void) {
        int length = int(`+(P&&P.length>1?P[0]:a/h)+`);
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        oPos[`+f+"] = oPos["+f+`] + layer_run_time * length;
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["normalizeDim"]},softmax:{mainFunc:function(l,s){var a=l.origin,h=s.axis,f=h;return(!h||h<0)&&(f=(h||-1)+4),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        const int n = int(`+a.total_shape+"/"+a.channel+"/"+a.height_shape+"/"+a.width_shape+`);
        float o = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], oPos[3]);
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float total = 0.0;
        float res = 0.0;
        if (`+f+` == 0) {
            for (int i = 0; i < n; i++){
            float temp = getValueFromTensorPos_origin(i, oPos[1], oPos[2], oPos[3]);
            total += exp(temp);
            }
            res = exp(o) / total;
        }
        else if (`+f+` == 1) {
            for (int i = 0; i < `+a.channel+`; i++){
            float temp = getValueFromTensorPos_origin(oPos[0], i, oPos[2], oPos[3]);
            total += exp(temp);
            }
            res = exp(o) / total;
        }
        else {
            for (int i = 0; i < `+a.width_shape+`; i++){
            float temp = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], i);
            total += exp(temp);
            }
            res = exp(o) / total;
        }
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},batchnorm:{mainFunc:function(l,s){var a=l.bias,h=l.scale,f=l.mean,P=l.variance,_=s.epsilon;return`
    // start\u51FD\u6570
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);

        // \u5F52\u4E00\u5316\u6570\u636E
        vec4 scale = getPixelsFromTexturePos_scale(vec2( float(oPos.g) / float(`+h.width_texture+`) + 0.00001, 0.0));
        vec4 bias = getPixelsFromTexturePos_bias(vec2( float(oPos.g) / float(`+a.width_texture+`) + 0.00001, 0.0));
        vec4 mean = getPixelsFromTexturePos_mean(vec2((float(oPos.g)) / float(`+f.width_texture+`)  + 0.00001, 0.0));
        vec4 variance = getPixelsFromTexturePos_variance(
            vec2((float(oPos.g)) / float(`+P.width_texture+`) + 0.00001,
            0.0)
        );

        float x = (o - mean[0]) / sqrt(variance[0] + `+_+`);
        float res = scale[0] * x + bias[0];
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],scale:["getPixelsFromTexturePos"],bias:["getPixelsFromTexturePos"],mean:["getPixelsFromTexturePos"],variance:["getPixelsFromTexturePos"]}},reshape:$n,reshape2:$n,bilinear_interp:qt,transpose2:{mainFunc:function(l,s){var a=s.perm_arr,h=s.perm_size,f=a[0],P=a[1],_=a[2];return`
    // start\u51FD\u6570
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();

        // \u8F6C\u7F6E \u5750\u6807\u53D8\u6362
        float o = 0.0;
        if (`+h+` == 1) {
            o = getValueFromTensorPos_origin(oPos[0], oPos[1], oPos[2], oPos[3]);
        }
        else if (`+h+` == 2) {
            o = getValueFromTensorPos_origin(
                oPos[0], oPos[1],
                oPos[(2 + `+f+") > 3 ? 3 : (2 + "+f+`)],
                oPos[(2 + `+P+") > 3 ? 3 : (2 + "+P+`)]
            );
        }
        else if (`+h+` == 3) {
            o = getValueFromTensorPos_origin(
                oPos[0],
                oPos[(1 + `+f+") > 3 ? 3 : (1 + "+f+`)],
                oPos[(1 + `+P+") > 3 ? 3 : (1 + "+P+`)],
                oPos[(1 + `+_+") > 3 ? 3 : (1 + "+_+`)]
            );
        }
        else if (`+h+` == 4) {
            o = getValueFromTensorPos_origin(
                oPos[`+f+`],
                oPos[`+P+`],
                oPos[`+_+`],
                oPos[`+a[3]+`]
            );
        }

        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["normalizePerm"]},unpacked_2_packed:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main() {
        ivec4 oPos = getOutputTensorPos();
        vec4 out4;
        for (int i = 0; i < 4; i++) {
            vec4 o = getValueFromTensorPosPacking_origin(oPos[0], oPos[1] * 4 + i, oPos[2], oPos[3]);
            out4[i] = o[0];
        }
        setPackedOutput(out4);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPosPacking"]}},packed_2_unpacked:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main() {
        ivec4 oPos = getOutputTensorPos();
        float res = 0.0;
        int c1 = calMod(oPos[1], 4);
        vec4 o = getValueFromTensorPosPacking_origin(oPos[0], oPos[1] / 4, oPos[2], oPos[3]);

        if (c1 == 0) {
            res = o.r;
        } else if (c1 == 1) {
            res = o.g;
        } else if (c1 == 2) {
            res = o.b;
        } else if (c1 == 3) {
            res = o.a;
        }
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPosPacking"]}},unsqueeze2:{mainFunc:function(l,s){var a=l.origin,h=s.axes,f=a.length_unformatted_shape,P=Array.isArray(h)?h:[h],_=4-f-P.length,T=P.map((function(C){return C+_})),b=[0,1,2,3].filter((function(C){return T.indexOf(C)===-1})).map((function(C){return"oPos["+C+"]"})),E=Array.from(new Array(T.length),(function(){return"0"}));return b.splice.apply(b,(function(){for(var C=0,O=0,L=arguments.length;O<L;O++)C+=arguments[O].length;var M=Array(C),X=0;for(O=0;O<L;O++)for(var D=arguments[O],k=0,W=D.length;k<W;k++,X++)M[X]=D[k];return M})([0,0],E)),`
    void main() {
        ivec4 oPos = getOutputTensorPos();
        float o = 0.0;
        o = getValueFromTensorPos_origin(`+b.join(",")+`);
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},flatten_contiguous_range:{mainFunc:function(l,s){var a=l.origin,h=l.out;return`
    void main() {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        int sumVal = oPos.a
            + oPos.b * `+h.width_shape+`
            + oPos.g * `+h.height_shape+" * "+h.width_shape+`
            + oPos.r * `+h.channel+" * "+h.width_shape+" * "+h.height_shape+`;
        ivec4 new_oPos = transferFromNHWCtoNCHW(
            sumVal,
            `+a.channel+`,
            `+a.width_shape+`,
            `+a.height_shape+`,
            `+a.total_shape+`
        );
        float o = getValueFromTensorPos_origin(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},commonFuncConf:["transferFromNHWCtoNCHW"]},flatten2:$n,greater_than:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float x = getValueFromTensorPos_input(oPos.r, oPos.g, oPos.b, oPos.a);
        float y = getValueFromTensorPos_counter(oPos.r, oPos.g, oPos.b, oPos.a);

        setOutput(bool(x >= y));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],counter:["getValueFromTensorPos"]}},reduce_sum:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        for (int i = 0; i < `+s.inputs_dim+`; i++) {
            oPos[`+s.dim+`] = i;
            o += getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);;
        }
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["normalizeDim"]},where:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float x = getValueFromTensorPos_input(oPos.r, oPos.g, oPos.b, oPos.a);
        float y = getValueFromTensorPos_counter(oPos.r, oPos.g, oPos.b, oPos.a);
        float condition = getValueFromTensorPos_condition(oPos.r, oPos.g, oPos.b, oPos.a);
        float o = 0.0;

        if (bool(condition)) {
            o = x;
        }
        else {
            o = y;
        }
        setOutput(o);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],counter:["getValueFromTensorPos"],condition:["getValueFromTensorPos"]}},connect:{mainFunc:function(l,s){var a=l.out,h=a.total_shape,f=a.width_shape,P=a.height_shape,_=a.channel,T=$([h/(f*P*_),_,P,f]),b=Object.keys(l).filter((function(O){return O!=="out"})).map((function(O){return l[O].total_shape})),E=b.map((function(O,L){return b.slice(0,L+1).reduce((function(M,X){return M+X}),0)})),C="";return E.forEach((function(O,L){C+=L===0?`
            if (sumVal < `+O+`) {
                co = getTensorPosFromArrayIndex_origin(sumVal);
                o = getValueFromTensorPos_origin(co.r, co.g, co.b, co.a);
            }`:`
            else if (sumVal < `+O+`) {
                co = getTensorPosFromArrayIndex_origin_`+L+"(sumVal - "+E[L-1]+`);
                o = getValueFromTensorPos_origin_`+L+`(co.r, co.g, co.b, co.a);
            }
            `})),`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        float o = 0.0;
        ivec4 co;
        int sumVal = oPos.b * `+T[2]+` + oPos.a;
        `+C+`
        setOutput(float(o));
    }
    `},textureFuncConf:{"@all":["getValueFromTensorPos","getTensorPosFromArrayIndex"]}},reduce_mean:{mainFunc:function(l,s){var a=s.inputs_dim;return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;
        for (int i = 0; i < `+a+`; i++) {
            oPos[`+s.dim+`] = i;
            o += getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        }
        o = o / float(`+a+`);
        setOutput(o);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["normalizeDim"]},hard_swish:{mainFunc:function(l,s){var a=s.offset,h=a===void 0?3:a,f=s.scale,P=f===void 0?6:f,_=s.threshold;return`
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        float res = o * min(max(0.0, o + float(`+h+")), float("+(_===void 0?6:_)+")) / float("+P+`);
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},nearest_interp:Jt,nearest_interp_v2:Jt,cast:{mainFunc:function(l,s){var a="";switch(s.out_dtype){case 0:a=`
            float res_bool = 0.0;
            if (o != 0.0) {
                res_bool = 1.0;
            }
            setOutput(res_bool);`;break;case 1:case 2:case 3:a=`
            int res_int = int(o);
            setOutput(float(res_int));`;break;default:a=`       
            float res_float = o;
            setOutput(res_float);`}return`
    void main() {
       // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        `+a+`
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},fill_constant_batch_size_like:{mainFunc:function(l,s){return`
    // start\u51FD\u6570
    void main(void) {
        float res = float(`+s.value+`);
        setOutput(res);
    }
`}},rnn_matmul:{mainFunc:function(l,s){var a=l.weightlist_0,h=s.input_axis,f=s.state_axis,P=s.batch,_=s.reverse,T=_!==void 0&&_?P-h-1:h;return`
    void main() {
         float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        
        if (`+(h===0)+`) {
            res = getValueFromTensorPos_origin(out_pos[0], `+T+`, out_pos[2], out_pos[3]);
            setOutput(res);
            return;
        }
        
        ivec4 origin_pos = out_pos;
        ivec4 weight_pos = out_pos;

        weight_pos[1] = 0;
        weight_pos[2] = weight_pos[3];

        float o = 0.0;
        float w_hh = 0.0;
        float prestate_h = 0.0;
        res = getValueFromTensorPos_origin(out_pos[0], `+T+`, out_pos[2], out_pos[3]);
        for (int j = 0; j < `+a.width_shape+`; j++) {
            prestate_h = getValueFromTensorPos_prestate(origin_pos[0], origin_pos[1], origin_pos[2], j);
            w_hh = getValueFromTensorPos_weightlist_0(out_pos[0], `+f+`, out_pos[3], j);
            o += w_hh * prestate_h;
        }
        res += o;

        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],prestate:["getValueFromTensorPos"],weightlist_0:["getValueFromTensorPos"]}},rnn_hidden:{mainFunc:function(l,s){var a=s.state_axis,h=s.hidden_size;return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        float origin = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        float cell = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+h+`);
        float appender = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+2*h+`);
        float fourth = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+3*h+`);
        float counter  = getValueFromTensorPos_counter(oPos.r, `+a+`, oPos.b, oPos.a);
        float i = 1.0 / (1.0 + exp(-origin));
        float f = 1.0 / (1.0 + exp(-cell));
        float o = 1.0 / (1.0 + exp(-fourth));
        float c = f * counter + i * tanh_calc(appender);
        float h = o * tanh_calc(c);
        
        setOutput(h);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],counter:["getValueFromTensorPos"]}},rnn_cell:{mainFunc:function(l,s){var a=s.state_axis,h=s.hidden_size;return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        float origin = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a);
        float cell = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+h+`);
        float appender = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+2*h+`);
        float fourth = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b, oPos.a + `+3*h+`);
        float counter  = getValueFromTensorPos_counter(oPos.r, `+a+`, oPos.b, oPos.a);
        float i = 1.0 / (1.0 + exp(-origin));
        float f = 1.0 / (1.0 + exp(-cell));
        float c = f * counter + i * tanh_calc(appender);
        
        setOutput(c);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],counter:["getValueFromTensorPos"]}},rnn_origin:{mainFunc:function(l,s){var a=l.weightlist_0,h=l.weightlist_1,f=s.state_axis;return`
    void main() {
        float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        ivec4 origin_pos = out_pos;
        ivec4 weight_pos = out_pos;
      
        weight_pos[1] = 0;
        weight_pos[2] = weight_pos[3];

        float b_ih = getValueFromTensorPos_weightlist_2(0, 0, 0, out_pos[3]);
        float b_hh = getValueFromTensorPos_weightlist_3(0, 0, 0, out_pos[3]);
        
        for (int j = 0; j < `+a.width_shape+`; j++) {
            float o = getValueFromTensorPos_origin(origin_pos[0], origin_pos[1], 0, j);
            float w_ih = getValueFromTensorPos_weightlist_0(0, 0, out_pos[3], j);
            res += w_ih * o;
        }
        res += b_ih;

        for (int j = 0; j < `+h.width_shape+`; j++) {
                float prestate = getValueFromTensorPos_prestate(0, 0, 0, j);
                float w_hh = getValueFromTensorPos_weightlist_1(0, `+f+`, out_pos[3], j);
                res += w_hh * prestate;
        }
        res += b_hh;
 
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"],prestate:["getValueFromTensorPos"],weightlist_0:["getValueFromTensorPos"],weightlist_1:["getValueFromTensorPos"],weightlist_2:["getValueFromTensorPos"],weightlist_3:["getValueFromTensorPos"]}},pool2d_avg:{mainFunc:function(l,s){var a=l.origin,h=s.strides,f=h===void 0?[]:h,P=s.paddings,_=P===void 0?[]:P,T=s.ksize,b=f[0],E=b===void 0?1:b,C=f[1],O=C===void 0?1:C,L=_[0],M=L===void 0?0:L,X=_[1],D=X===void 0?0:X,k=T[0],W=T[1];return`
    // start\u51FD\u6570
    void main(void) {
        float res = 0.0;
        // \u83B7\u53D6output\u7684\u5750\u6807
        ivec4 out_pos = getOutputTensorPos();
        // X\u3001Y\u65B9\u5411\u7684\u79FB\u52A8\u6B65\u957F
        int oy_base = out_pos[2] * `+E+" - "+M+`;
        int ox_base = out_pos[3] * `+O+" - "+D+`;
        for (int fy = 0; fy < `+k+`; fy++) {
            int oy = oy_base + fy;
            if (oy >= `+a.height_shape+`) {
                break;
            }
            if (oy < 0) {
                continue;
            }
            for (int fx = 0; fx < `+W+`; fx++) {
                int ox = ox_base + fx;
                if (ox >= `+a.width_shape+`) {
                    break;
                }
                if (ox < 0) {
                    continue;
                }
                // origin\u6570\u636E
                float curr = getValueFromTensorPos_origin(out_pos[0], out_pos[1], oy, ox);
                res += curr;
                // \u5728\u5E73\u5747\u6C60\u5316\u6A21\u5F0F\u5FFD\u7565\u586B\u5145\u503C(exclusive\u9ED8\u8BA4\u4E3Atrue\uFF09
            }
        }
        res = res / float(`+k+" * "+W+`);
        setOutput(res);
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},behaviors:["setPacked","setAdaptive","isGlobalPooling"]},prelu:wn("prelu"),relu6:wn("relu6"),leakyRelu:wn("leakyRelu"),scale:wn("scale"),sigmoid:wn("sigmoid"),relu:wn("relu"),hard_sigmoid:wn("hard_sigmoid"),pow:wn("pow"),sqrt:wn("sqrt"),tanh:wn("tanh"),exp:wn("exp"),squeeze2:zn,pad3d:{mainFunc:function(l,s){var a=l.origin,h=s.paddings,f=s.mode,P=s.value,_=(function(b){var E=b.total_shape,C=b.channel,O=b.height_shape,L=b.width_shape;return[E/C/O/L,C,O,L]})(a),T={reflect:`
            int a;
            int b;
            if (oPos.a - `+h[0]+` < 0) {
                a = `+h[0]+` - oPos.a;
            }
            else if (oPos.a - `+h[0]+" >= "+_[3]+`) {
                a = `+_[3]+" - (oPos.a - "+h[0]+" - "+_[3]+` + 1) - 1;
            }
            else {
                a = oPos.a - `+h[0]+`;
            }
            if (oPos.b - `+h[2]+` < 0) {
                b = `+h[2]+` - oPos.b;
            }
            else if (oPos.b - `+h[2]+" >= "+_[2]+`) {
                b = `+_[2]+" - (oPos.b - "+h[2]+" - "+_[2]+` + 1) - 1;
            }
            else {
                b = oPos.b - `+h[2]+`;
            }
            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);
        `,replicate:`
            int a;
            int b;
            if (oPos.a - `+h[0]+` < 0) {
                a = 0;
            }
            else if (oPos.a - `+h[0]+" >= "+_[3]+`) {
                a = `+_[3]+` - 1;
            }
            else {
                a = oPos.a - `+h[0]+`;
            }
            if (oPos.b - `+h[2]+` < 0) {
                b = 0;
            }
            else if (oPos.b - `+h[2]+" >= "+_[2]+`) {
                b = `+_[2]+` - 1;
            }
            else {
                b = oPos.b - `+h[2]+`;
            }
            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);
        `,circular:`
            int a;
            int b;
            if (oPos.a - `+h[0]+` < 0) {
                a = int(mod(float(`+h[0]+" + oPos.a - 1), float("+_[3]+`)));
            }
            else if (oPos.a - `+h[0]+" >= "+_[3]+`) {
                a = int(mod(float(oPos.a - `+h[0]+" - "+_[3]+"), float("+_[3]+`)));
            }
            else {
                a = oPos.a - `+h[0]+`;
            }
            if (oPos.b - `+h[2]+` < 0) {
                b = int(mod(float(`+h[2]+" + oPos.b - 1), float("+_[2]+`)));
            }
            else if (oPos.b - `+h[2]+" >= "+_[2]+`) {
                b = int(mod(float(oPos.b - `+h[2]+" - "+_[2]+"), float("+_[2]+`)));
            }
            else {
                b = oPos.b - `+h[2]+`;
            }
            o = getValueFromTensorPos_origin(oPos.r, oPos.g, b, a);
        `,constant:"",undefined:""};return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        float o = `+(P||"0.0")+`;
        if (oPos.a - `+h[0]+` >= 0
            && oPos.b - `+h[2]+` >= 0
            && oPos.a - `+h[0]+" < "+_[3]+`
            && oPos.b - `+h[2]+" < "+_[2]+`
        ) {
            o = getValueFromTensorPos_origin(oPos.r, oPos.g, oPos.b - `+h[2]+", oPos.a - "+h[0]+`);
        }
        else {
            `+T[f]+`
        }
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]}},bilinear_interp_v2:zt,shuffle_channel:{mainFunc:function(l,s){var a=l.out,h=s.group,f=h===void 0?2:h,P=a.total_shape,_=a.height_shape,T=a.width_shape,b=a.channel,E=[1,0,2,3];return`
    // start\u51FD\u6570
    void main(void) {
        // \u8F93\u51FA\u6570\u636E
        ivec4 oPos = getOutputTensorPos();
        float o = 0.0;

        int sumVal = oPos.a
            + oPos.b * `+T+`
            + oPos.g * `+_+" * "+T+`
            + oPos.r * `+b+" * "+T+" * "+_+`;

        ivec4 transpose_out_pos = transferFromNHWCtoNCHW(
            sumVal,
            `+f+`,
            `+T+`,
            `+_+`,
            `+P+`
        );

        ivec4 transpose_in_pos = ivec4(transpose_out_pos[`+E[0]+`],
            transpose_out_pos[`+E[1]+"], transpose_out_pos["+E[2]+"], transpose_out_pos["+E[3]+`]);
        int sumVal2 = transpose_in_pos.a
            + transpose_in_pos.b * `+T+`
            + transpose_in_pos.g * `+_+" * "+T+`
            + transpose_in_pos.r * `+b/f+" * "+T+" * "+_+`;
        ivec4 origin_oPos = transferFromNHWCtoNCHW(
            sumVal2,
            `+b+`,
            `+T+`,
            `+_+`,
            `+P+`
        );


        o = getValueFromTensorPos_origin(
            origin_oPos[0],
            origin_oPos[1],
            origin_oPos[2],
            origin_oPos[3]
        );

        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},commonFuncConf:["transferFromNHWCtoNCHW"]},pack_out:{mainFunc:function(l,s){return`

    // start\u51FD\u6570
    void main() {
        ivec4 oPos = getOutputTensorPos();
        vec2 outCoord = vCoord.xy * _2d_shape_texture_out;
        int index = int(outCoord.x) + int(outCoord.y) * int(`+l.out.width_texture+`);

        int first = index * 4;
        int sec = index * 4 + 1;
        int third = index * 4 + 2;
        int fourth = index * 4 + 3;

        ivec4 rPos = getTensorPosFromArrayIndex_origin(first);
        ivec4 gPos = getTensorPosFromArrayIndex_origin(sec);
        ivec4 bPos = getTensorPosFromArrayIndex_origin(third);
        ivec4 aPos = getTensorPosFromArrayIndex_origin(fourth);

        float r = getValueFromTensorPos_origin(rPos.r, rPos.g, rPos.b, rPos.a);
        float g = getValueFromTensorPos_origin(gPos.r, gPos.g, gPos.b, gPos.a);
        float b = getValueFromTensorPos_origin(bPos.r, bPos.g, bPos.b, bPos.a);
        float a = getValueFromTensorPos_origin(aPos.r, aPos.g, aPos.b, aPos.a);

        setPackedOutput(vec4(r, g, b, a));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos","getTensorPosFromArrayIndex"]}},nhwc_2_nchw:{mainFunc:function(l,s){var a=l.origin,h=l.out;return`
    void main() {
        ivec4 oPos = getOutputTensorPos();
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        int sumVal = oPos.a * `+h.channel+`
            + oPos.b * `+h.width_shape+" * "+h.channel+`
            + oPos.g
            + oPos.r * `+h.channel+" * "+h.width_shape+" * "+h.height_shape+`;
        ivec4 new_oPos = transferFromNHWCtoNCHW(
            sumVal,
            `+a.channel+`,
            `+a.width_shape+`,
            `+a.height_shape+`,
            `+a.total_shape+`
        );
        float o = getValueFromTensorPos_origin(new_oPos.r, new_oPos.g, new_oPos.b, new_oPos.a);
        setOutput(float(o));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPos"]},commonFuncConf:["transferFromNHWCtoNCHW"]},feedPost:{mainFunc:function(l,s){var a=l.out,h=s.mean,f=h===void 0?[0,0,0]:h,P=s.std,_=P===void 0?[1,1,1]:P,T=a.total_shape,b=a.height_shape,E=a.width_shape,C=a.channel;return`
    // start\u51FD\u6570
    void main(void) {
        ivec4 nhwcPos = getOutputTensorPos();
        int sumVal = nhwcPos.a
            + nhwcPos.b * `+E+`
            + nhwcPos.g * `+b+" * "+E+`
            + nhwcPos.r * `+C+" * "+E+" * "+b+`;

        ivec4 oPos = transferFromNHWCtoNCHW(
            sumVal,
            `+C+`,
            `+E+`,
            `+b+`,
            `+T+`
        );
        float res = 0.0;
        int c1 = int(mod(float(oPos[1]), 4.0));
        int c = oPos[1];
        vec4 o = getValueFromTensorPosPacking_origin(oPos[0], c / 4, oPos[2], oPos[3]);

        if (c1 == 0) {
            res = o.r;
        } else if (c1 == 1) {
            res = o.g;
        } else if (c1 == 2) {
            res = o.b;
        } else if (c1 == 3) {
            res = o.a;
        }

        if (c == 0) {
            res = (res - float(`+f[0]+")) / float("+_[0]+`);
        } else if (c == 1) {
            res = (res - float(`+f[1]+")) / float("+_[1]+`);
        } else if (c == 2) {
            res = (res - float(`+f[2]+")) / float("+_[2]+`);
        }
        setOutput(float(res));
    }
    `},textureFuncConf:{origin:["getValueFromTensorPosPacking"]},commonFuncConf:["transferFromNHWCtoNCHW"]},imgFeed:{mainFunc:function(){return`
    uniform vec2 u_scale;
    uniform int u_keep_ratio;

    void main(void) {
        vec2 outCoord = vCoord.xy;
        // \u652F\u6301\u6A21\u578B\u4E0D\u6309\u6BD4\u4F8B\u62C9\u4F38
        if (u_keep_ratio == 0) {
            vec4 origin = TEXTURE2D(texture_origin, outCoord);
            setPackedOutput(origin);
            return;
        }
        float startX = (1.0 - u_scale.x) / 2.0;
        float endX = startX + u_scale.x;
        float startY = (1.0 - u_scale.y) / 2.0;
        float endY = startY + u_scale.y;

        if (outCoord.x >= startX && outCoord.x <= endX && outCoord.y >= startY && outCoord.y <= endY) {
            vec2 newPos = (outCoord - vec2(startX, startY)) / u_scale;
            vec4 origin = TEXTURE2D(texture_origin, newPos);
            setPackedOutput(origin);
        }
        else {
            setPackedOutput(vec4(1.0));
        }
    }
    `},textureFuncConf:{origin:[]}},box_coder:{mainFunc:function(l,s){var a=s.code_type==="decode_center_size";return`
    // start\u51FD\u6570
    vec2 getPriorBoxData(int r, int g, int b, int m, int n) {
        float start = getValueFromTensorPos_priorbox(r, g, b, m);
        float end = getValueFromTensorPos_priorbox(r, g, b, n);
        float len = end - start;
        return vec2(start + len / 2.0, len);
    }
    vec2 getBoxVarData(int r, int g, int b, int m, int n) {
        return vec2(
            getValueFromTensorPos_priorboxvar(r, g, b, m),
            getValueFromTensorPos_priorboxvar(r, g, b, n)
        );
    }
    vec2 getTargetBoxData(int r, int g, int b, int m, int n) {
        `+(a?`
            return vec2(
                getValueFromTensorPos_targetbox(r, g, b, m),
                getValueFromTensorPos_targetbox(r, g, b, n)
            );
        `:`
            float start = getValueFromTensorPos_targetbox(r, g, b, m);
            float end = getValueFromTensorPos_targetbox(r, g, b, n);
            float len = end - start;
            return vec2(start + len / 2.0, len);
        `)+`
    }

    void main(void) {
        ivec4 oPos = getOutputTensorPos();
        int r = int(oPos.r);
        int g = int(oPos.g);
        int b = int(oPos.b);
        int a = int(oPos.a);
        // \u8F93\u51FA\u5750\u6807\u8F6C\u6362\u4E3A\u8F93\u5165\u5750\u6807
        float o = 0.0;

        int m = 0;
        int n = 0;
        if (a == 0 || a == `+(a?2:1)+`) {
            m = 0;
            n = 2;
        }
        else {
            m = 1;
            n = 3;
        }
        vec2 priorbox = getPriorBoxData(r, g, b, m, n);
        vec2 boxvar = getBoxVarData(r, g, b, m, n);
        vec2 targetbox = getTargetBoxData(r, g, b, m, n);
        float p1 = priorbox.r;
        float p2 = priorbox.g;
        float t1 = targetbox.r;
        float t2 = targetbox.g;
        float v1 = boxvar.r;
        float v2 = boxvar.g;

        `+(a?`
            float b1 = p2 * v1 * t1 + p1;
            float b2 = exp(v2 * t2) * p2;
            if (a == 0 || a == 1) {
                o = b1 - b2 / 2.0 ;
            }
            else {
                o = b1 + b2 / 2.0;
            }
        `:`
            if (a == 0 || a == 1) {
                o = (t1 - p1) / p2 / v1;
            }
            else {
                o = log(abs(t2 / p2)) / v2;
            }
        `)+`
        setOutput(float(o));
    }
    `},textureFuncConf:{targetbox:["getValueFromTensorPos"],priorbox:["getValueFromTensorPos"],priorboxvar:["getValueFromTensorPos"]},behaviors:[]},density_prior_box:m,prior_box:p,stack:d,slice:y},I=new Nt;(function(l,s,a){l&&(B.backend=l),s&&(B.backendInstance=s),a&&Object.keys(a).forEach((function(h){(function(f,P){var _=f.conf,T=f.params,b=f.main,E=f.mainFunc,C=f.textureFuncConf,O=f.commonFuncConf,L=f.behaviors,M=L===void 0?[]:L,X=B.backend+"_"+P;B.opRegistry.ops[X]||(B.opRegistry.ops[X]={name:P,conf:_,params:T,main:b,mainFunc:E,textureFuncConf:C,commonFuncConf:O,behaviors:M})})(a[h],h)}))})("webgl",I,g)}},t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}return e.d=(r,i)=>{for(var u in i)e.o(i,u)&&!e.o(r,u)&&Object.defineProperty(r,u,{enumerable:!0,get:i[u]})},e.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}})(),e.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),e.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e(400)})()}))});var Re=ot((Ko,Yt)=>{"use strict";var Dr=!1,dt=!1,Xe=!0,Ne=!1,o={},Be=!1;typeof Yt<"u"&&Yt.exports?(Yt.exports=o,Be=!0):typeof document<"u"?window.ClipperLib=o:self.ClipperLib=o;var Zt;Be?(In="chrome",Zt="Netscape"):(In=navigator.userAgent.toString().toLowerCase(),Zt=navigator.appName);var In,pn={};In.indexOf("chrome")!=-1&&In.indexOf("chromium")==-1?pn.chrome=1:pn.chrome=0;In.indexOf("chromium")!=-1?pn.chromium=1:pn.chromium=0;In.indexOf("safari")!=-1&&In.indexOf("chrome")==-1&&In.indexOf("chromium")==-1?pn.safari=1:pn.safari=0;In.indexOf("firefox")!=-1?pn.firefox=1:pn.firefox=0;In.indexOf("firefox/17")!=-1?pn.firefox17=1:pn.firefox17=0;In.indexOf("firefox/15")!=-1?pn.firefox15=1:pn.firefox15=0;In.indexOf("firefox/3")!=-1?pn.firefox3=1:pn.firefox3=0;In.indexOf("opera")!=-1?pn.opera=1:pn.opera=0;In.indexOf("msie 10")!=-1?pn.msie10=1:pn.msie10=0;In.indexOf("msie 9")!=-1?pn.msie9=1:pn.msie9=0;In.indexOf("msie 8")!=-1?pn.msie8=1:pn.msie8=0;In.indexOf("msie 7")!=-1?pn.msie7=1:pn.msie7=0;In.indexOf("msie ")!=-1?pn.msie=1:pn.msie=0;o.biginteger_used=null;var at,Mr=0xdeadbeefcafe,Le=(Mr&16777215)==15715070;function Y(n,t,e){o.biginteger_used=1,n!=null&&(typeof n=="number"&&typeof t>"u"?this.fromInt(n):typeof n=="number"?this.fromNumber(n,t,e):t==null&&typeof n!="string"?this.fromString(n,256):this.fromString(n,t))}function dn(){return new Y(null)}function Yr(n,t,e,r,i,u){for(;--u>=0;){var c=t*this[n++]+e[r]+i;i=Math.floor(c/67108864),e[r++]=c&67108863}return i}function Vr(n,t,e,r,i,u){for(var c=t&32767,v=t>>15;--u>=0;){var x=this[n]&32767,w=this[n++]>>15,F=v*x+w*c;x=c*x+((F&32767)<<15)+e[r]+(i&1073741823),i=(x>>>30)+(F>>>15)+v*w+(i>>>30),e[r++]=x&1073741823}return i}function Rr(n,t,e,r,i,u){for(var c=t&16383,v=t>>14;--u>=0;){var x=this[n]&16383,w=this[n++]>>14,F=v*x+w*c;x=c*x+((F&16383)<<14)+e[r]+i,i=(x>>28)+(F>>14)+v*w,e[r++]=x&268435455}return i}Le&&Zt=="Microsoft Internet Explorer"?(Y.prototype.am=Vr,at=30):Le&&Zt!="Netscape"?(Y.prototype.am=Yr,at=26):(Y.prototype.am=Rr,at=28);Y.prototype.DB=at;Y.prototype.DM=(1<<at)-1;Y.prototype.DV=1<<at;var me=52;Y.prototype.FV=Math.pow(2,me);Y.prototype.F1=me-at;Y.prototype.F2=2*at-me;var kr="0123456789abcdefghijklmnopqrstuvwxyz",Qt=new Array,wt,kn;wt=48;for(kn=0;kn<=9;++kn)Qt[wt++]=kn;wt=97;for(kn=10;kn<36;++kn)Qt[wt++]=kn;wt=65;for(kn=10;kn<36;++kn)Qt[wt++]=kn;function Se(n){return kr.charAt(n)}function De(n,t){var e=Qt[n.charCodeAt(t)];return e??-1}function Wr(n){for(var t=this.t-1;t>=0;--t)n[t]=this[t];n.t=this.t,n.s=this.s}function Ur(n){this.t=1,this.s=n<0?-1:0,n>0?this[0]=n:n<-1?this[0]=n+this.DV:this.t=0}function st(n){var t=dn();return t.fromInt(n),t}function jr(n,t){var e;if(t==16)e=4;else if(t==8)e=3;else if(t==256)e=8;else if(t==2)e=1;else if(t==32)e=5;else if(t==4)e=2;else{this.fromRadix(n,t);return}this.t=0,this.s=0;for(var r=n.length,i=!1,u=0;--r>=0;){var c=e==8?n[r]&255:De(n,r);if(c<0){n.charAt(r)=="-"&&(i=!0);continue}i=!1,u==0?this[this.t++]=c:u+e>this.DB?(this[this.t-1]|=(c&(1<<this.DB-u)-1)<<u,this[this.t++]=c>>this.DB-u):this[this.t-1]|=c<<u,u+=e,u>=this.DB&&(u-=this.DB)}e==8&&(n[0]&128)!=0&&(this.s=-1,u>0&&(this[this.t-1]|=(1<<this.DB-u)-1<<u)),this.clamp(),i&&Y.ZERO.subTo(this,this)}function Hr(){for(var n=this.s&this.DM;this.t>0&&this[this.t-1]==n;)--this.t}function Gr(n){if(this.s<0)return"-"+this.negate().toString(n);var t;if(n==16)t=4;else if(n==8)t=3;else if(n==2)t=1;else if(n==32)t=5;else if(n==4)t=2;else return this.toRadix(n);var e=(1<<t)-1,r,i=!1,u="",c=this.t,v=this.DB-c*this.DB%t;if(c-- >0)for(v<this.DB&&(r=this[c]>>v)>0&&(i=!0,u=Se(r));c>=0;)v<t?(r=(this[c]&(1<<v)-1)<<t-v,r|=this[--c]>>(v+=this.DB-t)):(r=this[c]>>(v-=t)&e,v<=0&&(v+=this.DB,--c)),r>0&&(i=!0),i&&(u+=Se(r));return i?u:"0"}function qr(){var n=dn();return Y.ZERO.subTo(this,n),n}function zr(){return this.s<0?this.negate():this}function Jr(n){var t=this.s-n.s;if(t!=0)return t;var e=this.t;if(t=e-n.t,t!=0)return this.s<0?-t:t;for(;--e>=0;)if((t=this[e]-n[e])!=0)return t;return 0}function $t(n){var t=1,e;return(e=n>>>16)!=0&&(n=e,t+=16),(e=n>>8)!=0&&(n=e,t+=8),(e=n>>4)!=0&&(n=e,t+=4),(e=n>>2)!=0&&(n=e,t+=2),(e=n>>1)!=0&&(n=e,t+=1),t}function Zr(){return this.t<=0?0:this.DB*(this.t-1)+$t(this[this.t-1]^this.s&this.DM)}function Kr(n,t){var e;for(e=this.t-1;e>=0;--e)t[e+n]=this[e];for(e=n-1;e>=0;--e)t[e]=0;t.t=this.t+n,t.s=this.s}function Qr(n,t){for(var e=n;e<this.t;++e)t[e-n]=this[e];t.t=Math.max(this.t-n,0),t.s=this.s}function $r(n,t){var e=n%this.DB,r=this.DB-e,i=(1<<r)-1,u=Math.floor(n/this.DB),c=this.s<<e&this.DM,v;for(v=this.t-1;v>=0;--v)t[v+u+1]=this[v]>>r|c,c=(this[v]&i)<<e;for(v=u-1;v>=0;--v)t[v]=0;t[u]=c,t.t=this.t+u+1,t.s=this.s,t.clamp()}function ni(n,t){t.s=this.s;var e=Math.floor(n/this.DB);if(e>=this.t){t.t=0;return}var r=n%this.DB,i=this.DB-r,u=(1<<r)-1;t[0]=this[e]>>r;for(var c=e+1;c<this.t;++c)t[c-e-1]|=(this[c]&u)<<i,t[c-e]=this[c]>>r;r>0&&(t[this.t-e-1]|=(this.s&u)<<i),t.t=this.t-e,t.clamp()}function ti(n,t){for(var e=0,r=0,i=Math.min(n.t,this.t);e<i;)r+=this[e]-n[e],t[e++]=r&this.DM,r>>=this.DB;if(n.t<this.t){for(r-=n.s;e<this.t;)r+=this[e],t[e++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;e<n.t;)r-=n[e],t[e++]=r&this.DM,r>>=this.DB;r-=n.s}t.s=r<0?-1:0,r<-1?t[e++]=this.DV+r:r>0&&(t[e++]=r),t.t=e,t.clamp()}function ei(n,t){var e=this.abs(),r=n.abs(),i=e.t;for(t.t=i+r.t;--i>=0;)t[i]=0;for(i=0;i<r.t;++i)t[i+e.t]=e.am(0,r[i],t,i,0,e.t);t.s=0,t.clamp(),this.s!=n.s&&Y.ZERO.subTo(t,t)}function ri(n){for(var t=this.abs(),e=n.t=2*t.t;--e>=0;)n[e]=0;for(e=0;e<t.t-1;++e){var r=t.am(e,t[e],n,2*e,0,1);(n[e+t.t]+=t.am(e+1,2*t[e],n,2*e+1,r,t.t-e-1))>=t.DV&&(n[e+t.t]-=t.DV,n[e+t.t+1]=1)}n.t>0&&(n[n.t-1]+=t.am(e,t[e],n,2*e,0,1)),n.s=0,n.clamp()}function ii(n,t,e){var r=n.abs();if(!(r.t<=0)){var i=this.abs();if(i.t<r.t){t?.fromInt(0),e!=null&&this.copyTo(e);return}e==null&&(e=dn());var u=dn(),c=this.s,v=n.s,x=this.DB-$t(r[r.t-1]);x>0?(r.lShiftTo(x,u),i.lShiftTo(x,e)):(r.copyTo(u),i.copyTo(e));var w=u.t,F=u[w-1];if(F!=0){var B=F*(1<<this.F1)+(w>1?u[w-2]>>this.F2:0),A=this.FV/B,N=(1<<this.F1)/B,S=1<<this.F2,U=e.t,$=U-w,tn=t??dn();for(u.dlShiftTo($,tn),e.compareTo(tn)>=0&&(e[e.t++]=1,e.subTo(tn,e)),Y.ONE.dlShiftTo(w,tn),tn.subTo(u,u);u.t<w;)u[u.t++]=0;for(;--$>=0;){var an=e[--U]==F?this.DM:Math.floor(e[U]*A+(e[U-1]+S)*N);if((e[U]+=u.am(0,an,e,$,0,w))<an)for(u.dlShiftTo($,tn),e.subTo(tn,e);e[U]<--an;)e.subTo(tn,e)}t!=null&&(e.drShiftTo(w,t),c!=v&&Y.ZERO.subTo(t,t)),e.t=w,e.clamp(),x>0&&e.rShiftTo(x,e),c<0&&Y.ZERO.subTo(e,e)}}}function oi(n){var t=dn();return this.abs().divRemTo(n,null,t),this.s<0&&t.compareTo(Y.ZERO)>0&&n.subTo(t,t),t}function mt(n){this.m=n}function si(n){return n.s<0||n.compareTo(this.m)>=0?n.mod(this.m):n}function ai(n){return n}function li(n){n.divRemTo(this.m,null,n)}function ui(n,t,e){n.multiplyTo(t,e),this.reduce(e)}function fi(n,t){n.squareTo(t),this.reduce(t)}mt.prototype.convert=si;mt.prototype.revert=ai;mt.prototype.reduce=li;mt.prototype.mulTo=ui;mt.prototype.sqrTo=fi;function hi(){if(this.t<1)return 0;var n=this[0];if((n&1)==0)return 0;var t=n&3;return t=t*(2-(n&15)*t)&15,t=t*(2-(n&255)*t)&255,t=t*(2-((n&65535)*t&65535))&65535,t=t*(2-n*t%this.DV)%this.DV,t>0?this.DV-t:-t}function vt(n){this.m=n,this.mp=n.invDigit(),this.mpl=this.mp&32767,this.mph=this.mp>>15,this.um=(1<<n.DB-15)-1,this.mt2=2*n.t}function pi(n){var t=dn();return n.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),n.s<0&&t.compareTo(Y.ZERO)>0&&this.m.subTo(t,t),t}function ci(n){var t=dn();return n.copyTo(t),this.reduce(t),t}function di(n){for(;n.t<=this.mt2;)n[n.t++]=0;for(var t=0;t<this.m.t;++t){var e=n[t]&32767,r=e*this.mpl+((e*this.mph+(n[t]>>15)*this.mpl&this.um)<<15)&n.DM;for(e=t+this.m.t,n[e]+=this.m.am(0,r,n,t,0,this.m.t);n[e]>=n.DV;)n[e]-=n.DV,n[++e]++}n.clamp(),n.drShiftTo(this.m.t,n),n.compareTo(this.m)>=0&&n.subTo(this.m,n)}function mi(n,t){n.squareTo(t),this.reduce(t)}function vi(n,t,e){n.multiplyTo(t,e),this.reduce(e)}vt.prototype.convert=pi;vt.prototype.revert=ci;vt.prototype.reduce=di;vt.prototype.mulTo=vi;vt.prototype.sqrTo=mi;function _i(){return(this.t>0?this[0]&1:this.s)==0}function Pi(n,t){if(n>4294967295||n<1)return Y.ONE;var e=dn(),r=dn(),i=t.convert(this),u=$t(n)-1;for(i.copyTo(e);--u>=0;)if(t.sqrTo(e,r),(n&1<<u)>0)t.mulTo(r,i,e);else{var c=e;e=r,r=c}return t.revert(e)}function gi(n,t){var e;return n<256||t.isEven()?e=new mt(t):e=new vt(t),this.exp(n,e)}Y.prototype.copyTo=Wr;Y.prototype.fromInt=Ur;Y.prototype.fromString=jr;Y.prototype.clamp=Hr;Y.prototype.dlShiftTo=Kr;Y.prototype.drShiftTo=Qr;Y.prototype.lShiftTo=$r;Y.prototype.rShiftTo=ni;Y.prototype.subTo=ti;Y.prototype.multiplyTo=ei;Y.prototype.squareTo=ri;Y.prototype.divRemTo=ii;Y.prototype.invDigit=hi;Y.prototype.isEven=_i;Y.prototype.exp=Pi;Y.prototype.toString=Gr;Y.prototype.negate=qr;Y.prototype.abs=zr;Y.prototype.compareTo=Jr;Y.prototype.bitLength=Zr;Y.prototype.mod=oi;Y.prototype.modPowInt=gi;Y.ZERO=st(0);Y.ONE=st(1);function yi(){var n=dn();return this.copyTo(n),n}function xi(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function Ti(){return this.t==0?this.s:this[0]<<24>>24}function bi(){return this.t==0?this.s:this[0]<<16>>16}function Ci(n){return Math.floor(Math.LN2*this.DB/Math.log(n))}function wi(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function Ei(n){if(n==null&&(n=10),this.signum()==0||n<2||n>36)return"0";var t=this.chunkSize(n),e=Math.pow(n,t),r=st(e),i=dn(),u=dn(),c="";for(this.divRemTo(r,i,u);i.signum()>0;)c=(e+u.intValue()).toString(n).substr(1)+c,i.divRemTo(r,i,u);return u.intValue().toString(n)+c}function Ii(n,t){this.fromInt(0),t==null&&(t=10);for(var e=this.chunkSize(t),r=Math.pow(t,e),i=!1,u=0,c=0,v=0;v<n.length;++v){var x=De(n,v);if(x<0){n.charAt(v)=="-"&&this.signum()==0&&(i=!0);continue}c=t*c+x,++u>=e&&(this.dMultiply(r),this.dAddOffset(c,0),u=0,c=0)}u>0&&(this.dMultiply(Math.pow(t,u)),this.dAddOffset(c,0)),i&&Y.ZERO.subTo(this,this)}function Fi(n,t,e){if(typeof t=="number")if(n<2)this.fromInt(1);else for(this.fromNumber(n,e),this.testBit(n-1)||this.bitwiseTo(Y.ONE.shiftLeft(n-1),ve,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>n&&this.subTo(Y.ONE.shiftLeft(n-1),this);else{var r=new Array,i=n&7;r.length=(n>>3)+1,t.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function Oi(){var n=this.t,t=new Array;t[0]=this.s;var e=this.DB-n*this.DB%8,r,i=0;if(n-- >0)for(e<this.DB&&(r=this[n]>>e)!=(this.s&this.DM)>>e&&(t[i++]=r|this.s<<this.DB-e);n>=0;)e<8?(r=(this[n]&(1<<e)-1)<<8-e,r|=this[--n]>>(e+=this.DB-8)):(r=this[n]>>(e-=8)&255,e<=0&&(e+=this.DB,--n)),(r&128)!=0&&(r|=-256),i==0&&(this.s&128)!=(r&128)&&++i,(i>0||r!=this.s)&&(t[i++]=r);return t}function Ai(n){return this.compareTo(n)==0}function Li(n){return this.compareTo(n)<0?this:n}function Si(n){return this.compareTo(n)>0?this:n}function Xi(n,t,e){var r,i,u=Math.min(n.t,this.t);for(r=0;r<u;++r)e[r]=t(this[r],n[r]);if(n.t<this.t){for(i=n.s&this.DM,r=u;r<this.t;++r)e[r]=t(this[r],i);e.t=this.t}else{for(i=this.s&this.DM,r=u;r<n.t;++r)e[r]=t(i,n[r]);e.t=n.t}e.s=t(this.s,n.s),e.clamp()}function Ni(n,t){return n&t}function Bi(n){var t=dn();return this.bitwiseTo(n,Ni,t),t}function ve(n,t){return n|t}function Di(n){var t=dn();return this.bitwiseTo(n,ve,t),t}function Me(n,t){return n^t}function Mi(n){var t=dn();return this.bitwiseTo(n,Me,t),t}function Ye(n,t){return n&~t}function Yi(n){var t=dn();return this.bitwiseTo(n,Ye,t),t}function Vi(){for(var n=dn(),t=0;t<this.t;++t)n[t]=this.DM&~this[t];return n.t=this.t,n.s=~this.s,n}function Ri(n){var t=dn();return n<0?this.rShiftTo(-n,t):this.lShiftTo(n,t),t}function ki(n){var t=dn();return n<0?this.lShiftTo(-n,t):this.rShiftTo(n,t),t}function Wi(n){if(n==0)return-1;var t=0;return(n&65535)==0&&(n>>=16,t+=16),(n&255)==0&&(n>>=8,t+=8),(n&15)==0&&(n>>=4,t+=4),(n&3)==0&&(n>>=2,t+=2),(n&1)==0&&++t,t}function Ui(){for(var n=0;n<this.t;++n)if(this[n]!=0)return n*this.DB+Wi(this[n]);return this.s<0?this.t*this.DB:-1}function ji(n){for(var t=0;n!=0;)n&=n-1,++t;return t}function Hi(){for(var n=0,t=this.s&this.DM,e=0;e<this.t;++e)n+=ji(this[e]^t);return n}function Gi(n){var t=Math.floor(n/this.DB);return t>=this.t?this.s!=0:(this[t]&1<<n%this.DB)!=0}function qi(n,t){var e=Y.ONE.shiftLeft(n);return this.bitwiseTo(e,t,e),e}function zi(n){return this.changeBit(n,ve)}function Ji(n){return this.changeBit(n,Ye)}function Zi(n){return this.changeBit(n,Me)}function Ki(n,t){for(var e=0,r=0,i=Math.min(n.t,this.t);e<i;)r+=this[e]+n[e],t[e++]=r&this.DM,r>>=this.DB;if(n.t<this.t){for(r+=n.s;e<this.t;)r+=this[e],t[e++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;e<n.t;)r+=n[e],t[e++]=r&this.DM,r>>=this.DB;r+=n.s}t.s=r<0?-1:0,r>0?t[e++]=r:r<-1&&(t[e++]=this.DV+r),t.t=e,t.clamp()}function Qi(n){var t=dn();return this.addTo(n,t),t}function $i(n){var t=dn();return this.subTo(n,t),t}function no(n){var t=dn();return this.multiplyTo(n,t),t}function to(){var n=dn();return this.squareTo(n),n}function eo(n){var t=dn();return this.divRemTo(n,t,null),t}function ro(n){var t=dn();return this.divRemTo(n,null,t),t}function io(n){var t=dn(),e=dn();return this.divRemTo(n,t,e),new Array(t,e)}function oo(n){this[this.t]=this.am(0,n-1,this,0,0,this.t),++this.t,this.clamp()}function so(n,t){if(n!=0){for(;this.t<=t;)this[this.t++]=0;for(this[t]+=n;this[t]>=this.DV;)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}}function Vt(){}function Ve(n){return n}function ao(n,t,e){n.multiplyTo(t,e)}function lo(n,t){n.squareTo(t)}Vt.prototype.convert=Ve;Vt.prototype.revert=Ve;Vt.prototype.mulTo=ao;Vt.prototype.sqrTo=lo;function uo(n){return this.exp(n,new Vt)}function fo(n,t,e){var r=Math.min(this.t+n.t,t);for(e.s=0,e.t=r;r>0;)e[--r]=0;var i;for(i=e.t-this.t;r<i;++r)e[r+this.t]=this.am(0,n[r],e,r,0,this.t);for(i=Math.min(n.t,t);r<i;++r)this.am(0,n[r],e,r,0,t-r);e.clamp()}function ho(n,t,e){--t;var r=e.t=this.t+n.t-t;for(e.s=0;--r>=0;)e[r]=0;for(r=Math.max(t-this.t,0);r<n.t;++r)e[this.t+r-t]=this.am(t-r,n[r],e,0,0,this.t+r-t);e.clamp(),e.drShiftTo(1,e)}function Et(n){this.r2=dn(),this.q3=dn(),Y.ONE.dlShiftTo(2*n.t,this.r2),this.mu=this.r2.divide(n),this.m=n}function po(n){if(n.s<0||n.t>2*this.m.t)return n.mod(this.m);if(n.compareTo(this.m)<0)return n;var t=dn();return n.copyTo(t),this.reduce(t),t}function co(n){return n}function mo(n){for(n.drShiftTo(this.m.t-1,this.r2),n.t>this.m.t+1&&(n.t=this.m.t+1,n.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);n.compareTo(this.r2)<0;)n.dAddOffset(1,this.m.t+1);for(n.subTo(this.r2,n);n.compareTo(this.m)>=0;)n.subTo(this.m,n)}function vo(n,t){n.squareTo(t),this.reduce(t)}function _o(n,t,e){n.multiplyTo(t,e),this.reduce(e)}Et.prototype.convert=po;Et.prototype.revert=co;Et.prototype.reduce=mo;Et.prototype.mulTo=_o;Et.prototype.sqrTo=vo;function Po(n,t){var e=n.bitLength(),r,i=st(1),u;if(e<=0)return i;e<18?r=1:e<48?r=3:e<144?r=4:e<768?r=5:r=6,e<8?u=new mt(t):t.isEven()?u=new Et(t):u=new vt(t);var c=new Array,v=3,x=r-1,w=(1<<r)-1;if(c[1]=u.convert(this),r>1){var F=dn();for(u.sqrTo(c[1],F);v<=w;)c[v]=dn(),u.mulTo(F,c[v-2],c[v]),v+=2}var B=n.t-1,A,N=!0,S=dn(),U;for(e=$t(n[B])-1;B>=0;){for(e>=x?A=n[B]>>e-x&w:(A=(n[B]&(1<<e+1)-1)<<x-e,B>0&&(A|=n[B-1]>>this.DB+e-x)),v=r;(A&1)==0;)A>>=1,--v;if((e-=v)<0&&(e+=this.DB,--B),N)c[A].copyTo(i),N=!1;else{for(;v>1;)u.sqrTo(i,S),u.sqrTo(S,i),v-=2;v>0?u.sqrTo(i,S):(U=i,i=S,S=U),u.mulTo(S,c[A],i)}for(;B>=0&&(n[B]&1<<e)==0;)u.sqrTo(i,S),U=i,i=S,S=U,--e<0&&(e=this.DB-1,--B)}return u.revert(i)}function go(n){var t=this.s<0?this.negate():this.clone(),e=n.s<0?n.negate():n.clone();if(t.compareTo(e)<0){var r=t;t=e,e=r}var i=t.getLowestSetBit(),u=e.getLowestSetBit();if(u<0)return t;for(i<u&&(u=i),u>0&&(t.rShiftTo(u,t),e.rShiftTo(u,e));t.signum()>0;)(i=t.getLowestSetBit())>0&&t.rShiftTo(i,t),(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),t.compareTo(e)>=0?(t.subTo(e,t),t.rShiftTo(1,t)):(e.subTo(t,e),e.rShiftTo(1,e));return u>0&&e.lShiftTo(u,e),e}function yo(n){if(n<=0)return 0;var t=this.DV%n,e=this.s<0?n-1:0;if(this.t>0)if(t==0)e=this[0]%n;else for(var r=this.t-1;r>=0;--r)e=(t*e+this[r])%n;return e}function xo(n){var t=n.isEven();if(this.isEven()&&t||n.signum()==0)return Y.ZERO;for(var e=n.clone(),r=this.clone(),i=st(1),u=st(0),c=st(0),v=st(1);e.signum()!=0;){for(;e.isEven();)e.rShiftTo(1,e),t?((!i.isEven()||!u.isEven())&&(i.addTo(this,i),u.subTo(n,u)),i.rShiftTo(1,i)):u.isEven()||u.subTo(n,u),u.rShiftTo(1,u);for(;r.isEven();)r.rShiftTo(1,r),t?((!c.isEven()||!v.isEven())&&(c.addTo(this,c),v.subTo(n,v)),c.rShiftTo(1,c)):v.isEven()||v.subTo(n,v),v.rShiftTo(1,v);e.compareTo(r)>=0?(e.subTo(r,e),t&&i.subTo(c,i),u.subTo(v,u)):(r.subTo(e,r),t&&c.subTo(i,c),v.subTo(u,v))}if(r.compareTo(Y.ONE)!=0)return Y.ZERO;if(v.compareTo(n)>=0)return v.subtract(n);if(v.signum()<0)v.addTo(n,v);else return v;return v.signum()<0?v.add(n):v}var Ln=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],To=(1<<26)/Ln[Ln.length-1];function bo(n){var t,e=this.abs();if(e.t==1&&e[0]<=Ln[Ln.length-1]){for(t=0;t<Ln.length;++t)if(e[0]==Ln[t])return!0;return!1}if(e.isEven())return!1;for(t=1;t<Ln.length;){for(var r=Ln[t],i=t+1;i<Ln.length&&r<To;)r*=Ln[i++];for(r=e.modInt(r);t<i;)if(r%Ln[t++]==0)return!1}return e.millerRabin(n)}function Co(n){var t=this.subtract(Y.ONE),e=t.getLowestSetBit();if(e<=0)return!1;var r=t.shiftRight(e);n=n+1>>1,n>Ln.length&&(n=Ln.length);for(var i=dn(),u=0;u<n;++u){i.fromInt(Ln[Math.floor(Math.random()*Ln.length)]);var c=i.modPow(r,this);if(c.compareTo(Y.ONE)!=0&&c.compareTo(t)!=0){for(var v=1;v++<e&&c.compareTo(t)!=0;)if(c=c.modPowInt(2,this),c.compareTo(Y.ONE)==0)return!1;if(c.compareTo(t)!=0)return!1}}return!0}Y.prototype.chunkSize=Ci;Y.prototype.toRadix=Ei;Y.prototype.fromRadix=Ii;Y.prototype.fromNumber=Fi;Y.prototype.bitwiseTo=Xi;Y.prototype.changeBit=qi;Y.prototype.addTo=Ki;Y.prototype.dMultiply=oo;Y.prototype.dAddOffset=so;Y.prototype.multiplyLowerTo=fo;Y.prototype.multiplyUpperTo=ho;Y.prototype.modInt=yo;Y.prototype.millerRabin=Co;Y.prototype.clone=yi;Y.prototype.intValue=xi;Y.prototype.byteValue=Ti;Y.prototype.shortValue=bi;Y.prototype.signum=wi;Y.prototype.toByteArray=Oi;Y.prototype.equals=Ai;Y.prototype.min=Li;Y.prototype.max=Si;Y.prototype.and=Bi;Y.prototype.or=Di;Y.prototype.xor=Mi;Y.prototype.andNot=Yi;Y.prototype.not=Vi;Y.prototype.shiftLeft=Ri;Y.prototype.shiftRight=ki;Y.prototype.getLowestSetBit=Ui;Y.prototype.bitCount=Hi;Y.prototype.testBit=Gi;Y.prototype.setBit=zi;Y.prototype.clearBit=Ji;Y.prototype.flipBit=Zi;Y.prototype.add=Qi;Y.prototype.subtract=$i;Y.prototype.multiply=no;Y.prototype.divide=eo;Y.prototype.remainder=ro;Y.prototype.divideAndRemainder=io;Y.prototype.modPow=Po;Y.prototype.modInverse=xo;Y.prototype.pow=uo;Y.prototype.gcd=go;Y.prototype.isProbablePrime=bo;Y.prototype.square=to;var fn=Y;fn.prototype.IsNegative=function(){return this.compareTo(fn.ZERO)==-1};fn.op_Equality=function(n,t){return n.compareTo(t)==0};fn.op_Inequality=function(n,t){return n.compareTo(t)!=0};fn.op_GreaterThan=function(n,t){return n.compareTo(t)>0};fn.op_LessThan=function(n,t){return n.compareTo(t)<0};fn.op_Addition=function(n,t){return new fn(n).add(new fn(t))};fn.op_Subtraction=function(n,t){return new fn(n).subtract(new fn(t))};fn.Int128Mul=function(n,t){return new fn(n).multiply(new fn(t))};fn.op_Division=function(n,t){return n.divide(t)};fn.prototype.ToDouble=function(){return parseFloat(this.toString())};typeof Kt>"u"&&(Kt=function(n,t){var e;if(typeof Object.getOwnPropertyNames>"u"){for(e in t.prototype)(typeof n.prototype[e]>"u"||n.prototype[e]==Object.prototype[e])&&(n.prototype[e]=t.prototype[e]);for(e in t)typeof n[e]>"u"&&(n[e]=t[e]);n.$baseCtor=t}else{for(var r=Object.getOwnPropertyNames(t.prototype),i=0;i<r.length;i++)typeof Object.getOwnPropertyDescriptor(n.prototype,r[i])>"u"&&Object.defineProperty(n.prototype,r[i],Object.getOwnPropertyDescriptor(t.prototype,r[i]));for(e in t)typeof n[e]>"u"&&(n[e]=t[e]);n.$baseCtor=t}});var Kt;o.Path=function(){return[]};o.Paths=function(){return[]};o.DoublePoint=function(){var n=arguments;this.X=0,this.Y=0,n.length==1?(this.X=n[0].X,this.Y=n[0].Y):n.length==2&&(this.X=n[0],this.Y=n[1])};o.DoublePoint0=function(){this.X=0,this.Y=0};o.DoublePoint1=function(n){this.X=n.X,this.Y=n.Y};o.DoublePoint2=function(n,t){this.X=n,this.Y=t};o.PolyNode=function(){this.m_Parent=null,this.m_polygon=new o.Path,this.m_Index=0,this.m_jointype=0,this.m_endtype=0,this.m_Childs=[],this.IsOpen=!1};o.PolyNode.prototype.IsHoleNode=function(){for(var n=!0,t=this.m_Parent;t!==null;)n=!n,t=t.m_Parent;return n};o.PolyNode.prototype.ChildCount=function(){return this.m_Childs.length};o.PolyNode.prototype.Contour=function(){return this.m_polygon};o.PolyNode.prototype.AddChild=function(n){var t=this.m_Childs.length;this.m_Childs.push(n),n.m_Parent=this,n.m_Index=t};o.PolyNode.prototype.GetNext=function(){return this.m_Childs.length>0?this.m_Childs[0]:this.GetNextSiblingUp()};o.PolyNode.prototype.GetNextSiblingUp=function(){return this.m_Parent===null?null:this.m_Index==this.m_Parent.m_Childs.length-1?this.m_Parent.GetNextSiblingUp():this.m_Parent.m_Childs[this.m_Index+1]};o.PolyNode.prototype.Childs=function(){return this.m_Childs};o.PolyNode.prototype.Parent=function(){return this.m_Parent};o.PolyNode.prototype.IsHole=function(){return this.IsHoleNode()};o.PolyTree=function(){this.m_AllPolys=[],o.PolyNode.call(this)};o.PolyTree.prototype.Clear=function(){for(var n=0,t=this.m_AllPolys.length;n<t;n++)this.m_AllPolys[n]=null;this.m_AllPolys.length=0,this.m_Childs.length=0};o.PolyTree.prototype.GetFirst=function(){return this.m_Childs.length>0?this.m_Childs[0]:null};o.PolyTree.prototype.Total=function(){return this.m_AllPolys.length};Kt(o.PolyTree,o.PolyNode);o.Math_Abs_Int64=o.Math_Abs_Int32=o.Math_Abs_Double=function(n){return Math.abs(n)};o.Math_Max_Int32_Int32=function(n,t){return Math.max(n,t)};pn.msie||pn.opera||pn.safari?o.Cast_Int32=function(n){return n|0}:o.Cast_Int32=function(n){return~~n};pn.chrome?o.Cast_Int64=function(n){return n<-2147483648||n>2147483647?n<0?Math.ceil(n):Math.floor(n):~~n}:pn.firefox&&typeof Number.toInteger=="function"?o.Cast_Int64=function(n){return Number.toInteger(n)}:pn.msie7||pn.msie8?o.Cast_Int64=function(n){return parseInt(n,10)}:pn.msie?o.Cast_Int64=function(n){return n<-2147483648||n>2147483647?n<0?Math.ceil(n):Math.floor(n):n|0}:o.Cast_Int64=function(n){return n<0?Math.ceil(n):Math.floor(n)};o.Clear=function(n){n.length=0};o.PI=3.141592653589793;o.PI2=2*3.141592653589793;o.IntPoint=function(){var n=arguments,t=n.length;if(this.X=0,this.Y=0,dt)if(this.Z=0,t==3)this.X=n[0],this.Y=n[1],this.Z=n[2];else if(t==2)this.X=n[0],this.Y=n[1],this.Z=0;else if(t==1)if(n[0]instanceof o.DoublePoint){var e=n[0];this.X=o.Clipper.Round(e.X),this.Y=o.Clipper.Round(e.Y),this.Z=0}else{var r=n[0];typeof r.Z>"u"&&(r.Z=0),this.X=r.X,this.Y=r.Y,this.Z=r.Z}else this.X=0,this.Y=0,this.Z=0;else if(t==2)this.X=n[0],this.Y=n[1];else if(t==1)if(n[0]instanceof o.DoublePoint){var e=n[0];this.X=o.Clipper.Round(e.X),this.Y=o.Clipper.Round(e.Y)}else{var r=n[0];this.X=r.X,this.Y=r.Y}else this.X=0,this.Y=0};o.IntPoint.op_Equality=function(n,t){return n.X==t.X&&n.Y==t.Y};o.IntPoint.op_Inequality=function(n,t){return n.X!=t.X||n.Y!=t.Y};dt?(o.IntPoint0=function(){this.X=0,this.Y=0,this.Z=0},o.IntPoint1=function(n){this.X=n.X,this.Y=n.Y,this.Z=n.Z},o.IntPoint1dp=function(n){this.X=o.Clipper.Round(n.X),this.Y=o.Clipper.Round(n.Y),this.Z=0},o.IntPoint2=function(n,t){this.X=n,this.Y=t,this.Z=0},o.IntPoint3=function(n,t,e){this.X=n,this.Y=t,this.Z=e}):(o.IntPoint0=function(){this.X=0,this.Y=0},o.IntPoint1=function(n){this.X=n.X,this.Y=n.Y},o.IntPoint1dp=function(n){this.X=o.Clipper.Round(n.X),this.Y=o.Clipper.Round(n.Y)},o.IntPoint2=function(n,t){this.X=n,this.Y=t});o.IntRect=function(){var n=arguments,t=n.length;t==4?(this.left=n[0],this.top=n[1],this.right=n[2],this.bottom=n[3]):t==1?(this.left=ir.left,this.top=ir.top,this.right=ir.right,this.bottom=ir.bottom):(this.left=0,this.top=0,this.right=0,this.bottom=0)};o.IntRect0=function(){this.left=0,this.top=0,this.right=0,this.bottom=0};o.IntRect1=function(n){this.left=n.left,this.top=n.top,this.right=n.right,this.bottom=n.bottom};o.IntRect4=function(n,t,e,r){this.left=n,this.top=t,this.right=e,this.bottom=r};o.ClipType={ctIntersection:0,ctUnion:1,ctDifference:2,ctXor:3};o.PolyType={ptSubject:0,ptClip:1};o.PolyFillType={pftEvenOdd:0,pftNonZero:1,pftPositive:2,pftNegative:3};o.JoinType={jtSquare:0,jtRound:1,jtMiter:2};o.EndType={etOpenSquare:0,etOpenRound:1,etOpenButt:2,etClosedLine:3,etClosedPolygon:4};Ne&&(o.EndType_={etSquare:0,etRound:1,etButt:2,etClosed:3});o.EdgeSide={esLeft:0,esRight:1};o.Direction={dRightToLeft:0,dLeftToRight:1};o.TEdge=function(){this.Bot=new o.IntPoint,this.Curr=new o.IntPoint,this.Top=new o.IntPoint,this.Delta=new o.IntPoint,this.Dx=0,this.PolyTyp=o.PolyType.ptSubject,this.Side=o.EdgeSide.esLeft,this.WindDelta=0,this.WindCnt=0,this.WindCnt2=0,this.OutIdx=0,this.Next=null,this.Prev=null,this.NextInLML=null,this.NextInAEL=null,this.PrevInAEL=null,this.NextInSEL=null,this.PrevInSEL=null};o.IntersectNode=function(){this.Edge1=null,this.Edge2=null,this.Pt=new o.IntPoint};o.MyIntersectNodeSort=function(){};o.MyIntersectNodeSort.Compare=function(n,t){return t.Pt.Y-n.Pt.Y};o.LocalMinima=function(){this.Y=0,this.LeftBound=null,this.RightBound=null,this.Next=null};o.Scanbeam=function(){this.Y=0,this.Next=null};o.OutRec=function(){this.Idx=0,this.IsHole=!1,this.IsOpen=!1,this.FirstLeft=null,this.Pts=null,this.BottomPt=null,this.PolyNode=null};o.OutPt=function(){this.Idx=0,this.Pt=new o.IntPoint,this.Next=null,this.Prev=null};o.Join=function(){this.OutPt1=null,this.OutPt2=null,this.OffPt=new o.IntPoint};o.ClipperBase=function(){this.m_MinimaList=null,this.m_CurrentLM=null,this.m_edges=new Array,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1,this.PreserveCollinear=!1,this.m_MinimaList=null,this.m_CurrentLM=null,this.m_UseFullRange=!1,this.m_HasOpenPaths=!1};o.ClipperBase.horizontal=-9007199254740992;o.ClipperBase.Skip=-2;o.ClipperBase.Unassigned=-1;o.ClipperBase.tolerance=1e-20;Dr?(o.ClipperBase.loRange=46340,o.ClipperBase.hiRange=46340):(o.ClipperBase.loRange=47453132,o.ClipperBase.hiRange=0xfffffffffffff);o.ClipperBase.near_zero=function(n){return n>-o.ClipperBase.tolerance&&n<o.ClipperBase.tolerance};o.ClipperBase.IsHorizontal=function(n){return n.Delta.Y===0};o.ClipperBase.prototype.PointIsVertex=function(n,t){var e=t;do{if(o.IntPoint.op_Equality(e.Pt,n))return!0;e=e.Next}while(e!=t);return!1};o.ClipperBase.prototype.PointOnLineSegment=function(n,t,e,r){return r?n.X==t.X&&n.Y==t.Y||n.X==e.X&&n.Y==e.Y||n.X>t.X==n.X<e.X&&n.Y>t.Y==n.Y<e.Y&&fn.op_Equality(fn.Int128Mul(n.X-t.X,e.Y-t.Y),fn.Int128Mul(e.X-t.X,n.Y-t.Y)):n.X==t.X&&n.Y==t.Y||n.X==e.X&&n.Y==e.Y||n.X>t.X==n.X<e.X&&n.Y>t.Y==n.Y<e.Y&&(n.X-t.X)*(e.Y-t.Y)==(e.X-t.X)*(n.Y-t.Y)};o.ClipperBase.prototype.PointOnPolygon=function(n,t,e){for(var r=t;;){if(this.PointOnLineSegment(n,r.Pt,r.Next.Pt,e))return!0;if(r=r.Next,r==t)break}return!1};o.ClipperBase.prototype.SlopesEqual=o.ClipperBase.SlopesEqual=function(){var n=arguments,t=n.length,e,r,i,u,c,v,x;return t==3?(e=n[0],r=n[1],x=n[2],x?fn.op_Equality(fn.Int128Mul(e.Delta.Y,r.Delta.X),fn.Int128Mul(e.Delta.X,r.Delta.Y)):o.Cast_Int64(e.Delta.Y*r.Delta.X)==o.Cast_Int64(e.Delta.X*r.Delta.Y)):t==4?(i=n[0],u=n[1],c=n[2],x=n[3],x?fn.op_Equality(fn.Int128Mul(i.Y-u.Y,u.X-c.X),fn.Int128Mul(i.X-u.X,u.Y-c.Y)):o.Cast_Int64((i.Y-u.Y)*(u.X-c.X))-o.Cast_Int64((i.X-u.X)*(u.Y-c.Y))===0):(i=n[0],u=n[1],c=n[2],v=n[3],x=n[4],x?fn.op_Equality(fn.Int128Mul(i.Y-u.Y,c.X-v.X),fn.Int128Mul(i.X-u.X,c.Y-v.Y)):o.Cast_Int64((i.Y-u.Y)*(c.X-v.X))-o.Cast_Int64((i.X-u.X)*(c.Y-v.Y))===0)};o.ClipperBase.SlopesEqual3=function(n,t,e){return e?fn.op_Equality(fn.Int128Mul(n.Delta.Y,t.Delta.X),fn.Int128Mul(n.Delta.X,t.Delta.Y)):o.Cast_Int64(n.Delta.Y*t.Delta.X)==o.Cast_Int64(n.Delta.X*t.Delta.Y)};o.ClipperBase.SlopesEqual4=function(n,t,e,r){return r?fn.op_Equality(fn.Int128Mul(n.Y-t.Y,t.X-e.X),fn.Int128Mul(n.X-t.X,t.Y-e.Y)):o.Cast_Int64((n.Y-t.Y)*(t.X-e.X))-o.Cast_Int64((n.X-t.X)*(t.Y-e.Y))===0};o.ClipperBase.SlopesEqual5=function(n,t,e,r,i){return i?fn.op_Equality(fn.Int128Mul(n.Y-t.Y,e.X-r.X),fn.Int128Mul(n.X-t.X,e.Y-r.Y)):o.Cast_Int64((n.Y-t.Y)*(e.X-r.X))-o.Cast_Int64((n.X-t.X)*(e.Y-r.Y))===0};o.ClipperBase.prototype.Clear=function(){this.DisposeLocalMinimaList();for(var n=0,t=this.m_edges.length;n<t;++n){for(var e=0,r=this.m_edges[n].length;e<r;++e)this.m_edges[n][e]=null;o.Clear(this.m_edges[n])}o.Clear(this.m_edges),this.m_UseFullRange=!1,this.m_HasOpenPaths=!1};o.ClipperBase.prototype.DisposeLocalMinimaList=function(){for(;this.m_MinimaList!==null;){var n=this.m_MinimaList.Next;this.m_MinimaList=null,this.m_MinimaList=n}this.m_CurrentLM=null};o.ClipperBase.prototype.RangeTest=function(n,t){t.Value?(n.X>o.ClipperBase.hiRange||n.Y>o.ClipperBase.hiRange||-n.X>o.ClipperBase.hiRange||-n.Y>o.ClipperBase.hiRange)&&o.Error("Coordinate outside allowed range in RangeTest()."):(n.X>o.ClipperBase.loRange||n.Y>o.ClipperBase.loRange||-n.X>o.ClipperBase.loRange||-n.Y>o.ClipperBase.loRange)&&(t.Value=!0,this.RangeTest(n,t))};o.ClipperBase.prototype.InitEdge=function(n,t,e,r){n.Next=t,n.Prev=e,n.Curr.X=r.X,n.Curr.Y=r.Y,n.OutIdx=-1};o.ClipperBase.prototype.InitEdge2=function(n,t){n.Curr.Y>=n.Next.Curr.Y?(n.Bot.X=n.Curr.X,n.Bot.Y=n.Curr.Y,n.Top.X=n.Next.Curr.X,n.Top.Y=n.Next.Curr.Y):(n.Top.X=n.Curr.X,n.Top.Y=n.Curr.Y,n.Bot.X=n.Next.Curr.X,n.Bot.Y=n.Next.Curr.Y),this.SetDx(n),n.PolyTyp=t};o.ClipperBase.prototype.FindNextLocMin=function(n){for(var t;;){for(;o.IntPoint.op_Inequality(n.Bot,n.Prev.Bot)||o.IntPoint.op_Equality(n.Curr,n.Top);)n=n.Next;if(n.Dx!=o.ClipperBase.horizontal&&n.Prev.Dx!=o.ClipperBase.horizontal)break;for(;n.Prev.Dx==o.ClipperBase.horizontal;)n=n.Prev;for(t=n;n.Dx==o.ClipperBase.horizontal;)n=n.Next;if(n.Top.Y!=n.Prev.Bot.Y){t.Prev.Bot.X<n.Bot.X&&(n=t);break}}return n};o.ClipperBase.prototype.ProcessBound=function(n,t){var e=n,r=n,i,u;if(n.Dx==o.ClipperBase.horizontal&&(t?u=n.Prev.Bot.X:u=n.Next.Bot.X,n.Bot.X!=u&&this.ReverseHorizontal(n)),r.OutIdx!=o.ClipperBase.Skip)if(t){for(;r.Top.Y==r.Next.Bot.Y&&r.Next.OutIdx!=o.ClipperBase.Skip;)r=r.Next;if(r.Dx==o.ClipperBase.horizontal&&r.Next.OutIdx!=o.ClipperBase.Skip){for(i=r;i.Prev.Dx==o.ClipperBase.horizontal;)i=i.Prev;i.Prev.Top.X==r.Next.Top.X?t||(r=i.Prev):i.Prev.Top.X>r.Next.Top.X&&(r=i.Prev)}for(;n!=r;)n.NextInLML=n.Next,n.Dx==o.ClipperBase.horizontal&&n!=e&&n.Bot.X!=n.Prev.Top.X&&this.ReverseHorizontal(n),n=n.Next;n.Dx==o.ClipperBase.horizontal&&n!=e&&n.Bot.X!=n.Prev.Top.X&&this.ReverseHorizontal(n),r=r.Next}else{for(;r.Top.Y==r.Prev.Bot.Y&&r.Prev.OutIdx!=o.ClipperBase.Skip;)r=r.Prev;if(r.Dx==o.ClipperBase.horizontal&&r.Prev.OutIdx!=o.ClipperBase.Skip){for(i=r;i.Next.Dx==o.ClipperBase.horizontal;)i=i.Next;i.Next.Top.X==r.Prev.Top.X?t||(r=i.Next):i.Next.Top.X>r.Prev.Top.X&&(r=i.Next)}for(;n!=r;)n.NextInLML=n.Prev,n.Dx==o.ClipperBase.horizontal&&n!=e&&n.Bot.X!=n.Next.Top.X&&this.ReverseHorizontal(n),n=n.Prev;n.Dx==o.ClipperBase.horizontal&&n!=e&&n.Bot.X!=n.Next.Top.X&&this.ReverseHorizontal(n),r=r.Prev}if(r.OutIdx==o.ClipperBase.Skip){if(n=r,t){for(;n.Top.Y==n.Next.Bot.Y;)n=n.Next;for(;n!=r&&n.Dx==o.ClipperBase.horizontal;)n=n.Prev}else{for(;n.Top.Y==n.Prev.Bot.Y;)n=n.Prev;for(;n!=r&&n.Dx==o.ClipperBase.horizontal;)n=n.Next}if(n==r)t?r=n.Next:r=n.Prev;else{t?n=r.Next:n=r.Prev;var c=new o.LocalMinima;c.Next=null,c.Y=n.Bot.Y,c.LeftBound=null,c.RightBound=n,c.RightBound.WindDelta=0,r=this.ProcessBound(c.RightBound,t),this.InsertLocalMinima(c)}}return r};o.ClipperBase.prototype.AddPath=function(n,t,e){Xe?!e&&t==o.PolyType.ptClip&&o.Error("AddPath: Open paths must be subject."):e||o.Error("AddPath: Open paths have been disabled.");var r=n.length-1;if(e)for(;r>0&&o.IntPoint.op_Equality(n[r],n[0]);)--r;for(;r>0&&o.IntPoint.op_Equality(n[r],n[r-1]);)--r;if(e&&r<2||!e&&r<1)return!1;for(var i=new Array,u=0;u<=r;u++)i.push(new o.TEdge);var c=!0;i[1].Curr.X=n[1].X,i[1].Curr.Y=n[1].Y;var v={Value:this.m_UseFullRange};this.RangeTest(n[0],v),this.m_UseFullRange=v.Value,v.Value=this.m_UseFullRange,this.RangeTest(n[r],v),this.m_UseFullRange=v.Value,this.InitEdge(i[0],i[1],i[r],n[0]),this.InitEdge(i[r],i[0],i[r-1],n[r]);for(var u=r-1;u>=1;--u)v.Value=this.m_UseFullRange,this.RangeTest(n[u],v),this.m_UseFullRange=v.Value,this.InitEdge(i[u],i[u+1],i[u-1],n[u]);for(var x=i[0],w=x,F=x;;){if(o.IntPoint.op_Equality(w.Curr,w.Next.Curr)){if(w==w.Next)break;w==x&&(x=w.Next),w=this.RemoveEdge(w),F=w;continue}if(w.Prev==w.Next)break;if(e&&o.ClipperBase.SlopesEqual(w.Prev.Curr,w.Curr,w.Next.Curr,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(w.Prev.Curr,w.Curr,w.Next.Curr))){w==x&&(x=w.Next),w=this.RemoveEdge(w),w=w.Prev,F=w;continue}if(w=w.Next,w==F)break}if(!e&&w==w.Next||e&&w.Prev==w.Next)return!1;e||(this.m_HasOpenPaths=!0,x.Prev.OutIdx=o.ClipperBase.Skip);var B=x;w=x;do this.InitEdge2(w,t),w=w.Next,c&&w.Curr.Y!=x.Curr.Y&&(c=!1);while(w!=x);if(c){if(e)return!1;w.Prev.OutIdx=o.ClipperBase.Skip,w.Prev.Bot.X<w.Prev.Top.X&&this.ReverseHorizontal(w.Prev);var A=new o.LocalMinima;for(A.Next=null,A.Y=w.Bot.Y,A.LeftBound=null,A.RightBound=w,A.RightBound.Side=o.EdgeSide.esRight,A.RightBound.WindDelta=0;w.Next.OutIdx!=o.ClipperBase.Skip;)w.NextInLML=w.Next,w.Bot.X!=w.Prev.Top.X&&this.ReverseHorizontal(w),w=w.Next;return this.InsertLocalMinima(A),this.m_edges.push(i),!0}this.m_edges.push(i);for(var N,S=null;w=this.FindNextLocMin(w),w!=S;){S==null&&(S=w);var A=new o.LocalMinima;A.Next=null,A.Y=w.Bot.Y,w.Dx<w.Prev.Dx?(A.LeftBound=w.Prev,A.RightBound=w,N=!1):(A.LeftBound=w,A.RightBound=w.Prev,N=!0),A.LeftBound.Side=o.EdgeSide.esLeft,A.RightBound.Side=o.EdgeSide.esRight,e?A.LeftBound.Next==A.RightBound?A.LeftBound.WindDelta=-1:A.LeftBound.WindDelta=1:A.LeftBound.WindDelta=0,A.RightBound.WindDelta=-A.LeftBound.WindDelta,w=this.ProcessBound(A.LeftBound,N);var U=this.ProcessBound(A.RightBound,!N);A.LeftBound.OutIdx==o.ClipperBase.Skip?A.LeftBound=null:A.RightBound.OutIdx==o.ClipperBase.Skip&&(A.RightBound=null),this.InsertLocalMinima(A),N||(w=U)}return!0};o.ClipperBase.prototype.AddPaths=function(n,t,e){for(var r=!1,i=0,u=n.length;i<u;++i)this.AddPath(n[i],t,e)&&(r=!0);return r};o.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3=function(n,t,e){return o.IntPoint.op_Equality(n,e)||o.IntPoint.op_Equality(n,t)||o.IntPoint.op_Equality(e,t)?!1:n.X!=e.X?t.X>n.X==t.X<e.X:t.Y>n.Y==t.Y<e.Y};o.ClipperBase.prototype.RemoveEdge=function(n){n.Prev.Next=n.Next,n.Next.Prev=n.Prev;var t=n.Next;return n.Prev=null,t};o.ClipperBase.prototype.SetDx=function(n){n.Delta.X=n.Top.X-n.Bot.X,n.Delta.Y=n.Top.Y-n.Bot.Y,n.Delta.Y===0?n.Dx=o.ClipperBase.horizontal:n.Dx=n.Delta.X/n.Delta.Y};o.ClipperBase.prototype.InsertLocalMinima=function(n){if(this.m_MinimaList===null)this.m_MinimaList=n;else if(n.Y>=this.m_MinimaList.Y)n.Next=this.m_MinimaList,this.m_MinimaList=n;else{for(var t=this.m_MinimaList;t.Next!==null&&n.Y<t.Next.Y;)t=t.Next;n.Next=t.Next,t.Next=n}};o.ClipperBase.prototype.PopLocalMinima=function(){this.m_CurrentLM!==null&&(this.m_CurrentLM=this.m_CurrentLM.Next)};o.ClipperBase.prototype.ReverseHorizontal=function(n){var t=n.Top.X;n.Top.X=n.Bot.X,n.Bot.X=t,dt&&(t=n.Top.Z,n.Top.Z=n.Bot.Z,n.Bot.Z=t)};o.ClipperBase.prototype.Reset=function(){if(this.m_CurrentLM=this.m_MinimaList,this.m_CurrentLM!=null)for(var n=this.m_MinimaList;n!=null;){var t=n.LeftBound;t!=null&&(t.Curr.X=t.Bot.X,t.Curr.Y=t.Bot.Y,t.Side=o.EdgeSide.esLeft,t.OutIdx=o.ClipperBase.Unassigned),t=n.RightBound,t!=null&&(t.Curr.X=t.Bot.X,t.Curr.Y=t.Bot.Y,t.Side=o.EdgeSide.esRight,t.OutIdx=o.ClipperBase.Unassigned),n=n.Next}};o.Clipper=function(n){typeof n>"u"&&(n=0),this.m_PolyOuts=null,this.m_ClipType=o.ClipType.ctIntersection,this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=null,this.m_IntersectNodeComparer=null,this.m_ExecuteLocked=!1,this.m_ClipFillType=o.PolyFillType.pftEvenOdd,this.m_SubjFillType=o.PolyFillType.pftEvenOdd,this.m_Joins=null,this.m_GhostJoins=null,this.m_UsingPolyTree=!1,this.ReverseSolution=!1,this.StrictlySimple=!1,o.ClipperBase.call(this),this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null,this.m_IntersectList=new Array,this.m_IntersectNodeComparer=o.MyIntersectNodeSort.Compare,this.m_ExecuteLocked=!1,this.m_UsingPolyTree=!1,this.m_PolyOuts=new Array,this.m_Joins=new Array,this.m_GhostJoins=new Array,this.ReverseSolution=(1&n)!==0,this.StrictlySimple=(2&n)!==0,this.PreserveCollinear=(4&n)!==0,dt&&(this.ZFillFunction=null)};o.Clipper.ioReverseSolution=1;o.Clipper.ioStrictlySimple=2;o.Clipper.ioPreserveCollinear=4;o.Clipper.prototype.Clear=function(){this.m_edges.length!==0&&(this.DisposeAllPolyPts(),o.ClipperBase.prototype.Clear.call(this))};o.Clipper.prototype.DisposeScanbeamList=function(){for(;this.m_Scanbeam!==null;){var n=this.m_Scanbeam.Next;this.m_Scanbeam=null,this.m_Scanbeam=n}};o.Clipper.prototype.Reset=function(){o.ClipperBase.prototype.Reset.call(this),this.m_Scanbeam=null,this.m_ActiveEdges=null,this.m_SortedEdges=null;for(var n=this.m_MinimaList;n!==null;)this.InsertScanbeam(n.Y),n=n.Next};o.Clipper.prototype.InsertScanbeam=function(n){if(this.m_Scanbeam===null)this.m_Scanbeam=new o.Scanbeam,this.m_Scanbeam.Next=null,this.m_Scanbeam.Y=n;else if(n>this.m_Scanbeam.Y){var t=new o.Scanbeam;t.Y=n,t.Next=this.m_Scanbeam,this.m_Scanbeam=t}else{for(var e=this.m_Scanbeam;e.Next!==null&&n<=e.Next.Y;)e=e.Next;if(n==e.Y)return;var t=new o.Scanbeam;t.Y=n,t.Next=e.Next,e.Next=t}};o.Clipper.prototype.Execute=function(){var n=arguments,t=n.length,e=n[1]instanceof o.PolyTree;if(t==4&&!e){var r=n[0],i=n[1],u=n[2],c=n[3];if(this.m_ExecuteLocked)return!1;this.m_HasOpenPaths&&o.Error("Error: PolyTree struct is need for open path clipping."),this.m_ExecuteLocked=!0,o.Clear(i),this.m_SubjFillType=u,this.m_ClipFillType=c,this.m_ClipType=r,this.m_UsingPolyTree=!1;try{var v=this.ExecuteInternal();v&&this.BuildResult(i)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return v}else if(t==4&&e){var r=n[0],x=n[1],u=n[2],c=n[3];if(this.m_ExecuteLocked)return!1;this.m_ExecuteLocked=!0,this.m_SubjFillType=u,this.m_ClipFillType=c,this.m_ClipType=r,this.m_UsingPolyTree=!0;try{var v=this.ExecuteInternal();v&&this.BuildResult2(x)}finally{this.DisposeAllPolyPts(),this.m_ExecuteLocked=!1}return v}else if(t==2&&!e){var r=n[0],i=n[1];return this.Execute(r,i,o.PolyFillType.pftEvenOdd,o.PolyFillType.pftEvenOdd)}else if(t==2&&e){var r=n[0],x=n[1];return this.Execute(r,x,o.PolyFillType.pftEvenOdd,o.PolyFillType.pftEvenOdd)}};o.Clipper.prototype.FixHoleLinkage=function(n){if(!(n.FirstLeft===null||n.IsHole!=n.FirstLeft.IsHole&&n.FirstLeft.Pts!==null)){for(var t=n.FirstLeft;t!==null&&(t.IsHole==n.IsHole||t.Pts===null);)t=t.FirstLeft;n.FirstLeft=t}};o.Clipper.prototype.ExecuteInternal=function(){try{if(this.Reset(),this.m_CurrentLM===null)return!1;var n=this.PopScanbeam();do{if(this.InsertLocalMinimaIntoAEL(n),o.Clear(this.m_GhostJoins),this.ProcessHorizontals(!1),this.m_Scanbeam===null)break;var t=this.PopScanbeam();if(!this.ProcessIntersections(n,t))return!1;this.ProcessEdgesAtTopOfScanbeam(t),n=t}while(this.m_Scanbeam!==null||this.m_CurrentLM!==null);for(var e=0,r=this.m_PolyOuts.length;e<r;e++){var i=this.m_PolyOuts[e];i.Pts===null||i.IsOpen||(i.IsHole^this.ReverseSolution)==this.Area(i)>0&&this.ReversePolyPtLinks(i.Pts)}this.JoinCommonEdges();for(var e=0,r=this.m_PolyOuts.length;e<r;e++){var i=this.m_PolyOuts[e];i.Pts!==null&&!i.IsOpen&&this.FixupOutPolygon(i)}return this.StrictlySimple&&this.DoSimplePolygons(),!0}finally{o.Clear(this.m_Joins),o.Clear(this.m_GhostJoins)}};o.Clipper.prototype.PopScanbeam=function(){var n=this.m_Scanbeam.Y,t=this.m_Scanbeam;return this.m_Scanbeam=this.m_Scanbeam.Next,t=null,n};o.Clipper.prototype.DisposeAllPolyPts=function(){for(var n=0,t=this.m_PolyOuts.length;n<t;++n)this.DisposeOutRec(n);o.Clear(this.m_PolyOuts)};o.Clipper.prototype.DisposeOutRec=function(n){var t=this.m_PolyOuts[n];t.Pts!==null&&this.DisposeOutPts(t.Pts),t=null,this.m_PolyOuts[n]=null};o.Clipper.prototype.DisposeOutPts=function(n){if(n!==null){var t=null;for(n.Prev.Next=null;n!==null;)t=n,n=n.Next,t=null}};o.Clipper.prototype.AddJoin=function(n,t,e){var r=new o.Join;r.OutPt1=n,r.OutPt2=t,r.OffPt.X=e.X,r.OffPt.Y=e.Y,this.m_Joins.push(r)};o.Clipper.prototype.AddGhostJoin=function(n,t){var e=new o.Join;e.OutPt1=n,e.OffPt.X=t.X,e.OffPt.Y=t.Y,this.m_GhostJoins.push(e)};dt&&(o.Clipper.prototype.SetZ=function(n,t){n.Z=0,this.ZFillFunction!==null&&(t.OutIdx<0?this.ZFillFunction(t.Bot,t.Top,n):this.ZFillFunction(t.Top,t.Bot,n))});o.Clipper.prototype.InsertLocalMinimaIntoAEL=function(n){for(;this.m_CurrentLM!==null&&this.m_CurrentLM.Y==n;){var t=this.m_CurrentLM.LeftBound,e=this.m_CurrentLM.RightBound;this.PopLocalMinima();var r=null;if(t===null?(this.InsertEdgeIntoAEL(e,null),this.SetWindingCount(e),this.IsContributing(e)&&(r=this.AddOutPt(e,e.Bot))):e==null?(this.InsertEdgeIntoAEL(t,null),this.SetWindingCount(t),this.IsContributing(t)&&(r=this.AddOutPt(t,t.Bot)),this.InsertScanbeam(t.Top.Y)):(this.InsertEdgeIntoAEL(t,null),this.InsertEdgeIntoAEL(e,t),this.SetWindingCount(t),e.WindCnt=t.WindCnt,e.WindCnt2=t.WindCnt2,this.IsContributing(t)&&(r=this.AddLocalMinPoly(t,e,t.Bot)),this.InsertScanbeam(t.Top.Y)),e!=null&&(o.ClipperBase.IsHorizontal(e)?this.AddEdgeToSEL(e):this.InsertScanbeam(e.Top.Y)),!(t==null||e==null)){if(r!==null&&o.ClipperBase.IsHorizontal(e)&&this.m_GhostJoins.length>0&&e.WindDelta!==0)for(var i=0,u=this.m_GhostJoins.length;i<u;i++){var c=this.m_GhostJoins[i];this.HorzSegmentsOverlap(c.OutPt1.Pt,c.OffPt,e.Bot,e.Top)&&this.AddJoin(c.OutPt1,r,c.OffPt)}if(t.OutIdx>=0&&t.PrevInAEL!==null&&t.PrevInAEL.Curr.X==t.Bot.X&&t.PrevInAEL.OutIdx>=0&&o.ClipperBase.SlopesEqual(t.PrevInAEL,t,this.m_UseFullRange)&&t.WindDelta!==0&&t.PrevInAEL.WindDelta!==0){var v=this.AddOutPt(t.PrevInAEL,t.Bot);this.AddJoin(r,v,t.Top)}if(t.NextInAEL!=e){if(e.OutIdx>=0&&e.PrevInAEL.OutIdx>=0&&o.ClipperBase.SlopesEqual(e.PrevInAEL,e,this.m_UseFullRange)&&e.WindDelta!==0&&e.PrevInAEL.WindDelta!==0){var v=this.AddOutPt(e.PrevInAEL,e.Bot);this.AddJoin(r,v,e.Top)}var x=t.NextInAEL;if(x!==null)for(;x!=e;)this.IntersectEdges(e,x,t.Curr,!1),x=x.NextInAEL}}}};o.Clipper.prototype.InsertEdgeIntoAEL=function(n,t){if(this.m_ActiveEdges===null)n.PrevInAEL=null,n.NextInAEL=null,this.m_ActiveEdges=n;else if(t===null&&this.E2InsertsBeforeE1(this.m_ActiveEdges,n))n.PrevInAEL=null,n.NextInAEL=this.m_ActiveEdges,this.m_ActiveEdges.PrevInAEL=n,this.m_ActiveEdges=n;else{for(t===null&&(t=this.m_ActiveEdges);t.NextInAEL!==null&&!this.E2InsertsBeforeE1(t.NextInAEL,n);)t=t.NextInAEL;n.NextInAEL=t.NextInAEL,t.NextInAEL!==null&&(t.NextInAEL.PrevInAEL=n),n.PrevInAEL=t,t.NextInAEL=n}};o.Clipper.prototype.E2InsertsBeforeE1=function(n,t){return t.Curr.X==n.Curr.X?t.Top.Y>n.Top.Y?t.Top.X<o.Clipper.TopX(n,t.Top.Y):n.Top.X>o.Clipper.TopX(t,n.Top.Y):t.Curr.X<n.Curr.X};o.Clipper.prototype.IsEvenOddFillType=function(n){return n.PolyTyp==o.PolyType.ptSubject?this.m_SubjFillType==o.PolyFillType.pftEvenOdd:this.m_ClipFillType==o.PolyFillType.pftEvenOdd};o.Clipper.prototype.IsEvenOddAltFillType=function(n){return n.PolyTyp==o.PolyType.ptSubject?this.m_ClipFillType==o.PolyFillType.pftEvenOdd:this.m_SubjFillType==o.PolyFillType.pftEvenOdd};o.Clipper.prototype.IsContributing=function(n){var t,e;switch(n.PolyTyp==o.PolyType.ptSubject?(t=this.m_SubjFillType,e=this.m_ClipFillType):(t=this.m_ClipFillType,e=this.m_SubjFillType),t){case o.PolyFillType.pftEvenOdd:if(n.WindDelta===0&&n.WindCnt!=1)return!1;break;case o.PolyFillType.pftNonZero:if(Math.abs(n.WindCnt)!=1)return!1;break;case o.PolyFillType.pftPositive:if(n.WindCnt!=1)return!1;break;default:if(n.WindCnt!=-1)return!1;break}switch(this.m_ClipType){case o.ClipType.ctIntersection:switch(e){case o.PolyFillType.pftEvenOdd:case o.PolyFillType.pftNonZero:return n.WindCnt2!==0;case o.PolyFillType.pftPositive:return n.WindCnt2>0;default:return n.WindCnt2<0}case o.ClipType.ctUnion:switch(e){case o.PolyFillType.pftEvenOdd:case o.PolyFillType.pftNonZero:return n.WindCnt2===0;case o.PolyFillType.pftPositive:return n.WindCnt2<=0;default:return n.WindCnt2>=0}case o.ClipType.ctDifference:if(n.PolyTyp==o.PolyType.ptSubject)switch(e){case o.PolyFillType.pftEvenOdd:case o.PolyFillType.pftNonZero:return n.WindCnt2===0;case o.PolyFillType.pftPositive:return n.WindCnt2<=0;default:return n.WindCnt2>=0}else switch(e){case o.PolyFillType.pftEvenOdd:case o.PolyFillType.pftNonZero:return n.WindCnt2!==0;case o.PolyFillType.pftPositive:return n.WindCnt2>0;default:return n.WindCnt2<0}case o.ClipType.ctXor:if(n.WindDelta===0)switch(e){case o.PolyFillType.pftEvenOdd:case o.PolyFillType.pftNonZero:return n.WindCnt2===0;case o.PolyFillType.pftPositive:return n.WindCnt2<=0;default:return n.WindCnt2>=0}else return!0}return!0};o.Clipper.prototype.SetWindingCount=function(n){for(var t=n.PrevInAEL;t!==null&&(t.PolyTyp!=n.PolyTyp||t.WindDelta===0);)t=t.PrevInAEL;if(t===null)n.WindCnt=n.WindDelta===0?1:n.WindDelta,n.WindCnt2=0,t=this.m_ActiveEdges;else if(n.WindDelta===0&&this.m_ClipType!=o.ClipType.ctUnion)n.WindCnt=1,n.WindCnt2=t.WindCnt2,t=t.NextInAEL;else if(this.IsEvenOddFillType(n)){if(n.WindDelta===0){for(var e=!0,r=t.PrevInAEL;r!==null;)r.PolyTyp==t.PolyTyp&&r.WindDelta!==0&&(e=!e),r=r.PrevInAEL;n.WindCnt=e?0:1}else n.WindCnt=n.WindDelta;n.WindCnt2=t.WindCnt2,t=t.NextInAEL}else t.WindCnt*t.WindDelta<0?Math.abs(t.WindCnt)>1?t.WindDelta*n.WindDelta<0?n.WindCnt=t.WindCnt:n.WindCnt=t.WindCnt+n.WindDelta:n.WindCnt=n.WindDelta===0?1:n.WindDelta:n.WindDelta===0?n.WindCnt=t.WindCnt<0?t.WindCnt-1:t.WindCnt+1:t.WindDelta*n.WindDelta<0?n.WindCnt=t.WindCnt:n.WindCnt=t.WindCnt+n.WindDelta,n.WindCnt2=t.WindCnt2,t=t.NextInAEL;if(this.IsEvenOddAltFillType(n))for(;t!=n;)t.WindDelta!==0&&(n.WindCnt2=n.WindCnt2===0?1:0),t=t.NextInAEL;else for(;t!=n;)n.WindCnt2+=t.WindDelta,t=t.NextInAEL};o.Clipper.prototype.AddEdgeToSEL=function(n){this.m_SortedEdges===null?(this.m_SortedEdges=n,n.PrevInSEL=null,n.NextInSEL=null):(n.NextInSEL=this.m_SortedEdges,n.PrevInSEL=null,this.m_SortedEdges.PrevInSEL=n,this.m_SortedEdges=n)};o.Clipper.prototype.CopyAELToSEL=function(){var n=this.m_ActiveEdges;for(this.m_SortedEdges=n;n!==null;)n.PrevInSEL=n.PrevInAEL,n.NextInSEL=n.NextInAEL,n=n.NextInAEL};o.Clipper.prototype.SwapPositionsInAEL=function(n,t){if(!(n.NextInAEL==n.PrevInAEL||t.NextInAEL==t.PrevInAEL)){if(n.NextInAEL==t){var e=t.NextInAEL;e!==null&&(e.PrevInAEL=n);var r=n.PrevInAEL;r!==null&&(r.NextInAEL=t),t.PrevInAEL=r,t.NextInAEL=n,n.PrevInAEL=t,n.NextInAEL=e}else if(t.NextInAEL==n){var e=n.NextInAEL;e!==null&&(e.PrevInAEL=t);var r=t.PrevInAEL;r!==null&&(r.NextInAEL=n),n.PrevInAEL=r,n.NextInAEL=t,t.PrevInAEL=n,t.NextInAEL=e}else{var e=n.NextInAEL,r=n.PrevInAEL;n.NextInAEL=t.NextInAEL,n.NextInAEL!==null&&(n.NextInAEL.PrevInAEL=n),n.PrevInAEL=t.PrevInAEL,n.PrevInAEL!==null&&(n.PrevInAEL.NextInAEL=n),t.NextInAEL=e,t.NextInAEL!==null&&(t.NextInAEL.PrevInAEL=t),t.PrevInAEL=r,t.PrevInAEL!==null&&(t.PrevInAEL.NextInAEL=t)}n.PrevInAEL===null?this.m_ActiveEdges=n:t.PrevInAEL===null&&(this.m_ActiveEdges=t)}};o.Clipper.prototype.SwapPositionsInSEL=function(n,t){if(!(n.NextInSEL===null&&n.PrevInSEL===null)&&!(t.NextInSEL===null&&t.PrevInSEL===null)){if(n.NextInSEL==t){var e=t.NextInSEL;e!==null&&(e.PrevInSEL=n);var r=n.PrevInSEL;r!==null&&(r.NextInSEL=t),t.PrevInSEL=r,t.NextInSEL=n,n.PrevInSEL=t,n.NextInSEL=e}else if(t.NextInSEL==n){var e=n.NextInSEL;e!==null&&(e.PrevInSEL=t);var r=t.PrevInSEL;r!==null&&(r.NextInSEL=n),n.PrevInSEL=r,n.NextInSEL=t,t.PrevInSEL=n,t.NextInSEL=e}else{var e=n.NextInSEL,r=n.PrevInSEL;n.NextInSEL=t.NextInSEL,n.NextInSEL!==null&&(n.NextInSEL.PrevInSEL=n),n.PrevInSEL=t.PrevInSEL,n.PrevInSEL!==null&&(n.PrevInSEL.NextInSEL=n),t.NextInSEL=e,t.NextInSEL!==null&&(t.NextInSEL.PrevInSEL=t),t.PrevInSEL=r,t.PrevInSEL!==null&&(t.PrevInSEL.NextInSEL=t)}n.PrevInSEL===null?this.m_SortedEdges=n:t.PrevInSEL===null&&(this.m_SortedEdges=t)}};o.Clipper.prototype.AddLocalMaxPoly=function(n,t,e){this.AddOutPt(n,e),t.WindDelta==0&&this.AddOutPt(t,e),n.OutIdx==t.OutIdx?(n.OutIdx=-1,t.OutIdx=-1):n.OutIdx<t.OutIdx?this.AppendPolygon(n,t):this.AppendPolygon(t,n)};o.Clipper.prototype.AddLocalMinPoly=function(n,t,e){var r,i,u;if(o.ClipperBase.IsHorizontal(t)||n.Dx>t.Dx?(r=this.AddOutPt(n,e),t.OutIdx=n.OutIdx,n.Side=o.EdgeSide.esLeft,t.Side=o.EdgeSide.esRight,i=n,i.PrevInAEL==t?u=t.PrevInAEL:u=i.PrevInAEL):(r=this.AddOutPt(t,e),n.OutIdx=t.OutIdx,n.Side=o.EdgeSide.esRight,t.Side=o.EdgeSide.esLeft,i=t,i.PrevInAEL==n?u=n.PrevInAEL:u=i.PrevInAEL),u!==null&&u.OutIdx>=0&&o.Clipper.TopX(u,e.Y)==o.Clipper.TopX(i,e.Y)&&o.ClipperBase.SlopesEqual(i,u,this.m_UseFullRange)&&i.WindDelta!==0&&u.WindDelta!==0){var c=this.AddOutPt(u,e);this.AddJoin(r,c,i.Top)}return r};o.Clipper.prototype.CreateOutRec=function(){var n=new o.OutRec;return n.Idx=-1,n.IsHole=!1,n.IsOpen=!1,n.FirstLeft=null,n.Pts=null,n.BottomPt=null,n.PolyNode=null,this.m_PolyOuts.push(n),n.Idx=this.m_PolyOuts.length-1,n};o.Clipper.prototype.AddOutPt=function(n,t){var e=n.Side==o.EdgeSide.esLeft;if(n.OutIdx<0){var r=this.CreateOutRec();r.IsOpen=n.WindDelta===0;var i=new o.OutPt;return r.Pts=i,i.Idx=r.Idx,i.Pt.X=t.X,i.Pt.Y=t.Y,i.Next=i,i.Prev=i,r.IsOpen||this.SetHoleState(n,r),dt&&(o.IntPoint.op_Equality(t,n.Bot)?(i.Pt.X=n.Bot.X,i.Pt.Y=n.Bot.Y,i.Pt.Z=n.Bot.Z):o.IntPoint.op_Equality(t,n.Top)?(i.Pt.X=n.Top.X,i.Pt.Y=n.Top.Y,i.Pt.Z=n.Top.Z):this.SetZ(i.Pt,n)),n.OutIdx=r.Idx,i}else{var r=this.m_PolyOuts[n.OutIdx],u=r.Pts;if(e&&o.IntPoint.op_Equality(t,u.Pt))return u;if(!e&&o.IntPoint.op_Equality(t,u.Prev.Pt))return u.Prev;var i=new o.OutPt;return i.Idx=r.Idx,i.Pt.X=t.X,i.Pt.Y=t.Y,i.Next=u,i.Prev=u.Prev,i.Prev.Next=i,u.Prev=i,e&&(r.Pts=i),dt&&(o.IntPoint.op_Equality(t,n.Bot)?(i.Pt.X=n.Bot.X,i.Pt.Y=n.Bot.Y,i.Pt.Z=n.Bot.Z):o.IntPoint.op_Equality(t,n.Top)?(i.Pt.X=n.Top.X,i.Pt.Y=n.Top.Y,i.Pt.Z=n.Top.Z):this.SetZ(i.Pt,n)),i}};o.Clipper.prototype.SwapPoints=function(n,t){var e=new o.IntPoint(n.Value);n.Value.X=t.Value.X,n.Value.Y=t.Value.Y,t.Value.X=e.X,t.Value.Y=e.Y};o.Clipper.prototype.HorzSegmentsOverlap=function(n,t,e,r){return n.X>e.X==n.X<r.X||t.X>e.X==t.X<r.X||e.X>n.X==e.X<t.X||r.X>n.X==r.X<t.X||n.X==e.X&&t.X==r.X?!0:n.X==r.X&&t.X==e.X};o.Clipper.prototype.InsertPolyPtBetween=function(n,t,e){var r=new o.OutPt;return r.Pt.X=e.X,r.Pt.Y=e.Y,t==n.Next?(n.Next=r,t.Prev=r,r.Next=t,r.Prev=n):(t.Next=r,n.Prev=r,r.Next=n,r.Prev=t),r};o.Clipper.prototype.SetHoleState=function(n,t){for(var e=!1,r=n.PrevInAEL;r!==null;)r.OutIdx>=0&&r.WindDelta!=0&&(e=!e,t.FirstLeft===null&&(t.FirstLeft=this.m_PolyOuts[r.OutIdx])),r=r.PrevInAEL;e&&(t.IsHole=!0)};o.Clipper.prototype.GetDx=function(n,t){return n.Y==t.Y?o.ClipperBase.horizontal:(t.X-n.X)/(t.Y-n.Y)};o.Clipper.prototype.FirstIsBottomPt=function(n,t){for(var e=n.Prev;o.IntPoint.op_Equality(e.Pt,n.Pt)&&e!=n;)e=e.Prev;var r=Math.abs(this.GetDx(n.Pt,e.Pt));for(e=n.Next;o.IntPoint.op_Equality(e.Pt,n.Pt)&&e!=n;)e=e.Next;var i=Math.abs(this.GetDx(n.Pt,e.Pt));for(e=t.Prev;o.IntPoint.op_Equality(e.Pt,t.Pt)&&e!=t;)e=e.Prev;var u=Math.abs(this.GetDx(t.Pt,e.Pt));for(e=t.Next;o.IntPoint.op_Equality(e.Pt,t.Pt)&&e!=t;)e=e.Next;var c=Math.abs(this.GetDx(t.Pt,e.Pt));return r>=u&&r>=c||i>=u&&i>=c};o.Clipper.prototype.GetBottomPt=function(n){for(var t=null,e=n.Next;e!=n;)e.Pt.Y>n.Pt.Y?(n=e,t=null):e.Pt.Y==n.Pt.Y&&e.Pt.X<=n.Pt.X&&(e.Pt.X<n.Pt.X?(t=null,n=e):e.Next!=n&&e.Prev!=n&&(t=e)),e=e.Next;if(t!==null)for(;t!=e;)for(this.FirstIsBottomPt(e,t)||(n=t),t=t.Next;o.IntPoint.op_Inequality(t.Pt,n.Pt);)t=t.Next;return n};o.Clipper.prototype.GetLowermostRec=function(n,t){n.BottomPt===null&&(n.BottomPt=this.GetBottomPt(n.Pts)),t.BottomPt===null&&(t.BottomPt=this.GetBottomPt(t.Pts));var e=n.BottomPt,r=t.BottomPt;return e.Pt.Y>r.Pt.Y?n:e.Pt.Y<r.Pt.Y?t:e.Pt.X<r.Pt.X?n:e.Pt.X>r.Pt.X||e.Next==e?t:r.Next==r||this.FirstIsBottomPt(e,r)?n:t};o.Clipper.prototype.Param1RightOfParam2=function(n,t){do if(n=n.FirstLeft,n==t)return!0;while(n!==null);return!1};o.Clipper.prototype.GetOutRec=function(n){for(var t=this.m_PolyOuts[n];t!=this.m_PolyOuts[t.Idx];)t=this.m_PolyOuts[t.Idx];return t};o.Clipper.prototype.AppendPolygon=function(n,t){var e=this.m_PolyOuts[n.OutIdx],r=this.m_PolyOuts[t.OutIdx],i;this.Param1RightOfParam2(e,r)?i=r:this.Param1RightOfParam2(r,e)?i=e:i=this.GetLowermostRec(e,r);var u=e.Pts,c=u.Prev,v=r.Pts,x=v.Prev,w;n.Side==o.EdgeSide.esLeft?(t.Side==o.EdgeSide.esLeft?(this.ReversePolyPtLinks(v),v.Next=u,u.Prev=v,c.Next=x,x.Prev=c,e.Pts=x):(x.Next=u,u.Prev=x,v.Prev=c,c.Next=v,e.Pts=v),w=o.EdgeSide.esLeft):(t.Side==o.EdgeSide.esRight?(this.ReversePolyPtLinks(v),c.Next=x,x.Prev=c,v.Next=u,u.Prev=v):(c.Next=v,v.Prev=c,u.Prev=x,x.Next=u),w=o.EdgeSide.esRight),e.BottomPt=null,i==r&&(r.FirstLeft!=e&&(e.FirstLeft=r.FirstLeft),e.IsHole=r.IsHole),r.Pts=null,r.BottomPt=null,r.FirstLeft=e;var F=n.OutIdx,B=t.OutIdx;n.OutIdx=-1,t.OutIdx=-1;for(var A=this.m_ActiveEdges;A!==null;){if(A.OutIdx==B){A.OutIdx=F,A.Side=w;break}A=A.NextInAEL}r.Idx=e.Idx};o.Clipper.prototype.ReversePolyPtLinks=function(n){if(n!==null){var t,e;t=n;do e=t.Next,t.Next=t.Prev,t.Prev=e,t=e;while(t!=n)}};o.Clipper.SwapSides=function(n,t){var e=n.Side;n.Side=t.Side,t.Side=e};o.Clipper.SwapPolyIndexes=function(n,t){var e=n.OutIdx;n.OutIdx=t.OutIdx,t.OutIdx=e};o.Clipper.prototype.IntersectEdges=function(n,t,e,r){var i=!r&&n.NextInLML===null&&n.Top.X==e.X&&n.Top.Y==e.Y,u=!r&&t.NextInLML===null&&t.Top.X==e.X&&t.Top.Y==e.Y,c=n.OutIdx>=0,v=t.OutIdx>=0;if(Xe&&(n.WindDelta===0||t.WindDelta===0)){n.WindDelta===0&&t.WindDelta===0?(i||u)&&c&&v&&this.AddLocalMaxPoly(n,t,e):n.PolyTyp==t.PolyTyp&&n.WindDelta!=t.WindDelta&&this.m_ClipType==o.ClipType.ctUnion?n.WindDelta===0?v&&(this.AddOutPt(n,e),c&&(n.OutIdx=-1)):c&&(this.AddOutPt(t,e),v&&(t.OutIdx=-1)):n.PolyTyp!=t.PolyTyp&&(n.WindDelta===0&&Math.abs(t.WindCnt)==1&&(this.m_ClipType!=o.ClipType.ctUnion||t.WindCnt2===0)?(this.AddOutPt(n,e),c&&(n.OutIdx=-1)):t.WindDelta===0&&Math.abs(n.WindCnt)==1&&(this.m_ClipType!=o.ClipType.ctUnion||n.WindCnt2===0)&&(this.AddOutPt(t,e),v&&(t.OutIdx=-1))),i&&(n.OutIdx<0?this.DeleteFromAEL(n):o.Error("Error intersecting polylines")),u&&(t.OutIdx<0?this.DeleteFromAEL(t):o.Error("Error intersecting polylines"));return}if(n.PolyTyp==t.PolyTyp)if(this.IsEvenOddFillType(n)){var x=n.WindCnt;n.WindCnt=t.WindCnt,t.WindCnt=x}else n.WindCnt+t.WindDelta===0?n.WindCnt=-n.WindCnt:n.WindCnt+=t.WindDelta,t.WindCnt-n.WindDelta===0?t.WindCnt=-t.WindCnt:t.WindCnt-=n.WindDelta;else this.IsEvenOddFillType(t)?n.WindCnt2=n.WindCnt2===0?1:0:n.WindCnt2+=t.WindDelta,this.IsEvenOddFillType(n)?t.WindCnt2=t.WindCnt2===0?1:0:t.WindCnt2-=n.WindDelta;var w,F,B,A;n.PolyTyp==o.PolyType.ptSubject?(w=this.m_SubjFillType,B=this.m_ClipFillType):(w=this.m_ClipFillType,B=this.m_SubjFillType),t.PolyTyp==o.PolyType.ptSubject?(F=this.m_SubjFillType,A=this.m_ClipFillType):(F=this.m_ClipFillType,A=this.m_SubjFillType);var N,S;switch(w){case o.PolyFillType.pftPositive:N=n.WindCnt;break;case o.PolyFillType.pftNegative:N=-n.WindCnt;break;default:N=Math.abs(n.WindCnt);break}switch(F){case o.PolyFillType.pftPositive:S=t.WindCnt;break;case o.PolyFillType.pftNegative:S=-t.WindCnt;break;default:S=Math.abs(t.WindCnt);break}if(c&&v)i||u||N!==0&&N!=1||S!==0&&S!=1||n.PolyTyp!=t.PolyTyp&&this.m_ClipType!=o.ClipType.ctXor?this.AddLocalMaxPoly(n,t,e):(this.AddOutPt(n,e),this.AddOutPt(t,e),o.Clipper.SwapSides(n,t),o.Clipper.SwapPolyIndexes(n,t));else if(c)(S===0||S==1)&&(this.AddOutPt(n,e),o.Clipper.SwapSides(n,t),o.Clipper.SwapPolyIndexes(n,t));else if(v)(N===0||N==1)&&(this.AddOutPt(t,e),o.Clipper.SwapSides(n,t),o.Clipper.SwapPolyIndexes(n,t));else if((N===0||N==1)&&(S===0||S==1)&&!i&&!u){var U,$;switch(B){case o.PolyFillType.pftPositive:U=n.WindCnt2;break;case o.PolyFillType.pftNegative:U=-n.WindCnt2;break;default:U=Math.abs(n.WindCnt2);break}switch(A){case o.PolyFillType.pftPositive:$=t.WindCnt2;break;case o.PolyFillType.pftNegative:$=-t.WindCnt2;break;default:$=Math.abs(t.WindCnt2);break}if(n.PolyTyp!=t.PolyTyp)this.AddLocalMinPoly(n,t,e);else if(N==1&&S==1)switch(this.m_ClipType){case o.ClipType.ctIntersection:U>0&&$>0&&this.AddLocalMinPoly(n,t,e);break;case o.ClipType.ctUnion:U<=0&&$<=0&&this.AddLocalMinPoly(n,t,e);break;case o.ClipType.ctDifference:(n.PolyTyp==o.PolyType.ptClip&&U>0&&$>0||n.PolyTyp==o.PolyType.ptSubject&&U<=0&&$<=0)&&this.AddLocalMinPoly(n,t,e);break;case o.ClipType.ctXor:this.AddLocalMinPoly(n,t,e);break}else o.Clipper.SwapSides(n,t)}i!=u&&(i&&n.OutIdx>=0||u&&t.OutIdx>=0)&&(o.Clipper.SwapSides(n,t),o.Clipper.SwapPolyIndexes(n,t)),i&&this.DeleteFromAEL(n),u&&this.DeleteFromAEL(t)};o.Clipper.prototype.DeleteFromAEL=function(n){var t=n.PrevInAEL,e=n.NextInAEL;t===null&&e===null&&n!=this.m_ActiveEdges||(t!==null?t.NextInAEL=e:this.m_ActiveEdges=e,e!==null&&(e.PrevInAEL=t),n.NextInAEL=null,n.PrevInAEL=null)};o.Clipper.prototype.DeleteFromSEL=function(n){var t=n.PrevInSEL,e=n.NextInSEL;t===null&&e===null&&n!=this.m_SortedEdges||(t!==null?t.NextInSEL=e:this.m_SortedEdges=e,e!==null&&(e.PrevInSEL=t),n.NextInSEL=null,n.PrevInSEL=null)};o.Clipper.prototype.UpdateEdgeIntoAEL=function(n){n.NextInLML===null&&o.Error("UpdateEdgeIntoAEL: invalid call");var t=n.PrevInAEL,e=n.NextInAEL;return n.NextInLML.OutIdx=n.OutIdx,t!==null?t.NextInAEL=n.NextInLML:this.m_ActiveEdges=n.NextInLML,e!==null&&(e.PrevInAEL=n.NextInLML),n.NextInLML.Side=n.Side,n.NextInLML.WindDelta=n.WindDelta,n.NextInLML.WindCnt=n.WindCnt,n.NextInLML.WindCnt2=n.WindCnt2,n=n.NextInLML,n.Curr.X=n.Bot.X,n.Curr.Y=n.Bot.Y,n.PrevInAEL=t,n.NextInAEL=e,o.ClipperBase.IsHorizontal(n)||this.InsertScanbeam(n.Top.Y),n};o.Clipper.prototype.ProcessHorizontals=function(n){for(var t=this.m_SortedEdges;t!==null;)this.DeleteFromSEL(t),this.ProcessHorizontal(t,n),t=this.m_SortedEdges};o.Clipper.prototype.GetHorzDirection=function(n,t){n.Bot.X<n.Top.X?(t.Left=n.Bot.X,t.Right=n.Top.X,t.Dir=o.Direction.dLeftToRight):(t.Left=n.Top.X,t.Right=n.Bot.X,t.Dir=o.Direction.dRightToLeft)};o.Clipper.prototype.PrepareHorzJoins=function(n,t){var e=this.m_PolyOuts[n.OutIdx].Pts;n.Side!=o.EdgeSide.esLeft&&(e=e.Prev),t&&(o.IntPoint.op_Equality(e.Pt,n.Top)?this.AddGhostJoin(e,n.Bot):this.AddGhostJoin(e,n.Top))};o.Clipper.prototype.ProcessHorizontal=function(n,t){var e={Dir:null,Left:null,Right:null};this.GetHorzDirection(n,e);for(var r=e.Dir,i=e.Left,u=e.Right,c=n,v=null;c.NextInLML!==null&&o.ClipperBase.IsHorizontal(c.NextInLML);)c=c.NextInLML;for(c.NextInLML===null&&(v=this.GetMaximaPair(c));;){for(var x=n==c,w=this.GetNextInAEL(n,r);w!==null&&!(w.Curr.X==n.Top.X&&n.NextInLML!==null&&w.Dx<n.NextInLML.Dx);){var F=this.GetNextInAEL(w,r);if(r==o.Direction.dLeftToRight&&w.Curr.X<=u||r==o.Direction.dRightToLeft&&w.Curr.X>=i){if(n.OutIdx>=0&&n.WindDelta!=0&&this.PrepareHorzJoins(n,t),w==v&&x){r==o.Direction.dLeftToRight?this.IntersectEdges(n,w,w.Top,!1):this.IntersectEdges(w,n,w.Top,!1),v.OutIdx>=0&&o.Error("ProcessHorizontal error");return}else if(r==o.Direction.dLeftToRight){var B=new o.IntPoint(w.Curr.X,n.Curr.Y);this.IntersectEdges(n,w,B,!0)}else{var B=new o.IntPoint(w.Curr.X,n.Curr.Y);this.IntersectEdges(w,n,B,!0)}this.SwapPositionsInAEL(n,w)}else if(r==o.Direction.dLeftToRight&&w.Curr.X>=u||r==o.Direction.dRightToLeft&&w.Curr.X<=i)break;w=F}if(n.OutIdx>=0&&n.WindDelta!==0&&this.PrepareHorzJoins(n,t),n.NextInLML!==null&&o.ClipperBase.IsHorizontal(n.NextInLML)){n=this.UpdateEdgeIntoAEL(n),n.OutIdx>=0&&this.AddOutPt(n,n.Bot);var e={Dir:r,Left:i,Right:u};this.GetHorzDirection(n,e),r=e.Dir,i=e.Left,u=e.Right}else break}if(n.NextInLML!==null)if(n.OutIdx>=0){var A=this.AddOutPt(n,n.Top);if(n=this.UpdateEdgeIntoAEL(n),n.WindDelta===0)return;var N=n.PrevInAEL,F=n.NextInAEL;if(N!==null&&N.Curr.X==n.Bot.X&&N.Curr.Y==n.Bot.Y&&N.WindDelta!==0&&N.OutIdx>=0&&N.Curr.Y>N.Top.Y&&o.ClipperBase.SlopesEqual(n,N,this.m_UseFullRange)){var S=this.AddOutPt(N,n.Bot);this.AddJoin(A,S,n.Top)}else if(F!==null&&F.Curr.X==n.Bot.X&&F.Curr.Y==n.Bot.Y&&F.WindDelta!==0&&F.OutIdx>=0&&F.Curr.Y>F.Top.Y&&o.ClipperBase.SlopesEqual(n,F,this.m_UseFullRange)){var S=this.AddOutPt(F,n.Bot);this.AddJoin(A,S,n.Top)}}else n=this.UpdateEdgeIntoAEL(n);else v!==null?v.OutIdx>=0?(r==o.Direction.dLeftToRight?this.IntersectEdges(n,v,n.Top,!1):this.IntersectEdges(v,n,n.Top,!1),v.OutIdx>=0&&o.Error("ProcessHorizontal error")):(this.DeleteFromAEL(n),this.DeleteFromAEL(v)):(n.OutIdx>=0&&this.AddOutPt(n,n.Top),this.DeleteFromAEL(n))};o.Clipper.prototype.GetNextInAEL=function(n,t){return t==o.Direction.dLeftToRight?n.NextInAEL:n.PrevInAEL};o.Clipper.prototype.IsMinima=function(n){return n!==null&&n.Prev.NextInLML!=n&&n.Next.NextInLML!=n};o.Clipper.prototype.IsMaxima=function(n,t){return n!==null&&n.Top.Y==t&&n.NextInLML===null};o.Clipper.prototype.IsIntermediate=function(n,t){return n.Top.Y==t&&n.NextInLML!==null};o.Clipper.prototype.GetMaximaPair=function(n){var t=null;return o.IntPoint.op_Equality(n.Next.Top,n.Top)&&n.Next.NextInLML===null?t=n.Next:o.IntPoint.op_Equality(n.Prev.Top,n.Top)&&n.Prev.NextInLML===null&&(t=n.Prev),t!==null&&(t.OutIdx==-2||t.NextInAEL==t.PrevInAEL&&!o.ClipperBase.IsHorizontal(t))?null:t};o.Clipper.prototype.ProcessIntersections=function(n,t){if(this.m_ActiveEdges==null)return!0;try{if(this.BuildIntersectList(n,t),this.m_IntersectList.length==0)return!0;if(this.m_IntersectList.length==1||this.FixupIntersectionOrder())this.ProcessIntersectList();else return!1}catch{this.m_SortedEdges=null,this.m_IntersectList.length=0,o.Error("ProcessIntersections error")}return this.m_SortedEdges=null,!0};o.Clipper.prototype.BuildIntersectList=function(n,t){if(this.m_ActiveEdges!==null){var e=this.m_ActiveEdges;for(this.m_SortedEdges=e;e!==null;)e.PrevInSEL=e.PrevInAEL,e.NextInSEL=e.NextInAEL,e.Curr.X=o.Clipper.TopX(e,t),e=e.NextInAEL;for(var r=!0;r&&this.m_SortedEdges!==null;){for(r=!1,e=this.m_SortedEdges;e.NextInSEL!==null;){var i=e.NextInSEL,u=new o.IntPoint;if(e.Curr.X>i.Curr.X){!this.IntersectPoint(e,i,u)&&e.Curr.X>i.Curr.X+1&&o.Error("Intersection error"),u.Y>n&&(u.Y=n,Math.abs(e.Dx)>Math.abs(i.Dx)?u.X=o.Clipper.TopX(i,n):u.X=o.Clipper.TopX(e,n));var c=new o.IntersectNode;c.Edge1=e,c.Edge2=i,c.Pt.X=u.X,c.Pt.Y=u.Y,this.m_IntersectList.push(c),this.SwapPositionsInSEL(e,i),r=!0}else e=i}if(e.PrevInSEL!==null)e.PrevInSEL.NextInSEL=null;else break}this.m_SortedEdges=null}};o.Clipper.prototype.EdgesAdjacent=function(n){return n.Edge1.NextInSEL==n.Edge2||n.Edge1.PrevInSEL==n.Edge2};o.Clipper.IntersectNodeSort=function(n,t){return t.Pt.Y-n.Pt.Y};o.Clipper.prototype.FixupIntersectionOrder=function(){this.m_IntersectList.sort(this.m_IntersectNodeComparer),this.CopyAELToSEL();for(var n=this.m_IntersectList.length,t=0;t<n;t++){if(!this.EdgesAdjacent(this.m_IntersectList[t])){for(var e=t+1;e<n&&!this.EdgesAdjacent(this.m_IntersectList[e]);)e++;if(e==n)return!1;var r=this.m_IntersectList[t];this.m_IntersectList[t]=this.m_IntersectList[e],this.m_IntersectList[e]=r}this.SwapPositionsInSEL(this.m_IntersectList[t].Edge1,this.m_IntersectList[t].Edge2)}return!0};o.Clipper.prototype.ProcessIntersectList=function(){for(var n=0,t=this.m_IntersectList.length;n<t;n++){var e=this.m_IntersectList[n];this.IntersectEdges(e.Edge1,e.Edge2,e.Pt,!0),this.SwapPositionsInAEL(e.Edge1,e.Edge2)}this.m_IntersectList.length=0};var wo=function(n){return n<0?Math.ceil(n-.5):Math.round(n)},Eo=function(n){return n<0?Math.ceil(n-.5):Math.floor(n+.5)},Io=function(n){return n<0?-Math.round(Math.abs(n)):Math.round(n)},Fo=function(n){return n<0?(n-=.5,n<-2147483648?Math.ceil(n):n|0):(n+=.5,n>2147483647?Math.floor(n):n|0)};pn.msie?o.Clipper.Round=wo:pn.chromium?o.Clipper.Round=Io:pn.safari?o.Clipper.Round=Fo:o.Clipper.Round=Eo;o.Clipper.TopX=function(n,t){return t==n.Top.Y?n.Top.X:n.Bot.X+o.Clipper.Round(n.Dx*(t-n.Bot.Y))};o.Clipper.prototype.IntersectPoint=function(n,t,e){e.X=0,e.Y=0;var r,i;if(o.ClipperBase.SlopesEqual(n,t,this.m_UseFullRange)||n.Dx==t.Dx)return t.Bot.Y>n.Bot.Y?(e.X=t.Bot.X,e.Y=t.Bot.Y):(e.X=n.Bot.X,e.Y=n.Bot.Y),!1;if(n.Delta.X===0)e.X=n.Bot.X,o.ClipperBase.IsHorizontal(t)?e.Y=t.Bot.Y:(i=t.Bot.Y-t.Bot.X/t.Dx,e.Y=o.Clipper.Round(e.X/t.Dx+i));else if(t.Delta.X===0)e.X=t.Bot.X,o.ClipperBase.IsHorizontal(n)?e.Y=n.Bot.Y:(r=n.Bot.Y-n.Bot.X/n.Dx,e.Y=o.Clipper.Round(e.X/n.Dx+r));else{r=n.Bot.X-n.Bot.Y*n.Dx,i=t.Bot.X-t.Bot.Y*t.Dx;var u=(i-r)/(n.Dx-t.Dx);e.Y=o.Clipper.Round(u),Math.abs(n.Dx)<Math.abs(t.Dx)?e.X=o.Clipper.Round(n.Dx*u+r):e.X=o.Clipper.Round(t.Dx*u+i)}if(e.Y<n.Top.Y||e.Y<t.Top.Y){if(n.Top.Y>t.Top.Y)return e.Y=n.Top.Y,e.X=o.Clipper.TopX(t,n.Top.Y),e.X<n.Top.X;e.Y=t.Top.Y,Math.abs(n.Dx)<Math.abs(t.Dx)?e.X=o.Clipper.TopX(n,e.Y):e.X=o.Clipper.TopX(t,e.Y)}return!0};o.Clipper.prototype.ProcessEdgesAtTopOfScanbeam=function(n){for(var t=this.m_ActiveEdges;t!==null;){var e=this.IsMaxima(t,n);if(e){var r=this.GetMaximaPair(t);e=r===null||!o.ClipperBase.IsHorizontal(r)}if(e){var i=t.PrevInAEL;this.DoMaxima(t),i===null?t=this.m_ActiveEdges:t=i.NextInAEL}else{if(this.IsIntermediate(t,n)&&o.ClipperBase.IsHorizontal(t.NextInLML)?(t=this.UpdateEdgeIntoAEL(t),t.OutIdx>=0&&this.AddOutPt(t,t.Bot),this.AddEdgeToSEL(t)):(t.Curr.X=o.Clipper.TopX(t,n),t.Curr.Y=n),this.StrictlySimple){var i=t.PrevInAEL;if(t.OutIdx>=0&&t.WindDelta!==0&&i!==null&&i.OutIdx>=0&&i.Curr.X==t.Curr.X&&i.WindDelta!==0){var u=this.AddOutPt(i,t.Curr),c=this.AddOutPt(t,t.Curr);this.AddJoin(u,c,t.Curr)}}t=t.NextInAEL}}for(this.ProcessHorizontals(!0),t=this.m_ActiveEdges;t!==null;){if(this.IsIntermediate(t,n)){var u=null;t.OutIdx>=0&&(u=this.AddOutPt(t,t.Top)),t=this.UpdateEdgeIntoAEL(t);var i=t.PrevInAEL,v=t.NextInAEL;if(i!==null&&i.Curr.X==t.Bot.X&&i.Curr.Y==t.Bot.Y&&u!==null&&i.OutIdx>=0&&i.Curr.Y>i.Top.Y&&o.ClipperBase.SlopesEqual(t,i,this.m_UseFullRange)&&t.WindDelta!==0&&i.WindDelta!==0){var c=this.AddOutPt(i,t.Bot);this.AddJoin(u,c,t.Top)}else if(v!==null&&v.Curr.X==t.Bot.X&&v.Curr.Y==t.Bot.Y&&u!==null&&v.OutIdx>=0&&v.Curr.Y>v.Top.Y&&o.ClipperBase.SlopesEqual(t,v,this.m_UseFullRange)&&t.WindDelta!==0&&v.WindDelta!==0){var c=this.AddOutPt(v,t.Bot);this.AddJoin(u,c,t.Top)}}t=t.NextInAEL}};o.Clipper.prototype.DoMaxima=function(n){var t=this.GetMaximaPair(n);if(t===null){n.OutIdx>=0&&this.AddOutPt(n,n.Top),this.DeleteFromAEL(n);return}for(var e=n.NextInAEL,r=!0;e!==null&&e!=t;)this.IntersectEdges(n,e,n.Top,!0),this.SwapPositionsInAEL(n,e),e=n.NextInAEL;n.OutIdx==-1&&t.OutIdx==-1?(this.DeleteFromAEL(n),this.DeleteFromAEL(t)):n.OutIdx>=0&&t.OutIdx>=0?this.IntersectEdges(n,t,n.Top,!1):r&&n.WindDelta===0?(n.OutIdx>=0&&(this.AddOutPt(n,n.Top),n.OutIdx=-1),this.DeleteFromAEL(n),t.OutIdx>=0&&(this.AddOutPt(t,n.Top),t.OutIdx=-1),this.DeleteFromAEL(t)):o.Error("DoMaxima error")};o.Clipper.ReversePaths=function(n){for(var t=0,e=n.length;t<e;t++)n[t].reverse()};o.Clipper.Orientation=function(n){return o.Clipper.Area(n)>=0};o.Clipper.prototype.PointCount=function(n){if(n===null)return 0;var t=0,e=n;do t++,e=e.Next;while(e!=n);return t};o.Clipper.prototype.BuildResult=function(n){o.Clear(n);for(var t=0,e=this.m_PolyOuts.length;t<e;t++){var r=this.m_PolyOuts[t];if(r.Pts!==null){var i=r.Pts.Prev,u=this.PointCount(i);if(!(u<2)){for(var c=new Array(u),v=0;v<u;v++)c[v]=i.Pt,i=i.Prev;n.push(c)}}}};o.Clipper.prototype.BuildResult2=function(n){n.Clear();for(var t=0,e=this.m_PolyOuts.length;t<e;t++){var r=this.m_PolyOuts[t],i=this.PointCount(r.Pts);if(!(r.IsOpen&&i<2||!r.IsOpen&&i<3)){this.FixHoleLinkage(r);var u=new o.PolyNode;n.m_AllPolys.push(u),r.PolyNode=u,u.m_polygon.length=i;for(var c=r.Pts.Prev,v=0;v<i;v++)u.m_polygon[v]=c.Pt,c=c.Prev}}for(var t=0,e=this.m_PolyOuts.length;t<e;t++){var r=this.m_PolyOuts[t];r.PolyNode!==null&&(r.IsOpen?(r.PolyNode.IsOpen=!0,n.AddChild(r.PolyNode)):r.FirstLeft!==null&&r.FirstLeft.PolyNode!=null?r.FirstLeft.PolyNode.AddChild(r.PolyNode):n.AddChild(r.PolyNode))}};o.Clipper.prototype.FixupOutPolygon=function(n){var t=null;n.BottomPt=null;for(var e=n.Pts;;){if(e.Prev==e||e.Prev==e.Next){this.DisposeOutPts(e),n.Pts=null;return}if(o.IntPoint.op_Equality(e.Pt,e.Next.Pt)||o.IntPoint.op_Equality(e.Pt,e.Prev.Pt)||o.ClipperBase.SlopesEqual(e.Prev.Pt,e.Pt,e.Next.Pt,this.m_UseFullRange)&&(!this.PreserveCollinear||!this.Pt2IsBetweenPt1AndPt3(e.Prev.Pt,e.Pt,e.Next.Pt))){t=null;var r=e;e.Prev.Next=e.Next,e.Next.Prev=e.Prev,e=e.Prev,r=null}else{if(e==t)break;t===null&&(t=e),e=e.Next}}n.Pts=e};o.Clipper.prototype.DupOutPt=function(n,t){var e=new o.OutPt;return e.Pt.X=n.Pt.X,e.Pt.Y=n.Pt.Y,e.Idx=n.Idx,t?(e.Next=n.Next,e.Prev=n,n.Next.Prev=e,n.Next=e):(e.Prev=n.Prev,e.Next=n,n.Prev.Next=e,n.Prev=e),e};o.Clipper.prototype.GetOverlap=function(n,t,e,r,i){return n<t?e<r?(i.Left=Math.max(n,e),i.Right=Math.min(t,r)):(i.Left=Math.max(n,r),i.Right=Math.min(t,e)):e<r?(i.Left=Math.max(t,e),i.Right=Math.min(n,r)):(i.Left=Math.max(t,r),i.Right=Math.min(n,e)),i.Left<i.Right};o.Clipper.prototype.JoinHorz=function(n,t,e,r,i,u){var c=n.Pt.X>t.Pt.X?o.Direction.dRightToLeft:o.Direction.dLeftToRight,v=e.Pt.X>r.Pt.X?o.Direction.dRightToLeft:o.Direction.dLeftToRight;if(c==v)return!1;if(c==o.Direction.dLeftToRight){for(;n.Next.Pt.X<=i.X&&n.Next.Pt.X>=n.Pt.X&&n.Next.Pt.Y==i.Y;)n=n.Next;u&&n.Pt.X!=i.X&&(n=n.Next),t=this.DupOutPt(n,!u),o.IntPoint.op_Inequality(t.Pt,i)&&(n=t,n.Pt.X=i.X,n.Pt.Y=i.Y,t=this.DupOutPt(n,!u))}else{for(;n.Next.Pt.X>=i.X&&n.Next.Pt.X<=n.Pt.X&&n.Next.Pt.Y==i.Y;)n=n.Next;!u&&n.Pt.X!=i.X&&(n=n.Next),t=this.DupOutPt(n,u),o.IntPoint.op_Inequality(t.Pt,i)&&(n=t,n.Pt.X=i.X,n.Pt.Y=i.Y,t=this.DupOutPt(n,u))}if(v==o.Direction.dLeftToRight){for(;e.Next.Pt.X<=i.X&&e.Next.Pt.X>=e.Pt.X&&e.Next.Pt.Y==i.Y;)e=e.Next;u&&e.Pt.X!=i.X&&(e=e.Next),r=this.DupOutPt(e,!u),o.IntPoint.op_Inequality(r.Pt,i)&&(e=r,e.Pt.X=i.X,e.Pt.Y=i.Y,r=this.DupOutPt(e,!u))}else{for(;e.Next.Pt.X>=i.X&&e.Next.Pt.X<=e.Pt.X&&e.Next.Pt.Y==i.Y;)e=e.Next;!u&&e.Pt.X!=i.X&&(e=e.Next),r=this.DupOutPt(e,u),o.IntPoint.op_Inequality(r.Pt,i)&&(e=r,e.Pt.X=i.X,e.Pt.Y=i.Y,r=this.DupOutPt(e,u))}return c==o.Direction.dLeftToRight==u?(n.Prev=e,e.Next=n,t.Next=r,r.Prev=t):(n.Next=e,e.Prev=n,t.Prev=r,r.Next=t),!0};o.Clipper.prototype.JoinPoints=function(n,t,e){var r=n.OutPt1,i=new o.OutPt,u=n.OutPt2,c=new o.OutPt,v=n.OutPt1.Pt.Y==n.OffPt.Y;if(v&&o.IntPoint.op_Equality(n.OffPt,n.OutPt1.Pt)&&o.IntPoint.op_Equality(n.OffPt,n.OutPt2.Pt)){for(i=n.OutPt1.Next;i!=r&&o.IntPoint.op_Equality(i.Pt,n.OffPt);)i=i.Next;var x=i.Pt.Y>n.OffPt.Y;for(c=n.OutPt2.Next;c!=u&&o.IntPoint.op_Equality(c.Pt,n.OffPt);)c=c.Next;var w=c.Pt.Y>n.OffPt.Y;return x==w?!1:x?(i=this.DupOutPt(r,!1),c=this.DupOutPt(u,!0),r.Prev=u,u.Next=r,i.Next=c,c.Prev=i,n.OutPt1=r,n.OutPt2=i,!0):(i=this.DupOutPt(r,!0),c=this.DupOutPt(u,!1),r.Next=u,u.Prev=r,i.Prev=c,c.Next=i,n.OutPt1=r,n.OutPt2=i,!0)}else if(v){for(i=r;r.Prev.Pt.Y==r.Pt.Y&&r.Prev!=i&&r.Prev!=u;)r=r.Prev;for(;i.Next.Pt.Y==i.Pt.Y&&i.Next!=r&&i.Next!=u;)i=i.Next;if(i.Next==r||i.Next==u)return!1;for(c=u;u.Prev.Pt.Y==u.Pt.Y&&u.Prev!=c&&u.Prev!=i;)u=u.Prev;for(;c.Next.Pt.Y==c.Pt.Y&&c.Next!=u&&c.Next!=r;)c=c.Next;if(c.Next==u||c.Next==r)return!1;var F={Left:null,Right:null};if(!this.GetOverlap(r.Pt.X,i.Pt.X,u.Pt.X,c.Pt.X,F))return!1;var B=F.Left,A=F.Right,N=new o.IntPoint,S;return r.Pt.X>=B&&r.Pt.X<=A?(N.X=r.Pt.X,N.Y=r.Pt.Y,S=r.Pt.X>i.Pt.X):u.Pt.X>=B&&u.Pt.X<=A?(N.X=u.Pt.X,N.Y=u.Pt.Y,S=u.Pt.X>c.Pt.X):i.Pt.X>=B&&i.Pt.X<=A?(N.X=i.Pt.X,N.Y=i.Pt.Y,S=i.Pt.X>r.Pt.X):(N.X=c.Pt.X,N.Y=c.Pt.Y,S=c.Pt.X>u.Pt.X),n.OutPt1=r,n.OutPt2=u,this.JoinHorz(r,i,u,c,N,S)}else{for(i=r.Next;o.IntPoint.op_Equality(i.Pt,r.Pt)&&i!=r;)i=i.Next;var U=i.Pt.Y>r.Pt.Y||!o.ClipperBase.SlopesEqual(r.Pt,i.Pt,n.OffPt,this.m_UseFullRange);if(U){for(i=r.Prev;o.IntPoint.op_Equality(i.Pt,r.Pt)&&i!=r;)i=i.Prev;if(i.Pt.Y>r.Pt.Y||!o.ClipperBase.SlopesEqual(r.Pt,i.Pt,n.OffPt,this.m_UseFullRange))return!1}for(c=u.Next;o.IntPoint.op_Equality(c.Pt,u.Pt)&&c!=u;)c=c.Next;var $=c.Pt.Y>u.Pt.Y||!o.ClipperBase.SlopesEqual(u.Pt,c.Pt,n.OffPt,this.m_UseFullRange);if($){for(c=u.Prev;o.IntPoint.op_Equality(c.Pt,u.Pt)&&c!=u;)c=c.Prev;if(c.Pt.Y>u.Pt.Y||!o.ClipperBase.SlopesEqual(u.Pt,c.Pt,n.OffPt,this.m_UseFullRange))return!1}return i==r||c==u||i==c||t==e&&U==$?!1:U?(i=this.DupOutPt(r,!1),c=this.DupOutPt(u,!0),r.Prev=u,u.Next=r,i.Next=c,c.Prev=i,n.OutPt1=r,n.OutPt2=i,!0):(i=this.DupOutPt(r,!0),c=this.DupOutPt(u,!1),r.Next=u,u.Prev=r,i.Prev=c,c.Next=i,n.OutPt1=r,n.OutPt2=i,!0)}};o.Clipper.GetBounds=function(n){for(var t=0,e=n.length;t<e&&n[t].length==0;)t++;if(t==e)return new o.IntRect(0,0,0,0);var r=new o.IntRect;for(r.left=n[t][0].X,r.right=r.left,r.top=n[t][0].Y,r.bottom=r.top;t<e;t++)for(var i=0,u=n[t].length;i<u;i++)n[t][i].X<r.left?r.left=n[t][i].X:n[t][i].X>r.right&&(r.right=n[t][i].X),n[t][i].Y<r.top?r.top=n[t][i].Y:n[t][i].Y>r.bottom&&(r.bottom=n[t][i].Y);return r};o.Clipper.prototype.GetBounds2=function(n){var t=n,e=new o.IntRect;for(e.left=n.Pt.X,e.right=n.Pt.X,e.top=n.Pt.Y,e.bottom=n.Pt.Y,n=n.Next;n!=t;)n.Pt.X<e.left&&(e.left=n.Pt.X),n.Pt.X>e.right&&(e.right=n.Pt.X),n.Pt.Y<e.top&&(e.top=n.Pt.Y),n.Pt.Y>e.bottom&&(e.bottom=n.Pt.Y),n=n.Next;return e};o.Clipper.PointInPolygon=function(n,t){var e=0,r=t.length;if(r<3)return 0;for(var i=t[0],u=1;u<=r;++u){var c=u==r?t[0]:t[u];if(c.Y==n.Y&&(c.X==n.X||i.Y==n.Y&&c.X>n.X==i.X<n.X))return-1;if(i.Y<n.Y!=c.Y<n.Y){if(i.X>=n.X)if(c.X>n.X)e=1-e;else{var v=(i.X-n.X)*(c.Y-n.Y)-(c.X-n.X)*(i.Y-n.Y);if(v==0)return-1;v>0==c.Y>i.Y&&(e=1-e)}else if(c.X>n.X){var v=(i.X-n.X)*(c.Y-n.Y)-(c.X-n.X)*(i.Y-n.Y);if(v==0)return-1;v>0==c.Y>i.Y&&(e=1-e)}}i=c}return e};o.Clipper.prototype.PointInPolygon=function(n,t){for(var e=0,r=t;;){var i=t.Pt.X,u=t.Pt.Y,c=t.Next.Pt.X,v=t.Next.Pt.Y;if(v==n.Y&&(c==n.X||u==n.Y&&c>n.X==i<n.X))return-1;if(u<n.Y!=v<n.Y){if(i>=n.X)if(c>n.X)e=1-e;else{var x=(i-n.X)*(v-n.Y)-(c-n.X)*(u-n.Y);if(x==0)return-1;x>0==v>u&&(e=1-e)}else if(c>n.X){var x=(i-n.X)*(v-n.Y)-(c-n.X)*(u-n.Y);if(x==0)return-1;x>0==v>u&&(e=1-e)}}if(t=t.Next,r==t)break}return e};o.Clipper.prototype.Poly2ContainsPoly1=function(n,t){var e=n;do{var r=this.PointInPolygon(e.Pt,t);if(r>=0)return r!=0;e=e.Next}while(e!=n);return!0};o.Clipper.prototype.FixupFirstLefts1=function(n,t){for(var e=0,r=this.m_PolyOuts.length;e<r;e++){var i=this.m_PolyOuts[e];i.Pts!==null&&i.FirstLeft==n&&this.Poly2ContainsPoly1(i.Pts,t.Pts)&&(i.FirstLeft=t)}};o.Clipper.prototype.FixupFirstLefts2=function(n,t){for(var e=0,r=this.m_PolyOuts,i=r.length,u=r[e];e<i;e++,u=r[e])u.FirstLeft==n&&(u.FirstLeft=t)};o.Clipper.ParseFirstLeft=function(n){for(;n!=null&&n.Pts==null;)n=n.FirstLeft;return n};o.Clipper.prototype.JoinCommonEdges=function(){for(var n=0,t=this.m_Joins.length;n<t;n++){var e=this.m_Joins[n],r=this.GetOutRec(e.OutPt1.Idx),i=this.GetOutRec(e.OutPt2.Idx);if(!(r.Pts==null||i.Pts==null)){var u;if(r==i?u=r:this.Param1RightOfParam2(r,i)?u=i:this.Param1RightOfParam2(i,r)?u=r:u=this.GetLowermostRec(r,i),!!this.JoinPoints(e,r,i))if(r==i){if(r.Pts=e.OutPt1,r.BottomPt=null,i=this.CreateOutRec(),i.Pts=e.OutPt2,this.UpdateOutPtIdxs(i),this.m_UsingPolyTree)for(var c=0,v=this.m_PolyOuts.length;c<v-1;c++){var x=this.m_PolyOuts[c];x.Pts==null||o.Clipper.ParseFirstLeft(x.FirstLeft)!=r||x.IsHole==r.IsHole||this.Poly2ContainsPoly1(x.Pts,e.OutPt2)&&(x.FirstLeft=i)}this.Poly2ContainsPoly1(i.Pts,r.Pts)?(i.IsHole=!r.IsHole,i.FirstLeft=r,this.m_UsingPolyTree&&this.FixupFirstLefts2(i,r),(i.IsHole^this.ReverseSolution)==this.Area(i)>0&&this.ReversePolyPtLinks(i.Pts)):this.Poly2ContainsPoly1(r.Pts,i.Pts)?(i.IsHole=r.IsHole,r.IsHole=!i.IsHole,i.FirstLeft=r.FirstLeft,r.FirstLeft=i,this.m_UsingPolyTree&&this.FixupFirstLefts2(r,i),(r.IsHole^this.ReverseSolution)==this.Area(r)>0&&this.ReversePolyPtLinks(r.Pts)):(i.IsHole=r.IsHole,i.FirstLeft=r.FirstLeft,this.m_UsingPolyTree&&this.FixupFirstLefts1(r,i))}else i.Pts=null,i.BottomPt=null,i.Idx=r.Idx,r.IsHole=u.IsHole,u==i&&(r.FirstLeft=i.FirstLeft),i.FirstLeft=r,this.m_UsingPolyTree&&this.FixupFirstLefts2(i,r)}}};o.Clipper.prototype.UpdateOutPtIdxs=function(n){var t=n.Pts;do t.Idx=n.Idx,t=t.Prev;while(t!=n.Pts)};o.Clipper.prototype.DoSimplePolygons=function(){for(var n=0;n<this.m_PolyOuts.length;){var t=this.m_PolyOuts[n++],e=t.Pts;if(e!==null)do{for(var r=e.Next;r!=t.Pts;){if(o.IntPoint.op_Equality(e.Pt,r.Pt)&&r.Next!=e&&r.Prev!=e){var i=e.Prev,u=r.Prev;e.Prev=u,u.Next=e,r.Prev=i,i.Next=r,t.Pts=e;var c=this.CreateOutRec();c.Pts=r,this.UpdateOutPtIdxs(c),this.Poly2ContainsPoly1(c.Pts,t.Pts)?(c.IsHole=!t.IsHole,c.FirstLeft=t):this.Poly2ContainsPoly1(t.Pts,c.Pts)?(c.IsHole=t.IsHole,t.IsHole=!c.IsHole,c.FirstLeft=t.FirstLeft,t.FirstLeft=c):(c.IsHole=t.IsHole,c.FirstLeft=t.FirstLeft),r=e}r=r.Next}e=e.Next}while(e!=t.Pts)}};o.Clipper.Area=function(n){var t=n.length;if(t<3)return 0;for(var e=0,r=0,i=t-1;r<t;++r)e+=(n[i].X+n[r].X)*(n[i].Y-n[r].Y),i=r;return-e*.5};o.Clipper.prototype.Area=function(n){var t=n.Pts;if(t==null)return 0;var e=0;do e=e+(t.Prev.Pt.X+t.Pt.X)*(t.Prev.Pt.Y-t.Pt.Y),t=t.Next;while(t!=n.Pts);return e*.5};Ne&&(o.Clipper.OffsetPaths=function(n,t,e,r,i){var u=new o.Paths,c=new o.ClipperOffset(i,i);return c.AddPaths(n,e,r),c.Execute(u,t),u});o.Clipper.SimplifyPolygon=function(n,t){var e=new Array,r=new o.Clipper(0);return r.StrictlySimple=!0,r.AddPath(n,o.PolyType.ptSubject,!0),r.Execute(o.ClipType.ctUnion,e,t,t),e};o.Clipper.SimplifyPolygons=function(n,t){typeof t>"u"&&(t=o.PolyFillType.pftEvenOdd);var e=new Array,r=new o.Clipper(0);return r.StrictlySimple=!0,r.AddPaths(n,o.PolyType.ptSubject,!0),r.Execute(o.ClipType.ctUnion,e,t,t),e};o.Clipper.DistanceSqrd=function(n,t){var e=n.X-t.X,r=n.Y-t.Y;return e*e+r*r};o.Clipper.DistanceFromLineSqrd=function(n,t,e){var r=t.Y-e.Y,i=e.X-t.X,u=r*t.X+i*t.Y;return u=r*n.X+i*n.Y-u,u*u/(r*r+i*i)};o.Clipper.SlopesNearCollinear=function(n,t,e,r){return o.Clipper.DistanceFromLineSqrd(t,n,e)<r};o.Clipper.PointsAreClose=function(n,t,e){var r=n.X-t.X,i=n.Y-t.Y;return r*r+i*i<=e};o.Clipper.ExcludeOp=function(n){var t=n.Prev;return t.Next=n.Next,n.Next.Prev=t,t.Idx=0,t};o.Clipper.CleanPolygon=function(n,t){typeof t>"u"&&(t=1.415);var e=n.length;if(e==0)return new Array;for(var r=new Array(e),i=0;i<e;++i)r[i]=new o.OutPt;for(var i=0;i<e;++i)r[i].Pt=n[i],r[i].Next=r[(i+1)%e],r[i].Next.Prev=r[i],r[i].Idx=0;for(var u=t*t,c=r[0];c.Idx==0&&c.Next!=c.Prev;)o.Clipper.PointsAreClose(c.Pt,c.Prev.Pt,u)?(c=o.Clipper.ExcludeOp(c),e--):o.Clipper.PointsAreClose(c.Prev.Pt,c.Next.Pt,u)?(o.Clipper.ExcludeOp(c.Next),c=o.Clipper.ExcludeOp(c),e-=2):o.Clipper.SlopesNearCollinear(c.Prev.Pt,c.Pt,c.Next.Pt,u)?(c=o.Clipper.ExcludeOp(c),e--):(c.Idx=1,c=c.Next);e<3&&(e=0);for(var v=new Array(e),i=0;i<e;++i)v[i]=new o.IntPoint(c.Pt),c=c.Next;return r=null,v};o.Clipper.CleanPolygons=function(n,t){for(var e=new Array(n.length),r=0,i=n.length;r<i;r++)e[r]=o.Clipper.CleanPolygon(n[r],t);return e};o.Clipper.Minkowski=function(n,t,e,r){var i=r?1:0,u=n.length,c=t.length,v=new Array;if(e)for(var x=0;x<c;x++){for(var w=new Array(u),F=0,B=n.length,A=n[F];F<B;F++,A=n[F])w[F]=new o.IntPoint(t[x].X+A.X,t[x].Y+A.Y);v.push(w)}else for(var x=0;x<c;x++){for(var w=new Array(u),F=0,B=n.length,A=n[F];F<B;F++,A=n[F])w[F]=new o.IntPoint(t[x].X-A.X,t[x].Y-A.Y);v.push(w)}for(var N=new Array,x=0;x<c-1+i;x++)for(var F=0;F<u;F++){var S=new Array;S.push(v[x%c][F%u]),S.push(v[(x+1)%c][F%u]),S.push(v[(x+1)%c][(F+1)%u]),S.push(v[x%c][(F+1)%u]),o.Clipper.Orientation(S)||S.reverse(),N.push(S)}var U=new o.Clipper(0);return U.AddPaths(N,o.PolyType.ptSubject,!0),U.Execute(o.ClipType.ctUnion,v,o.PolyFillType.pftNonZero,o.PolyFillType.pftNonZero),v};o.Clipper.MinkowskiSum=function(){var n=arguments,t=n.length;if(t==3){var e=n[0],r=n[1],i=n[2];return o.Clipper.Minkowski(e,r,!0,i)}else if(t==4){for(var e=n[0],u=n[1],c=n[2],i=n[3],v=new o.Clipper,x,w=0,F=u.length;w<F;++w){var x=o.Clipper.Minkowski(e,u[w],!0,i);v.AddPaths(x,o.PolyType.ptSubject,!0)}i&&v.AddPaths(u,o.PolyType.ptClip,!0);var B=new o.Paths;return v.Execute(o.ClipType.ctUnion,B,c,c),B}};o.Clipper.MinkowskiDiff=function(n,t,e){return o.Clipper.Minkowski(n,t,!1,e)};o.Clipper.PolyTreeToPaths=function(n){var t=new Array;return o.Clipper.AddPolyNodeToPaths(n,o.Clipper.NodeType.ntAny,t),t};o.Clipper.AddPolyNodeToPaths=function(n,t,e){var r=!0;switch(t){case o.Clipper.NodeType.ntOpen:return;case o.Clipper.NodeType.ntClosed:r=!n.IsOpen;break;default:break}n.m_polygon.length>0&&r&&e.push(n.m_polygon);for(var i=0,u=n.Childs(),c=u.length,v=u[i];i<c;i++,v=u[i])o.Clipper.AddPolyNodeToPaths(v,t,e)};o.Clipper.OpenPathsFromPolyTree=function(n){for(var t=new o.Paths,e=0,r=n.ChildCount();e<r;e++)n.Childs()[e].IsOpen&&t.push(n.Childs()[e].m_polygon);return t};o.Clipper.ClosedPathsFromPolyTree=function(n){var t=new o.Paths;return o.Clipper.AddPolyNodeToPaths(n,o.Clipper.NodeType.ntClosed,t),t};Kt(o.Clipper,o.ClipperBase);o.Clipper.NodeType={ntAny:0,ntOpen:1,ntClosed:2};o.ClipperOffset=function(n,t){typeof n>"u"&&(n=2),typeof t>"u"&&(t=o.ClipperOffset.def_arc_tolerance),this.m_destPolys=new o.Paths,this.m_srcPoly=new o.Path,this.m_destPoly=new o.Path,this.m_normals=new Array,this.m_delta=0,this.m_sinA=0,this.m_sin=0,this.m_cos=0,this.m_miterLim=0,this.m_StepsPerRad=0,this.m_lowest=new o.IntPoint,this.m_polyNodes=new o.PolyNode,this.MiterLimit=n,this.ArcTolerance=t,this.m_lowest.X=-1};o.ClipperOffset.two_pi=6.28318530717959;o.ClipperOffset.def_arc_tolerance=.25;o.ClipperOffset.prototype.Clear=function(){o.Clear(this.m_polyNodes.Childs()),this.m_lowest.X=-1};o.ClipperOffset.Round=o.Clipper.Round;o.ClipperOffset.prototype.AddPath=function(n,t,e){var r=n.length-1;if(!(r<0)){var i=new o.PolyNode;if(i.m_jointype=t,i.m_endtype=e,e==o.EndType.etClosedLine||e==o.EndType.etClosedPolygon)for(;r>0&&o.IntPoint.op_Equality(n[0],n[r]);)r--;i.m_polygon.push(n[0]);for(var u=0,c=0,v=1;v<=r;v++)o.IntPoint.op_Inequality(i.m_polygon[u],n[v])&&(u++,i.m_polygon.push(n[v]),(n[v].Y>i.m_polygon[c].Y||n[v].Y==i.m_polygon[c].Y&&n[v].X<i.m_polygon[c].X)&&(c=u));if(!(e==o.EndType.etClosedPolygon&&u<2||e!=o.EndType.etClosedPolygon&&u<0)&&(this.m_polyNodes.AddChild(i),e==o.EndType.etClosedPolygon))if(this.m_lowest.X<0)this.m_lowest=new o.IntPoint(0,c);else{var x=this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];(i.m_polygon[c].Y>x.Y||i.m_polygon[c].Y==x.Y&&i.m_polygon[c].X<x.X)&&(this.m_lowest=new o.IntPoint(this.m_polyNodes.ChildCount()-1,c))}}};o.ClipperOffset.prototype.AddPaths=function(n,t,e){for(var r=0,i=n.length;r<i;r++)this.AddPath(n[r],t,e)};o.ClipperOffset.prototype.FixOrientations=function(){if(this.m_lowest.X>=0&&!o.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))for(var n=0;n<this.m_polyNodes.ChildCount();n++){var t=this.m_polyNodes.Childs()[n];(t.m_endtype==o.EndType.etClosedPolygon||t.m_endtype==o.EndType.etClosedLine&&o.Clipper.Orientation(t.m_polygon))&&t.m_polygon.reverse()}else for(var n=0;n<this.m_polyNodes.ChildCount();n++){var t=this.m_polyNodes.Childs()[n];t.m_endtype==o.EndType.etClosedLine&&!o.Clipper.Orientation(t.m_polygon)&&t.m_polygon.reverse()}};o.ClipperOffset.GetUnitNormal=function(n,t){var e=t.X-n.X,r=t.Y-n.Y;if(e==0&&r==0)return new o.DoublePoint(0,0);var i=1/Math.sqrt(e*e+r*r);return e*=i,r*=i,new o.DoublePoint(r,-e)};o.ClipperOffset.prototype.DoOffset=function(n){if(this.m_destPolys=new Array,this.m_delta=n,o.ClipperBase.near_zero(n)){for(var t=0;t<this.m_polyNodes.ChildCount();t++){var e=this.m_polyNodes.Childs()[t];e.m_endtype==o.EndType.etClosedPolygon&&this.m_destPolys.push(e.m_polygon)}return}this.MiterLimit>2?this.m_miterLim=2/(this.MiterLimit*this.MiterLimit):this.m_miterLim=.5;var r;this.ArcTolerance<=0?r=o.ClipperOffset.def_arc_tolerance:this.ArcTolerance>Math.abs(n)*o.ClipperOffset.def_arc_tolerance?r=Math.abs(n)*o.ClipperOffset.def_arc_tolerance:r=this.ArcTolerance;var i=3.14159265358979/Math.acos(1-r/Math.abs(n));this.m_sin=Math.sin(o.ClipperOffset.two_pi/i),this.m_cos=Math.cos(o.ClipperOffset.two_pi/i),this.m_StepsPerRad=i/o.ClipperOffset.two_pi,n<0&&(this.m_sin=-this.m_sin);for(var t=0;t<this.m_polyNodes.ChildCount();t++){var e=this.m_polyNodes.Childs()[t];this.m_srcPoly=e.m_polygon;var u=this.m_srcPoly.length;if(!(u==0||n<=0&&(u<3||e.m_endtype!=o.EndType.etClosedPolygon))){if(this.m_destPoly=new Array,u==1){if(e.m_jointype==o.JoinType.jtRound)for(var c=1,v=0,x=1;x<=i;x++){this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[0].X+c*n),o.ClipperOffset.Round(this.m_srcPoly[0].Y+v*n)));var w=c;c=c*this.m_cos-this.m_sin*v,v=w*this.m_sin+v*this.m_cos}else for(var c=-1,v=-1,x=0;x<4;++x)this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[0].X+c*n),o.ClipperOffset.Round(this.m_srcPoly[0].Y+v*n))),c<0?c=1:v<0?v=1:c=-1;this.m_destPolys.push(this.m_destPoly);continue}this.m_normals.length=0;for(var x=0;x<u-1;x++)this.m_normals.push(o.ClipperOffset.GetUnitNormal(this.m_srcPoly[x],this.m_srcPoly[x+1]));if(e.m_endtype==o.EndType.etClosedLine||e.m_endtype==o.EndType.etClosedPolygon?this.m_normals.push(o.ClipperOffset.GetUnitNormal(this.m_srcPoly[u-1],this.m_srcPoly[0])):this.m_normals.push(new o.DoublePoint(this.m_normals[u-2])),e.m_endtype==o.EndType.etClosedPolygon){for(var F=u-1,x=0;x<u;x++)F=this.OffsetPoint(x,F,e.m_jointype);this.m_destPolys.push(this.m_destPoly)}else if(e.m_endtype==o.EndType.etClosedLine){for(var F=u-1,x=0;x<u;x++)F=this.OffsetPoint(x,F,e.m_jointype);this.m_destPolys.push(this.m_destPoly),this.m_destPoly=new Array;for(var B=this.m_normals[u-1],x=u-1;x>0;x--)this.m_normals[x]=new o.DoublePoint(-this.m_normals[x-1].X,-this.m_normals[x-1].Y);this.m_normals[0]=new o.DoublePoint(-B.X,-B.Y),F=0;for(var x=u-1;x>=0;x--)F=this.OffsetPoint(x,F,e.m_jointype);this.m_destPolys.push(this.m_destPoly)}else{for(var F=0,x=1;x<u-1;++x)F=this.OffsetPoint(x,F,e.m_jointype);var A;if(e.m_endtype==o.EndType.etOpenButt){var x=u-1;A=new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[x].X+this.m_normals[x].X*n),o.ClipperOffset.Round(this.m_srcPoly[x].Y+this.m_normals[x].Y*n)),this.m_destPoly.push(A),A=new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[x].X-this.m_normals[x].X*n),o.ClipperOffset.Round(this.m_srcPoly[x].Y-this.m_normals[x].Y*n)),this.m_destPoly.push(A)}else{var x=u-1;F=u-2,this.m_sinA=0,this.m_normals[x]=new o.DoublePoint(-this.m_normals[x].X,-this.m_normals[x].Y),e.m_endtype==o.EndType.etOpenSquare?this.DoSquare(x,F):this.DoRound(x,F)}for(var x=u-1;x>0;x--)this.m_normals[x]=new o.DoublePoint(-this.m_normals[x-1].X,-this.m_normals[x-1].Y);this.m_normals[0]=new o.DoublePoint(-this.m_normals[1].X,-this.m_normals[1].Y),F=u-1;for(var x=F-1;x>0;--x)F=this.OffsetPoint(x,F,e.m_jointype);e.m_endtype==o.EndType.etOpenButt?(A=new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[0].X-this.m_normals[0].X*n),o.ClipperOffset.Round(this.m_srcPoly[0].Y-this.m_normals[0].Y*n)),this.m_destPoly.push(A),A=new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[0].X+this.m_normals[0].X*n),o.ClipperOffset.Round(this.m_srcPoly[0].Y+this.m_normals[0].Y*n)),this.m_destPoly.push(A)):(F=1,this.m_sinA=0,e.m_endtype==o.EndType.etOpenSquare?this.DoSquare(0,1):this.DoRound(0,1)),this.m_destPolys.push(this.m_destPoly)}}}};o.ClipperOffset.prototype.Execute=function(){var n=arguments,t=n[0]instanceof o.PolyTree;if(t){var e=n[0],r=n[1];e.Clear(),this.FixOrientations(),this.DoOffset(r);var i=new o.Clipper(0);if(i.AddPaths(this.m_destPolys,o.PolyType.ptSubject,!0),r>0)i.Execute(o.ClipType.ctUnion,e,o.PolyFillType.pftPositive,o.PolyFillType.pftPositive);else{var u=o.Clipper.GetBounds(this.m_destPolys),c=new o.Path;if(c.push(new o.IntPoint(u.left-10,u.bottom+10)),c.push(new o.IntPoint(u.right+10,u.bottom+10)),c.push(new o.IntPoint(u.right+10,u.top-10)),c.push(new o.IntPoint(u.left-10,u.top-10)),i.AddPath(c,o.PolyType.ptSubject,!0),i.ReverseSolution=!0,i.Execute(o.ClipType.ctUnion,e,o.PolyFillType.pftNegative,o.PolyFillType.pftNegative),e.ChildCount()==1&&e.Childs()[0].ChildCount()>0){var v=e.Childs()[0];e.Childs()[0]=v.Childs()[0];for(var x=1;x<v.ChildCount();x++)e.AddChild(v.Childs()[x])}else e.Clear()}}else{var e=n[0],r=n[1];o.Clear(e),this.FixOrientations(),this.DoOffset(r);var i=new o.Clipper(0);if(i.AddPaths(this.m_destPolys,o.PolyType.ptSubject,!0),r>0)i.Execute(o.ClipType.ctUnion,e,o.PolyFillType.pftPositive,o.PolyFillType.pftPositive);else{var u=o.Clipper.GetBounds(this.m_destPolys),c=new o.Path;c.push(new o.IntPoint(u.left-10,u.bottom+10)),c.push(new o.IntPoint(u.right+10,u.bottom+10)),c.push(new o.IntPoint(u.right+10,u.top-10)),c.push(new o.IntPoint(u.left-10,u.top-10)),i.AddPath(c,o.PolyType.ptSubject,!0),i.ReverseSolution=!0,i.Execute(o.ClipType.ctUnion,e,o.PolyFillType.pftNegative,o.PolyFillType.pftNegative),e.length>0&&e.splice(0,1)}}};o.ClipperOffset.prototype.OffsetPoint=function(n,t,e){if(this.m_sinA=this.m_normals[t].X*this.m_normals[n].Y-this.m_normals[n].X*this.m_normals[t].Y,this.m_sinA<5e-5&&this.m_sinA>-5e-5)return t;if(this.m_sinA>1?this.m_sinA=1:this.m_sinA<-1&&(this.m_sinA=-1),this.m_sinA*this.m_delta<0)this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+this.m_normals[t].X*this.m_delta),o.ClipperOffset.Round(this.m_srcPoly[n].Y+this.m_normals[t].Y*this.m_delta))),this.m_destPoly.push(new o.IntPoint(this.m_srcPoly[n])),this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+this.m_normals[n].X*this.m_delta),o.ClipperOffset.Round(this.m_srcPoly[n].Y+this.m_normals[n].Y*this.m_delta)));else switch(e){case o.JoinType.jtMiter:{var r=1+(this.m_normals[n].X*this.m_normals[t].X+this.m_normals[n].Y*this.m_normals[t].Y);r>=this.m_miterLim?this.DoMiter(n,t,r):this.DoSquare(n,t);break}case o.JoinType.jtSquare:this.DoSquare(n,t);break;case o.JoinType.jtRound:this.DoRound(n,t);break}return t=n,t};o.ClipperOffset.prototype.DoSquare=function(n,t){var e=Math.tan(Math.atan2(this.m_sinA,this.m_normals[t].X*this.m_normals[n].X+this.m_normals[t].Y*this.m_normals[n].Y)/4);this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+this.m_delta*(this.m_normals[t].X-this.m_normals[t].Y*e)),o.ClipperOffset.Round(this.m_srcPoly[n].Y+this.m_delta*(this.m_normals[t].Y+this.m_normals[t].X*e)))),this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+this.m_delta*(this.m_normals[n].X+this.m_normals[n].Y*e)),o.ClipperOffset.Round(this.m_srcPoly[n].Y+this.m_delta*(this.m_normals[n].Y-this.m_normals[n].X*e))))};o.ClipperOffset.prototype.DoMiter=function(n,t,e){var r=this.m_delta/e;this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+(this.m_normals[t].X+this.m_normals[n].X)*r),o.ClipperOffset.Round(this.m_srcPoly[n].Y+(this.m_normals[t].Y+this.m_normals[n].Y)*r)))};o.ClipperOffset.prototype.DoRound=function(n,t){for(var e=Math.atan2(this.m_sinA,this.m_normals[t].X*this.m_normals[n].X+this.m_normals[t].Y*this.m_normals[n].Y),r=o.Cast_Int32(o.ClipperOffset.Round(this.m_StepsPerRad*Math.abs(e))),i=this.m_normals[t].X,u=this.m_normals[t].Y,c,v=0;v<r;++v)this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+i*this.m_delta),o.ClipperOffset.Round(this.m_srcPoly[n].Y+u*this.m_delta))),c=i,i=i*this.m_cos-this.m_sin*u,u=c*this.m_sin+u*this.m_cos;this.m_destPoly.push(new o.IntPoint(o.ClipperOffset.Round(this.m_srcPoly[n].X+this.m_normals[n].X*this.m_delta),o.ClipperOffset.Round(this.m_srcPoly[n].Y+this.m_normals[n].Y*this.m_delta)))};o.Error=function(n){try{throw new Error(n)}catch(t){alert(t.message)}};o.JS={};o.JS.AreaOfPolygon=function(n,t){return t||(t=1),o.Clipper.Area(n)/(t*t)};o.JS.AreaOfPolygons=function(n,t){t||(t=1);for(var e=0,r=0;r<n.length;r++)e+=o.Clipper.Area(n[r]);return e/(t*t)};o.JS.BoundsOfPath=function(n,t){return o.JS.BoundsOfPaths([n],t)};o.JS.BoundsOfPaths=function(n,t){t||(t=1);var e=o.Clipper.GetBounds(n);return e.left/=t,e.bottom/=t,e.right/=t,e.top/=t,e};o.JS.Clean=function(r,t){if(!(r instanceof Array))return[];var e=r[0]instanceof Array,r=o.JS.Clone(r);if(typeof t!="number"||t===null)return o.Error("Delta is not a number in Clean()."),r;if(r.length===0||r.length==1&&r[0].length===0||t<0)return r;e||(r=[r]);for(var i=r.length,u,c,v,x,w,F,B,A=[],N=0;N<i;N++)if(c=r[N],u=c.length,u!==0){if(u<3){v=c,A.push(v);continue}for(v=c,x=t*t,w=c[0],F=1,B=1;B<u;B++)(c[B].X-w.X)*(c[B].X-w.X)+(c[B].Y-w.Y)*(c[B].Y-w.Y)<=x||(v[F]=c[B],w=c[B],F++);w=c[F-1],(c[0].X-w.X)*(c[0].X-w.X)+(c[0].Y-w.Y)*(c[0].Y-w.Y)<=x&&F--,F<u&&v.splice(F,u-F),v.length&&A.push(v)}return!e&&A.length?A=A[0]:!e&&A.length===0?A=[]:e&&A.length===0&&(A=[[]]),A};o.JS.Clone=function(n){if(!(n instanceof Array))return[];if(n.length===0)return[];if(n.length==1&&n[0].length===0)return[[]];var t=n[0]instanceof Array;t||(n=[n]);var e=n.length,r,i,u,c,v=new Array(e);for(i=0;i<e;i++){for(r=n[i].length,c=new Array(r),u=0;u<r;u++)c[u]={X:n[i][u].X,Y:n[i][u].Y};v[i]=c}return t||(v=v[0]),v};o.JS.Lighten=function(n,t){if(!(n instanceof Array))return[];if(typeof t!="number"||t===null)return o.Error("Tolerance is not a number in Lighten()."),o.JS.Clone(n);if(n.length===0||n.length==1&&n[0].length===0||t<0)return o.JS.Clone(n);n[0]instanceof Array||(n=[n]);var e,r,i,u,c,v,x,w,F,B,A,N,S,U,$,tn,an,ln=n.length,Pn=t*t,hn=[];for(e=0;e<ln;e++)if(i=n[e],v=i.length,v!=0){for(u=0;u<1e6;u++){for(c=[],v=i.length,i[v-1].X!=i[0].X||i[v-1].Y!=i[0].Y?(N=1,i.push({X:i[0].X,Y:i[0].Y}),v=i.length):N=0,A=[],r=0;r<v-2;r++)x=i[r],F=i[r+1],w=i[r+2],tn=x.X,an=x.Y,S=w.X-tn,U=w.Y-an,(S!==0||U!==0)&&($=((F.X-tn)*S+(F.Y-an)*U)/(S*S+U*U),$>1?(tn=w.X,an=w.Y):$>0&&(tn+=S*$,an+=U*$)),S=F.X-tn,U=F.Y-an,B=S*S+U*U,B<=Pn&&(A[r+1]=1,r++);for(c.push({X:i[0].X,Y:i[0].Y}),r=1;r<v-1;r++)A[r]||c.push({X:i[r].X,Y:i[r].Y});if(c.push({X:i[v-1].X,Y:i[v-1].Y}),N&&i.pop(),A.length)i=c;else break}v=c.length,c[v-1].X==c[0].X&&c[v-1].Y==c[0].Y&&c.pop(),c.length>2&&hn.push(c)}return!n[0]instanceof Array&&(hn=hn[0]),typeof hn>"u"&&(hn=[[]]),hn};o.JS.PerimeterOfPath=function(n,t,e){if(typeof n>"u")return 0;var r=Math.sqrt,i=0,u,c,v=0,x=0,w=0,F=0,B=n.length;if(B<2)return 0;for(t&&(n[B]=n[0],B++);--B;)u=n[B],v=u.X,x=u.Y,c=n[B-1],w=c.X,F=c.Y,i+=r((v-w)*(v-w)+(x-F)*(x-F));return t&&n.pop(),i/e};o.JS.PerimeterOfPaths=function(n,t,e){e||(e=1);for(var r=0,i=0;i<n.length;i++)r+=o.JS.PerimeterOfPath(n[i],t,e);return r};o.JS.ScaleDownPath=function(n,t){var e,r;for(t||(t=1),e=n.length;e--;)r=n[e],r.X=r.X/t,r.Y=r.Y/t};o.JS.ScaleDownPaths=function(n,t){var e,r,i,u=Math.round;for(t||(t=1),e=n.length;e--;)for(r=n[e].length;r--;)i=n[e][r],i.X=i.X/t,i.Y=i.Y/t};o.JS.ScaleUpPath=function(n,t){var e,r,i=Math.round;for(t||(t=1),e=n.length;e--;)r=n[e],r.X=i(r.X*t),r.Y=i(r.Y*t)};o.JS.ScaleUpPaths=function(n,t){var e,r,i,u=Math.round;for(t||(t=1),e=n.length;e--;)for(r=n[e].length;r--;)i=n[e][r],i.X=u(i.X*t),i.Y=u(i.Y*t)};o.ExPolygons=function(){return[]};o.ExPolygon=function(){this.outer=null,this.holes=null};o.JS.AddOuterPolyNodeToExPolygons=function(n,t){var e=new o.ExPolygon;e.outer=n.Contour();var r=n.Childs(),i=r.length;e.holes=new Array(i);var u,c,v,x,w,F;for(v=0;v<i;v++)for(u=r[v],e.holes[v]=u.Contour(),x=0,w=u.Childs(),F=w.length;x<F;x++)c=w[x],o.JS.AddOuterPolyNodeToExPolygons(c,t);t.push(e)};o.JS.ExPolygonsToPaths=function(n){var t,e,r,i,u=new o.Paths;for(t=0,r=n.length;t<r;t++)for(u.push(n[t].outer),e=0,i=n[t].holes.length;e<i;e++)u.push(n[t].holes[e]);return u};o.JS.PolyTreeToExPolygons=function(n){var t=new o.ExPolygons,e,r,i,u;for(r=0,i=n.Childs(),u=i.length;r<u;r++)e=i[r],o.JS.AddOuterPolyNodeToExPolygons(e,t);return t};Yt.exports=o});var Ge=ot(Wn=>{"use strict";Object.defineProperty(Wn,"__esModule",{value:!0});function ne(n,t){return t===void 0&&(t=15),+parseFloat(Number(n).toPrecision(t))}function Hn(n){var t=n.toString().split(/[eE]/),e=(t[0].split(".")[1]||"").length-+(t[1]||0);return e>0?e:0}function It(n){if(n.toString().indexOf("e")===-1)return Number(n.toString().replace(".",""));var t=Hn(n);return t>0?ne(Number(n)*Math.pow(10,t)):Number(n)}function _e(n){je&&(n>Number.MAX_SAFE_INTEGER||n<Number.MIN_SAFE_INTEGER)&&console.warn(n+" is beyond boundary when transfer to integer, the results may not be accurate")}function te(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[0],i=t.slice(1);return i.reduce(function(u,c){return n(u,c)},r)}}var tt=te(function(n,t){var e=It(n),r=It(t),i=Hn(n)+Hn(t),u=e*r;return _e(u),u/Math.pow(10,i)}),ke=te(function(n,t){var e=Math.pow(10,Math.max(Hn(n),Hn(t)));return(tt(n,e)+tt(t,e))/e}),We=te(function(n,t){var e=Math.pow(10,Math.max(Hn(n),Hn(t)));return(tt(n,e)-tt(t,e))/e}),Pe=te(function(n,t){var e=It(n),r=It(t);return _e(e),_e(r),tt(e/r,ne(Math.pow(10,Hn(t)-Hn(n))))});function Ue(n,t){var e=Math.pow(10,t),r=Pe(Math.round(Math.abs(tt(n,e))),e);return n<0&&r!==0&&(r=tt(r,-1)),r}var je=!0;function He(n){n===void 0&&(n=!0),je=n}var Oo={strip:ne,plus:ke,minus:We,times:tt,divide:Pe,round:Ue,digitLength:Hn,float2Fixed:It,enableBoundaryChecking:He};Wn.strip=ne;Wn.plus=ke;Wn.minus=We;Wn.times=tt;Wn.divide=Pe;Wn.round=Ue;Wn.digitLength=Hn;Wn.float2Fixed=It;Wn.enableBoundaryChecking=He;Wn.default=Oo});var ze=ot(($o,qe)=>{qe.exports={resolve:n=>n,dirname:n=>n,normalize:n=>n,join:(...n)=>n.join("/"),basename:n=>n,extname:n=>""}});var Ze=ot((ns,Je)=>{Je.exports={}});var Qe=ot((ts,Ke)=>{Ke.exports={getRandomValues:n=>globalThis.crypto.getRandomValues(n)}});function $e(n){for(var t=-1,e=n.length,r,i=n[e-1],u=0;++t<e;)r=i,i=n[t],u+=r[1]*i[0]-r[0]*i[1];return u/2}var nr=ct(()=>{});function tr(n){for(var t=-1,e=n.length,r=0,i=0,u,c=n[e-1],v,x=0;++t<e;)u=c,c=n[t],x+=v=u[0]*c[1]-c[0]*u[1],r+=(u[0]+c[0])*v,i+=(u[1]+c[1])*v;return x*=3,[r/x,i/x]}var er=ct(()=>{});function rr(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}var or=ct(()=>{});function Ao(n,t){return n[0]-t[0]||n[1]-t[1]}function sr(n){let t=n.length,e=[0,1],r=2,i;for(i=2;i<t;++i){for(;r>1&&rr(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function ar(n){if((e=n.length)<3)return null;var t,e,r=new Array(e),i=new Array(e);for(t=0;t<e;++t)r[t]=[+n[t][0],+n[t][1],t];for(r.sort(Ao),t=0;t<e;++t)i[t]=[r[t][0],-r[t][1]];var u=sr(r),c=sr(i),v=c[0]===u[0],x=c[c.length-1]===u[u.length-1],w=[];for(t=u.length-1;t>=0;--t)w.push(n[r[u[t]][2]]);for(t=+v;t<c.length-x;++t)w.push(n[r[c[t]][2]]);return w}var lr=ct(()=>{or()});function ur(n,t){for(var e=n.length,r=n[e-1],i=t[0],u=t[1],c=r[0],v=r[1],x,w,F=!1,B=0;B<e;++B)r=n[B],x=r[0],w=r[1],w>u!=v>u&&i<(c-x)*(u-w)/(v-w)+x&&(F=!F),c=x,v=w;return F}var fr=ct(()=>{});function hr(n){for(var t=-1,e=n.length,r=n[e-1],i,u,c=r[0],v=r[1],x=0;++t<e;)i=c,u=v,r=n[t],c=r[0],v=r[1],i-=c,u-=v,x+=Math.hypot(i,u);return x}var pr=ct(()=>{});var cr={};Xr(cr,{polygonArea:()=>$e,polygonCentroid:()=>tr,polygonContains:()=>ur,polygonHull:()=>ar,polygonLength:()=>hr});var dr=ct(()=>{nr();er();lr();fr();pr()});var Er=ot(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});var ge=Oe();Ae();var Lo=Re(),ye=Ge(),ds=ze(),ms=Ze(),vs=Qe(),So=(dr(),Br(cr));function Xo(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}function No(n){if(n&&n.__esModule)return n;var t=Object.create(null);return n&&Object.keys(n).forEach(function(e){if(e!=="default"){var r=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:function(){return n[e]}})}}),t.default=n,Object.freeze(t)}var xe=Xo(Lo),mr=No(So);function gt(){gt=function(){return n};var n={},t=Object.prototype,e=t.hasOwnProperty,r=typeof Symbol=="function"?Symbol:{},i=r.iterator||"@@iterator",u=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function v(R,V,nn){return Object.defineProperty(R,V,{value:nn,enumerable:!0,configurable:!0,writable:!0}),R[V]}try{v({},"")}catch{v=function(V,nn,un){return V[nn]=un}}function x(R,V,nn,un){var J=V&&V.prototype instanceof B?V:B,xn=Object.create(J.prototype),Cn=new Gn(un||[]);return xn._invoke=(function(An,Nn,mn){var Fn="suspendedStart";return function(Sn,ut){if(Fn==="executing")throw new Error("Generator is already running");if(Fn==="completed"){if(Sn==="throw")throw ut;return bn()}for(mn.method=Sn,mn.arg=ut;;){var ft=mn.delegate;if(ft){var ht=Pn(ft,mn);if(ht){if(ht===F)continue;return ht}}if(mn.method==="next")mn.sent=mn._sent=mn.arg;else if(mn.method==="throw"){if(Fn==="suspendedStart")throw Fn="completed",mn.arg;mn.dispatchException(mn.arg)}else mn.method==="return"&&mn.abrupt("return",mn.arg);Fn="executing";var Zn=w(An,Nn,mn);if(Zn.type==="normal"){if(Fn=mn.done?"completed":"suspendedYield",Zn.arg===F)continue;return{value:Zn.arg,done:mn.done}}Zn.type==="throw"&&(Fn="completed",mn.method="throw",mn.arg=Zn.arg)}}})(R,nn,Cn),xn}function w(R,V,nn){try{return{type:"normal",arg:R.call(V,nn)}}catch(un){return{type:"throw",arg:un}}}n.wrap=x;var F={};function B(){}function A(){}function N(){}var S={};v(S,i,function(){return this});var U=Object.getPrototypeOf,$=U&&U(U(Yn([])));$&&$!==t&&e.call($,i)&&(S=$);var tn=N.prototype=B.prototype=Object.create(S);function an(R){["next","throw","return"].forEach(function(V){v(R,V,function(nn){return this._invoke(V,nn)})})}function ln(R,V){function nn(J,xn,Cn,An){var Nn=w(R[J],R,xn);if(Nn.type!=="throw"){var mn=Nn.arg,Fn=mn.value;return Fn&&typeof Fn=="object"&&e.call(Fn,"__await")?V.resolve(Fn.__await).then(function(Sn){nn("next",Sn,Cn,An)},function(Sn){nn("throw",Sn,Cn,An)}):V.resolve(Fn).then(function(Sn){mn.value=Sn,Cn(mn)},function(Sn){return nn("throw",Sn,Cn,An)})}An(Nn.arg)}var un;this._invoke=function(J,xn){function Cn(){return new V(function(An,Nn){nn(J,xn,An,Nn)})}return un=un?un.then(Cn,Cn):Cn()}}function Pn(R,V){var nn=R.iterator[V.method];if(nn===void 0){if(V.delegate=null,V.method==="throw"){if(R.iterator.return&&(V.method="return",V.arg=void 0,Pn(R,V),V.method==="throw"))return F;V.method="throw",V.arg=new TypeError("The iterator does not provide a 'throw' method")}return F}var un=w(nn,R.iterator,V.arg);if(un.type==="throw")return V.method="throw",V.arg=un.arg,V.delegate=null,F;var J=un.arg;return J?J.done?(V[R.resultName]=J.value,V.next=R.nextLoc,V.method!=="return"&&(V.method="next",V.arg=void 0),V.delegate=null,F):J:(V.method="throw",V.arg=new TypeError("iterator result is not an object"),V.delegate=null,F)}function hn(R){var V={tryLoc:R[0]};1 in R&&(V.catchLoc=R[1]),2 in R&&(V.finallyLoc=R[2],V.afterLoc=R[3]),this.tryEntries.push(V)}function sn(R){var V=R.completion||{};V.type="normal",delete V.arg,R.completion=V}function Gn(R){this.tryEntries=[{tryLoc:"root"}],R.forEach(hn,this),this.reset(!0)}function Yn(R){if(R){var V=R[i];if(V)return V.call(R);if(typeof R.next=="function")return R;if(!isNaN(R.length)){var nn=-1,un=function J(){for(;++nn<R.length;)if(e.call(R,nn))return J.value=R[nn],J.done=!1,J;return J.value=void 0,J.done=!0,J};return un.next=un}}return{next:bn}}function bn(){return{value:void 0,done:!0}}return A.prototype=N,v(tn,"constructor",N),v(N,"constructor",A),A.displayName=v(N,c,"GeneratorFunction"),n.isGeneratorFunction=function(R){var V=typeof R=="function"&&R.constructor;return!!V&&(V===A||(V.displayName||V.name)==="GeneratorFunction")},n.mark=function(R){return Object.setPrototypeOf?Object.setPrototypeOf(R,N):(R.__proto__=N,v(R,c,"GeneratorFunction")),R.prototype=Object.create(tn),R},n.awrap=function(R){return{__await:R}},an(ln.prototype),v(ln.prototype,u,function(){return this}),n.AsyncIterator=ln,n.async=function(R,V,nn,un,J){J===void 0&&(J=Promise);var xn=new ln(x(R,V,nn,un),J);return n.isGeneratorFunction(V)?xn:xn.next().then(function(Cn){return Cn.done?Cn.value:xn.next()})},an(tn),v(tn,c,"Generator"),v(tn,i,function(){return this}),v(tn,"toString",function(){return"[object Generator]"}),n.keys=function(R){var V=[];for(var nn in R)V.push(nn);return V.reverse(),function un(){for(;V.length;){var J=V.pop();if(J in R)return un.value=J,un.done=!1,un}return un.done=!0,un}},n.values=Yn,Gn.prototype={constructor:Gn,reset:function(R){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(sn),!R)for(var V in this)V.charAt(0)==="t"&&e.call(this,V)&&!isNaN(+V.slice(1))&&(this[V]=void 0)},stop:function(){this.done=!0;var R=this.tryEntries[0].completion;if(R.type==="throw")throw R.arg;return this.rval},dispatchException:function(R){if(this.done)throw R;var V=this;function nn(Nn,mn){return xn.type="throw",xn.arg=R,V.next=Nn,mn&&(V.method="next",V.arg=void 0),!!mn}for(var un=this.tryEntries.length-1;un>=0;--un){var J=this.tryEntries[un],xn=J.completion;if(J.tryLoc==="root")return nn("end");if(J.tryLoc<=this.prev){var Cn=e.call(J,"catchLoc"),An=e.call(J,"finallyLoc");if(Cn&&An){if(this.prev<J.catchLoc)return nn(J.catchLoc,!0);if(this.prev<J.finallyLoc)return nn(J.finallyLoc)}else if(Cn){if(this.prev<J.catchLoc)return nn(J.catchLoc,!0)}else{if(!An)throw new Error("try statement without catch or finally");if(this.prev<J.finallyLoc)return nn(J.finallyLoc)}}}},abrupt:function(R,V){for(var nn=this.tryEntries.length-1;nn>=0;--nn){var un=this.tryEntries[nn];if(un.tryLoc<=this.prev&&e.call(un,"finallyLoc")&&this.prev<un.finallyLoc){var J=un;break}}J&&(R==="break"||R==="continue")&&J.tryLoc<=V&&V<=J.finallyLoc&&(J=null);var xn=J?J.completion:{};return xn.type=R,xn.arg=V,J?(this.method="next",this.next=J.finallyLoc,F):this.complete(xn)},complete:function(R,V){if(R.type==="throw")throw R.arg;return R.type==="break"||R.type==="continue"?this.next=R.arg:R.type==="return"?(this.rval=this.arg=R.arg,this.method="return",this.next="end"):R.type==="normal"&&V&&(this.next=V),F},finish:function(R){for(var V=this.tryEntries.length-1;V>=0;--V){var nn=this.tryEntries[V];if(nn.finallyLoc===R)return this.complete(nn.completion,nn.afterLoc),sn(nn),F}},catch:function(R){for(var V=this.tryEntries.length-1;V>=0;--V){var nn=this.tryEntries[V];if(nn.tryLoc===R){var un=nn.completion;if(un.type==="throw"){var J=un.arg;sn(nn)}return J}}throw new Error("illegal catch attempt")},delegateYield:function(R,V,nn){return this.delegate={iterator:Yn(R),resultName:V,nextLoc:nn},this.method==="next"&&(this.arg=void 0),F}},n}function vr(n,t,e,r,i,u,c){try{var v=n[u](c),x=v.value}catch(w){e(w);return}v.done?t(x):Promise.resolve(x).then(r,i)}function Ie(n){return function(){var t=this,e=arguments;return new Promise(function(r,i){var u=n.apply(t,e);function c(x){vr(u,r,i,c,v,"next",x)}function v(x){vr(u,r,i,c,v,"throw",x)}c(void 0)})}}function xr(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Tr(n,t,e){return t&&_r(n.prototype,t),e&&_r(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Un(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Te(n){return Bo(n)||Do(n)||Mo(n)||Yo()}function Bo(n){if(Array.isArray(n))return be(n)}function Do(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mo(n,t){if(n){if(typeof n=="string")return be(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return be(n,t)}}function be(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function Yo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vo(n,t){return t={exports:{}},n(t,t.exports),t.exports}var on=Vo(function(n,t){if(typeof window<"u"&&window.cv){n.exports=window.cv;return}throw new Error("opencv global missing: load lib/opencv.js before paddle-ocr.umd.js")});function Pr(n){return n.toString().split(",").map(function(t){return+t})}function gr(n){return n>0?Math.floor(n):Math.ceil(n)}function lt(n,t,e){return n<t?t:n>e?e:n}var Ro=(function(){function n(t,e){var r=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.3,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.6,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.5;xr(this,n),Un(this,"thresh",void 0),Un(this,"box_thresh",void 0),Un(this,"max_candidates",void 0),Un(this,"unclip_ratio",void 0),Un(this,"min_size",void 0),Un(this,"pred",void 0),Un(this,"segmentation",void 0),Un(this,"width",void 0),Un(this,"height",void 0),ye.enableBoundaryChecking(!1),this.thresh=i||.3,this.box_thresh=u||.6,this.max_candidates=1e3,this.unclip_ratio=c||1.5,this.min_size=3,this.width=e[0],this.height=e[1],this.pred=t,this.segmentation=[],this.pred.forEach(function(v){r.segmentation.push(v>r.thresh?255:0)})}return Tr(n,[{key:"outputBox",value:function(){var e=this,r=new on.matFromArray(this.width,this.height,on.CV_8UC1,this.segmentation),i=new on.MatVector,u=new on.Mat;on.findContours(r,i,u,on.RETR_LIST,on.CHAIN_APPROX_SIMPLE);for(var c=Math.min(i.size(),this.max_candidates),v=[],x=[],w=0;w<c;w++){var F=i.get(w),B=this.get_mini_boxes(F),A=B.points,N=B.side;if(!(N<this.min_size)){var S=this.box_score_fast(this.pred,A);if(!(this.box_thresh>S)){var U=this.unclip(A),$=new on.matFromArray(U.length/2,1,on.CV_32SC2,U),tn=this.get_mini_boxes($);U=tn.points,N=tn.side,!(N<this.min_size+2)&&(U.forEach(function(an){an[0]=lt(Math.round(an[0]),0,e.width),an[1]=lt(Math.round(an[1]),0,e.height)}),v.push(U),x.push(S),$.delete())}}}return r.delete(),i.delete(),u.delete(),{boxes:v,scores:x}}},{key:"get_mini_boxes",value:function(e){var r=on.minAreaRect(e),i=[],u=new on.Mat;on.boxPoints(r,u);for(var c=0;c<u.data32F.length;c+=2){var v=[u.data32F[c],u.data32F[c+1]];i.push(v)}function x(U,$){return U[0]-$[0]}i.sort(x);var w,F,B,A;i[1][1]>i[0][1]?(w=0,A=1):(w=1,A=0),i[3][1]>i[2][1]?(F=2,B=3):(F=3,B=2);var N=[i[w],i[F],i[B],i[A]],S=Math.min(r.size.height,r.size.width);return u.delete(),{points:N,side:S}}},{key:"box_score_fast",value:function(e,r){var i=this.height,u=this.width,c=JSON.parse(JSON.stringify(r)),v=[],x=[];c.forEach(function(sn){v.push(sn[0]),x.push(sn[1])});var w=lt(Math.floor(Math.min.apply(Math,v)),0,u-1),F=lt(Math.ceil(Math.max.apply(Math,v)),0,u-1),B=lt(Math.floor(Math.min.apply(Math,x)),0,i-1),A=lt(Math.ceil(Math.max.apply(Math,x)),0,i-1),N=new on.Mat.zeros(A-B+1,F-w+1,on.CV_8UC1);c.forEach(function(sn){sn[0]=Math.max(sn[0]-w,0),sn[1]=Math.max(sn[1]-B,0)});var S=4,U=new Uint8Array(c.flat()),$=on.matFromArray(S,1,on.CV_32SC2,U),tn=new on.MatVector;tn.push_back($);var an=new on.Scalar(255);on.fillPoly(N,tn,an,1);for(var ln=[],Pn=B;Pn<A+1;Pn++)ln.push.apply(ln,Te(e.slice(this.width*Pn+w,this.height*Pn+F+1)));var hn=this.mean(ln,N.data);return N.delete(),$.delete(),tn.delete(),hn}},{key:"unclip",value:function(e){var r,i=this.unclip_ratio,u=Math.abs(mr.polygonArea(e)),c=mr.polygonLength(e),v=u*i/c,x=[];e.forEach(function(A){var N={X:0,Y:0};N.X=A[0],N.Y=A[1],x.push(N)});var w=new xe.default.ClipperOffset;w.AddPath(x,xe.default.JoinType.jtRound,xe.default.EndType.etClosedPolygon);var F=[];w.Execute(F,v);var B=[];return F[0]&&F[0].forEach(function(A){B.push([A.X,A.Y])}),B=(r=[]).concat.apply(r,Te(B)),B}},{key:"mean",value:function(e,r){for(var i=0,u=0,c=0;c<e.length;c++)r[c]&&(i=ye.plus(i,e[c]),u++);return ye.divide(i,u)}}]),n})(),ko=`'
\u7597
\u7EDA
\u8BDA
\u5A07
\u6E9C
\u9898
\u8D3F
\u8005
\u5ED6
\u66F4
\u7EB3
\u52A0
\u5949
\u516C
\u4E00
\u5C31
\u6C74
\u8BA1
\u4E0E
\u8DEF
\u623F
\u539F
\u5987
2
0
8
-
7
\u5176
>
:
]
,
\uFF0C
\u9A91
\u5208
\u5168
\u6D88
\u660F
\u5088
\u5B89
\u4E45
\u949F
\u55C5
\u4E0D
\u5F71
\u5904
\u9A7D
\u873F
\u8D44
\u5173
\u6924
\u5730
\u7638
\u4E13
\u95EE
\u5FD6
\u7968
\u5AC9
\u708E
\u97F5
\u8981
\u6708
\u7530
\u8282
\u9642
\u9119
\u634C
\u5907
\u62F3
\u4F3A
\u773C
\u7F51
\u76CE
\u5927
\u508D
\u5FC3
\u4E1C
\u6109
\u6C47
\u8E7F
\u79D1
\u6BCF
\u4E1A
\u91CC
\u822A
\u664F
\u5B57
\u5E73
\u5F55
\u5148
1
3
\u5F64
\u9CB6
\u4EA7
\u7A0D
\u7763
\u8174
\u6709
\u8C61
\u5CB3
\u6CE8
\u7ECD
\u5728
\u6CFA
\u6587
\u5B9A
\u6838
\u540D
\u6C34
\u8FC7
\u7406
\u8BA9
\u5077
\u7387
\u7B49
\u8FD9
\u53D1
\u201D
\u4E3A
\u542B
\u80A5
\u9149
\u76F8
\u9131
\u4E03
\u7F16
\u7325
\u951B
\u65E5
\u9540
\u8482
\u63B0
\u5012
\u8F86
\u683E
\u6817
\u7EFC
\u6DA9
\u5DDE
\u96CC
\u6ED1
\u9980
\u4E86
\u673A
\u5757
\u53F8
\u5BB0
\u7519
\u5174
\u77FD
\u629A
\u4FDD
\u7528
\u6CA7
\u79E9
\u5982
\u6536
\u606F
\u6EE5
\u9875
\u7591
\u57E0
!
\uFF01
\u59E5
\u5F02
\u6A79
\u9487
\u5411
\u4E0B
\u8DC4
\u7684
\u6934
\u6CAB
\u56FD
\u7EE5
\u7360
\u62A5
\u5F00
\u6C11
\u8707
\u4F55
\u5206
\u51C7
\u957F
\u8BA5
\u85CF
\u638F
\u65BD
\u7FBD
\u4E2D
\u8BB2
\u6D3E
\u561F
\u4EBA
\u63D0
\u6D7C
\u95F4
\u4E16
\u800C
\u53E4
\u591A
\u502A
\u5507
\u996F
\u63A7
\u5E9A
\u9996
\u8D5B
\u8713
\u5473
\u65AD
\u5236
\u89C9
\u6280
\u66FF
\u8270
\u6EA2
\u6F6E
\u5915
\u94BA
\u5916
\u6458
\u678B
\u52A8
\u53CC
\u5355
\u556E
\u6237
\u6787
\u786E
\u9526
\u66DC
\u675C
\u6216
\u80FD
\u6548
\u971C
\u76D2
\u7136
\u4F97
\u7535
\u6641
\u653E
\u6B65
\u9E43
\u65B0
\u6756
\u8702
\u5412
\u6FC2
\u77AC
\u8BC4
\u603B
\u968D
\u5BF9
\u72EC
\u5408
\u4E5F
\u662F
\u5E9C
\u9752
\u5929
\u8BF2
\u5899
\u7EC4
\u6EF4
\u7EA7
\u9080
\u5E18
\u793A
\u5DF2
\u65F6
\u9AB8
\u4EC4
\u6CC5
\u548C
\u9068
\u5E97
\u96C7
\u75AB
\u6301
\u5DCD
\u8E2E
\u5883
\u53EA
\u4EA8
\u76EE
\u9274
\u5D24
\u95F2
\u4F53
\u6CC4
\u6742
\u4F5C
\u822C
\u8F70
\u5316
\u89E3
\u8FC2
\u8BFF
\u86ED
\u7480
\u817E
\u544A
\u7248
\u670D
\u7701
\u5E08
\u5C0F
\u89C4
\u7A0B
\u7EBF
\u6D77
\u529E
\u5F15
\u4E8C
\u6867
\u724C
\u783A
\u6D04
\u88F4
\u4FEE
\u56FE
\u75EB
\u80E1
\u8BB8
\u728A
\u4E8B
\u90DB
\u57FA
\u67F4
\u547C
\u98DF
\u7814
\u5976
\u5F8B
\u86CB
\u56E0
\u8446
\u5BDF
\u620F
\u8912
\u6212
\u518D
\u674E
\u9A81
\u5DE5
\u8C82
\u6CB9
\u9E45
\u7AE0
\u5544
\u4F11
\u573A
\u7ED9
\u7761
\u7EB7
\u8C46
\u5668
\u634E
\u8BF4
\u654F
\u5B66
\u4F1A
\u6D52
\u8BBE
\u8BCA
\u683C
\u5ED3
\u67E5
\u6765
\u9713
\u5BA4
\u6E86
\uFFE0
\u8BE1
\u5BE5
\u7115
\u821C
\u67D2
\u72D0
\u56DE
\u621F
\u783E
\u5384
\u5B9E
\u7FE9
\u5C3F
\u4E94
\u5165
\u5F84
\u60ED
\u55B9
\u80A1
\u5B87
\u7BDD
|
;
\u7F8E
\u671F
\u4E91
\u4E5D
\u797A
\u626E
\u9760
\u951D
\u69CC
\u7CFB
\u4F01
\u9170
\u960A
\u6682
\u8695
\u5FFB
\u8C41
\u672C
\u7FB9
\u6267
\u6761
\u94A6
H
\u7352
\u9650
\u8FDB
\u5B63
\u6966
\u4E8E
\u8298
\u7396
\u94CB
\u832F
\u672A
\u7B54
\u7C98
\u62EC
\u6837
\u7CBE
\u6B20
\u77E2
\u7525
\u5E37
\u5D69
\u6263
\u4EE4
\u4ED4
\u98CE
\u7688
\u884C
\u652F
\u90E8
\u84C9
\u522E
\u7AD9
\u8721
\u6551
\u948A
\u6C57
\u677E
\u5ACC
\u6210
\u53EF
.
\u9E64
\u9662
\u4ECE
\u4EA4
\u653F
\u6015
\u6D3B
\u8C03
\u7403
\u5C40
\u9A8C
\u9ACC
\u7B2C
\u97EB
\u8C17
\u4E32
\u5230
\u5706
\u5E74
\u7C73
/
*
\u53CB
\u5FFF
\u68C0
\u533A
\u770B
\u81EA
\u6562
\u5203
\u4E2A
\u5179
\u5F04
\u6D41
\u7559
\u540C
\u6CA1
\u9F7F
\u661F
\u8046
\u8F7C
\u6E56
\u4EC0
\u4E09
\u5EFA
\u86D4
\u513F
\u690B
\u6C55
\u9707
\u98A7
\u9CA4
\u8DDF
\u529B
\u60C5
\u74BA
\u94E8
\u966A
\u52A1
\u6307
\u65CF
\u8BAD
\u6EE6
\u9123
\u6FEE
\u6252
\u5546
\u7BB1
\u5341
\u53EC
\u6177
\u8F97
\u6240
\u839E
\u7BA1
\u62A4
\u81ED
\u6A2A
\u7852
\u55D3
\u63A5
\u4FA6
\u516D
\u9732
\u515A
\u998B
\u9A7E
\u5256
\u9AD8
\u4FAC
\u59AA
\u5E42
\u7317
\u7EFA
\u9A90
\u592E
\u9150
\u5B5D
\u7B5D
\u8BFE
\u5F87
\u7F30
\u95E8
\u7537
\u897F
\u9879
\u53E5
\u8C19
\u7792
\u79C3
\u7BC7
\u6559
\u78B2
\u7F5A
\u58F0
\u5450
\u666F
\u524D
\u5BCC
\u5634
\u9CCC
\u7A00
\u514D
\u670B
\u556C
\u7750
\u53BB
\u8D48
\u9C7C
\u4F4F
\u80A9
\u6115
\u901F
\u65C1
\u6CE2
\u5385
\u5065
\u833C
\u53A5
\u9C9F
\u8C05
\u6295
\u6538
\u7094
\u6570
\u65B9
\u51FB
\u544B
\u8C08
\u7EE9
\u522B
\u612B
\u50DA
\u8EAC
\u9E67
\u80EA
\u70B3
\u62DB
\u5587
\u81A8
\u6CF5
\u8E66
\u6BDB
\u7ED3
5
4
\u8C31
\u8BC6
\u9655
\u7CBD
\u5A5A
\u62DF
\u6784
\u4E14
\u641C
\u4EFB
\u6F58
\u6BD4
\u90E2
\u59A8
\u91AA
\u9640
\u6854
\u7898
\u624E
\u9009
\u54C8
\u9AB7
\u6977
\u4EBF
\u660E
\u7F06
\u812F
\u76D1
\u776B
\u903B
\u5A75
\u5171
\u8D74
\u6DDD
\u51E1
\u60E6
\u53CA
\u8FBE
\u63D6
\u8C29
\u6FB9
\u51CF
\u7130
\u86F9
\u756A
\u7941
\u67CF
\u5458
\u7984
\u6021
\u5CE4
\u9F99
\u767D
\u53FD
\u751F
\u95EF
\u8D77
\u7EC6
\u88C5
\u8C15
\u7ADF
\u805A
\u9499
\u4E0A
\u5BFC
\u6E0A
\u6309
\u827E
\u8F98
\u6321
\u8012
\u76F9
\u996A
\u81C0
\u8BB0
\u90AE
\u8559
\u53D7
\u5404
\u533B
\u6402
\u666E
\u6EC7
\u6717
\u8338
\u5E26
\u7FFB
\u915A
(
\u5149
\u5824
\u589F
\u8537
\u4E07
\u5E7B
\u3013
\u7459
\u8F88
\u6627
\u76CF
\u4E98
\u86C0
\u5409
\u94F0
\u8BF7
\u5B50
\u5047
\u95FB
\u7A0E
\u4E95
\u8BE9
\u54E8
\u5AC2
\u597D
\u9762
\u7410
\u6821
\u998A
\u9B23
\u7F02
\u8425
\u8BBF
\u7096
\u5360
\u519C
\u7F00
\u5426
\u7ECF
\u949A
\u68F5
\u8D9F
\u5F20
\u4E9F
\u540F
\u8336
\u8C28
\u637B
\u8BBA
\u8FF8
\u5802
\u7389
\u4FE1
\u5427
\u77A0
\u4E61
\u59EC
\u5BFA
\u54AC
\u6E8F
\u82C4
\u76BF
\u610F
\u8D49
\u5B9D
\u5C14
\u94B0
\u827A
\u7279
\u5533
\u8E09
\u90FD
\u8363
\u501A
\u767B
\u8350
\u4E27
\u5947
\u6DB5
\u6279
\u70AD
\u8FD1
\u7B26
\u50A9
\u611F
\u9053
\u7740
\u83CA
\u8679
\u4EF2
\u4F17
\u61C8
\u6FEF
\u989E
\u773A
\u5357
\u91CA
\u5317
\u7F1D
\u6807
\u65E2
\u8317
\u6574
\u64BC
\u8FE4
\u8D32
\u630E
\u8031
\u62D2
\u67D0
\u598D
\u536B
\u54C7
\u82F1
\u77F6
\u85E9
\u6CBB
\u4ED6
\u5143
\u9886
\u819C
\u906E
\u7A57
\u86FE
\u98DE
\u8352
\u68FA
\u52AB
\u4E48
\u5E02
\u706B
\u6E29
\u62C8
\u68DA
\u6D3C
\u8F6C
\u679C
\u5955
\u5378
\u8FEA
\u4F38
\u6CF3
\u6597
\u90A1
\u4F84
\u6DA8
\u5C6F
\u840B
\u80ED
\u6C21
\u5D2E
\u679E
\u60E7
\u5192
\u5F69
\u659C
\u624B
\u8C5A
\u968F
\u65ED
\u6DD1
\u599E
\u5F62
\u83CC
\u5432
\u6CB1
\u4E89
\u9A6F
\u6B79
\u631F
\u5146
\u67F1
\u4F20
\u81F3
\u5305
\u5185
\u54CD
\u4E34
\u7EA2
\u529F
\u5F29
\u8861
\u5BC2
\u7981
\u8001
\u68CD
\u8006
\u6E0D
\u7EC7
\u5BB3
\u6C35
\u6E11
\u5E03
\u8F7D
\u9765
\u55EC
\u867D
\u82F9
\u54A8
\u5A04
\u5E93
\u96C9
\u699C
\u5E1C
\u5632
\u5957
\u745A
\u4EB2
\u7C38
\u6B27
\u8FB9
6
\u817F
\u65EE
\u629B
\u5439
\u77B3
\u5F97
\u9553
\u6897
\u53A8
\u7EE7
\u6F3E
\u6123
\u61A8
\u58EB
\u7B56
\u7A91
\u6291
\u8EAF
\u895F
\u810F
\u53C2
\u8D38
\u8A00
\u5E72
\u7EF8
\u9CC4
\u7A77
\u85DC
\u97F3
\u6298
\u8BE6
)
\u4E3E
\u608D
\u7538
\u764C
\u9ECE
\u8C34
\u6B7B
\u7F69
\u8FC1
\u5BD2
\u9A77
\u8896
\u5A92
\u848B
\u6398
\u6A21
\u7EA0
\u6063
\u89C2
\u7956
\u86C6
\u788D
\u4F4D
\u7A3F
\u4E3B
\u6FA7
\u8DCC
\u7B4F
\u4EAC
\u950F
\u5E1D
\u8D34
\u8BC1
\u7CE0
\u624D
\u9EC4
\u9CB8
\u7565
\u70AF
\u9971
\u56DB
\u51FA
\u56ED
\u7280
\u7267
\u5BB9
\u6C49
\u6746
\u6D48
\u6C70
\u7477
\u9020
\u866B
\u7629
\u602A
\u9A74
\u6D4E
\u5E94
\u82B1
\u6CA3
\u8C14
\u5919
\u65C5
\u4EF7
\u77FF
\u4EE5
\u8003
s
u
\u5466
\u6652
\u5DE1
\u8305
\u51C6
\u809F
\u74F4
\u8A79
\u4EDF
\u8902
\u8BD1
\u684C
\u6DF7
\u5B81
\u6026
\u90D1
\u62BF
\u4E9B
\u4F59
\u9102
\u9974
\u6512
\u73D1
\u7FA4
\u9616
\u5C94
\u7428
\u85D3
\u9884
\u73AF
\u6D2E
\u5C8C
\u5B80
\u6772
\u7035
\u6700
\u5E38
\u56E1
\u5468
\u8E0A
\u5973
\u9F13
\u88AD
\u5589
\u7B80
\u8303
\u85AF
\u9050
\u758F
\u7CB1
\u9EDC
\u79A7
\u6CD5
\u7B94
\u65A4
\u9065
\u6C5D
\u5965
\u76F4
\u8D1E
\u6491
\u7F6E
\u7EF1
\u96C6
\u5979
\u9985
\u9017
\u94A7
\u6A71
\u9B49
[
\u6059
\u8E81
\u5524
9
\u65FA
\u8198
\u5F85
\u813E
\u60EB
\u8D2D
\u5417
\u4F9D
\u76F2
\u5EA6
\u763F
\u8816
\u4FFE
\u4E4B
\u9557
\u62C7
\u9CB5
\u539D
\u7C27
\u7EED
\u6B3E
\u5C55
\u5543
\u8868
\u5254
\u54C1
\u94BB
\u816D
\u635F
\u6E05
\u9536
\u7EDF
\u6D8C
\u5BF8
\u6EE8
\u8D2A
\u94FE
\u5420
\u5188
\u4F0E
\u8FE5
\u548F
\u5401
\u89C8
\u9632
\u8FC5
\u5931
\u6C7E
\u9614
\u9035
\u7EC0
\u8511
\u5217
\u5DDD
\u51ED
\u52AA
\u71A8
\u63EA
\u5229
\u4FF1
\u7EC9
\u62A2
\u9E28
\u6211
\u5373
\u8D23
\u81A6
\u6613
\u6BD3
\u9E4A
\u5239
\u73B7
\u5CBF
\u7A7A
\u561E
\u7ECA
\u6392
\u672F
\u4F30
\u9537
\u8FDD
\u4EEC
\u82DF
\u94DC
\u64AD
\u8098
\u4EF6
\u70EB
\u5BA1
\u9C82
\u5E7F
\u50CF
\u94CC
\u60F0
\u94DF
\u5DF3
\u80CD
\u9C8D
\u5EB7
\u61A7
\u8272
\u6062
\u60F3
\u62F7
\u5C24
\u75B3
\u77E5
S
Y
F
D
A
\u5CC4
\u88D5
\u5E2E
\u63E1
\u6414
\u6C10
\u6C18
\u96BE
\u5892
\u6CAE
\u96E8
\u53C1
\u7F25
\u60B4
\u85D0
\u6E6B
\u5A1F
\u82D1
\u7A20
\u989B
\u7C07
\u540E
\u9615
\u95ED
\u8564
\u7F1A
\u600E
\u4F5E
\u7801
\u5624
\u8521
\u75CA
\u8231
\u87AF
\u5E15
\u8D6B
\u6635
\u5347
\u70EC
\u5CAB
\u3001
\u75B5
\u873B
\u9AC1
\u8568
\u96B6
\u70DB
\u68B0
\u4E11
\u76C2
\u6881
\u5F3A
\u9C9B
\u7531
\u62D8
\u63C9
\u52AD
\u9F9F
\u64A4
\u94A9
\u5455
\u5B5B
\u8D39
\u59BB
\u6F02
\u6C42
\u9611
\u5D16
\u79E4
\u7518
\u901A
\u6DF1
\u8865
\u8D43
\u574E
\u5E8A
\u556A
\u627F
\u543C
\u91CF
\u6687
\u94BC
\u70E8
\u9602
\u64CE
\u8131
\u902E
\u79F0
P
\u795E
\u5C5E
\u77D7
\u534E
\u5C4A
\u72CD
\u8451
\u6C79
\u80B2
\u60A3
\u7A92
\u86F0
\u4F7C
\u9759
\u69CE
\u8FD0
\u9CD7
\u5E86
\u901D
\u66FC
\u75B1
\u514B
\u4EE3
\u5B98
\u6B64
\u9EB8
\u8027
\u868C
\u665F
\u4F8B
\u7840
\u699B
\u526F
\u6D4B
\u5530
\u7F22
\u8FF9
\u706C
\u9701
\u8EAB
\u5C81
\u8D6D
\u625B
\u53C8
\u83E1
\u4E5C
\u96FE
\u677F
\u8BFB
\u9677
\u5F89
\u8D2F
\u90C1
\u8651
\u53D8
\u9493
\u83DC
\u573E
\u73B0
\u7422
\u5F0F
\u4E50
\u7EF4
\u6E14
\u6D5C
\u5DE6
\u543E
\u8111
\u94A1
\u8B66
T
\u5575
\u62F4
\u504C
\u6F31
\u6E7F
\u7855
\u6B62
\u9ABC
\u9B44
\u79EF
\u71E5
\u8054
\u8E22
\u739B
\u5219
\u7ABF
\u89C1
\u632F
\u757F
\u9001
\u73ED
\u94BD
\u60A8
\u8D75
\u5228
\u5370
\u8BA8
\u8E1D
\u7C4D
\u8C21
\u820C
\u5D27
\u6C7D
\u853D
\u6CAA
\u9165
\u7ED2
\u6016
\u8D22
\u5E16
\u80B1
\u79C1
\u838E
\u52CB
\u7F94
\u9738
\u52B1
\u54FC
\u5E10
\u5C06
\u5E05
\u6E20
\u7EAA
\u5A74
\u5A29
\u5CAD
\u5398
\u6ED5
\u543B
\u4F24
\u575D
\u51A0
\u620A
\u9686
\u7601
\u4ECB
\u6DA7
\u7269
\u9ECD
\u5E76
\u59D7
\u5962
\u8E51
\u63A3
\u57B8
\u9534
\u547D
\u7B8D
\u6349
\u75C5
\u8F96
\u7430
\u772D
\u8FE9
\u8258
\u7ECC
\u7E41
\u5BC5
\u82E5
\u6BCB
\u601D
\u8BC9
\u7C7B
\u8BC8
\u71EE
\u8F72
\u916E
\u72C2
\u91CD
\u53CD
\u804C
\u7B71
\u53BF
\u59D4
\u78D5
\u7EE3
\u5956
\u664B
\u6FC9
\u5FD7
\u5FBD
\u80A0
\u5448
\u7350
\u577B
\u53E3
\u7247
\u78B0
\u51E0
\u6751
\u67FF
\u52B3
\u6599
\u83B7
\u4EA9
\u60D5
\u6655
\u538C
\u53F7
\u7F62
\u6C60
\u6B63
\u93D6
\u7168
\u5BB6
\u68D5
\u590D
\u5C1D
\u61CB
\u8725
\u9505
\u5C9B
\u6270
\u961F
\u5760
\u763E
\u94AC
@
\u5367
\u75A3
\u9547
\u8B6C
\u51B0
\u5F77
\u9891
\u9EEF
\u636E
\u5784
\u91C7
\u516B
\u7F2A
\u762B
\u578B
\u71B9
\u7830
\u6960
\u8941
\u7B90
\u4F46
\u5636
\u7EF3
\u5564
\u62CD
\u76E5
\u7A46
\u50B2
\u6D17
\u76EF
\u5858
\u6014
\u7B5B
\u4E3F
\u53F0
\u6052
\u5582
\u845B
\u6C38
\uFFE5
\u70DF
\u9152
\u6866
\u4E66
\u7802
\u869D
\u7F09
\u6001
\u701A
\u8884
\u5733
\u8F7B
\u86DB
\u8D85
\u69A7
\u905B
\u59D2
\u5958
\u94EE
\u53F3
\u837D
\u671B
\u507B
\u5361
\u4E36
\u6C30
\u9644
\u505A
\u9769
\u7D22
\u621A
\u5768
\u6877
\u5501
\u5785
\u69BB
\u5C90
\u504E
\u575B
\u83A8
\u5C71
\u6B8A
\u5FAE
\u9A87
\u9648
\u7228
\u63A8
\u55DD
\u9A79
\u6FA1
\u85C1
\u5464
\u5364
\u563B
\u7CC5
\u901B
\u4FB5
\u90D3
\u914C
\u5FB7
\u6447
\u203B
\u9B03
\u88AB
\u6168
\u6BA1
\u7FB8
\u660C
\u6CE1
\u621B
\u978B
\u6CB3
\u5BAA
\u6CBF
\u73B2
\u9CA8
\u7FC5
\u54FD
\u6E90
\u94C5
\u8BED
\u7167
\u90AF
\u5740
\u8343
\u4F6C
\u987A
\u9E33
\u753A
\u972D
\u777E
\u74E2
\u5938
\u6901
\u6653
\u917F
\u75C8
\u5494
\u4F8F
\u5238
\u564E
\u6E4D
\u7B7E
\u56B7
\u79BB
\u5348
\u5C1A
\u793E
\u9524
\u80CC
\u5B5F
\u4F7F
\u6D6A
\u7F26
\u6F4D
\u9785
\u519B
\u59F9
\u9A76
\u7B11
\u9CDF
\u9C81
\u300B
\u5B7D
\u949C
\u7EFF
\u6D31
\u7934
\u712F
\u6930
\u9896
\u56D4
\u4E4C
\u5B54
\u5DF4
\u4E92
\u6027
\u693D
\u54DE
\u8058
\u6628
\u65E9
\u66AE
\u80F6
\u7080
\u96A7
\u4F4E
\u5F57
\u661D
\u94C1
\u5453
\u6C3D
\u85C9
\u5594
\u7656
\u7457
\u59E8
\u6743
\u80F1
\u97E6
\u5811
\u871C
\u914B
\u695D
\u781D
\u6BC1
\u9753
\u6B59
\u9532
\u7A76
\u5C4B
\u55B3
\u9AA8
\u8FA8
\u7891
\u6B66
\u9E20
\u5BAB
\u8F9C
\u70CA
\u9002
\u5761
\u6B83
\u57F9
\u4F69
\u4F9B
\u8D70
\u8708
\u8FDF
\u7FFC
\u51B5
\u59E3
\u51DB
\u6D54
\u5403
\u98D8
\u503A
\u729F
\u91D1
\u4FC3
\u82DB
\u5D07
\u5742
\u83B3
\u7554
\u7EC2
\u5175
\u8815
\u658B
\u6839
\u780D
\u4EA2
\u6B22
\u606C
\u5D14
\u5241
\u9910
\u69AB
\u5FEB
\u6276
\u2016
\u6FD2
\u7F20
\u9CDC
\u5F53
\u5F6D
\u9A6D
\u6D66
\u7BEE
\u6600
\u9506
\u79F8
\u94B3
\u5F0B
\u5A23
\u7791
\u5937
\u9F9B
\u82EB
\u62F1
\u81F4
%
\u5D4A
\u969C
\u9690
\u5F11
\u521D
\u5A13
\u6289
\u6C69
\u7D2F
\u84D6
"
\u552C
\u52A9
\u82D3
\u6619
\u62BC
\u6BD9
\u7834
\u57CE
\u90E7
\u9022
\u568F
\u736D
\u77BB
\u6EB1
\u5A7F
\u8D4A
\u8DE8
\u607C
\u74A7
\u8403
\u59FB
\u8C89
\u7075
\u7089
\u5BC6
\u6C1B
\u9676
\u7838
\u8C2C
\u8854
\u70B9
\u741B
\u6C9B
\u67B3
\u5C42
\u5CB1
\u8BFA
\u810D
\u6988
\u57C2
\u5F81
\u51B7
\u88C1
\u6253
\u8E74
\u7D20
\u7618
\u901E
\u86D0
\u804A
\u6FC0
\u8171
\u8418
\u8E35
\u98D2
\u84DF
\u5406
\u53D6
\u5499
\u7C0B
\u6D93
\u77E9
\u66DD
\u633A
\u63E3
\u5EA7
\u4F60
\u53F2
\u8235
\u7131
\u5C18
\u82CF
\u7B08
\u811A
\u6E89
\u69A8
\u8BF5
\u6A0A
\u9093
\u710A
\u4E49
\u5EB6
\u510B
\u87CB
\u84B2
\u8D66
\u5477
\u675E
\u8BE0
\u8C6A
\u8FD8
\u8BD5
\u9893
\u8309
\u592A
\u9664
\u7D2B
\u9003
\u75F4
\u8349
\u5145
\u9CD5
\u73C9
\u7957
\u58A8
\u6E2D
\u70E9
\u8638
\u6155
\u7487
\u9576
\u7A74
\u5D58
\u6076
\u9A82
\u9669
\u7ECB
\u5E55
\u7889
\u80BA
\u6233
\u5218
\u6F5E
\u79E3
\u7EBE
\u6F5C
\u92AE
\u6D1B
\u987B
\u7F58
\u9500
\u762A
\u6C5E
\u516E
\u5C49
r
\u6797
\u5395
\u8D28
\u63A2
\u5212
\u72F8
\u6B9A
\u5584
\u714A
\u70F9
\u3012
\u9508
\u902F
\u5BB8
\u8F8D
\u6CF1
\u67DA
\u888D
\u8FDC
\u8E4B
\u5D99
\u7EDD
\u5CE5
\u5A25
\u7F0D
\u96C0
\u5FB5
\u8BA4
\u9571
\u8C37
=
\u8D29
\u52C9
\u64A9
\u912F
\u6590
\u6D0B
\u975E
\u795A
\u6CFE
\u8BD2
\u997F
\u64AC
\u5A01
\u6677
\u642D
\u828D
\u9525
\u7B3A
\u84E6
\u5019
\u740A
\u6863
\u7901
\u6CBC
\u5375
\u8360
\u5FD1
\u671D
\u51F9
\u745E
\u5934
\u4EEA
\u5F27
\u5B75
\u754F
\u94C6
\u7A81
\u8872
\u8F66
\u6D69
\u6C14
\u8302
\u6096
\u53A2
\u6795
\u915D
\u6234
\u6E7E
\u90B9
\u98DA
\u6518
\u9502
\u5199
\u5BB5
\u7FC1
\u5CB7
\u65E0
\u559C
\u4E08
\u6311
\u55DF
\u7EDB
\u6B89
\u8BAE
\u69FD
\u5177
\u9187
\u6DDE
\u7B03
\u90F4
\u9605
\u997C
\u5E95
\u58D5
\u781A
\u5F08
\u8BE2
\u7F15
\u5EB9
\u7FDF
\u96F6
\u7B77
\u66A8
\u821F
\u95FA
\u752F
\u649E
\u9E82
\u830C
\u853C
\u5F88
\u73F2
\u6355
\u68E0
\u89D2
\u9609
\u5A9B
\u5A32
\u8BFD
\u527F
\u5C09
\u7235
\u776C
\u97E9
\u8BF0
\u5323
\u5371
\u7CCD
\u956F
\u7ACB
\u6D4F
\u9633
\u5C11
\u76C6
\u8214
\u64D8
\u532A
\u7533
\u5C2C
\u94E3
\u65EF
\u6296
\u8D58
\u74EF
\u5C45
\u02C7
\u54EE
\u6E38
\u952D
\u830F
\u6B4C
\u574F
\u751A
\u79D2
\u821E
\u6C99
\u4ED7
\u52B2
\u6F7A
\u963F
\u71E7
\u90ED
\u55D6
\u970F
\u5FE0
\u6750
\u5942
\u8010
\u8DFA
\u7800
\u8F93
\u5C96
\u5AB3
\u6C1F
\u6781
\u6446
\u707F
\u4ECA
\u6254
\u817B
\u679D
\u594E
\u836F
\u7184
\u5428
\u8BDD
q
\u989D
\u6151
\u560C
\u534F
\u5580
\u58F3
\u57ED
\u89C6
\u8457
\u65BC
\u6127
\u9672
\u7FCC
\u5CC1
\u9885
\u4F5B
\u8179
\u804B
\u4FAF
\u548E
\u53DF
\u79C0
\u9887
\u5B58
\u8F83
\u7F6A
\u54C4
\u5C97
\u626B
\u680F
\u94BE
\u7F8C
\u5DF1
\u74A8
\u67AD
\u9709
\u714C
\u6DB8
\u887F
\u952E
\u955D
\u76CA
\u5CA2
\u594F
\u8FDE
\u592F
\u777F
\u51A5
\u5747
\u7CD6
\u72DE
\u8E4A
\u7A3B
\u7238
\u523F
\u80E5
\u715C
\u4E3D
\u80BF
\u7483
\u63B8
\u8DDA
\u707E
\u5782
\u6A3E
\u6FD1
\u4E4E
\u83B2
\u7A84
\u72B9
\u64AE
\u6218
\u9984
\u8F6F
\u7EDC
\u663E
\u9E22
\u80F8
\u5BBE
\u59B2
\u6055
\u57D4
\u874C
\u4EFD
\u9047
\u5DE7
\u779F
\u7C92
\u6070
\u5265
\u6861
\u535A
\u8BAF
\u51EF
\u5807
\u9636
\u6EE4
\u5356
\u658C
\u9A9A
\u5F6C
\u5151
\u78FA
\u6A31
\u8237
\u4E24
\u5A31
\u798F
\u4EC3
\u5DEE
\u627E
\u6841
\xF7
\u51C0
\u628A
\u9634
\u6C61
\u622C
\u96F7
\u7893
\u8572
\u695A
\u7F61
\u7116
\u62BD
\u59AB
\u5492
\u4ED1
\u95F1
\u5C3D
\u9091
\u83C1
\u7231
\u8D37
\u6CA5
\u9791
\u7261
\u55C9
\u5D34
\u9AA4
\u584C
\u55E6
\u8BA2
\u62EE
\u6ED3
\u6361
\u953B
\u6B21
\u576A
\u6769
\u81C3
\u7BAC
\u878D
\u73C2
\u9E57
\u5B97
\u679A
\u964D
\u9E2C
\u59AF
\u9604
\u5830
\u76D0
\u6BC5
\u5FC5
\u6768
\u5D03
\u4FFA
\u752C
\u72B6
\u8398
\u8D27
\u8038
\u83F1
\u817C
\u94F8
\u550F
\u75E4
\u5B5A
\u6FB3
\u61D2
\u6E85
\u7FD8
\u7599
\u6777
\u6DFC
\u7F19
\u9AB0
\u558A
\u6089
\u783B
\u5777
\u8247
\u8D41
\u754C
\u8C24
\u7EA3
\u5BB4
\u6643
\u8339
\u5F52
\u996D
\u68A2
\u94E1
\u8857
\u6284
\u80BC
\u9B1F
\u82EF
\u9882
\u64B7
\u6208
\u7092
\u5486
\u832D
\u7619
\u8D1F
\u4EF0
\u5BA2
\u7409
\u94E2
\u5C01
\u5351
\u73E5
\u693F
\u9567
\u7AA8
\u9B32
\u5BFF
\u5FA1
\u88A4
\u94C3
\u840E
\u7816
\u992E
\u8112
\u88F3
\u80AA
\u5B55
\u5AE3
\u9997
\u5D47
\u6073
\u6C2F
\u6C5F
\u77F3
\u8936
\u51A2
\u7978
\u963B
\u72C8
\u7F9E
\u94F6
\u9773
\u900F
\u54B3
\u53FC
\u6577
\u82B7
\u5565
\u5B83
\u74E4
\u5170
\u75D8
\u61CA
\u9011
\u808C
\u5F80
\u637A
\u574A
\u7529
\u547B
\u3003
\u6CA6
\u5FD8
\u81BB
\u795F
\u83C5
\u5267
\u5D06
\u667A
\u576F
\u81E7
\u970D
\u5885
\u653B
\u772F
\u5018
\u62E2
\u9AA0
\u94D0
\u5EAD
\u5C99
\u74E0
\u2032
\u7F3A
\u6CE5
\u8FE2
\u6376
?
\uFF1F
\u90CF
\u5599
\u63B7
\u6C8C
\u7EAF
\u79D8
\u79CD
\u542C
\u7ED8
\u56FA
\u87A8
\u56E2
\u9999
\u76D7
\u5992
\u57DA
\u84DD
\u62D6
\u65F1
\u835E
\u94C0
\u8840
\u904F
\u6C72
\u8FB0
\u53E9
\u62FD
\u5E45
\u786C
\u60F6
\u6840
\u6F20
\u63AA
\u6CFC
\u5511
\u9F50
\u80BE
\u5FF5
\u9171
\u865A
\u5C41
\u8036
\u65D7
\u7826
\u95F5
\u5A49
\u9986
\u62ED
\u7EC5
\u97E7
\u5FCF
\u7A9D
\u918B
\u847A
\u987E
\u8F9E
\u501C
\u5806
\u8F8B
\u9006
\u739F
\u8D31
\u75BE
\u8463
\u60D8
\u500C
\u9515
\u6DD8
\u5600
\u83BD
\u4FED
\u7B0F
\u7ED1
\u9CB7
\u6748
\u62E9
\u87C0
\u7CA5
\u55EF
\u9A70
\u903E
\u6848
\u8C2A
\u8913
\u80EB
\u54E9
\u6615
\u989A
\u9CA2
\u7EE0
\u8EBA
\u9E44
\u5D02
\u5112
\u4FE8
\u4E1D
\u5C15
\u6CCC
\u554A
\u8438
\u5F70
\u5E7A
\u541F
\u9A84
\u82E3
\u5F26
\u810A
\u7470
\u3008
\u8BDB
\u9541
\u6790
\u95EA
\u526A
\u4FA7
\u54DF
\u6846
\u8783
\u5B88
\u5B17
\u71D5
\u72ED
\u94C8
\u7F2E
\u6982
\u8FF3
\u75E7
\u9CB2
\u4FEF
\u552E
\u7B3C
\u75E3
\u6249
\u6316
\u6EE1
\u548B
\u63F4
\u90B1
\u6247
\u6B6A
\u4FBF
\u7391
\u7EE6
\u5CE1
\u86C7
\u53E8
\u3016
\u6CFD
\u80C3
\u6593
\u558B
\u6002
\u575F
\u732A
\u8BE5
\u86AC
\u7095
\u5F25
\u8D5E
\u68E3
\u6654
\u5A20
\u6332
\u72E1
\u521B
\u7596
\u94D5
\u956D
\u7A37
\u632B
\u5F2D
\u557E
\u7FD4
\u7C89
\u5C65
\u82D8
\u54E6
\u697C
\u79D5
\u94C2
\u571F
\u9523
\u761F
\u6323
\u6809
\u4E60
\u4EAB
\u6862
\u8885
\u78E8
\u6842
\u8C26
\u5EF6
\u575A
\u851A
\u5657
\u7F72
\u8C1F
\u732C
\u948E
\u6050
\u5B09
\u96D2
\u5026
\u8845
\u4E8F
\u74A9
\u7779
\u523B
\u6BBF
\u738B
\u7B97
\u96D5
\u9EBB
\u4E18
\u67EF
\u9A86
\u4E38
\u584D
\u8C1A
\u6DFB
\u9C88
\u5793
\u684E
\u86AF
\u82A5
\u4E88
\u98D5
\u9566
\u8C0C
\u7A97
\u919A
\u83C0
\u4EAE
\u642A
\u83BA
\u84BF
\u7F81
\u8DB3
J
\u771F
\u8F76
\u60AC
\u8877
\u975B
\u7FCA
\u63A9
\u54D2
\u7085
\u6390
\u51BC
\u59AE
l
\u8C10
\u7A1A
\u8346
\u64D2
\u72AF
\u9675
\u864F
\u6D53
\u5D3D
\u520D
\u964C
\u50BB
\u5B5C
\u5343
\u9756
\u6F14
\u77DC
\u9495
\u717D
\u6770
\u9157
\u6E17
\u4F1E
\u680B
\u4FD7
\u6CEB
\u620D
\u7F55
\u6CBE
\u75BD
\u704F
\u7166
\u82AC
\u78F4
\u53F1
\u9631
\u6989
\u6E43
\u8700
\u53C9
\u9192
\u5F6A
\u79DF
\u90E1
\u7BF7
\u5C4E
\u826F
\u57A2
\u9697
\u5F31
\u9668
\u5CEA
\u7837
\u63B4
\u9881
\u80CE
\u96EF
\u7EF5
\u8D2C
\u6C90
\u64B5
\u9698
\u7BD9
\u6696
\u66F9
\u9661
\u6813
\u586B
\u81FC
\u5F66
\u74F6
\u742A
\u6F7C
\u54EA
\u9E21
\u6469
\u5566
\u4FDF
\u950B
\u57DF
\u803B
\u852B
\u75AF
\u7EB9
\u6487
\u6BD2
\u7EF6
\u75DB
\u916F
\u5FCD
\u722A
\u8D73
\u6B46
\u5639
\u8F95
\u70C8
\u518C
\u6734
\u94B1
\u542E
\u6BEF
\u765C
\u5A03
\u8C00
\u90B5
\u53AE
\u70BD
\u749E
\u9083
\u4E10
\u8FFD
\u8BCD
\u74D2
\u5FC6
\u8F67
\u82AB
\u8C2F
\u55B7
\u5F1F
\u534A
\u5195
\u88D9
\u6396
\u5889
\u7EEE
\u5BDD
\u82D4
\u52BF
\u9877
\u8925
\u5207
\u886E
\u541B
\u4F73
\u5AD2
\u86A9
\u971E
\u4F5A
\u6D19
\u900A
\u9556
\u66B9
\u551B
&
\u6B92
\u9876
\u7897
\u7357
\u8F6D
\u94FA
\u86CA
\u5E9F
\u6079
\u6C68
\u5D29
\u73CD
\u90A3
\u6775
\u66F2
\u7EBA
\u590F
\u85B0
\u5080
\u95F3
\u6DEC
\u59D8
\u8200
\u62E7
\u5377
\u6942
\u604D
\u8BAA
\u53A9
\u5BEE
\u7BEA
\u8D53
\u4E58
\u706D
\u76C5
\u97A3
\u6C9F
\u614E
\u6302
\u997A
\u9F3E
\u6773
\u6811
\u7F28
\u4E1B
\u7D6E
\u5A0C
\u81FB
\u55F3
\u7BE1
\u4FA9
\u8FF0
\u8870
\u77DB
\u5708
\u869C
\u5315
\u7B79
\u533F
\u6FDE
\u6668
\u53F6
\u9A8B
\u90DD
\u631A
\u86B4
\u6EDE
\u589E
\u4F8D
\u63CF
\u74E3
\u5416
\u5AE6
\u87D2
\u533E
\u5723
\u8D4C
\u6BE1
\u765E
\u607A
\u767E
\u66F3
\u9700
\u7BD3
\u80AE
\u5E96
\u5E0F
\u537F
\u9A7F
\u9057
\u8E6C
\u9B13
\u9AA1
\u6B49
\u828E
\u80F3
\u5C50
\u79BD
\u70E6
\u664C
\u5BC4
\u5ABE
\u72C4
\u7FE1
\u82D2
\u8239
\u5EC9
\u7EC8
\u75DE
\u6B87
\u3005
\u7566
\u9976
\u6539
\u62C6
\u60BB
\u8404
\uFFE1
\u74FF
\u4E43
\u8A3E
\u6845
\u532E
\u6EA7
\u62E5
\u7EB1
\u94CD
\u9A97
\u8543
\u9F8B
\u7F2C
\u7236
\u4F50
\u759A
\u680E
\u918D
\u63B3
\u84C4
x
\u60C6
\u989C
\u9C86
\u6986
\u3014
\u730E
\u654C
\u66B4
\u8C25
\u9CAB
\u8D3E
\u7F57
\u73BB
\u7F04
\u6266
\u82AA
\u7663
\u843D
\u5F92
\u81FE
\u607F
\u7329
\u6258
\u90B4
\u8084
\u7275
\u6625
\u965B
\u8000
\u520A
\u62D3
\u84D3
\u90B3
\u5815
\u5BC7
\u6789
\u6DCC
\u5561
\u6E44
\u517D
\u9177
\u843C
\u789A
\u6FE0
\u8424
\u5939
\u65EC
\u622E
\u68AD
\u7425
\u692D
\u6614
\u52FA
\u870A
\u7ED0
\u665A
\u5B7A
\u50F5
\u5BA3
\u6444
\u51BD
\u65E8
\u840C
\u5FD9
\u86A4
\u7709
\u567C
\u87D1
\u4ED8
\u5951
\u74DC
\u60BC
\u98A1
\u58C1
\u66FE
\u7A95
\u98A2
\u6F8E
\u4EFF
\u4FD1
\u6D51
\u5D4C
\u6D63
\u4E4D
\u788C
\u892A
\u4E71
\u851F
\u9699
\u73A9
\u5250
\u846B
\u7BAB
\u7EB2
\u56F4
\u4F10
\u51B3
\u4F19
\u6F29
\u745F
\u5211
\u8093
\u9573
\u7F13
\u8E6D
\u6C28
\u7693
\u5178
\u7572
\u574D
\u94D1
\u6A90
\u5851
\u6D1E
\u502C
\u50A8
\u80F4
\u6DF3
\u623E
\u5410
\u707C
\u60FA
\u5999
\u6BD5
\u73D0
\u7F08
\u8671
\u76D6
\u7FB0
\u9E3F
\u78C5
\u8C13
\u9AC5
\u5A34
\u82F4
\u5537
\u86A3
\u9739
\u62A8
\u8D24
\u5520
\u72AC
\u8A93
\u900D
\u5EA0
\u903C
\u9E93
\u7C7C
\u91C9
\u545C
\u78A7
\u79E7
\u6C29
\u6454
\u9704
\u7A78
\u7EA8
\u8F9F
\u5988
\u6620
\u5B8C
\u725B
\u7F34
\u55F7
\u708A
\u6069
\u8354
\u8306
\u6389
\u7D0A
\u614C
\u8393
\u7F9F
\u9619
\u8401
\u78D0
\u53E6
\u8579
\u8FB1
\u9CD0
\u6E6E
\u5421
\u5429
\u5510
\u7766
\u57A0
\u8212
\u571C
\u5197
\u77BF
\u6EBA
\u82BE
\u56F1
\u5320
\u50F3
\u6C50
\u83E9
\u996C
\u6F13
\u9ED1
\u9730
\u6D78
\u6FE1
\u7AA5
\u6BC2
\u84A1
\u5162
\u9A7B
\u9E49
\u82AE
\u8BD9
\u8FEB
\u96F3
\u5382
\u5FD0
\u81C6
\u7334
\u9E23
\u86AA
\u6808
\u7B95
\u7FA1
\u6E10
\u8386
\u634D
\u7708
\u54D3
\u8DB4
\u8E7C
\u57D5
\u56A3
\u9A9B
\u5B8F
\u6DC4
\u6591
\u565C
\u4E25
\u745B
\u5783
\u690E
\u8BF1
\u538B
\u5EBE
\u7EDE
\u7118
\u5EFF
\u62A1
\u8FC4
\u68D8
\u592B
\u7EAC
\u9539
\u7728
\u778C
\u4FA0
\u8110
\u7ADE
\u7011
\u5B73
\u9AA7
\u9041
\u59DC
\u98A6
\u836A
\u6EDA
\u8426
\u4F2A
\u9038
\u7CB3
\u722C
\u9501
\u77E3
\u5F79
\u8DA3
\u6D12
\u9894
\u8BCF
\u9010
\u5978
\u752D
\u60E0
\u6500
\u8E44
\u6CDB
\u5C3C
\u62FC
\u962E
\u9E70
\u4E9A
\u9888
\u60D1
\u52D2
\u3009
\u9645
\u809B
\u7237
\u521A
\u94A8
\u4E30
\u517B
\u51B6
\u9CBD
\u8F89
\u853B
\u753B
\u8986
\u76B4
\u598A
\u9EA6
\u8FD4
\u9189
\u7682
\u64C0
\u3017
\u9176
\u51D1
\u7CB9
\u609F
\u8BC0
\u7856
\u6E2F
\u535C
z
\u6740
\u6D95
\xB1
\u820D
\u94E0
\u62B5
\u5F1B
\u6BB5
\u655D
\u9550
\u5960
\u62C2
\u8F74
\u8DDB
\u88B1
e
t
\u6C89
\u83C7
\u4FCE
\u85AA
\u5CE6
\u79ED
\u87F9
\u5386
\u76DF
\u83E0
\u5BE1
\u6DB2
\u80A2
\u55BB
\u67D3
\u88F1
\u60B1
\u62B1
\u6C19
\u8D64
\u6345
\u731B
\u8DD1
\u6C2E
\u8C23
\u4EC1
\u5C3A
\u8F8A
\u7A8D
\u70D9
\u884D
\u67B6
\u64E6
\u500F
\u7490
\u7441
\u5E01
\u695E
\u80D6
\u5914
\u8DB8
\u909B
\u60F4
\u9955
\u8654
\u874E
\xA7
\u54C9
\u8D1D
\u5BBD
\u8FAB
\u70AE
\u6269
\u9972
\u7C7D
\u9B4F
\u83DF
\u9530
\u4F0D
\u731D
\u672B
\u7433
\u54DA
\u86CE
\u9082
\u5440
\u59FF
\u911E
\u5374
\u6B67
\u4ED9
\u6078
\u6910
\u68EE
\u7252
\u5BE4
\u8892
\u5A46
\u8662
\u96C5
\u9489
\u6735
\u8D3C
\u6B32
\u82DE
\u5BF0
\u6545
\u9F9A
\u576D
\u5618
\u54AB
\u793C
\u7877
\u5140
\u7762
\u6C76
\u2019
\u94F2
\u70E7
\u7ED5
\u8BC3
\u6D43
\u94BF
\u54FA
\u67DC
\u8BBC
\u988A
\u7481
\u8154
\u6D3D
\u5490
\u8132
\u7C0C
\u7B60
\u9563
\u73AE
\u97A0
\u8C01
\u517C
\u59C6
\u6325
\u68AF
\u8774
\u8C18
\u6F15
\u5237
\u8E8F
\u5BA6
\u5F3C
b
\u578C
\u5288
\u9E9F
\u8389
\u63ED
\u7B19
\u6E0E
\u4ED5
\u55E4
\u4ED3
\u914D
\u600F
\u62AC
\u9519
\u6CEF
\u954A
\u5B70
\u733F
\u90AA
\u4ECD
\u79CB
\u9F2C
\u58F9
\u6B47
\u5435
\u70BC
<
\u5C27
\u5C04
\u67EC
\u5EF7
\u80E7
\u973E
\u51F3
\u968B
\u809A
\u6D6E
\u68A6
\u7965
\u682A
\u5835
\u9000
L
\u9E6B
\u8DCE
\u51F6
\u6BFD
\u835F
\u70AB
\u6829
\u73B3
\u751C
\u6C82
\u9E7F
\u987D
\u4F2F
\u7239
\u8D54
\u86F4
\u5F90
\u5321
\u6B23
\u72F0
\u7F38
\u96F9
\u87C6
\u75A4
\u9ED8
\u6CA4
\u555C
\u75C2
\u8863
\u7985
w
i
h
\u8FBD
\u8473
\u9EDD
\u9497
\u505C
\u6CBD
\u68D2
\u99A8
\u988C
\u8089
\u5434
\u786B
\u60AF
\u52BE
\u5A08
\u9A6C
\u5567
\u540A
\u608C
\u9551
\u5CED
\u5E06
\u7023
\u6D89
\u54B8
\u75B8
\u6ECB
\u6CE3
\u7FE6
\u62D9
\u7678
\u94A5
\u8712
+
\u5C3E
\u5E84
\u51DD
\u6CC9
\u5A62
\u6E34
\u8C0A
\u4E5E
\u9646
\u9509
\u7CCA
\u9E26
\u6DEE
I
B
N
\u6666
\u5F17
\u4E54
\u5EA5
\u8461
\u5C3B
\u5E2D
\u6A61
\u50A3
\u6E23
\u62FF
\u60E9
\u9E8B
\u659B
\u7F03
\u77EE
\u86CF
\u5C98
\u9E3D
\u59D0
\u818F
\u50AC
\u5954
\u9552
\u55B1
\u8821
\u6467
\u94AF
\u80E4
\u67E0
\u62D0
\u748B
\u9E25
\u5362
\u8361
\u503E
^
_
\u73C0
\u9004
\u8427
\u587E
\u6387
\u8D2E
\u7B06
\u8042
\u5703
\u51B2
\u5D6C
M
\u6ED4
\u7B15
\u503C
\u7099
\u5076
\u8731
\u6410
\u6886
\u6C6A
\u852C
\u8151
\u9E2F
\u8E47
\u655E
\u7EEF
\u4EE8
\u796F
\u8C06
\u68A7
\u7CD7
\u946B
\u5578
\u8C7A
\u56F9
\u733E
\u5DE2
\u67C4
\u701B
\u7B51
\u8E0C
\u6CAD
\u6697
\u82C1
\u9C7F
\u8E49
\u8102
\u8616
\u7262
\u70ED
\u6728
\u5438
\u6E83
\u5BA0
\u5E8F
\u6CDE
\u507F
\u62DC
\u6AA9
\u539A
\u6710
\u6BD7
\u87B3
\u541E
\u5A9A
\u673D
\u62C5
\u8757
\u6A58
\u7574
\u7948
\u7CDF
\u76F1
\u96BC
\u90DC
\u60DC
\u73E0
\u88E8
\u94F5
\u7119
\u741A
\u552F
\u549A
\u566A
\u9A8A
\u4E2B
\u6EE2
\u52E4
\u68C9
\u5478
\u54A3
\u6DC0
\u9694
\u857E
\u7A88
\u9968
\u6328
\u7145
\u77ED
\u5319
\u7C95
\u955C
\u8D63
\u6495
\u58A9
\u916C
\u9981
\u8C4C
\u9890
\u6297
\u9163
\u6C13
\u4F51
\u6401
\u54ED
\u9012
\u8037
\u6DA1
\u6843
\u8D3B
\u78A3
\u622A
\u7626
\u662D
\u954C
\u8513
\u6C1A
\u7532
\u7315
\u8574
\u84EC
\u6563
\u62FE
\u7E9B
\u72FC
\u7337
\u94CE
\u57CB
\u65D6
\u77FE
\u8BB3
\u56CA
\u7CDC
\u8FC8
\u7C9F
\u8682
\u7D27
\u9CB3
\u7622
\u683D
\u7A3C
\u7F8A
\u9504
\u659F
\u7741
\u6865
\u74EE
\u8E59
\u7949
\u91BA
\u9F3B
\u6631
\u5243
\u8DF3
\u7BF1
\u8DF7
\u849C
\u7FCE
\u5B85
\u6656
\u55D1
\u58D1
\u5CFB
\u766B
\u5C4F
\u72E0
\u964B
\u889C
\u9014
\u618E
\u7940
\u83B9
\u6EDF
\u4F76
\u6EA5
\u81E3
\u7EA6
\u76DB
\u5CF0
\u78C1
\u6175
\u5A6A
\u62E6
\u8385
\u6715
\u9E66
\u7CB2
\u88E4
\u54CE
\u75A1
\u5AD6
\u7435
\u7A9F
\u582A
\u8C1B
\u5609
\u5121
\u9CDD
\u65A9
\u90FE
\u9A78
\u914A
\u5984
\u80DC
\u8D3A
\u5F99
\u5085
\u564C
\u94A2
\u6805
\u5E87
\u604B
\u531D
\u5DEF
\u9088
\u5C38
\u951A
\u7C97
\u4F5F
\u86DF
\u85B9
\u7EB5
\u868A
\u90C5
\u7EE2
\u9510
\u82D7
\u4FDE
\u7BC6
\u6DC6
\u8180
\u9C9C
\u714E
\u8BF6
\u79FD
\u5BFB
\u6DAE
\u523A
\u6000
\u5676
\u5DE8
\u8930
\u9B45
\u7076
\u704C
\u6849
\u85D5
\u8C1C
\u8238
\u8584
\u6400
\u607D
\u501F
\u726F
\u75C9
\u6E25
\u613F
\u4E93
\u8018
\u6760
\u67E9
\u9514
\u86B6
\u94A3
\u73C8
\u5598
\u8E52
\u5E7D
\u8D50
\u7A17
\u6664
\u83B1
\u6CD4
\u626F
\u80AF
\u83EA
\u88C6
\u8169
\u8C49
\u7586
\u9A9C
\u8150
\u502D
\u73CF
\u5514
\u7CAE
\u4EA1
\u6DA6
\u6170
\u4F3D
\u6A44
\u7384
\u8A89
\u9190
\u80C6
\u9F8A
\u7CBC
\u586C
\u9647
\u5F7C
\u524A
\u55E3
\u7EFE
\u82BD
\u5997
\u57AD
\u7634
\u723D
\u858F
\u5BE8
\u9F88
\u6CE0
\u5F39
\u8D62
\u6F2A
\u732B
\u5627
\u6D82
\u6064
\u572D
\u8327
\u70FD
\u5C51
\u75D5
\u5DFE
\u8D56
\u8378
\u51F0
\u816E
\u7548
\u4EB5
\u8E72
\u5043
\u82C7
\u6F9C
\u826E
\u6362
\u9ABA
\u70D8
\u82D5
\u6893
\u9889
\u8087
\u54D7
\u6084
\u6C24
\u6DA0
\u846C
\u5C60
\u9E6D
\u690D
\u7AFA
\u4F6F
\u8BE3
\u9C87
\u7600
\u9C85
\u90A6
\u79FB
\u6EC1
\u51AF
\u8015
\u7654
\u620C
\u832C
\u6C81
\u5DE9
\u60A0
\u6E58
\u6D2A
\u75F9
\u951F
\u5FAA
\u8C0B
\u8155
\u9CC3
\u94A0
\u635E
\u7109
\u8FCE
\u78B1
\u4F2B
\u6025
\u69B7
\u5948
\u909D
\u536F
\u8F84
\u76B2
\u535F
\u919B
\u7579
\u5FE7
\u7A33
\u96C4
\u663C
\u7F29
\u9608
\u7751
\u624C
\u8017
\u66E6
\u6D85
\u634F
\u77A7
\u9095
\u6DD6
\u6F09
\u94DD
\u8026
\u79B9
\u6E5B
\u55BD
\u83BC
\u7405
\u8BF8
\u82CE
\u7E82
\u7845
\u59CB
\u55E8
\u50A5
\u71C3
\u81C2
\u8D45
\u5608
\u5446
\u8D35
\u5C79
\u58EE
\u808B
\u4E8D
\u8680
\u5345
\u8C79
\u8146
\u90AC
\u8FED
\u6D4A
}
\u7AE5
\u8782
\u6350
\u5729
\u52D0
\u89E6
\u5BDE
\u6C4A
\u58E4
\u836B
\u81BA
\u6E0C
\u82B3
\u61FF
\u9074
\u8788
\u6CF0
\u84FC
\u86E4
\u831C
\u8205
\u67AB
\u6714
\u819D
\u7719
\u907F
\u6885
\u5224
\u9E5C
\u749C
\u724D
\u7F05
\u57AB
\u85FB
\u9ED4
\u4FA5
\u60DA
\u61C2
\u8E29
\u8170
\u8148
\u672D
\u4E1E
\u553E
\u6148
\u987F
\u6479
\u837B
\u742C
~
\u65A7
\u6C88
\u6EC2
\u80C1
\u80C0
\u5E44
\u839C
Z
\u5300
\u9104
\u638C
\u7EF0
\u830E
\u711A
\u8D4B
\u8431
\u8C11
\u6C41
\u94D2
\u778E
\u593A
\u8717
\u91CE
\u5A06
\u5180
\u5F2F
\u7BC1
\u61F5
\u705E
\u96BD
\u82A1
\u8118
\u4FD0
\u8FA9
\u82AF
\u63BA
\u558F
\u8188
\u8748
\u89D0
\u609A
\u8E39
\u8517
\u71A0
\u9F20
\u5475
\u6293
\u6A7C
\u5CE8
\u755C
\u7F14
\u79BE
\u5D2D
\u5F03
\u718A
\u6452
\u51F8
\u62D7
\u7A79
\u8499
\u6292
\u795B
\u529D
\u95EB
\u6273
\u9635
\u918C
\u8E2A
\u55B5
\u4FA3
\u642C
\u4EC5
\u8367
\u8D4E
\u877E
\u7426
\u4E70
\u5A67
\u7784
\u5BD3
\u768E
\u51BB
\u8D5D
\u7BA9
\u83AB
\u77B0
\u90CA
\u7B2B
\u59DD
\u7B52
\u67AA
\u9063
\u7178
\u888B
\u8206
\u75F1
\u6D9B
\u6BCD
\u3007
\u542F
\u8DF5
\u8019
\u7EF2
\u76D8
\u9042
\u660A
\u641E
\u69FF
\u8BEC
\u7EB0
\u6CD3
\u60E8
\u6AAC
\u4EBB
\u8D8A
C
o
\u61A9
\u71B5
\u7977
\u9492
\u66A7
\u5854
\u9617
\u80F0
\u5484
\u5A36
\u9B54
\u7436
\u949E
\u90BB
\u626C
\u6749
\u6BB4
\u54BD
\u5F13
\u3006
\u9AFB
\u3011
\u542D
\u63FD
\u9706
\u62C4
\u6B96
\u8106
\u5F7B
\u5CA9
\u829D
\u52C3
\u8FA3
\u524C
\u949D
\u560E
\u7504
\u4F58
\u7696
\u4F26
\u6388
\u5F95
\u6194
\u632A
\u7687
\u5E9E
\u7A14
\u829C
\u8E0F
\u6EB4
\u5156
\u5352
\u64E2
\u9965
\u9CDE
\u7172
\u2030
\u8D26
\u9897
\u53FB
\u65AF
\u6367
\u9CCD
\u742E
\u8BB9
\u86D9
\u7EBD
\u8C2D
\u9178
\u5154
\u8392
\u7747
\u4F1F
\u89D1
\u7FB2
\u55DC
\u5B9C
\u8910
\u65CE
\u8F9B
\u5366
\u8BD8
\u7B4B
\u938F
\u6EAA
\u631B
\u7194
\u961C
\u6670
\u9CC5
\u4E22
\u595A
\u7078
\u5471
\u732E
\u9649
\u9EDB
\u9E2A
\u753E
\u8428
\u75AE
\u62EF
\u6D32
\u75B9
\u8F91
\u53D9
\u607B
\u8C12
\u5141
\u67D4
\u70C2
\u6C0F
\u9005
\u6F06
\u62CE
\u60CB
\u6248
\u6E5F
\u7EAD
\u5555
\u63AC
\u64DE
\u54E5
\u5FFD
\u6DA4
\u9E35
\u9761
\u90D7
\u74F7
\u6241
\u5ECA
\u6028
\u96CF
\u94AE
\u6566
E
\u61E6
\u618B
\u6C40
\u62DA
\u5549
\u814C
\u5CB8
f
\u75FC
\u7785
\u5C0A
\u5480
\u7729
\u98D9
\u5FCC
\u4EDD
\u8FE6
\u71AC
\u6BEB
\u80EF
\u7BD1
\u8304
\u817A
\u51C4
\u821B
\u78B4
\u9535
\u8BE7
\u7FAF
\u5F8C
\u6F0F
\u6C64
\u5B93
\u4EDE
\u8681
\u58F6
\u8C30
\u7691
\u94C4
\u68F0
\u7F54
\u8F85
\u6676
\u82E6
\u725F
\u95FD
\\
\u70C3
\u996E
\u807F
\u4E19
\u86F3
\u6731
\u7164
\u6D94
\u9CD6
\u7281
\u7F50
\u837C
\u7812
\u6DE6
\u59A4
\u9ECF
\u620E
\u5B51
\u5A55
\u747E
\u6222
\u94B5
\u67A3
\u634B
\u7825
\u8869
\u72D9
\u6860
\u7A23
\u960E
\u8083
\u688F
\u8BEB
\u5B6A
\u6636
\u5A4A
\u886B
\u55D4
\u4F83
\u585E
\u8703
\u6A35
\u5CD2
\u8C8C
\u5C7F
\u6B3A
\u7F2B
\u9610
\u6816
\u8BDF
\u73DE
\u836D
\u541D
\u840D
\u55FD
\u6042
\u557B
\u8734
\u78EC
\u5CCB
\u4FF8
\u8C6B
\u8C0E
\u5F8A
\u954D
\u97EC
\u9B47
\u6674
U
\u56DF
\u731C
\u86EE
\u5750
\u56FF
\u4F34
\u4EAD
\u809D
\u4F57
\u8760
\u5983
\u80DE
\u6EE9
\u69B4
\u6C16
\u57A9
\u82CB
\u7823
\u626A
\u998F
\u59D3
\u8F69
\u5389
\u5925
\u4F88
\u7980
\u5792
\u5C91
\u8D4F
\u949B
\u8F90
\u75D4
\u62AB
\u7EB8
\u78B3
\u201C
\u575E
\u8813
\u6324
\u8365
\u6C85
\u6094
\u94E7
\u5E3C
\u848C
\u8747
a
p
y
n
g
\u54C0
\u6D46
\u7476
\u51FF
\u6876
\u9988
\u76AE
\u5974
\u82DC
\u4F64
\u4F36
\u6657
\u94F1
\u70AC
\u4F18
\u5F0A
\u6C22
\u6043
\u752B
\u6525
\u7AEF
\u950C
\u7070
\u7A39
\u709D
\u66D9
\u908B
\u4EA5
\u7736
\u78BE
\u62C9
\u841D
\u7ED4
\u6377
\u6D4D
\u814B
\u59D1
\u83D6
\u51CC
\u6D9E
\u9EBD
\u9522
\u6868
\u6F62
\u7ECE
\u9570
\u6B86
\u9511
\u6E1D
\u94EC
\u56F0
\u7EFD
\u89CE
\u5308
\u7CD9
\u6691
\u88F9
\u9E1F
\u76D4
\u80BD
\u8FF7
\u7DA6
\u300E
\u4EB3
\u4F5D
\u4FD8
\u94B4
\u89C7
\u9AA5
\u4EC6
\u759D
\u8DEA
\u5A76
\u90EF
\u7039
\u5509
\u8116
\u8E1E
\u9488
\u667E
\u5FD2
\u627C
\u77A9
\u53DB
\u6912
\u759F
\u55E1
\u9097
\u8086
\u8DC6
\u73AB
\u5FE1
\u6363
\u54A7
\u5506
\u8244
\u8611
\u6F66
\u7B1B
\u961A
\u6CB8
\u6CFB
\u638A
\u83FD
\u8D2B
\u65A5
\u9AC2
\u5B62
\u9542
\u8D42
\u9E9D
\u9E3E
\u5C61
\u886C
\u82F7
\u606A
\u53E0
\u5E0C
\u7CA4
\u723B
\u559D
\u832B
\u60EC
\u90F8
\u7EFB
\u5EB8
\u6485
\u789F
\u5B84
\u59B9
\u819B
\u53EE
\u9975
\u5D1B
\u55F2
\u6905
\u51A4
\u6405
\u5495
\u655B
\u5C39
\u57A6
\u95F7
\u8749
\u970E
\u52F0
\u8D25
\u84D1
\u6CF8
\u80A4
\u9E4C
\u5E4C
\u7126
\u6D60
\u978D
\u5201
\u8230
\u4E59
\u7AFF
\u88D4
\u3002
\u8335
\u51FD
\u4F0A
\u5144
\u4E28
\u5A1C
\u530D
\u8B07
\u83AA
\u5BA5
\u4F3C
\u877D
\u7FF3
\u916A
\u7FE0
\u7C91
\u8587
\u7962
\u9A8F
\u8D60
\u53EB
Q
\u5664
\u567B
\u7AD6
\u8297
\u83A0
\u6F6D
\u4FCA
\u7FBF
\u801C
O
\u90EB
\u8D81
\u55EA
\u56DA
\u8E76
\u8292
\u6D01
\u7B0B
\u9E51
\u6572
\u785D
\u5576
\u5821
\u6E32
\u63E9
\u300F
\u643A
\u5BBF
\u9052
\u988D
\u626D
\u68F1
\u5272
\u841C
\u8538
\u8475
\u7434
\u6342
\u9970
\u8859
\u803F
\u63A0
\u52DF
\u5C82
\u7A96
\u6D9F
\u853A
\u7624
\u67DE
\u77AA
\u601C
\u5339
\u8DDD
\u6954
\u709C
\u54C6
\u79E6
\u7F0E
\u5E7C
\u8301
\u7EEA
\u75E8
\u6068
\u6978
\u5A05
\u74E6
\u6869
\u96EA
\u5B34
\u4F0F
\u6994
\u59A5
\u94FF
\u62CC
\u7720
\u96CD
\u7F07
\u2018
\u5353
\u6413
\u54CC
\u89DE
\u5669
\u5C48
\u54E7
\u9AD3
\u54A6
\u5DC5
\u5A11
\u4F91
\u6DEB
\u81B3
\u795D
\u52FE
\u59CA
\u83B4
\u80C4
\u7583
\u859B
\u8737
\u80DB
\u5DF7
\u8299
\u828B
\u7199
\u95F0
\u52FF
\u7A83
\u72F1
\u5269
\u948F
\u5E62
\u965F
\u94DB
\u6167
\u9774
\u800D
k
\u6D59
\u6D47
\u98E8
\u60DF
\u7ED7
\u795C
\u6F88
\u557C
\u54AA
\u78F7
\u645E
\u8BC5
\u90E6
\u62B9
\u8DC3
\u58EC
\u5415
\u8096
\u740F
\u98A4
\u5C34
\u5261
\u62A0
\u51CB
\u8D5A
\u6CCA
\u6D25
\u5B95
\u6BB7
\u5014
\u6C32
\u6F2B
\u90BA
\u6D8E
\u6020
$
\u57AE
\u836C
\u9075
\u4FCF
\u53F9
\u5662
\u997D
\u8718
\u5B59
\u7B75
\u75BC
\u97AD
\u7FA7
\u7266
\u7BAD
\u6F74
c
\u7738
\u796D
\u9AEF
\u5556
\u5773
\u6101
\u82A9
\u9A6E
\u5021
\u5DFD
\u7A70
\u6C83
\u80DA
\u6012
\u51E4
\u69DB
\u5242
\u8DB5
\u5AC1
v
\u90A2
\u706F
\u9122
\u6850
\u777D
\u6A97
\u952F
\u69DF
\u5A77
\u5D4B
\u573B
\u8BD7
\u8548
\u98A0
\u906D
\u75E2
\u82B8
\u602F
\u99A5
\u7AED
\u9517
\u5F9C
\u606D
\u904D
\u7C41
\u5251
\u5631
\u82E1
\u9F84
\u50E7
\u6851
\u6F78
\u5F18
\u6FB6
\u6979
\u60B2
\u8BAB
\u6124
\u8165
\u60B8
\u8C0D
\u6939
\u5462
\u6853
\u846D
\u652B
\u9600
\u7FF0
\u8EB2
\u6556
\u67D1
\u90CE
\u7B28
\u6A47
\u5443
\u9B41
\u71CE
\u8113
\u8469
\u78CB
\u579B
\u73BA
\u72EE
\u6C93
\u781C
\u854A
\u953A
\u7F79
\u8549
\u7FF1
\u8650
\u95FE
\u5DEB
\u65E6
\u8331
\u5B37
\u67AF
\u9E4F
\u8D21
\u82B9
\u6C5B
\u77EB
\u7EC1
\u62E3
\u79BA
\u4F43
\u8BA3
\u822B
\u60EF
\u4E73
\u8D8B
\u75B2
\u633D
\u5C9A
\u867E
\u887E
\u8839
\u8E42
\u98D3
\u6C26
\u94D6
\u5B69
\u7A1E
\u745C
\u58C5
\u6380
\u52D8
\u5993
\u7545
\u9ACB
W
\u5E90
\u7272
\u84FF
\u6995
\u7EC3
\u57A3
\u5531
\u90B8
\u83F2
\u6606
\u5A7A
\u7A7F
\u7EE1
\u9E92
\u86B1
\u6382
\u611A
\u6CF7
\u6DAA
\u6F33
\u59A9
\u5A09
\u6984
\u8BB7
\u89C5
\u65E7
\u85E4
\u716E
\u545B
\u67F3
\u8153
\u53ED
\u5EB5
\u70F7
\u9621
\u7F42
\u8715
\u64C2
\u7316
\u54BF
\u5AB2
\u8109
\u3010
\u6C8F
\u8C85
\u9EE0
\u718F
\u54F2
\u70C1
\u5766
\u9175
\u515C
\xD7
\u6F47
\u6492
\u527D
\u73E9
\u5739
\u4E7E
\u6478
\u6A1F
\u5E3D
\u55D2
\u8944
\u9B42
\u8F7F
\u61AC
\u9521
\u3015
\u5583
\u7686
\u5496
\u9685
\u8138
\u6B8B
\u6CEE
\u8882
\u9E42
\u73CA
\u56E4
\u6346
\u54A4
\u8BEF
\u5FA8
\u95F9
\u6DD9
\u828A
\u6DCB
\u6006
\u56D7
\u62E8
\u68B3
\u6E24
R
G
\u7EE8
\u8693
\u5A40
\u5E61
\u72E9
\u9EBE
\u8C22
\u5522
\u88F8
\u65CC
\u4F09
\u7EB6
\u88C2
\u9A73
\u783C
\u549B
\u6F84
\u6A28
\u8E48
\u5B99
\u6F8D
\u500D
\u8C94
\u64CD
\u52C7
\u87E0
\u6448
\u7827
\u866C
\u591F
\u7F01
\u60A6
\u85FF
\u64B8
\u8279
\u6441
\u6DF9
\u8C47
\u864E
\u69AD
\u02C9
\u5431
d
\xB0
\u55A7
\u8340
\u8E31
\u4FAE
\u594B
\u5055
\u9977
\u728D
\u60EE
\u5751
\u748E
\u5F98
\u5B9B
\u5986
\u8888
\u5029
\u7AA6
\u6602
\u834F
\u4E56
K
\u6005
\u64B0
\u9CD9
\u7259
\u8881
\u915E
X
\u75FF
\u743C
\u95F8
\u96C1
\u8DBE
\u835A
\u867B
\u6D9D
\u300A
\u674F
\u97ED
\u5048
\u70E4
\u7EEB
\u9798
\u5349
\u75C7
\u9062
\u84E5
\u8BCB
\u676D
\u8368
\u5306
\u7AE3
\u7C2A
\u8F99
\u6555
\u865E
\u4E39
\u7F2D
\u54A9
\u9EDF
m
\u6DE4
\u7455
\u5482
\u94C9
\u787C
\u8328
\u5D82
\u75D2
\u7578
\u656C
\u6DBF
\u7CAA
\u7A98
\u719F
\u53D4
\u5AD4
\u76FE
\u5FF1
\u88D8
\u61BE
\u68B5
\u8D61
\u73D9
\u54AF
\u5A18
\u5E99
\u6EAF
\u80FA
\u8471
\u75EA
\u644A
\u8377
\u535E
\u4E52
\u9AE6
\u5BD0
\u94ED
\u5769
\u80D7
\u67B7
\u7206
\u6E9F
\u56BC
\u7F9A
\u782C
\u8F68
\u60CA
\u6320
\u7F44
\u7AFD
\u83CF
\u6C27
\u6D45
\u6963
\u76FC
\u67A2
\u70B8
\u9606
\u676F
\u8C0F
\u566C
\u6DC7
\u6E3A
\u4FEA
\u79C6
\u5893
\u6CEA
\u8DFB
\u780C
\u75F0
\u57A1
\u6E21
\u803D
\u91DC
\u8BB6
\u9CCE
\u715E
\u5457
\u97F6
\u8236
\u7EF7
\u9E73
\u7F1C
\u65F7
\u94CA
\u76B1
\u9F8C
\u6A80
\u9716
\u5944
\u69D0
\u8273
\u8776
\u65CB
\u54DD
\u8D76
\u9A9E
\u86A7
\u814A
\u76C8
\u4E01
\`
\u871A
\u77F8
\u8759
\u7768
\u5693
\u50FB
\u9B3C
\u91B4
\u591C
\u5F5D
\u78CA
\u7B14
\u62D4
\u6800
\u7CD5
\u53A6
\u90B0
\u7EAB
\u902D
\u7EA4
\u7726
\u818A
\u998D
\u8E87
\u70EF
\u863C
\u51AC
\u8BE4
\u6684
\u9AB6
\u54D1
\u7620
\u300D
\u81CA
\u4E15
\u6108
\u54B1
\u87BA
\u64C5
\u8DCB
\u640F
\u786A
\u8C04
\u7B20
\u6DE1
\u563F
\u9A85
\u8C27
\u9F0E
\u768B
\u59DA
\u6B7C
\u8822
\u9A7C
\u8033
\u80EC
\u631D
\u6DAF
\u72D7
\u84BD
\u5B53
\u72B7
\u51C9
\u82A6
\u7BB4
\u94E4
\u5B64
\u561B
\u5764
V
\u8334
\u6726
\u631E
\u5C16
\u6A59
\u8BDE
\u6434
\u7887
\u6D35
\u6D5A
\u5E1A
\u870D
\u6F2F
\u67D8
\u568E
\u8BBD
\u82AD
\u8364
\u54BB
\u7960
\u79C9
\u8DD6
\u57C3
\u5413
\u7CEF
\u7737
\u9992
\u60F9
\u5A3C
\u9C91
\u5AE9
\u8BB4
\u8F6E
\u77A5
\u9776
\u891A
\u4E4F
\u7F24
\u5B8B
\u5E27
\u5220
\u9A71
\u788E
\u6251
\u4FE9
\u4FC4
\u504F
\u6DA3
\u7AF9
\u5671
\u7699
\u4F70
\u6E1A
\u5527
\u65A1
#
\u9549
\u5200
\u5D0E
\u7B50
\u4F63
\u592D
\u8D30
\u80B4
\u5CD9
\u54D4
\u827F
\u5310
\u727A
\u955B
\u7F18
\u4EE1
\u5AE1
\u52A3
\u67B8
\u5800
\u68A8
\u7C3F
\u9E2D
\u84B8
\u4EA6
\u7A3D
\u6D74
{
\u8862
\u675F
\u69F2
j
\u9601
\u63CD
\u75A5
\u68CB
\u6F4B
\u806A
\u7A9C
\u4E53
\u775B
\u63D2
\u5189
\u962A
\u82CD
\u643D
\u300C
\u87FE
\u879F
\u5E78
\u4EC7
\u6A3D
\u6482
\u6162
\u8DE4
\u5E54
\u4FDA
\u6DC5
\u8983
\u89CA
\u6EB6
\u5996
\u5E1B
\u4FA8
\u66F0
\u59BE
\u6CD7
\xB7
\uFF1A
\u7018
\u98A8
\xCB
\uFF08
\uFF09
\u2236
\u7D05
\u7D17
\u746D
\u96F2
\u982D
\u9D8F
\u8CA1
\u8A31
\u2022
\xA5
\u6A02
\u7117
\u9E97
\u2014
\uFF1B
\u6ED9
\u6771
\u69AE
\u7E6A
\u8208
\u2026
\u9580
\u696D
\u03C0
\u694A
\u570B
\u9867
\xE9
\u76E4
\u5BF3
\u039B
\u9F8D
\u9CF3
\u5CF6
\u8A8C
\u7DE3
\u7D50
\u92AD
\u842C
\u52DD
\u794E
\u749F
\u512A
\u6B61
\u81E8
\u6642
\u8CFC
\uFF1D
\u2605
\u85CD
\u6607
\u9435
\u89C0
\u52C5
\u8FB2
\u8072
\u756B
\u517F
\u8853
\u767C
\u5289
\u8A18
\u5C08
\u8011
\u5712
\u66F8
\u58F4
\u7A2E
\u039F
\u25CF
\u8900
\u865F
\u9280
\u532F
\u655F
\u9518
\u8449
\u6A6A
\u5EE3
\u9032
\u8484
\u947D
\u961D
\u7959
\u8CA2
\u934B
\u8C4A
\u592C
\u5586
\u5718
\u95A3
\u958B
\u71C1
\u8CD3
\u9928
\u9161
\u6C94
\u9806
\uFF0B
\u785A
\u52B5
\u9978
\u967D
\u8ECA
\u6E53
\u5FA9
\u840A
\u6C23
\u8ED2
\u83EF
\u5803
\u8FEE
\u7E9F
\u6236
\u99AC
\u5B78
\u88E1
\u96FB
\u5DBD
\u7368
\u30DE
\u30B7
\u30B5
\u30B8
\u71D8
\u88AA
\u74B0
\u2764
\u81FA
\u7063
\u5C02
\u8CE3
\u5B56
\u8056
\u651D
\u7DDA
\u25AA
\u03B1
\u50A2
\u4FEC
\u5922
\u9054
\u838A
\u55AC
\u8C9D
\u85A9
\u528D
\u7F85
\u58D3
\u68DB
\u9966
\u5C03
\u7488
\u56CD
\u91AB
\uFF27
\uFF29
\uFF21
\uFF03
\uFF2E
\u9DC4
\u9AD9
\u5B30
\u5553
\u7D04
\u96B9
\u6F54
\u8CF4
\u85DD
\uFF5E
\u5BF6
\u7C63
\u9EBA
\u3000
\u5DBA
\u221A
\u7FA9
\u7DB2
\u5CE9
\u9577
\u2227
\u9B5A
\u6A5F
\u69CB
\u2461
\u9CEF
\u5049
\uFF2C
\uFF22
\u365F
\u7575
\u9D3F
\uFF07
\u8A69
\u6E9D
\u569E
\u5C4C
\u85D4
\u4F67
\u73A5
\u862D
\u7E54
\uFF11
\uFF13
\uFF19
\uFF10
\uFF17
\u9EDE
\u782D
\u9D28
\u92EA
\u9298
\u5EF3
\u5F0D
\u2027
\u5275
\u6E6F
\u5776
\u2103
\u5369
\u9A9D
\uFF06
\u70DC
\u8358
\u7576
\u6F64
\u625E
\u4FC2
\u61F7
\u78B6
\u9485
\u86A8
\u8BA0
\u2606
\u53E2
\u7232
\u57D7
\u6DAB
\u5857
\u2192
\u697D
\u73FE
\u9BE8
\u611B
\u746A
\u923A
\u5FC4
\u60B6
\u85E5
\u98FE
\u6A13
\u8996
\u5B6C
\u318D
\u71DA
\u82EA
\u5E2B
\u2460
\u4E3C
\u953D
\u2502
\u97D3
\u6A19
\xE8
\u5152
\u958F
\u530B
\u5F35
\u6F22
\xDC
\u9AEA
\u6703
\u9591
\u6A94
\u7FD2
\u88DD
\u306E
\u5CEF
\u83D8
\u8F1D
\u0418
\u96DE
\u91E3
\u5104
\u6D50
\uFF2B
\uFF2F
\uFF32
\uFF18
\uFF28
\uFF25
\uFF30
\uFF34
\uFF37
\uFF24
\uFF33
\uFF23
\uFF2D
\uFF26
\u59CC
\u9979
\xBB
\u665E
\u5EF0
\xE4
\u5D6F
\u9DF9
\u8CA0
\u98F2
\u7D72
\u519A
\u6957
\u6FA4
\u7DAB
\u5340
\u274B
\u2190
\u8CEA
\u9751
\u63DA
\u2462
\u6EEC
\u7D71
\u7523
\u5354
\uFE51
\u4E78
\u7550
\u7D93
\u904B
\u969B
\u6D3A
\u5CBD
\u70BA
\u7CB5
\u8AFE
\u5D0B
\u8C50
\u7881
\u0254
\uFF36
\uFF12
\uFF16
\u9F4B
\u8AA0
\u8A02
\xB4
\u52D1
\u96D9
\u9673
\u7121
\xED
\u6CE9
\u5A84
\u590C
\u5202
\uFF49
\uFF43
\uFF54
\uFF4F
\uFF52
\uFF41
\u5622
\u8004
\u71F4
\u6683
\u58FD
\u5ABD
\u9748
\u62BB
\u9AD4
\u553B
\xC9
\u51AE
\u7539
\u93AE
\u9326
\u028C
\u871B
\u8804
\u5C13
\u99D5
\u6200
\u98EC
\u9039
\u502B
\u8CB4
\u6975
\u042F
\u0419
\u5BEC
\u78DA
\u5DAA
\uF92C
\u8077
\uFF5C
\u9593
\uFF4E
\uFF44
\u524E
\u4F08
\u8AB2
\u98DB
\u6A4B
\u760A
\u2116
\u8B5C
\u9A93
\u5717
\u6ED8
\u7E23
\u7CBF
\u5485
\u990A
\u6FE4
\u5F73
\xAE
\uFF05
\u2161
\u5570
\u3D2A
\u898B
\u77DE
\u85AC
\u7CC1
\u90A8
\u9CAE
\u9854
\u7F71
\u0417
\u9078
\u8A71
\u8D0F
\u6C2A
\u4FF5
\u7AF6
\u7469
\u7E61
\u67B1
\u03B2
\u7D89
\xE1
\u7345
\u723E
\u2122
\u9EB5
\u620B
\u6DE9
\u5FB3
\u500B
\u5287
\u5834
\u52D9
\u7C21
\u5BF5
\uFF48
\u5BE6
\u81A0
\u8F71
\u5716
\u7BC9
\u5623
\u6A39
\u3E03
\u71DF
\u8035
\u5B6B
\u9943
\u913A
\u98EF
\u9EAF
\u9060
\u8F38
\u576B
\u5B43
\u4E5A
\u9583
\u93E2
\u33A1
\u984C
\u5EE0
\u95DC
\u2191
\u723A
\u5C07
\u8ECD
\u9023
\u7BE6
\u898C
\u53C3
\u7BB8
\uFF0D
\u7AA0
\u68FD
\u5BD5
\u5900
\u7230
\u6B50
\u5459
\u95A5
\u9821
\u71B1
\u96CE
\u579F
\u88DF
\u51EC
\u52C1
\u5E11
\u9995
\u5906
\u758C
\u67BC
\u99AE
\u8CA8
\u84A4
\u6A38
\u5F67
\u65F8
\u975C
\u9FA2
\u66A2
\u3431
\u9CE5
\u73FA
\u93E1
\u7061
\u722D
\u5837
\u5EDA
\xD3
\u9A30
\u8A3A
\u2505
\u8607
\u8914
\u51F1
\u9802
\u8C55
\u4E9E
\u5E25
\u562C
\u22A5
\u4EFA
\u6856
\u8907
\u9963
\u7D61
\u7A42
\u984F
\u68DF
\u7D0D
\u258F
\u6FDF
\u89AA
\u8A2D
\u8A08
\u6535
\u57CC
\u70FA
\xF2
\u9824
\u71E6
\u84EE
\u64BB
\u7BC0
\u8B1B
\u6FF1
\u6FC3
\u5A3D
\u6D33
\u673F
\u71C8
\u9234
\u8B77
\u819A
\u94D4
\u904E
\u88DC
\uFF3A
\uFF35
\uFF15
\uFF14
\u574B
\u95FF
\u459D
\u9918
\u7F10
\u94DE
\u8CBF
\u94EA
\u687C
\u8D99
\u934A
\uFF3B
\u3402
\u579A
\u83D3
\u63F8
\u6372
\u9418
\u6ECF
\u{231C9}
\u720D
\u8F2A
\u71DC
\u9D3B
\u9BAE
\u52D5
\u9E5E
\u9DD7
\u4E04
\u6176
\u924C
\u7FE5
\u98EE
\u8178
\u21CB
\u6F01
\u89BA
\u4F86
\u7198
\u6634
\u7FCF
\u9CB1
\u5727
\u9109
\u842D
\u9814
\u7210
\u5ADA
\u0433
\u8CAD
\u985E
\u806F
\u5E5B
\u8F15
\u8A13
\u9452
\u590B
\u9528
\u8283
\u73E3
\u4749
\u6259
\u5D50
\u92B7
\u8655
\u3131
\u8A9E
\u8A98
\u82DD
\u6B78
\u5100
\u71D2
\u697F
\u5167
\u7CA2
\u8452
\u5967
\u9EA5
\u793B
\u6EFF
\u8814
\u7A75
\u77AD
\u614B
\u9C6C
\u699E
\u7842
\u912D
\u9EC3
\u7159
\u7950
\u5953
\u903A
\uFF0A
\u7444
\u7372
\u805E
\u85A6
\u8B80
\u9019
\u6A23
\u6C7A
\u554F
\u555F
\u5011
\u57F7
\u8AAC
\u8F49
\u55AE
\u96A8
\u5518
\u5E36
\u5009
\u5EAB
\u9084
\u8D08
\u5C19
\u76BA
\u25A0
\u9905
\u7522
\u25CB
\u2208
\u5831
\u72C0
\u6953
\u8CE0
\u742F
\u55EE
\u79AE
\uFF40
\u50B3
\uFF1E
\u2264
\u55DE
\u03A6
\u2265
\u63DB
\u54AD
\u2223
\u2193
\u66EC
\u03B5
\u5FDC
\u5BEB
\u2033
\u7D42
\u69D8
\u7D14
\u8CBB
\u7642
\u8068
\u51CD
\u58D0
\u90F5
\xFC
\u9ED2
\u222B
\u88FD
\u584A
\u8ABF
\u8EFD
\u78BA
\u6483
\u7D1A
\u99B4
\u2162
\u6D87
\u7E79
\u6578
\u78BC
\u8B49
\u72D2
\u51E6
\u5291
\uFF1C
\u6667
\u8CC0
\u8846
\uFF3D
\u6AE5
\u5169
\u9670
\u7D76
\u5C0D
\u9BC9
\u61B6
\u25CE
\uFF50
\uFF45
\uFF39
\u8552
\u7156
\u9813
\u6E2C
\u8A66
\u9F3D
\u50D1
\u78A9
\u599D
\u5E2F
\u2248
\u9421
\u8216
\u6B0A
\u55AB
\u5006
\u02CB
\u8A72
\u6085
\u0101
\u4FEB
\uFF0E
\uFF46
\uFF53
\uFF42
\uFF4D
\uFF4B
\uFF47
\uFF55
\uFF4A
\u8CBC
\u6DE8
\u6FD5
\u91DD
\u9069
\u5099
\uFF4C
\uFF0F
\u7D66
\u8B22
\u5F37
\u89F8
\u885B
\u8207
\u2299
\uFF04
\u7DEF
\u8B8A
\u2474
\u2475
\u2476
\u338F
\u6BBA
\u2229
\u5E5A
\u2500
\u50F9
\u25B2
\u96E2
\xFA
\xF3
\u98C4
\u70CF
\u95A2
\u959F
\uFE5D
\uFE5E
\u908F
\u8F2F
\u9375
\u9A57
\u8A23
\u5C0E
\u6B77
\u5C46
\u5C64
\u25BC
\u5131
\u9304
\u71B3
\u0113
\u8266
\u540B
\u9336
\u8FA7
\u98FC
\u986F
\u2463
\u79A6
\u8CA9
\u6C17
\u5BFE
\u67B0
\u95A9
\u7D00
\u5E79
\u7793
\u8C8A
\u6DDA
\u25B3
\u771E
\u588A
\u03A9
\u737B
\u8932
\u7E2B
\u7DD1
\u4E9C
\u9245
\u9920
\uFF5B
\uFF5D
\u25C6
\u8606
\u8588
\u2588
\u25C7
\u6EAB
\u5F48
\u6673
\u7CA7
\u72B8
\u7A69
\u8A0A
\u5D2C
\u51D6
\u71A5
\u041F
\u820A
\u689D
\u7D0B
\u570D
\u2163
\u7B46
\u5C37
\u96E3
\u96DC
\u932F
\u7D81
\u8B58
\u9830
\u9396
\u8276
\u25A1
\u6B81
\u6BBC
\u2467
\u251C
\u2595
\u9D6C
\u01D0
\u014D
\u01D2
\u7CDD
\u7DB1
\u258E
\u03BC
\u76DC
\u9945
\u91AC
\u7C64
\u84CB
\u91C0
\u9E7D
\u64DA
\xE0
\u0261
\u8FA6
\u25E5
\u5F50
\u250C
\u5A66
\u7378
\u9CA9
\u4F31
\u012B
\u849F
\u84BB
\u9F4A
\u8886
\u8166
\u5BE7
\u51C8
\u59B3
\u7165
\u8A62
\u507D
\u8B39
\u556B
\u9BFD
\u9A37
\u9C78
\u640D
\u50B7
\u93BB
\u9AEE
\u8CB7
\u518F
\u5125
\u4E21
\uFE62
\u221E
\u8F09
\u55B0
\uFF5A
\u7F99
\u60B5
\u71D9
\u66C9
\u54E1
\u7D44
\u5FB9
\u8277
\u75E0
\u92FC
\u9F19
\u7E2E
\u7D30
\u5692
\u722F
\u2260
\u7DAD
\uFF02
\u9C7B
\u58C7
\u538D
\u5E30
\u6D65
\u7287
\u85A1
\u8ECE
\xB2
\u61C9
\u919C
\u522A
\u7DFB
\u9DB4
\u8CDC
\u5641
\u8ECC
\u5C28
\u9554
\u9DFA
\u69D7
\u5F4C
\u845A
\u6FDB
\u8ACB
\u6E87
\u7DF9
\u8CE2
\u8A2A
\u7374
\u7445
\u8CC7
\u7E24
\u9663
\u855F
\u6822
\u97FB
\u797C
\u6041
\u4F22
\u8B1D
\u5283
\u6D91
\u7E3D
\u8856
\u8E3A
\u780B
\uF979
\u7C43
\u99FF
\u82FC
\u760B
\u663D
\u7D21
\u9A4A
\u814E
\uFE57
\u97FF
\u674B
\u525B
\u56B4
\u79AA
\u6B53
\u69CD
\u5098
\u6AB8
\u6AAB
\u70A3
\u52E2
\u93DC
\u93A2
\u9291
\u5C10
\u6E1B
\u596A
\u60E1
\u03B8
\u50EE
\u5A6D
\u81D8
\u016B
\xEC
\u6BBB
\u9244
\u2211
\u86F2
\u713C
\u7DD6
\u7E8C
\u7D39
\u61EE
`,yr=(function(){function n(t){xr(this,n),Un(this,"ocr_character",void 0),Un(this,"preds_idx",void 0),Un(this,"preds_prob",void 0),this.ocr_character=ko.toString().split(`
`);for(var e=[],r=[],i=6625,u=0;u<t.length;u+=i){var c=t.slice(u,u+i-1),v=Math.max.apply(Math,Te(c)),x=c.indexOf(v);r.push(v),e.push(x)}this.preds_idx=e,this.preds_prob=r}return Tr(n,[{key:"decode",value:function(e,r){for(var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u=this.get_ignored_tokens(),c=[],v=[],x=0;x<e.length;x++)e[x]in u||i&&x>0&&e[x-1]===e[x]||(c.push(this.ocr_character[e[x]-1]),r?v.push(r[x]):v.push(1));var w="",F=0;if(c.length){w=c.join("");var B=0;v.forEach(function(A){B+=A}),F=B/v.length}return{text:w,mean:F}}},{key:"get_ignored_tokens",value:function(){return[0]}},{key:"outputResult",value:function(){return this.decode(this.preds_idx,this.preds_prob,!0)}}]),n})(),br={shape:960,thresh:.3,box_thresh:.6,unclip_ratio:1.5},Cr=960,re=320,ie=48,Mn=document.createElement("canvas"),_t=document.createElement("canvas"),Rt=null,Pt=null;wr(Mn);wr(_t);function wr(n){n.style.position="fixed",n.style.bottom="0",n.style.zIndex="-1",n.style.opacity="0",document.body.appendChild(n)}function Wo(){return Ce.apply(this,arguments)}function Ce(){return Ce=Ie(gt().mark(function n(){var t,e,r,i,u,c,v=arguments;return gt().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return t=v.length>0&&v[0]!==void 0?v[0]:"",e=v.length>1&&v[1]!==void 0?v[1]:"",r="https://js-models.bj.bcebos.com/PaddleOCR/PP-OCRv3/ch_PP-OCRv3_det_infer_js_960/model.json",i="https://js-models.bj.bcebos.com/PaddleOCR/PP-OCRv3/ch_PP-OCRv3_rec_infer_js/model.json",ge.env.set("webgl_pack_output",!0),Rt=new ge.Runner({modelPath:t||r,fill:"#fff",mean:[.485,.456,.406],std:[.229,.224,.225],bgr:!0,webglFeedProcess:!0}),u=Rt.init(),Pt=new ge.Runner({modelPath:e||i,fill:"#000",mean:[.5,.5,.5],std:[.5,.5,.5],bgr:!0,webglFeedProcess:!0}),c=Pt.init(),w.next=11,Promise.all([u,c]);case 11:Rt.feedShape&&(Cr=Rt.feedShape.fw),Pt.feedShape&&(re=Pt.feedShape.fw,ie=Pt.feedShape.fh);case 13:case"end":return w.stop()}},n)})),Ce.apply(this,arguments)}function Uo(n){return we.apply(this,arguments)}function we(){return we=Ie(gt().mark(function n(t){var e,r,i,u,c,v,x,w,F,B,A,N,S,U,$,tn,an,ln,Pn=arguments;return gt().wrap(function(sn){for(;;)switch(sn.prev=sn.next){case 0:return e=Pn.length>1&&Pn[1]!==void 0?Pn[1]:br,r=e.shape?e.shape:Cr,i=e.thresh,u=e.box_thresh,c=e.unclip_ratio,v=r,x=r,Mn.width=v,Mn.height=x,w=Mn.getContext("2d"),w.fillStyle="#fff",w.fillRect(0,0,x,v),F=v,B=x,A=0,N=0,v/x*t.naturalHeight/t.naturalWidth>=1?(F=Math.round(B*t.naturalWidth/t.naturalHeight),A=Math.floor((v-F)/2)):(B=Math.round(F*t.naturalHeight/t.naturalWidth),N=Math.floor((x-B)/2)),w.drawImage(t,A,N,F,B),S=[r,r],sn.next=21,Rt.predict(Mn);case 21:return U=sn.sent,$=new Ro(U,S,i,u,c),tn=$.outputBox(),an=JSON.parse(JSON.stringify(tn.boxes)),ln=8,an&&an.forEach(function(Gn){Gn.forEach(function(Yn,bn){Yn[0]=lt(Math.round(Yn[0]-A)*Math.max(t.naturalWidth,t.naturalHeight)/r+(bn===0?-ln:bn===1||bn===2?ln:-ln),0,t.naturalWidth),Yn[1]=lt(Math.round(Yn[1]-N)*Math.max(t.naturalWidth,t.naturalHeight)/r+(bn===0||bn===1?-ln:ln),0,t.naturalHeight)})}),sn.abrupt("return",an);case 28:case"end":return sn.stop()}},n)})),we.apply(this,arguments)}function jo(n,t,e,r){e.width=t.naturalWidth,e.height=t.naturalHeight;var i=e.getContext("2d");i.drawImage(t,0,0,e.width,e.height),n&&n.forEach(function(u){i.beginPath(),i.strokeStyle=r?.strokeStyle||"#000",i.lineWidth=r?.lineWidth||1,i.fillStyle=r?.fillStyle||"transparent",i.moveTo(u[0][0],u[0][1]),i.lineTo(u[1][0],u[1][1]),i.lineTo(u[2][0],u[2][1]),i.lineTo(u[3][0],u[3][1]),i.fill(),i.closePath(),i.stroke(),i.restore()})}function Ho(n,t){return Ee.apply(this,arguments)}function Ee(){return Ee=Ie(gt().mark(function n(t,e){var r,i,u,c,v,x,w,F,B,A,N,S,U,$,tn,an,ln=arguments;return gt().wrap(function(hn){for(;;)switch(hn.prev=hn.next){case 0:return r=ln.length>2&&ln[2]!==void 0?ln[2]:br,hn.next=3,Uo(t,r);case 3:i=hn.sent,e!=null&&e.canvas&&jo(i,t,e.canvas,e.style),u=Go(i),c=[],v=0;case 8:if(!(v<u.length)){hn.next=39;break}if(x=JSON.parse(JSON.stringify(u[v])),qo(t,x),w=3,F=Math.ceil(Mn.width/re/w),B="",!(F>1)){hn.next=29;break}A=0;case 16:if(!(A<F)){hn.next=27;break}return zo(Mn,Mn.width,Mn.height,A,w),hn.next=20,Pt.predict(_t);case 20:N=hn.sent,S=new yr(N),U=S.outputResult(),B=B.concat(U.text);case 24:A++,hn.next=16;break;case 27:hn.next=35;break;case 29:return hn.next=31,Pt.predict(Mn);case 31:$=hn.sent,tn=new yr($),an=tn.outputResult(),B=B.concat(an.text);case 35:c.push(B);case 36:v++,hn.next=8;break;case 39:return hn.abrupt("return",{text:c,points:i});case 40:case"end":return hn.stop()}},n)})),Ee.apply(this,arguments)}function Go(n){function t(c,v){return c[0][1]-v[0][1]}for(var e=n.sort(t),r=e.length,i=0;i<r-1;i++)if(Math.abs(e[i+1][0][1]-e[i][0][1])<10&&e[i+1][0][0]<e[i][0][0]){var u=e[i];e[i]=e[i+1],e[i+1]=u}return e}function qo(n,t){var e=gr(Math.max(ee(t[0],t[1]),ee(t[2],t[3]))),r=gr(Math.max(ee(t[0],t[3]),ee(t[1],t[2]))),i=[[0,0],[e,0],[e,r],[0,r]],u=on.matFromArray(4,1,on.CV_32FC2,Pr(t)),c=on.matFromArray(4,1,on.CV_32FC2,Pr(i)),v=on.getPerspectiveTransform(u,c),x=on.imread(n),w=new on.Mat,F=new on.Size(e,r);on.warpPerspective(x,w,v,F,on.INTER_CUBIC,on.BORDER_REPLICATE,new on.Scalar);var B=w.matSize[0],A=w.matSize[1],N;if(B/A>=1.5){N=new on.Mat;var S=new on.Size(w.rows,w.cols),U=new on.Point(w.cols/2,w.cols/2),$=on.getRotationMatrix2D(U,90,1);on.warpAffine(w,N,$,S,on.INTER_CUBIC,on.BORDER_REPLICATE,new on.Scalar)}var tn=new on.Mat,an=new on.Size(0,0),ln;N?(ln=ie/N.matSize[0],on.resize(N,tn,an,ln,ln,on.INTER_AREA),N.delete()):(ln=ie/B,on.resize(w,tn,an,ln,ln,on.INTER_AREA)),Mn.width=tn.matSize[1],Mn.height=tn.matSize[0],on.imshow(Mn,tn),x.delete(),w.delete(),tn.delete(),u.delete(),c.delete()}function ee(n,t){return Math.sqrt(Math.pow(n[0]-t[0],2)+Math.pow(n[1]-t[1],2))}function zo(n,t,e){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:3;_t.width=re,_t.height=ie;var u=_t.getContext("2d");u.fillStyle="#fff",u.clearRect(0,0,_t.width,_t.height),u.drawImage(n,-r*re*i,0,t,e)}oe.init=Wo;oe.recognize=Ho});var Jo=Er();globalThis.PaddleOcr=Jo;})();
