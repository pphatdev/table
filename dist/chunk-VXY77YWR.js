import{twMerge as d}from"tailwind-merge";var a=class a{constructor(t,n){this.showDataInfo=(t,n,e)=>{let s=`[data-table-id="${this.element.dataset.tableId.replace("group","info")}"]`,i=document.querySelector(s);if(!i)return null;i.innerHTML="";let r=document.createElement("span");r.className="text-sm",r.innerHTML="Showing ",i.appendChild(r);let o=document.createElement("span"),l=document.createElement("span");l.dataset.showFrom=t,l.innerHTML=t,o.appendChild(l);let p=document.createElement("span");p.innerHTML=" to ",o.appendChild(p);let c=document.createElement("span");c.dataset.showTo=e,c.innerHTML=e,o.appendChild(c),o.className="text-sm";let u=document.createElement("span");return u.className="text-sm",u.innerHTML=`
            <span class="text-sm"> of <span data-show-total>${n}</span> entries </span>
        `,i.appendChild(o),i.appendChild(u)};this.LinkNavigation=t=>{this.element.innerHTML="",this.element.appendChild(a.xButton(t.prev,{label:this.paginations.prevous.label,className:this.paginations.prevous.className})),t.items.forEach(n=>this.element.appendChild(a.itemButton(n))),this.element.appendChild(a.xButton(t.next,{label:this.paginations.next.label,className:this.paginations.next.className}))};this.init=()=>{let{buttons:t,currentPage:n,totalPages:e,query:s}=this.buttons.items;this.LinkNavigation(t),this.showDataInfo(n,e,s.limit)};this.element=t,a.callback=this.callback=n.callback,this.buttons=n.buttons,this.paginations={prevous:{label:"Previous"},next:{label:"Next"},...this.buttons.paginations},this.init()}};a.variants=t=>d("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0",t),a.itemButton=t=>{let n=new URLSearchParams(window.location.search),e=document.createElement("button");return e.type="button",e.dataset.setpage=t.label,e.disabled=t.label==="...",e.className=a.variants(t.active?"text-primary border-primary":""),e.textContent=t.label,e.addEventListener("click",s=>{s.preventDefault(),n.set("page",t.label),history.pushState(null,"",`${window.location.pathname}?${n.toString()}`),a.callback()}),e},a.xButton=(t,n)=>{let e=new URLSearchParams(t.url),s=document.createElement("button");return s.dataset.setpage=e.get("page"),s.className=a.variants(),s.disabled=!t.status,s.innerHTML=n.label,s.type="button",s.addEventListener("click",i=>{i.preventDefault(),history.pushState(null,"",`${window.location.pathname}?${e.toString()}`),a.callback()}),s};var m=a;export{m as a};
