[{"Owner":"Dad72","Date":"2014-07-20T16:35:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_The lights illuminated only the objects in the scene. the scene has a default lighting cannot be set._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Can no longer make day-night mode._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_If I disables all the light_co_ the scene remains illuminated_co_ but the objects are black._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Exemple of playground_lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1BCLB6_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1BCLB6_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T17:07:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Humm.. Object is black as expected no?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T17:24:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps you are talking about scene.clearColor ? (which was there since v0.0 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T19:51:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_il y a quelque semaine quand je réglait l_t_intensité de la lumiere a 0.2_co_ la scène devenait sombres_co_ maintenant seule les objet devienne sombres._lt_/p_gt__lt_p_gt_Je pouvais ainsi faire un mode jour/nuit. la nuit je laisse une tres faible intensité_co_ la scène entière était légèrement éclairer_co_ maintenant_co_ la scène reste éclairer avec la même intensité_co_ il y a que les objets qui sont moins éclairer. c’est comme si une lumiere par défaut était toujours présente sur la scène._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-07-21T19:55:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_One solution Dad may be to update the scene clearColor to something darker when it_t_s the night_co_ and something lighter when it_t_s the day _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T20:03:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ClearColor changes the color of the canvas not lighting of the scene. My field remains light it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T20:23:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Voila_co_ j_t_ai fait des copie d’écran. la 1 c’est de jour. la pas de probleme_co_ la 2 c’est de nuit (logiquement) j_t_ai baisser mes intensité lumineuse. certain objet ne sont plus éclairer et d_t_autre reste totalement éclairer par je ne sais pas quelle sources de lumiere puisque l’intenté étant a 0.3_co_ toutes la scène devrais être moins éclairer_co_ pas uniquement les objets et en plus certain objet reste éclairer. Il y a donc bien un petit soucie quelque part._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_intensity 1.6_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_intensity 0.3_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T20:23:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps before you should have an object covering the background_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Lights have never impacted background_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T20:24:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps scene.ambientColor ?_lt_/p_gt__lt_p_gt_Or material.emissiveColor ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T20:32:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_but before I had no need to adjust its value_co_ I lower the intensity and that_t_s enough. is a bug fix that change this behavior?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mais avant je n_t_avais pas besoin d_t_ajuster ses valeurs là_co_ je diminuer l_t_intensité et ça suffisais. est ce un correctif qui change ce comportement?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T20:47:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Et si vous regarder ma seconde image_co_ il y a des objets qui reste éclairer or qu_t_il n_t_on aucune émissiveColor_co_ le terrain aussi n_t_a pas d’émissiveColor et est toujours éclairer._lt_/p_gt__lt_p_gt_Je n_t_utilise pas de scene.ambiantColor aussi. avant je abaisser juste l_t_intensité lumineuse_co_ mais on dirait qu_t_il reste une lumiere par défaut qui éclaire la scene._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T21:19:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tu utilises les shaders standards ou les tiens? Je n_t_ai rien touche sur l_t_eclairage de mon cote_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-21T21:20:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Au pire partage ta scene et donne moi le nom d_t_un objet qui merde_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-21T22:14:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Pour le terrain_co_ j_t_utilise un shader fusionner entre default et groundMaterial de worldmonger mais ça ça été régler sur un autre sujet qui rend mon terrain plus sombres._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_pour le reste (les objet sur le terrain_co_ c_t_est par défaut (default.fragment.fx_co_ donc pas de shader modifier)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_J_t_ai toujours certain objet (notamment les arbres_co_ le coffre et les fougères) qui reste éclairer. Les arbres_co_ le coffres et la fougère on des textures tga_co_ je sais pas si ça peut aider. c’est ce qui les différencies des autres objets._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_voici ce que j_t_ai à présent_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Je pense que c’est peut être à cause des texture tga qui reste éclairer. cela peut vous donner une piste_co_ une idée du probleme peut être. c’est le seule lien direct que je voie avec tout les objets éclairer de ceux non éclairer._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-22T16:35:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tu as un lien?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T16:45:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Je vais essayer de te faire une scène et de reproduire ce bug. je t_t_envoie ça après._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T19:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_.... Scène d_t_exemple inutile ...._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-07-22T23:27:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh_co_ pour une raisons que j_t_ignore_co_ il faut que je désactive sur certain objets l_t_emissiveColor qui était activer. vous aviez raisons DK_co_ falait que je regardes dans les submaterials_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]