[{"Owner":"BMWPilote","Date":"2018-08-10T07:58:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello folks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I launch my app_co_ I always get a lot of such errors. Although later the app can work correctly_co_ I would like to solve the problem. I guess the reason might be starting the render loop before the default frame buffer is ready. My question is how can I know that the frame buffer is ready so that I can start the render loop at the right timing? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/958257288__20180810155449.jpg.2d29877c8f8ee04ae1d0e12da123c55a.jpg_qt_ data-fileid_eq__qt_19546_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19546_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/332026066__20180810155449.thumb.jpg.9de9b3a9769cb78d07952e2d241a2dd4.jpg_qt_ alt_eq__qt_332026066__20180810155449.thumb.jpg.9de9b3a9769cb78d07952e2d241a2dd4.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-10T12:05:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks like you are using render target texture who are not in a complete state (missing depth or color buffer you are trying to use)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA repro in the playground would be the best way to troubleshout.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe default FrameBuffer is always ok and ready on webgl and not managed by babylon.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-15T09:30:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224709_qt_ data-ipsquote-contentid_eq__qt_39367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533902745_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/10/2018 at 8_dd_05 PM_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIt looks like you are using render target texture who are not in a complete state (missing depth or color buffer you are trying to use)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tA repro in the playground would be the best way to troubleshout.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe default FrameBuffer is always ok and ready on webgl and not managed by babylon.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Sebavan_co_ thank you for the answer. I would like to make a playground but the messages occur only when my viewer is integrated into a React application. Could it be the fact that the render loop is started too early?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-15T12:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am not sure_co_ as usually we have check for isReady preventing this to happen in the engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you relying on special custom effects you would render to early ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-16T05:27:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_225093_qt_ data-ipsquote-contentid_eq__qt_39367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1534325401_qt_ data-ipsquote-userid_eq__qt_31898_qt_ data-ipsquote-username_eq__qt_BMWPilote_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 hours ago_co_ BMWPilote said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCould it be the fact that the render loop is started too early?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThere is a doc about integrating with React_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/babylonjs_and_reactjs_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/babylonjs_and_reactjs_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave you attached the the canvas from a ref (&lt_sm_canvas _lt_strong_gt_ref_lt_/strong_gt__eq_{this.onCanvas3d}&gt_sm_) using the lifecycle method component_lt_strong_gt_Did_lt_/strong_gt_Mount?  At the point for sure it is not too early in terms of the canvas being ready for WebGL to attach.  I have not had any issues creating the engine and starting the engine.runRenderLoop(...) immediately at that point.  I_t_m assuming you_t_re not React Native - I haven_t_t tried that!  I realise you can_t_t create a PG_co_ but please post some code especially how you are using lifecycle hooks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BMWPilote","Date":"2018-08-16T07:06:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_225107_qt_ data-ipsquote-contentid_eq__qt_39367_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1534335973_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t18 hours ago_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI am not sure_co_ as usually we have check for isReady preventing this to happen in the engine.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAre you relying on special custom effects you would render to early ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo. I just have PBR materials + shadow mapping + A post pipeline. Very simple stuff.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-16T07:52:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo either the shadow_co_ either the pipeline is the culprit. You can try to disable them one at a time to isolate the issue ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]