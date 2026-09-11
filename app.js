/**
 * Mercato Jardim · Aplicação & Interações
 * Inspirado na Identidade Visual PEG-AI e nas ideias de áudio do usuário.
 */

// =============================================================================
// 1. Dados dos Setores & Produtos
// =============================================================================
const SECTORS_DATA = {
  hortifruti: {
    index: "01",
    tag: "SETOR 01 · FRESCO & SELECIONADO",
    title: "Hortifrúti & Feira Selecionada",
    desc: "Frutas doces, legumes higienizados e verduras selecionadas manualmente todas as manhãs. A garantia da maçã crocante e da laranja suculenta na sua mesa.",
    statHighlight: "100%",
    statDetail: "Frescor auditado diariamente",
    products: [
      { id: "hf-maca", name: "Maçã Fuji Selecionada", icon: "🍎", price: "R$ 11,90 / kg", tag: "Crocante & Doce", desc: "Casca brilhante, polpa firme e suculenta." },
      { id: "hf-laranja", name: "Laranja Bahia Docinha", icon: "🍊", price: "R$ 7,90 / kg", tag: "Ideal para Suco", desc: "Sem sementes, extremamente rica em vitamina C." },
      { id: "hf-banana", name: "Banana Prata Especial", icon: "🍌", price: "R$ 8,50 / kg", tag: "Direto da Roça", desc: "No ponto perfeito de maturação, rica em potássio." },
      { id: "hf-avocado", name: "Abacate Avocado Cremoso", icon: "🥑", price: "R$ 14,90 / kg", tag: "Gourmet", desc: "Textura aveludada, ideal para torradas e saladas." },
      { id: "hf-tomate", name: "Tomate Sweet Grape", icon: "🍅", price: "R$ 9,90 / bandeja", tag: "Super Doce", desc: "Pequenos e aromáticos, lavados e prontos para consumo." },
      { id: "hf-alface", name: "Alface Hidropônica Crespa", icon: "🥬", price: "R$ 4,90 / un", tag: "Sem Agrotóxicos", desc: "Folhas verdes vivas e crocantes colhidas ao amanhecer." }
    ]
  },
  acougue: {
    index: "02",
    tag: "SETOR 02 · CORTES NOBRES & FRESCOS",
    title: "Açougue & Carnes de Primeira",
    desc: "Cortes bovinos nobres, frangos selecionados e carnes moídas na hora sob seu pedido. Procedência garantida e padrão gourmet de açougue.",
    statHighlight: "Zero",
    statDetail: "Aditivos ou conservantes",
    products: [
      { id: "ac-costela", name: "Costela Bovina Premium", icon: "🥩", price: "R$ 38,90 / kg", tag: "Especial Assados", desc: "Marmorizada, macia e perfeita para fogo lento." },
      { id: "ac-patinho", name: "Patinho Moído Fresco", icon: "🥩", price: "R$ 44,90 / kg", tag: "Moído na Hora", desc: "Carne magra, sem gordura excessiva, inspecionada." },
      { id: "ac-picanha", name: "Picanha Nobre Selecionada", icon: "🥩", price: "R$ 89,90 / kg", tag: "Capa de Gordura Perfeita", desc: "Corte macio e sabor marcante para seu churrasco." },
      { id: "ac-fraldinha", name: "Fraldinha Maturada", icon: "🥩", price: "R$ 54,90 / kg", tag: "Sabor Marcante", desc: "Fibras longas e maciez impecável na grelha ou forno." },
      { id: "ac-file-frango", name: "Filé de Peito de Frango", icon: "🍗", price: "R$ 23,90 / kg", tag: "Resfriado Diário", desc: "Limpo, sem pele e pronto para temperar e grelhar." }
    ]
  },
  padaria: {
    index: "03",
    tag: "SETOR 03 · FORNADAS DIÁRIAS",
    title: "Padaria & Pães de Fermentação Natural",
    desc: "Fornadas a cada 2 horas com pães artesanais, croissants folhados na manteiga e bolos caseiros com receitas tradicionais.",
    statHighlight: "2h em 2h",
    statDetail: "Fornadas de pão quentinho",
    products: [
      { id: "pd-fermentacao", name: "Pão de Fermentação Natural", icon: "🥖", price: "R$ 16,90 / un", tag: "Casca Crocante", desc: "Miolos aerados, digestão leve e aroma inconfundível." },
      { id: "pd-croissant", name: "Croissant Francês Tradicional", icon: "🥐", price: "R$ 9,50 / un", tag: "Manteiga Pura", desc: "Camadas finas, dourado e amanteigado na medida." },
      { id: "pd-baguete", name: "Baguete Rústica Mercato", icon: "🥖", price: "R$ 7,50 / un", tag: "Artesanal", desc: "Ideal para bruschettas, sanduíches e tábuas de queijos." },
      { id: "pd-bolo", name: "Bolo de Cenoura com Chocolate", icon: "🍰", price: "R$ 22,00 / un", tag: "Feito Hoje", desc: "Massa fofinha com calda generosa de chocolate cremoso." },
      { id: "pd-pao-queijo", name: "Pão de Queijo Minas Padrão", icon: "🧀", price: "R$ 3,50 / un", tag: "Quentinho", desc: "Queijo canastra genuíno e textura puxa irresistível." }
    ]
  },
  mercearia: {
    index: "04",
    tag: "SETOR 04 · DESPENSA COMPLETA & EMPÓRIO",
    title: "Mercearia & Produtos Essenciais",
    desc: "O leite do café da manhã, o Toddy e o Sucrilhos da criançada, bolachas artesanais e marcas premium que você confia no dia a dia.",
    statHighlight: "+1.200",
    statDetail: "Itens de mercearia fina",
    products: [
      { id: "mc-leite", name: "Leite Integral Fresco Tipo A", icon: "🥛", price: "R$ 6,80 / L", tag: "Da Fazenda", desc: "Mais saboroso, cremoso e rico em nutrientes." },
      { id: "mc-toddy", name: "Achocolatado Toddy Original", icon: "🍫", price: "R$ 13,90 / 400g", tag: "Clássico", desc: "Sabor inconfundível com flocos crocantes de chocolate." },
      { id: "mc-sucrilhos", name: "Cereal Kellogg's Sucrilhos", icon: "🥣", price: "R$ 18,90 / caixa", tag: "Crocância Máxima", desc: "Flocos de milho tostados com açúcar para energia matinal." },
      { id: "mc-bolacha", name: "Bolachas Artesanais Finas", icon: "🍪", price: "R$ 12,50 / pct", tag: "Receita de Família", desc: "Crocantes, amanteigadas e perfeitas para a hora do chá." },
      { id: "mc-azeite", name: "Azeite Extravirgem Português", icon: "🫒", price: "R$ 48,90 / 500ml", tag: "Acidez 0,2%", desc: "Prensado a frio com sabor frutado e picância elegante." },
      { id: "mc-cafe", name: "Café Especial Torra Média", icon: "☕", price: "R$ 26,90 / 500g", tag: "100% Arábica", desc: "Notas de chocolate e caramelo com doçura natural." }
    ]
  },
  petadega: {
    index: "05",
    tag: "SETOR 05 · PET FRIENDLY & ADEGA MOB WINE",
    title: "Espaço Pet & Adega Selecionada",
    desc: "O carinho que seu animal de estimação merece com petiscos nobres, acompanhado de rótulos de vinhos nacionais e importados escolhidos a dedo.",
    statHighlight: "100%",
    statDetail: "Pet Friendly com amor",
    products: [
      { id: "pt-petisco", name: "Petisco Natural para Cães", icon: "🦴", price: "R$ 14,90 / pct", tag: "Sem Corantes", desc: "Biscoitos funcionais assados com maçã e aveia." },
      { id: "pt-racao", name: "Ração Super Premium Cães", icon: "🐕", price: "R$ 78,00 / 3kg", tag: "Alta Nutrição", desc: "Proteínas nobres, ômega 3 e zero transgênicos." },
      { id: "pt-gatos", name: "Sachê Gourmet Salmão para Gatos", icon: "🐈", price: "R$ 5,90 / un", tag: "Pedaços Reais", desc: "Molho aveludado e filé de salmão para felinos exigentes." },
      { id: "ad-vinho-tinto", name: "Vinho Tinto Mob Wine Reserva", icon: "🍷", price: "R$ 69,90 / garrafa", tag: "Safra Especial", desc: "Encorpado, taninos aveludados e notas de frutas vermelhas." },
      { id: "ad-espumante", name: "Espumante Brut Serra Gaúcha", icon: "🍾", price: "R$ 59,90 / garrafa", tag: "Perlage Fina", desc: "Refrescante, cítrico e perfeito para celebrações." }
    ]
  }
};

