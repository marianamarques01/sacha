/* SACHA · interações compartilhadas */

function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return alert(msg);
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove('show'), 3200);
}

function initAuthTabs(){
  const tabL = document.getElementById('tabLogin');
  const tabS = document.getElementById('tabSignup');
  const fL = document.getElementById('formLogin');
  const fS = document.getElementById('formSignup');
  const title = document.getElementById('authTitle');
  const sub = document.getElementById('authSub');

  function updateAuthCopy(which){
    const login = which === 'login';
    title.innerHTML = login ? t('auth.titleLogin') : t('auth.titleSignup');
    sub.textContent = login ? t('auth.subLogin') : t('auth.subSignup');
  }

  function select(which){
    const login = which === 'login';
    tabL.setAttribute('aria-selected', login);
    tabS.setAttribute('aria-selected', !login);
    fL.classList.toggle('hidden', !login);
    fS.classList.toggle('hidden', login);
    updateAuthCopy(which);
  }
  tabL.addEventListener('click', ()=>select('login'));
  tabS.addEventListener('click', ()=>select('signup'));

  fL.addEventListener('click', (e)=>{
    if(e.target.matches('[data-i18n-forgot-link]')){
      e.preventDefault();
      toast(t('auth.forgotToast'));
    }
  });

  function go(form, nameField){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      if(!form.checkValidity()){ form.reportValidity(); return; }
      const name = nameField ? document.getElementById(nameField).value.trim() : '';
      try{ sessionStorage.setItem('sachaUser', name || t('chat.reader')); }catch(_){}
      document.body.style.transition = 'opacity .45s ease';
      document.body.style.opacity = '0';
      setTimeout(()=>{ window.location.href = 'welcome.html'; }, 450);
    });
  }
  go(fL, null);
  go(fS, 'sName');

  window.onSachaLangApply = ()=>{
    const login = tabL.getAttribute('aria-selected') === 'true';
    updateAuthCopy(login ? 'login' : 'signup');
    document.querySelectorAll('[data-i18n-html="auth.forgot"]').forEach(el=>{
      el.innerHTML = t('auth.forgot');
    });
  };
}
