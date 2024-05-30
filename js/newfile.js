if("loading"in HTMLImageElement.prototype){let e=document.querySelectorAll('img[loading="lazy"]');e.forEach(e=>{e.src=e.dataset.src})}else{let l=document.createElement("script");l.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(l)}
if("loading"in HTMLIFrameElement.prototype){let s=document.querySelectorAll('iframe[loading="lazy"]');s.forEach(e=>{e.src=e.dataset.src})}else{let a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",document.body.appendChild(a)}




