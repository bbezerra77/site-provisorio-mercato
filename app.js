/**
 * MERCATO JARDIM · SISTEMA INTERATIVO DO EMPÓRIO
 * Madeira Nobre, Limão Siciliano, Adega Mob Wine & Experiência Imersiva
 */

// =============================================================================
// 1. Catálogo Completo dos Corredores do Mercato
// =============================================================================
const CORREDORES = {
  adega: {
    num: "Corredor 01",
    tag: "ADEGA MOB WINE · CURADORIA EXCLUSIVA",
    title: "Vinhos Nobres, Espumantes & Queijos Especiais",
    desc: "Mais de 800 rótulos do Velho e Novo Mundo mantidos sob climatização controlada. Tintos encorpados da Toscana, brancos minerais, espumantes e queijos nobres para harmonizar.",
    icon: "🍷",
    products: [
      { id: "vn-toscana", name: "Tinto Toscana Rosso IGT", icon: "🍷", price: "R$ 89,90", tag: "Importação Direta", desc: "Notas de cereja negra, especiarias e taninos aveludados." },
      { id: "vn-malbec", name: "Malbec Gran Reserva Mendoza", icon: "🍷", price: "R$ 79,90", tag: "Safra Premiada", desc: "Estrutura imponente, aroma de amoras e carvalho francês." },
      { id: "vn-espumante", name: "Espumante Brut Serra Gaúcha", icon: "🍾", price: "R$ 64,90", tag: "Método Tradicional", desc: "Perlage fina e persistente, frescor cítrico vibrante." },
      { id: "vn-branco", name: "Sauvignon Blanc Vale de Leyda", icon: "🥂", price: "R$ 69,90", tag: "Refrescante", desc: "Notas herbáceas, maracujá e acidez equilibrada." },
      { id: "vn-queijo-grana", name: "Queijo Grana Padano DOP", icon: "🧀", price: "R$ 38,00 / 250g", tag: "Maturado 16 Meses", desc: "Textura granulada cristalina e sabor amendoado rico." },
      { id: "vn-tabua", name: "Tábua de Frios Artesanais", icon: "🥓", price: "R$ 54,90", tag: "Feita na Hora", desc: "Presunto Parma, salame italiano, queijo brie e azeitonas pretas." }
    ]
  },
  hortifruti: {
    num: "Corredor 02",
    tag: "HORTIFRÚTI & LIMÃO SICILIANO · DIRETO DO CAMPO",
    title: "Frutas Doces, Verduras Frescas & Citrus",
    desc: "O famoso Limão Siciliano do Mercato Jardim, folhas verdes colhidas pela manhã e frutas com aroma inconfundível. Rigorosa seleção manual diária.",
    icon: "🍋",
    products: [
      { id: "hf-limao", name: "Limão Siciliano Mercato", icon: "🍋", price: "R$ 14,90 / kg", tag: "Símbolo da Casa", desc: "Casca aromática rica em óleos essenciais e sumo equilibrado." },
      { id: "hf-maca", name: "Maçã Fuji Selecionada", icon: "🍎", price: "R$ 12,90 / kg", tag: "Extra Crocante", desc: "Polpa branca suculenta, colheita fresca de altitude." },
      { id: "hf-laranja", name: "Laranja Bahia Selecionada", icon: "🍊", price: "R$ 8,90 / kg", tag: "Sem Sementes", desc: "Sumo doce abundante, ideal para o café da manhã." },
      { id: "hf-tomate", name: "Tomate Sweet Grape em Rama", icon: "🍅", price: "R$ 9,90 / bandeja", tag: "Adocicado", desc: "Pequenos e aromáticos, direto de estufas controladas." },
      { id: "hf-avocado", name: "Abacate Avocado Premium", icon: "🥑", price: "R$ 16,90 / kg", tag: "Cremoso", desc: "Textura amanteigada para guacamole e torradas rústicas." },
      { id: "hf-uvas", name: "Uva Vitória Sem Sementes", icon: "🍇", price: "R$ 11,50 / cumbuca", tag: "Docinha", desc: "Bagos crocantes, pretas e ricas em antioxidantes." }
    ]
  },
  acougue: {
    num: "Corredor 03",
    tag: "AÇOUGUE GOURMET · CARNES DE PRIMEIRA",
    title: "Cortes Nobres & Carnes Especiais",
    desc: "Boutique de carnes com padrão excepcional: picanhas maturadas, ancho, costela de chão e patinho moído na hora na sua frente.",
    icon: "🥩",
    products: [
      { id: "ac-picanha", name: "Picanha Bovina Nobre", icon: "🥩", price: "R$ 89,90 / kg", tag: "Capa Perfeita", desc: "Marmororeio ideal para garantir maciez absoluta na grelha." },
      { id: "ac-costela", name: "Costela Bovina de Chão", icon: "🥩", price: "R$ 42,90 / kg", tag: "Para Assados", desc: "Corte tradicional com osso, sabor autêntico e suculência." },
      { id: "ac-patinho", name: "Patinho Moído Fresco", icon: "🥩", price: "R$ 46,90 / kg", tag: "Moído na Hora", desc: "Carne magra de alta qualidade para receitas especiais." },
      { id: "ac-ancho", name: "Bife de Ancho Prime Rib", icon: "🥩", price: "R$ 78,00 / kg", tag: "Corte Argentino", desc: "O clássico olho de lombo com sabor marcante e suculento." },
      { id: "ac-linguica", name: "Linguiça Artesanal com Ervas", icon: "🌭", price: "R$ 34,90 / kg", tag: "Receita Toscana", desc: "Pernil suíno selecionado temperado com vinho e especiarias." }
    ]
  },
  padaria: {
    num: "Corredor 04",
    tag: "FORNERIA ARTESANAL · FORNADAS CONSTANTES",
    title: "Pães de Fermentação Natural & Confeitaria",
    desc: "Pães rústicos assados na pedra com casca crocante e fermentação lenta de 24 horas. Croissants na manteiga pura e bolos caseiros com gostinho de infância.",
    icon: "🥖",
    products: [
      { id: "pd-levain", name: "Pão Rústico Fermentação Natural", icon: "🥖", price: "R$ 18,90 / un", tag: "Fermento Levain 24h", desc: "Alvéolos abertos, crosta dourada e digestão leve." },
      { id: "pd-croissant", name: "Croissant Francês Amanteigado", icon: "🥐", price: "R$ 9,80 / un", tag: "Manteiga Extra", desc: "Folhas finas crocantes que desmancham a cada mordida." },
      { id: "pd-baguete", name: "Baguete Tradicional com Alecrim", icon: "🥖", price: "R$ 8,50 / un", tag: "Feito no Dia", desc: "Aroma mediterrâneo de alecrim fresco e azeite extravirgem." },
      { id: "pd-bolo", name: "Bolo Caseiro de Cenoura & Chocolate", icon: "🍰", price: "R$ 24,00 / un", tag: "Receita de Vó", desc: "Massa aveludada coberta com ganache generosa de chocolate." },
      { id: "pd-pao-queijo", name: "Pão de Queijo da Canastra", icon: "🧀", price: "R$ 3,80 / un", tag: "Quentinho", desc: "Queijo meia cura artesanal puxando a cada mordida." }
    ]
  },
  mercearia: {
    num: "Corredor 05",
    tag: "MERCEARIA FINA & EMPÓRIO ITALIANO",
    title: "Azeites, Massas, Toddy, Sucrilhos & Itens do Dia",
    desc: "A despensa perfeita: de azeites prensados a frio e massas trefiladas em bronze até os produtos queridos do café da manhã da família.",
    icon: "🥫",
    products: [
      { id: "mc-azeite", name: "Azeite Extravirgem Português 0.2%", icon: "🫒", price: "R$ 49,90 / 500ml", tag: "Acidez Mínima", desc: "Frutado intenso, aroma verde e leve picância no final." },
      { id: "mc-massa", name: "Massa Italiana Gragnano Fettuccine", icon: "🍝", price: "R$ 16,90 / 500g", tag: "Trefilada em Bronze", desc: "Retém o molho com perfeição, trigo 100% grano duro." },
      { id: "mc-toddy", name: "Achocolatado Toddy Original", icon: "🍫", price: "R$ 14,50 / 400g", tag: "Clássico", desc: "Flocos crocantes e sabor tradicional que todo mundo adora." },
      { id: "mc-sucrilhos", name: "Cereal Kellogg's Sucrilhos", icon: "🥣", price: "R$ 19,80 / caixa", tag: "Crocância Máxima", desc: "Energia pura para o café da manhã das crianças." },
      { id: "mc-leite", name: "Leite Fresco Tipo A da Fazenda", icon: "🥛", price: "R$ 7,20 / L", tag: "Integral Puro", desc: "Cremoso, pasteurizado suavemente mantendo todo o sabor." },
      { id: "mc-bolachas", name: "Bolachas Artesanais de Nata", icon: "🍪", price: "R$ 13,90 / pacote", tag: "Derrete na Boca", desc: "Feitas à mão com nata fresca, açúcar demerara e canela." }
    ]
  },
  pet: {
    num: "Corredor 06",
    tag: "ESPAÇO PET FRIENDLY · O 1º DE SÃO PAULO",
    title: "Mimos, Petiscos & Nutrição Nobre para Pets",
    desc: "O Mercato Jardim acolhe quem faz parte da sua vida. Alimentos balanceados, biscoitos naturais sem conservantes e guloseimas para seu cão ou gato.",
    icon: "🐾",
    products: [
      { id: "pt-biscoito", name: "Biscoito Natural Assado Cães", icon: "🦴", price: "R$ 15,90 / pct", tag: "100% Funcional", desc: "Elaborado com farinha de aveia, maçã fuji e linhaça." },
      { id: "pt-racao", name: "Ração Super Premium Cães Adultos", icon: "🐕", price: "R$ 82,00 / 3kg", tag: "Sem Transgênicos", desc: "Frango caipira, batata doce e ácidos graxos ômega 3 e 6." },
      { id: "pt-sache", name: "Sachê Gourmet Filé de Salmão", icon: "🐈", price: "R$ 6,50 / un", tag: "Para Gatos", desc: "Pedaços nobres de peixe em caldo nutritivo e palatável." },
      { id: "pt-bifinho", name: "Bifinho Artesanal de Carne Nobre", icon: "🥩", price: "R$ 9,90 / pct", tag: "Rico em Proteínas", desc: "Snack macio e saboroso para recompensa e treinamento." }
    ]
  }
};

