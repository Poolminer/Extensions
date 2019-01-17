[{"Owner":"Ghostdog","Date":"2016-09-10T22:05:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to steer/control objects in my scene from buttons that are not inside the HTML canvas object that owns the babylon engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis should be\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta ) standard button from ionic framework \n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb ) other canvas objects elements\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlayered before the babylon canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow I manage events if pressing _qt_buttons_qt_ from outside and bring these events to an action trigger of Babylon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks &amp_sm_ with best regards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStefan\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(just started with Babylon and XDK)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-11T15:26:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23541-virgogmxnet/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23541_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23541-virgogmxnet/_qt_ rel_eq__qt__qt__gt_@virgo@gmx.net_lt_/a_gt__co_ welcome to the Babylon.js forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   This is quite easy_co_ and there are many ways to do it.  The canvas is a HTML element_co_ yes?  So_co_ it is a part of a webpage_co_ just like the button.  All events_co_ canvas_co_ button_co_ document_co_ window... keypresses_co_ pointerDown_co_ pointerUp... they are all browser-generated.  So_co_ all of Javascript and HTML... can _qt_see_qt_ these events (ionic_co_ babylon scene_co_ everything).  They bubble and cascade to nearly everything.  This is why there are many ways to do this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylon.js has a _qt_playground_qt__co_ and we love it.  It is a place to show things (often easier than _qt_telling_qt_ things).  First_co_ we_t_ll do basic event work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s go look at a playground demo...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#16MOW9%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#16MOW9#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is not an ActionManager thing.  We will talk about actionManager clicks/triggers a bit later.  But those are easy_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 33-46  Here I make a html button... positioned _qt_absolute_qt_ which means it uses CSS style _qt_top_qt_ and _qt_left_qt_ settings_co_ and is not _qt_flowed into_qt_ the other html.  It gives you FULL positioning power.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 48  Here I place the button into the html document... inside the body part.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLines 50-53  Here is where I add the eventListener to our new button.  Notice it _qt_looks-up_qt_ the button... using the button_t_s .id_co_ which was set in line 34.  The function part... moves the boxes sideways... no big deal.  Try clicking the button a few times.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWorks ok_co_ right?  (I hope so)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLines 55-59 is an interesting thing.  What this does... is remove the old button... every time you hit RUN in the playground.  If I did not do that_co_ there would soon be many buttons stacked atop each other.  A new button would be added each time you hit the RUN button in the playground.  We want to remove all old buttons when the scene is _lt_em_gt_disposed. _lt_/em_gt_ Wise to clean-up.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ the button is not upon the canvas_co_ or within it.  It is simply an html-based button.  Feel free to make changes_co_ hit RUN_co_ SAVE_co_ Get Zip_co_ anything.  You cannot damage anything in the playground.  Each time you SAVE a playground_co_ you are given a new URL.  You can copy/paste that URL to the forum... and talk with us about your playground... and we can answer questions about it_co_ or help you easy. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnytime you have problems with Babylon.JS... it is good to create a playground demo... that shows the problem.  You will get quick answers... when you create playgrounds that help us _qt_see_qt_ the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have all the _qt_good_qt_ links?  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_Docs_lt_/a_gt__co_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt__co_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground_qt_ rel_eq__qt_external nofollow_qt__gt_playground search_lt_/a_gt__co_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_16_co_29_co_30_co_31_qt_ rel_eq__qt__qt__gt_forum search_lt_/a_gt__co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/_qt_ rel_eq__qt_external nofollow_qt__gt_BJS source github_lt_/a_gt_?  Now you do.  Good luck.  Welcome again.  Stay in touch. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ghostdog","Date":"2016-09-11T15:58:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twow - this is wonderfull\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can manipulate the hole hole DOM direct within / from my babylon js code section. As you mentioned  .. no big deal .. but what a great one!! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-11T16:23:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood to hear.  I made a mistake in the playground. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 43... _qt_18pt verdana bold_qt_ not working so well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse this instead... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#16MOW9%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#16MOW9#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 43/44.  After repair_co_ I needed to make the button wider in line 38_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps I should have created a _qt_button_qt_ in line 33.  Maybe that would be better than _qt_span_qt_... and perhaps still can be nicely styled.  Back in the old days... html &lt_sm_button&gt_sm_ sucked... it was ugly ugly ugly.  But these days... might be better.  *shrug*  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s try button.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#16MOW9%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#16MOW9#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice I was able to remove line 47.  Also_co_ no more text highlighting with fast clicks.  This works better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also do _qt_read-outs_qt_ with html.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10P0IP%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10P0IP#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_co_ I viewed the raw html for the playground and learned that the render canvas... was a child of a div whose id_eq__qt_canvasZone_qt_.  I set THAT as my _lt_em_gt_container_lt_/em_gt_ in line 6_co_ and then in lines 205-220_co_ I appended all my _qt_crap_qt_ into the canvasZone container.  Lots of dynamic html in THAT playground _co_ eh?  Sometimes I get crazy.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-09-12T00:51:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOf course_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ nailed it. However_co_ I would seriously watch the following video on using jQuery if you want to expand upon this. It_t_s a bit dated_co_ but completely relevant. This goes beyond jQuery and shows how to take control of the DOM as well. There are other tutorials which are helpful_co_ but I found this the most comprehensive for me personally.\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/BWXggB-T1jQ?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-09-12T04:48:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23541-virgogmxnet/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23541_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23541-virgogmxnet/_qt_ rel_eq__qt__qt__gt_@virgo@gmx.net_lt_/a_gt_ -  I know this isn_t_t wholly relevant to your question_co_ but are you familiar with literals? Also_co_ have you built any projects relying on _qt_use  strict_qt__sm_ ? Only ask as I believe stongly in both methods_co_ and rarely find examples of these on the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]