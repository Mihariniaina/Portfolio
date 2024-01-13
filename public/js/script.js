/**
 * 
 * @name:       translatorjs
 * @version:    3.1.0
 * @author:     EOussama
 * @license     MIT
 * @source:     https://github.com/EOussama/translatorjs
 * 
 * A simple javascript library for translating web content.
 * 
 */

'use strict';

window.addEventListener('load', () => {

  // Creating a dictionary
  var dictionary = {
    'en': {
      'notif': {
        'emailSent': 'Email sent!',
        'emailFailled': 'Failed to send email'
      },
      'header': {
        'home': 'Home',
        'about': 'About',
        'experience': 'Experience',
        'service': 'Service',
        'portfolio': 'Portfolio',
        'quote': 'Quote',
        'contact': 'Contact',
        'blog': 'Blog'
      },
      'home': {
        'me': 'I\'m',
        'sub': 'Web Designer, Web Developer, Apps Designer, Apps Developer',
        'hire': 'Hire me',
        'contact_me': 'Contact me'
      },
      'about': {
        'subtitle': 'Learn about me',
        'title': 'Fullstack Developer',
        'desc': 'I am MIHARINIAINA Rilah Mario, passionate about computer science since the age of 14. After graduating with a Master II in "Mobiquity, Big data and Systems Integration" at the University of Nice Sofia Antipolis, I am currently looking for a position to apply my knowledge and increase my sklills in the field of computer science.',
        'information': 'Informations',
        'born': 'Born on 3rd March 1998',
        'malagasy': 'Malagasy',
        'single': 'Single',
        'driving': 'Driving licences A, B, C, D',
        'languages': 'Languages',
        'french': 'French',
        'english': 'English',
        'mother_tongue': 'Malagasy : Mother tongue',
        'strengths': 'Strengths',
        'Punctual': 'Punctual',
        'ease': 'Ease of learning process',
        'creative': 'Creative',
        'hobbies': 'Areas of interest',
        'music': 'Musical arrangement',
        'swimming': 'Swimming',
        'filmaking': 'Film making',
        'cv': 'Download my CV'
      },
      'study_work': {
        'subtitle': 'My resume',
        'title1': 'Studying & Formation',
        'title2': 'Working Experience',
        'diplaume1': 'Bachelor\'s degree - Serie C',
        'diplaume1_desc': 'LEG Imerintsiatosika',
        'diplaume2': 'Licence degree - web development and web design',
        'diplaume2_desc': 'ITUniversity of Andoharanofotsy, Antananarivo',
        'diplaume3': 'Cinema - Image - 3D',
        'diplaume3_desc': 'CFP Image E-MEDIA, Antananarivo',
        'diplaume4': 'Master degree - Mobiquity, Big Data and System Integration',
        'diplaume4_desc': 'Université de Nice, Sophia Antipolis',
        'work1': 'Web engineer - Telma media planning',
        'work1_date': 'June 2019 - August 2019',
        'work1_sub': 'PULSE, Antananarivo, Madagascar',
        'work1_desc': 'This project is based on the necessary management of the launching of an advertisement in the existing media in Madagascar. The objective of the project is to computerize the monitoring system of the evolution of an advertisement that the company propagates. \n\n- Development and maintenance of internal software \n- Realization and development of functional requirements \n- Proposal of digital solutions',
        'work2': 'Fullstack developer',
        'work2_date': 'December 2019 - December 2020',
        'work2_sub': 'ADRWARE, Antananarivo, Madagascar',
        'work2_desc': '- Development and maintenance of internal software \n- Realization and development of functional requirements \n- Proposal of digital solutions',
        'work3': 'Scrum master / Project Manager',
        'work3_date': 'January 2021 - October 2021',
        'work3_sub': 'SEMWEE, France, Working remote',
        'work3_desc': 'Semwee is a marketing application to match supply and demand. The main idea of the project is to know which products match a query made by internet users on google? Ideal for e-commerce sites that want to know what people are searching for on Google. The application can process thousands or even billions of data.\n\n- Lead the project from conception to delivery\n- Make the design of the database\n- Validate the mock-ups made by the UX/UI\n- Establish the specifications according to the client\'s needs\n- Propose improvements\n- Personal and project management\n- Management of tasks with the TRELLO tool\n- Participate in the recruitment process',
        'work4': 'Fulstack developer',
        'work4_date': 'Since November 2021',
        'work4_sub': 'SCOPLAN, France, Working remote',
        'work4_desc': 'SCOPLAN addresses builders, project managers and promoters by proposing an easy-to-use software allowing to manage more efficiently a customer file from the first contact (CRM) to the management of the after-sales service and the maintenance of the house.\n\n- Development and maintenance of android, ios and web application \n- Realization and development of functional requirements \n- Proposal of digital solutions'
      },
      'service': {
        'subtitle': 'WHAT I DO',
        'title': 'Awesome Quality Services',
        'content1': 'Design',
        'desc1': 'Creative and strategic, I can realize or create models, poster, logo or graphic charter by using tools like figma, photoshop, indesign, illustrator, etc...',
        'content2': 'Web Development',
        'desc2': 'After University, I mastered various web technology like php, javascript, symfony, codeigniter, angular, nodesJS, java, etc... which allows me to become fullstack.',
        'content3': 'Apps Development',
        'desc3': 'We learned mobile technologies like java, ionic, swift and objectiveC like android studio environment and XCode. What I currently apply in a company.',
        'content4': 'Data engineer',
        'desc4': 'During my training, we studied databases like mysql, postgres, oracle, sqlite, mongoDB... That we have applied in many project as well as in my internship.',
      },
      'quotes': {
        'q1': '"Ease of learning process, I\'m always ready to discover a new technology and a increase my experience."',
        'q2': '"The present is the anvil where the future is made."',
        'q3': '"A problem is a chance for you to do your best."',
        'q4': 'Victor Hugo',
        'pers1': "Digital content creator",
        'pers2': "Jazz Musician",
        'pers3': "Author",
        'pers4': "Poet"
      },
      'portfolio': {
        'subtitle': 'MY PORTFOLIO',
        'title': 'My Excellent Portfolio',
        'all': 'All',
        'tab1': 'Web Apps',
        'tab2': 'Mobile Apps',
        'tab3': 'Design',
        'tab4': 'Music composition',
        'tab5': 'Film making',
      },
      'contact': {
        'title': 'Contact',
        'sub_title': 'All to contact me',
        'title1': 'Write to me',
        'title2': 'Find me',
        'your_name': 'Your Name',
        'e_mail': 'E-mail',
        'subject': 'Subject',
        'message': 'Message',
        'send': 'Send',
      },
      'blog': {
        'title': 'Apart',
        'subtitle': 'My Other Prestation',
        'title1': 'Event Planner',
        'item1_content': 'Almost every Saturday, I spend my time organizing events such as weddings or birthdays. Don\'t hesitate to contact me if you want to immortalize your biggest day. We have multitudes of services to make it unforgettable as Event Band, Sound, Lights, Special Effects, etc...',
        'title2': 'Musician',
        'item2_content': 'I am a Malagasy musician, I studied guitar and I spend almost all my free time playing, writing and composing. I am open to all kind of music, I like to listen to alternative rock and indie music because it calms my soul a lot. I really appreciate the creation of Malagasy artists like Imiangaly and John Oabmar ...',
        'btn': 'Follow my page'
      },
      'footer': {
        'right': 'All Right Reserved | 2023',
      },
      'btn': {
        'download': 'Download',
        'listen': 'Listen'
      }
    },
    'fr': {
      'notif': {
        'emailSent': 'Email envoyé!',
        'emailFailled': 'Échec de l\'envoi de l\'e-mail'
      },
      'header': {
        'home': 'Accueil',
        'about': 'Profil',
        'experience': 'Expérience',
        'service': 'Service',
        'portfolio': 'Portfolio',
        'quote': 'Cotation',
        'contact': 'Contact',
        'blog': 'Blog'
      },
      'home': {
        'me': 'Je suis',
        'sub': 'Concepteur de site web, Développeur d\'application web, Concepteur mobile, Développeur d\'application Mobile',
        'hire': 'Engagez-moi',
        'contact_me': 'Contactez-moi'
      },
      'about': {
        'subtitle': 'En savoir plus sur moi',
        'title': 'Développeur Fullstack',
        'desc': 'Je suis MIHARINIAINA Rilah Mario, passionnée de l\'informatique depuis l\'âge de 14 ans. Après avoir eu mon diplôme de Master II à l\'université de Nice Sofia Antipolis, je cherche actuellement un poste pour appliquer mes savoir-faire et augmenter ma compétence sur le domaine de l\'informatique.',
        'information': 'Informations',
        'born': 'Née le 3 Mars 1998',
        'malagasy': 'Malgache',
        'single': 'Célibataire',
        'driving': 'Permis de conduire A, B, C, D',
        'languages': 'Langues',
        'french': 'Français',
        'english': 'Anglais',
        'mother_tongue': 'Malgache: Langue maternelle',
        'strengths': 'Savoir-être',
        'Punctual': 'Poncltuel',
        'ease': 'Facilité d\'apprentissage',
        'creative': 'Créative',
        'hobbies': 'Centre d\'intérets',
        'music': 'Musical arrangement',
        'swimming': 'Natation',
        'filmaking': 'Cinématographie',
        'cv': 'Télécharger mon CV'
      },
      'study_work': {
        'subtitle': 'Mon résumé',
        'title1': 'Diplômes & Formations',
        'title2': 'Expériences Professionnelles',
        'diplaume1': 'Baccalauréat - Série C',
        'diplaume1_desc': 'LEG Imerintsiatosika',
        'diplaume2': 'Licence en développement web et design',
        'diplaume2_desc': 'ITUniversity d\'Andoharanofotsy, Antananarivo',
        'diplaume3': 'Cinema - Image - 3D',
        'diplaume3_desc': 'CFP Image E-MEDIA, Antananarivo',
        'diplaume4': 'Master II - Mobiquity, Big Data and System Integration',
        'diplaume4_desc': 'Université de Nice, Sophia Antipolis',
        'work1': 'Ingénieur d\'étude et de développement informatique',
        'work1_date': 'Juin 2019 - Août 2019',
        'work1_sub': 'PULSE, Antananarivo, Madagascar',
        'work1_desc': 'Ce projet est basé sur la gestion nécessaire du lancement d\'une publicité dans les médias existants à Madagascar. L\'objectif du projet est d\'informatiser le système de suivi de l\'évolution d\'une publicité que l\'entreprise propage. \n- Développement et maintenance des logiciels internes \n- Conception et développement des besoins fonctionnels \n- Proposition des solutions digitales.',
        'work2': 'Développeur Fullstack',
        'work2_date': 'Décembre 2019 - Décembre 2020',
        'work2_sub': 'ADRWARE, Antananarivo, Madagascar',
        'work2_desc': '- Développement et maintenance des logiciels internes \n- Conception et développement des besoins fonctionnels \n- Proposition des solutions digitales.',
        'work3': 'Scrum master / Chef de projet',
        'work3_date': 'Janvier 2021 - Octobre 2021',
        'work3_sub': 'SEMWEE, France, Télétravail',
        'work3_desc': 'Semwee est une application marketing permettant de faire correspondre l\'offre et la demande. L\'idée principale du projet est de savoir quels produits correspondent à une requête faite par les internautes sur google ? Idéal pour les sites e-commerce qui veulent savoir ce que les gens recherchent sur Google. L\'application peut traiter des milliers voire des milliards de données.\n\n- Charger de diriger le projet dès la conception jusqu\'aux livraison \n- Faire la conception de la base de données\n- Valider les maquettes réaliser par les UX/UI\n- Établir les cahiers de charge selon le besoin du client \n- Proposer des améliorations\n- Management personnels et management de projet\n- Gestion des tâches par l\'outil TRELLO\n- Participer au processus de recrutement',
        'work4': 'Développeur fullstack',
        'work4_date': 'Depuis Novembre 2021',
        'work4_sub': 'SCOPLAN, France, Télétravail',
        'work4_desc': 'SCOPLAN s\'adresse aux constructeurs, maîtres d\'oeuvre et promoteurs en offrant un logiciel très simple d\'utilisation permettant de gérer plus efficacement un dossier client de la prise de contact (CRM) jusqu\'à la gestion des SAV et de l\'entretien du logement. \n\n- Développement et maintenance d\'applications android, ios et web. \n- Réalisation et développement des exigences fonctionnelles. \n- Proposition de solutions digitales.'
      },
      'service': {
        'subtitle': 'Ce que je fais',
        'title': 'Services De Qualité',
        'content1': 'Conception',
        'desc1': 'Créatif et stratégique, je peux créer des maquettes, affiche, logo, etc... En utilisant des outils comme figma, photoshop, indesign, illustrator, etc...',
        'content2': 'Développement web',
        'desc2': 'Riche en exercice et de formation, je maîtrise divers téchno du web comme php, javascript, symfony, angular, nodesJS etc... ',
        'content3': 'Développement mobile ',
        'desc3': 'Nous avons appris des techno mobiles comme java, ionic et swift comme l\'environnement android studio et XCode.',
        'content4': 'Ingénieur en bases de données',
        'desc4': 'Nous avons étudié des bases de données comme mysql, postgres, oracle, sqlite, mongoDB... Que nous avons appliqué dans des nombreux projets.'
      },
      'quotes': {
        'q1': '"Apte à apprendre des nouvelles choses, je suis toujours prêt à découvrir des nouvelles technologies et accroître mon expérience."',
        'q2': '"Le présent est l\'enclume où se fait l\'avenir."',
        'q3': '"Un problème est une chance pour vous de faire de votre mieux."',
        'q4': 'Victor Hugo',
        'pers1': "Créateur digital",
        'pers2': "Musicien de Jazz",
        'pers3': "Auteur",
        'pers4': "Poète"
      },
      'portfolio': {
        'subtitle': 'MON PORTFOLIO',
        'title': 'Mon Excellent Portfolio',
        'all': 'Tous',
        'tab1': 'Web Apps',
        'tab2': 'Mobile Apps',
        'tab3': 'Design',
        'tab4': 'Composition Musicaux',
        'tab5': 'Cinématographie'
      },
      'contact': {
        'title': 'Contact',
        'sub_title': 'Tous pour me contacter',
        'title1': 'Écrivez-moi',
        'title2': 'Trouvez-moi',
        'your_name': 'Votre Nom',
        'e_mail': 'E-mail',
        'subject': 'Sujet',
        'message': 'Message',
        'send': 'Envoyer'
      },
      'blog': {
        'title': 'à part',
        'subtitle': 'Autre Prestation',
        'title1': 'Organisateur d\'évènement',
        'item1_content': 'Presque tous les samedi, je passes mon temps à l’organisation des événements  comme le mariage ou anniversaire. N\'hésitez pas à me contacter si vous voulez immortaliser votre plus grand jour. Nous avons des multitudes de prestation pour le rendre inoubliable comme Orchestre événementiel, Sonorisation, Lumières, Effets Spéciaux, etc...',
        'title2': 'Musicien',
        'item2_content': 'Je suis un musicien malgache, j\'ai étudié la guitare et je passe presque tout mon temps libre à jouer, écrire et composer. Je suis ouvert à tout type de musique, j\'aime écouter du rock alternatif et de la musique indie car cela me calme beaucoup l\'esprit. J\'apprécie beaucoup la création d\'artistes malgaches comme Imiangaly et John Oabmar ...',
        'btn': 'Suivre ma page'
      },
      'footer': {
        'right': 'Tous droits réservés | 2023',
      },
      'btn': {
        'download': 'Télécharger',
        'listen': 'Écouter'
      }
    },
    'mg': {
      'notif': {
        'emailSent': 'Lasa ny mailaka!',
        'emailFailled': 'Tsy lasa ny mailaka!'
      },
      'header': {
        'home': 'Fandraisana',
        'about': 'Mombamomba',
        'experience': 'Traikefa',
        'service': 'Tolotra',
        'portfolio': 'Portfolio',
        'quote': 'Notsongaina',
        'contact': 'Fifandraisana',
        'blog': 'Samihafa'
      },
      'home': {
        'me': 'Izaho dia',
        'sub': 'Concepteur de site web, Développeur d\'application web, Concepteur mobile, Développeur d\'application Mobile',
        'hire': 'Hampiasa ahy',
        'contact_me': 'Hifandray amiko'
      },
      'about': {
        'subtitle': 'Mombamomba ahy',
        'title': 'Fullstack Developer',
        'desc': 'MIHARINIAINA Rilah Mario no anarako, liana amin\'ny tontolon\'ny solosaina sy ny tekinolojia hatramin\'ny faha-14 taonako. Taorian\'ny nahazoako ny mari-pahaizana "Maîtrise II en Mobiquity, Big Data and Systems Integration" tao amin\'ny Oniversiten\'i Nice Sofia Antipolis, dia mitady asa hampiharana ny fahalalako aho ary hampitombo ny traikefako amin\'ny sehatry ny IT. ',
        'information': 'Informations',
        'born': 'Teraka ny 3 Martsa 1998',
        'malagasy': 'Malagasy',
        'single': 'Tokantena',
        'driving': 'Fahazoan-dàlana mitondra fiara A, B, C, D',
        'languages': 'Fiteny',
        'french': 'Frantsay',
        'english': 'Anglisy',
        'mother_tongue': 'Malagasy : Tenimpirenena',
        'strengths': 'Mampiavaka',
        'Punctual': 'Marim-potoana',
        'ease': 'Mora mahay zava-baovao',
        'creative': 'Tia mamorona',
        'hobbies': 'Fialamboly',
        'music': 'Fandrindrana mozika',
        'swimming': 'Milomano',
        'filmaking': 'Famonkarana Oronantsary',
        'cv': 'Haka ny CV ako'
      },
      'study_work': {
        'subtitle': 'Ny lalana nodiaviko',
        'title1': 'Diplaoma & Fianarana',
        'title2': 'Traikefa Ankasa',
        'diplaume1': 'Bakalorea - Sokajy C',
        'diplaume1_desc': 'LEG Imerintsiatosika',
        'diplaume2': 'Licence en développement web et design',
        'diplaume2_desc': 'ITUniversity d\'Andoharanofotsy, Antananarivo',
        'diplaume3': 'Cinema - Image - 3D',
        'diplaume3_desc': 'CFP Image E-MEDIA, Antananarivo',
        'diplaume4': 'Master II - Mobiquity, Big Data and System Integration',
        'diplaume4_desc': 'Université de Nice, Sophia Antipolis',
        'work1': 'Injeniera ara-kajy mirindra',
        'work1_date': 'Jona 2019 - Aogositra 2019',
        'work1_sub': 'PULSE, Antananarivo, Madagascar',
        'work1_desc': 'Ity tetikasa ity dia natao handrindrana ireo dokam-barotra rehetra izay alefan\'ny orin\'asa amin\'ireo haino aman-jery misy eto Madagasikara. Ny tanjona amin\'izany dia ny mba handrindrana ara-kajy mirindra ny rafitra fanarahana ny fizotry ny dokam-barotra izay alefa. \n\n- Fiantohana ny fandehan\'ny asa efa vita. \n- Fanaovana ireo asa ara-kajy mirindra rehetra ilain\'ny orin\'asa. \n- Tolo-kevitra ny amin\'ny fanatsarana kokoa ny asa nomerika.',
        'work2': 'Développeur Fullstack',
        'work2_date': 'Desambra 2019 - Desambra 2020',
        'work2_sub': 'ADRWARE, Antananarivo, Madagascar',
        'work2_desc': '- Fiantohana ny fandehan\'ny asa efa vita. \n- Fanaovana ireo asa ara-kajy mirindra rehetra ilain\'ny orin\'asa. \n- Tolo-kevitra ny amin\'ny fanatsarana kokoa ny asa nomerika.',
        'work3': 'Scrum master / Chef de projet',
        'work3_date': 'Janoary 2021 - Oktobra 2021',
        'work3_sub': 'SEMWEE, France, Télétravail',
        'work3_desc': 'Semwee dia fitaovana iray entina hampifanarahana ny tolotra sy ny tinady. Ny votoatin-kevitra vohiziny dia ny mba ahafantarana ny vokatra tena be mpitady ao amin\'ny Google. Mampiavaka azy ny fahafahany mampiasa angona an-tapitrisany. \n\n- Miantoka ny fandrosoana sy ny fahavitan\'ny asa hatramin\'ny farany. \n- Manao ny fototra ilaina mialohan\'ny fanombohana ny asa. \n- Mitsara ny modely omen\'ny UX/UI. \n- Manoratra ny fepetra arahina ho an\'ny "Developpeur". \n- Manoma soson-kevitra fanatsarana \n- Fitsinjarana ny olona sy ny asa. \n- Fitsinjarana ny asa amin\'ny fampiasana "TRELLO". \n- Fandraisana anjara amin\'ny fizotry ny fandraisana mpiasa.',
        'work4': 'Développeur fullstack',
        'work4_date': 'Nanomboka tamin\'ny Novambra 2021',
        'work4_sub': 'SCOPLAN, France, Télétravail',
        'work4_desc': 'SCOPLAN dia fitaovana ara-kajimirindra iray entina handrindrana sy hanarahana ny fanorenana iray, manomboka any amin\'ny CRM hatrany amin\'ny SAV. \n\n- Fampandrosoana sy fiantohana ireo asa efa vita (Android, Ios, Web). \n- Fanatanterahana ireo fangatahana takiana ara-kajimirindra. \n- Fanomezana soson-kevitra nomerika.'
      },
      'service': {
        'subtitle': 'Tolotra afaka omeko',
        'title': 'Tolotra & Kalitao',
        'content1': 'Design',
        'desc1': 'Afaka manao modely ho an\'ny peta-drindrina, sary famantarana, fanasana sns aho miaraka amin\'ny aingam-panahy ananako sy ny fahaizako mifehy ny: figma, photoshop, indesign, illustrator, sns...',
        'content2': 'Web Development',
        'desc2': 'Mahafehy tekinolojia maromaro, toy ny: php, javascript, symfony, codeigniter, angular, nodeJS, java, sns... Izay mahatonga ahy ho "Fullstack developer".',
        'content3': 'Apps Development',
        'desc3': 'Nianatra manokana ny tekinolojia amin\'ny finday ihany koa, toy ny: Java, Ionic, Swift ary ObjectiveC izay mbola ampiasaiko amin\'izao fotoana izao anatin\'ny asako.',
        'content4': 'Data engineer',
        'desc4': 'Nandalina momba ny banky angona aho, ka nahaizako nifehy: mysql, postgres, oracle, sqlite, mongodb,... izay samy efa nampiasaiko tamin\'ny asako teo aloha.',
      },
      'quotes': {
        'q1': '"Mora mahay, tia mianatra zava-baovao sy mampitombo ny traikefa efa hanana."',
        'q2': '"Ny ankehitriny no lasitra andrafetana ny ho avy."',
        'q3': '"Ny olana iray dia tombony ahafahanao manome izay tsara indrindra avy aminao."',
        'q4': '"Izay ao antsaintsika no handrafitra antsika."',
        'pers1': "Digital content creator",
        'pers2': "Mpitendry mozika Jazz",
        'pers3': "Mpanoratra",
        'pers4': "Poety"
      },
      'portfolio': {
        'subtitle': 'MY PORTFOLIO',
        'title': 'Ireo Zava-bitako',
        'all': 'Manontolo',
        'tab1': 'Web Apps',
        'tab2': 'Mobile Apps',
        'tab3': 'Design',
        'tab4': 'Mozika novokariko',
        'tab5': 'Horonantsary',
      },
      'contact': {
        'title': 'Fifandraisana',
        'sub_title': 'Hifandray amiko',
        'title1': 'Hanoratra amiko',
        'title2': 'Hijery ahy',
        'your_name': 'Anaranao',
        'e_mail': 'Mailaka',
        'subject': 'Lohahevitra',
        'message': 'Hafatra',
        'send': 'Alefa',
      },
      'blog': {
        'title': 'Hafa',
        'subtitle': 'Ireo Asako Hafa',
        'title1': 'Mpikarakara lanonana',
        'item1_content': 'Ankoatra ny maha "Développeur" ahy dia mikarakara lanonana toy ny mariazy na aniversaire no ataoko matetika isaky ny faran\'ny erin\'andro. Maro ny tolotra afaka omenay toy ny Orchestre, Sonorisation, Lumières, Effets spéciaux, sns... Aza misalasala manantona fa vonona ny hampiavaka ny fetinao izahay.',
        'title2': 'Mpitendry',
        'item2_content': 'Mpiangaly mozika malagasy aho, nandalina manokana ny guitare. Isaky ny manana fotoana malalaka aho dia mandalina, manoratra sy mandrindra. Mivelatra amin\'ny mozika rehetra, tia mihaino ny gadona "alternative-rock" sy "Indie-music" noho izy mahatony tanteraka ny fanahiko. Tena tiako ihany koa ny mozikan\'ny mpanakanto malagasy toa an\'i Imiangaly, John Oabmar ...',
        'btn': 'Hanaraka ny pejiko'
      },
      'footer': {
        'right': 'Copyright | 2023',
      },
      'btn': {
        'download': 'Haka',
        'listen': 'Hiaino'
      }
    }
  };

  // Creating a translator instance
  var translator = new EOTranslator(dictionary);

  // Getting the DOM elements
  var globalTranslate = document.getElementById('globalTranslate');

  // Setting the default language
  var pathURL = window.location.pathname;
  console.log("look for URL to get language here", pathURL);
  if(pathURL.includes('/mg')){
    globalTranslate.value = document.documentElement.lang || 'mg';
  } else if( pathURL.includes('/fr')) {
    globalTranslate.value = document.documentElement.lang || 'fr';
  } else {
    globalTranslate.value = document.documentElement.lang || 'en';
  }
  


  // Translating the greeting input when the greet button is clicked
  globalTranslate.addEventListener('change', function () {
    var language = globalTranslate.value;

    try {
      translator.translateDOM(document.body, language);
    } catch (e) {
      alert(e);
    }
  });

  // Invoking the change event
  globalTranslate.dispatchEvent(new Event('change'));
});