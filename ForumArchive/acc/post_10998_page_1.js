[{"Owner":"Vousk-prod.","Date":"2014-12-11T11:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi fellows_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m in the process of updating all my projects to brand new version of BJS (from 1.12 to 2.0.alpha)._lt_/p_gt__lt_p_gt_But for some of them_co_ I_t_ve got _lt_span style_eq__qt_color_dd_#b22222_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_OIMO is not defined_lt_/span_gt__lt_/span_gt_ error in console (with bjs versions 1.14 and 2.0.alpha)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not using any physics (at all_co_ nowhere). All my scenes are created via SceneLoader.Load and the objects are generated by the blender exporter. It occurs only on some scenes. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any idea about that ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-11T11:32:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have already seen this_co_ is that in your code you use something that uses physics._lt_/p_gt__lt_p_gt_exemple_dd_ scene.enablePhysics () _eq_&gt_sm_ delete_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-11T12:30:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nope_co_ I_t_m not using any physics specific code anywhere._lt_/p_gt__lt_p_gt_In fact the global code is strictly the same for all my projects since they all use the same scene manager._lt_/p_gt__lt_p_gt_There is no particular piece of code on the projects where OIMO error occured._lt_/p_gt__lt_p_gt_That_t_s why I guess that the difference could come from the imported blender scene_co_ maybe a kind of object which could automatically start the _qt_OIMO processing_qt_ or so..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-11T13:59:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Show code in playground to watch. I have had this problem and it is because your code uses something physics._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_setGravity or something maybe?_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-12-11T18:06:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The only code in the Blender exporter that processes physics I think is in a mesh.  Not sure what a rigid_body is in the Blender UI_co_ but if the mesh (referred to as _lt_strong_gt_object_lt_/strong_gt_ in code below) has one_co_ physicsImposter_co_ physicsMass_co_ etc are set.  Just open your .babylon in Wordpad and search for _t_physics_t_.  That should rule Blender in or out_co_ definitively._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd_  also check for scene.gravity or camera.applyGravity_co_ though I believe  both are always written and then set in BabylonFileLoader._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        # Physics        if object.rigid_body !_eq_ None_dd_            shape_items _eq_ {_t_SPHERE_t_     _dd_ SPHERE_IMPOSTER_co_                            _t_BOX_t_        _dd_ BOX_IMPOSTER_co_                            _t_MESH_t_       _dd_ MESH_IMPOSTER_co_                            _t_CAPSULE_t_    _dd_ CAPSULE_IMPOSTER_co_                            _t_CONE_t_       _dd_ CONE_IMPOSTER_co_                            _t_CYLINDER_t_   _dd_ CYLINDER_IMPOSTER_co_                            _t_CONVEX_HULL_t__dd_ CONVEX_HULL_IMPOSTER}            shape_type _eq_ shape_items[object.rigid_body.collision_shape]            self.physicsImpostor _eq_ shape_type            mass _eq_ object.rigid_body.mass            if mass &lt_sm_ 0.005_dd_                mass _eq_ 0            self.physicsMass _eq_ mass            self.physicsFriction _eq_ object.rigid_body.friction            self.physicsRestitution _eq_ object.rigid_body.restitution_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-11T18:23:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh man_co_ once again you saved my life ! You_t_re right_co_ in every culprit .babylon file I have some physicsImpostors (etc) set._lt_/p_gt__lt_p_gt_I will check in my Blender files for removing the useless rigid bodies (since I do not need physics for those scenes)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-11T19:38:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_de rien._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-11T20:04:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_?? ah ah_co_ dad72 tu réponds pour JCP maintenant _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-11T21:49:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Bas c’est pas comme si je n_t_avais pas essayer de t_t_aider hein.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ j_t_avais aussi en partie raisons.. donc de rien. mais ne te sens pas obliger de dire merci_co_ j_t_ai anticiper. ha ha._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2014-12-12T09:58:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oui tu m_t_as donné des pistes aussi en effet_co_ et le _qt_oh mec tu m_t_as encore une fois sauvé la vie_qt_ équivalait à un merci._lt_/p_gt__lt_p_gt_Mais en fait et surtout_co_ pour moi ce post n_t_est pas fini _dd_ quand j_t_aurai identifié les éléments coupables dans les fichiers blender je terminerai ce post en récapitulant et en indiquant la marche à suivre pour que ça ne pose pas de problème à ceux qui n_t_ont pas besoin de la physique_co_ puis je marquerai cette récap complète comme réponse au post (c_t_est ainsi que je fais la plupart du temps sur les posts)_co_ et là je considérerai le sujet comme terminé et pourrai envoyer mille bisous _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Mais je suis tout à fait de ton avis quand tu dis qu_t_un _qt_merci_qt_ donne envie d_t_aider_co_ je suis du genre à rappeler sur les forums qu_t_un _qt_bonjour_qt_ et un _qt_merci_qt_ ne font pas de mal et participent à la bonne vie de tous._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-12T12:10:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_on est d’accord.Bonne continuation pour la suite de tes recherches à ce probleme._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-01-08T20:47:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_64185_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10998_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt_ data-cite_eq__qt_JCPalmer_qt_ data-ipsquote-timestamp_eq__qt_1418321191_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The only code in the Blender exporter that processes physics I think is in a mesh.  Not sure what a rigid_body is in the Blender UI_co_ but if the mesh (referred to as _lt_strong_gt_object_lt_/strong_gt_ in code below) has one_co_ physicsImposter_co_ physicsMass_co_ etc are set.  Just open your .babylon in Wordpad and search for _t_physics_t_.  That should rule Blender in or out_co_ definitively._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As JCP said_co_ when some physic related options are checked in blender for an object_co_ the blender exporter automatically creates physicsImpostor_co_ physicMass_co_ etc_co_ which automatically leads to (try to) launch OIMO while loading the scene in BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So if there is no plan to use realtime physic simulation in the game engine_co_ every physic related options should be deactivated in Blender before any export._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my case_co_ for some objects the RigidBody parameter was checked because physical simulation was used in Blender to set the scene_co_ but since no further physcial simulation is required in BJS_co_ to simply uncheck those parameters before exporting to .babylon file solved the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]