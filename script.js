// ═══════════════════════════════════════════════════════════════
// MATRIX RAIN
// ═══════════════════════════════════════════════════════════════
(function () {
  const cv = document.getElementById('rain'), ctx = cv.getContext('2d');
  const ch = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%<>[]{}|;.,?/\\';
  let cols, drops, sz = 14;
  function resize() { cv.width = window.innerWidth; cv.height = window.innerHeight; cols = Math.floor(cv.width / sz); drops = Array(cols).fill(1); }
  function draw() {
    ctx.fillStyle = 'rgba(0,5,0,0.06)'; ctx.fillRect(0, 0, cv.width, cv.height);
    for (let i = 0; i < drops.length; i++) {
      const c = ch[Math.floor(Math.random() * ch.length)], y = drops[i] * sz;
      if (Math.random() > .92) { ctx.fillStyle = '#fff'; ctx.font = 'bold ' + sz + 'px monospace'; }
      else { const b = Math.random() * .6 + .4; ctx.fillStyle = `rgba(0,${Math.floor(255*b)},${Math.floor(65*b)},.85)`; ctx.font = sz + 'px monospace'; }
      ctx.fillText(c, i * sz, y);
      if (y > cv.height && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    }
  }
  resize(); window.addEventListener('resize', resize); setInterval(draw, 45);
})();


// ═══════════════════════════════════════════════════════════════
// DASHBOARD DATA
// ═══════════════════════════════════════════════════════════════
const DEFAULT = {
  version: "1.0",
  sections: [
    {
      id: "s01", num: "01",
      title: "Inspiration visuelle & direction artistique",
      desc: "Alimenter le regard — références, archives, galeries",
      resources: [
        { name: "Are.na",                     tag: "Curation",    desc: "Le Pinterest des artistes sérieux. Boards curatés à la main, sans algorithme.", keywords: ["retro sci-fi aesthetics", "glitch art", "Jean Giraud", "vaporwave architecture"] },
        { name: "ArtStation",                 tag: "Concept Art", desc: "DA professionnelle pour jeux et films. Accès direct aux pipelines visuels de Cyberpunk 2077, Dune.", keywords: ["retrofuturism concept art", "desert planet environment", "neon noir"] },
        { name: "Cargo Collective",           tag: "Portfolios",  desc: "Portfolios d'artistes underground et expérimentaux. Esthétiques plus brutes et risquées.", keywords: ["experimental design portfolio", "underground artist"] },
        { name: "Smithsonian Open Access",    tag: "Archives",    desc: "2,8 millions d'images en domaine public. Illustrations scientifiques victoriennes, gravures.", keywords: ["vintage scientific illustration", "engraving domain public"] },
        { name: "Internet Archive — Pulp",    tag: "Archives",    desc: "Couvertures de magazines sci-fi des années 30-70. Rockets chromées, planètes colorées.", keywords: ["pulp sci-fi cover", "golden age science fiction"] },
        { name: "Flickr Commons",             tag: "Archives",    desc: "Archives de musées nationaux. Photos NASA, diapositives vintage.", keywords: ["NASA vintage photo", "mid-century futurism", "atomic age"] },
        { name: "BLDGBLOG",                   tag: "Blog",        desc: "Blog sur architecture, géographie et SF. Villes impossibles, déserts habités.", keywords: [] },
        { name: "Lospec",                     tag: "Pixel Art",   desc: "Base de données de palettes + gallery pixel art + tutorials. Gratuit.", keywords: ["pixel art palette", "color palette 32 colors"] },
        { name: "DeviantArt — Sci-fi Groups", tag: "Communauté",  desc: "Archive massive avec groupes actifs sur le retrofuturisme, space opera, cyberpunk.", keywords: ["retrofuturism digital art"] }
      ],
      roadmap: ["Créer un compte Are.na — suivre 5 canaux", "Moodboard ArtStation par projet", "Télécharger 20 images Smithsonian → raw inspiration", "15 min BLDGBLOG par semaine, carnet ouvert"],
      combos: ["Archive Smithsonian → img2img SD = science documentaire hallucinée", "Are.na canal + Lospec palette = DA cohérente"]
    },
    {
      id: "s02", num: "02",
      title: "IA générative & LoRA",
      desc: "Stable Diffusion, modèles, prompts et entraînement custom",
      resources: [
        { name: "Civitai",                tag: "Modèles / LoRA", desc: "Bibliothèque ultime de modèles SD et LoRA. LoRA Moebius, Dune, pixel art — tout existe.", keywords: ["Jean Giraud LoRA", "retrofuturism checkpoint", "cyberpunk LoRA"] },
        { name: "Hugging Face",           tag: "Hub IA",         desc: "Hub open source. Accès à FLUX, SDXL, SD3. Spaces gratuits.", keywords: [] },
        { name: "ComfyUI",                tag: "Interface SD",   desc: "Interface node-based pour SD. Plus puissante qu'A1111 pour les workflows complexes.", keywords: [] },
        { name: "OpenArt.ai",             tag: "Prompts",        desc: "Des milliers de prompts avec leurs outputs. Parfait pour apprendre à prompter.", keywords: ["Moebius style prompt", "vaporwave surreal"] },
        { name: "Lexica.art",             tag: "Recherche",      desc: "Moteur de recherche de prompts SD. Trouve des images générées + le prompt exact.", keywords: [] },
        { name: "Krea.ai",                tag: "Interface",      desc: "Canvas IA en temps réel. Excellent pour l'itération rapide. Freemium.", keywords: [] },
        { name: "r/StableDiffusion",      tag: "Communauté",     desc: "Communauté principale SD. Actualités, workflows, comparatifs.", keywords: [] },
        { name: "CLIP Interrogator (HF)", tag: "Outil",          desc: "Analyse une image et génère un prompt SD. Indispensable pour reverse-engineer un style.", keywords: [] }
      ],
      roadmap: ["Installer A1111 ou ComfyUI", "Télécharger 2 LoRA sur Civitai", "Créer un dataset de 20 images → LoRA custom", "Veille Civitai mensuelle"],
      combos: ["OpenArt prompt → ComfyUI → 50 seeds → best-of Pinterest", "LoRA Moebius × pixel art checkpoint = esthétique hybride"]
    },
    {
      id: "s03", num: "03",
      title: "Pixel art & esthétique Minecraft",
      desc: "Palettes, outils, tutoriels et communautés",
      resources: [
        { name: "Lospec",                        tag: "Palettes",   desc: "Palettes officielles de la communauté + éditeur en ligne + tutorials.", keywords: ["Endesga 32", "Resurrect 64", "Apollo palette"] },
        { name: "Piskel",                        tag: "Éditeur web",desc: "Éditeur pixel art gratuit dans le navigateur. Animation intégrée.", keywords: [] },
        { name: "Aseprite",                      tag: "Éditeur pro",desc: "Standard de l'industrie. 20$ ou compilable gratuitement.", keywords: [] },
        { name: "AdamCYounis (YouTube)",         tag: "Tutoriels",  desc: "Tutorials pixel art les plus pédagogiques du net.", keywords: ["AdamCYounis environment pixel"] },
        { name: "Brandon James Greer (YouTube)", tag: "Tutoriels",  desc: "Focus sur contraintes de couleurs, palettes vintage, esthétique Game Boy.", keywords: ["limited palette pixel art"] },
        { name: "Itch.io — Free Assets",         tag: "Assets",     desc: "Des milliers d'assets pixel art gratuits. Tilesets sci-fi, environnements dark.", keywords: ["sci-fi tileset free", "cyberpunk sprite"] },
        { name: "Kenney.nl",                     tag: "Assets",     desc: "Assets gratuits domaine public. Référence pour prototypage rapide.", keywords: [] },
        { name: "Planet Minecraft",              tag: "Communauté", desc: "Texture packs, maps, builds communautaires. Moodboards Minecraft réinventé.", keywords: [] }
      ],
      roadmap: ["Choisir UNE palette Lospec pour 30 jours", "Créer un sprite 32x32 par semaine", "Explorer Itch.io free assets sci-fi", "Challenge mensuel : reproduire Minecraft dans ta palette"],
      combos: ["SD pixel art LoRA → Aseprite → animation = workflow complet", "Lospec palette → cohérence entre jeu + pixel art + vidéo"]
    },
    {
      id: "s04", num: "04",
      title: "Univers sci-fi / rétro-futuristes",
      desc: "Références, archives et lore pour construire des mondes",
      resources: [
        { name: "Moebius — Site officiel",      tag: "Référence",  desc: "Archives, prints, biographie. Point de départ obligatoire pour la DA rétro-futuriste.", keywords: ["Moebius Arzach", "Jean Giraud comic"] },
        { name: "Heavy Metal Magazine Archive", tag: "Archives",   desc: "Magazine légendaire (Moebius, Druillet, Bilal). Archives années 70-80 scannées.", keywords: ["heavy metal magazine 1977"] },
        { name: "Paleofuture",                  tag: "Blog",       desc: "Archive des visions du futur non réalisées. Atomic age, flying cars, space colonies.", keywords: ["atomic age design"] },
        { name: "r/Retrofuturism",              tag: "Communauté", desc: "Communauté dédiée très active. Images, discussions, références.", keywords: [] },
        { name: "r/ImaginaryFuturism",          tag: "Communauté", desc: "Concept art sci-fi filtré par upvotes. Haute qualité garantie.", keywords: [] },
        { name: "NASA Image & Video Library",   tag: "Archives",   desc: "Photos spatiales authentiques en domaine public. Apollo, rovers martiens.", keywords: ["NASA space photography"] },
        { name: "Worldbuilding Stack Exchange", tag: "Communauté", desc: "World-builders sérieux. Questions sur physique, sociétés, écologies fictives.", keywords: [] },
        { name: "Standard Ebooks",              tag: "Lectures",   desc: "EPUB gratuits haute qualité. Strugatsky, Philip K. Dick, Ursula K. Le Guin.", keywords: [] }
      ],
      roadmap: ["Télécharger 3 scans Heavy Metal", "S'abonner r/Retrofuturism + r/ImaginaryFuturism", "Définir un 'référent d'univers' pour chaque projet"],
      combos: ["NASA photos → img2img SD = science documentaire hallucinée", "Heavy Metal scan → CLIP Interrogator → LoRA = style BD SF"]
    },
    {
      id: "s05", num: "05",
      title: "Sound design, ambient & musique",
      desc: "Sons, radios, outils pour créer l'atmosphère",
      resources: [
        { name: "SomaFM",                   tag: "Radio",      desc: "Radios internet gratuites 24/7. Drone Zone, Space Station, Suburbs of Goa.", keywords: ["drone zone somafm"] },
        { name: "Mynoise.net",              tag: "Ambiance",   desc: "Générateurs de bruit ambiant ultra-paramétrables. Space Odyssey, Binaural Drones.", keywords: [] },
        { name: "Freesound.org",            tag: "Samples",    desc: "Bibliothèque CC. Millions de samples : glitch, sci-fi, ambiance, nature.", keywords: ["deep space ambience", "glitch texture sound"] },
        { name: "Bandcamp — Ambient/Drone", tag: "Musique",    desc: "Écoute gratuite. Brian Eno, Stars of the Lid, Grouper, Tim Hecker.", keywords: ["ambient drone bandcamp"] },
        { name: "Free Music Archive",       tag: "Musique CC", desc: "Musique sous licence Creative Commons. Filtres par genre.", keywords: [] },
        { name: "Suno.ai",                  tag: "IA Musicale",desc: "Génération musicale IA. Freemium. Créer des ambiances pour tes projets.", keywords: [] },
        { name: "Audacity",                 tag: "Éditeur",    desc: "Éditeur audio gratuit open source. Couper, layerer, exporter.", keywords: [] },
        { name: "Archive.org — 78rpm",      tag: "Archives",   desc: "Enregistrements vintage 1900-1950. Son lo-fi authentique pour layering.", keywords: ["78rpm vintage music"] }
      ],
      roadmap: ["Installer SomaFM sur mobile", "Compte Freesound → dossier sons par projet", "Experiment mensuel : 2 min d'ambiance pour une image SD"],
      combos: ["SomaFM Drone Zone + Mynoise Rain = session hyperfocused", "Suno prompt + Freesound layers = bande son unique pour jeu"]
    },
    {
      id: "s06", num: "06",
      title: "Création de mèmes artistiques",
      desc: "Formats, outils et communautés pour le mème travaillé",
      resources: [
        { name: "Know Your Meme",  tag: "Référence",  desc: "Documentation exhaustive des formats et origines.", keywords: [] },
        { name: "Kapwing",         tag: "Éditeur",    desc: "Éditeur vidéo/image de mèmes dans le navigateur. Templates, sous-titres. Freemium.", keywords: [] },
        { name: "Imgflip",         tag: "Éditeur",    desc: "Générateur de mèmes classiques + templates communautaires. Gratuit.", keywords: [] },
        { name: "r/AdvancedFunny", tag: "Communauté", desc: "Mèmes travaillés visuellement. Absurde de haute qualité.", keywords: [] },
        { name: "r/surrealmemes",  tag: "Communauté", desc: "Mèmes déstructurés, glitchés, dadaïstes. Entre le drôle et l'art conceptuel.", keywords: ["surreal meme"] },
        { name: "Tumblr",          tag: "Plateforme", desc: "Archive vivante de l'esthétique internet. Mèmes artistiques, cultures niches.", keywords: ["surreal memes tumblr"] },
        { name: "Canva",           tag: "Design",     desc: "Pour les mèmes avec un vrai travail de design. Typographie, composition.", keywords: [] }
      ],
      roadmap: ["Archiver 20 mèmes visuellement forts", "Créer 1 mème par semaine", "Expérimenter différents formats", "Objectif : un format signature"],
      combos: ["SD image × Kapwing texte = mème art déguisé en mème", "r/surrealmemes + Lospec palette + pixel art = mème pixel absurde"]
    },
    {
      id: "s07", num: "07",
      title: "Game design & expériences interactives",
      desc: "Outils, jams et ressources pour créer des jeux",
      resources: [
        { name: "Itch.io",                       tag: "Plateforme", desc: "Plateforme indie de référence. Joue, publie, participe aux jams.", keywords: ["atmospheric puzzle game", "ambient exploration"] },
        { name: "Game Maker's Toolkit (YouTube)", tag: "Tutoriels",  desc: "Meilleure chaîne de game design. Analyses de mécaniques, level design.", keywords: [] },
        { name: "GDevelop",                      tag: "Moteur",     desc: "Moteur de jeux gratuit sans code (ou avec). Adapté aux jeux web.", keywords: [] },
        { name: "Phaser.js",                     tag: "Framework",  desc: "Framework JavaScript pour jeux web. Utilisé dans Tower Defense et Puzzle Donjon.", keywords: ["phaser 3 tutorial"] },
        { name: "Twine",                         tag: "Narratif",   desc: "Outil gratuit pour créer des fictions interactives. Aucun code requis.", keywords: [] },
        { name: "Ludum Dare",                    tag: "Game Jam",   desc: "Game jam majeure 3x par an. 48h pour créer un jeu seul.", keywords: [] },
        { name: "Kenney.nl",                     tag: "Assets",     desc: "Assets gratuits domaine public. Tilemaps, sons, sprites.", keywords: [] },
        { name: "OpenGameArt.org",               tag: "Assets",     desc: "Art gratuit CC pour prototypes et jeux terminés.", keywords: [] }
      ],
      roadmap: ["Regarder 5 vidéos GMTK", "GDD one-page pour chaque projet", "Participer à une game jam", "Publier un prototype sur Itch.io"],
      combos: ["Twine prototype → Phaser.js → DA SD-generated = jeu complet", "GDevelop + Kenney + Freesound = prototype en 48h"]
    },
    {
      id: "s08", num: "08",
      title: "Documentation, organisation & productivité",
      desc: "Outils et méthodes pour structurer le flux créatif",
      resources: [
        { name: "Obsidian", tag: "Notes",      desc: "Notes Markdown, graphe de connaissances. Gratuit. Local. Second cerveau créatif.", keywords: [] },
        { name: "Are.na",   tag: "Curation",   desc: "Curation web visuelle. Are.na capture le visuel, Obsidian la réflexion.", keywords: [] },
        { name: "Notion",   tag: "Workspace",  desc: "Freemium généreux. Roadmaps, bases de données, wikis d'univers.", keywords: ["creative project tracker notion"] },
        { name: "Milanote", tag: "Moodboards", desc: "Moodboards visuels. Interface whiteboard + colonnes. Freemium.", keywords: [] },
        { name: "Trello",   tag: "Kanban",     desc: "Kanban gratuit. Un board par projet : idée → en cours → terminé.", keywords: [] },
        { name: "GitHub",   tag: "Code",       desc: "Pour les projets code. GitHub Pages pour héberger gratuitement.", keywords: [] },
        { name: "Logseq",   tag: "Notes",      desc: "Alternative Obsidian open source. Pensée en blocs.", keywords: [] }
      ],
      roadmap: ["Choisir UN outil central (Obsidian)", "Board Trello pour chaque projet actif", "Weekly review chaque vendredi 15 min", "Documenter le processus"],
      combos: ["Obsidian + Are.na + Trello = OS créatif complet", "GitHub Pages + ce dashboard = site accessible partout"]
    },
    {
      id: "s09", num: "09",
      title: "Pinterest, diffusion & stratégie de contenu",
      desc: "Plateformes, rythmes et outils de publication",
      resources: [
        { name: "Pinterest",  tag: "Distribution",    desc: "Levier principal de diffusion visuelle. 5-10 pins/jour, mélange créations + curation.", keywords: ["retrofuturism art", "AI generated art", "cyberpunk pixel art"] },
        { name: "Cara.app",   tag: "Réseau artistes", desc: "Réseau social anti-scraping IA. Communauté qui apprécie la démarche artistique.", keywords: [] },
        { name: "Tumblr",     tag: "Plateforme",      desc: "Revival en cours. Communautés niches actives.", keywords: [] },
        { name: "Instagram",  tag: "Plateforme",      desc: "Grids thématiques + Reels pour vidéos ambient.", keywords: [] },
        { name: "TikTok",     tag: "Vidéo",           desc: "Pour les process vidéo : timelapse pixel art, génération SD en direct.", keywords: ["watch me make pixel art tiktok"] },
        { name: "Itch.io",    tag: "Jeux",            desc: "Publier jeux et expériences interactives.", keywords: [] },
        { name: "YouTube",    tag: "Vidéo long",      desc: "Vidéos ambient longues (1-3h). Audience très fidèle.", keywords: ["ambient video lofi pixel art"] },
        { name: "Linktree",   tag: "Hub",             desc: "Un lien pour toutes tes plateformes. Gratuit.", keywords: [] }
      ],
      roadmap: ["Setup Pinterest : 5 boards + 50 pins", "Premier post personnel", "5 pins/jour + 2 posts perso/semaine", "Mois 3 : analyser les performances"],
      combos: ["SD → Aseprite animation → TikTok timelapse → Pinterest = contenu recyclé 4x", "Itch.io → Pinterest → YouTube devlog = écosystème projet"]
    },
    {
      id: "s10", num: "10",
      title: "Ressources philosophiques & contemplatives",
      desc: "Nourrir la pensée derrière les créations",
      resources: [
        { name: "The Marginalian",           tag: "Blog",        desc: "Essais sur art, science, poésie, philosophie de la créativité.", keywords: ["creativity philosophy"] },
        { name: "Alan Watts — Archive.org",  tag: "Audio",       desc: "Conférences gratuites. Philosophie bouddhiste × culture occidentale.", keywords: ["alan watts lecture"] },
        { name: "Aeon Magazine",             tag: "Articles",    desc: "Essais longs sur philosophie, science, culture. Un des meilleurs magazines en ligne.", keywords: ["consciousness creativity"] },
        { name: "The Long Now Foundation",   tag: "Podcasts",    desc: "Séminaires sur la pensée à long terme, civilisation, futur.", keywords: [] },
        { name: "r/Solarpunk",               tag: "Communauté",  desc: "Utopie écologique futuriste. Esthétique + philosophie.", keywords: [] },
        { name: "Terence McKenna — YouTube", tag: "Conférences", desc: "Conférences sur conscience, art, langage.", keywords: [] },
        { name: "Ursula K. Le Guin",         tag: "Lectures",    desc: "Essais sur langage, fiction, utopie. Carrier Bag Theory of Fiction.", keywords: [] }
      ],
      roadmap: ["The Marginalian : 1 article/semaine", "Alan Watts : fond sonore pendant la création", "Une question philosophique par projet"],
      combos: ["Alan Watts + SomaFM = session ultra-immersive", "Aeon article → note Obsidian → connexion avec projet"]
    },
    {
      id: "s11", num: "B1",
      title: "Rabbit Holes Internet",
      desc: "Gouffres fascinants adaptés à ton cerveau créatif",
      resources: [
        { name: "Marginalia Search",           tag: "Moteur",      desc: "Retourne uniquement des petits sites, blogs indépendants, pages oubliées.", keywords: [] },
        { name: "Wayback Machine",             tag: "Archives",    desc: "Sites des années 90-2000. Esthétique early web, GIFs, layouts cassés.", keywords: ["geocities archive", "early internet web 1.0"] },
        { name: "TV Tropes",                   tag: "Narratif",    desc: "Conventions storytelling. Cherche : Schizo Tech, Desert Punk, Cyber Punk.", keywords: ["schizo tech trope"] },
        { name: "The Useless Web",             tag: "Art web",     desc: "Sites internet inutiles et expérimentaux. Art web absurde pur.", keywords: [] },
        { name: "ASCII Art Archive",           tag: "Esthétique",  desc: "Art ASCII complet. Esthétique terminal, rétro, glitché.", keywords: ["ascii art generator"] },
        { name: "Glitch.com",                  tag: "Expérimental",desc: "Projets web expérimentaux. Art interactif, weird web.", keywords: [] },
        { name: "Wikipedia Article Aléatoire", tag: "Exercice",    desc: "Cliquer 10 fois. Noter les 3 qui inspirent. Connexions inattendues.", keywords: [] }
      ],
      roadmap: ["Remplacer Google par Marginalia Search une fois/semaine", "Session mensuelle Wayback Machine", "15 min TV Tropes avant tout projet narratif"],
      combos: ["Wayback Machine screenshot → texture SD = esthétique early-web+IA", "ASCII art + Aseprite = pixel art terminal"]
    },
    {
      id: "s12", num: "B2",
      title: "Esthétiques à explorer",
      desc: "Dictionnaire visuel à convertir en projets",
      resources: [
        { name: "Cassette Futurism",    tag: "Esthétique", desc: "Le futur imaginé dans les années 80. VHS, chromes, synthétiseurs.", keywords: ["cassette futurism aesthetic"] },
        { name: "Liminal Spaces",       tag: "Esthétique", desc: "Espaces de transition vides, nostalgiques. Parkings, couloirs la nuit.", keywords: ["liminal space photography"] },
        { name: "Dreamcore / Weirdcore",tag: "Esthétique", desc: "Logique de rêve, distorsion de la réalité, surréalisme doux.", keywords: ["dreamcore aesthetic"] },
        { name: "Solarpunk",            tag: "Esthétique", desc: "Utopie verte et lumineuse. Architecture végétale, lumière chaude.", keywords: ["solarpunk architecture"] },
        { name: "Atompunk",             tag: "Esthétique", desc: "Années 50-60, atome, expo universelle, optimisme naïf.", keywords: ["atompunk design"] },
        { name: "Brutalist Web Design", tag: "Esthétique", desc: "Web austère, typographie massive, béton numérique.", keywords: ["brutalist web design"] },
        { name: "Y2K Aesthetic",        tag: "Esthétique", desc: "Plastique transparent, futurisme 2000, couleurs acides, logos chrome.", keywords: ["Y2K aesthetic"] },
        { name: "Dieselpunk",           tag: "Esthétique", desc: "Entre-deux-guerres mondiales, mécanique brutal. Huile, vapeur, rivets.", keywords: ["dieselpunk art"] }
      ],
      roadmap: ["2 esthétiques inconnues ce mois → 10 images SD chacune", "Canal Are.na par esthétique explorée", "Croiser 2 esthétiques incompatibles → projet"],
      combos: ["Cassette Futurism × Solarpunk = futur rétro optimiste", "Liminal Spaces × Pixel Art = jeu contemplatif"]
    },
    {
      id: "s13", num: "B3",
      title: "Rituels créatifs",
      desc: "Construire une routine artistique immersive",
      resources: [
        { name: "Rituel de début",         tag: "15 min",           desc: "SomaFM Drone Zone → 5 min Are.na contemplatif → note d'intention Obsidian → fermer les notifs.", keywords: [] },
        { name: "Review hebdomadaire",     tag: "Vendredi 30 min",  desc: "Review Trello + 5 nouvelles images références + prochain objectif + publier 1 WIP.", keywords: [] },
        { name: "Bilan mensuel",           tag: "Dernier dimanche", desc: "Relecture notes Obsidian → 3 connexions inattendues → arrêter quelque chose → commencer.", keywords: [] },
        { name: "Débloquer la créativité", tag: "Urgence",          desc: "10 min Marginalia + mot aléatoire → scan Heavy Metal → 50 images SD → Alan Watts 20 min.", keywords: [] },
        { name: "Fin de projet",           tag: "Clôture",          desc: "Archiver → 5 lignes sur ce qu'on a appris → publier quelque chose → pause 2 jours.", keywords: [] }
      ],
      roadmap: ["Appliquer le rituel de début dès demain", "Bloquer 30 min chaque vendredi", "Documenter les rituels dans Obsidian"],
      combos: []
    },
    {
      id: "s14", num: "B4",
      title: "Projets expérimentaux",
      desc: "Idées mélangeant IA, pixel art, vidéo, musique et narration",
      resources: [
        { name: "Chroniques d'une planète oubliée", tag: "Projet", desc: "30 images SD cohérentes + lore 500 mots + ambiance sonore 10 min → vidéo YouTube.", keywords: [] },
        { name: "Pixel Diary",                      tag: "Projet", desc: "Un pixel art 64x64 par jour pendant 30 jours. Chaque image = une émotion.", keywords: [] },
        { name: "Le Glitch Museum",                 tag: "Projet", desc: "Site GitHub Pages avec 20 images SD comme œuvres de musée fictif.", keywords: [] },
        { name: "Mème Archéologique",               tag: "Projet", desc: "Format mème → refait en pixel art avec chute absurde. Série de 10.", keywords: [] },
        { name: "Ambient Game",                     tag: "Projet", desc: "Jeu Phaser.js sans objectif. Environnement pixel art, musique ambient, citations.", keywords: [] },
        { name: "LoRA Personnelle",                 tag: "Projet", desc: "50 images de ton esthétique → entraîner une LoRA → DA signature.", keywords: [] },
        { name: "Sonic Landscape",                  tag: "Projet", desc: "Image SD impossible + bande son Freesound → loop vidéo 3 min YouTube + TikTok.", keywords: [] }
      ],
      roadmap: ["Choisir UN projet cette semaine", "Deadline 2 semaines même imparfait", "Documenter en temps réel dans Obsidian", "Publier à la fin"],
      combos: ["Pixel Diary × Sonic Landscape = image + son par jour", "Glitch Museum × LoRA Personnelle = exposition style IA"]
    }
  ]
};


// ═══════════════════════════════════════════════════════════════
// GAME — CHARACTERS DEFINITION
// ═══════════════════════════════════════════════════════════════
const CHARS_DEF = [
  {
    id: 'scout', name: 'PIXEL SCOUT', sprite: '◈',
    cost: 50, pps: 0.5, cpcBonus: 0,
    section: 's03',
    desc: 'Explore les palettes et sprites pixel art',
    discoveries: ['Endesga 32 trouvée !', 'Sprite 32x32 complété', 'Palette Apollo chargée', 'Asset sci-fi localisé', 'Timelapse en cours...']
  },
  {
    id: 'drone', name: 'AI DRONE', sprite: '⬡',
    cost: 200, pps: 2, cpcBonus: 0,
    section: 's02',
    desc: 'Scanne les modèles SD et LoRA',
    discoveries: ['LoRA Moebius détectée', 'Checkpoint chargé', 'Prompt optimisé ×3', 'FLUX activé', 'Dataset : 20 images indexées']
  },
  {
    id: 'walker', name: 'VOID WALKER', sprite: '◉',
    cost: 800, pps: 7, cpcBonus: 1,
    section: 's10',
    desc: 'Parcourt les archives philosophiques',
    discoveries: ['Alan Watts : accès', 'Citation Aeon extraite', 'Le Guin : chapitre lu', 'Long Now : signal capté', 'Contemplation active']
  },
  {
    id: 'glitch', name: 'GLITCH BOT', sprite: '⌬',
    cost: 3000, pps: 25, cpcBonus: 3,
    section: null,
    desc: 'Glitche et mine tout le site',
    discoveries: ['ERREUR : beauté détectée', 'Glitch 404 → art', 'Protocole absurde.exe', 'Reality.corrupted', 'NULL_POINTER → créativité']
  },
  {
    id: 'moebius', name: 'MOEBIUS', sprite: '✦',
    cost: 10000, pps: 100, cpcBonus: 10,
    section: 's04',
    desc: 'Maître de l\'espace et du temps créatif',
    discoveries: ['L\'espace est une bande dessinée', 'Arzach survole la section', 'Ligne claire × cosmos', 'Dune s\'ouvre...', 'Le trait devient univers']
  }
];


// ═══════════════════════════════════════════════════════════════
// RESOURCE STORIES — lore + image path per resource
// ═══════════════════════════════════════════════════════════════
const RESOURCE_STORIES = {
  // s01
  "Are.na":                     { image:null, story:"BASE DE DONNÉES NON-COMMERCIALE. Archives visuelles organisées par des humains, sans filtre algorithmique. Chaque canal est un réseau neuronal artisanal en activité permanente." },
  "ArtStation":                 { image:null, story:"PIPELINES VISUELS DÉCLASSIFIÉS. Direction artistique professionnelle pour jeux et films. Les blueprints de Cyberpunk 2077 et Dune sont accessibles ici, directement depuis leurs créateurs." },
  "Cargo Collective":           { image:null, story:"SIGNAL ALTERNATIF. Portfolios bruts d'artistes underground. Esthétiques risquées, non filtrées par l'algorithme. La contre-culture numérique tient ses archives ici." },
  "Smithsonian Open Access":    { image:null, story:"MÉMOIRE NUMÉRISÉE DE L'HUMANITÉ. 2,8 millions d'artefacts en domaine public. Gravures victoriennes, planches anatomiques, archives scientifiques — tout est libre d'accès et réutilisable." },
  "Internet Archive — Pulp":    { image:null, story:"FUTURS IMPOSSIBLES ARCHIVÉS. Couvertures de magazines sci-fi 1930–1970. Rockets chromées, planètes impossibles — un optimisme naïf sur le futur qui n'a jamais existé mais peut encore se matérialiser." },
  "Flickr Commons":             { image:null, story:"FONDS PHOTOGRAPHIQUES INSTITUTIONNELS. NASA, bibliothèques nationales, musées. L'argentique pré-numérique encode des textures de lumière impossibles à recréer synthétiquement." },
  "BLDGBLOG":                   { image:null, story:"GÉOGRAPHIES FICTIVES. Un blog sur des villes impossibles, des déserts habités, des topographies qui n'existent pas encore. Chaque article reconfigure la façon de percevoir l'espace." },
  "Lospec":                     { image:null, story:"BASE DE DONNÉES CHROMATIQUE. Palettes pixel art curées par la communauté mondiale. Choisir une palette c'est choisir un univers entier — chaque contrainte de couleur est une architecture de perception." },
  "DeviantArt — Sci-fi Groups": { image:null, story:"ARCHIVES COMMUNAUTAIRES. Groupes actifs sur le retrofuturisme, le space opera, le cyberpunk depuis l'an 2000. Des milliers d'artistes auto-publiés maintiennent le signal fort." },
  // s02
  "Civitai":                    { image:null, story:"DÉPÔT DE FORMES SYNTHÉTIQUES. Des LoRA compressent des styles entiers en quelques megabytes. MOEBIUS.safetensors encode 50 ans d'une œuvre. Chaque checkpoint est un univers téléchargeable." },
  "Hugging Face":               { image:null, story:"HUB OPEN SOURCE MONDIAL. FLUX, SDXL, SD3 en accès libre. Des Spaces permettent d'expérimenter sans installation locale. La frontière entre recherche académique et création s'efface ici." },
  "ComfyUI":                    { image:null, story:"INTERFACE NODE-BASED. Chaque nœud est une opération sur les données visuelles. Les workflows complexes deviennent des graphes de pensée visuelle — plus puissant qu'A1111 pour les pipelines avancés." },
  "OpenArt.ai":                 { image:null, story:"DICTIONNAIRE VISUEL VIVANT. Des milliers de prompts avec leurs outputs référencés. Apprendre à prompter c'est apprendre à parler une langue qui n'existait pas il y a 3 ans." },
  "Lexica.art":                 { image:null, story:"MOTEUR INVERSÉ. Trouve l'image générée et le prompt exact qui l'a produite. Reverse-engineering de n'importe quel style visuel. Déconstruire, réinjecter, transformer." },
  "Krea.ai":                    { image:null, story:"CANVAS EN TEMPS RÉEL. L'image se génère pendant que tu dessines. Itération instantanée. La distance entre l'idée et sa forme visuelle se mesure désormais en secondes." },
  "r/StableDiffusion":          { image:null, story:"NŒUD COMMUNAUTAIRE CENTRAL. Actualités, workflows, comparatifs en temps réel. Les découvertes techniques y circulent avant d'être documentées dans les wikis officiels." },
  "CLIP Interrogator (HF)":     { image:null, story:"ANALYSE INVERSÉE. Upload une image, reçois le prompt qui l'aurait générée. Indispensable pour déconstruire un style visuel existant et le réintégrer dans un pipeline de génération." },
  // s03
  "Piskel":                     { image:null, story:"ÉDITEUR NATIF WEB. Gratuit, animation intégrée, sans installation. Idéal pour prototyper des sprites rapidement avant de passer sur Aseprite. La porte d'entrée du pixel art." },
  "Aseprite":                   { image:null, story:"STANDARD DE L'INDUSTRIE. 20$ ou compilable depuis le dépôt GitHub officiel. Couches, animations, palettes indexées. L'outil de référence des artistes pixel professionnels." },
  "AdamCYounis (YouTube)":      { image:null, story:"TRANSMISSION PÉDAGOGIQUE. Les tutoriels les plus clairs du domaine pixel art. Environnements, personnages, animations — une progression rigoureuse accessible à tous les niveaux." },
  "Brandon James Greer (YouTube)":{ image:null, story:"CONTRAINTES CRÉATIVES. Focus sur les limitations de palette, l'esthétique Game Boy, les couleurs vintages. La contrainte comme moteur de créativité plutôt que limitation." },
  "Itch.io — Free Assets":      { image:null, story:"MARCHÉ LIBRE. Des milliers d'assets pixel art gratuits en téléchargement direct. Tilesets sci-fi, environnements dark, sprites cyberpunk. Prototypage immédiat sans contrainte de droit." },
  "Kenney.nl":                  { image:null, story:"DOMAINE PUBLIC TOTAL. Assets de haute qualité libres de droits. La référence universelle pour le prototypage rapide et les game jams de 48 heures." },
  "Planet Minecraft":           { image:null, story:"LABORATOIRE COMMUNAUTAIRE. Texture packs, maps, builds — un espace pour réinterpréter l'esthétique Minecraft selon d'autres grammaires visuelles et d'autres mondes." },
  // s04
  "Moebius — Site officiel":    { image:null, story:"FONDATEUR DU LANGAGE VISUEL. Archives, prints, biographie. Jean Giraud a redéfini l'espace de la science-fiction visuelle. Point de départ obligatoire pour toute direction artistique rétro-futuriste sérieuse." },
  "Heavy Metal Magazine Archive":{ image:null, story:"MAGAZINE LÉGENDAIRE. Moebius, Druillet, Bilal — les pères fondateurs de la BD science-fiction. Archives 1977–1990 scannées. Un concentré d'esthétiques impossibles qui ont défini notre imaginaire collectif." },
  "Paleofuture":                { image:null, story:"ARCHÉOLOGIE DU FUTUR. Des visions du futur qui ne se sont pas réalisées. Atomic age, flying cars, colonies spatiales. Un futur de papier toujours disponible — recyclable en matière première créative." },
  "r/Retrofuturism":            { image:null, story:"COMMUNAUTÉ ACTIVE. Images, discussions, références en flux continu. La mémoire collective du futur tel qu'il était imaginé avant qu'il ne devienne passé désuet." },
  "r/ImaginaryFuturism":        { image:null, story:"CONCEPT ART FILTRÉ. Qualité garantie par les upvotes communautaires. Les meilleurs artistes de concept art science-fiction y partagent leur processus et leurs œuvres." },
  "NASA Image & Video Library": { image:null, story:"ARCHIVES SPATIALES AUTHENTIQUES. Photos Apollo, rovers martiens, nébuleuses. Domaine public total. La réalité cosmique comme source d'inspiration directe et irremplaçable." },
  "Worldbuilding Stack Exchange":{ image:null, story:"INGÉNIERIE FICTIVE SÉRIEUSE. Questions sur la physique, les sociétés, les écologies des mondes imaginaires. Un think tank pour la cohérence interne des univers fictionnels." },
  "Standard Ebooks":            { image:null, story:"BIBLIOTHÈQUE HAUTE QUALITÉ. Strugatsky, Philip K. Dick, Ursula K. Le Guin en EPUB soigné et gratuit. La littérature science-fiction comme fondement conceptuel de toute direction artistique." },
  // s05
  "SomaFM":                     { image:null, story:"RADIO SPATIALE 24/7. Drone Zone, Space Station, Suburbs of Goa — des ambiances éditées par des humains passionnés. Le fond sonore idéal pour les sessions de création longues et immersives." },
  "Mynoise.net":                { image:null, story:"GÉNÉRATEURS ULTRA-PARAMÉTRABLES. Space Odyssey, Binaural Drones, pluie calibrée. Chaque curseur est un paramètre d'immersion. Personnalisation totale de l'environnement sonore de travail." },
  "Freesound.org":              { image:null, story:"BIBLIOTHÈQUE CC. Des millions de samples glitch, sci-fi, ambiance sous Creative Commons. La matière première sonore de tes projets, légalement libre de réutilisation." },
  "Bandcamp — Ambient/Drone":   { image:null, story:"ÉCOUTE ET SOUTIEN DIRECT. Brian Eno, Stars of the Lid, Tim Hecker, Grouper. L'ambient et le drone dans leur forme la plus pure, avec la rémunération directe des artistes." },
  "Free Music Archive":         { image:null, story:"LICENCES LIBRES. Musique filtrable par genre sous Creative Commons. Usage commercial possible sur certaines licences. La bibliothèque sonore légale pour projets personnels et commerciaux." },
  "Suno.ai":                    { image:null, story:"GÉNÉRATION MUSICALE IA. Freemium. Crée des ambiances instrumentales en quelques secondes. Bandes sons uniques pour projets personnels sans nécessiter de compétences musicales." },
  "Audacity":                   { image:null, story:"ÉDITEUR OPEN SOURCE. Couper, coller, layerer, exporter. Gratuit, stable, multiplateforme depuis 20 ans. L'outil de base pour toute manipulation sonore sérieuse." },
  "Archive.org — 78rpm":        { image:null, story:"ENREGISTREMENTS VINTAGE. Sons authentiques 1900–1950 sur cylindres et disques 78 tours. Lo-fi réel — une patine analogique impossible à synthétiser numériquement avec les mêmes accidents parfaits." },
  // s06
  "Know Your Meme":             { image:null, story:"DOCUMENTATION EXHAUSTIVE. Origines, évolutions, variantes de chaque format méméique. Comprendre l'archéologie d'un mème c'est comprendre une unité de culture partagée globalement." },
  "Kapwing":                    { image:null, story:"ÉDITEUR WEB POLYVALENT. Vidéo, image, templates, sous-titres automatiques. Freemium généreux pour les créations de mèmes avec un vrai travail visuel et éditorial." },
  "Imgflip":                    { image:null, story:"GÉNÉRATEUR CLASSIQUE. Templates communautaires + éditeur de légendes rapide. Directement dans le navigateur, sans installation. Pour les formats texte/image standards." },
  "r/AdvancedFunny":            { image:null, story:"MÈMES TRAVAILLÉS VISUELLEMENT. L'absurde de haute qualité. La frontière floue entre humour involontaire et art conceptuel assumé. Chaque post est une micro-œuvre." },
  "r/surrealmemes":             { image:null, story:"DÉSTRUCTURATION FORMELLE. Mèmes glitchés, dadaïstes, logiques de rêve appliquées au format. La mécanique du mème poussée jusqu'à son point de rupture esthétique maximale." },
  "Tumblr":                     { image:null, story:"ARCHIVE CULTURELLE VIVANTE. Mèmes artistiques, cultures niches, esthétiques en cours de formation. Une mémoire de l'internet pré-algorithme encore consultable et active." },
  "Canva":                      { image:null, story:"DESIGN MAÎTRISÉ. Typographie, composition, grilles professionnelles. Pour les mèmes qui exigent une vraie intention visuelle — la frontière entre post et affiche graphique." },
  // s07
  "Itch.io":                    { image:null, story:"PLATEFORME INDIE DE RÉFÉRENCE. Jeux publiés, game jams, expérimentation sans contrainte commerciale. Des milliers de créateurs qui bâtissent des univers en dehors des circuits traditionnels." },
  "Game Maker's Toolkit (YouTube)":{ image:null, story:"ANALYSE DE MÉCANIQUES. La meilleure chaîne de game design du web. Déconstruction des systèmes, des boucles de jeu, des intentions derrière chaque choix de design notable." },
  "GDevelop":                   { image:null, story:"MOTEUR SANS CODE REQUIS. Jeux web, desktop, mobile sans programmation obligatoire. Adapté aux prototypes rapides et aux expérimentations de concept avant développement complet." },
  "Phaser.js":                  { image:null, story:"FRAMEWORK JAVASCRIPT. Le moteur derrière tes projets Tower Defense et Puzzle Donjon. Performance web-native, vaste communauté, documentation complète et exemples actifs." },
  "Twine":                      { image:null, story:"FICTION INTERACTIVE. Aucun code requis. Des branches, des états, des récits non-linéaires. La forme narrative la plus proche du jeu vidéo sans développement technique préalable." },
  "Ludum Dare":                 { image:null, story:"GAME JAM MAJEURE. 48 heures pour créer un jeu seul à partir d'un thème imposé. La contrainte temporelle absolue comme moteur créatif. Participer, c'est déjà publier." },
  "OpenGameArt.org":            { image:null, story:"ART LIBRE CC. Ressources visuelles et sonores sous Creative Commons pour prototypes et jeux terminés. Pour les projets qui exigent une direction artistique dès le stade de prototype." },
  // s08
  "Obsidian":                   { image:null, story:"SECOND CERVEAU LOCAL. Notes Markdown, graphe de connaissances, plugins extensibles. Tout reste sur ta machine. L'architecture neuronale de ta créativité, sans dépendance cloud." },
  "Notion":                     { image:null, story:"WORKSPACE INTÉGRÉ. Freemium généreux. Roadmaps, bases de données, wikis d'univers, calendriers. La plateforme de référence pour organiser les projets créatifs complexes." },
  "Milanote":                   { image:null, story:"MOODBOARDS VISUELS. Interface whiteboard avec colonnes. Pensée spatiale et non-linéaire. Idéal pour les phases d'exploration créative avant de structurer une direction." },
  "Trello":                     { image:null, story:"KANBAN GRATUIT. Un board par projet : idée → en cours → terminé. Simple, visuel, efficace. La base de toute gestion de projet créatif sans surcharge cognitive." },
  "GitHub":                     { image:null, story:"VERSIONING ET HÉBERGEMENT. Pour les projets code. GitHub Pages pour déployer gratuitement. L'histoire de chaque modification est conservée indéfiniment — un journal de bord technique." },
  "Logseq":                     { image:null, story:"ALTERNATIVE OBSIDIAN OPEN SOURCE. Pensée en blocs liés. Graphe de connaissances persistant. Une approche différente de la structure qui convient mieux à certains modes de pensée." },
  // s09
  "Pinterest":                  { image:null, story:"MOTEUR DE RECHERCHE VISUEL. Pas un réseau social — un moteur de découverte d'images. 5–10 pins/jour, mélange créations et curation. Le trafic organique s'accumule à long terme." },
  "Cara.app":                   { image:null, story:"RÉSEAU ANTI-SCRAPING IA. Communauté d'artistes qui protège ses œuvres de l'entraînement des modèles. La démarche éthique y est valorisée — un signal émergent fort." },
  "Instagram":                  { image:null, story:"GRIDS THÉMATIQUES. La cohérence visuelle prime sur la fréquence. Reels pour les vidéos process. La présentation en série cohérente est plus puissante qu'un post isolé." },
  "TikTok":                     { image:null, story:"VIDÉO PROCESS. Timelapse pixel art, génération SD en direct, making-of. L'audience réagit fort aux contenus de fabrication. La découverte algorithmique peut être massive et inattendue." },
  "YouTube":                    { image:null, story:"VIDÉO LONGUE FORME. Ambiances de 1–3 heures, devlogs, tutoriels approfondis. L'audience est très fidèle et cherche activement ce type de contenu contemplatif." },
  "Linktree":                   { image:null, story:"HUB CENTRAL. Un lien unique pour toutes tes plateformes. La destination à partager dans chaque bio. Gratuit et suffisant pour centraliser une présence multi-plateforme." },
  // s10
  "The Marginalian":            { image:null, story:"CONNEXIONS INATTENDUES. Essais sur art, science, poésie et philosophie de la créativité. Maria Popova tisse des liens entre des domaines qui semblent étrangers — lecture hebdomadaire recommandée." },
  "Alan Watts — Archive.org":   { image:null, story:"PHILOSOPHIE AUDIO LIBRE. Conférences sur le bouddhisme et la culture occidentale. Gratuit sur Archive.org. Un fond sonore philosophique pour les sessions créatives longues et méditatives." },
  "Aeon Magazine":              { image:null, story:"ESSAIS LONGS. Philosophie, science, culture. Un des meilleurs magazines en ligne. La pensée profonde comme contrepoids nécessaire à la consommation rapide d'images et de contenus courts." },
  "The Long Now Foundation":    { image:null, story:"PENSÉE LONGUE. Séminaires sur la civilisation, le futur à 10 000 ans, les systèmes complexes. L'antidote à la pensée court-terme — reconfigurer l'échelle temporelle de toute création." },
  "r/Solarpunk":                { image:null, story:"UTOPIE ACTIVE. Esthétique et philosophie écologique futuriste. Un imaginaire positif du futur possible. La contre-proposition au cyberpunk dystopique — le futur qu'on veut construire." },
  "Terence McKenna — YouTube":  { image:null, story:"CONSCIOUSNESS EXPLORER. Conférences sur conscience, art, langage, temps et psychédéliques. Une vision radicalement différente de la relation entre l'esprit humain et l'acte de création." },
  "Ursula K. Le Guin":          { image:null, story:"FICTION COMME PHILOSOPHIE. Essais sur le langage, la fiction, l'utopie. La Carrier Bag Theory of Fiction reconfigure la structure du récit héroïque traditionnel. Incontournable." },
  // s11
  "Marginalia Search":          { image:null, story:"INTERNET ALTERNATIF. Retourne uniquement des petits sites, blogs indépendants, pages oubliées. Ce que Google cache sous des milliards de pages commerciales — l'internet authentique." },
  "Wayback Machine":            { image:null, story:"ARCHÉOLOGIE WEB. Sites des années 90–2000. GIFs animés, layouts cassés, HTML brut. L'esthétique early-web comme source d'inspiration rétro-futuriste directe et intacte." },
  "TV Tropes":                  { image:null, story:"GRAMMAIRE NARRATIVE. Conventions et archétypes du storytelling dans tous les médias. Schizo Tech, Desert Punk, Cyber Punk — chaque trope est un outil narratif réutilisable." },
  "The Useless Web":            { image:null, story:"ART WEB PUR. Sites inutiles et expérimentaux — l'absurde comme forme artistique. Cliquer aléatoirement c'est traverser un musée invisible, non cartographié et non monétisé." },
  "ASCII Art Archive":          { image:null, story:"ESTHÉTIQUE TERMINALE. Art ASCII exhaustif. L'image construite caractère par caractère — une contrainte radicale qui force la stylisation absolue et révèle l'essence de toute forme." },
  "Glitch.com":                 { image:null, story:"EXPÉRIMENTATION WEB LIBRE. Projets interactifs, art algorithmique, weird web. Une plateforme pour créer et explorer des expériences web non-conventionnelles en temps réel." },
  "Wikipedia Article Aléatoire":{ image:null, story:"MACHINE À SÉRENDIPITÉ. Cliquer 10 fois. Noter les 3 qui inspirent. Les connexions inattendues entre des sujets distants sont la matière première de la créativité transversale." },
  // s12
  "Cassette Futurism":          { image:null, story:"LE FUTUR DES ANNÉES 80. VHS, chromes, synthétiseurs, terminaux verts. Un imaginaire technologique chaud et analogique — l'époque où le futur semblait proche, tangible et lumineux." },
  "Liminal Spaces":             { image:null, story:"ESPACES DE TRANSITION. Parkings vides, couloirs nocturnes, halls d'hôtel déserts. La nostalgie d'un lieu familier qui ne l'est plus — entre le souvenir et l'inquiétude douce." },
  "Dreamcore / Weirdcore":      { image:null, story:"LOGIQUE DE RÊVE. Distorsion de la réalité, surréalisme doux, textures délavées. L'esthétique de la mémoire en train de se désintégrer — entre le beau et l'inquiétant profond." },
  "Solarpunk":                  { image:null, story:"UTOPIE VERTE. Architecture végétale, lumière chaude, technologie douce. Le futur positif que le cyberpunk n'imagine pas. Le contrepoint nécessaire au dystopique dominant." },
  "Atompunk":                   { image:null, story:"ANNÉES 50–60, L'ATOME. Expo universelle, optimisme naïf, chromé et lisse. Un futur rétro baigné dans l'espoir de la modernité qui précédait la désillusion politique." },
  "Brutalist Web Design":       { image:null, story:"BÉTON NUMÉRIQUE. Typographie massive, layouts austères, pas d'ornement superflu. L'architecture numérique comme matière brute et non poncée — l'anti-design comme esthétique assumée." },
  "Y2K Aesthetic":              { image:null, story:"PLASTIQUE TRANSPARENT. Futurisme 2000, couleurs acides, logos chrome iridescent. L'esthétique d'une époque qui croyait sincèrement que l'avenir serait brillant et sans friction." },
  "Dieselpunk":                 { image:null, story:"ENTRE-DEUX-GUERRES. Mécanique brutal, huile, vapeur, rivets apparents. Un futur alternatif ancré dans l'industrie lourde du début du 20e siècle — le modernisme comme esthétique de force." },
  // s13
  "Rituel de début":            { image:null, story:"PROTOCOLE D'ACTIVATION. SomaFM → Are.na → Obsidian → fermer les notifications. Une séquence de 15 minutes pour calibrer l'état mental avant toute session de création intensive." },
  "Review hebdomadaire":        { image:null, story:"BILAN SYSTÉMIQUE. Chaque vendredi : Trello + nouvelles références + objectif + WIP publié. Un rituel de 30 minutes qui transforme les semaines fragmentées en progression cohérente mesurable." },
  "Bilan mensuel":              { image:null, story:"ARCHÉOLOGIE PERSONNELLE. Relire les notes Obsidian du mois. Trouver 3 connexions inattendues. Arrêter quelque chose. Commencer quelque chose. Restructurer l'espace créatif." },
  "Débloquer la créativité":    { image:null, story:"PROTOCOLE D'URGENCE. Marginalia + mot aléatoire → Heavy Metal → 50 images SD → Alan Watts 20 min. Une séquence pour forcer la déconnexion des patterns habituels de pensée." },
  "Fin de projet":              { image:null, story:"CLÔTURE RITUELLE. Archiver → 5 lignes sur ce qu'on a appris → publier quelque chose même imparfait → pause obligatoire de 2 jours. Intégrer avant de recommencer le cycle." },
  // s14
  "Chroniques d'une planète oubliée":{ image:null, story:"MONDE DOCUMENTÉ. 30 images SD cohérentes + lore 500 mots + ambiance sonore 10 min. Un univers fictif publié comme archive réelle — la fiction comme réalité parallèle attestée." },
  "Pixel Diary":                { image:null, story:"UN PIXEL ART 64×64 PAR JOUR. 30 jours, 30 émotions, 30 images. La contrainte quotidienne transforme la création en pratique régulière, la pratique en identité artistique durable." },
  "Le Glitch Museum":           { image:null, story:"EXPOSITION FICTIVE. Un site GitHub Pages avec 20 œuvres SD comme musée imaginaire. La curature et la mise en scène fictionnelle comme acte artistique à part entière." },
  "Mème Archéologique":         { image:null, story:"FORMAT → PIXEL ART. Prendre un mème existant, le recréer en pixel art avec une chute absurde. Série de 10. Déconstruction et reconstruction de la grammaire culturelle partagée." },
  "Ambient Game":               { image:null, story:"JEU SANS OBJECTIF. Phaser.js, pixel art, musique ambient, citations. Explorer plutôt que gagner. Le jeu comme espace contemplatif — une méditation interactive non-dirigée." },
  "LoRA Personnelle":           { image:null, story:"IDENTITÉ SYNTHÉTIQUE. 50 images de ton esthétique personnelle → entraîner une LoRA → DA signature. La boucle est bouclée : tu deviens ton propre modèle générative." },
  "Sonic Landscape":            { image:null, story:"IMAGE × SON. Visuel SD impossible + bande son Freesound = loop vidéo 3 minutes. Un format court mais dense pour YouTube et TikTok — l'art ambient en format consommable." }
};

// ═══════════════════════════════════════════════════════════════
// ENEMIES DEFINITION
// ═══════════════════════════════════════════════════════════════
const ENEMIES_DEF = [
  { id:'bug',     name:'GLITCH_BUG.exe',    sprite:'⚠',  reward:50,
    intro:'ANOMALIE DÉTECTÉE — UNE ERREUR PARCOURT LE SYSTÈME',
    attacks:['CORRUPTION +35%','SEGFAULT CRITIQUE','NULL POINTER','STACK OVERFLOW','BUFFER OVERFLOW'] },
  { id:'crawler', name:'VOID_CRAWLER',      sprite:'◼',  reward:150,
    intro:'ENTITÉ DU NÉANT NUMÉRIQUE INFILTRÉE',
    attacks:['REALITY.null','MÉMOIRE VIDÉE','SIGNAL BROUILLÉ','DONNÉES CORROMPUES','BOUCLE INFINIE'] },
  { id:'daemon',  name:'PHANTOM_DAEMON',    sprite:'⌀',  reward:400,
    intro:'UN DAEMON FANTÔME PARCOURT LES ARCHIVES',
    attacks:['TIMEOUT CRITIQUE','DÉNI DE SERVICE','INJECTION DÉTECTÉE','CORE DUMP','KERNEL PANIC'] },
];

// ═══════════════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════════════
let GAME = {
  points: 0,
  totalPoints: 0,
  pointsPerClick: 1,
  owned: {}   // { charId: count }
};

function loadGame() {
  const saved = localStorage.getItem('game-v1');
  if (saved) {
    try { GAME = JSON.parse(saved); } catch(e) {}
  }
}

function saveGame() {
  localStorage.setItem('game-v1', JSON.stringify(GAME));
}

function calcPPS() {
  let pps = 0;
  CHARS_DEF.forEach(c => { pps += (GAME.owned[c.id] || 0) * c.pps; });
  return pps;
}

function calcCPC() {
  let cpc = 1;
  CHARS_DEF.forEach(c => { cpc += (GAME.owned[c.id] || 0) * c.cpcBonus; });
  return cpc;
}

function charCost(charDef) {
  const owned = GAME.owned[charDef.id] || 0;
  return Math.floor(charDef.cost * Math.pow(1.15, owned));
}


// ═══════════════════════════════════════════════════════════════
// CLICKER
// ═══════════════════════════════════════════════════════════════
function clickShip(e) {
  const cpc = calcCPC();
  GAME.points += cpc;
  GAME.totalPoints += cpc;
  GAME.pointsPerClick = cpc;

  // visual feedback
  const wrap = document.getElementById('ship-wrap');
  const rect = wrap.getBoundingClientRect();
  spawnFloat(`+${cpc}`, rect.left + rect.width / 2 + (Math.random() - .5) * 40, rect.top + (Math.random() * 20));

  // ship shake
  const ship = document.getElementById('ship');
  ship.style.animation = 'none';
  requestAnimationFrame(() => { ship.style.animation = ''; });

  updateUI();
  saveGame();
}

function spawnFloat(text, x, y) {
  const el = document.createElement('div');
  el.className = 'float-pt';
  el.textContent = text;
  el.style.left = x + 'px';
  el.style.top  = y + 'px';
  el.style.position = 'fixed';
  document.getElementById('global-feedback').appendChild(el);
  setTimeout(() => el.remove(), 900);
}

function updateUI() {
  document.getElementById('pts').textContent = Math.floor(GAME.points).toLocaleString('fr');
  document.getElementById('pps').textContent = calcPPS().toFixed(1);
  document.getElementById('cpc').textContent = calcCPC();
  renderShop();
}


// ═══════════════════════════════════════════════════════════════
// SHOP
// ═══════════════════════════════════════════════════════════════
let activeTab = 'nav';

function setTab(tab) {
  activeTab = tab;
  document.getElementById('tab-nav').classList.toggle('active',  tab === 'nav');
  document.getElementById('tab-shop').classList.toggle('active', tab === 'shop');
  document.getElementById('nav').style.display       = tab === 'nav'  ? 'block' : 'none';
  document.getElementById('sb-search').style.display = tab === 'nav'  ? 'block' : 'none';
  document.getElementById('shop').style.display      = tab === 'shop' ? 'block' : 'none';
  if (tab === 'shop') renderShop();
}

function renderShop() {
  const shop = document.getElementById('shop');
  shop.innerHTML = CHARS_DEF.map(c => {
    const owned = GAME.owned[c.id] || 0;
    const cost  = charCost(c);
    const canAfford = GAME.points >= cost;
    return `
      <div class="shop-item" id="shop-${c.id}">
        <div class="shop-item-head">
          <span class="shop-sprite">${c.sprite}</span>
          <span class="shop-name">${c.name}</span>
          <span class="shop-owned">${owned}</span>
        </div>
        <div class="shop-desc">${c.desc}</div>
        <div class="shop-footer">
          <span class="shop-cost">${cost.toLocaleString('fr')}</span>
          <span class="shop-pps">+${c.pps}/s · +${c.cpcBonus}/clic</span>
          <button class="shop-buy ${canAfford ? '' : 'cant-afford'}"
                  onclick="buyChar('${c.id}')" ${canAfford ? '' : 'disabled'}>
            [ RECRUTER ]
          </button>
        </div>
      </div>`;
  }).join('');
}

function buyChar(id) {
  const def  = CHARS_DEF.find(c => c.id === id);
  const cost = charCost(def);
  if (GAME.points < cost) return;
  GAME.points -= cost;
  GAME.owned[id] = (GAME.owned[id] || 0) + 1;
  saveGame();
  updateUI();
  spawnCharacter(def, GAME.owned[id] - 1);
  // flash
  const item = document.getElementById('shop-' + id);
  if (item) { item.classList.add('unlocked'); setTimeout(() => item.classList.remove('unlocked'), 500); }
}


// ═══════════════════════════════════════════════════════════════
// CHARACTER ENTITIES — FLOATING
// ═══════════════════════════════════════════════════════════════
const activeEntities = [];

function spawnCharacter(def, index) {
  const layer = document.getElementById('char-layer');
  const id = `char-${def.id}-${index}`;

  // don't duplicate
  if (document.getElementById(id)) return;

  const el = document.createElement('div');
  el.className = 'char-entity';
  el.id = id;

  // random start pos in main area
  const startX = 310 + Math.random() * (window.innerWidth - 450);
  const startY = 80  + Math.random() * (window.innerHeight - 200);
  el.style.left = startX + 'px';
  el.style.top  = startY + 'px';

  el.innerHTML = `
    <div class="char-sprite">${def.sprite}</div>
    <div class="char-label">${def.name}</div>`;

  el.addEventListener('click', () => clickChar(el, def));
  layer.appendChild(el);

  const entity = { el, def, x: startX, y: startY, tx: startX, ty: startY, bubbleTimer: 0 };
  activeEntities.push(entity);
}

function clickChar(el, def) {
  const bonus = Math.max(5, Math.floor(calcCPC() * 3));
  GAME.points += bonus;
  GAME.totalPoints += bonus;
  const rect = el.getBoundingClientRect();
  spawnFloat(`+${bonus} ✦`, rect.left + rect.width / 2, rect.top);
  showBubble(el, def.discoveries[Math.floor(Math.random() * def.discoveries.length)]);
  updateUI();
  saveGame();
}

function showBubble(el, text) {
  // remove existing
  const old = el.querySelector('.char-bubble');
  if (old) old.remove();
  const b = document.createElement('div');
  b.className = 'char-bubble';
  b.textContent = text;
  el.appendChild(b);
  setTimeout(() => {
    b.classList.add('hiding');
    setTimeout(() => b.remove(), 400);
  }, 2800);
}

function moveEntities() {
  const W = window.innerWidth, H = window.innerHeight;
  activeEntities.forEach(e => {
    // pick new target occasionally
    if (Math.random() < .008) {
      e.tx = 310 + Math.random() * (W - 450);
      e.ty = 80  + Math.random() * (H - 200);
    }
    // smooth lerp
    e.x += (e.tx - e.x) * 0.012;
    e.y += (e.ty - e.y) * 0.012;
    e.el.style.left = e.x + 'px';
    e.el.style.top  = e.y + 'px';

    // random discovery bubble
    e.bubbleTimer++;
    if (e.bubbleTimer > 600 + Math.random() * 400) {
      e.bubbleTimer = 0;
      // pull a real word from the dashboard
      const words = getDiscoveryWord(e.def);
      showBubble(e.el, words);
    }
  });
}

function getDiscoveryWord(def) {
  // mix: char's own discoveries + real resource names from section
  if (Math.random() < .5) {
    return def.discoveries[Math.floor(Math.random() * def.discoveries.length)];
  }
  // pull from dashboard data
  const section = def.section ? dashData.sections.find(s => s.id === def.section) : dashData.sections[Math.floor(Math.random() * dashData.sections.length)];
  if (!section || !section.resources.length) return def.discoveries[0];
  const res = section.resources[Math.floor(Math.random() * section.resources.length)];
  const texts = [res.name, ...res.keywords.slice(0, 2)].filter(Boolean);
  return texts[Math.floor(Math.random() * texts.length)] || res.name;
}

// respawn owned chars on page load
function respawnOwnedChars() {
  CHARS_DEF.forEach(def => {
    const count = GAME.owned[def.id] || 0;
    for (let i = 0; i < count; i++) spawnCharacter(def, i);
  });
}


// ═══════════════════════════════════════════════════════════════
// INCOME LOOP
// ═══════════════════════════════════════════════════════════════
let lastTick = Date.now();
function gameTick() {
  const now  = Date.now();
  const dt   = (now - lastTick) / 1000;
  lastTick   = now;
  const pps  = calcPPS();
  if (pps > 0) {
    GAME.points      += pps * dt;
    GAME.totalPoints += pps * dt;
    updateUI();
  }
  moveEntities();
  moveEnemy();
}


// ═══════════════════════════════════════════════════════════════
// DASHBOARD — RENDER
// ═══════════════════════════════════════════════════════════════
let dashData;

function initDash() {
  const saved = localStorage.getItem('dashboard-v1');
  dashData = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT));
  renderSections();
  renderNav();
}

