[{"Owner":"BlackMojito","Date":"2018-05-10T07:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Folks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am reading the documentation _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/render_scene_on_a_png_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/render_scene_on_a_png_lt_/a_gt_. But in my case_co_ if I just want to take a simple screenshot_co_ is there anyway to do it directly using html5 APIs?  I know that we have drawImage function but it seems to be used only for 2d canvas. How can I do it then?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-10T08:21:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry but I do not understand your issue since you can use `BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ 400)_sm_` as stated on the docs page above. You could trigger it with a key press at any stage.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso Babylon.js renders its 3D model onto a 2D canvas and CreateScreenshot uses drawImage to capture the rendering. What is it you are trying to do where CreateScreenshot will not work for you?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-05-10T12:12:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214403_qt_ data-ipsquote-contentid_eq__qt_37542_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525940514_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tSorry but I do not understand your issue since you can use `BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ 400)_sm_` as stated on the docs page above. You could trigger it with a key press at any stage.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAlso Babylon.js renders its 3D model onto a 2D canvas and CreateScreenshot uses drawImage to capture the rendering. What is it you are trying to do where CreateScreenshot will not work for you?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI just read the source code and yes CreateScreenshot calls internally drawImage...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]