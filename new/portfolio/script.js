const links = document.querySelectorAll('.nav a');
    const ids = [...links].map(a=>a.getAttribute('href'));
    const sections = ids.map(id=>document.querySelector(id));
    const onScroll = () => {
      const y = window.scrollY + 140;
      let activeIndex = 0;
      sections.forEach((s, i)=>{ if(s.offsetTop <= y) activeIndex = i; });
      links.forEach((a,i)=> a.classList.toggle('active', i===activeIndex));
    };
    document.addEventListener('scroll', onScroll);
    onScroll();
      
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.querySelectorAll('.bar > span').forEach(el=>{
            el.style.width = getComputedStyle(el).getPropertyValue('--w');
            el.style.transition = 'width 1.2s ease';
          });
          io.unobserve(e.target);
        }
      })
    },{threshold:0.3});
    document.querySelectorAll('.skills').forEach(s=>io.observe(s));
 document.getElementById('yr').textContent = new Date().getFullYear();