function renderSections() {
  const container = document.getElementById('sections');
  container.innerHTML = '';
  dashData.sections.forEach((s, si) => {
    const div = document.createElement('div');
    div.className = 'section'; div.id = s.id;
    div.innerHTML = `
      <div class="sec-head">
        <div class="sec-num">${s.num}</div>
        <div class="sec-titles">
          <div class="sec-title" data-text="${s.title}">${s.title}</div>
          <div class="sec-desc">${s.desc}</div>
        </div>
        <span class="sec-toggle" onclick="toggleSec('${s.id}')">[ - ]</span>
      </div>
      <div class="sec-body">
        <div class="res-grid">${s.resources.map((r, ri) => renderRes(r, s.id, ri)).join('')}</div>
        ${s.combos && s.combos.length ? `
          <div class="combos">
            <div class="combos-label">COMBOS</div>
            ${s.combos.map(c => `<div class="combo">${c}</div>`).join('')}
          </div>` : ''}
        ${s.roadmap && s.roadmap.length ? `
          <div class="roadmap">
            <div class="roadmap-label">MINI-ROADMAP</div>
            <ol>${s.roadmap.map(r => `<li>${r}</li>`).join('')}</ol>
          </div>` : ''}
      </div>`;
    container.appendChild(div);
  });
}

