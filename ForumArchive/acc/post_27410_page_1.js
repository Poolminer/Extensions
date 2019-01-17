[{"Owner":"saeed","Date":"2017-01-02T21:38:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any sample for dragging and collision detection implemented by actions (new features in v2.4) .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy scenario _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have 3 ball(mesh) and 6 placeholder(mesh) on a board(mesh) . i want to drag balls via touch or multi touch to any placeholder on board .\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti read _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/16994-understanding-drag-and-drop-playground-sample/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/16994-understanding-drag-and-drop-playground-sample/_lt_/a_gt_ and implement _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#4_lt_/a_gt_ _co_ its good  but i want to use actions and triggers (ActionManager) for pick up/down/move and collision detection.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-03T13:32:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Saeed_co_ welcome to the BabylonJS forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI began modding a playground...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2328_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#28_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s good actionManager picks/clicks on all three spheres (see console)_co_ _lt_strong_gt_but_lt_/strong_gt_... according to _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Actions#triggers_qt_ rel_eq__qt_external nofollow_qt__gt_the ActionManager docs_lt_/a_gt__co_ there is no onPointerMove trigger.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSoooo... hmm.  I_t_m not sure if pure ActionManager dragging... can be done_co_ yet.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps SOMETHING could be done with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L333_qt_ rel_eq__qt_external nofollow_qt__gt_scene.onPointerObservable_lt_/a_gt__co_ but that_t_s not ActionManager-based. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe we can add an onPointerMove trigger to the actionManager class.  That_t_s a big maybe.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Interesting challenge_co_ though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll keep thinking and testing.  Others may comment soon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-05T00:26:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ Saeed_co_ you owe me a beer.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#32_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWatch console_co_ drag-intersection reports happening there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using a pointer observer (line 129) for the needed pointer move listener (not actionManager_co_ but not DOM events_co_ either).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll other DOM events are gone.  This is now an ActionManager-intensive playground.  Just what you asked-for. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom your friends... at BJS Forums/Knowledge-base.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI wish _qt_parameter_qt_ in those intersect triggers... were allowed to be _qt_any_qt_ or _qt_null_qt_ (trigger on enter/exit intersect with ANY other mesh).  That would save us 24 action registrations.  Maybe I will code-up a mod.  (Or beg a mod from a _qt_big dog_qt_ core guy)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDragged mesh sticks to pointer_co_ sometimes (when doing pickUP when drag pointer-tracking is far-inaccurate).  Speak of which_co_ pointer arrow doesn_t_t PERFECTLY-track dragged mesh.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll let you and/or others work-on those things.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2017-01-05T17:07:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat looks fun_co_ nice playground Wingy! You could shorten the annoying trigger building a bit with some good old for-loops_dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2333_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#33_lt_/a_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-05T17:28:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh yeah_co_ I forgot about those FOR-loop things.  heh.  Thanks Iceman!  Good to see you again_co_ too.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"saeed","Date":"2017-01-07T13:37:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_157363_qt_ data-ipsquote-contentid_eq__qt_27410_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1483450361_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/3/2017 at 7_dd_32 AM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi Saeed_co_ welcome to the BabylonJS forum.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI began modding a playground...  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2328_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#28_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThere_t_s good actionManager picks/clicks on all three spheres (see console)_co_ _lt_strong_gt_but_lt_/strong_gt_... according to _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_Actions#triggers_qt_ rel_eq__qt_external nofollow_qt__gt_the ActionManager docs_lt_/a_gt__co_ there is no onPointerMove trigger.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tSoooo... hmm.  I_t_m not sure if pure ActionManager dragging... can be done_co_ yet.  \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPerhaps SOMETHING could be done with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L333_qt_ rel_eq__qt_external nofollow_qt__gt_scene.onPointerObservable_lt_/a_gt__co_ but that_t_s not ActionManager-based. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tMaybe we can add an onPointerMove trigger to the actionManager class.  That_t_s a big maybe.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Interesting challenge_co_ though.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_ll keep thinking and testing.  Others may comment soon.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tMany thanks . yes  i_t_m using this approach now .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"saeed","Date":"2017-01-07T13:42:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_157638_qt_ data-ipsquote-contentid_eq__qt_27410_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1483576016_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/4/2017 at 6_dd_26 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOkay_co_ Saeed_co_ you owe me a beer.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#279FW9%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#279FW9#32_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWatch console_co_ drag-intersection reports happening there.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI_t_m using a pointer observer (line 129) for the needed pointer move listener (not actionManager_co_ but not DOM events_co_ either).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAll other DOM events are gone.  This is now an ActionManager-intensive playground.  Just what you asked-for. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tFrom your friends... at BJS Forums/Knowledge-base.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI wish _qt_parameter_qt_ in those intersect triggers... were allowed to be _qt_any_qt_ or _qt_null_qt_ (trigger on enter/exit intersect with ANY other mesh).  That would save us 24 action registrations.  Maybe I will code-up a mod.  (Or beg a mod from a _qt_big dog_qt_ core guy)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDragged mesh sticks to pointer_co_ sometimes (when doing pickUP when drag pointer-tracking is far-inaccurate).  Speak of which_co_ pointer arrow doesn_t_t PERFECTLY-track dragged mesh.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll let you and/or others work-on those things.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks for the best help in there . just a perfect solution .\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]