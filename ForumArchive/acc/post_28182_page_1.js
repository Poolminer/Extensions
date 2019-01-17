[{"Owner":"TMTH","Date":"2017-02-03T06:03:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere are two questions about sprite2d behaviour_co_ again I don_t_t know whether it_t_s bug or intended properties (fun club of  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ keeps working)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. _lt_strong_gt_Origin _lt_/strong_gt_property of primitive. (That can be a bug)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom documentation_dd__lt_br /_gt_\n\t        Origin_dd_ define the origin of the primitive_co_ default being 0.5_co_0.5_co__lt_br /_gt_\n\t        which is the center of the primitive_co_ 0.0_co_0.0 would be the bottom/left corner of the primitive._lt_br /_gt_\n\t        The origin play a role in the rotation/scaling of the primitive _lt_strong_gt_but not in its positioning_lt_/strong_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t       Here is PG with exploration of that  _qt_not in its positioning_qt_ thing in the context of Sprite2D_dd_  _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1RJPAB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1RJPAB_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs we can see_co_ the right origin formula has to be written as _qt_...but not in its positioning_co_ if the primitive is not Sprite2d. In later case_co_ you wouldn_t_t guess the algorithm that derives actual sprite position from it_t_s position and origin properties.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Size and width + height (That is a question of usability).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimple - you can set size property_co_ but you can_t_t set height and width properties on sprite2d.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI belive that _lt_strong_gt_is _lt_/strong_gt_the intended behaviour_co_ because there are no height and width in sprite2d constructor settings_co_ nor in renderablePrim2d or prim2dBase.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. using all shape2d-based primitives and group2d you can set size _lt_strong_gt_or _lt_/strong_gt_height/width_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. on all primitives (including sprited2d) you can set  position _lt_strong_gt_or _lt_/strong_gt_x/y\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso_co_ that is one of those nasty little things that you have to just remember.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-03T17:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPing _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-06T17:20:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25416_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/_qt_ rel_eq__qt__qt__gt_@TMTH_lt_/a_gt_ ok_co_ so_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) You  have to know that Origin gave me nightmares (still does...sometimes)_co_ I really had hard time to code it_co_ to understand what would be the best behavior_co_ I_t_ve tried many different behaviors_co_ anyway_dd_ it_t_s hard... I_t_ve created a _lt_a href_eq__qt_https_dd_//trello.com/c/gn8vwD0l_qt_ rel_eq__qt_external nofollow_qt__gt_Trello Card_lt_/a_gt_ for this and I_t_ll work on replicating your issue and then trying to fix it. I don_t_t know when I_t_ll work on it_co_ if you subscribe to the trello card you_t_ll be able to be notified when the card is moved from TODO to In Progress.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Well_co_ let_t_s say that for me width/height could be in the constructor because it_t_s just another way to express the dimension of the primitive. But is it a useful thing to expose a width and height properties_co_ well_co_ I_t_m not sure_co_ I thought that the size of a sprite would be pretty close to immutable. If you give me a good use case where it_t_s helpful to have them_co_ then why not. But you will see in this (gorgeous) _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/canvas2d_classdiagram_qt_ rel_eq__qt_external nofollow_qt__gt_class diagram_lt_/a_gt_ that Sprite2D is not a Shape2D_co_ but I do get your point about making things more uniform_co_ it_t_s easier for the JS user indeed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-22T13:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25416_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/_qt_ rel_eq__qt__qt__gt_@TMTH_lt_/a_gt_ I_t_ve investigate the 1. and result is you_t_re displaying a 64x64 sprite with a 100x100 size_co_ which result of internally applying a scale of 1_co_5625 which is messing up the positioning where the origin is involved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt doesn_t_t mean it_t_s an _qt_expected behavior_qt__co_ I still consider you_t_re right_co_ it_t_s a bug_co_ the scale is hidden to the user_co_ he_t_s not aware of it_co_ so it shouldn_t_t affect the origin. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow that being said_co_ I have to think about a way to solve this_co_ on the top of my mind it appears to me that using the _qt_user scale_qt_ may not be the best thing to do_co_ it was easy for me_co_ but it_t_s misleading on other area of the lib...._lt_br /_gt_\n\tMy subconscious is telling me that it won_t_t be solved quickly and pretty... I_t_ll keep you in touch.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-22T15:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25416_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25416-tmth/_qt_ rel_eq__qt__qt__gt_@TMTH_lt_/a_gt_ the _lt_a href_eq__qt_https_dd_//trello.com/c/gn8vwD0l_qt_ rel_eq__qt_external nofollow_qt__gt_origin issue_lt_/a_gt_ is solved_co_ I_t_ve update the preview build. when the PG will be updated you_t_ll see the expected result_co_ you can also rotate the sprite with 0.5_co_ 0.5 origin to see the expected center of rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for reporting the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll find some time to implement the width/height properties_co_ these are wrappers_co_ it_t_s not that hard to do_co_ well_co_ I_t_m going to do it now_co_ it will be done then.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-22T15:12:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161926_qt_ data-ipsquote-contentid_eq__qt_28182_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1486101804_qt_ data-ipsquote-userid_eq__qt_25416_qt_ data-ipsquote-username_eq__qt_TMTH_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2/3/2017 at 7_dd_03 AM_co_ TMTH said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t2. Size and width + height (That is a question of usability).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSimple - you can set size property_co_ but you can_t_t set height and width properties on sprite2d.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI belive that _lt_strong_gt_is _lt_/strong_gt_the intended behaviour_co_ because there are no height and width in sprite2d constructor settings_co_ nor in renderablePrim2d or prim2dBase.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tBut_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t1. using all shape2d-based primitives and group2d you can set size _lt_strong_gt_or _lt_/strong_gt_height/width_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t2. on all primitives (including sprited2d) you can set  position _lt_strong_gt_or _lt_/strong_gt_x/y\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tso_co_ that is one of those nasty little things that you have to just remember.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ I_t_ve just checked and I don_t_t understand because you can set width or height to a Sprite2D instance (not during its construction_co_ but after). I_t_ve just checked and it works. Do you speak about width/height or spriteWidth and spriteHeight ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TMTH","Date":"2017-02-23T02:12:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt__qt_Origin _lt_/strong_gt_property of primitive_qt_ is solved.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout width and height. You are right_co_ you can set it on sprite instance. As I said_co_ that is not a bug_co_ that is a question of usability.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2017-02-23T08:19:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was wondering if you were talking about spriteWidth and spriteHeight properties that could have been added...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo be honest at first there were only a size property_co_ I_t_ve added width and height after because if you do myPrim.size.width +_eq_ 10 it wouldn_t_t trigger a change...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]