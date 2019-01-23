[{"Owner":"Hersir","Date":"2017-05-31T09:28:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have object thats need to rotate around y forever_co_ but sometimes I need to play that animation slower (from current point). I created _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WCY578%2314_qt_ rel_eq__qt_external nofollow_qt__gt_Playground_lt_/a_gt__co_ to change speed ratio by click on canvas. Is that correct approach or is there better solutions for that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd after I regenerate animation on click_co_ it jumps on frame where full circle ends (360 to 0). Looks like it moves around full circle quickly and than continue as usual. That happens if start angle of mesh is not 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-05-31T10:31:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tHi_co__lt_br /_gt_\n\twhen working with such a simple thing_co__lt_br /_gt_\n\tit would be 100 times easier to just use registerBeforeRender and box.rotation.y _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WCY578%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WCY578#16_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-05-31T10:38:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ Hi.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes I tried that but I need frame rate independent animation as this rotation animation needs to be in sync with other more complex animations (can I somehow sync _lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_registerBeforeRender with frame rate? _lt_/span_gt_ ). _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ So idea is to slow down both animations so that their positions matches in both slow down and normal mode. Just they are played slower or in normal rate.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-05-31T10:39:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt_ your way is what I would have done_co_ it gives you control over the animation and you can extend it as needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ said_co_ the alternative would be to work on the registerBeforeRender but I personally prefer to have stuff placed into their own section (e.g. animation stuff within the animation callback). But that works as well _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-05-31T10:54:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_Hi_co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_I_t_m not sure i understand_co_ Everything is dependant on the frame rate_co_ both registerBeforeRender and animations update once per frame._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_anyway_co_ as _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26123_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26123-nesh108/_qt_ rel_eq__qt__qt__gt_@Nesh108_lt_/a_gt_ mentioned_co_ animations does give some nice built-in control _dd_-) _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_the _qt_jump_qt_ is no doubt fixable if that is the main issue_co_ i_t_ve got to run now_co_ but will check up on it later if nobody else beats me to it._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-05-31T11:38:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf animation should finish in 2 sec_co_ than it will finish in 2 sec on both 60fps or 10fps. RegisterBeforeRender will be triggered differently on different fps so manual delta time should be added. I am just thinking about performance will creating and recreating the animation kill performance. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow I will try to fix the jump_co_ as it works ok if start angle is 0_co_ but jumps if start angle is different.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nesh108","Date":"2017-05-31T12:33:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt_It_t_s still about the frame ratio you have set when starting the animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause registerBeforeRender will work_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_strong_gt__lt_em_gt__qt__lt_/em_gt__lt_/strong_gt__lt_/span_gt__lt_strong_gt__lt_em_gt_at each frame of the animation (each tick)_qt__lt_/em_gt__lt_/strong_gt__co_ which is different from the overall framerate. More info_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/animations#complex-animation_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/animations#complex-animation_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-05-31T14:25:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_176357_qt_ data-ipsquote-contentid_eq__qt_30758_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496228047_qt_ data-ipsquote-userid_eq__qt_17943_qt_ data-ipsquote-username_eq__qt_aWeirdo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ aWeirdo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m not sure i understand_co_ Everything is dependant on the frame rate_co_ both registerBeforeRender and animations update once per frame.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere is a difference between animation frame rate and rendering frame rate because they are talking about different frames.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe rendering frame rate is the speed that a sequence of scenes is drawn. Consider an animation as a series of images (albeit in this case the images are drawn by the BJS engine). The animation frame rate is the speed that a sequences of images are drawn.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuppose we set an animation speed to be 20 animation frames per second and the rendering speed is 60 rendered frames per second.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the first 1/20 of a second the first animation frame is displayed but the scene has been rendered 3 times even though the scene image does not change ( expect by camera movement)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo taking your example and thinking about using registerBeforeRender_co_ you want your object to rotate at R radians/second and the rendering speed at any time is F frames/second.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDuring the rendering loop you can get the rendering speed using F _eq_ engine.getFps()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the time taken for one rendering loop is 1/F seconds and thus the angle rotated by the object during that time will be R/F radians\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way if the animation should finish in 2 sec_co_ than it will finish in 2 sec on both 60fps or 10fps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WCY578%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WCY578#17_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-06-01T05:48:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanx _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]