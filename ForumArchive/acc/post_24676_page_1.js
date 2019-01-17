[{"Owner":"jasonnance","Date":"2016-08-24T20:37:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_ve been searching around for an answer to this and haven_t_t found it in the docs or on here_co_ so apologies if I missed something.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m writing an application with some 3D stuff going on in the background and some information displayed in a 2D screen space canvas in the foreground.  I want to be able to use both for interaction_co_ but I want the 2D screen space canvas to take priority.  I have some 3D objects that should be clickable_co_ but if they_t_re covered by a 2D canvas shape_co_ I want the 2D shape to catch all the mouse events.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a playground that will hopefully help explain what I mean_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#KMVGI_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#KMVGI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you click on just the box_co_ its opacity changes_sm_ this is fine.  If you click on just the rect_co_ its opacity changes_sm_ this is also fine.  If you click on the area where the two overlap_co_ both opacity properties change.  I_t_d like for just the rect_t_s opacity to change in that case.  I_t_d also like for the pointer cursor to not appear on the area where the two overlap.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I accomplish this?  My 2D elements are simple enough that I could probably determine their bounding boxes and make sure any pointer events aren_t_t contained in any of those boxes before handling them on my 3D objects_co_ but that sounds nasty_co_ and I feel like there must be a simpler solution I_t_m missing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-25T17:32:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23308-jasonnance/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23308_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23308-jasonnance/_qt_ rel_eq__qt__qt__gt_@jasonnance_lt_/a_gt__co_ welcome to the forum.  The _qt_click-thru-screenSpaceCanvas_qt_ has been seen and reported_co_ and according to _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt__t_s post _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/24518-drag-and-drop-imported-meshes/?do_eq_findComment&amp_sm_comment_eq_140340_qt_ rel_eq__qt__qt__gt_here_lt_/a_gt__co_ the pointer events thing is being worked-on.  Maybe Nockawa will visit and drop us a status report about clicking on/thru a screen space canvas.  He is the author of _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22552-canvas2d-is-coming-to-town-well-24-beta-at-least/_qt_ rel_eq__qt__qt__gt_Canvas2D system_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did SOME experimenting... trying to get cursor-pointer operational... but failed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1ONKPJ%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1ONKPJ#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWork happening in line 75... using _lt_a href_eq__qt_https_dd_//www.w3.org/TR/css-ui-3/#cursor_qt_ rel_eq__qt_external nofollow_qt__gt_CSS stylerule for cursor_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSlowly_co_ gently_co_ move your cursor over the _qt_Over Me_qt_ button.  The cursor switches to finger-pointer... just for a moment_co_ as it enters the green rect2d area_co_ but then quickly changes back to arrow.  If you continue mousing-over toward the center text2D within the rect2D... you_t_ll see cursor switch to finger-pointer AGAIN... but just for a moment.  Darn.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ I tried some use of scene.hoverCursor_co_ but I failed with that_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust possibly_co_ a guy could set that pointer-over action... to be an executeCodeAction... which let_t__t_s you run a function of your choice... on pointerOver of the rect2D.  In that function_co_ you might be able to set scene.hoverCursor (and un-set it onPointerOut). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it is unlikely that this will work_co_ because scene.hoverCursor might not recognize a screenSpaceCanvas_co_ rect2d_co_ or text2d... as hover-able things.  They are not mesh and not a DOM entity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ I have nothing but bad news for you_co_ so far.  I will keep thinking.  The momentary flashes of the finger-pointer cursor... when gently moving onto the OVER ME button... is SOME progress_co_ but not much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ welcome to the forum.  I wish I had better news about your issues.  I agree with all you have requested_co_ and I will keep thinking/testing when I have time.  Be well_co_ talk again soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jasonnance","Date":"2016-08-25T19:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_ thanks for thinking and testing.  It sounds like the issue is caused by using a ScreenSpaceCanvas_co_ which handles interaction separate from the world.  It sounds like I could use a WorldSpaceCanvas instead_co_ as your PG in the thread you linked does (_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1KRMMG%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1KRMMG%2311_lt_/a_gt_)_co_ and get the results I want.  I_t_ll give that a shot.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-25T19:17:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve designed something in the Observable pattern for this case where you should be able to disable the next observers_co_ I_t_ve modified your PG and it doesn_t_t work_co_ so I copy/paste you code locally and debug and come back asap.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-25T20:14:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ you found that 4-worldspace thing_co_ eh J?  What a beast_co_ huh?  It can be done with 4-screenspace_co_ too  (Nockawa reminded me later that screenspace_t_s have origin/location and size settings.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorldSpaceCanvas2D have a _t_node_t_ associated with them_co_ and I think that node (a mesh) is set .isPickable by default.  So_co_ if you mousewheel-in a bit on that PG_co_ and spin around a certain way_co_ you can actually drag_t_n_t_drop the side menus... just like you can the mesh.  Weird.   Just thought I_t_d point that out.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  If the 4 menus were made of screenSpaceCanvas2d_t_s_co_ that would not be possible...  no node/mesh associated with that type of canvas2D. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI enjoy trying demented unnatural things with the Canvas2D system_co_ but I think it makes Nockawa nervous.  heh.  Thanks for fiddling with the observables for us_co_ N.  And if you have words about the cursor/crosshairs/grab-hand stuff_co_ we_t_d be glad to listen.  (thx)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-25T20:14:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI found the issue_co_ I_t_m fixing right now\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-25T20:46:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I_t_ve found two issues that were preventing you to succeed in your task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirstable_co_ there_t_s something you should have done (and I understand it_t_s hard to notice)_co_ I_t_ve modified your PG_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#KMVGI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#KMVGI#1_lt_/a_gt_ you_t_ll see the line 30 is new_co_ it_t_s basically for you to tell me_dd_ _qt_stop processing more observers_qt__co_ which is what you want_dd_ only the observer of the canvas to be processed_co_ but not the observer of the 3D Engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s all you have to do you make your case working (well_co_ now I_t_ve fixed the bugs _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ ).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne little more info_dd_ event are first processed by the Canvas2D Engine_co_ then they_t_re processed by the 3D Engine if you don_t_t set this property to true. I believe it_t_s the right way to go because when you have on screen UI_co_ you want it to be processed first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17014_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17014-masterk/_qt_ rel_eq__qt__qt__gt_@MasterK_lt_/a_gt_ I think you should be interested by this news/thread for your work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jasonnance","Date":"2016-08-25T21:05:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s perfect_co_ thanks so much for the fixes and explanation!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MasterK","Date":"2016-08-26T01:51:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twow. That mean if i have 2 screenCanvas. i click on the top one. i can stop the bottom canvas to catch the event ? Good. And I think it_t_s according to the SC_t_s create order??\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-08-26T01:56:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_141353_qt_ data-ipsquote-contentid_eq__qt_24676_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1472176289_qt_ data-ipsquote-userid_eq__qt_17014_qt_ data-ipsquote-username_eq__qt_MasterK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ MasterK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\twow. That mean if i have 2 screenCanvas. i click on the top one. i can stop the bottom canvas to catch the event ? Good. And I think it_t_s according to the SC_t_s create order??\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\texactly_co_ and use some kind of logic to bypass your implem if you want another ScreenCanvas to actually do it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-26T05:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes and you can also nullify pointer-events in the styling of an canvas as well to stop clicks and mouse events\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]