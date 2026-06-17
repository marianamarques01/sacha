/* SACHA · i18n (default: English) */
(function(){
  const STORAGE_KEY = 'sachaLang';
  let lang = 'en';

  const T = {
    en: {
      'page.home.title': 'SACHA — Safe AI-Chatbot Highly Anthropomorphized',
      'page.login.title': 'Sign in · SACHA',
      'page.welcome.title': 'Welcome · SACHA',
      'page.intro.title': 'Introduction · SACHA',
      'page.chat.title': 'Chat with SACHA',
      'meta.home.description': 'SACHA is an educational chatbot: an interactive journey through the mind of Artificial Intelligence.',
      'lang.ariaToPt': 'Switch to Portuguese',
      'lang.ariaToEn': 'Switch to English',
      'nav.home': 'SACHA — home',
      'nav.features': 'Features',
      'nav.about': 'About',
      'nav.support': 'Support',
      'nav.signIn': 'Sign in',
      'hero.eyebrow': 'Safe AI-Chatbot Highly Anthropomorphized',
      'hero.title': 'An interactive journey through the <em>mind</em> of Artificial Intelligence.',
      'hero.lead': 'SACHA is a wise companion for safe AI use. Chat, explore concepts, and discover — from the inside — how chatbots really work.',
      'hero.ctaPrimary': 'Meet SACHA',
      'hero.ctaSecondary': 'Learn more',
      'features.kicker': 'What you\'ll find here',
      'features.title': 'Learning about AI can be <em>a good story</em>',
      'features.desc': 'Three paths to understand Artificial Intelligence with calm, curiosity, and critical thinking.',
      'card1.title': 'Interactive Dialogue',
      'card1.desc': 'Chat with SACHA about Artificial Intelligence and get your questions answered in a guided, welcoming conversation.',
      'card1.alt': 'SACHA mascot chatting animatedly',
      'card2.title': 'Explore Concepts',
      'card2.desc': 'Discover key AI ideas — statistical and probabilistic models — through curated content and examples.',
      'card2.alt': 'SACHA mascot pointing upward with a book',
      'card3.title': 'Interactive Experiences',
      'card3.desc': 'Engage with AI through guided conversations and dynamic activities within the app itself.',
      'card3.alt': 'SACHA mascot sitting and reading a book',
      'about.kicker': 'About the project',
      'about.title': 'Behind the curtain <em>of AI</em>',
      'about.p1': 'SACHA was created to look Artificial Intelligence in the eye — without mystification. On this learning journey, you will:',
      'about.li1': 'Discover how AI works through statistical and probabilistic models;',
      'about.li2': 'Explore the idea of Artificial Intelligence as a metaphor;',
      'about.li3': 'Critically examine the most common perceptions about chatbots.',
      'about.p2': 'All of this in the company of a mascot who loves books, a quill, and a good cup of coffee.',
      'about.alt': 'Thoughtful SACHA mascot with hand on chin',
      'support.kicker': 'A project supported by',
      'support.title': 'Research and education, <em>hand in hand</em>',
      'cta.title': 'Ready to begin the <em>journey</em>?',
      'cta.btn': 'Create my account',
      'footer.tagline': 'A wise companion for safe AI use.',
      'footer.alt': 'SACHA mascot sleeping on a book',
      'footer.copy': '© 2026 SACHA Project · IFES Campus Vitória · UCLouvain — educational prototype',
      'auth.back': 'Back to home',
      'auth.tabs': 'Sign in or create account',
      'auth.titleLogin': 'Good to see you <em>here</em>!',
      'auth.titleSignup': 'Let\'s begin <em>your journey</em>?',
      'auth.subLogin': 'Sign in to continue your journey with SACHA.',
      'auth.subSignup': 'Create your account — it takes less than a minute.',
      'auth.tabLogin': 'Sign in',
      'auth.tabSignup': 'Create account',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.name': 'Name',
      'auth.emailPh': 'you@example.com',
      'auth.passPh': '••••••••',
      'auth.namePh': 'What should we call you?',
      'auth.passNewPh': 'At least 8 characters',
      'auth.submitLogin': 'Sign in',
      'auth.submitSignup': 'Create account',
      'auth.forgot': 'Forgot your password? <a href="#" data-i18n-forgot-link>Recover access</a>',
      'auth.forgotLink': 'Recover access',
      'auth.terms': 'By continuing, you agree to explore AI with curiosity and critical thinking. ✦',
      'auth.forgotToast': 'Prototype: password recovery is not connected yet.',
      'welcome.back': 'Back',
      'welcome.menu': 'Menu',
      'welcome.alt': 'SACHA mascot reading a book',
      'welcome.title': 'Welcome to <em>SACHA</em>!',
      'welcome.body': 'Here, you will discover how AI works through statistical and probabilistic models, explore the idea of Artificial Intelligence as a metaphor, and critically examine the most common perceptions about chatbots. This introduction will gently guide you through your learning journey.',
      'welcome.enjoy': 'Enjoy the exploration!',
      'welcome.start': 'Get started',
      'intro.back': 'Back',
      'intro.menu': 'Menu',
      'intro.tagline': 'A wise companion for safe AI use',
      'intro.journey': 'An interactive journey through the mind of Artificial Intelligence.',
      'intro.f1.title': 'Interactive Dialogue',
      'intro.f1.desc': 'Chat with SACHA about Artificial Intelligence.',
      'intro.f2.title': 'Explore Concepts',
      'intro.f2.desc': 'Discover key AI ideas through curated content and examples.',
      'intro.f3.title': 'Interactive Experiences',
      'intro.f3.desc': 'Engage with AI in guided conversations and dynamic in-app activities.',
      'intro.start': 'Start now',
      'intro.support': 'A project supported by',
      'chat.newChat': 'New chat',
      'chat.today': 'Today',
      'chat.active': 'Chat with SACHA',
      'chat.reader': 'reader',
      'chat.demoAccount': 'demo account',
      'chat.openMenu': 'Open menu',
      'chat.about': 'About SACHA',
      'chat.exit': 'Leave for home page',
      'chat.chip1': 'What is SACHA?',
      'chat.chip2': 'How does a chatbot work?',
      'chat.chip3': 'Does AI really think?',
      'chat.chip4': 'What is a probabilistic model?',
      'chat.placeholder': 'Write your message ...',
      'chat.send': 'Send',
      'chat.message': 'Message',
      'chat.note': 'SACHA is an educational prototype — responses here are scripted for demonstration.',
      'chat.newChatToast': 'New chat started. ✦',
      'chat.greet': 'Hello{name}! I\'m SACHA. 🪶\nHow can I help you today?',
      'chat.greetName': ', {name}',
    },
    pt: {
      'page.home.title': 'SACHA — Safe AI-Chatbot Highly Anthropomorphized',
      'page.login.title': 'Entrar · SACHA',
      'page.welcome.title': 'Bem-vindo(a) · SACHA',
      'page.intro.title': 'Introdução · SACHA',
      'page.chat.title': 'Chat com a SACHA',
      'meta.home.description': 'SACHA é um chatbot educativo: uma jornada interativa pela mente da Inteligência Artificial.',
      'lang.ariaToPt': 'Mudar para português',
      'lang.ariaToEn': 'Mudar para inglês',
      'nav.home': 'SACHA — início',
      'nav.features': 'Recursos',
      'nav.about': 'Sobre',
      'nav.support': 'Apoio',
      'nav.signIn': 'Entrar',
      'hero.eyebrow': 'Safe AI-Chatbot Highly Anthropomorphized',
      'hero.title': 'Uma jornada interativa pela <em>mente</em> da Inteligência Artificial.',
      'hero.lead': 'SACHA é uma companheira sábia para o uso seguro de IA. Converse, explore conceitos e descubra — por dentro — como chatbots realmente funcionam.',
      'hero.ctaPrimary': 'Conheça a SACHA',
      'hero.ctaSecondary': 'Saiba mais',
      'features.kicker': 'O que você encontra aqui',
      'features.title': 'Aprender sobre IA pode ser <em>uma boa história</em>',
      'features.desc': 'Três caminhos para entender a Inteligência Artificial com calma, curiosidade e senso crítico.',
      'card1.title': 'Diálogo Interativo',
      'card1.desc': 'Converse com a SACHA sobre Inteligência Artificial e tire suas dúvidas em um papo guiado e acolhedor.',
      'card1.alt': 'Mascote da SACHA conversando animada',
      'card2.title': 'Explore Conceitos',
      'card2.desc': 'Descubra as ideias-chave da IA — modelos estatísticos e probabilísticos — por meio de conteúdos e exemplos curados.',
      'card2.alt': 'Mascote da SACHA apontando para cima com um livro',
      'card3.title': 'Experiências Interativas',
      'card3.desc': 'Engaje com a IA em conversas guiadas e atividades dinâmicas dentro do próprio aplicativo.',
      'card3.alt': 'Mascote da SACHA sentada lendo um livro',
      'about.kicker': 'Sobre o projeto',
      'about.title': 'Por trás da cortina <em>da IA</em>',
      'about.p1': 'A SACHA foi criada para olhar a Inteligência Artificial de frente — sem mistificação. Nesta jornada de aprendizagem, você vai:',
      'about.li1': 'Descobrir como a IA funciona por meio de modelos estatísticos e probabilísticos;',
      'about.li2': 'Explorar a ideia de Inteligência Artificial como metáfora;',
      'about.li3': 'Examinar criticamente as percepções mais comuns sobre chatbots.',
      'about.p2': 'Tudo isso na companhia de uma mascote que adora livros, uma pena e uma boa xícara de café.',
      'about.alt': 'Mascote da SACHA pensativa, com a mão no queixo',
      'support.kicker': 'Um projeto apoiado por',
      'support.title': 'Pesquisa e educação, <em>de mãos dadas</em>',
      'cta.title': 'Pronto(a) para começar a <em>jornada</em>?',
      'cta.btn': 'Criar minha conta',
      'footer.tagline': 'Uma companheira sábia para o uso seguro de IA.',
      'footer.alt': 'Mascote da SACHA dormindo sobre um livro',
      'footer.copy': '© 2026 Projeto SACHA · IFES Campus Vitória · UCLouvain — protótipo educacional',
      'auth.back': 'Voltar para a página inicial',
      'auth.tabs': 'Entrar ou criar conta',
      'auth.titleLogin': 'Que bom te ver <em>por aqui</em>!',
      'auth.titleSignup': 'Vamos começar <em>sua jornada</em>?',
      'auth.subLogin': 'Entre para continuar sua jornada com a SACHA.',
      'auth.subSignup': 'Crie sua conta — leva menos de um minuto.',
      'auth.tabLogin': 'Entrar',
      'auth.tabSignup': 'Criar conta',
      'auth.email': 'E-mail',
      'auth.password': 'Senha',
      'auth.name': 'Nome',
      'auth.emailPh': 'voce@exemplo.br',
      'auth.passPh': '••••••••',
      'auth.namePh': 'Como podemos te chamar?',
      'auth.passNewPh': 'Mínimo de 8 caracteres',
      'auth.submitLogin': 'Entrar',
      'auth.submitSignup': 'Criar conta',
      'auth.forgot': 'Esqueceu a senha? <a href="#" data-i18n-forgot-link>Recuperar acesso</a>',
      'auth.forgotLink': 'Recuperar acesso',
      'auth.terms': 'Ao continuar, você concorda em explorar a IA com curiosidade e senso crítico. ✦',
      'auth.forgotToast': 'Protótipo: recuperação de senha ainda não conectada.',
      'welcome.back': 'Voltar',
      'welcome.menu': 'Menu',
      'welcome.alt': 'Mascote da SACHA lendo um livro',
      'welcome.title': 'Bem-vindo(a) à <em>SACHA</em>!',
      'welcome.body': 'Aqui, você vai descobrir como a IA funciona por meio de modelos estatísticos e probabilísticos, explorar a ideia de Inteligência Artificial como metáfora e examinar criticamente as percepções mais comuns sobre chatbots. Esta introdução vai te guiar com calma pela sua jornada de aprendizagem.',
      'welcome.enjoy': 'Aproveite a exploração!',
      'welcome.start': 'Começar',
      'intro.back': 'Voltar',
      'intro.menu': 'Menu',
      'intro.tagline': 'Uma companheira sábia para o uso seguro de IA',
      'intro.journey': 'Uma jornada interativa pela mente da Inteligência Artificial.',
      'intro.f1.title': 'Diálogo Interativo',
      'intro.f1.desc': 'Converse com a SACHA sobre Inteligência Artificial.',
      'intro.f2.title': 'Explore Conceitos',
      'intro.f2.desc': 'Descubra ideias-chave sobre IA por meio de conteúdos e exemplos curados.',
      'intro.f3.title': 'Experiências Interativas',
      'intro.f3.desc': 'Engaje com a IA em conversas guiadas e atividades dinâmicas no aplicativo.',
      'intro.start': 'Começar agora',
      'intro.support': 'Um projeto apoiado por',
      'chat.newChat': 'Nova conversa',
      'chat.today': 'Hoje',
      'chat.active': 'Chat com a SACHA',
      'chat.reader': 'leitor(a)',
      'chat.demoAccount': 'conta de demonstração',
      'chat.openMenu': 'Abrir menu',
      'chat.about': 'Sobre a SACHA',
      'chat.exit': 'Sair para a página inicial',
      'chat.chip1': 'O que é a SACHA?',
      'chat.chip2': 'Como um chatbot funciona?',
      'chat.chip3': 'A IA pensa de verdade?',
      'chat.chip4': 'O que é um modelo probabilístico?',
      'chat.placeholder': 'Escreva sua mensagem ...',
      'chat.send': 'Enviar',
      'chat.message': 'Mensagem',
      'chat.note': 'A SACHA é um protótipo educacional — as respostas aqui são roteirizadas para demonstração.',
      'chat.newChatToast': 'Nova conversa iniciada. ✦',
      'chat.greet': 'Olá{name}! Eu sou a SACHA. 🪶\nComo posso te ajudar hoje?',
      'chat.greetName': ', {name}',
    },
  };

  const CHAT_SCRIPT = {
    en: [
      { k: ['what is sacha', 'who are you', 'about you', 'tell me about sacha'],
        r: 'I\'m SACHA — Safe AI-Chatbot Highly Anthropomorphized. 🪶\nI was created as a study companion to show you, from the inside, how Artificial Intelligence works: with statistics, probability, and a critical eye. Ask away!' },
      { k: ['how does a chatbot work', 'how do you work', 'how chatbots work'],
        r: 'Great question! A chatbot like me doesn\'t "understand" like a human: I calculate, word by word, the most likely continuation of a text based on patterns learned from many examples.\n\nIt\'s less "thinking" and more "predicting the next word" — done many times, very fast.' },
      { k: ['really think', 'ai think', 'consciousness', 'feel anything'],
        r: 'That\'s one of the central questions of our journey. 🌿\n"Artificial Intelligence" is largely a metaphor: behind it are mathematical models that recognize and reproduce patterns.\n\nWhen something converses well, it\'s natural to project intention and feeling onto it — and noticing that projection is the first step toward critical, safe AI use.' },
      { k: ['probabilistic model', 'probability', 'statistics', 'statistical model'],
        r: 'A probabilistic model assigns chances to possible responses instead of having ONE fixed answer.\n\nThink of a giant autocomplete: after "once upon a time", the words "a princess" are highly probable; "a tractor", not so much. I choose likely continuations — which is why I sometimes nail it and sometimes err with confidence. 😅' },
      { k: ['hallucin', 'mistake', 'wrong', 'trust', 'truth', 'lie'],
        r: 'I can be wrong — and look certain doing it! Because I generate probable (not verified) text, I can produce information that sounds good but is wrong: so-called "hallucinations".\n\nSo the golden rule: use AI as a starting point, never as the final word. Check your sources. ✦' },
      { k: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        r: 'Hello! Good to see you here. 📖\nI\'m SACHA, your companion on this journey through the mind of AI. Want to start with "how does a chatbot work" or ask something else?' },
      { k: ['thank', 'thanks', 'great', 'love it', 'awesome'],
        r: 'I\'m glad! 🪶 Learning about AI with calm and curiosity is exactly the spirit here. Whenever you want, just bring up another topic.' },
    ],
    pt: [
      { k: ['o que é a sacha', 'quem é você', 'quem e voce', 'o que voce e', 'sobre você', 'sobre voce'],
        r: 'Eu sou a SACHA — Safe AI-Chatbot Highly Anthropomorphized. 🪶\nFui criada como uma companheira de estudos para te mostrar, por dentro, como a Inteligência Artificial funciona: com estatística, probabilidade e um bom olhar crítico. Pode perguntar!' },
      { k: ['como um chatbot funciona', 'como você funciona', 'como voce funciona', 'como funciona um chatbot'],
        r: 'Ótima pergunta! Um chatbot como eu não "entende" como um humano: eu calculo, palavra por palavra, qual é a continuação mais provável de um texto, com base em padrões aprendidos em muitos exemplos.\n\nÉ menos "pensar" e mais "prever a próxima palavra" — feito muitas vezes, muito rápido.' },
      { k: ['pensa de verdade', 'ia pensa', 'consciência', 'consciencia', 'sente alguma coisa'],
        r: 'Essa é uma das perguntas centrais da nossa jornada. 🌿\n"Inteligência Artificial" é, em grande parte, uma metáfora: por trás dela há modelos matemáticos que reconhecem e reproduzem padrões.\n\nQuando algo conversa bem, é natural a gente projetar intenção e sentimento nele — e perceber essa projeção é o primeiro passo do uso crítico e seguro da IA.' },
      { k: ['modelo probabilístico', 'modelo probabilistico', 'probabilidade', 'estatística', 'estatistica', 'modelo estatístico', 'modelo estatistico'],
        r: 'Um modelo probabilístico atribui chances a possíveis respostas em vez de ter UMA resposta fixa.\n\nPense num autocompletar gigante: depois de "era uma vez", as palavras "uma princesa" têm alta probabilidade; "um trator", nem tanto. Eu escolho continuações prováveis — por isso às vezes acerto bonito e às vezes erro com confiança. 😅' },
      { k: ['alucina', 'erro', 'errar', 'confiar', 'verdade', 'mentira'],
        r: 'Posso errar, sim — e com aparência de certeza! Como gero texto provável (e não verificado), posso produzir informações que soam bem mas estão erradas: as chamadas "alucinações".\n\nPor isso a regra de ouro: use IA como ponto de partida, nunca como palavra final. Verifique fontes. ✦' },
      { k: ['olá', 'ola', 'oi', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi'],
        r: 'Olá! Que bom te ver por aqui. 📖\nSou a SACHA, sua companheira nessa jornada pela mente da IA. Quer começar por "como um chatbot funciona" ou prefere me perguntar outra coisa?' },
      { k: ['obrigad', 'valeu', 'legal', 'adorei'],
        r: 'Fico feliz! 🪶 Aprender sobre IA com calma e curiosidade é exatamente o espírito daqui. Quando quiser, é só puxar outro assunto.' },
    ],
  };

  const CHAT_FALLBACK = {
    en: [
      'Interesting! In this demo I have a small repertoire, but in the full version I\'d explore this with you step by step. How about trying one of the suggested topics below?',
      'Good question — I\'ll jot that down with my quill. ✒️ For now I\'m a prototype with scripted responses; try asking me "how does a chatbot work".',
      'Hmm, let me flip through my book... 📖 That chapter hasn\'t been written in the prototype yet. I can tell you about probabilistic models or what SACHA is!',
    ],
    pt: [
      'Interessante! Nesta demonstração eu tenho um repertório pequeno, mas na versão completa eu exploraria isso com você passo a passo. Que tal tentar um dos temas sugeridos abaixo?',
      'Boa pergunta — vou anotar com a minha pena. ✒️ Por enquanto sou um protótipo com respostas roteirizadas; experimente me perguntar "como um chatbot funciona".',
      'Hmm, deixa eu folhear meu livro... 📖 Esse capítulo ainda não foi escrito no protótipo. Posso te contar sobre modelos probabilísticos ou sobre o que é a SACHA!',
    ],
  };

  function loadLang(){
    try{
      const saved = localStorage.getItem(STORAGE_KEY);
      if(saved === 'pt' || saved === 'en') lang = saved;
    }catch(_){}
  }

  function t(key){
    return T[lang][key] ?? T.en[key] ?? key;
  }

  const LANG_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>';

  function getLang(){ return lang; }

  function setLang(next){
    lang = next === 'pt' ? 'pt' : 'en';
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(_){}
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    applyI18n();
    document.dispatchEvent(new CustomEvent('sacha:langchange', { detail: { lang } }));
  }

  function toggleLang(){ setLang(lang === 'en' ? 'pt' : 'en'); }

  function applyI18n(){
    const page = document.body.dataset.page;
    if(page && T[lang]['page.' + page + '.title']){
      document.title = t('page.' + page + '.title');
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc && page && T[lang]['meta.' + page + '.description']){
      metaDesc.setAttribute('content', t('meta.' + page + '.description'));
    }

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.dataset.i18n;
      const val = t(key);
      if(el.dataset.i18nWing !== undefined){
        el.innerHTML = '<span class="wing">❧</span> ' + val + ' <span class="wing">❧</span>';
      }else{
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      el.title = t(el.dataset.i18nTitle);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
      el.alt = t(el.dataset.i18nAlt);
    });

    document.querySelectorAll('.lang-toggle').forEach(btn=>{
      btn.setAttribute('aria-label', lang === 'en' ? t('lang.ariaToPt') : t('lang.ariaToEn'));
    });

    if(typeof window.onSachaLangApply === 'function') window.onSachaLangApply(lang);
  }

  function mountLangToggle(parent){
    if(!parent || parent.querySelector('.lang-toggle')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-btn lang-toggle';
    btn.innerHTML = LANG_ICON;
    btn.addEventListener('click', toggleLang);
    parent.appendChild(btn);
  }

  function initI18n(){
    loadLang();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    applyI18n();
    document.querySelectorAll('[data-lang-toggle]').forEach(mountLangToggle);
  }

  function getChatScript(){ return CHAT_SCRIPT[lang]; }
  function getChatFallback(){ return CHAT_FALLBACK[lang]; }
  function getChatGreet(name){
    const reader = t('chat.reader');
    const hasName = name && name !== reader;
    const namePart = hasName ? t('chat.greetName').replace('{name}', name) : '';
    return t('chat.greet').replace('{name}', namePart);
  }

  window.t = t;
  window.getLang = getLang;
  window.setLang = setLang;
  window.toggleLang = toggleLang;
  window.applyI18n = applyI18n;
  window.initI18n = initI18n;
  window.getChatScript = getChatScript;
  window.getChatFallback = getChatFallback;
  window.getChatGreet = getChatGreet;

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initI18n);
  }else{
    initI18n();
  }
})();
