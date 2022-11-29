import{f as T,r as l,j as e,c as $,a as h}from"./index.83c5b186.js";import{u as J}from"./pageHook.949dc9fe.js";import{T as Y,t as Z,h as C,s as j,E as ee,l as te,m as ae,n as se,q as oe,g as A,r as ne,c as re,d as v,C as ce,a as le,b as ie,u as de,A as q,B as D,I as g,o as ue}from"./InputText.0c92fe19.js";import{b as V,R as me}from"./index.b2bd9335.js";function b(...a){return a.filter(t=>t!=null).reduce((t,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?o:function(...n){t.apply(this,n),o.apply(this,n)}},null)}const pe={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function F(a,t){const o=`offset${a[0].toUpperCase()}${a.slice(1)}`,r=t[o],n=pe[a];return r+parseInt(j(t,n[0]),10)+parseInt(j(t,n[1]),10)}const he={[ee]:"collapse",[te]:"collapsing",[ae]:"collapsing",[se]:"collapse show"},fe={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:F},H=T.forwardRef(({onEnter:a,onEntering:t,onEntered:o,onExit:r,onExiting:n,className:c,children:i,dimension:m="height",getDimensionValue:s=F,...x},f)=>{const u=typeof m=="function"?m():m,N=l.exports.useMemo(()=>b(p=>{p.style[u]="0"},a),[u,a]),E=l.exports.useMemo(()=>b(p=>{const w=`scroll${u[0].toUpperCase()}${u.slice(1)}`;p.style[u]=`${p[w]}px`},t),[u,t]),d=l.exports.useMemo(()=>b(p=>{p.style[u]=null},o),[u,o]),S=l.exports.useMemo(()=>b(p=>{p.style[u]=`${s(u,p)}px`,oe(p)},r),[r,s,u]),_=l.exports.useMemo(()=>b(p=>{p.style[u]=null},n),[u,n]);return e(Y,{ref:f,addEndListener:Z,...x,"aria-expanded":x.role?x.in:null,onEnter:N,onEntering:E,onEntered:d,onExit:S,onExiting:_,childRef:i.ref,children:(p,w)=>T.cloneElement(i,{...w,className:C(c,i.props.className,he[p],u==="width"&&"collapse-horizontal")})})});H.defaultProps=fe;const xe=H;function L(a,t){return Array.isArray(a)?a.includes(t):a===t}const k=l.exports.createContext({});k.displayName="AccordionContext";const R=k,O=l.exports.forwardRef(({as:a="div",bsPrefix:t,className:o,children:r,eventKey:n,...c},i)=>{const{activeEventKey:m}=l.exports.useContext(R);return t=A(t,"accordion-collapse"),e(xe,{ref:i,in:L(m,n),...c,className:C(o,t),children:e(a,{children:l.exports.Children.only(r)})})});O.displayName="AccordionCollapse";const G=O,Q=l.exports.createContext({eventKey:""});Q.displayName="AccordionItemContext";const B=Q,K=l.exports.forwardRef(({as:a="div",bsPrefix:t,className:o,...r},n)=>{t=A(t,"accordion-body");const{eventKey:c}=l.exports.useContext(B);return e(G,{eventKey:c,children:e(a,{ref:n,...r,className:C(o,t)})})});K.displayName="AccordionBody";const ve=K;function Ne(a,t){const{activeEventKey:o,onSelect:r,alwaysOpen:n}=l.exports.useContext(R);return c=>{let i=a===o?null:a;n&&(Array.isArray(o)?o.includes(a)?i=o.filter(m=>m!==a):i=[...o,a]:i=[a]),r==null||r(i,c),t==null||t(c)}}const U=l.exports.forwardRef(({as:a="button",bsPrefix:t,className:o,onClick:r,...n},c)=>{t=A(t,"accordion-button");const{eventKey:i}=l.exports.useContext(B),m=Ne(i,r),{activeEventKey:s}=l.exports.useContext(R);return a==="button"&&(n.type="button"),e(a,{ref:c,onClick:m,...n,"aria-expanded":i===s,className:C(o,t,!L(s,i)&&"collapsed")})});U.displayName="AccordionButton";const X=U,z=l.exports.forwardRef(({as:a="h2",bsPrefix:t,className:o,children:r,onClick:n,...c},i)=>(t=A(t,"accordion-header"),e(a,{ref:i,...c,className:C(o,t),children:e(X,{onClick:n,children:r})})));z.displayName="AccordionHeader";const ye=z,P=l.exports.forwardRef(({as:a="div",bsPrefix:t,className:o,eventKey:r,...n},c)=>{t=A(t,"accordion-item");const i=l.exports.useMemo(()=>({eventKey:r}),[r]);return e(B.Provider,{value:i,children:e(a,{ref:c,...n,className:C(o,t)})})});P.displayName="AccordionItem";const ge=P,W=l.exports.forwardRef((a,t)=>{const{as:o="div",activeKey:r,bsPrefix:n,className:c,onSelect:i,flush:m,alwaysOpen:s,...x}=ne(a,{activeKey:"onSelect"}),f=A(n,"accordion"),u=l.exports.useMemo(()=>({activeEventKey:r,onSelect:i,alwaysOpen:s}),[r,i,s]);return e(R.Provider,{value:u,children:e(o,{ref:t,...x,className:C(c,f,m&&`${f}-flush`)})})});W.displayName="Accordion";const I=Object.assign(W,{Button:X,Collapse:G,Item:ge,Header:ye,Body:ve}),Ce=(a,t=!0,o)=>{const[r,n]=l.exports.useState(0),[c,i]=l.exports.useState(""),[m,s]=l.exports.useState(),[x,f]=l.exports.useState(),[u,N]=l.exports.useState(!1),E=async()=>{N(!0);try{let d;t?d=await $.post(a,o):d=await $.get(a),n(d==null?void 0:d.code),i(d==null?void 0:d.results),d!=null&&d.error?f(d==null?void 0:d.message):s(d==null?void 0:d.message)}catch(d){f(d)}N(!1)};return l.exports.useEffect(()=>{E()},[]),{status:r,statusText:c,data:m,error:x,loading:u}},Ee={document:"",first_name:"",last_name:"",email:"",phone:"",cell_phone:"",city:"",reason:"",message:"",recaptcha_response:""},we=re().shape({document:v().required("Numero de documento requerido").max(9999999999,"Documento maximo de 10 digitos").typeError("Docuemento es invalido"),cell_phone:v().required("Numero de telefono requerido").matches(/^([8]{0,1}[0-9]{0,9})$/,{message:"Celular invalido",excludeEmptyString:!1}).typeError("Numero de telefono es invalido"),first_name:v().required("Nombres es requerido"),last_name:v().required("Apellidos es requerido"),message:v().required("Mensaje es requerido"),city:v().required("Ciudad es requerido"),email:v().required("Email es requerido").email("Email invalido"),reason:v().required("Motivo es requerido"),recaptcha_response:v().required("El token recaptcha es requerido")});function Ae(a=[]){return $.post("download",a)}const be=({name:a,control:t,defaultValue:o,readOnly:r=!1,label:n,placeHolder:c=n,errorMessage:i,rules:m})=>e(ce,{name:a,control:t,defaultValue:o,rules:m,render:({field:s})=>h(V.Group,{className:"rounded-pill",children:[e(le,{className:"mb-1",htmlFor:"outlined-adornment-"+a,id:"outlined-adornment-label-"+a,children:n}),e(V.Control,{...s,id:"outlined-adornment-"+a,name:a,as:"textarea",style:{height:"100px"},placeholder:c,isInvalid:!!i,readOnly:r}),i&&e(ie.Feedback,{type:"invalid",id:"standard-weight-helper-text-"+a,children:i})]})}),Ie=()=>{var f,u,N,E,d,S,_,p,w;J("Contactenos / PQR"),window.dataLayer.push({event:"pageview",page:{url:"/site/contacts",title:"Contactenos / PQR"}});const a=(f=Ce("questions",!1).data)!=null?f:[],[t,o]=l.exports.useState(!1),[r,n]=l.exports.useState(!1),{control:c,handleSubmit:i,reset:m,formState:{errors:s}}=de({resolver:ue(we)});l.exports.useEffect(()=>{(t||r)&&setTimeout(()=>{o(!1),n(!1)},8050)},[t,r]);const x=async M=>{await Ae(M).then(function(y){(y==null?void 0:y.status)==="success"?(o(!0),m(Ee)):n(!0)}).catch(function(y){n(!0)})};return h("div",{className:"container",children:[e("div",{className:"row my-lg-5 mt-5 mb-3",children:e("div",{className:"text-center",children:e("h1",{className:"hcampa",children:"Cont\xE1ctenos / PQR"})})}),e("div",{className:"box-home mx-auto",children:h("div",{className:"row mt-4",children:[e("div",{className:"col-sm-6 px-4",children:e("div",{className:"",id:"accordionpqr",children:a.map((M,y)=>e(I,{className:"mb-2",children:h(I.Item,{className:"rounded-pill",eventKey:"index"+y,children:[e(I.Header,{className:"rounded-pill",children:M.name}),e(I.Body,{children:M.description})]})},"indexss"+y))})}),e("div",{className:"col-sm-6 px-4",children:h("form",{className:"fHome",onSubmit:i(x),children:[h(q,{show:t,variant:"success",children:[e(q.Heading,{children:"Mensaje Envido"}),e("p",{children:"Su mensaje ha sido envido correctamente, en breve nuestro equipo de trabajo se pondr\xE1 en contacto con usted."}),e("hr",{}),e("div",{className:"d-flex justify-content-end",children:e(D,{onClick:()=>o(!1),variant:"outline-success",children:"Continuar"})})]}),h(q,{show:r,variant:"danger",children:[e(q.Heading,{children:"Error Enviado Mensaje"}),e("p",{children:"Su mensaje de contacto no ha podido llegar a su destino, por favor intente enviarlo m\xE1s tarde."}),e("hr",{}),e("div",{className:"d-flex justify-content-end",children:e(D,{onClick:()=>n(!1),variant:"outline-danger",children:"Continuar"})})]}),e(me,{control:c,name:"recaptcha_response"}),e("div",{className:"row mb-3",children:e("div",{className:"col-sm",children:e(g,{control:c,name:"reason",label:"Motivo para contactarnos",errorMessage:(u=s==null?void 0:s.reason)==null?void 0:u.message,defaultValue:""})})}),h("div",{className:"row mb-3",children:[e("div",{className:"col-sm",children:e(g,{control:c,name:"document",errorMessage:(N=s==null?void 0:s.document)==null?void 0:N.message,label:"* Numero de Documento",placeholder:"___._______._",mask:"999-9999999-9",defaultValue:""})}),e("div",{className:"col-sm",children:e(g,{control:c,name:"first_name",label:"Nombres",errorMessage:(E=s==null?void 0:s.first_name)==null?void 0:E.message,defaultValue:""})})]}),h("div",{className:"row mb-3",children:[e("div",{className:"col-sm",children:e(g,{control:c,name:"last_name",label:"Apellidos",errorMessage:(d=s==null?void 0:s.last_name)==null?void 0:d.message,defaultValue:""})}),e("div",{className:"col-sm",children:e(g,{control:c,name:"cell_phone",label:"T\xE9lefono",errorMessage:(S=s==null?void 0:s.cell_phone)==null?void 0:S.message,defaultValue:""})})]}),h("div",{className:"row mb-3",children:[e("div",{className:"col-sm",children:e(g,{control:c,type:"email",name:"email",label:"Correo",errorMessage:(_=s==null?void 0:s.email)==null?void 0:_.message,defaultValue:""})}),e("div",{className:"col-sm",children:e(g,{control:c,type:"text",name:"city",label:"Ciudad",errorMessage:(p=s==null?void 0:s.city)==null?void 0:p.message,defaultValue:""})})]}),e("div",{className:"row mb-3",children:e("div",{className:"col-sm",children:e(be,{control:c,name:"message",label:"Mensaje",errorMessage:(w=s==null?void 0:s.message)==null?void 0:w.message,defaultValue:""})})}),h("div",{className:"text-center",children:[h("p",{className:"my-3",children:["Los campos marcados ",e("span",{children:"*"})," son obligatorios"]}),e("button",{className:"btn btn-primary",type:"submit",children:"Enviar"})]})]})})]})}),e("div",{className:"text-center mt-5",children:e("a",{href:"terminos.html",className:"footLogin",children:"Aplican t\xE9rminos y condiciones"})}),e("br",{})]})};export{Ie as default};