// Itens para animação inicial do Hero (Ideia do áudio: coisas caindo no carrinho)
const HERO_DROP_SEQUENCE = [
  { emoji: "🍎", label: "Maçã Fuji", delay: 350, xOffset: 25 },
  { emoji: "🥖", label: "Pão Francês", delay: 750, xOffset: 70 },
  { emoji: "🥩", label: "Costela Nobre", delay: 1150, xOffset: 120 },
  { emoji: "🥛", label: "Leite Fresco", delay: 1550, xOffset: 45 },
  { emoji: "🍪", label: "Bolachas", delay: 1950, xOffset: 95 },
  { emoji: "🦴", label: "Petisco Pet", delay: 2350, xOffset: 145 }
];

// Estado do Carrinho
let cart = [];
let activeSectorKey = "hortifruti";

// =============================================================================
// 2. Inicialização ao Carregar a Página
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderSectorProducts(activeSectorKey);
  initSectorTabs();
  initCartDrawer();
  initHeroDropAnimation();
  setupSmoothScroll();
});

// =============================================================================
// 3. Animação de Abertura: Itens Caindo no Carrinho (Hero Drop Animation)
// =============================================================================
function initHeroDropAnimation() {
  const dropZone = document.getElementById("dropZone");
  const basketOverlay = document.getElementById("cartBasketOverlay");
  const stageCounterChip = document.getElementById("stageCounterChip");
  const replayBtn = document.getElementById("replayDropAnimationBtn");

  if (!dropZone || !basketOverlay) return;

  function runSequence() {
    dropZone.innerHTML = "";
    basketOverlay.innerHTML = "";
    stageCounterChip.textContent = "Carregando cesta...";
    stageCounterChip.style.backgroundColor = "var(--color-surface)";

    let landedCount = 0;

    HERO_DROP_SEQUENCE.forEach((item, index) => {
      setTimeout(() => {
        // Cria elemento de queda no dropZone
        const fallingEl = document.createElement("div");
        fallingEl.className = "falling-item";
        fallingEl.style.left = `${item.xOffset + 25}%`;
        fallingEl.style.top = "-60px";
        fallingEl.innerHTML = `
          <span class="falling-emoji">${item.emoji}</span>
          <span class="falling-label">${item.label}</span>
        `;
        dropZone.appendChild(fallingEl);

        // Animação de queda suave com física
        const animation = fallingEl.animate([
          { transform: "translateY(0) rotate(0deg)", opacity: 1 },
          { transform: `translateY(160px) rotate(${index % 2 === 0 ? 12 : -12}deg)`, opacity: 1 }
        ], {
          duration: 520,
          easing: "cubic-bezier(0.55, 0.085, 0.68, 0.53)"
        });

        animation.onfinish = () => {
          fallingEl.remove();

          // Adiciona item que pousou na cesta
          const landedEl = document.createElement("span");
          landedEl.className = "landed-item";
          landedEl.textContent = item.emoji;
          landedEl.title = item.label;
          basketOverlay.appendChild(landedEl);

          landedCount++;
          stageCounterChip.textContent = `${landedCount} itens na cesta fresca`;
          
          if (landedCount === HERO_DROP_SEQUENCE.length) {
            stageCounterChip.style.backgroundColor = "var(--color-primary)";
          }
        };
      }, item.delay);
    });
  }

  // Executa na abertura
  setTimeout(runSequence, 300);

  // Botão para repetir a animação
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      runSequence();
      showToast("Animando a cesta do Mercato Jardim! ✨");
    });
  }
}