// Sequência de itens caindo no carrinho do Hero (Ideia do áudio)
const HERO_FALLING_SEQUENCE = [
  { emoji: "🍋", label: "Limão Siciliano", delay: 250, x: 25 },
  { emoji: "🍷", label: "Vinho Mob Wine", delay: 650, x: 65 },
  { emoji: "🥖", label: "Pão Fermentação", delay: 1050, x: 105 },
  { emoji: "🥩", label: "Picanha Nobre", delay: 1450, x: 45 },
  { emoji: "🥛", label: "Leite da Fazenda", delay: 1850, x: 85 },
  { emoji: "🦴", label: "Petisco Pet", delay: 2250, x: 125 }
];

// Estado da Aplicação
let cart = [];
let activeCorredorKey = "adega";
let isAudioPlaying = false;
let audioCtx = null;
let soundInterval = null;

// =============================================================================
// 2. Inicialização
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderCorredorProducts(activeCorredorKey);
  setupAisleTabs();
  setupHeroDropAnimation();
  setupCartDrawer();
  setupSoundSynth();
  setupWineQuickFilter();
  setupFooterNavigation();
});

// =============================================================================
// 3. Sintetizador de Som Ambiente do Mercato (Web Audio API)
// =============================================================================
function setupSoundSynth() {
  const btn = document.getElementById("soundToggleBtn");
  const icon = document.getElementById("soundIcon");
  const label = document.getElementById("soundLabel");

  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    isAudioPlaying = !isAudioPlaying;

    if (isAudioPlaying) {
      btn.classList.add("playing");
      icon.textContent = "🔊";
      label.textContent = "Tocando Acústico...";
      startAmbientLounge();
      showToast("Música ambiente do Mercato ativada! 🎷🍷");
    } else {
      btn.classList.remove("playing");
      icon.textContent = "🔇";
      label.textContent = "Música do Mercato";
      stopAmbientLounge();
      showToast("Música pausada.");
    }
  });
}