function renderRes(r, sectionId, resIndex) {
  const keys = r.keywords && r.keywords.length
    ? `<div class="res-keys">${r.keywords.map(k => `<span>${k}</span>`).join('')}</div>` : '';
  return `<div class="res" onclick="openDetail('${sectionId}',${resIndex})">
    <div class="res-head">
      <div class="res-name">${r.name}</div>
      <div class="res-tag">${r.tag}</div>
    </div>
    <div class="res-desc">${r.desc}</div>
    ${keys}
  </div>`;
}

function renderNav() {
  document.getElementById('nav').innerHTML = dashData.sections.map(s => `
    <a class="ni" href="#${s.id}" onclick="goTo('${s.id}', event)">
      <span class="ni-num">${s.num}</span><span>${s.title}</span>
    </a>`).join('');
}

function toggleSec(id) {
  const sec = document.getElementById(id);
  sec.classList.toggle('collapsed');
  sec.querySelector('.sec-toggle').textContent = sec.classList.contains('collapsed') ? '[ + ]' : '[ - ]';
}

function goTo(id, e) {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ─── SEARCH ───────────────────────────────────────────────────
function setupSearch() {
  document.getElementById('search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.section').forEach(s => {
      s.classList.toggle('hidden', !!q && !s.textContent.toLowerCase().includes(q));
    });
    document.querySelectorAll('.ni').forEach(n => {
      const sec = document.getElementById(n.getAttribute('href').slice(1));
      n.style.display = sec && sec.classList.contains('hidden') ? 'none' : 'flex';
    });
  });
}


