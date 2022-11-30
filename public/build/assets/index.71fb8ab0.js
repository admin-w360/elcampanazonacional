import{f as v,c as F,i as M,r as N,j as t,a as r,b as L,L as k}from"./index.a65edc86.js";import{u as R}from"./pageHook.eaa71b35.js";import{c as O,d as A,u as q,o as B,A as C,I as j,B as S}from"./InputText.fdc4a1e2.js";import{S as T}from"./Spinner.5e542365.js";const D=O().shape({email:A().email("Email invalido").required("El campo email es requerido").typeError("El campo email es requerido"),phone:A().matches(/^([8]{0,1}[0-9]{0,9})$/,{message:"Celular invalido",excludeEmptyString:!1}).required("El campo email es requerido").typeError("El campo email es requerido")});var U={exports:{}};(function(p,E){(function(h,d){d()})(v,function(){function h(e,a){return typeof a>"u"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function d(e,a,i){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,a,i)},o.onerror=function(){console.error("could not download file")},o.send()}function y(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function u(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof v=="object"&&v.global===v?v:void 0,g=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!g?function(e,a,i){var o=l.URL||l.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener",typeof e=="string"?(s.href=e,s.origin===location.origin?u(s):y(s.href)?d(e,a,i):u(s,s.target="_blank")):(s.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(s.href)},4e4),setTimeout(function(){u(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(h(e,i),a);else if(y(e))d(e,a,i);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){u(o)})}}:function(e,a,i,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return d(e,a,i);var s=e.type==="application/octet-stream",x=/constructor/i.test(l.HTMLElement)||l.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||s&&x||g)&&typeof FileReader<"u"){var n=new FileReader;n.onloadend=function(){var m=n.result;m=b?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=m:location=m,o=null},n.readAsDataURL(e)}else{var w=l.URL||l.webkitURL,f=w.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout(function(){w.revokeObjectURL(f)},4e4)}});l.saveAs=c.saveAs=c,p.exports=c})})(U);function H(p=[]){return F.get("download",{responseType:"blob"})}const I=({isShow:p=!1,onClose:E})=>{var x,b;R("Reenviar Codigo");const h=M(n=>n.user),[d,y]=N.exports.useState(!1),[u,l]=N.exports.useState(""),[g,c]=N.exports.useState(!1),{control:e,handleSubmit:a,formState:{errors:i}}=q({resolver:B(D)}),o=async n=>{h.user.email==n.email&&h.user.phone==n.phone?y(!0):l("Los datos ingresados no coinciden")},s=async()=>{c(!0),H().then(function(n){var f,m;if((f=n==null?void 0:n.data)!=null&&f.error)l((m=n==null?void 0:n.data)==null?void 0:m.message),c(!1);else{console.log(n.type);var w=new Blob([n],{type:"application/pdf"});U.exports.saveAs(w,"coupon.pdf"),c(!1),n instanceof File?console.log("IS un BLOB"):console.log(n==null?void 0:n.data)}}).catch(function(n){l(n==null?void 0:n.message),c(!1)})};return t("div",{className:"modal fade "+(p?"show":""),id:"bonoModal","aria-labelledby":"bonoModalLabel","aria-hidden":"true",children:t("div",{className:"modal-dialog",children:r("div",{className:"modal-content",children:[r(C,{show:u!=="",variant:"warning",onClose:()=>l(""),dismissible:!0,children:[t(C.Heading,{children:"Error: "}),t("p",{children:u})]}),!d&&t("div",{className:"modal-body bgLogin",children:r("form",{onSubmit:a(o),className:"w-100 ",children:[t("img",{src:L+"assets/img/bg-mobile.png",className:"d-block d-lg-none img-fluid mb-5",alt:"bacground mobile"}),t("p",{className:"my-4 text-center",children:t("em",{children:"Ingresa el correo y el numero celular registrado previamente."})}),t("div",{className:"form-group p-3",children:t(j,{control:e,name:"phone",errorMessage:(x=i==null?void 0:i.phone)==null?void 0:x.message,label:"* Numero Celular",placeholder:"Aqu\xED tu numero celular",defaultValue:""})}),t("div",{className:"form-group  mb-3 p-3",children:t(j,{control:e,type:"email",name:"email",errorMessage:(b=i==null?void 0:i.email)==null?void 0:b.message,label:"* Correo",placeholder:"Aqu\xED tu Correo",defaultValue:""})}),t("div",{className:"text-center",children:t(S,{type:"submit",className:"btn btn-primary px-5 pb-3 pcampa rounded-pill",children:"Validar"})})]})}),d&&t("div",{className:"modal-body bgLogin",children:r("div",{className:"bgHojasModal",children:[t("img",{src:L+"assets/img/logo-modal.png",className:"img-fluid",alt:"logo modal"}),t("div",{className:"text-center my-2 my-lg-5",children:r(S,{onClick:()=>s(),className:"btn btn-primary px-5 pb-3 pcampa rounded-pill",disabled:g,children:[g&&t(T,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1"}),"Descargar Cupon"]})})]})})]})})})},G=()=>{R("Home"),window.dataLayer.push({event:"pageview",page:{url:"/site/home",title:"Home"}});const[p,E]=N.exports.useState(!1);return r("div",{className:"container",children:[t(I,{isShow:p}),r("div",{className:"row my-5",children:[t("div",{className:"col-lg-7 text-center d-flex align-items-center ",children:r("div",{className:"box-home p-3 p-sm-0",children:[t("img",{src:L+"assets/img/yaganaste.png",className:"d-block mx-auto img-fluid",alt:"yaganaste"}),t("p",{className:"tInt",children:"Hemos enviado tu cup\xF3n de descuento sorpresa al correo que registraste, impr\xEDmelo y util\xEDzalo en cualquiera de nuestras sucursales o en compras online."}),t("div",{className:"text-center my-2 my-lg-4 ",children:t("a",{href:"https://supermercadosnacional.com/",target:"_blank",className:"btn btn-primary px-5 pb-3 mt-1 pcampa rounded-pill",children:"COMPRA AQU\xCD"})}),t("p",{className:"footLogin",children:"Nota: s\xF3lo podr\xE1s redimir un cup\xF3n de descuento por semana."})]})}),t("div",{className:"col-lg-5 d-flex align-items-center mt-sm-5 mt-lg-0 ",children:r("div",{className:"w-100 text-center",children:[r("p",{className:"tInt text-white text-center",children:["\xBFRecibiste t\xFA cup\xF3n de ",t("br",{})," descuento sorpresa?"]}),t("div",{className:"text-center my-2 my-lg-5",children:t(S,{onClick:()=>E(!0),className:"btn btn-primary px-5 pb-3 pcampa rounded-pill","data-bs-toggle":"modal","data-bs-target":"#bonoModal",children:"CLICK AQU\xCD"})}),t(k,{to:"terms",className:"footLogin",children:"Aplican t\xE9rminos y condiciones"})]})})]})]})};export{G as default};
