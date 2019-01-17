[{"Owner":"javalang","Date":"2017-03-29T15:48:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve implemented a basic-functionality of a cloner system and I_t_d like to hear your opinions and design/concept-suggestions for further develepment and finishing my work (if you_t_re interested at all).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI decided to use a working title _qt_SCS_qt_ for _qt_Simple Cloning System_qt_ and here are the core features and concepts _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tCloners_dd_ given one or several meshes_co_ either clones or instances will distributed in a specific manner. If more than one mesh is provided_co_ the meshes are distributed alternatively. Additionally_co_ cloners can be nested_co_ so it is possible to clone cloners. Each cloner can have several Effectors (in particular order) to influence the Scale/Position/Rotation parameter of a clone (or cloner). A sensitivity parameter controls this influence for a cloner. Following Objects are designated_dd_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRadialCloner_dd_ radial distribution where following parameters are recognized_dd_ count_co_ radius_co_ offset_co_ startangle_co_ endangle_co_ Effector-sensitivity for Position_co_ Scale and Rotation_co_ alignment-flag_co_ orientation.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLinearCloner_dd_ linear distribution where following parameters are recognized_dd_count_co_ offset_co_ growth_co_ Effector-sensitivity for Position_co_ Scale and Rotation. An interpolation-mode-flag  determines_co_ if the clone -parameters (Scale/Position/Rotation) are interpreted as _qt_step_qt_ or _qt_end_qt_-values.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tMatrixCloner_dd_ coming soon (clones will be distributed in  3D space)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tPlanarCloner_dd_ coming soon (clones will be distributed in 2D space)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tObjectCloner_dd_ coming soon (clones will be distributed in relation to the internals of a given mesh (vertices_co_ edges_co_ triangles ...)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRandomEffector_dd_ influences Scale/Position/Rotation of a clone with repeatable random values_co_ controlled with an overall _qt_strength_qt_ parameter. Not quite finished_co_ but basically working.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tFormulaEffector_dd_ coming soon_co_ influences Scale/Position/Rotation via text thought to control from outside (html-page).\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tStepEffector_co_ TimeEcffector_co_ DelayEffector and much more ???\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tSo_co_ enough for the moment_co_ you can see and play with some scenes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//johann.langhofer.net/clonerjs/cbasic.html_qt_ rel_eq__qt_external nofollow_qt__gt_LinearCloner_co_RadialCloner_co_RandomEffector_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//johann.langhofer.net/clonerjs/cstack.html_qt_ rel_eq__qt_external nofollow_qt__gt_radial-linear-radial-cloner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//johann.langhofer.net/clonerjs/cstack2.html_qt_ rel_eq__qt_external nofollow_qt__gt_linear-radial-linear-cloner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I need some advise if I should upload the sources to github if you_t_re interested. Should I upload it to my own github space or to BABYLONX ? If the latter_co_ do I have to send a pull request? Sources are written in typescript _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen1.jpg.e7bbb70998b65c970704dac4790ac853.jpg_qt_ data-fileid_eq__qt_12246_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_screen1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12246_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen1.jpg.e7bbb70998b65c970704dac4790ac853.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen2.jpg.50e563e4f7cd7f53f92835a34fbd4355.jpg_qt_ data-fileid_eq__qt_12247_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_screen2.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12247_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen2.jpg.50e563e4f7cd7f53f92835a34fbd4355.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen3.jpg.df1300a8e09223cd0fbc58c44ffcd21f.jpg_qt_ data-fileid_eq__qt_12248_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_screen3.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12248_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen3.jpg.df1300a8e09223cd0fbc58c44ffcd21f.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen4.jpg.f52db038a08b8ac3895c0bddd0d901dd.jpg_qt_ data-fileid_eq__qt_12249_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_screen4.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12249_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/screen4.jpg.f52db038a08b8ac3895c0bddd0d901dd.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-29T17:50:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExcellent!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2017-03-30T18:12:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHaha great stuff for the lazy guyz like me _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my humble opinion_co_ those codes should be lightweight enough to be part of the framework ??? Just my thought _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGreat addition !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-03-30T21:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17254_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17254-meteoritool/_qt_ rel_eq__qt__qt__gt_@meteoritool_lt_/a_gt_ &amp_sm_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ thank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScene updated_co_ now with animation flag_co_ check _qt_animate_qt__dd_ _lt_a href_eq__qt_http_dd_//johann.langhofer.net/clonerjs/cbasic.html_qt_ rel_eq__qt_external nofollow_qt__gt_Dancing Clones_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo achieve this effect_co_ only one parameter per cloner is nedded (sensitivity)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_                cc.effectors[0].sensitivity_eq_Math.sin(frame*.005)*Math.sin(frame*.005)_sm_\n                rr.effectors[0].sensitivity_eq_Math.cos(frame*.005)*Math.cos(frame*.005)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-03-31T07:16:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think it could be one of the BJS Extensions.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-01T13:41:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m pleased to present the Matrix- and ObjectCloner_co_ here are some playgrounds_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NYYEQ%235_qt_ rel_eq__qt_external nofollow_qt__gt_ObjectCloner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NYYEQ%236_qt_ rel_eq__qt_external nofollow_qt__gt_MatrixCloner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NYYEQ%237_qt_ rel_eq__qt_external nofollow_qt__gt_RadialCloner combined with MatrixCloner_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you want to play with the RandomEffector. you can do it _lt_a href_eq__qt_http_dd_//johann.langhofer.net/clonerjs/cbasic.html_qt_ rel_eq__qt_external nofollow_qt__gt_here._lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/matrixcloner.jpg.fa8e9bec468e8e0c75f79e0c09aa83dd.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12302_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/matrixcloner.thumb.jpg.f3add9c965ce5370e593a36912a3c6c3.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_matrixcloner.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/objectcloner.jpg.830fbda9aab4091a7e149c86d4319429.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12303_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/objectcloner.thumb.jpg.0680fd5068ba53ccf13aaa212daa3947.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_objectcloner.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2017-04-01T19:26:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat work! Would love to see that as an extension so I could include it when needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you know the module _t_MoGraph_t_ from the 3D software _t_Cinema4D_t_? This is pretty exactly the concept of your code. And it_t_s very useful! Also a lot of fun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn idea could be to distribute clones on vertices (or face-centers) of a mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-01T20:11:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21403-jellix/_qt_ rel_eq__qt__qt__gt_@jellix_lt_/a_gt_ thank you_co_ haha yes MoGraph_co_ you got it_co_ I like it very much and you_t_re right_co_ I_t_ve tried to pack many of these concepts into here. The idea distributing the clones on the face-centers is exactly what the ObjectCloner does. One thing here however could be improved_dd_ a flag to align the clones on the face-normals_co_ but this should not be a big problem.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]