# Plan — Défi Kinésique

## Résultat attendu
Un jeu de classe complet **uniquement en français**, accessible dès l’ouverture de l’aperçu et disponible aussi comme **un unique fichier HTML autonome** à enregistrer et ouvrir sans connexion. Aucun média, police, script ou son ne sera chargé depuis Internet. L’aspect professionnel viendra de la qualité de l’interface et de l’animation, sans ajouter d’autres langues à l’écran.

## Réalisation
1. Créer le fichier autonome avec les trois écrans : accueil, 11 questions successives et score final. Chaque manche présente quatre significations, une seule correcte, choisies parmi les 11 réponses fournies ; l’ordre des choix varie sans répétition dans une question.
2. Dessiner en SVG intégré **le même personnage** sur toutes les manches : cheveux et barbe bruns, sweat noir, traits épais et couleurs vives. Animer en boucle, avec des mouvements corporels propres à chacun des 11 gestes ; ne mettre aucun mot dans les dessins.
3. Intégrer le retour immédiat après réponse : vert/rouge sur les choix, message et explication exacts, score mis à jour, son de réussite ou d’échec produit par WebAudio, puis bouton de continuation. Désactiver les réponses supplémentaires après un choix.
4. Prévoir clic et clavier (1–4, A–D, Entrée), progression et compteur de question, puis les quatre niveaux de message final et « Rejouer » remettant réellement la partie à zéro.
5. Appliquer la palette imposée ivoire / ambre-orange / brun, cartes blanches, typographie ample et contraste adapté au vidéoprojecteur ; adapter aussi l’affichage aux petites fenêtres. Respecter la préférence de réduction des animations système sans rendre les gestes statiques en utilisation normale.
6. Faire ouvrir ce jeu directement à l’adresse d’accueil du projet, tout en gardant le fichier HTML autonome accessible pour l’enregistrement local. Ajouter les métadonnées propres à la page d’accueil.
7. Vérifier les 11 manches, les réponses correctes et incorrectes, la navigation clavier, le redémarrage et l’ouverture du fichier sans réseau, sur grand et petit écran.

## Détails techniques
Le jeu autonome embarquera CSS, JavaScript et illustrations SVG dans un seul HTML. La page d’accueil du projet pointera vers ce fichier local ; l’export fonctionne indépendamment du serveur ou des dépendances du projet. L’audio sera créé après une interaction utilisateur, conformément aux règles des navigateurs.
