/* =====================================================
   YEZHABK ADMIN — Shared JavaScript
   ===================================================== */

// ── Auth guard ──
function checkAuth() {
  if (!localStorage.getItem('admin_logged_in') && !sessionStorage.getItem('admin_logged_in')) {
    window.location.href = 'login.html';
  }
}

// ── Dark mode ──
function initDark() {
  if (localStorage.getItem('admin_dark') === '1') {
    document.documentElement.classList.add('dark');
  }
}
function toggleDark() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('admin_dark', document.documentElement.classList.contains('dark') ? '1' : '0');
  const icon = document.getElementById('dark-icon');
  if (!icon) return;
  if (document.documentElement.classList.contains('dark')) {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>';
  } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>';
  }
}

// ── Mobile sidebar ──
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar || !overlay) return;
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!sidebar) return;
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

// ── Toast ──
function toast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const icons = {
    success: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
    error:   '<path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
    info:    '<path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>',
  };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">${icons[type]}</svg><span>${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">×</button>`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

// ── Logout ──
function logout() {
  localStorage.removeItem('admin_logged_in');
  sessionStorage.removeItem('admin_logged_in');
  window.location.href = 'login.html';
}

// ── Modal helpers ──
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('open');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
}

// ── Confirm dialog ──
function confirmAction(msg, onConfirm) {
  document.getElementById('confirmMsg').textContent = msg;
  openModal('confirmModal');
  document.getElementById('confirmOkBtn').onclick = () => {
    closeModal('confirmModal');
    onConfirm();
  };
}

// ── Pagination helper ──
function paginate(items, page, perPage) {
  const start = (page - 1) * perPage;
  return { items: items.slice(start, start + perPage), total: items.length, pages: Math.ceil(items.length / perPage) };
}

// ── Format helpers ──
function fmtCurrency(v, cur = 'OMR') {
  return `${Number(v).toFixed(3)} ${cur}`;
}
function fmtDate(iso) {
  return new Date(iso).toLocaleDateString('ar-OM', { year:'numeric', month:'short', day:'numeric' });
}
function fmtNum(n) {
  return Number(n).toLocaleString('ar');
}

// ── LocalStorage DB ──
const DB = {
  get(key, def = []) {
    try { return JSON.parse(localStorage.getItem('yz_'+key)) ?? def; } catch { return def; }
  },
  set(key, val) { localStorage.setItem('yz_'+key, JSON.stringify(val)); },
  push(key, item, def = []) {
    const arr = this.get(key, def);
    arr.push(item);
    this.set(key, arr);
    return arr;
  },
  update(key, id, patch, def = []) {
    const arr = this.get(key, def);
    const idx = arr.findIndex(x => x.id === id);
    if (idx > -1) { arr[idx] = {...arr[idx], ...patch}; this.set(key, arr); }
    return arr;
  },
  remove(key, id, def = []) {
    const arr = this.get(key, def).filter(x => x.id !== id);
    this.set(key, arr);
    return arr;
  }
};

// ── ID generator ──
function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

// ── Sidebar active nav ──
function setActiveNav() {
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initDark();
  checkAuth();
  initSidebar();
  setActiveNav();
});

// ── Mock data seed ──
function seedIfEmpty() {
  if (DB.get('seeded', false)) return;

  const orders = [
    { id:'ORD-001', customer:'أحمد الشحي', phone:'+96891234567', email:'ahmed@example.com', address:'مسقط، الموالح', items:[{name:'شماغ كلاسيكي',qty:2,price:25}], total:50, status:'delivered', date:'2026-04-28T10:00:00Z', notes:'' },
    { id:'ORD-002', customer:'مريم الكندية', phone:'+97155234567', email:'mariam@example.com', address:'دبي، الجميرا', items:[{name:'ساعة كاسيو تيفاني',qty:1,price:95}], total:95, status:'shipped', date:'2026-04-29T08:30:00Z', notes:'توصيل سريع' },
    { id:'ORD-003', customer:'سالم البلوشي', phone:'+96899887766', email:'salem@example.com', address:'صحار، الشارقة', items:[{name:'إسوارة كارتييه',qty:1,price:180},{name:'شماغ كلاسيكي',qty:1,price:25}], total:205, status:'processing', date:'2026-04-30T14:00:00Z', notes:'' },
    { id:'ORD-004', customer:'نور المزروعية', phone:'+97156334455', email:'noor@example.com', address:'أبوظبي، النادي', items:[{name:'حقيبة LV',qty:1,price:340}], total:340, status:'new', date:'2026-05-01T09:15:00Z', notes:'هدية، يرجى التغليف' },
    { id:'ORD-005', customer:'خالد الرواحي', phone:'+96898765432', email:'khalid@example.com', address:'نزوى، الحارة', items:[{name:'خاتم كارتييه',qty:1,price:220}], total:220, status:'cancelled', date:'2026-04-27T16:45:00Z', notes:'إلغاء بطلب العميل' },
  ];
  const customers = [
    { id:'CUS-001', name:'أحمد الشحي', phone:'+96891234567', email:'ahmed@example.com', country:'عمان', orders:3, total:150, joinDate:'2026-01-10T00:00:00Z' },
    { id:'CUS-002', name:'مريم الكندية', phone:'+97155234567', email:'mariam@example.com', country:'الإمارات', orders:1, total:95, joinDate:'2026-02-15T00:00:00Z' },
    { id:'CUS-003', name:'سالم البلوشي', phone:'+96899887766', email:'salem@example.com', country:'عمان', orders:2, total:205, joinDate:'2026-03-01T00:00:00Z' },
    { id:'CUS-004', name:'نور المزروعية', phone:'+97156334455', email:'noor@example.com', country:'الإمارات', orders:1, total:340, joinDate:'2026-04-20T00:00:00Z' },
    { id:'CUS-005', name:'خالد الرواحي', phone:'+96898765432', email:'khalid@example.com', country:'عمان', orders:1, total:0, joinDate:'2026-04-01T00:00:00Z' },
  ];
  const categories = [
    { id:'CAT-001', name:{ar:'شمايل وعقل',en:'Shemagh & Agal'}, icon:'🧣', count:8, active:true },
    { id:'CAT-002', name:{ar:'ساعات',en:'Watches'}, icon:'⌚', count:5, active:true },
    { id:'CAT-003', name:{ar:'إكسسوارات',en:'Accessories'}, icon:'💍', count:12, active:true },
    { id:'CAT-004', name:{ar:'حقائب',en:'Bags'}, icon:'👜', count:10, active:true },
    { id:'CAT-005', name:{ar:'مكياج',en:'Makeup'}, icon:'💄', count:7, active:true },
    { id:'CAT-006', name:{ar:'صناديق هدايا',en:'Gift Boxes'}, icon:'🎁', count:15, active:true },
  ];
  const coupons = [
    { id:'CPN-001', code:'WELCOME20', type:'percent', value:20, minOrder:50, maxUses:100, used:34, expiry:'2026-06-30T00:00:00Z', active:true },
    { id:'CPN-002', code:'EID2026', type:'fixed', value:5, minOrder:30, maxUses:200, used:87, expiry:'2026-05-10T00:00:00Z', active:true },
    { id:'CPN-003', code:'VIP50', type:'percent', value:50, minOrder:200, maxUses:20, used:20, expiry:'2026-04-01T00:00:00Z', active:false },
  ];
  DB.set('orders', orders);
  DB.set('customers', customers);
  DB.set('categories', categories);
  DB.set('coupons', coupons);
  DB.set('seeded', true);
}

const SIDEBAR_HTML = `
<div class="sidebar-logo" href="index.html">
  <a href="index.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">
    <div class="sidebar-logo-mark">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/></svg>
    </div>
    <div><div class="sidebar-logo-text">يزهابك</div><span class="sidebar-logo-sub">لوحة الإدارة</span></div>
  </a>
