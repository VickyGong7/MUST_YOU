import{A as a,r as s}from"./index-yeZGxvQv.js";const c=a("userStore",()=>{const t=s({id:-1,username:"",organization:"",phone:"",enabled:!1}),n=o=>{const r={...t.value,...o};return t.value=r,e(r),r},e=o=>{localStorage.setItem("LOCAL_USER_INFO",JSON.stringify(o)),localStorage.setItem("USER_TOKEN",o.token)};return{userInfo:t,updateUserInfo:n}},{persist:!0}),S=a("actStore",()=>{const t=s([]);return{actInfo:t,updateActInfo:e=>(t.value=e,e)}},{persist:!0});export{S as a,c as u};
