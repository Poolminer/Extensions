[{"Owner":"Bob Zhang","Date":"2018-08-31T02:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_m here again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. About Morphing\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause of the limitation of webgl max vertex attibutes number_co_ it_t_s not possible to manage too many morph targets for a mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find that each morph target carries positions and normals.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the question is_dd_ how to make exporter only exports morph target position?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. About vertex color\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we do not need vertex color_co_ how to prevent exporter from exporting vertex color information?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-31T15:32:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! is it with Max_co_ Maya or Blender? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tANd is it for gltf or babylon file format?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-08-31T16:00:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCannot be Blender.  It does not support morph target normals.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-08-31T16:18:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_226882_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1535729567_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t41 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello! is it with Max_co_ Maya or Blender? \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tANd is it for gltf or babylon file format?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt is with Maya.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe work flow is_dd_ artists produce fbx with 3ds max. I import it into Maya and export it to babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know it sounds strange  that we use different tools in a team. Later We will use same tools.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-04T16:16:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk so you are aware that you could export from 3dsmax _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo export only position_co_ you will have to edit the file I guess to remove normal from morph targets (Pinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28074_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/_qt_ id_eq__qt_ips_uid_2515_5_qt_ rel_eq__qt__qt__gt_@noalak_lt_/a_gt_ for validation)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_For vertex color_dd_ same thing_co_ you should remove them directly in Maya_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-09-04T17:16:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_226833_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1535683867_qt_ data-ipsquote-userid_eq__qt_32572_qt_ data-ipsquote-username_eq__qt_Bob Zhang_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn ‎8‎/‎30‎/‎2018 at 7_dd_51 PM_co_ Bob Zhang said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf we do not need vertex color_co_ how to prevent exporter from exporting vertex color information?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tJust so I understand the question_co_ are you using vertex color for something else and just need to remove them on export or do you have vertex color on the model that you don_t_t need?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-09-04T17:30:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_227130_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1536077796_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOk so you are aware that you could export from 3dsmax _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tTo export only position_co_ you will have to edit the file I guess to remove normal from morph targets (Pinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28074_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/_qt_ rel_eq__qt__qt__gt_@noalak_lt_/a_gt_ for validation)_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_For vertex color_dd_ same thing_co_ you should remove them directly in Maya_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo from what you say I guess the removal tasks can be done by 3dsmax or maya themselves?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-09-04T17:31:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_227145_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1536081390_qt_ data-ipsquote-userid_eq__qt_32589_qt_ data-ipsquote-username_eq__qt_PatrickRyan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 minutes ago_co_ PatrickRyan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tJust so I understand the question_co_ are you using vertex color for something else and just need to remove them on export or do you have vertex color on the model that you don_t_t need?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you for replying\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t need vertex color.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I don_t_t need morph target normals either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-04T17:55:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32572_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/_qt_ rel_eq__qt__qt__gt_@Bob Zhang_lt_/a_gt_ correct _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PatrickRyan","Date":"2018-09-04T18:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32572_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/_qt_ rel_eq__qt__qt__gt_@Bob Zhang_lt_/a_gt_ It_t_s easiest to control the vertex color directly in Maya. You can find the simple way to remove the vertex color here_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2018/ENU/Maya-Modeling/files/GUID-5ECDB0A2-D95A-420D-8388-67490CBF2679-htm.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2018/ENU/Maya-Modeling/files/GUID-5ECDB0A2-D95A-420D-8388-67490CBF2679-htm.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have been speaking with the team about morph targets and our Maya exporter. Right now we don_t_t have a way to control the attributes that get written out per morph target_co_ so you don_t_t have control over just writing position so you can get more morphs before hitting the limits on WebGL or glTF. We are thinking that we need to add the ability to use checkboxes for which attributes a user wants to export with some user feedback about the total number of attributes being exported when checking each box. This could give some feedback about exceeding recommended limits to the user so they can make informed decisions about their morph targets. What do you think about something like that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUntil we are able to implement a solution into the exporter_co_ the easiest way to achieve what you are looking to do is to manually edit out the attributes you don_t_t want in an editor like VS Code. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-09-05T06:51:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_227173_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1536084771_qt_ data-ipsquote-userid_eq__qt_32589_qt_ data-ipsquote-username_eq__qt_PatrickRyan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ PatrickRyan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32572_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/_qt_ rel_eq__qt__qt__gt_@Bob Zhang_lt_/a_gt_ It_t_s easiest to control the vertex color directly in Maya. You can find the simple way to remove the vertex color here_dd_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2018/ENU/Maya-Modeling/files/GUID-5ECDB0A2-D95A-420D-8388-67490CBF2679-htm.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2018/ENU/Maya-Modeling/files/GUID-5ECDB0A2-D95A-420D-8388-67490CBF2679-htm.html_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI have been speaking with the team about morph targets and our Maya exporter. Right now we don_t_t have a way to control the attributes that get written out per morph target_co_ so you don_t_t have control over just writing position so you can get more morphs before hitting the limits on WebGL or glTF. We are thinking that we need to add the ability to use checkboxes for which attributes a user wants to export with some user feedback about the total number of attributes being exported when checking each box. This could give some feedback about exceeding recommended limits to the user so they can make informed decisions about their morph targets. What do you think about something like that?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tUntil we are able to implement a solution into the exporter_co_ the easiest way to achieve what you are looking to do is to manually edit out the attributes you don_t_t want in an editor like VS Code. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ what I am doing is after exporting_co_ manually remove normal attributes from morph target in babylon files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if those work can be done in exporter with checkboxes_co_ things will be fantastic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-09-05T06:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_227168_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1536083754_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32572_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32572-bob-zhang/_qt_ rel_eq__qt__qt__gt_@Bob Zhang_lt_/a_gt_ correct _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you! I will tell my partners!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"noalak","Date":"2018-09-05T07:22:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Bob Zhang_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe are working on the enhancements described above. Will let you know once done.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bob Zhang","Date":"2018-09-05T09:41:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_227238_qt_ data-ipsquote-contentid_eq__qt_39751_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1536132120_qt_ data-ipsquote-userid_eq__qt_28074_qt_ data-ipsquote-username_eq__qt_noalak_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ noalak said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi Bob Zhang_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWe are working on the enhancements described above. Will let you know once done.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28074_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28074-noalak/_qt_ rel_eq__qt__qt__gt_@noalak_lt_/a_gt_!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]