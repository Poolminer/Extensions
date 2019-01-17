[{"Owner":"MackeyK24","Date":"2017-08-15T16:22:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys... Got another tough one form me_co_ hopefully someone can help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am making a component for the BabylonJS toolkit to support LODGroup... to automatically build LOD support for meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn unity_co_ when setting up a LODGroup... the levels are specified in percent_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14447_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59931ed32c6b8_ScreenShot2017-08-15at6_18_07AM.png.b52537540fd320f7576d2a747459479a.png_qt_ alt_eq__qt_59931ed32c6b8_ScreenShot2017-08-15at6_18_07AM.png.b52537540fd320f7576d2a747459479a.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe documentations says _qt_The percentages in the LOD bars represent the fraction of the view frustum depth where that LOD level becomes active.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in Babylon we apparently use actual distance values to setup LOD...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question is how can I convert these percentage values to distance to mesh.addLODLevel ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ ... SOMEBODY _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPlease chime in here _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-15T16:25:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPerhaps (camera.maxZ - camera.minZ) * percentage\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-15T17:32:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_185665_qt_ data-ipsquote-contentid_eq__qt_32389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502814341_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tPerhaps (camera.maxZ - camera.minZ) * percentage\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ for responding ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnity does not seem to _qt_Specify_qt_ a camera... just use these percentage values...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould I ALWAYS use the Babylon.MainCamera (activeCamera) to do these calculations on the client side (since I don_t_t have a way of saying a specific LOD Group is associated with a certain camera)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd what is Camera minZ and maxZ... would these exists in Unity Camera (maybe called something else)... so I can calculate what the distance is on the unity side then serialize distance values for each LOD group ??? What do you think?//\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-15T17:35:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmaxZ is the farthest a mesh will render before its culled_co_ and minZ in the closest it will be.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-15T17:41:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_185681_qt_ data-ipsquote-contentid_eq__qt_32389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502818512_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t5 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmaxZ is the farthest a mesh will render before its culled_co_ and minZ in the closest it will be.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo in in unity... That would be the Near and far clipping planes... Right???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14448_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/5993323cbe43b_ScreenShot2017-08-15at7_40_33AM.png.a0476fda9a482829d23703f6de35cdab.png_qt_ alt_eq__qt_5993323cbe43b_ScreenShot2017-08-15at7_40_33AM.png.a0476fda9a482829d23703f6de35cdab.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-15T17:46:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_185683_qt_ data-ipsquote-contentid_eq__qt_32389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1502818889_qt_ data-ipsquote-userid_eq__qt_24012_qt_ data-ipsquote-username_eq__qt_MackeyK24_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ MackeyK24 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSo in in unity... That would be the Near and far clipping planes... Right???\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/5993323cbe43b_ScreenShot2017-08-15at7_40_33AM.png.a0476fda9a482829d23703f6de35cdab.png_qt_ title_eq__qt_Enlarge image_qt_ data-fileid_eq__qt_14448_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5993323cbe43b_ScreenShot2017-08-15at7_40_33AM.png.a0476fda9a482829d23703f6de35cdab.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14448_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/5993323cbe43b_ScreenShot2017-08-15at7_40_33AM.png.a0476fda9a482829d23703f6de35cdab.png_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tEDIT_dd_ Yep I guess so... thats what use in the Toolkit to setup a camera...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnity_dd_ lodBias _eq_ 2.0\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you think I can get distance for each LOD by_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar distance _eq_ lodBias * ((farClip - nearClip) * percentage)\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_BabylonUniversalCamera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ babylonCamera _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_BabylonUniversalCamera_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_name_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_name_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_id_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_GetID_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_gameObject_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_fov_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_fieldOfView_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_*_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ (_lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_float_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_Math_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_PI_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#b5cea8_sm__qt__gt_180_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_minZ_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_nearClipPlane_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_maxZ_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_farClipPlane_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_parentId_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_GetParentID_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_transform_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_)_co__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_position_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_camera_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_transform_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_localPosition_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#dcdcaa_sm__qt__gt_ToFloat_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_()_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_}_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-08-15T19:09:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcorrect_co_ and just by looking at that math it should work!_lt_br /_gt_\n\tI did a terrain LOD that might help you with how I calculated the distances for it_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1105412025_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/31776-infinite-terrain-idea-bounce/?do_eq_embed_qt_ style_eq__qt_height_dd_207px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-26T18:14:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGo Full LOD Support working from Unity Editor LOD Groups... Again works perfect...not one single line of code to configure or setup anything _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-28T18:31:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tShould I keep asking about a doc? _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2017-08-29T06:28:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_186977_qt_ data-ipsquote-contentid_eq__qt_32389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1503945091_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tShould I keep asking about a doc? _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ .. My Man _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIm working on it bro... I need to work out some stuff in the features sets... Here a few screen shots... But im still working on it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMain exporters_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14630_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a508dd58755_ScreenShot2017-08-28at7_27_16PM.png.f3c629b59d2d068a0f30bb6dd26086e6.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a508de63b07_ScreenShot2017-08-28at7_27_16PM.thumb.png.a5133cb5a7c33063f766ebe3b15e32c1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14630_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a508de63b07_ScreenShot2017-08-28at7_27_16PM.thumb.png.a5133cb5a7c33063f766ebe3b15e32c1.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tToolkit Overview Pages_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14631_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a50914e0a66_ScreenShot2017-08-28at7_27_33PM.png.2a0fcdc3ca6fced06a8ac8bc0857fa49.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a50915aeb17_ScreenShot2017-08-28at7_27_33PM.thumb.png.76d344275c7560fa183ea9203d3789fe.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14631_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a50915aeb17_ScreenShot2017-08-28at7_27_33PM.thumb.png.76d344275c7560fa183ea9203d3789fe.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14633_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5093775e35_ScreenShot2017-08-28at7_28_27PM.png.2df2a8b15841ec50770029cfb2b96828.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a5093870ee5_ScreenShot2017-08-28at7_28_27PM.thumb.png.5da117a8555354d259bf64c16efef9be.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14633_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5093870ee5_ScreenShot2017-08-28at7_28_27PM.thumb.png.5da117a8555354d259bf64c16efef9be.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14634_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a509494e5f5_ScreenShot2017-08-28at7_29_02PM.png.528ee853db0fe7b78325f4d93e89a1db.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a5094a2152d_ScreenShot2017-08-28at7_29_02PM.thumb.png.550a58ed9e2a3738109439535b0cc34b.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14634_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5094a2152d_ScreenShot2017-08-28at7_29_02PM.thumb.png.550a58ed9e2a3738109439535b0cc34b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14635_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5095e6db82_ScreenShot2017-08-28at7_29_44PM.png.768b59a16ccb4660b17a282a3dbe33bb.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a5095f5e228_ScreenShot2017-08-28at7_29_44PM.thumb.png.efbc49812c5983115385ffa1d29fda77.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14635_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5095f5e228_ScreenShot2017-08-28at7_29_44PM.thumb.png.efbc49812c5983115385ffa1d29fda77.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_14636_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a5097289d88_ScreenShot2017-08-28at7_30_08PM.png.535305b006edc89b3f30bcf42805564a.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_59a50973911ca_ScreenShot2017-08-28at7_30_08PM.thumb.png.931f824e8e9e6b46c209090321db2f89.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_14636_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_08/59a50973911ca_ScreenShot2017-08-28at7_30_08PM.thumb.png.931f824e8e9e6b46c209090321db2f89.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut its a coming along _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-29T22:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou_t_re DA MAN!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]