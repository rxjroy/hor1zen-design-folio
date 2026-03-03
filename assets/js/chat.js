/* =============================================
   FAQ Chat Bot — Hor1zen Portfolio
   ============================================= */

(function () {
  'use strict';

  /* ---- FAQ knowledge base ---- */
  const faqs = [
    {
      patterns: ['hello', 'hi', 'hey', 'hiya', 'greetings', 'howdy', 'what\'s up'],
      response: "Hey there! 👋 I'm Hor1zen's virtual assistant. Ask me anything about Raj — his services, skills, projects, or how to get in touch!",
      chips: ['Services', 'Skills', 'Projects', 'Contact']
    },
    {
      patterns: ['who', 'about', 'yourself', 'raj', 'hor1zen', 'tell me'],
      response: "I'm <strong>Hor1zen — Raj Roy</strong>, a passionate <strong>Graphics & UX Designer</strong> from Gujarat, India 🇮🇳. I blend creativity with purpose — crafting intuitive user interfaces, seamless web experiences, and bold visual identities. My motto: <em>Your vision. My obsession.</em>",
      chips: ['Services', 'Skills', 'Experience', 'Contact']
    },
    {
      patterns: ['service', 'offer', 'speciali', 'what do you do', 'what can you do'],
      response: "I offer four core services:\n\n🌐 <strong>Web Design</strong> — Fast, modern, visually stunning websites\n🎨 <strong>Brand Design</strong> — Cohesive & memorable brand identities\n📱 <strong>App Design</strong> — Smooth, intuitive iOS & Android experiences\n✏️ <strong>Graphics Design</strong> — Social media to print, every pixel on purpose",
      chips: ['Pricing', 'Projects', 'Contact']
    },
    {
      patterns: ['skill', 'expertise', 'proficien', 'good at', 'software', 'tool'],
      response: "Here's where I stand skill-wise:\n\n🖥️ <strong>Web & App Design</strong> — 80%\n🎯 <strong>Brand Design</strong> — 70%\n🎨 <strong>Graphic Design</strong> — 90%\n\nTools I use: Figma, Adobe Illustrator, Photoshop, and more.",
      chips: ['Services', 'Projects', 'Contact']
    },
    {
      patterns: ['project', 'portfolio', 'work', 'case study', 'example', 'show', 'done'],
      response: "Here are some highlight projects:\n\n🚀 <strong>FlowPilot</strong> — SaaS Product Website UI\n☕ <strong>Starbucks Web Redesign</strong> — Full case study\n💎 <strong>Rosso Corallo</strong> — Italian jewellery brand identity\n⚡ <strong>Strike Esports Package</strong> — Full esports graphics\n🛒 <strong>Voltpin</strong> — In-game items store logo & web UI\n🏆 <strong>Solace Ascension League</strong> — Esports tournament creative assets\n\nCheck out the full Portfolio tab for all projects!",
      chips: ['Services', 'Client Reviews', 'Contact']
    },
    {
      patterns: ['client', 'testimonial', 'review', 'feedback', 'customer', 'worked with'],
      response: "Raj has worked with some amazing clients:\n\n🎮 <strong>ESM Esports</strong> — Tournament & season graphics\n💍 <strong>Rosso Corallo</strong> — Luxury jewellery branding & web\n🏅 <strong>ESFI</strong> — Esports Federation of India (MLBB tournament)\n🛠️ <strong>Codifica</strong> — Freelance UI design collaboration\n🕹️ <strong>Solace</strong> — Community design & esports identity\n\nCheck the Testimonials section for their words!",
      chips: ['Projects', 'Services', 'Contact']
    },
    {
      patterns: ['price', 'cost', 'rate', 'charge', 'budget', 'quote', 'how much', 'fee'],
      response: "Pricing depends on the scope of the project! I offer custom quotes tailored to your needs. The best way to get a number is to reach out directly and share your brief 📋\n\n📧 hor1zen.dzns@gmail.com\n📞 +91 8866028563",
      chips: ['Contact', 'Services']
    },
    {
      patterns: ['contact', 'reach', 'email', 'phone', 'hire', 'available', 'get in touch', 'dm', 'message'],
      response: "You can reach Raj through any of these:\n\n📧 <strong>Email:</strong> hor1zen.dzns@gmail.com\n📞 <strong>Phone:</strong> +91 8866028563\n💬 <strong>WhatsApp:</strong> wa.me/918866028563\n🎨 <strong>Behance:</strong> behance.net/hor1zen\n🎮 <strong>Discord:</strong> Available on request\n\nOr just fill in the Contact form on this site!",
      chips: ['Services', 'Pricing', 'Projects']
    },
    {
      patterns: ['education', 'study', 'college', 'university', 'degree', 'qualify'],
      response: "Raj is currently pursuing a <strong>BTech in Computer Science & Engineering</strong> (2022–2026) at <strong>Marwadi University, Rajkot</strong>. This gives him a solid technical foundation that complements his design skills perfectly!",
      chips: ['Skills', 'Projects', 'Contact']
    },
    {
      patterns: ['location', 'where', 'based', 'from', 'city', 'gujarat', 'india', 'rajkot', 'jamnagar'],
      response: "Raj is based in <strong>Gujarat, India</strong> 🇮🇳. Despite being local, he works with clients <strong>globally</strong> — from Italian jewellery brands to Indian esports federations!",
      chips: ['Contact', 'Services']
    },
    {
      patterns: ['esport', 'gaming', 'game', 'competitive', 'tournament', 'team', 'jersey', 'mlbb'],
      response: "Esports design is one of Raj's strongest suits! Notable esports work includes:\n\n🎮 <strong>ESM Esports</strong> — Season posters, tournament graphics\n🏆 <strong>ESFI</strong> — MLBB national tournament graphics\n⚔️ <strong>Solace Ascension League</strong> — Full visual identity\n👕 <strong>i8 Esport Jersey Design</strong> — Custom jersey design\n\nHigh-energy, competitive, and always on-brand!",
      chips: ['Projects', 'Contact']
    },
    {
      patterns: ['brand', 'logo', 'identity', 'visual', 'branding'],
      response: "Brand design is a core strength — Raj has crafted visual identities for:\n\n💎 <strong>Rosso Corallo</strong> — Timeless luxury jewellery brand\n🕹️ <strong>Solace</strong> — Discord community & esports identity\n⚡ <strong>Voltpin</strong> — Online in-game items store\n\nEvery brand deserves a look as good as its product!",
      chips: ['Projects', 'Services', 'Contact']
    },
    {
      patterns: ['social media', 'instagram', 'poster', 'ad', 'advertisement'],
      response: "Raj creates powerful social media visuals for various brands:\n\n📱 <strong>Comet</strong> — Product advertisement poster\n🪒 <strong>LetsShave</strong> — Product advertisement poster\n🧊 <strong>Frozen Bottle</strong> — Product advertisement poster\n🎌 <strong>Anime Social Media Headers</strong> — Design collection\n\nEvery post is crafted to stop the scroll!",
      chips: ['Projects', 'Contact']
    },
    {
      patterns: ['behance', 'portfolio link', 'profile', 'online', 'social', 'whatsapp', 'discord'],
      response: "Find Raj online:\n\n🎨 <strong>Behance:</strong> <a href='https://www.behance.net/hor1zen' target='_blank' style='color:#a78bfa'>behance.net/hor1zen</a>\n💬 <strong>WhatsApp:</strong> <a href='https://wa.me/918866028563' target='_blank' style='color:#a78bfa'>wa.me/918866028563</a>",
      chips: ['Contact', 'Projects']
    },
    {
      patterns: ['birthday', 'age', 'old', 'born'],
      response: "Raj was born on <strong>September 17, 2004</strong> — making him a young but highly accomplished designer already working with top-tier clients across India and beyond! 🎂",
      chips: ['About', 'Experience']
    },
    {
      patterns: ['experience', 'year', 'long', 'journey', 'history', 'timeline'],
      response: "Raj's design journey includes:\n\n📅 <strong>2024</strong> — Project ESM (esports), Rosso Corallo branding\n📅 <strong>2025</strong> — Freelance at Codifica, Project Voltpin\n📅 <strong>2026</strong> — Project Solace & Ascension League\n\nGrowing fast and delivering quality at every stage!",
      chips: ['Projects', 'Skills', 'Contact']
    },
    {
      patterns: ['ux design', 'ui design', 'user experience', 'user interface', 'figma'],
      response: "Raj's UX/UI highlights include:\n\n🚀 <strong>FlowPilot</strong> — SaaS product website (Behance case study)\n☕ <strong>Starbucks Web Redesign</strong> — Conceptual redesign case study\n📱 <strong>Voltpin</strong> — In-game store web UI\n\nClean, functional, and always user-first.",
      chips: ['Projects', 'Services', 'Contact']
    },
    {
      patterns: ['thanks', 'thank you', 'bye', 'goodbye', 'great', 'awesome', 'nice', 'cool'],
      response: "Thank you! 🙌 It was great chatting with you. If you'd like to work with Raj, don't hesitate to reach out — the Contact section is always open. Have a great day! ✨",
      chips: ['Contact', 'Services']
    }
  ];

  /* Default fallback */
  const fallback = {
    response: "Hmm, I'm not sure about that one! 🤔 But you can always reach Raj directly:\n\n📧 hor1zen.dzns@gmail.com\n📞 +91 8866028563\n\nOr try asking about his <strong>services</strong>, <strong>projects</strong>, or <strong>skills</strong>!",
    chips: ['Services', 'Projects', 'Contact', 'Skills']
  };

  /* Chip → query mapping — use clear keywords that pattern-match reliably */
  const chipQueries = {
    'Services': 'services design offer',
    'Skills': 'skills expertise proficiency',
    'Projects': 'projects portfolio',
    'Contact': 'contact email phone',
    'Pricing': 'pricing cost rates',
    'Experience': 'experience journey timeline',
    'Client Reviews': 'client testimonials reviews',
    'About': 'about raj hor1zen'
  };

  /* ---- Helpers ---- */
  function findResponse(input) {
    const lower = input.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    for (const faq of faqs) {
      let score = 0;
      for (const pattern of faq.patterns) {
        if (lower.includes(pattern)) {
          // Longer patterns = more specific = higher value
          score += pattern.length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }

    return bestMatch || fallback;
  }

  function nl2br(str) {
    return str.replace(/\n/g, '<br>');
  }

  /* ---- DOM refs ---- */
  const toggle = document.getElementById('chat-toggle');
  const window_ = document.getElementById('chat-window');
  const messages = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const qrArea = document.getElementById('chat-quick-replies');
  const closeBtn = document.getElementById('chat-close-btn');
  const notifDot = toggle.querySelector('.notif-dot');

  let isOpen = false;

  /* ---- Open / close ---- */
  function openChat() {
    isOpen = true;
    window_.classList.add('visible');
    toggle.classList.add('open');
    if (notifDot) notifDot.style.display = 'none';
    scrollBottom();
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    window_.classList.remove('visible');
    toggle.classList.remove('open');
  }

  toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  /* ---- Scroll to bottom ---- */
  function scrollBottom() {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }

  /* ---- Append a message bubble ---- */
  function addMessage(html, type /* 'bot' | 'user' */) {
    const wrap = document.createElement('div');
    wrap.className = `chat-msg ${type}`;

    if (type === 'bot') {
      const img = document.createElement('img');
      img.src = './assets/images/avatar12.png';
      img.alt = 'Hor1zen';
      img.className = 'chat-msg-avatar';
      wrap.appendChild(img);
    }

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = html;
    wrap.appendChild(bubble);

    messages.appendChild(wrap);
    scrollBottom();
    return wrap;
  }

  /* ---- Typing indicator ---- */
  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg bot typing';
    wrap.id = 'typing-indicator';

    const img = document.createElement('img');
    img.src = './assets/images/avatar12.png';
    img.alt = 'Hor1zen';
    img.className = 'chat-msg-avatar';
    wrap.appendChild(img);

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    wrap.appendChild(bubble);

    messages.appendChild(wrap);
    scrollBottom();
  }

  function hideTyping() {
    const ind = document.getElementById('typing-indicator');
    if (ind) ind.remove();
  }

  /* ---- Render quick-reply chips ---- */
  function renderChips(chips) {
    qrArea.innerHTML = '';
    if (!chips || chips.length === 0) return;
    chips.forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'qr-chip';
      btn.textContent = label;
      btn.addEventListener('click', () => {
        const query = chipQueries[label] || label;
        handleUserMessage(query);
      });
      qrArea.appendChild(btn);
    });
  }

  /* ---- Core: handle user input ---- */
  function handleUserMessage(text) {
    if (!text.trim()) return;

    addMessage(text, 'user');
    renderChips([]);         // clear chips while "typing"
    input.value = '';

    const delay = 600 + Math.random() * 600;

    showTyping();
    setTimeout(() => {
      hideTyping();
      const match = findResponse(text);
      addMessage(nl2br(match.response), 'bot');
      renderChips(match.chips || []);
    }, delay);
  }

  /* ---- Send button & Enter key ---- */
  sendBtn.addEventListener('click', () => handleUserMessage(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage(input.value);
    }
  });

  /* ---- Greeting on first open ---- */
  let greeted = false;
  toggle.addEventListener('click', () => {
    if (!greeted && isOpen) {
      greeted = true;
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          hideTyping();
          const greeting = faqs.find(f => f.patterns.includes('hello'));
          addMessage(nl2br(greeting.response), 'bot');
          renderChips(greeting.chips);
        }, 800);
      }, 300);
    }
  });

})();