// Toca acordes relaxantes suaves simulando violão/jazz acústico de empório
function startAmbientLounge() {
  // Notas elegantes de Jazz/Bossa em Hz: Dmaj9, Gmaj7, Bm7, A7sus4
  const chords = [
    [146.83, 220.00, 277.18, 329.63, 440.00], // D, A, C#, E, A
    [196.00, 246.94, 293.66, 369.99, 440.00], // G, B, D, F#, A
    [123.47, 185.00, 220.00, 293.66, 369.99], // B, F#, A, D, F#
    [220.00, 293.66, 329.63, 440.00, 493.88]  // A, D, E, A, B
  ];

  let chordIndex = 0;

  function playArpeggio() {
    if (!isAudioPlaying || !audioCtx) return;

    const currentChord = chords[chordIndex % chords.length];
    chordIndex++;

    currentChord.forEach((freq, i) => {
      setTimeout(() => {
        if (!isAudioPlaying || !audioCtx) return;
        playWarmNote(freq);
      }, i * 350);
    });
  }

  playArpeggio();
  soundInterval = setInterval(playArpeggio, 3200);
}

function playWarmNote(frequency) {
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  // Filtro passa-baixa para som aveludado e aconchegante de madeira
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(650, audioCtx.currentTime);

  // Envelope suave (ataque e decaimento acústico)
  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.045, audioCtx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.4);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 2.5);
}