// ─── SCROLL SPY ───────────────────────────────────────────────
function setupScrollSpy() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting)
        document.querySelectorAll('.ni').forEach(n =>
          n.classList.toggle('active', n.getAttribute('href') === '#' + en.target.id));
    });
  }, { threshold: 0.15 });
  setTimeout(() => document.querySelectorAll('.section').forEach(s => obs.observe(s)), 200);
}


// ═══════════════════════════════════════════════════════════════
// DETAIL PANEL
// ═══════════════════════════════════════════════════════════════
function openDetail(sectionId, resIndex) {
  const section = dashData.sections.find(s => s.id === sectionId);
  const res = section.resources[resIndex];
  const extra = RESOURCE_STORIES[res.name] || {};

  // Image area
  const inner = document.getElementById('detail-img-inner');
  if (extra.image) {
    inner.innerHTML = `<img src="${extra.image}" alt="${res.name}" onerror="this.remove()">`;
  } else {
    inner.innerHTML = `<span style="position:relative;z-index:3">${res.name[0].toUpperCase()}</span>`;
  }

  document.getElementById('detail-name').textContent = res.name;
  document.getElementById('detail-tag-badge').textContent = res.tag;
  document.getElementById('detail-story').textContent = extra.story || res.desc;

  const keysEl = document.getElementById('detail-keys');
  keysEl.innerHTML = (res.keywords || []).map(k => `<span>${k}</span>`).join('');

  document.getElementById('detail-panel').classList.add('open');
  document.getElementById('detail-backdrop').classList.add('open');
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
  document.getElementById('detail-backdrop').classList.remove('open');
}


