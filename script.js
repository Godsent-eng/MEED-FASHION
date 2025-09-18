  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Purchase buttons open WhatsApp with prefilled item
  const phone = '2348124072418'; // international format without + sign
  document.querySelectorAll('.card .btn').forEach(btn=>{
    // only attach to buttons with data-item
    const item = btn.getAttribute('data-item');
    if(item){
      btn.addEventListener('click', ()=>{
        const message = encodeURIComponent(`Hello Meed Fashion Creation, I would like to purchase: ${item}. Please send price and delivery details.`);
        const url = `https://wa.me/${phone}?text=${message}`;
        window.open(url, '_blank', 'noopener');
      });
    }
  });

  // Accessibility: keyboard focus visible for buttons/links
  (function(){
    const style = document.createElement('style');
    style.innerHTML = 'a:focus, button:focus {outline:3px solid rgba(244,162,97,0.35);outline-offset:2px}';
    document.head.appendChild(style);
  })();