</div>
<nav class="sidebar-nav">
  <div class="nav-section-label">القائمة الرئيسية</div>
  <a href="index.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
    الرئيسية
  </a>
  <div class="nav-section-label">المتجر</div>
  <a href="products.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>
    المنتجات
  </a>
  <a href="orders.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/></svg>
    الطلبات
    <span class="nav-badge" id="newOrdersBadge" style="display:none">0</span>
  </a>
  <a href="customers.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/></svg>
    العملاء
  </a>
  <a href="categories.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>
    الأقسام
  </a>
  <div class="nav-section-label">التسويق</div>
  <a href="coupons.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/></svg>
    الكوبونات
  </a>
  <div class="nav-section-label">التقارير والإعدادات</div>
  <a href="reports.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>
    التقارير
  </a>
  <a href="settings.html" class="nav-item">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
    الإعدادات
  </a>
</nav>
<div class="sidebar-footer">
  <div class="sidebar-avatar">م</div>
  <div><div class="sidebar-user-name">المدير</div><div class="sidebar-user-role">مدير المتجر</div></div>
  <button class="sidebar-logout-btn" onclick="logout()" title="تسجيل الخروج">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"/></svg>
  </button>
</div>`;

const TOPBAR_HTML = `
<button class="topbar-menu-btn" onclick="toggleSidebar()">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
</button>
<div class="topbar-search">
  <span class="topbar-search-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg></span>
  <input type="text" placeholder="بحث سريع..." id="topbarSearch"/>
