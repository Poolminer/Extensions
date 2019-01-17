[{"Owner":"AB95","Date":"2018-04-27T06:33:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to make a goalkeeper game_co_ which require goalkeeper mesh body to be able to _qt_block_qt_ any football that hit toward him. The best would be the mesh collider that represent the goalkeeper to be reasonably precise while not being overkill_co_ so I created boxes_co_ set their physics imposter_co_ and attach them to each bone. which look like this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SRR6Y2%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SRR6Y2#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thowever_co_ I don_t_t know how to make each box collidable to the falling sphere_co_  did I miss anything_co_ or does it require more complex way of implementation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-04-28T13:22:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi AB95!  I like your project! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SRR6Y2%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SRR6Y2#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is not _qt_fixed_qt_ yet... but this PG is _qt_different_qt_.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Changes_dd_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-  Lines 5/6 - changed to OimoJS physics (default is CannonJS).  Oimo seems to be running much faster_co_ in this project.  Also increased world-step speeds... making physics engine update faster._lt_br /_gt_\n\t-  Lines 8/9 - changed some camera orientations_lt_br /_gt_\n\t-  Lines 25+  - changed a variable name to _lt_em_gt_proxyMesh._lt_/em_gt_  _t_proxy_t_ ~_eq_  something doing a task for another something._lt_br /_gt_\n\t-  Lines 29 &amp_sm_ 48  -  .checkCollisions _eq_ true... is NOT USED on physics-engine colliding.  That is for a different collision system_co_ built-into BJS core_co_ used for colliding freeCams with mesh_co_ in FPS shooter games._lt_br /_gt_\n\t-  Line 32  -  I added some mass to each proxyMesh box.  Not sure if needed_co_ but added anyway._lt_br /_gt_\n\t-  Lines  32 &amp_sm_ 49  - proxyMesh._lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_p_lt_/span_gt__lt_/strong_gt_hysicsImpostor  &amp_sm_ ball._lt_strong_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_p_lt_/span_gt__lt_/strong_gt_hysicsImpostor - _lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_keep these lower-case._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe have SOME physics active_co_ now.  But_co_ the proxyMesh boxes are still not colliding with the falling balls.  Balls ARE colliding with floor and with each other.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I am going to ping physics expert _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ and see if he wishes to comment.  He might know things about bone-animated physics impostors.  I also invite _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ to comment_co_ who has done some fine physics work_co_ including some rag-doll skeleton stuff.  _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/2211-samuel-girardin/?do_eq_hovercard_qt_ data-mentionid_eq__qt_2211_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/2211-samuel-girardin/_qt_ rel_eq__qt__qt__gt_@Samuel Girardin_lt_/a_gt_ is invited_co_ too... another rag-doll and physics pro._lt_/span_gt__lt_/span_gt_  _lt_span_gt_All other commenters are welcome_co_ too_co_ of course.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I have done _lt_em_gt_some_lt_/em_gt_ physics_co_ too_co_ but I have never tried to use moving impostors whose positions/orientations are controlled by bones.  We might need some kind of forceUpdate() of each impostor... each frame of the animation.  Not sure.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe MIGHT have an issue with SO MANY impostors... overlapping each other.  We might need to ONLY add proxyMesh/impostors on CERTAIN bones...  far less mesh than current numbers... to avoid that impostor overlap.  In some cases_co_ overlapped physics mesh... automatically try to de-overlap... and it can be violent.  _dd_)   Mesh are sometimes sent flying in all directions.  _lt_span_gt__dd_)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Stay tuned for more comments._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_strong_gt_Core/PG Team_lt_/strong_gt__dd_  On-console_co_ I am seeing _lt_/span_gt__lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_BJS - [08_dd_04_dd_52]_dd_ Physics not enabled. Please use scene.enablePhysics(...) before creating impostors.  _lt_/span_gt__lt_span_gt_...AFTER a playground SAVE and attempted re-RUN.  Anyone else seeing that?  FF 52 ESR._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-28T15:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the console error_co_ you may need to unregister your interval on scene.dispose_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SRR6Y2#5_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SRR6Y2#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-04-28T15:33:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#SRR6Y2%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#SRR6Y2#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can use impostor.syncImpostorWithBone instead of attaching the mesh to the bone. Seems to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AB95","Date":"2018-04-30T02:29:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22713_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22713-raggar/_qt_ rel_eq__qt__qt__gt_@Raggar_lt_/a_gt_ It works! thank you guys so much for the help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-05-09T12:36:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWanted to ship in after a long time _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_The problem was the parenting on the bone meshes. To prevent that you can use the (perfect!) solution of @Ragger_co_ or to understand how the physics engine does it internally you can create Independent mesh that has its position updated on every frame_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SRR6Y2%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SRR6Y2#8_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]