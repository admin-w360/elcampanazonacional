import{j as e,a as r,c as C,L as F,u as A,d as E,e as I,r as _,s as T}from"./index.07c8e413.js";import{u as L}from"./pageHook.09c469ae.js";import{C as y,F as S,a as D,b as x,c as k,d as h,e as w,u as R,A as N,I as q,o as U}from"./InputText.6b60274b.js";import{F as V,a as B,R as j}from"./index.41cfe7b9.js";import{B as G}from"./Button.e3d31cd2.js";const P=({name:t,control:s,defaultValue:u,rules:l,errorMessage:n,label:o,options:c})=>e(y,{name:t,control:s,defaultValue:u,rules:l,render:({field:d})=>r(S,{"aria-invalid":!!n,children:[e(D,{className:"mb-1",htmlFor:"outlined-adornment-"+t,children:o}),e(V,{id:"outlined-adornment-"+t,...d,placeholder:o,name:t,className:"rounded-pill",isInvalid:!!n,children:c.map((i,p)=>e("option",{value:i.value,children:i.label},p))}),n&&e(x.Feedback,{type:"invalid",id:"standard-weight-helper-text-"+t,children:n})]})}),O=k().shape({document_type:h().required("Tipo documento es requerido").typeError("Tipo documento invalido"),document:h().required("Documeneto de identidad es requerido").typeError("Documeneto invalido"),accept_term:w(),recaptcha_response:h().required("Recargar la pagina e intente ingresar nuevamente")});function $(t=[]){return C.post("start-session",t)}const H=({name:t,route:s="#",type:u="checkbox",required:l=!1,control:n,defaultValue:o,label:c,errorMessage:d})=>e(y,{name:t,control:n,defaultValue:o,render:({field:i,fieldState:p})=>r(S,{"aria-invalid":!!d,children:[e(B,{type:u,name:t,label:e("div",{className:"px-3",children:r(F,{to:s,children:[l?e("span",{children:"*"}):""," ",c]})}),onChange:i.onChange,onBlur:i.onBlur,value:i.value,className:"d-flex align-items-center "+(p.error?"is-invalid":"")}),d&&e(x.Feedback,{type:"invalid",id:"standard-weight-helper-text-"+t,children:d})]})}),X=()=>{var b,v;L("Inicio de Sesion"),A(m=>m.app);const t=E(),s=I(),[u,l]=_.exports.useState(!1),[n,o]=_.exports.useState(""),{control:c,handleSubmit:d,formState:{errors:i}}=R({resolver:U(O)});return r("div",{className:"box-login-form borderLine shadow px-3 mt-4 m-lg-0",children:[e("nav",{children:e("div",{className:"nav nav-tabs border-0 ",id:"nav-tab",role:"tablist",children:e("button",{className:"btnLogin",id:"nav-login-tab","data-bs-toggle":"tab","data-bs-target":"#nav-login",type:"button",role:"tab","aria-controls":"nav-login","aria-selected":"true",children:"Iniciar sesi\xF3n"})})}),e("div",{className:"tab-content",id:"nav-tabContent",children:r("div",{className:"tab-pane fade show active pt-4 p-4  p-lg-5",id:"nav-login",role:"tabpanel","aria-labelledby":"nav-login-tab",children:[r("h2",{className:"pcampa my-2 my-lg-4 my-sm-5",children:["INGRESA TUS DATOS",e("br",{}),"ACTIVA TU CUP\xD3N",e("br",{}),"DE DESCUENTO."]}),r("form",{onSubmit:d(async m=>{l(!0),$({document:m.document,document_type:m.document_type,recaptcha_response:m.recaptcha_response,accept_term:m.accept_term}).then(function(a){var g,f;a!=null&&a.error?(o(a==null?void 0:a.error),l(!1)):(l(!1),t(T({...a==null?void 0:a.results})),((g=a==null?void 0:a.results)==null?void 0:g.email)==""||((f=a==null?void 0:a.results)==null?void 0:f.email)==null?s("/register"):s("/site",{replace:!0}))}).catch(function(a){o(a.message()),l(!1)})}),children:[e("div",{className:"boxLogin mb-4"}),r("div",{className:"form-group mb-5",children:[r(N,{show:n!=="",variant:"warning",onClose:()=>o(""),dismissible:!0,children:[e(N.Heading,{children:"Error: "}),e("p",{children:n})]}),e(j,{control:c,name:"recaptcha_response"}),e(P,{control:c,name:"document_type",label:"* Tipo de documento",defaultValue:"",options:[{label:"Seleccionar documento",value:""},{label:"Cedula de Ciudadania",value:"CC"},{label:"Pasaporte",value:"PA"}],errorMessage:(b=i==null?void 0:i.document_type)==null?void 0:b.message})]}),e("div",{className:"form-group mb-3",children:e(q,{control:c,name:"document",errorMessage:(v=i==null?void 0:i.document)==null?void 0:v.message,label:"* Numero de Documento",placeholder:"___._______._",mask:"999.9999999.9",defaultValue:""})}),e("div",{className:"form-group my-5",children:e(H,{control:c,name:"accept_term",type:"radio",label:"Acepto t\xE9rminos y condiciones",route:"/sites/terms",defaultValue:!1})}),e("div",{className:"my-4",children:e(G,{className:"btn btn-primary px-5 pb-3 pcampa rounded-pill",type:"submit",children:"INGRESAR"})})]})]})})]})};export{X as default};