function stopAmbientLounge() {
  if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null;
  }
}

// =============================================================================
// 4. Animação de Abertura: Coisas Caindo no Carrinho de Madeira / Vime
// =============================================================================
function setupHeroDropAnimation() {
  const dropZone = document.getElementById("heroDropZone");
  const floatingItems = document.getElementById("cartFloatingItems");
  const replayBtn = document.getElementById("replayAnimationBtn");

  if (!dropZone || !floatingItems) return;

  function executeDrop() {
    dropZone.innerHTML = "";
    floatingItems.innerHTML = "";

    HERO_FALLING_SEQUENCE.forEach((item, index) => {
      setTimeout(() => {
        const fallEl = document.createElement("div");
        fallEl.className = "falling-grocery-item";
        fallEl.style.left = `${item.x + 20}%`;
        fallEl.style.top = "-50px";
        fallEl.innerHTML = `
          <span class="icon">${item.emoji}</span>
          <span class="tag">${item.label}</span>
        `;
        dropZone.appendChild(fallEl);

        const anim = fallEl.animate([
          { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          { transform: `translateY(155px) rotate(${index % 2 === 0 ? 15 : -15}deg)`, opacity: 1 }
        ], {
          duration: 540,
          easing: "cubic-bezier(0.55, 0.085, 0.68, 0.53)"
        });

        anim.onfinish = () => {
          fallEl.remove();

          const landed = document.createElement("span");
          landed.className = "landed-basket-item";
          landed.textContent = item.emoji;
          landed.title = item.label;
          floatingItems.appendChild(landed);
        };
      }, item.delay);
    });
  }

  // Executa ao abrir a página
  setTimeout(executeDrop, 350);

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      executeDrop();
      showToast("Cesta preenchida com frescor! 🧺✨");
    });
  }
}

// =============================================================================
// 5. Corredores & Vitrine Interativa de Produtos
// =============================================================================
function setupAisleTabs() {
  const tabs = document.querySelectorAll(".aisle-tab-btn");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const corredorKey = tab.dataset.corredor;
      if (!corredorKey || corredorKey === activeCorredorKey) return;

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      activeCorredorKey = corredorKey;
      renderCorredorProducts(corredorKey);
    });
  });
}

function renderCorredorProducts(corredorKey) {
  const corredor = CORREDORES[corredorKey];
  if (!corredor) return;

  const tagEl = document.getElementById("corredorTag");
  const titleEl = document.getElementById("corredorTitle");
  const descEl = document.getElementById("corredorDesc");
  const badgeIconEl = document.getElementById("corredorBadgeIcon");
  const gridEl = document.getElementById("productsGrid");

  if (tagEl) tagEl.textContent = corredor.tag;
  if (titleEl) titleEl.textContent = corredor.title;
  if (descEl) descEl.textContent = corredor.desc;
  if (badgeIconEl) badgeIconEl.textContent = corredor.icon;

  if (!gridEl) return;

  gridEl.innerHTML = "";

  corredor.products.forEach((prod, index) => {
    const card = document.createElement("article");
    card.className = "bancada-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`;

    card.innerHTML = `
      <span class="product-stamp-badge">${prod.tag}</span>
      <div class="product-symbol">${prod.icon}</div>
      <div>
        <h4 class="product-bancada-name">${prod.name}</h4>
        <p class="product-bancada-desc">${prod.desc}</p>
        <span class="product-bancada-price">${prod.price}</span>
      </div>
      <button class="btn-add-bancada" data-id="${prod.id}" data-name="${prod.name}" data-icon="${prod.icon}" data-sector="${corredor.title}">
        <span>+</span> Colocar na Cesta
      </button>
    `;

    gridEl.appendChild(card);

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 25);

    card.querySelector(".btn-add-bancada").addEventListener("click", () => {
      addToCart({
        id: prod.id,
        name: prod.name,
        icon: prod.icon,
        price: prod.price,
        sector: corredor.title
      });
    });
  });
}