// ═══════════════════════════════════════════════════════════════
// ENEMY SYSTEM
// ═══════════════════════════════════════════════════════════════
let activeEnemy = null;
let battleEnemy = null;
let battleHP    = 35;
let battleActive = false;

function spawnEnemy() {
  if (document.getElementById('enemy-active')) return;
  const layer = document.getElementById('char-layer');
  const def   = ENEMIES_DEF[Math.floor(Math.random() * ENEMIES_DEF.length)];
  const el    = document.createElement('div');
  el.className = 'enemy-entity';
  el.id = 'enemy-active';

  const x = 380 + Math.random() * (window.innerWidth - 520);
  const y = 100 + Math.random() * (window.innerHeight - 260);
  el.style.left = x + 'px';
  el.style.top  = y + 'px';

  el.innerHTML = `<div class="enemy-sprite">${def.sprite}</div>
    <div class="enemy-label">${def.name}</div>`;
  el.addEventListener('click', () => openBattle(def));
  layer.appendChild(el);

  activeEnemy = { el, def, x, y, tx: x, ty: y };
  setTimeout(() => { if (el.parentElement) { el.remove(); activeEnemy = null; scheduleNextEnemy(); } }, 180000);
}

function scheduleNextEnemy() {
  setTimeout(spawnEnemy, 90000 + Math.random() * 90000);
}

