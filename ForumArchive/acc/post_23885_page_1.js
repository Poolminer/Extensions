[{"Owner":"dbawel","Date":"2016-07-17T23:43:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI made the move to babylon-master version 2.4 last night_co_ and found that all of my videoTextures would not play back correctly. And by correctly_co_ this means that there was no video images playing_co_ only what appeared to be odd decompression artifacts. I don_t_t have time to build a playground scene today_co_ but if this isn_t_t obvious to anyone else_co_ I can certainly build a PG scene tomorrow to demonstrate. Although I_t_m certain you_t_ll see the problem_co_ as I tested with 3 different video formats_co_ resolutions_co_ and scaling values.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-18T16:08:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey David_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust tried with my old testing scene_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#140LZL%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#140LZL#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems to work for me _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-18T23:30:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI can confirm something has changed i run into Videotexture problem more often._lt_br /_gt_\n\tI was already spending hours to get everything right once_co_ and now with my older Projects_co_ i kind of face myself again with troubles and error handling._lt_br /_gt__lt_br /_gt_\n\there is a resource for video_co_ no one (zero) is running._lt_br /_gt__lt_br /_gt_\n\tI have to copy+paste code from stackoverflow and hack the gl Engine ?_lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//archive.org/search.php?query_eq_Le%20papillon%20fantastique_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//archive.org/search.php?query_eq_Le papillon fantastique_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tIm an Artist pictures are very imported_lt_br /_gt__lt_br /_gt_\n\tThank you for all you work! _lt_br /_gt__lt_br /_gt_\n\t&lt_sm_3 Babylonjs\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-07-18T23:42:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll send you 2 links in a message as I can_t_t post publicly right now. One will use v2.2_co_ and the other v2.4 - and you_t_ll see the difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ - I had similar issues with both 2.3 and 2.4 and spent many days troubleshooting. But switching back to v2.2 solved all problems I was having with both images and videoTextures. So perhaps you might want to do the same until we figure out what the problems are.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-19T18:43:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll I really need is a reproducible case I can debug..So something in the playground or at least a video with an issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce I get that I can fix the problem\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-19T20:38:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIts working again_co_ yeasterday_co_ was a bad day_co_ i_t_m sorry._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]