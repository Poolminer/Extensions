[{"Owner":"HoloLite","Date":"2017-12-11T18:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am trying to support lower-case and upper case letters in the virtual key. One natural approach is to use shift key to alternate the 2 cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut looking at the keyboard types/api_t_s_co_ I don_t_t see how to add shift key (or any control key for that matter) to the virtual keyboard_co_ unless I am missing something.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone hits into similar thing and perhaps has the solution ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-11T19:07:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28694-hololite/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28694_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28694-hololite/_qt_ rel_eq__qt__qt__gt_@HoloLite_lt_/a_gt__lt_br /_gt_\n\tdue to the way the virtualKeyboard is made_co_ this requires a little bit of work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut is very doable _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tI made comments that should explain what is happening_co_ but if you have any questions_co_ feel free to ask them. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuick explaination_sm_ Shift is used as a Caps-lock_co_ Clicking it once will make keys upperCase_co_ clicking it again will turn it off and return the keys to lowerCase._lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#S7L7FE%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#S7L7FE#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSide-Note_sm_ if a key is upperCase by default_co_ it will also visually on the keyboard be made lowerCase by the second shift click_co_ but it will continue to be written in upperCase.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-11T19:14:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGood job..This could be a cool option to the virtualKeyboard\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-11T19:15:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ who may want to look at it\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2017-12-11T19:19:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ Nice trick and it does the job! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tThe shift can also be used to alternate numbers with alphanumerics (like !_co_ @_co_ # $ etc).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2017-12-11T20:29:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198258_qt_ data-ipsquote-contentid_eq__qt_34508_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513019222_qt_ data-ipsquote-userid_eq__qt_17943_qt_ data-ipsquote-username_eq__qt_aWeirdo_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ aWeirdo said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_float_dd_none_sm_background-color_dd_transparent_sm_color_dd_rgb(53_co_60_co_65)_sm_font-family_dd_Roboto_co_ _t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_400_sm_letter-spacing_dd_normal_sm_text-align_dd_left_sm_text-decoration_dd_none_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm__qt__gt_On second thought_co_ we actually can use escaped control char like _qt_\\u21D1_qt_ as the thick up arrow sign instead of _qt_Shift_qt_. This will make parsing for the shift char easier_lt_/span_gt_.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-11T21:10:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28694-hololite/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28694_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28694-hololite/_qt_ rel_eq__qt__qt__gt_@HoloLite_lt_/a_gt__lt_br /_gt_\n\tHere_t_s one with a closed unicode arrow_co_ added color change aswell.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#S7L7FE%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#S7L7FE#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2017-12-11T21:34:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNice!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-11T22:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ fancy making it official?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-12T01:07:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll make a PR tomorrow if i have a bit of spare time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HoloLite","Date":"2017-12-12T01:54:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs an exercise_co_ I implemented the custom keyboard as a TS class.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt uses 2 keyboards internally_co_ with only 1 being active at a time. This makes it easier to have different key layouts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16213_qt__gt_CustomKeyboard.ts_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-12T08:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUpdated PG_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S7L7FE%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S7L7FE#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPR_sm_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3368_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/3368_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAdded a _qt_shiftState_qt_ instead of an boolean.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAllowing a more mobile-like virtual keyboard_co__lt_br /_gt_\n\tOne click _eq_ Only next letter is upperCase. // Light blue key._lt_br /_gt_\n\tTwo clicks _eq_ Caps-lock on. // Light blue key &amp_sm_ border._lt_br /_gt_\n\tThree clicks _eq_ Caps-lock off. // default color &amp_sm_ no border.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-12T18:13:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMerged!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]