function moveEnemy() {
  if (!activeEnemy || !activeEnemy.el.parentElement) { activeEnemy = null; return; }
  const W = window.innerWidth, H = window.innerHeight;
  if (Math.random() < .015) {
    activeEnemy.tx = 380 + Math.random() * (W - 520);
    activeEnemy.ty = 100 + Math.random() * (H - 260);
  }
  activeEnemy.x += (activeEnemy.tx - activeEnemy.x) * 0.02;
  activeEnemy.y += (activeEnemy.ty - activeEnemy.y) * 0.02;
  activeEnemy.el.style.left = activeEnemy.x + 'px';
  activeEnemy.el.style.top  = activeEnemy.y + 'px';
}


// ═══════════════════════════════════════════════════════════════
// BATTLE SYSTEM
// ═══════════════════════════════════════════════════════════════
function openBattle(def) {
  if (battleActive) return;
  battleActive = true;
  battleEnemy  = def;
  battleHP     = 35;

  document.getElementById('battle-enemy-sprite').textContent = def.sprite;
  document.getElementById('battle-enemy-name').textContent   = def.name;
  document.getElementById('battle-intro').textContent        = def.intro;
  document.getElementById('battle-result').textContent       = '';
  document.getElementById('battle-attack-log').textContent   = '';
  document.getElementById('battle-btn').style.display        = 'block';
  document.getElementById('battle-hp-fill').style.background = '';
  updateBattleUI();
  document.getElementById('battle-popup').classList.add('active');
}

