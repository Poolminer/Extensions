[{"Owner":"NasimiAsl","Date":"2017-12-09T04:41:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t** some time we answer a wrong question and find a complicated solution may be most ask a main question why you need  have that kind of scene _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-10T14:54:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198030_qt_ data-ipsquote-contentid_eq__qt_34389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512794480_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2017 at 12_dd_41 PM_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t** some time we answer a wrong question and find a complicated solution may be most ask a main question why you need  have that kind of scene _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHum...it_t_s kind of hard to explain though. Anyway I am not using render targets to achieve my targets. But I have only one problem for now. It seems that the alpha values of my render targets are always 1.0. How can I output the alpha values though? Do I need to write my own shaders?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-11T05:54:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198030_qt_ data-ipsquote-contentid_eq__qt_34389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512794480_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/9/2017 at 12_dd_41 PM_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t** some time we answer a wrong question and find a complicated solution may be most ask a main question why you need  have that kind of scene _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNasimiAsl，\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for all your help. Now I have worked out what I expected. Actually the only problemI have is that every time I add a new mesh to my selection group/layer_co_ I need to update the Octree otherwise I won_t_t see it. Anyway I will keep my current solution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. first I clone my original selected mesh and apply a base layer selection material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. then I add an overlay layer (alpha _eq_ 0.2) and render it to a separate render target.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Then in the final compose shader_co_ I apply a simple edge detection algorithm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16195_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a2e1c61976af_ScreenShot2017-12-11at1_48_13PM.png.d8c690e23ef9e72c490204a8685fd1f7.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a2e1c63480d5_ScreenShot2017-12-11at1_48_13PM.thumb.png.9f045c2f2aaf6614d7aab97f971606e3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16195_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a2e1c63480d5_ScreenShot2017-12-11at1_48_13PM.thumb.png.9f045c2f2aaf6614d7aab97f971606e3.png_qt_ /_gt__lt_/a_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_16196_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a2e1c7871d3a_ScreenShot2017-12-11at1_47_45PM.png.ff5ece9f4479f5207d08a4aa3443f549.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a2e1c799aa14_ScreenShot2017-12-11at1_47_45PM.thumb.png.3022831bd3e3eafed11984c89fe2b768.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16196_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a2e1c799aa14_ScreenShot2017-12-11at1_47_45PM.thumb.png.3022831bd3e3eafed11984c89fe2b768.png_qt_ /_gt__lt_img alt_eq__qt_5a2e1c799aa14_ScreenShot2017-12-11at1_47_45PM.thumb.png.3022831bd3e3eafed11984c89fe2b768.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16196_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_12/5a2e1c799aa14_ScreenShot2017-12-11at1_47_45PM.thumb.png.3022831bd3e3eafed11984c89fe2b768.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-12-13T10:47:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso nice\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  you do it  or you have any problem?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-13T11:59:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-blackmojito/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28947_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-blackmojito/_qt_ rel_eq__qt__qt__gt_@BlackMojito_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Then in the final compose shader_co_ I apply a simple edge detection algorithm_lt_/span_gt__qt_    Can you share simple edge detection algorithm? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-14T08:29:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198474_qt_ data-ipsquote-contentid_eq__qt_34389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513166380_qt_ data-ipsquote-userid_eq__qt_27658_qt_ data-ipsquote-username_eq__qt_Arte_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 hours ago_co_ Arte said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-blackmojito/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28947_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28947-blackmojito/_qt_ rel_eq__qt__qt__gt_@BlackMojito_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Then in the final compose shader_co_ I apply a simple edge detection algorithm_lt_/span_gt__qt_    Can you share simple edge detection algorithm? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Arte_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sorry because I am not allowed to share my code for now. Hum...but actually it is just a Sorbel edge detector. You have bunch of information on the Internet. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2017-12-14T08:30:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198465_qt_ data-ipsquote-contentid_eq__qt_34389_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513162045_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t21 hours ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tso nice\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t  you do it  or you have any problem?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi NasimiAsl_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo I have no problem anymore. Thanks you again for your support. Without you this cannot be done. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-12-14T09:46:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1JUXK5%2354_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1JUXK5#54_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1JUXK5%2353_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1JUXK5#53_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\task anything you like to do my friend _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1JUXK5%2355_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1JUXK5#55_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1JUXK5%2357_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1JUXK5#57_lt_/a_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can use highlight layer too  i think\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ i think Postprocess have some bug after add any postprocess some effect is gone ( maybe fxaa  )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1JUXK5%2358_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1JUXK5#58_lt_/a_gt_ no post process \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]