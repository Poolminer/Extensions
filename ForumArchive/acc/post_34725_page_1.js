[{"Owner":"rhgrafix","Date":"2017-12-23T22:32:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_b_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d85c6_sm_font-size_dd_10pt_sm_vertical-align_dd_baseline_sm__qt__gt_Hi_co__lt_br /_gt_\n\t  _lt_/span_gt__lt_/b_gt__lt_span_gt__lt_span style_eq__qt_font-weight_dd_bold_sm_background-color_dd_transparent_sm_color_dd_rgb(61_co_133_co_198)_sm_font-size_dd_10pt_sm_vertical-align_dd_baseline_sm__qt__gt_I_t_m testing code at_dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/?shadows_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/?shadows_lt_/a_gt__lt_span style_eq__qt_font-weight_dd_bold_sm_background-color_dd_transparent_sm_color_dd_rgb(61_co_133_co_198)_sm_font-size_dd_10pt_sm_vertical-align_dd_baseline_sm__qt__gt_ and want to try my own image for the ground. On line 35 I put “_lt_a href_eq__qt_http_dd_//www.rhgrafix.com/images/ground.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.rhgrafix.com/images/ground.jpg_lt_/a_gt_” instead of _qt_textures/ground.jpg_qt__co_ I control+click on it and sure enough my image comes up in browser_co_ but when I hit Run I just get the default checkered image. Why is this happening? Thanks_co__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n\n_lt_p dir_eq__qt_ltr_qt__gt_\n\t_lt_b_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d85c6_sm_font-size_dd_10pt_sm_vertical-align_dd_baseline_sm__qt__gt_R.L. Hamm_lt_/span_gt__lt_/b_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-24T02:18:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/_qt_ rel_eq__qt__qt__gt_@rhgrafix_lt_/a_gt__co_ welcome to the forum.  This could be happening because of CORs security.  rhgrafix.com might need to be configured for CORs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_b_gt__lt_a href_eq__qt_https_dd_//tinyurl.com/ycgow6mn_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//tinyurl.com/ycgow6mn_lt_/a_gt__lt_/b_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is a Google IMAGE search... for _t_ground texture_t__co_ and I set the _lt_strong_gt_tools_lt_/strong_gt_ for _t_labeled-for-reUse_t_... AND added _t_wikimedia_t_... because I KNOW wikimedia images are always CORs-clear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ click some of those images_co_ get some URLs to some of those textures_co_ and see if THOSE work as a URL for your texture.  IF they do_co_ then yeah_co_ your server needs to be CORs activated_co_ and I have no idea how to do that.  Sorry.  Others know how... and so does a web search.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also have a free github account_co_ and it lets me store a few textures there_co_ and that is a CORs-cleared way.  (I_t_m no pro on CORs stuff_co_ sorry.  Web reading available)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomewhere in your f12 browser tools_co_ there may be a _t_net_t_ tab/choice... that will show the results of all file-retrievals attempts... that happened during the scene RUN.  In there_co_ you might see a CORs security report... which might have happened when that texture tried to load.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Report back_co_ please.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-24T02:50:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/_qt_ rel_eq__qt__qt__gt_@rhgrafix_lt_/a_gt_ _lt_br /_gt_\n\tDefinitely a CORs issue as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ pointed out_co__lt_br /_gt__lt_br /_gt_\n\ti suggest using github raw_sm_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#QM62ZM_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#QM62ZM_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhgrafix","Date":"2017-12-24T20:31:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_b_gt__lt_span_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-size_dd_9pt_sm_vertical-align_dd_baseline_sm__qt__gt_Thanks for replying and for the link to the textures._lt_/span_gt__lt_/span_gt__lt_/b_gt_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199524_qt_ data-ipsquote-contentid_eq__qt_34725_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1514081899_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHiya _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29776-rhgrafix/_qt_ rel_eq__qt__qt__gt_@rhgrafix_lt_/a_gt__co_ welcome to the forum.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_b_gt__lt_span_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-size_dd_9pt_sm_vertical-align_dd_baseline_sm__qt__gt_ I’ve never heard of CORs-clear images_co_ I read up on it a bit and saw some code on mozilla.org but don’t understand yet where it goes. I do have a working version of it on my domain_dd_ _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//www.rhgrafix.com/shadows.htm_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-size_dd_9pt_sm_vertical-align_dd_baseline_sm__qt__gt_http_dd_//www.rhgrafix.com/shadows.htm_lt_/span_gt__lt_/span_gt__lt_/a_gt__lt_span_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-size_dd_9pt_sm_vertical-align_dd_baseline_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_font-size_dd_9pt_sm_vertical-align_dd_baseline_sm__qt__gt_Is it the babylon playground that is rejecting my domain/image? I will ask my webhost (FastComet) on how to enable CORs_co_ there was no trace of it in their help section. One more problem_dd_ When I was trying to run it local_co_ on my C_dd_drive_co_ I have with my index_co_ the folder “textures” with the 2 images in it_co_ and the code calls as “textures/ground.jpg” and it won’t work_co_ other similar pages work locally (I don’t have a server emulator except GitHub Desktop and I’m not using it). So I am using the same images from the playground_co_ bypassing my domain and it doesn’t work_co_ any ideas on that? Thanks much and Merry Christmas! R.L. Hamm_lt_/span_gt__lt_/span_gt__lt_/b_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-26T18:33:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt is not the playground which rejects the request but your host. It will reject the request as it does not accept request from the PG domain. You have to check with your webhost here\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding accessing local files_dd_ this should not work as this is against security constraints. The best option is to run a local server\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhgrafix","Date":"2017-12-26T21:14:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_199659_qt_ data-ipsquote-contentid_eq__qt_34725_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1514313221_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt is not the playground which rejects the request but your host. It will reject the request as it does not accept request from the PG domain. You have to check with your webhost here\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOk_co_ thank you_co_ I submitted a ticket to my domain. About the local server_co_ I have certain indexes that work fine locally with an_lt_br /_gt_\n\t_qt_images_qt_ folder in same folder as the index.html_co_ what exactly determines whether or not it works? Something in the js files that are called up?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-27T17:19:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah some files are not considered harmful (like images) but others are (like JS _dd_))\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rhgrafix","Date":"2018-01-11T05:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n\n_lt_p dir_eq__qt_ltr_qt__gt_\n\t_lt_b_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_color_dd_#674ea7_sm_font-size_dd_8pt_sm_vertical-align_dd_baseline_sm__qt__gt_I finally got this resolved_co_ I added SSL to my domain and now it works_co_ it solved the same problem I was having on CodePen and probably explains why a slew of other places I tried didn_t_t work. My domain host gives us free access to Let’s Encrypt which was a really easy fix_co_ even I figured it out and set it up in about 2 minutes _dd_O) . Now I know CORS exists_co_ I don’t understand it but I hope I don’t have to deal with it anymore. I’m not sure how many other domain hosts offer free SSL (https) but please spread the word of this possible fix to paths to files not working_co_ it caused me hours upon hours of frustration. Thanks again for helping me._lt_/span_gt__lt_/b_gt_\n_lt_/p_gt_\n\n_lt_p dir_eq__qt_ltr_qt__gt_\n\t_lt_b_gt__lt_span style_eq__qt_background-color_dd_transparent_sm_color_dd_#674ea7_sm_font-size_dd_8pt_sm_vertical-align_dd_baseline_sm__qt__gt_R.L. Hamm_lt_/span_gt__lt_/b_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]