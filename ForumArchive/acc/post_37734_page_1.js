[{"Owner":"dingoogle","Date":"2018-05-18T10:36:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI got a problem when trying to reset/restart an animationGroup with multiple animations in it. Looks the animations can_t_t reset together by animationGroup.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried several ways as below but none of them worked well.  Your kind help will be highly appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. create AnimationEvent at the end frame_co_ PB _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. add callback to onAnimationEndObservable.add() function_co_ PB _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. add callback to onAnimationEndObservable.addOnce() function_co_ PB _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SinhNQ","Date":"2018-05-18T13:24:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this is bug (not sure) but you can use tricks by set _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__isStarted _eq_ false _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFixed_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-05-18T14:28:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree that this is a bug.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe onAnimationEnd should only be triggered once (i would assume) and isStarted should be set to false when all animations ended.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would be my solution - (very similar to yours_co_ just using public methods_lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dingoogle","Date":"2018-05-18T15:10:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215460_qt_ data-ipsquote-contentid_eq__qt_37734_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526649864_qt_ data-ipsquote-userid_eq__qt_27670_qt_ data-ipsquote-username_eq__qt_SinhNQ_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ SinhNQ said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI think this is bug (not sure) but you can use tricks by set _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__isStarted _eq_ false _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tFixed_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#4_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi SinhNQ_co_ thank you for your reply. _qt__isStarted_qt_ works well in JS. But unfortunately my project is coded in strict TypeScript _co_ _qt__isStarted_qt_ is private and _qt_isStarted_qt_ is readonly. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ I can_t_t make it pass verification when compiling. Hope the _qt_bug_qt_ could be  fixed soon _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW_co_ is there any suggestion to create a _qt_timeline_qt_ like Adobe Flash CC or 3DSMax? My thought is creating a global animation with default length_co_ let_t_s say 500 frames_co_ adding key frames and expanding length dynamically. This animation should be assigned to a _qt_pseudo_qt_ mesh to provide current and total frames when animating. Can set playback head_co_ be sought_co_ paused_co_ restarted etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf there_t_s any better practice please let me know. thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dingoogle","Date":"2018-05-18T15:21:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215467_qt_ data-ipsquote-contentid_eq__qt_37734_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526653682_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t47 minutes ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI agree that this is a bug.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe onAnimationEnd should only be triggered once (i would assume) and isStarted should be set to false when all animations ended.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThis would be my solution - (very similar to yours_co_ just using public methods_lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/index.html#9DDUHI#5_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi RaananW_co_ just saw your reply_co_ thanks_co_ It should work in TypeScript. Agree that onAnimationEnd should only be triggered once. Hope the observable in babylon.js could be something like rxjs.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-05-18T15:25:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tbeing fixed _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4341_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4341_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SinhNQ","Date":"2018-05-18T15:52:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215473_qt_ data-ipsquote-contentid_eq__qt_37734_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526656242_qt_ data-ipsquote-userid_eq__qt_31417_qt_ data-ipsquote-username_eq__qt_dingoogle_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t34 minutes ago_co_ dingoogle said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBTW_co_ is there any suggestion to create a _qt_timeline_qt_ like Adobe Flash CC or 3DSMax? My thought is creating a global animation with default length_co_ let_t_s say 500 frames_co_ adding key frames and expanding length dynamically. This animation should be assigned to a _qt_pseudo_qt_ mesh to provide current and total frames when animating. Can set playback head_co_ be sought_co_ paused_co_ restarted etc.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI recommend you use _lt_a href_eq__qt_https_dd_//greensock.com/_qt_ rel_eq__qt_external nofollow_qt__gt_GreenSock API_lt_/a_gt_ - the best framework for HTML5 Animation. I been used more than 3 year for 2D and 3D projects. _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dingoogle","Date":"2018-05-19T06:59:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215482_qt_ data-ipsquote-contentid_eq__qt_37734_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526658771_qt_ data-ipsquote-userid_eq__qt_27670_qt_ data-ipsquote-username_eq__qt_SinhNQ_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ SinhNQ said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI recommend you use _lt_a href_eq__qt_https_dd_//greensock.com/_qt_ rel_eq__qt_external nofollow_qt__gt_GreenSock API_lt_/a_gt_ - the best framework for HTML5 Animation. I been used more than 3 year for 2D and 3D projects. _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ I_t_ll do some investigation.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]