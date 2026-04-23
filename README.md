# Portfolio BTS SIO SISR – Zoha

Portfolio professionnel pour étudiante en BTS SIO option SISR.
Design : IT / Cybersécurité – Dark tech minimal, responsive, compatible GitHub Pages.

---

## 📁 Arborescence des fichiers

Tous les fichiers sont **au même niveau** (racine du dépôt), comme requis par GitHub Pages.

```
votre-repo/
│
├── index.html              ← Page principale (toutes les sections)
├── mentions-legales.html   ← Mentions légales RGPD
├── style.css               ← Feuille de styles
├── script.js               ← Interactions JS
├── README.md               ← Ce fichier
│
│ ── FICHIERS PDF À AJOUTER (même dossier racine) ──
│
├── cv.pdf                          ← Votre CV
├── entreprise.pdf                  ← Présentation entreprise
│
├── certification1.pdf              ← Certification 1
├── certification2.pdf              ← Certification 2
├── certification3.pdf              ← Certification 3 (+ dupliquer dans le HTML si besoin)
│
├── e5-tableau-synthese.pdf         ← Tableau de synthèse E5
├── e5-mission1.pdf                 ← Mission E5 n°1
├── e5-mission2.pdf                 ← Mission E5 n°2
├── e5-mission3.pdf                 ← Mission E5 n°3 (+ dupliquer dans le HTML si besoin)
├── e5-veille1.pdf                  ← Veille technologique 1
├── e5-veille2.pdf                  ← Veille technologique 2
│
├── e6-s1-fiche-situation.pdf       ← E6 Situation 1 – Fiche de situation
├── e6-s1-fiche-production.pdf      ← E6 Situation 1 – Fiche de production
├── e6-s2-fiche-situation.pdf       ← E6 Situation 2 – Fiche de situation
└── e6-s2-fiche-production.pdf      ← E6 Situation 2 – Fiche de production
```

---

## 🔧 Personnalisation rapide

Recherchez les commentaires `<!-- 🔧 Remplacer -->` dans `index.html` :

| Ce qu'il faut changer | Où |
|---|---|
| Votre prénom / nom | Balises `<title>`, nav logo, footer, hero |
| Email de contact | `script.js` ligne ~75 + `data-email` / `data-domain` dans index.html |
| LinkedIn / GitHub | Section `#contact` dans index.html |
| Noms des certifications | Cards dans la section `#certifications` |
| Intitulés des missions E5 | Cards dans la section `#e5` |
| Thèmes des veilles | Cards dans la section `#e5` |

---

## 🚀 Mise en ligne sur GitHub Pages

### Étape 1 – Créer le dépôt
1. Connectez-vous sur [github.com](https://github.com)
2. Cliquez sur **New repository**
3. Nommez-le `portfolio-bts-sio` (ou `votre-prenom.github.io` pour une URL plus courte)
4. Laissez-le **Public** (GitHub Pages nécessite un dépôt public sur le plan gratuit)

### Étape 2 – Uploader les fichiers
**Option A – Via l'interface web GitHub (sans terminal) :**
1. Dans votre dépôt, cliquez **Add file > Upload files**
2. Glissez-déposez TOUS les fichiers (HTML, CSS, JS, PDF)
3. Cliquez **Commit changes**

**Option B – Via Git (terminal) :**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/VOTRE_COMPTE/VOTRE_REPO.git
git push -u origin main
```

### Étape 3 – Activer GitHub Pages
1. Dans votre dépôt, allez dans **Settings > Pages**
2. Sous **Source**, sélectionnez **Deploy from a branch**
3. Choisissez la branche **main**, dossier **/ (root)**
4. Cliquez **Save**

### Étape 4 – Accéder au site
Votre portfolio sera accessible à :
```
https://VOTRE_COMPTE.github.io/VOTRE_REPO/
```
*(La mise en ligne peut prendre 1 à 3 minutes)*

---

## ➕ Ajouter des éléments

### Ajouter une certification
Dans `index.html`, section `#certifications`, dupliquez ce bloc :
```html
<div class="card pdf-card">
  <div class="pdf-icon">🎓</div>
  <strong>Nom de la certification</strong>
  <small>Organisme / date</small>
  <div class="pdf-actions">
    <a href="nom-fichier.pdf" target="_blank" rel="noopener" class="btn-outline">Ouvrir</a>
    <a href="nom-fichier.pdf" download class="btn-primary">Télécharger</a>
  </div>
</div>
```

### Ajouter une mission E5
Même principe, dans la section `#e5 > .subsection` des missions.

---

## ✅ Conformité RGPD

- Aucun cookie de traçage
- Aucun Google Analytics
- Formulaire de contact via `mailto:` (aucune donnée côté serveur)
- Email encodé en `data-*` pour limiter le scraping
- Bannière d'information RGPD incluse
- Page mentions légales incluse (`mentions-legales.html`)
- Seul localStorage utilisé : mémorisation du clic sur la bannière RGPD

---

## 🎨 Design

- **Palette** : Dark (#0a0d12) + Cyan électrique (#00e5ff) + Violet (#7c3aed)
- **Typographies** : Syne (titres) + JetBrains Mono (code / labels)
- **Responsive** : Mobile, tablette, desktop
- **Effets** : Grid texture hero, terminal animé, scroll reveal, hover cards

---

*Portfolio généré pour BTS SIO SISR – Toutes les sections sont modifiables facilement.*
