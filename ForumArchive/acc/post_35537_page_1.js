[{"Owner":"negrant","Date":"2018-02-07T06:50:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ who know the babylon have the fucnctionality for setting a new rest pose for skleton?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI mean_co_ if we have a skeleton for the example with 20 frames and by default the rest pose it the first frame_co_ but if I need to apply a frame of the animation as new rest pose_co_ how I can do this from code?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks  _dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-07T17:35:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is not directly supported but you should be able to update bone._restPose to a new Matrix\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf this works for you I_t_ll add an accessor to avoid using a private property\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2018-02-11T15:08:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_203998_qt_ data-ipsquote-contentid_eq__qt_35537_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518024930_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 07.02.2018 at 7_dd_35 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello this is not directly supported but you should be able to update bone._restPose to a new Matrix\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf this works for you I_t_ll add an accessor to avoid using a private property\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI tried_co_ but it is not exactly what I need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need something like setFrame for a bone_co_ but setFrame working only if an animaiton for a bone already played.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I clone new skeletone and use setFrame for each one bone for the skeleton and skeleton do not have playing animation_co_ then setFrame does not works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow I can clone skeleton and at once in this frame before a render apply any frame for this skeleton_co_ that the animation started from frame that I need_co_ because the first animation\n_lt_/p_gt_\n\n_lt_p_gt_\n\talway started from rest pose and then rest pose blends with animation which we started.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn short - need to start animation for new skeleton from needed frame without rest pose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-11T16:32:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  Sorry to interrupt.  Yeah_co_ this is animation _qt_sewing_qt__co_ in a way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Rest_qt_.  It would be nice to have auto-animate... from rest position... to ANY-frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND... auto-animate... from ANY-frame... to rest position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnimations are not as plug_t_n_t_play as they COULD be_co_ eh?  *nod*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI dunno why I replied.  I have nothing useful to say.  _dd_/\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2018-02-12T04:38:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_204398_qt_ data-ipsquote-contentid_eq__qt_35537_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1518366779_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI dunno why I replied.  I have nothing useful to say.  _dd_/\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou are already the second_co_ we collect signatures for signing the petition about set bones to any frame wihtout a blending _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-12T08:31:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t*nod*.  It might not be technically possible_co_ though.  Animations could be _qt_accumulated_qt_ (additive?)_co_ so perhaps they need to be _lt_u_gt_played_lt_/u_gt_-to-a-frame_co_ and cannot _lt_u_gt_jump_lt_/u_gt_ to a frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think each frame is _qt_movement since _lt_u_gt_previous frame_lt_/u_gt__qt_ and not _qt_movement since _lt_u_gt_beginning frame_lt_/u_gt__qt_.  Maybe_co_ no jump-to-frame is possible... because of that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I am no expert about interpolations.  I should read some docs and/or study some code... before I yap.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-12T15:37:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLet_t_s try something else _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you go through your bones and call bone.updateMatrix(yourNewBaseMatrix) ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"negrant","Date":"2018-02-13T04:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ there I tried to get keys from the animation_co_ that to get matrix from the key_co_ but after this code nothing happens_co_ the skeloton still have the rest pose \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var animation _eq_ scene.beginAnimation(skeleton_co_ 0_co_ 1)_sm_\nanimation.stop()_sm_\n        \nfor (var i _eq_ 0_sm_ i &lt_sm_ skeleton.bones.length_sm_ i++) {\n            var keys _eq_ animation.getAnimations()[i].getKeys()_sm_\n            skeleton.bones[i].updateMatrix(keys[350].value)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-13T16:51:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ttry with skeleton.bones_lt_em_gt_.updateMatrix(keys[350].value_co_ false) ?\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n_lt_/em_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-13T16:51:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tif it does not work_co_ please provide a repro in the playground_co_ so I can try to help you further _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]