// =============================================================================
// 4. Renderização e Controle dos Setores (Hortifrúti, Carnes, Pães...)
// =============================================================================
function initSectorTabs() {
  const tabs = document.querySelectorAll(".sector-tab-btn");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const sectorKey = tab.dataset.sector;
      if (!sectorKey || sectorKey === activeSectorKey) return;

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      activeSectorKey = sectorKey;
      renderSectorProducts(sectorKey);
    });
  });
}

function renderSectorProducts(sectorKey) {
  const sector = SECTORS_DATA[sectorKey];
  if (!sector) return;

  // Atualiza Banner do Setor
  const pillTag = document.getElementById("sectorPillTag");
  const bannerTitle = document.getElementById("sectorBannerTitle");
  const bannerDesc = document.getElementById("sectorBannerDesc");
  const productsGrid = document.getElementById("productsGrid");

  if (pillTag) pillTag.textContent = sector.tag;
  if (bannerTitle) bannerTitle.textContent = sector.title;
  if (bannerDesc) bannerDesc.textContent = sector.desc;

  if (!productsGrid) return;

  // Renderiza Cards de Produtos com animação suave
  productsGrid.innerHTML = "";
  
  sector.products.forEach((product, idx) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = `all 0.3s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.05}s`;

    card.innerHTML = `
      <span class="product-badge-tag">${product.tag}</span>
      <div class="product-icon-visual">${product.icon}</div>
      <div class="product-info-body">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-desc">${product.desc}</p>
        <span class="product-price-pill">${product.price}</span>
      </div>
      <button class="btn-add-product" data-id="${product.id}" data-name="${product.name}" data-icon="${product.icon}" data-sector="${sector.title}">
        <span>+</span> Adicionar à Cesta
      </button>
    `;

    productsGrid.appendChild(card);

    // Efeito stagger fade-in
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 20);

    // Evento de adicionar produto
    const addBtn = card.querySelector(".btn-add-product");
    addBtn.addEventListener("click", () => {
      addToCart({
        id: product.id,
        name: product.name,
        icon: product.icon,
        sector: sector.title,
        price: product.price
      });
    });
  });
}

