import{g as v,c as R,u as U,r as E,j as t,a as r,b as S,L as k}from"./index.25e093b4.js";import{u as q}from"./pageHook.57763da8.js";import{c as O,d as A,u as T,o as B,A as j,I as C,B as L}from"./InputText.ed88e63e.js";import{S as F}from"./Spinner.9aeb3a64.js";const D=O().shape({email:A().email("Email invalido").required("El campo email es requerido").typeError("El campo email es requerido"),phone:A().matches(/^([8]{0,1}[0-9]{0,9})$/,{message:"Celular invalido",excludeEmptyString:!1}).required("El campo email es requerido").typeError("El campo email es requerido")});var M={exports:{}};(function(p,N){(function(g,d){d()})(v,function(){function g(e,a){return typeof a>"u"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function d(e,a,l){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,a,l)},o.onerror=function(){console.error("could not download file")},o.send()}function y(e){var a=new XMLHttpRequest;a.open("HEAD",e,!1);try{a.send()}catch{}return 200<=a.status&&299>=a.status}function u(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof v=="object"&&v.global===v?v:void 0,h=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(e,a,l){var o=i.URL||i.webkitURL,s=document.createElement("a");a=a||e.name||"download",s.download=a,s.rel="noopener",typeof e=="string"?(s.href=e,s.origin===location.origin?u(s):y(s.href)?d(e,a,l):u(s,s.target="_blank")):(s.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(s.href)},4e4),setTimeout(function(){u(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,l){if(a=a||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(g(e,l),a);else if(y(e))d(e,a,l);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){u(o)})}}:function(e,a,l,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return d(e,a,l);var s=e.type==="application/octet-stream",w=/constructor/i.test(i.HTMLElement)||i.safari,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||s&&w||h)&&typeof FileReader<"u"){var n=new FileReader;n.onloadend=function(){var m=n.result;m=b?m:m.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=m:location=m,o=null},n.readAsDataURL(e)}else{var x=i.URL||i.webkitURL,f=x.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout(function(){x.revokeObjectURL(f)},4e4)}});i.saveAs=c.saveAs=c,p.exports=c})})(M);function H(p=[]){return R.get("download",{responseType:"blob"})}const I=({isShow:p=!1,onClose:N})=>{var w,b;q("Reenviar Codigo");const g=U(n=>n.user),[d,y]=E.exports.useState(!1),[u,i]=E.exports.useState(""),[h,c]=E.exports.useState(!1),{control:e,handleSubmit:a,formState:{errors:l}}=T({resolver:B(D)}),o=async n=>{g.user.email==n.email&&g.user.phone==n.phone?y(!0):i("Los datos ingresados no coinciden")},s=async()=>{c(!0),H().then(function(n){var f,m;if((f=n==null?void 0:n.data)!=null&&f.error)i((m=n==null?void 0:n.data)==null?void 0:m.message),c(!1);else{console.log(n.type);var x=new Blob([n],{type:"application/pdf"});M.exports.saveAs(x,"coupon.pdf"),c(!1),n instanceof File?console.log("IS un BLOB"):console.log(n==null?void 0:n.data)}}).catch(function(n){i(n==null?void 0:n.message),c(!1)})};return t("div",{className:"modal fade "+(p?"show":""),id:"bonoModal","aria-labelledby":"bonoModalLabel","aria-hidden":"true",children:t("div",{className:"modal-dialog",children:r("div",{className:"modal-content",children:[r(j,{show:u!=="",variant:"warning",onClose:()=>i(""),dismissible:!0,children:[t(j.Heading,{children:"Error: "}),t("p",{children:u})]}),!d&&t("div",{className:"modal-body bgLogin",children:r("form",{onSubmit:a(o),className:"w-100 ",children:[t("img",{src:S+"assets/img/bg-mobile.png",className:"d-block d-lg-none img-fluid mb-5",alt:"bacground mobile"}),t("p",{className:"my-4 text-center",children:t("em",{children:"Ingresa el correo y el numero celular registrado previamente."})}),t("div",{className:"form-group p-3",children:t(C,{control:e,name:"phone",errorMessage:(w=l==null?void 0:l.phone)==null?void 0:w.message,label:"* Numero Celular",placeholder:"Aqu\xED tu numero celular",defaultValue:""})}),t("div",{className:"form-group  mb-3 p-3",children:t(C,{control:e,type:"email",name:"email",errorMessage:(b=l==null?void 0:l.email)==null?void 0:b.message,label:"* Correo",placeholder:"Aqu\xED tu Correo",defaultValue:""})}),t("div",{className:"text-center",children:t(L,{type:"submit",className:"btn btn-primary px-5 pb-3 pcampa rounded-pill",children:"Validar"})})]})}),d&&t("div",{className:"modal-body bgLogin",children:r("div",{className:"bgHojasModal",children:[t("img",{src:S+"assets/img/logo-modal.png",className:"img-fluid",alt:"logo modal"}),t("div",{className:"text-center my-2 my-lg-5",children:r(L,{onClick:()=>s(),className:"btn btn-primary px-5 pb-3 pcampa rounded-pill",disabled:h,children:[h&&t(F,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1"}),"Descargar Cupon"]})})]})})]})})})},G=()=>{q("Home");const[p,N]=E.exports.useState(!1);return r("div",{className:"container",children:[t(I,{isShow:p}),r("div",{className:"row my-5",children:[t("div",{className:"col-lg-7 text-center d-flex align-items-center ",children:r("div",{className:"box-home p-3 p-sm-0",children:[t("img",{src:S+"assets/img/yaganaste.png",className:"d-block mx-auto img-fluid",alt:"yaganaste"}),r("p",{className:"tInt",children:["Al correo que registraste hemos enviado un cup\xF3n que deber\xE1s descargar y presentar en cualquier tienda de ",t("span",{children:"Nacional"})," para descrubir tu descuento sorpresa"]}),t("p",{className:"footLogin",children:"Nota: Solo podr\xE1s redimir un bono de decuento semanal (Lun a Dom)"})]})}),t("div",{className:"my-5 mb-5 col-lg-5 d-flex align-items-center mt-sm-5 mt-lg-0 ",children:r("div",{className:"w-100 text-center",children:[r("p",{className:"tInt text-white",children:["Si no te lleg\xF3 el ",t("br",{}),"bono al correo haz"]}),t("div",{className:"text-center my-2 my-lg-5",children:t(L,{onClick:()=>N(!0),className:"btn btn-primary px-5 pb-3 pcampa rounded-pill","data-bs-toggle":"modal","data-bs-target":"#bonoModal",children:"Clic aqu\xED"})}),t(k,{to:"terms",className:"footLogin",children:"Aplican t\xE9rminos y condiciones"})]})})]})]})};export{G as default};