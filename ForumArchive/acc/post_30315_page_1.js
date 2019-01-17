[{"Owner":"steverob","Date":"2017-05-09T10:36:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow do I make this model animate. I downloaded this model and trying to start its animation. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould love some help here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe model is here - _lt_a href_eq__qt_https_dd_//www.dropbox.com/sh/k9n0l4medh25yns/AACVPm_ameGw-R8AzrArk1KMa?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/sh/k9n0l4medh25yns/AACVPm_ameGw-R8AzrArk1KMa?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-09T16:05:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thello do you mind creating a playground repro?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-05-09T16:45:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26860-steverob/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26860_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26860-steverob/_qt_ rel_eq__qt__qt__gt_@steverob_lt_/a_gt_ _dd_ Welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I assume this is what you are looking for_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.3dworlds.ca/steve/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Office Guy_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll the script code I used is in the file _dd_ index.html (open your web console and grab a copy).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe important lines are_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var meshcam _eq_ myScene.getMeshByName(_qt_CameraPreset_qt_)_sm_\n\t\t\t\t\t\nmyScene.beginAnimation(meshcam_co_1_co_360_co_true)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe file was created in Blender_co_ so the first line gets the _qt_empty_qt_ - called _qt_CameraPreset_qt_ - that is the parent of the camera\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe second line plays the animation of that _qt_empty_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIgnore the code about _qt_divFPS_qt_ - that is just producing the frame rate in to left corner of the screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd aside thought - update your exporter to version V5.2. Probably should update your version of Blender too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_EDIT_dd_ _lt_/strong_gt_I didn_t_t download your textures so that is why the default red/black checker is used. And just a thought_co_ what does the title of this thread have to do with animation?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]