// =============================================================================
// 5. Sistema Reativo do Carrinho de Compras
// =============================================================================
function addToCart(product) {
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`Adicionado: ${product.name} à sua cesta!`);
}

function updateCartQuantity(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  showToast("Sua cesta foi esvaziada.");
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Badges e contadores
  const cartCountBadge = document.getElementById("cartCountBadge");
  const heroCartCount = document.getElementById("heroCartCount");
  const drawerItemCount = document.getElementById("drawerItemCount");
  const cartSummaryTotal = document.getElementById("cartSummaryTotal");
  const emptyState = document.getElementById("cartEmptyState");
  const itemsList = document.getElementById("cartItemsList");
  const drawerFooter = document.getElementById("cartDrawerFooter");
  const checkoutWaBtn = document.getElementById("checkoutWaBtn");

  if (cartCountBadge) cartCountBadge.textContent = totalItems;
  if (heroCartCount) heroCartCount.textContent = totalItems;
  if (drawerItemCount) drawerItemCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
  if (cartSummaryTotal) cartSummaryTotal.textContent = `${totalItems} ${totalItems === 1 ? 'produto' : 'produtos'}`;

  // Toggle estado vazio vs com itens
  if (totalItems === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (itemsList) itemsList.style.display = "none";
    if (drawerFooter) drawerFooter.style.display = "none";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (itemsList) {
      itemsList.style.display = "flex";
      renderCartDrawerItems(itemsList);
    }
    if (drawerFooter) drawerFooter.style.display = "block";
  }

  // Atualiza link com a mensagem gerada para o WhatsApp
  if (checkoutWaBtn) {
    checkoutWaBtn.href = generateWhatsAppLink();
  }
}

function renderCartDrawerItems(container) {
  container.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <div class="cart-item-left">
        <div class="cart-item-icon">${item.icon}</div>
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <span class="cart-item-sector">${item.sector} · ${item.price}</span>
        </div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn btn-minus" data-id="${item.id}" aria-label="Diminuir quantidade">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn btn-plus" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
      </div>
    `;

    row.querySelector(".btn-minus").addEventListener("click", () => updateCartQuantity(item.id, -1));
    row.querySelector(".btn-plus").addEventListener("click", () => updateCartQuantity(item.id, 1));

    container.appendChild(row);
  });
}

// Gera o link do WhatsApp oficial do Mercato Jardim formatado com a lista
function generateWhatsAppLink() {
  const phone = "5511983215016"; // Número oficial 11 98321-5016 do Mercato Jardim
  
  if (cart.length === 0) {
    return `https://wa.me/${phone}?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20do%20Mercato%20Jardim.`;
  }

  let text = "Olá, equipe do Mercato Jardim! 👋\n";
  text += "Gostaria de fazer o pedido dos seguintes itens que selecionei no site:\n\n";
  text += "🛒 *MINHA CESTA DE COMPRAS:*\n";

  cart.forEach(item => {
    text += `• ${item.qty}x ${item.name} (${item.sector})\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  text += `\n*Total de produtos:* ${total} un.\n`;
  text += "\nPor favor, poderiam confirmar a disponibilidade e o valor para entrega / retirada?\n";
  text += "Obrigado!";

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// =============================================================================
// 6. Controle do Drawer (Gaveta Lateral) do Carrinho
// =============================================================================
function initCartDrawer() {
  const openCartBtn = document.getElementById("openCartBtn");
  const heroAddToCartCTA = document.getElementById("heroAddToCartCTA");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const emptyCartExploreBtn = document.getElementById("emptyCartExploreBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");

  function openDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add("active");
      cartBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove("active");
      cartBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (openCartBtn) openCartBtn.addEventListener("click", openDrawer);
  if (heroAddToCartCTA) heroAddToCartCTA.addEventListener("click", openDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeDrawer);

  if (emptyCartExploreBtn) {
    emptyCartExploreBtn.addEventListener("click", () => {
      closeDrawer();
      const setoresSection = document.getElementById("setores");
      if (setoresSection) {
        setoresSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }

  // Tecla ESC para fechar
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cartDrawer && cartDrawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

// =============================================================================
// 7. Toast de Notificação
// =============================================================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");

  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// =============================================================================
// 8. Navegação e Links Rápidos do Rodapé
// =============================================================================
function setupSmoothScroll() {
  const footerLinks = document.querySelectorAll("[data-goto]");
  
  footerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetSector = link.dataset.goto;
      if (!targetSector) return;

      const targetTab = document.querySelector(`[data-sector="${targetSector}"]`);
      if (targetTab) {
        targetTab.click();
      }
    });
  });
}