function updateBattleUI() {
  document.getElementById('battle-hp-fill').style.width = (battleHP / 35 * 100) + '%';
  document.getElementById('battle-hp-text').textContent  = battleHP + ' / 35 HP';
}

function battleClick() {
  if (battleHP <= 0) return;
  battleHP--;

  const log = battleEnemy.attacks[Math.floor(Math.random() * battleEnemy.attacks.length)];
  document.getElementById('battle-attack-log').textContent = log;

  const inner = document.getElementById('battle-inner');
  inner.classList.remove('battle-hit');
  requestAnimationFrame(() => inner.classList.add('battle-hit'));

  updateBattleUI();

  if (battleHP <= 0) {
    const reward = battleEnemy.reward;
    GAME.points      += reward;
    GAME.totalPoints += reward;

    document.getElementById('battle-btn').style.display        = 'none';
    document.getElementById('battle-result').textContent       = `VICTOIRE — +${reward} CYCLES`;
    document.getElementById('battle-attack-log').textContent   = 'ENNEMI NEUTRALISÉ';
    document.getElementById('battle-hp-fill').style.background = 'var(--g)';
    document.getElementById('battle-hp-fill').style.width      = '100%';

    const el = document.getElementById('enemy-active');
    if (el) el.remove();
    activeEnemy = null;

    setTimeout(() => {
      document.getElementById('battle-popup').classList.remove('active');
      battleActive = false;
      updateUI();
      scheduleNextEnemy();
    }, 2400);

    saveGame();
    updateUI();
  }
}


// ─── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === ' ' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    clickShip();
  }
});


// ═══════════════════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════════════════
loadGame();
initDash();
setupSearch();
setupScrollSpy();
respawnOwnedChars();
updateUI();
setInterval(gameTick, 50);
setInterval(saveGame, 10000);
setTimeout(spawnEnemy, 20000 + Math.random() * 20000);
