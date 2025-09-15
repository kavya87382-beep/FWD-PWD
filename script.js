// Skill bar animations

const onVisible = (el, cb) => {

  const obs = new IntersectionObserver(entries => {

    entries.forEach(e => { if (e.isIntersecting) { cb(); obs.disconnect(); } });

  }, {threshold: .3});

  obs.observe(el);

};

// Animate skill bars

document.querySelectorAll('.fill').forEach(bar => {

  onVisible(bar, () => {

    const pct = bar.style.getPropertyValue('--pct') || '80%';

    bar.animate([{width:'0%'}, {width:pct}], {duration:1200, fill:'forwards', easing:'cubic-bezier(.22,1,.36,1)'});

  });

});

// Contact form handler

function handleSubmit(e){

  e.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const msg = document.getElementById('msg').value.trim();

  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);

  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);

  window.location.href = `mailto:your.name@example.com?subject=${subject}&body=${body}`;

  return false;

}

// WhatsApp link update

(function(){

  const whats = document.getElementById('whats');

  const name = () => encodeURIComponent(document.getElementById('name').value.trim() || '');

  const msg  = () => encodeURIComponent(document.getElementById('msg').value.trim() || 'Hello!');

  const phone = '+919789716097'; // your WhatsApp number

  whats.href = `https://wa.me/${phone.replace(/[^\\d]/g,'')}?text=${name()}%20-%20${msg()}`;

  ['name','msg'].forEach(id => document.getElementById(id).addEventListener('input', () => {

    whats.href = `https://wa.me/${phone.replace(/[^\\d]/g,'')}?text=${name()}%20-%20${msg()}`;

  }));

})();

// Dynamic year in footer

document.getElementById('year').textContent = new Date().getFullYear();