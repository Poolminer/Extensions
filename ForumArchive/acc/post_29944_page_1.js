[{"Owner":"vdheeraj","Date":"2017-04-22T11:43:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave render a bike model as show.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12644_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/init.PNG.302d0692f7df56418cf2a64b2a284718.PNG_qt_ alt_eq__qt_init.PNG.302d0692f7df56418cf2a64b2a284718.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFew details regarding the model_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tExported model from blender.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tAll parts are under a parent mesh.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tI want to swap the existing fuel tank with a new fuel tank.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoading new mesh(fuel tank) using AssetsManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmeshTask.onSuccess _eq_ function (task) {_lt_br /_gt_\n\t           //Get current tank\n_lt_/p_gt_\n\n_lt_p_gt_\n\t          //Hide current tank \n_lt_/p_gt_\n\n_lt_p_gt_\n\t          //Get current tank position using _lt_strong_gt_getAbsolutePosition()_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         //Set position to new tank\n_lt_/p_gt_\n\n_lt_p_gt_\n\t         //Set new tank_t_s parent\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        //Show new tank_lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFew details regarding new tank model_dd_\n_lt_/p_gt_\n\n_lt_ol_gt__lt_li_gt_\n\t\tExported model from blender.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tHas no parent.\n\t_lt_/li_gt_\n_lt_/ol_gt__lt_p_gt_\n\tBut new tank is not in correct position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12646_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/swap.PNG.2e6edff3fc1729a350d5c65f897d697d.PNG_qt_ alt_eq__qt_swap.PNG.2e6edff3fc1729a350d5c65f897d697d.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI can update the position manually(hard code) and get the following result.(Don_t_t want to do this)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12647_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/final.PNG.becce8582b28351465f7d8015f38acf6.PNG_qt_ alt_eq__qt_final.PNG.becce8582b28351465f7d8015f38acf6.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNeed to swap current mesh with new mesh and retain the position.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-24T13:11:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_171991_qt_ data-ipsquote-contentid_eq__qt_29944_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1492861406_qt_ data-ipsquote-userid_eq__qt_26681_qt_ data-ipsquote-username_eq__qt_vdheeraj_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 4/22/2017 at 6_dd_43 AM_co_ vdheeraj said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t         //Set position to new tank\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t         //Set new tank_t_s parent\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26681-vdheeraj/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26681_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26681-vdheeraj/_qt_ rel_eq__qt__qt__gt_@vdheeraj_lt_/a_gt__co_ welcome to the forum.  Nice model/scene... pretty.  You did a well-explained post_co_ too_co_ thx.  Could you try a test for me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry reversing the order of those two lines.  Set tank_t_s parent first_co_ then set position gotten from previous tank.  Setting parent AFTER setting position... might accidentally over-ride your position setting. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tReport results_co_ please.  Perhaps this will work.  I hope so_co_ but if not_co_ we_t_ll try more ideas... if I can think of some.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2017-04-24T14:53:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe try_dd_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t           //Get current tank\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t          //Hide current tank \n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t           // compute world matrix on current tank\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t          //Get current tank position using _lt_strong_gt_getAbsolutePosition()_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t           // set new tanks parent\n_lt_/p_gt_\n\n_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t           // set new tanks position using setAbsolutPosition()\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vdheeraj","Date":"2017-04-24T23:13:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8101_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/_qt_ rel_eq__qt__qt__gt_@Convergence_lt_/a_gt_ thanks for the suggestions_co_ but didn_t_t resolve the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ while trying to resolve this_co_ came across this post.\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/15912-importing-a-mesh-into-a-specified-meshes-array-number/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tI_t_m doing something similar as mention in the post.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo instead of having 2 files (original bike and modified tank)_co_ combined both and layered them in blender and exported.(All meshes have single parent)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoad all the meshes upfront and toggle isVisible and setEnabled to show and hide mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWas able to achieve this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12688_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/final_2.PNG.a12afcde3c058eff56b52615c7f4816e.PNG_qt_ alt_eq__qt_final_2.PNG.a12afcde3c058eff56b52615c7f4816e.PNG_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ To quote you _qt__lt_strong_gt__lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_you_t_re just the coolest_lt_/span_gt__lt_/strong_gt__qt_ .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8101_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/_qt_ rel_eq__qt__qt__gt_@Convergence_lt_/a_gt__co_ _lt_font color_eq__qt_#333333_qt__gt_appreciate your help._lt_/font_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]