function setupWineQuickFilter() {
  const btn = document.getElementById("btnFilterWine");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const adegaTab = document.querySelector('[data-corredor="adega"]');
    if (adegaTab) {
      adegaTab.click();
      const corredoresSec = document.getElementById("corredores");
      if (corredoresSec) {
        corredoresSec.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

// =============================================================================
// 6. Carrinho / Cesta de Compras Reativa
// =============================================================================
function addToCart(product) {
  const index = cart.findIndex(i => i.id === product.id);

  if (index > -1) {
    cart[index].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartState();
  showToast(`Colocado na cesta: ${product.name}! 🧺`);
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(i => i.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCartState();
}

function clearCart() {
  cart = [];
  updateCartState();
  showToast("Sua cesta foi esvaziada.");
}

function updateCartState() {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const cartBadge = document.getElementById("cartCountBadge");
  const drawerCount = document.getElementById("drawerItemCount");
  const summaryTotal = document.getElementById("cartSummaryTotal");
  const emptyState = document.getElementById("cartEmptyState");
  const itemsList = document.getElementById("cartItemsList");
  const footer = document.getElementById("cartDrawerFooter");
  const waBtn = document.getElementById("checkoutWaBtn");

  if (cartBadge) cartBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'} na cesta`;
  if (summaryTotal) summaryTotal.textContent = `${totalItems} produtos`;

  if (totalItems === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (itemsList) itemsList.style.display = "none";
    if (footer) footer.style.display = "none";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (itemsList) {
      itemsList.style.display = "flex";
      renderCartDrawerItems(itemsList);
    }
    if (footer) footer.style.display = "block";
  }

  if (waBtn) {
    waBtn.href = generateWhatsAppLink();
  }
}

function renderCartDrawerItems(container) {
  container.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "drawer-item-row";
    row.innerHTML = `
      <div class="drawer-item-left">
        <div class="drawer-item-icon">${item.icon}</div>
        <div class="drawer-item-info">
          <h5>${item.name}</h5>
          <span>${item.price}</span>
        </div>
      </div>
      <div class="drawer-item-controls">
        <button class="qty-btn btn-minus" aria-label="Diminuir">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn btn-plus" aria-label="Aumentar">+</button>
      </div>
    `;

    row.querySelector(".btn-minus").addEventListener("click", () => updateCartQty(item.id, -1));
    row.querySelector(".btn-plus").addEventListener("click", () => updateCartQty(item.id, 1));

    container.appendChild(row);
  });
}

function generateWhatsAppLink() {
  const phone = "5511983215016"; // WhatsApp da Loja 1 (Bairro Jardim)
  
  if (cart.length === 0) {
    return `https://wa.me/${phone}?text=Ol%C3%A1%2C%20equipe%20do%20Mercato%20Jardim!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida.`;
  }

  let msg = "Olá, equipe do Mercato Jardim! 👋🍋\n";
  msg += "Gostaria de fazer o pedido dos itens que selecionei no site:\n\n";
  msg += "🧺 *MINHA CESTA DE COMPRAS:*\n";

  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name} (${item.price})\n`;
  });

  const total = cart.reduce((acc, i) => acc + i.qty, 0);
  msg += `\n*Total:* ${total} itens.\n`;
  msg += "\nPodem por favor confirmar a disponibilidade para entrega ou retirada no Bairro Jardim / Valparaíso?\n";
  msg += "Muito obrigado!";

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// =============================================================================
// 7. Controle do Drawer
// =============================================================================
function setupCartDrawer() {
  const openBtn = document.getElementById("openCartBtn");
  const closeBtn = document.getElementById("closeCartBtn");
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  const emptyBrowseBtn = document.getElementById("emptyCartBrowseBtn");
  const clearBtn = document.getElementById("clearCartBtn");

  function open() {
    if (drawer && backdrop) {
      drawer.classList.add("active");
      backdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function close() {
    if (drawer && backdrop) {
      drawer.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (openBtn) openBtn.addEventListener("click", open);
  if (closeBtn) closeBtn.addEventListener("click", close);
  if (backdrop) backdrop.addEventListener("click", close);

  if (emptyBrowseBtn) {
    emptyBrowseBtn.addEventListener("click", () => {
      close();
      const sec = document.getElementById("corredores");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (clearBtn) clearBtn.addEventListener("click", clearCart);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
      close();
    }
  });
}

// =============================================================================
// 8. Toast de Notificação
// =============================================================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const textEl = document.getElementById("toastMessage");

  if (!toast || !textEl) return;

  textEl.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// =============================================================================
// 9. Links Rápidos do Rodapé
// =============================================================================
function setupFooterNavigation() {
  const links = document.querySelectorAll("[data-switch]");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = link.dataset.switch;
      const tab = document.querySelector(`[data-corredor="${target}"]`);
      if (tab) {
        tab.click();
      }
    });
  });
}
