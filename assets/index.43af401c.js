import{j as l,r as i,R as u,a as h}from"./vendor.f1c2d87c.js";const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};p();const s=l.exports.jsx,d=l.exports.jsxs,f=({monster:o})=>d("div",{className:"card-container",children:[s("img",{src:`https://robohash.org/${o.id}?set=set2`,alt:"monster-image"}),s("h2",{children:o.name}),s("p",{children:o.email})]}),m=({monsters:o})=>s("div",{className:"card-list",children:o.map(n=>s(f,{monster:n},n.id))});const g=({placeholder:o,handleChange:n})=>s("input",{className:"search",type:"search",placeholder:o,onChange:n});function x(){const[o,n]=i.exports.useState([]),[a,c]=i.exports.useState(""),e=r=>{c(r.target.value)};i.exports.useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users").then(r=>r.json()).then(r=>n(r))},[]);const t=o.filter(r=>r.name.toLowerCase().includes(a.toLowerCase()));return d("div",{className:"App",children:[s("h1",{children:"Monsters Rolodex"}),s(g,{placeholder:"Search a monster...",handleChange:e}),s(m,{monsters:t})]})}u.render(s(h.StrictMode,{children:s(x,{})}),document.getElementById("root"));