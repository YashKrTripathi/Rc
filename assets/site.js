const BIZ={name:"R.K. Tech Laser",tag:"Service, Industrial Machinery & Equipment",phone:"9012739246",email:"rktechlaser2025@gmail.com",gstin:"05GSOPK4751G1ZG",
addr:"Kh. No. 77M, Raipur Industrial Area, Opp. Jio Petrol Pump, Bhagwanpur, Roorkee, Uttarakhand"};
const PRODUCTS=[
{id:"fiber-laser-cutting",name:"Fiber Laser Cutting Machine",short:"Fast, precise cutting of steel, stainless steel, aluminium and brass sheets.",
 body:"Fiber laser cutting machines deliver clean edges, tight tolerances and high speed on metal sheets, with low running cost compared with older cutting methods.",
 pts:["Cuts mild steel, stainless steel, aluminium, brass and copper","Narrow kerf and minimal heat-affected zone","Low power consumption and low maintenance","Sheet and sheet-plus-tube configurations on request"]},
{id:"cnc-plasma-cutting",name:"CNC Plasma Cutting Machine",short:"Heavy-duty CNC plasma tables for thick plates at an economical cost.",
 body:"CNC plasma tables are the practical choice for cutting thick plates and structural steel quickly, with nesting software for good material use.",
 pts:["Suited for plates and structural fabrication","Nesting-ready CNC control","Sturdy gantry and table construction","Installation and operator training support"]},
{id:"shearing-press-brake",name:"Shearing & CNC Press Brake Machine",short:"Shearing and bending machines to complete your sheet metal line.",
 body:"Hydraulic shearing and CNC press brake machines for accurate straight cuts and repeatable bends in sheet metal workshops.",
 pts:["Hydraulic shearing machines in various capacities","CNC press brakes with programmable back gauge","Consistent, repeatable bend angles","Service and spares support"]},
{id:"plasma-cutter",name:"Plasma Cutter",short:"Portable plasma cutting machines for workshops and site jobs.",
 body:"Compact plasma cutters for fabrication shops, repair work and maintenance jobs where a quick, clean manual cut is needed.",
 pts:["Portable and easy to operate","Clean cuts on conductive metals","Energy-efficient inverter designs","Consumables available"]},
{id:"welding-machine",name:"Welding Machine",short:"Reliable welding machines for fabrication, repair and production.",
 body:"A range of welding machines for general fabrication and industrial production, chosen to match your material and duty cycle.",
 pts:["MIG, ARC and TIG options","Stable arc and consistent weld quality","Rugged build for workshop use","Guidance on machine selection"]},
{id:"consumables",name:"Plasma & Laser Consumables",short:"Nozzles, lenses, electrodes and spares to keep machines running.",
 body:"Consumables and spare parts for laser and plasma cutting machines, so your production does not stop for small parts.",
 pts:["Laser nozzles, lenses and protective windows","Plasma electrodes, nozzles and shields","Torch parts and accessories","Quick supply and repeat orders"]}];
const page=location.pathname.split("/").pop()||"index.html";
const on=p=>page===p?"on":"";
document.getElementById("hdr").innerHTML=`
<div class="topbar"><div class="wrap"><div><span>📞 <a href="tel:+91${BIZ.phone}">${BIZ.phone}</a></span><span>✉ ${BIZ.email}</span></div><div>📍 Roorkee, Uttarakhand</div></div></div>
<header class="main"><div class="wrap"><a class="logo" href="index.html"><i>RK</i><span>R.K. TECH LASER<small>INDUSTRIAL MACHINERY</small></span></a>
<button class="burger" onclick="document.querySelector('nav').classList.toggle('open')">☰</button>
<nav><ul><li><a class="${on("index.html")}" href="index.html">Home</a></li><li><a class="${on("about.html")}" href="about.html">About Us</a></li>
<li><a class="${on("products.html")}" href="products.html">Products ▾</a><div class="dd">${PRODUCTS.map(p=>`<a href="product.html?id=${p.id}">${p.name}</a>`).join("")}</div></li>
<li><a class="${on("gallery.html")}" href="gallery.html">Gallery</a></li><li><a class="${on("contact.html")}" href="contact.html">Contact Us</a></li>
<li><a class="btn" href="contact.html">Enquire Now</a></li></ul></nav></div></header>`;
document.getElementById("ftr").innerHTML=`
<footer><div class="wrap grid g4"><div><a class="logo" href="index.html"><i>RK</i><span>R.K. TECH LASER</span></a><p style="margin-top:14px;font-size:.92rem">${BIZ.tag}. Laser, plasma, press brake and welding solutions with dependable service.</p></div>
<div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="products.html">Products</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="contact.html">Contact Us</a></li></ul></div>
<div><h4>Contact Info</h4><ul><li>📍 ${BIZ.addr}</li><li>📞 <a href="tel:+91${BIZ.phone}">${BIZ.phone}</a></li><li>✉ ${BIZ.email}</li><li>GSTIN: ${BIZ.gstin}</li></ul></div>
<div><h4>Get In Touch</h4><p style="font-size:.92rem;margin-bottom:14px">Tell us what you need and we will get back to you.</p><a class="btn acc" href="contact.html">Submit Now</a></div></div>
<div class="copy">© 2026 R.K. Tech Laser. All rights reserved.</div></footer>
<a class="wa" href="https://wa.me/91${BIZ.phone}" target="_blank" title="WhatsApp">WA</a>`;
// hero slider
const bg=document.querySelectorAll(".hbg");const sl=document.querySelectorAll(".slide");if(sl.length){let i=0;const d=document.getElementById("dots");
sl.forEach((_,k)=>{const b=document.createElement("b");b.onclick=()=>go(k);d.append(b)});
function go(k){i=k;bg.forEach((s,j)=>s.classList.toggle("on",j==k));sl.forEach((s,j)=>s.classList.toggle("on",j==k));[...d.children].forEach((b,j)=>b.classList.toggle("on",j==k))}
go(0);setInterval(()=>go((i+1)%sl.length),5000)}
// contact form -> WhatsApp
const f=document.getElementById("enq");if(f)f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
const t=`Enquiry from website%0AName: ${v.name}%0APhone: ${v.phone}%0AEmail: ${v.email}%0AMessage: ${v.message}`;
open(`https://wa.me/91${BIZ.phone}?text=${t}`,"_blank")};