</div>
<div class="topbar-actions">
  <button class="topbar-btn" onclick="toggleDark()" title="تبديل المظهر">
    <svg id="dark-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/></svg>
  </button>
  <button class="topbar-btn" onclick="window.location.href='orders.html'" title="الطلبات الجديدة">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/></svg>
    <span class="topbar-dot"></span>
  </button>
  <div class="topbar-profile">
    <div class="topbar-avatar">م</div>
    <span class="topbar-profile-name">المدير</span>
    <span class="topbar-chevron"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg></span>
  </div>
</div>`;

const CONFIRM_MODAL = `
<div class="modal-overlay confirm-dialog" id="confirmModal">
  <div class="modal modal-sm">
    <div class="modal-body">
      <div class="confirm-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.008v.008H12v-.008Z"/></svg>
      </div>
      <div class="modal-title">تأكيد العملية</div>
      <div class="confirm-msg" id="confirmMsg"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary btn-sm" onclick="closeModal('confirmModal')">إلغاء</button>
      <button class="btn btn-danger btn-sm" id="confirmOkBtn">تأكيد</button>
    </div>
  </div>
</div>`;

const TOAST_CONTAINER = `<div id="toast-container"></div>`;
const SIDEBAR_OVERLAY = `<div class="sidebar-overlay" id="sidebarOverlay"></div>`;

function injectLayout() {
  const sidebar = document.getElementById('sidebar');
  const topbar  = document.getElementById('topbar');
  if (sidebar) sidebar.innerHTML = SIDEBAR_HTML;
  if (topbar)  topbar.innerHTML  = TOPBAR_HTML;
  document.body.insertAdjacentHTML('beforeend', TOAST_CONTAINER + CONFIRM_MODAL + SIDEBAR_OVERLAY);
  // update dark icon if dark
  if (document.documentElement.classList.contains('dark')) {
    const icon = document.getElementById('dark-icon');
    if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>';
  }
  // update new orders badge
  const orders = DB.get('orders',[]);
  const newCount = orders.filter(o=>o.status==='new').length;
  const badge = document.getElementById('newOrdersBadge');
  if (badge && newCount > 0) { badge.style.display=''; badge.textContent=newCount; }
}
