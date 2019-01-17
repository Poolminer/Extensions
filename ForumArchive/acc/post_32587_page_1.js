[{"Owner":"Borjan","Date":"2017-08-27T09:45:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can write texts on _qt_billboard style_qt_ mashes in any combination of text and background colors. However_co_ I cannot figure out how to do it when wrapping text.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor text wrapping I_t_ve used a code I_t_ve seen on this forum and on Stackoverflow and it works fine. However_co_ it uses direct functions of WebGL and that apparently collides with the usage of BABYLON.JS objects (not surprising as it goes underneath the Babylon layer).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I can draw text In white_co_ but not in black. I_t_m sure it can be done_co_ but I_t_m fighting it the whole morning without succes_co_  Please have a look into this playground example (I_t_ve isolated it from the rest of my application). To see the meshes_co_ double click on the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks very much in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-08-27T09:57:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ve improved the example a bit_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-08-27T12:41:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve solved it somehow by drawing a rectangle directly in WebGL_co_ see lines 26 and 27\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    textureContext.fillStyle _eq_ _qt_#B5FFFF_qt__sm__lt_br /_gt_\n\t    textureContext.fillRect (0_co_ 0_co_ 1000_co_ 1000)_sm_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#MBENKS#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I_t_m not a neither WebGL nor BABYLON.JS developer_co_ please comment on my solution. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-08-27T23:43:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was unable to view your PG because it isn_t_t working on my iPhone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should probably be using GUI_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-08-28T06:02:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_186889_qt_ data-ipsquote-contentid_eq__qt_32587_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1503877415_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI was unable to view your PG because it isn_t_t working on my iPhone.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou should probably be using GUI_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Adam_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using GUI in this particular application prototype already_co_ but it seems not to be meant for this particular purpose. Maybe I_t_m wrong. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ I_t_ve  also tried to open playground on my windows phone from the link provided by html5devs and it also fails (goes to default PG scene). However_co_ typing of the last part of the url opens the PG without problems. Probably a glitch in the forum software.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-28T18:09:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGUI support textwrapping and text colors. Do you have any other specific needs?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-08-29T05:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tBillboards I_t_m showing need to be in a 3D scene_co_ i.e. to resize depending on their spatial position - I_t_m showing a non-planar graph. That is basically all.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-29T22:52:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can leverage this then perhaps_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borjan","Date":"2017-09-01T14:27:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187143_qt_ data-ipsquote-contentid_eq__qt_32587_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504047145_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/30/2017 at 0_dd_52 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou can leverage this then perhaps_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve read the documentation more thoroughly again and have checked this PG (I_t_ve set the button in the billboard mode_co_ see_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%23115_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#115_lt_/a_gt_ - you need to zoom in ...). In essence_co_ it would likely be the future direction_co_ thanks!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ there could be more work to do. For example_co_ I do not know how display the button text in a color other than white.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYesterday_co_ I_t_ve completed the functionality in a somewhat hard way and it is now complete - will post it on the Playground next week. Because it is a (full functioning) prototype_co_ I will stop improving it for a time being and will first check with the users am I on the right track all together. If it all goes fine_co_ I would look for a BABYLON developer to write the functionality in a more professional way. I have programmed neatly_co_ but my knowledge of javascript_co_ WebGL and BABYLON.JS is by far insufficient to make a good product.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-01T15:02:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ simpleButton.color is broken_co_ it seems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%23116_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#116_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo yellow text.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRed text is working _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#11JINV%2313_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt__co_ but this is a textBlock and not a simpleButton.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll get fresh coffee and start investigating it_co_ even though it takes me hours to discover... what others discover in minutes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPossible BJS BugZapper award coming for Borjan... and that means a WOOT PARTY!  Stay tuned.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-09-01T15:13:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_187463_qt_ data-ipsquote-contentid_eq__qt_32587_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1504278164_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 minutes ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi guys!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOh_co_ simpleButton.color is broken_co_ it seems.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%23116_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#116_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tNo yellow text.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tA workaround for the yellow text _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZI9AK7%23117_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZI9AK7#117_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-01T15:16:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thahaha... very good... sneakin_t_ in deeper and pokin_t_ from the back-side (line 43).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   (that sounds disgusting_co_ somehow). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood mad-scientist work_co_ there_co_ SF.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-01T16:44:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd it was a.........................................bug!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFixed now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-01T18:04:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWOOT PARTY for BugZapper Borjan!  Yay!  And thanks DK!  Alright!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd and and... now that we_t_re familiar with that code... wouldn_t_t it be cool if GUI.anytext.color could be an array of strings?  {_qt_red_qt__co_ _qt_green_qt__co_ _qt_blue_qt_}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(The .ts coders really LOVE type _eq_ ANY)  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd... if the textWrap is true_co_ and we create lots of ._lines of text (let_t_s pretend 20 _lines of text with a textBlock_co_ or with a wordy textWrapping simpleButton.)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...it would sequence thru that color _qt_strip_qt_ array_co_ each  _line displayed in a different color!  WOW!  (and loop-back to start-of array if/when index &gt_sm_ .color.length)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then... what if...  ahh nevermind... we won_t_t think about character-by-character rainbow text_co_ yet.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut then... if we had char-by-char fontSize and fontFamily... then we could do _lt_a href_eq__qt_http_dd_//2.bp.blogspot.com/-NVtnYB8ux7E/VCLRyu8EuhI/AAAAAAAAR3M/6dntXWl5OmY/s1600/dpp048-ransom%2Bnote.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_ransom notes_lt_/a_gt_.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s not go there.  heh.  But _line by _line fontSize and fontFamily sequences... could be fun.  Just make .fontSize and .fontFamily accept arrays_co_ too.  And then write a half ton of angry code.... to deal-with these new features.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Easy.  (ahem)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI heard a rumor... that it is difficult to get an accurate context2d.measureText()... without first setting a fontSize and fontFamily.  Could be trouble for our dreamed-of features.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]