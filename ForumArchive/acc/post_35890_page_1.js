[{"Owner":"ozRocker","Date":"2018-02-23T10:20:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy shadows seem to be coming out strange.  By default I get splotches_co_ so I used this from an example\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    shadowGenerator.useBlurExponentialShadowMap _eq_ true_sm_\n    shadowGenerator.useKernelBlur _eq_ true_sm_\n    shadowGenerator.blurKernel _eq_ 10_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIts slightly better but still weird.  Does anyone know what might be the problem?  I_t_m using Babylon v3.2.0-alpha6\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/shadow_problem.jpg.32663af87a8ba36685fdc35378167e54.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_17151_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_02/shadow_problem.thumb.jpg.fba5d0be30e769d2a18bff5f0bfbf642.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shadow_problem.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-23T17:25:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you have the same issue with a model without  bones?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso try top play with generator.depthScale\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf your scene is small I would also recommend using closeESM instead of ESM\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-02-23T17:47:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes this help?_lt_br /_gt_\n\tI had a bit similar negative shadows because of wrong weights/matrices._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#002451_sm_color_dd_#ffffff_sm_font-size_dd_16px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_CleanBoneMatrixWeights_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2018-02-24T05:13:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_205843_qt_ data-ipsquote-contentid_eq__qt_35890_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1519408023_qt_ data-ipsquote-userid_eq__qt_7708_qt_ data-ipsquote-username_eq__qt_BitOfGold_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ BitOfGold said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDoes this help?_lt_br /_gt_\n\t\t\tI had a bit similar negative shadows because of wrong weights/matrices._lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#002451_sm_color_dd_#ffffff_sm_font-size_dd_16px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#ff9da4_sm__qt__gt_CleanBoneMatrixWeights_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#99ffff_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#ffc58f_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#ffffff_sm__qt__gt__sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat fixed it!!! Thanx mate _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-26T15:44:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell done _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7708_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7708-bitofgold/_qt_ rel_eq__qt__qt__gt_@BitOfGold_lt_/a_gt_!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-26T15:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you mind updating the shadow troubleshooting documentation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2018-02-26T16:04:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK I sent a PR.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-26T16:39:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou rock!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]