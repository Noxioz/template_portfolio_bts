# Template de portfolio BTS SIO

Template réutilisable Jekyll + GitHub Pages, construit à partir du template général et de la structure du portfolio BTS de référence. Il conserve le thème sombre sobre, les accents verts discrets, les titres monospace et le comportement responsive.

## Démarrage rapide
1. Cliquez sur **Use this template** pour créer votre dépôt.
2. Modifiez `_config.yml` : nom, URL, `baseurl`, e-mail, LinkedIn et identifiant GitHub.
3. Personnalisez `index.html` : identité, statut, profil et textes.
4. Ajoutez vos projets dans `_projets/` en copiant `_projets/_TEMPLATE.md`.
5. Adaptez `_data/competences.yml` au référentiel et aux compétences que vous souhaitez présenter.
6. Dans **Settings → Pages**, activez le déploiement depuis la branche `main`.
7. Vérifiez le rendu sur mobile et ordinateur.

Pour un dépôt de projet, définissez `baseurl: "/nom-du-depot"`. Pour un site utilisateur `USERNAME.github.io`, laissez généralement `baseurl: ""`.

## Ajouter un projet
Chaque fichier Markdown dans `_projets/` utilise les champs `title`, `date`, `type`, `resume`, `competences` et éventuellement `afficher`.
- `type: ecole` : projet ou activité de formation.
- `type: perso` : projet personnel.
- `competences: [c1, c4]` : codes reliés à `_data/competences.yml`.
- `afficher: false` : garde le projet dans le dépôt sans l'afficher sur la page d'accueil.

La matrice de compétences est générée automatiquement : une coche ✓ ouvre le projet associé. Les six compétences fournies sont un exemple à adapter à votre formation/référentiel.

## Structure
- `index.html` : accueil, profil, projets, matrice et contact
- `_projets/` : pages Markdown des projets
- `_layouts/default.html` et `_layouts/projet.html` : mise en page
- `_data/competences.yml` : compétences de la matrice
- `css/style.css` : thème et responsive
- `js/navigation.js` : navigation active, chargé avec `defer`
- `_config.yml` : configuration Jekyll
- `mentions-legales.md` : modèle à personnaliser

## Licence
Licence MIT. Vous pouvez utiliser, modifier et redistribuer le template, y compris commercialement, à condition de conserver la notice de copyright et le texte de licence. Gardez la mention de crédit `vzsca` dans le fichier `LICENSE`. Les textes, images et ressources ajoutés séparément peuvent avoir leurs propres conditions.
