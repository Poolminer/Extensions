[{"Owner":"TMTH","Date":"2017-01-31T11:32:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to understand how to work with group caching. Here is PG _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1VRAA%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1VRAA#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I can_t_t figure out the following - why setting canvas _lt_strong_gt_cachingStrategy _lt_/strong_gt_to _lt_strong_gt_CACHESTRATEGY_ALLGROUPS_lt_/strong_gt_ leads to rendering of its_t_ direct children only?  So_co_ every cached group have to be the direct child of canvas_co_ or I_t_m missing something?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-31T16:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-01-31T21:08:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ let_t_s say that for now only the DONTCACHE_co_ TOPLEVELGROUP and CANVAS are working_co_ but it could be nice if I would spent some time (finally) to finish the ALLGROUP mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ you have a new _qt_doc entry point_qt_ here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/canvas2D_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/canvas2D_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the home page of the doc is still here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/canvas2d_home_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/canvas2d_home_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you_t_re pretty new (in the forum at least)_co_ may I ask you if you managed to find these docs? I would just like to know if I can improve things on this matter.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep you in touch for the ALLGROUP mode_co_ but right now the CANVAS level or TOPGROUP level are fine for most usage_co_ but that_t_s no excuse for the latest mode that_t_s not working. I have your PG I_t_ll reproduce it locally and debug.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TMTH","Date":"2017-02-01T02:20:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161648_qt_ data-ipsquote-contentid_eq__qt_28109_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485896922_qt_ data-ipsquote-userid_eq__qt_18979_qt_ data-ipsquote-username_eq__qt_Nockawa_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Nockawa said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI would just like to know if I can improve things on this matter\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ I_t_ve read all the docs_co_ and explored large part of canvas2d source code. I could suggest one improvement of documentation - strict marking of components that work now_co_  and component that are under development. So_co_ that one reading_co_ for example_co_ documentation on Group2D could see_co_ that not all cache modes are supported right now\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-01T16:35:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ to be honest_co_ this was the only major feature listed that didn_t_t fully work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try today to see what_t_s wrong using your PG\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TMTH","Date":"2017-02-02T11:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd one more bug (or feature that I don_t_t understand) for _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#NRZYA_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#NRZYA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using _lt_strong_gt_designSize _lt_/strong_gt_on canvas. When I change _lt_strong_gt_cachingStrategy_lt_/strong_gt_ on canvas_co_ I see change in absolute position on top level primitive. Is it intended behaviour?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-02T12:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ thanks to you I have the feeling that soon this part of Canvas2D will be bullet proof! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIndeed_co_ it_t_s a bug_co_ I think I_t_m going to use _lt_a href_eq__qt_https_dd_//trello.com/b/eKMKhCFc/canvas2d_qt_ rel_eq__qt_external nofollow_qt__gt_Trello_lt_/a_gt_ again! Because you find them quicker that I can fix them. Concerning the ALLGROUP I haven_t_t given up_co_ it_t_s just I_t_ll be able to properly investigate it from this week end I think.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-07T13:23:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25416_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/_qt_ rel_eq__qt__qt__gt_@TMTH_lt_/a_gt_ I_t_m on it\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TMTH","Date":"2017-02-09T06:00:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161814_qt_ data-ipsquote-contentid_eq__qt_28109_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1486034078_qt_ data-ipsquote-userid_eq__qt_25416_qt_ data-ipsquote-username_eq__qt_TMTH_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 02.02.2017 at 6_dd_14 PM_co_ TMTH said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m using _lt_strong_gt_designSize _lt_/strong_gt_on canvas. When I change _lt_strong_gt_cachingStrategy_lt_/strong_gt_ on canvas_co_ I see change in absolute position on top level primitive\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat problem is more urgent then the first one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause you can emulate CACHESTRATEGY_ALLGROUPS using CACHESTRATEGY_TOPLEVELGROUPS_co_ just making _lt_span_gt_fake _lt_span_gt__lt_span_gt__qt_child_qt_ for group and manually setting it_t_s position _lt_/span_gt__lt_/span_gt__lt_/span_gt_in response to _qt_parent_qt_ actualPosition property changed. Thus you will have cached group_co_ that behaves just like normal group. But when your turn on CACHESTRATEGY_TOPLEVELGROUPS using designSize_co_ all your layout will be visually broken. And I can see no workaround for that problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-09T12:01:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes_co_ when I said I_t_m on it_co_ I meant the designSize issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ in the meantime I got a more important bug to fix so it_t_s currently paused_co_ but I_t_ll resume as soon as the other bug is fixed. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-03-24T22:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI forgot to mention that this should be fixed right now.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]