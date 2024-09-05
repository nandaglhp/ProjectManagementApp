import dateFns from 'date-fns/locale/fr';

export default {
  dateFns,

  format: {
    date: 'P',
    time: 'HH:mm',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'à' p",
    fullDate: 'd MMM y',
    fullDateTime: "d MMMM y 'à' p",
  },

  translation: {
    common: {
      aboutPlanka: 'À propos de Planka',
      account: 'Compte',
      actions: 'Actions',
      addAttachment_title: 'Ajouter une pièce jointe',
      addComment: 'Ajouter un commentaire',
      addManager_title: 'Ajouter un manager',
      addMember_title: 'Ajouter un membre',
      addUser_title: 'Ajouter un utilisateur',
      administrator: 'Administrateur',
      all: 'Tout',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Toutes les modifications seront automatiquement enregistrées<br />une fois la connexion rétablie.',
      areYouSureYouWantToDeleteThisAttachment: 'Voulez-vous vraiment supprimer cette pièce jointe?',
      areYouSureYouWantToDeleteThisBoard: 'Êtes-vous sûr de vouloir supprimer ce tableau?',
      areYouSureYouWantToDeleteThisCard: 'Voulez-vous vraiment supprimer cette carte?',
      areYouSureYouWantToDeleteThisComment: 'Êtes-vous sûr de vouloir supprimer ce commentaire?',
      areYouSureYouWantToDeleteThisLabel: 'Voulez-vous vraiment supprimer cette étiquette?',
      areYouSureYouWantToDeleteThisList: 'Êtes-vous sûr de vouloir supprimer cette liste?',
      areYouSureYouWantToDeleteThisProject: 'Êtes-vous sûr de vouloir supprimer ce projet?',
      areYouSureYouWantToDeleteThisTask: 'Êtes-vous sûr de vouloir supprimer cette tâche?',
      areYouSureYouWantToDeleteThisUser: 'Êtes-vous sûr de vouloir supprimer cet utilisateur?',
      areYouSureYouWantToLeaveBoard: 'Êtes-vous sûr de vouloir quitter ce tableau ?',
      areYouSureYouWantToLeaveProject: 'Êtes-vous sûr de vouloir quitter ce projet ?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Êtes-vous sûr de vouloir supprimer ce manager du projet ?',
      areYouSureYouWantToRemoveThisMemberFromProject:
        'Êtes-vous sûr de vouloir supprimer ce membre du projet?',
      attachment: 'Pièce jointe',
      attachments: 'Pièces jointes',
      authentication: 'Authentification',
      background: 'Arrière-plan',
      board: 'Tableau',
      boardNotFound_title: 'Carte non trouvée',
      canComment: 'Peut commenter',
      canEditContentOfBoard: 'Peut éditer le contenu du tableau.',
      canOnlyViewBoard: 'Peut uniquement voir le tableau.',
      cardActions_title: 'Actions sur la carte',
      cardNotFound_title: 'Carte non trouvée',
      cardOrActionAreDeleted: "La carte ou l'action sont supprimées.",
      color: 'Couleur',
      copy_inline: 'copie',
      createBoard_title: 'Créer un tableau',
      createLabel_title: 'Créer une étiquette',
      createNewOneOrSelectExistingOne: 'Créez-en un nouveau ou sélectionnez<br />un existant.',
      createProject_title: 'Créer un projet',
      createTextFile_title: 'Créer un fichier texte',
      currentPassword: 'Mot de passe actuel',
      dangerZone_title: 'Zone dangereuse',
      date: 'Date',
      dueDate: "Date d'échéance",
      dueDate_title: "Date d'échéance",
      deleteAttachment_title: 'Supprimer la pièce jointe',
      deleteBoard_title: 'Supprimer le tableau',
      deleteCard_title: 'Supprimer la carte',
      deleteComment_title: 'Supprimer le commentaire',
      deleteLabel_title: "Supprimer l'étiquette",
      deleteList_title: 'Supprimer la liste',
      deleteProject_title: 'Supprimer le projet',
      deleteTask_title: 'Supprimer la tâche',
      deleteUser_title: "Supprimer l'utilisateur",
      description: 'Description',
      detectAutomatically: 'Détecter automatiquement',
      dropFileToUpload: 'Déposer le fichier à télécharger',
      editor: 'Éditeur',
      editAttachment_title: 'Modifier la pièce jointe',
      editAvatar_title: 'Modifier Avatar',
      editBoard_title: 'Modifier le tableau',
      editDueDate_title: "Modifier la date d'échéance",
      editEmail_title: "Modifier l'email",
      editInformation_title: 'Modifier les informations',
      editLabel_title: "Modifier l'étiquette",
      editPassword_title: 'Modifier le mot de passe',
      editPermissions_title: 'Modifier les permissions',
      editStopwatch_title: 'Modifier la minuterie',
      editUsername_title: "Modifier le nom d'utilisateur",
      email: 'E-mail',
      emailAlreadyInUse: 'Email déjà utilisé',
      enterCardTitle: 'Saisir le titre de la carte... [Ctrl+Enter] pour ouvrir automatiquement',
      enterDescription: 'Saisir la description...',
      enterFilename: 'Saisir le nom du fichier',
      enterListTitle: 'Saisie le titre de la liste...',
      enterProjectTitle: 'Saisir le titre du projet',
      enterTaskDescription: 'Saisir la description de la tâche...',
      filterByLabels_title: 'Filtrer par étiquettes',
      filterByMembers_title: 'Filtrer par membres',
      fromComputer_title: "Depuis l'ordinateur",
      fromTrello: 'Depuis Trello',
      general: 'Général',
      hours: 'Heures',
      importBoard_title: 'Importer un tableau',
      invalidCurrentPassword: 'Mot de passe actuel invalide',
      labels: 'Étiquettes',
      language: 'Langue',
      leaveBoard_title: 'Quitter le tableau',
      leaveProject_title: 'Quitter le projet',
      linkIsCopied: 'Le lien est copié',
      list: 'Lister',
      listActions_title: 'Liste des actions',
      managers: 'Managers',
      managerActions_title: 'Actions des managers',
      members: 'Membres',
      memberActions_title: 'Actions des membres',
      minutes: 'Minutes',
      moveCard_title: 'Déplacer la carte',
      name: 'Nom',
      newestFirst: 'Le plus récent en premier',
      newEmail: 'Nouveau email',
      newPassword: 'Nouveau mot de passe',
      newUsername: "Nouveau nom d'utilisateur",
      noConnectionToServer: 'Pas de connexion au serveur',
      noBoards: 'Pas de tableau',
      noLists: 'Pas de listes',
      noProjects: 'Pas de projets',
      notifications: 'Notifications',
      noUnreadNotifications: 'Aucune notification non lue.',
      oldestFirst: 'Le plus ancien en premier',
      openBoard_title: 'Ouvrir le tableau',
      optional_inline: 'optionnel',
      organization: 'Organisation',
      phone: 'Téléphone',
      preferences: 'Préférences',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Conseil: appuyer sur Ctrl-V (Cmd-V sur Mac) pour ajouter une pièce jointe depuis le presse-papiers',
      project: 'Projet',
      projectNotFound_title: 'Projet introuvable',
      removeManager_title: 'Supprimer le manager',
      removeMember_title: 'Supprimer le membre',
      searchLabels: 'Chercher une étiquette...',
      searchMembers: 'Chercher un membre...',
      searchUsers: 'Chercher un utilisateur...',
      searchCards: 'Chercher une carte...',
      seconds: 'Secondes',
      selectBoard: 'Sélectionner un tableau',
      selectList: 'Sélectionner une liste',
      selectPermissions_title: 'Sélectionner les permissions',
      selectProject: 'Sélectionner un projet',
      settings: 'Réglages',
      sortList_title: 'Trier la liste',
      stopwatch: 'Minuteur',
      subscribeToMyOwnCardsByDefault: 'Abonnez-vous à mes propres cartes par défaut',
      taskActions_title: 'Actions de tâche',
      tasks: 'Tâches',
      thereIsNoPreviewAvailableForThisAttachment:
        "Il n'y a pas de prévisualisation de disponible pour cette pièce jointe.",
      time: 'Temps',
      title: 'Titre',
      userActions_title: "Actions de l'utilisateur",
      userAddedThisCardToList: '<0> {{user}} </0> <1> a ajouté cette carte à {{list}} </1>',
      userLeftNewCommentToCard:
        '{{user}} a laissé un nouveau commentaire {{comment}} à <2> {{card}} </2>',
      userMovedCardFromListToList:
        '{{user}} a déplacé <2> {{card}} </2> de {{fromList}} vers {{toList}}',
      userMovedThisCardFromListToList:
        '<0> {{user}} </0> <1> a déplacé cette carte de {{fromList}} vers {{toList}} </1>',
      username: "Nom d'utilisateur",
      usernameAlreadyInUse: "Nom d'utilisateur déjà utilisé",
      users: 'Utilisateurs',
      version: 'Version',
      viewer: 'Spectateur',
      writeComment: 'Écrire un commentaire...',
    },

    action: {
      addAnotherCard: 'Ajouter une autre carte',
      addAnotherList: 'Ajouter une autre liste',
      addAnotherTask: 'Ajouter une autre tâche',
      addCard: 'Ajouter une carte',
      addCard_title: 'Ajouter une carte',
      addComment: 'Ajouter un commentaire',
      addList: 'Ajouter la liste',
      addMember: 'Ajouter un membre',
      addMoreDetailedDescription: 'Ajouter une description plus détaillée',
      addTask: 'Ajouter une tâche',
      addToCard: 'Ajouter à la carte',
      addUser: 'Ajouter un utilisateur',
      copyLink_title: 'Copier le lien',
      createBoard: 'Créer un tableau',
      createFile: 'Créer un fichier',
      createLabel: 'Créer une étiquette',
      createNewLabel: 'Créer une nouvelle étiquette',
      createProject: 'Créer un projet',
      delete: 'Supprimer',
      deleteAttachment: 'Supprimer la pièce jointe',
      deleteAvatar: "Supprimer l'avatar",
      deleteBoard: 'Supprimer le tableau',
      deleteCard: 'Supprimer la carte',
      deleteCard_title: 'Supprimer la carte',
      deleteComment: 'Supprimer le commentaire',
      deleteImage: "Supprimer l'image",
      deleteLabel: "Supprimer l'étiquette",
      deleteList: 'Supprimer la liste',
      deleteList_title: 'Supprimer la liste',
      deleteProject: 'Supprimer le projet',
      deleteProject_title: 'Supprimer le projet',
      deleteTask: 'Supprimer la tâche',
      deleteTask_title: 'Supprimer la tâche',
      deleteUser: "Supprimer l'utilisateur",
      duplicate: 'Dupliquer',
      duplicateCard_title: 'Dupliquer la carte',
      edit: 'Modifier',
      editDueDate_title: "Modifier la date d'échéance",
      editDescription_title: 'Modifier la description',
      editEmail_title: "Modifier l'email",
      editInformation_title: 'Modifier les informations',
      editPassword_title: 'Modifier le mot de passe',
      editPermissions: 'Modifier les permissions',
      editStopwatch_title: 'Modifier la minuterie',
      editTitle_title: 'Modifier le titre',
      editUsername_title: "Modifier le nom d'utilisateur",
      hideDetails: 'Cacher les détails',
      import: 'Importer',
      leaveBoard: 'Quitter le tableau',
      leaveProject: 'Quitter le projet',
      logOut_title: 'Se déconnecter',
      makeCover_title: 'Faire la jaquette',
      move: 'Déplacer',
      moveCard_title: 'Déplacer la carte',
      remove: 'Supprimer',
      removeBackground: "Supprimer l'arrière-plan",
      removeCover_title: 'Supprimer la jaquette',
      removeFromBoard: 'Supprimer le tableau',
      removeFromProject: 'Supprimer du projet',
      removeManager: 'Supprimer le manager',
      removeMember: 'Supprimer le membre',
      save: 'Sauvegarder',
      showAllAttachments: 'Afficher toutes les pièces jointes ({{hidden}} masquées)',
      showDetails: 'Afficher les détails',
      showFewerAttachments: 'Afficher moins de pièces jointes',
      sortList_title: 'Trier la liste',
      start: 'Début',
      stop: 'Arrêter',
      subscribe: "S'abonner",
      unsubscribe: 'Se désabonner',
      uploadNewAvatar: 'Télécharger un nouvel avatar',
      uploadNewImage: 'Télécharger une nouvelle image',
    },
  },
};
