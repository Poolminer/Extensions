[{"Owner":"dsman","Date":"2015-07-02T11:46:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So we have very simple model we are displaying in babylon using ArcRotateCamera . It is like a product preview so ArcRotateCamera is best choice for that. We want to show this in webview inside mobile apps. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So first I started checking various default mobile browsers. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Windows Phone 8.1 -IE _dd_ ArcRotateCamera is working fine with touch gesture. Rotating using swipes is perfect. Zooming in and zooming out using pinch to zoom is also working fine. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Android 5.x - Chrome _dd_  No touch gesture are working. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I then checked TouchCamera. TouchCamera doesn_t_t suit our need. And anyway it behave in weird manner in Android Chrome. (Very sensitive and few other things)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any way to get ArcRotateCamera to work with touch gestures in Android and other devices _co_ the same way it does in Windows Phone/IE ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-02T12:27:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s odd_co_ the arc rotate camera works on my android wonderfully...  Not sure if it_t_s related_co_ but have you tried adding the hand js dependency?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-07-02T13:56:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think this thread should be deleted. It was so silly. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had included hand.js file. But the order was incorrect. It was after babylon.js file.  I never paid attention to it until you pointed out about dependency. _lt_br_gt__lt_br_gt_Now it works perfectly.  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gerente","Date":"2015-07-27T16:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_87911_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_15521_qt_ data-ipsquote-username_eq__qt_dsman_qt_ data-cite_eq__qt_dsman_qt_ data-ipsquote-timestamp_eq__qt_1435845410_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_I think this thread should be deleted. It was so silly. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had included hand.js file. But the order was incorrect. It was after babylon.js file.  I never paid attention to it until you pointed out about dependency. _lt_/p_gt__lt_p_gt_Now it works perfectly.  _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You should not delete it at all_co_ I had the same problem_co_ I never wonder that Hand.js had to be included before babylon.js._lt_/p_gt__lt_p_gt_Thanks for sharing_co_ I solved my problem too._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RustySharpcloud","Date":"2016-01-14T23:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDefo do not delete.. This is an easy mistake to make... And this post helped me a lot. For PC developers (with a touch screen)_co_ does your app work for touch on chrome (it will probably work for ie/edge/ff without hand.js)? If so it will work on other touch devices designed primarily for touch like iOS/android.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]