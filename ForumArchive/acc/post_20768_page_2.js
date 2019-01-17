[{"Owner":"Dad72","Date":"2016-03-01T12:33:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_118705_qt_ data-ipsquote-contentid_eq__qt_20768_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1456791826_qt_ data-ipsquote-userid_eq__qt_7026_qt_ data-ipsquote-username_eq__qt_gryff_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ gryff said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDad72_dd_ take a look at at _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/20840-generic-animations/?do_eq_findComment&amp_sm_comment_eq_118691_qt__gt_this post by Jeff_lt_/a_gt_ in the _qt_generic animations_qt_ thread  about loading animations and two different skeletons _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you Griff_co_ I had not seen it. I will soon try this solution with _t_copyAnimationRange_t_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-01T19:50:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tArf_co_ nothing works. It is not possible to do what I want I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I would actually do_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) I support the application that loads the skeleton animations that I want to store in a variable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Then I would like to load characters with Skeleton but without animation so it can be quickly loaded when you create the interface of the editor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) I would then add to the character created (step 2)_co_ animations I loaded into memory at startup of the application (step 1).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy am worth doing this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the user adds a character_co_ I would not expect that it is too loaded. I wish instead that when applying the load_co_ it loads into memory as some heavy task animations. For a free animated character will be 2 MB and 20 MB animations. My idea was to charge the 18 MB animations at application startup_co_ put no memory and each character creation copy animations on the skeleton of the character. (Which in theory should be faster)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I do that_co_ my character is black and not getting any animation. I tried several things and nothing to do_co_ it does not work. I am desperate. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_&lt_sm_fr&gt_sm__lt_/strong_gt_ Bon en anglais c’est chaud a expliquer pour moi_co_ donc en français ca seras plus claire peut être.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tArf_co_ rien ne fonctionne. Ce n’est pas possible de faire ce que je veux je pense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCe que je souhaite faire concrètement _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) je charge l_t_application qui charge le squelette avec les animations que je veux mettre en mémoire dans une variable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Ensuite je voudrais charger des personnages ayant un Skeleton mais sans animation pour qu_t_il puisse être charger rapidement quand on le créer par l_t_interface de l’éditeur.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) Je voudrais ensuite ajouter au personnage créer (à l_t_étape 2)_co_ les animations que j_t_ai chargé en mémoire au démarrage de l_t_application (de l_t_étape 1).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPourquoi je vaux faire cela _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuand l_t_utilisateurs ajoute un personnage_co_ je ne voudrais pas qu_t_il est a trop attendre son chargement. Je voudrais à la place que quand l_t_application ce charge_co_ qu_t_il charge en mémoire certaine tache lourde comme les animations. Car un personnage sans animation seras de 2 MB et avec animations de 20 MB. Mon idée était donc de charger les 18 MB d_t_animations au démarrage de l_t_application_co_ de le mettre ne mémoire et à chaque création de personnage par l_t_utilisateur_co_ copier les animations sur le squelette du personnage (ce qui en théorie devrais être plus rapide).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMais si je fais ça_co_ mon personnage est tout noir et ne reçois aucune animation. j_t_ai essayé plusieurs chose et rien à faire_co_ ça ne fonctionne pas. Je suis désespérer. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_&lt_sm_/fr&gt_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-03-01T20:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTes animations ne sont elles pas un poil trop détaillées?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJe tente de faire la même chose_co_ je te tiens au courant ^^\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-01T22:18:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_118809_qt_ data-ipsquote-contentid_eq__qt_20768_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1456863293_qt_ data-ipsquote-userid_eq__qt_18969_qt_ data-ipsquote-username_eq__qt_eboo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ eboo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTes animations ne sont elles pas un poil trop détaillées?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tC_t_est que j_t_ai plus de 30 animations sur le personnage et je risque d_t_avoir a en ajouter d_t_autres. Mon editeur est pour créer des petit film d_t_animation 3d et donc vas dépendre beaucoup d_t_animations divers que l_t_utilisateur pourras choisir suivant ses projets (toutes ne sont pas indispensable d_t_un projet a un autres_co_ d_t_où mon probleme de devoir en ajouter beaucoup pour couvrir différent cas). Je cherche donc d_t_autres solutions de chargement en annexe car des que l_t_on exporte des animations avec personnage ou animal_co_ le poids des fichiers est démultiplier de façons incroyable. Peut être qu_t_il y a d_t_autre solution que celle que je voudrais faire ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tApres_co_ oui les animation pourrait être plus classique (j_t_ai penser a tout reprendre)_co_ quoi qu_t_elle ne sont pas non plus super détailler_co_ mais cela économiserais combien ? 2 a 5 MB max.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci pour tenter de faire la même chose et pour ton aide. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-01T22:27:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBonjour.  Je suis tres interesse par ce sujet aussi.  Et c_t_est vraiment plaisant de causer en francais.  Est-ce que ca pourait etre une solution d_t_avoir un personnage avec un squelette et d_t_utiliser des animations sous forme de bvh.  Donc le personnage qui est un contenant vide avec un squelette et on pourrait charger des bvh on the fly....  Je sais pas je ne fais que penser a des solutions possibles et je reviens toujours a ca.  Peut-etre qu_t_il y a d_t_autres moyens mais je crois que c_t_est un probleme que l_t_on doit solutionner !!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-01T22:37:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEn effet_co_ il faudrait une solution pour ce probleme. par contre j_t_ai entendu parler de bvh_co_ mais je ne sais pas vraiment ce que c_t_est.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMoi dans l_t_idéal_co_ j_t_aurais aimer ajouter des animations à la volée au fur et a mesure des besoins a un personnage sans animations ou au pire charger en annexe toutes les animations pour les ajoutés ensuite (quoi que cette solution ne semble pas la meilleurs je pense)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-01T22:41:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\td_t_accord je vois.  Est-ce que tes animations sont creees avec Blender ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-01T22:44:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNon_co_ 3ds max 2016 (blender est trop complexe je trouve pour un non initier.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-03-01T23:41:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBVH est un format de motion capture avec pas mal de fichiers _qt_libres_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFacilement importable dans blender et avec un outil génial_dd_ bvhacker.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tpar exemple un bvh de marche fait 221Ko. Je tente actuellement d_t_importer un bvh dans blender puis ressortit en babylon et de le charger sur un skeleton sans animation. ce qui me bloque actuellement_co_ c_t_est le manque de temps ^^\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-02T00:19:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPrend ton temps Eboo et merci.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-02T03:36:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@ eboo _dd_ Est-ce que tu es capable d_t_avoir un personnage dans babylon.js et de mettre des bvh a la volee dans babylon.js sans passer par blender. Moi je suis capable d_t_avoir un personnage cree dans blender avec un bvh et l_t_exporter dans babylon.js_co_ mais je suis incapable de prendre ce meme personnage dans babylon.js et changer le bvh a la volee.  N_t_importe quel sorte d_t_aide m_t_aiderait vraiment.  Ce gars semble avoir la solution mais utilise three.js _dd_ _lt_a href_eq__qt_http_dd_//lo-th.github.io/labs/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//lo-th.github.io/labs/index.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-03-02T11:23:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#0000CD_sm__qt__gt_Euh... il faudra passer par blender pour le bvh. _lt_/span_gt_- Well... we need to use blender to import bvh files\n_lt_/p_gt_\n\n_lt_h3_gt_\n\t_lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F20840-generic-animations%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ title_eq__qt_Go to JCPalmer_t_s profile_qt__gt_JCPalmer_lt_/a_gt__lt_/strong_gt_ _lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_montre une méthode dans ce post -_lt_/span_gt_ as JDPalmer show us here_dd__lt_/span_gt_\n_lt_/h3_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/20840-generic-animations/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_On pourrait se lancer dans un importeur de bvh mais... il y a pas mal de choses a retravailler pour avoir un skelete _qt_compatible_qt_. Le petit logiciel bvhacker permets de simplifier le squelette pour coller au besoin et renommer les éléments mais pour autant il me semble important de retravailler dans blender l_t_animation pour la paufiner un peu. (et les librairies d_t_export sont prévues par se que montre JCPalmer)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe we could create a bvh importer to babylonjs but... there is few step to make skeletons _qt_compatible_qt_. bvhacker is usefull to simplify skeletons and rename bones. But i think_co_ that we still have to work animation (with blender). (and export lib is done _dd_p).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_Mon objectif reste de faire que le fichier animation (bvh ou .babylon) soit le plus petit possible pour réduire les temps de chargement (notament pour les mobiles). Blender serait l_t_outil idéal pour réduire cette taille._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy target is to reduce animation files weight. So_co_ Blender will be a perfect editor to make this reduction.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-03-02T14:20:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow likely is it that a $ contract for finding a complete 3ds max solution would help? The question has been asked by my superiors. This feature would solve so many of the issues that we are having right now. We don_t_t want to go back to threejs_co_ so maybe we can throw some money at a solution? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-02T16:40:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe Deltakosh will wish to complete the animation system for adding animation objects with a bones. Seems like a lot of people would like to solve this problem without solution._lt_br_gt_\n\tAnd I do not think it_t_s a question of money to have this kind of functionality.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#0000FF_sm__qt__gt_Peut être que Deltakosh souhaiteras compléter le système d_t_animation pour ajouter des animations a un objets avec os. On dirait que beaucoup de personne aimerais résoudre ce probleme sans solution._lt_br_gt_\n\tEt je ne pense pas que cela soit une question d_t_argent pour avoir ce genre de fonctionnalité._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-02T18:38:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt_@all_dd_ can you summarize in a SHORT sentence what you want to achieve?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-02T19:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would like to change animation on the fly into babylon.I create an animation in Blender and being able to change that animation in a drop zone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci deltakosh pour ta presence dans ton sujet. J_t_ai decouvert le kinect a cause de toi avec ton livre. Je cree des animations avec le kinect et j_t_aimerais pouvoir les changer a la volee sans avoir a passer par blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-02T19:12:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(Avec plaisir_dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo let me try to rephrase it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You have a mesh and 2 skeletons\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You want to change the skeleton applied to the mesh ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eboo","Date":"2016-03-02T19:22:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\texemple we d like to be able to do_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t- load superman.babylon (with mesh and skeleton but no animation)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- load walk.bvh (or walk.bablylon)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- animate superman walking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- load fight.bvh (or fight.babylon)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- animate superman fighting\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- load batman.babylon (with mesh and skeleton but no animation)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- animate batman walking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tetc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe d like to be able to word with mesh and animations in differents files because a caracter with all animations is a too heavy file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-02T19:44:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo this is already possible I think _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t- Go to Blender or Max or any .babylon.js compatible exporter\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Export superman mesh (only)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Then export skeleton + walking animation to a walk.babylon\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Then export skeleton + fight to fight.babylon\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow you can SceneLoader.Load(_qt_superman_qt_) and SceneLoader.Append(_qt_walk_qt_) to get a new skeleton you can then apply to superman\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it make sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-02T19:45:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tKinect-bvh-babylon.js.  no blender\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-02T19:46:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt__gt_@Deltakosh_lt_/a_gt_There would also either need to be AnimationRange written into the .babylon wt animation _co_ or Skeleton.Parse could add one of the whole animation when no are specified.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-02T19:46:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you need to update your exporter (or importer) to generate a new skeleton with animation\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI assume that your importer already create a skeleton + animation from a .bvh_co_ correct?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-03-02T19:53:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt would be nice to have the exporter export 2 types o files_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tskeletons_and_mesh.babylon\n_lt_/p_gt_\n\n_lt_p_gt_\n\twalk.bvh\n_lt_/p_gt_\n\n_lt_p_gt_\n\trun.bvh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tidle.bvh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat way I can apply whatever bvh to the skeleton without loading an entire package\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-02T19:57:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16887-dezonlyone/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16887_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16887-dezonlyone/_qt__gt_@DezOnlyOne_lt_/a_gt__co_ I wrote a parser to directly read a .bvh in BJS_co_ but never finished it.  If 3DMax can read .bvh files_co_ I would read it there_co_ and export as skeleton wt animation .babylon with no mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"benoit-1842","Date":"2016-03-02T19:59:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCorrect. I am not that good in english so I will explain it french _dd_ donc je cree des animations avec le kinect en format bvh.  J_t_ai construit un personnage. Je veux e_t_n webgl que mon personnage soit capable de recevoir des bvh a la volee sans avoir a passer par le bon vieux blender. Parce qiue presentement c_t_est possible avec three.js mais pas avec babylon.js pourqupi bvh ? C_t_est tres leger et ca permet d_t_avoir des animations complexes sans trop taxer mon programme.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerci_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBenoit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]