[{"Owner":"Wingnut","Date":"2017-11-17T21:35:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAhem.  Wingy points to the wonderful .babylon file type_co_ and then pops a confetti cannon.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEarly mesh.spin() and mesh.move() tests... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2365_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.  Funcs defined in lines 3-13_co_ and 5-segment animation sequence in lines 110-114.  Just doing ground_co_ early tests_co_ no easing yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUpdate_dd_  [_lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2366_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_/strong_gt_]  A bit longer animation sequence_co_ built-in cubic ease-in/out... and look how little the PG is.  So fun! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot so well _t_sync_t_d.  Also_co_ fuschia and yellow cones... don_t_t want to _lt_u_gt_ever_lt_/u_gt_ finish.  hmm.  Wingnut bug_co_ likely.  But perhaps_co_ not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother update_dd_ [_lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2367_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_/strong_gt_]  Ahh_co_ there we go.  Two of my spin calls had negative speed settings_co_ but needed negative radians and positive speed.  Wingnut screw-up... now fixed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne more_dd_  [_lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2371_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_/strong_gt_]  Coded-up the other 2 funcs... .scale()/scale2... and .color().  They are working fine.  YAY!  Fun!  Still evolving.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ just one more (so far) _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  [_lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2372_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_/strong_gt_]   A little shorter demo_co_ but using ALL _qt_To_qt_ and targets.  Notice that there is a BJS vector3 or color3 in EVERY animation line (150-166).  These are the targets.  I_t_m still thinking about HOW I get control of components_co_ when other values are unknown.  In other words_co_ moveTo works fine to force all three components_co_ x_co_ y_co_ and z. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDifficult to animate ONLY Y component_co_ while NOT knowing the values of mesh X and Z components.  Currently_co_ the first param of all _qt_To_qt_ funcs.. is not used.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnimating a specific component (like setting ONLY Y-axis to +5_co_ yet not knowing current X or Z)... via using a _qt_To_qt_ func... will require some ingenuity_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsetTimeout(()_eq_&gt_sm_mesh.moveTo(_qt_unused_qt__co_ new BABYLON.Vector3(mesh.position.x_co_ 5_co_ mesh.position.z)_co_ 35)_co_ 19000)_sm_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(not tested_co_ but should work_co_ in theory)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-18T00:19:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ cool!  Neat easing_co_ and also how the cones spin differently.... speed (I see). Nice magic there.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-18T18:10:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t~ ANIMATION METHODOLOGY &gt_sm_ _lt_strong_gt_IK_lt_/strong_gt_ - _lt_em_gt_ARM-MINIMUM_lt_/em_gt__dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt comes from an awesome playground shared on another thread about bones...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_image.png.7f88301b68c7729c0ea67f1d12678b60.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15778_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.7f88301b68c7729c0ea67f1d12678b60.png_qt_ style_eq__qt_width_dd_300px_sm_height_dd_auto_sm__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure who made it_co_ but it is... cool-thing -&gt_sm_ top-ten.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PNJGW%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PNJGW#7_lt_/a_gt_ via_dd_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGiving it a go_co_ to find questions or tips. Looks pretty solid for such a complex thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Next up_dd_ IK-ARM-MINIMUM_co_ skinning..._lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-11-18T18:48:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI created that PG when I was developing the IK controller.  At that time I hadn_t_t added the slerpAmount feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example of how to use slerp_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PNJGW%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PNJGW#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-18T21:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome_co_ I had not researched SLERP yet.... \n_lt_/p_gt_\n\n_lt_p_gt_\n\t...  can_t_t wait to check that out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE -&gt_sm_ MINIMUM-IK_dd_ ImportMesh &amp_sm_&amp_sm_ GTLF -&gt_sm_ runs animation() automatically(?) Watch out for that. Switching back to .babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-19T03:43:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_~ ANIMATION METHODOLOGY &gt_sm__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_strong style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_IK_lt_/strong_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_-_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_em style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ARM-MINIMUM_lt_/em_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ your IK is really good....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_o_1bv95olgvk862qv1sv914glru6j_qt_ src_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-19T04:09:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt_too many gifs_qt_ might_t_ve sunk this thread...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll have to break these out...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-19T17:18:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ way to go_co_ breakin_t_ stuff.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps _qt_break these out_qt_ to your github/images/animreview/ folder_co_ and then use links instead of pasting gifs?  (ahem)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (hug)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you decide to clean-up this thread by putting all your gifs in a folder somewhere_co_ and changing all your gif-pastes... to LINKS-TO gifs... then holler_co_ and I_t_ll delete that new thread_co_ if you wish (I_t_m a moderator).  Your call... on all of it.  Wingy simply pointing-out some options.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-19T17:28:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThought it over...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll look to add these as playground based tutorials.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-22T00:01:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnother TIP_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            When exporting from Blender there was a flicker error in an Idle Animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             You guessed it...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBLENDERFIX_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             Extend the end of the timeline -&gt_sm_ to beyond the animation range -&gt_sm_ export again_co_ and it runs smooth.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-11-27T15:12:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThx #wingy for bringin-the-funky-back....\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUPDATE_dd_ another BLENDERFIX. A very-very tricky one. ATTACH ITEM TO IK BONE.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are many ways to attach item to IK bone - but not many of them export as an animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat follows is a singular methodology to successfully export IK-to-Item-Bone animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny alteration of these steps results in animation not running at all (ver 5.4.2). _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see the steps are rather complex...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Item-IK -&gt_sm_ Blend-Recipe_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- SHIFT+D a single bone on armature. Move to position. This is your item-bone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Edit item-bone_co_ (do not uncheck Deform ) -&gt_sm_ parent to the K-Bone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Pose Mode_co_ select mesh then item-bone_co_ Ctrl+P -&gt_sm_ _t_Attach with Automatic Weights_t__co_  NOT _t_Attach as Relative Bone_t__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- fix any weight paints (outside the radius of weight).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- animate the IK Bone_co_ with IK Influence _eq_ 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Object Mode_co_ select all_co_ Ctrl+A -&gt_sm_ Apply RTS (rotation_co_ transform_co_ scale). (don_t_t forget!). Export warns of this. +1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- export_co_ animate run-time....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tall good. Not easy. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps someone...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-27T15:23:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGood discovery/tip_co_ aF!  Thx!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2018-03-27T16:28:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195518_qt_ data-ipsquote-contentid_eq__qt_34026_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510940740_qt_ data-ipsquote-userid_eq__qt_25131_qt_ data-ipsquote-username_eq__qt_aFalcon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 17/11/2017 at 5_dd_45 PM_co_ aFalcon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tGLTF animations not supported for assetsManager.addMeshTask\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAfter a lot of Googling_co_ this is the only place I found some one mentioned that. Why no one report this bug?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI only can make the animation in assetsManager loaded glTF work with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3536#issuecomment-357266541_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3536#issuecomment-357266541_lt_/a_gt__co_ but can_t_t figure out how to control the animations. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-03-27T16:41:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for reproducing shen. glTF specification is awesomely large. Surprised if there wasn_t_t something left over.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_  for re-ping.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tah_co_ jeez. oops. Sorry - keep doing that...  _dd_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-27T17:41:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat do you want to control? Play / pause / stop?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case you should not ask the system to start it automatically but instead call beginAnimation manually on the object you want\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have a repro we can test on the Playground?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-03-27T18:01:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Two (separate) things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA possible edge-case in asset manager around the glTF import (above). For re-ping... on import. idk...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere was a work-around... .babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... i_t_ll stop pinging. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the Animation syntax suggestion_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BJSObj.animate({target_dd_value_co_ done_dd_fn(){}})_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWith a reason...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t~over-and-out _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2018-03-27T21:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_210071_qt_ data-ipsquote-contentid_eq__qt_34026_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1522172508_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIn this case you should not ask the system to start it automatically but instead call beginAnimation manually on the object you want\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s what I_t_m talking about. I tried use beginAnimation_co_ but it_t_s not working.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DS22WT_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DS22WT_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see line 16 doesn_t_t do anything with the animation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ I followed _lt_a href_eq__qt_https_dd_//donmccurdy.com/2017/11/06/creating-animated-gltf-characters-with-mixamo-and-blender/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//donmccurdy.com/2017/11/06/creating-animated-gltf-characters-with-mixamo-and-blender/_lt_/a_gt_ to create glTF files with multi actions. _lt_a href_eq__qt_https_dd_//gltf-viewer.donmccurdy.com/_qt_ rel_eq__qt_external nofollow_qt__gt_drag-and-drop three.js glTF viewer_lt_/a_gt_ can play animations correctly. I_t_m not sure about Babylon.js_co_ then it end here. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-03-27T21:46:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25623-shen/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25623_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25623-shen/_qt_ rel_eq__qt__qt__gt_@shen_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this case I put a debugger before beginAnimation() and look at the armature and animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsually something is wrong with the skeleton on the import... not a problem with the animation (necessarily). Sometimes it is missing too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did find a singular glTF anomaly in export and using AssetManager. (if i recall correctly). perhaps these are different.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImportant. With all animations - must prove the concept first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBuild animations gradually - exporting every step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee what exported and what didn_t_t (see above) -&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbecause you cannot export everything that you can create in blender...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t... then use the blender workflow that is confirmed to export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylonJS does famously on the import -&gt_sm_ and I switched back to .babylon files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou will probably have to experiment on the Blender side. Good tips above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was able to do successfully_co_ but it is tricky.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-28T16:03:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgltf loader relies on the new AnimationGroup features to merge multiple animations together_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DS22WT#1_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DS22WT#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDocumentation_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/group_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/group_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2018-03-28T16:34:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t+Like1 ~Animation Groups.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2018-04-03T17:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ Thanks! AnimationGroup works. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_But I got another question... How to apply beginWeightedAnimation and syncWith  with AnimationGroup like _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DMLMIP%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DMLMIP#1_lt_/a_gt_ ? _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-03T19:12:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnimationGroup.animatables is the way to go.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can reach each animatable and then set animatable.weight and also call animatable.syncWith _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2018-04-04T15:40:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#DS22WT%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#DS22WT#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince _lt_span_gt_3.2.0-beta.1 to the latest_lt_/span_gt__co_ setting _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_animatable.weight to no -1 will cause error. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            if (weight !_eq__eq_ -1.0) {\n                this._scene._registerTargetForLateAnimationBinding(this)_sm_\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBTW_co_ the stable version Babylon.js engine (v3.1.1) I found in _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexstable#DS22WT%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexstable#DS22WT#2_lt_/a_gt_ is not a tag in github (_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_AnimationGroup was not supported)_lt_/span_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ After commit _lt_span_gt_1c51062c8d9860baa9f91e7757a30cd9c2df35dc_co_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_animatable.weight can only be -1 and before that no syncWith for animatable. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-04T22:08:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like a big bug! Will fix it for next nightly\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shen","Date":"2018-04-13T14:13:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI checked out the latest codes. setWeightForAllAnimatables and syncAllAnimationsWith are all there_co_ so I gave them a try...  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PSR2ZX%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PSR2ZX#17_lt_/a_gt_ The animation blending seems different from _lt_a href_eq__qt_https_dd_//gltf-viewer.donmccurdy.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gltf-viewer.donmccurdy.com/_lt_/a_gt_ with the same UFO file (abduction_rings animation itself is different on the two viewers too). I guess maybe they retreat weight 0 or -1/stop or not differently and the start time can be different too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also generated a glb file _lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_17888_qt_ data-fileid_eq__qt_17888_qt_ rel_eq__qt__qt__gt_ybot.glb_lt_/a_gt_ to make something like _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DMLMIP%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DMLMIP#1_lt_/a_gt_ and found out it_t_s not working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn _lt_a href_eq__qt_https_dd_//gltf-viewer.donmccurdy.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gltf-viewer.donmccurdy.com/_lt_/a_gt__co_ the animation blending of _lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_17888_qt_ data-fileid_eq__qt_17888_qt_ rel_eq__qt__qt__gt_ybot.glb_lt_/a_gt_ is working and seems correct. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also find that after the asset file was loaded_co_ not all the items were loaded in scene.animationGroups. So if setWeightForAllAnimatables are used immediately_co_ you will get errors in most cases (for strange case like the UFO file_co_ it just doesn_t_t blending unloaded animation but no error...comment out line 88).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTypeError_dd_ runtimeAnimation.currentValue.decompose is not a function\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I start all the animation before set weight. There must be a proper way to do it in certain event... I guess...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]