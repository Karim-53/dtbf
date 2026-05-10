let currentLang = 'de';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.de').forEach(el => el.classList.toggle('hidden', lang !== 'de'));
  document.querySelectorAll('.fr').forEach(el => el.classList.toggle('hidden', lang !== 'fr'));
  document.getElementById('btnDe').classList.toggle('active', lang === 'de');
  document.getElementById('btnFr').classList.toggle('active', lang === 'fr');
  localStorage.setItem('dtbf-lang', lang);
}

function detectLanguage() {
  const saved = localStorage.getItem('dtbf-lang');
  if (saved === 'de' || saved === 'fr') return saved;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const frZones = [
      'Africa/Tunis', 'Europe/Paris', 'Europe/Brussels', 'Europe/Luxembourg',
      'Africa/Algiers', 'Africa/Casablanca', 'Africa/Abidjan', 'Africa/Dakar',
      'Africa/Douala', 'Africa/Kinshasa', 'Indian/Reunion', 'Indian/Mauritius',
      'America/Montreal'
    ];
    if (frZones.includes(tz)) return 'fr';
  } catch (e) {}
  if ((navigator.language || '').toLowerCase().startsWith('fr')) return 'fr';
  return 'de';
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

async function shareEvent() {
  const titles = {
    de: 'Deutsch-Tunesisches Business Forum Essen 2026',
    fr: 'Forum Économique Tuniso-Allemand Essen 2026'
  };
  const texts = {
    de: '17.–18. September 2026 · Rathaus Essen',
    fr: '17–18 septembre 2026 · Hôtel de Ville d\'Essen'
  };
  if (navigator.share) {
    try {
      await navigator.share({ title: titles[currentLang], text: texts[currentLang], url: window.location.href });
    } catch (e) {}
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert(currentLang === 'fr' ? 'Lien copié !' : 'Link kopiert!');
    } catch (e) {}
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') this.classList.remove('open');
    });
  }
  setLang(detectLanguage());
});
