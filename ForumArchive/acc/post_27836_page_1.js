[{"Owner":"juanmajr93","Date":"2017-01-19T22:40:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have added a new element to my proyect. However I don_t_t know how can I fix the plane on world when I resize window. If you test it in screen of (1920*1080) resolution_co_ the scene is well. However if you change the window_t_s size_co_ the plane will disappear. I would like to set an unique position over right menu and avoid that plane could move to other place. Moreover_co_ I want to remove specular or diffuse light in this plane so I set the property ( mon1.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)) but it doesnt work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo make this implementation_co_ I have used the follow example_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLink to my scene_dd_ _lt_a href_eq__qt_http_dd_//217.217.131.1_dd_8081/subsuelo/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//217.217.131.1_dd_8081/subsuelo/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks you very much.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-19T23:13:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thaha.  Yuh_co_ keeping a plane (mon1) that is parented to camera... docked against a screen edge... no matter the viewport size... is a serious challenge (somewhat difficult)_co_ I suspect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll need to think about that issue for a while.  That_t_s a brain challenger.  I suppose we could use an extra viewport along that right side.  With the added along-right-screen-edge viewport_co_ the right side _qt_menu_qt_ would be a PERCENTAGE-of-total-screen-width... wide.   For example_co_ right viewport could be 20% wide... but... I don_t_t think it could _qt_mix-in_qt_ with any HTML sidebar you have over there... UNLESS... that HTML sidebar was absolutely positioned.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other words_co_ you MIGHT have a viewport along the right side of the screen... that is 20% wide... but it will likely be 100% tall (because of the way viewports are defined).  SO... let_t_s say you wanted mon1 at the top of that area.  With viewport camera and RTT positioning_co_ you could put it there_co_ at the top of the new viewport. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then if you want HTML stuff UNDER that (including things like datGUI panel)... then that html would be absolutely positioned ATOP part of the new viewport (perhaps below mon1).  The HTML part of the right side menu (if there IS HTML on that menu) would sit atop part of the canvas of the new viewport.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think you can add a viewport like this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t********************************_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             ***********_lt_br /_gt_\n\t*                                          *_lt_br /_gt_\n\t*                                          *_lt_br /_gt_\n\t*                                          *_lt_br /_gt_\n\t********************************_lt_br /_gt_\n\tSo_co_ instead... and because of the way viewports are defined/placed_co_ you might do this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t********************************_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t********************************\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then absolutely-positioned HTML area covers bottom of new viewport_co_ for example...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t********************************_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             *  mon1 *_lt_br /_gt_\n\t*                             ***********_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t*                             * HTML *_lt_br /_gt_\n\t*                             *            *_lt_br /_gt_\n\t********************************\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHTML area covers bottom canvas area of added viewport.  *shrug*  Might work okay. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF menu is NOT HTML_co_ but instead Canvas2D primitives_co_ then no problems at all.  Lower section of new viewport can be filled with Canvas2D buttons_co_ labels_co_ dials_co_ knobs_co_ everything_co_ and no absolute positioning of HTML needed at all.  There would be no HTML.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  In fact_co_ even mon1 might not be a plane anymore.  It might be a Canvas2d primitive such as Shape2D or Sprite2d.  You might be the first person EVER... to use an RTT (renderTargetTexture) on a Canvas2D primitive.  WOW!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t ----------------------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ about the specularColor on mon1.  It is likely NOT mon1.material.specularColor causing the unwanted specular shine.  It is likely the mesh.material.specularColor of the scene item that the camera is SHOWING a picture-of.  Check out _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMon1 is SHOWING a huge amount of secular shine coming from the grass plane.  But it is NOT caused by mon1 plane .material_co_ or by camera1 (well_co_ camera1 viewing angle IS a factor).  But mostly_co_ it is caused by materialPlane.specularColor and light.specular (both are not user-set_co_ so are currently set to default values).  With me?  Probably not caused by mon1.material.  It is likely caused by the material on the mesh that is doing the specular shine.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWeird_co_ huh?  *nod*  Easy to get confused.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow you have a ton of new things to think about_co_ and so do I.  Perhaps others will comment.  Be well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ you want to see a multiple viewports demo?  Okay.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#13TVWJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#13TVWJ#2_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelieve it or not_co_ there are FIVE viewports_co_ there.  Even the thin blue lines are in thin viewports.  Lines 26-49 carefully divide-up the canvas into sections... all measured from lower left corner (0_co_0) to upper right corner (1_co_1).  Notice that the upper viewports each use 50% of screen width_co_ no matter how wide the screen.  Percentages.  Viewports are kind of strange_co_ but very useful in some situations.    \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"juanmajr93","Date":"2017-01-20T08:43:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ at first of all thanks by your interesting answer. The problems relative to specularColor of material and specular light are resolved. The other problem relative to the plane _qt_mon1_qt_ that I am using_co_ I consider using a Canvas2d primitive is not the solution because in this case I could only apply a texture so I couldnt see the movement of camera arround the sphere. There isn_t_t any problem to set HTML menu under plane or viewport where sphere appears. If I decide to use viewport maybe I could manage that I want. In this case I only need 2 viewport distributed by the follow way_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t********************************_lt_br /_gt_\n\t*                             *                  *_lt_br /_gt_\n\t*                             *  Viewport2 *_lt_br /_gt_\n\t*        Viewport1     *****************_lt_br /_gt_\n\t*                             *                  *_lt_br /_gt_\n\t*                             *     HTML    *_lt_br /_gt_\n\t*                             *                  *_lt_br /_gt_\n\t********************************\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you agree with this example? Moreover_co_ the camera of Viewport2 must be attached to canvas because I don_t_t want to interact there. I am waitting to your answer very interested!_lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-01-20T13:35:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi J! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ that is perfect.  But viewport2 will go behind html... because... you know... we can_t_t make a viewport in one corner only. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ HTML section could be covering a viewport 3.  It doesn_t_t really matter.  Having it cover the bottom part of viewport 2... would be less work. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you understand this.  (it_t_s because of how viewports are positioned)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother problem might be... keeping absolute-positioned HTML... _qt_docked_qt_ to the right screen-edge.  Resizing screen can cause problems for absolute positioned HTML.  It is important to set sidebar.style.width_co_ .height_co_ .top and .left... with _lt_u_gt_percentages_lt_/u_gt__co_ and not _qt_pt_qt_ or _qt_px_qt_ values.  Margin settings are ignored for absolute-positioned HTML_co_ I think.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for info about RTT on Canvas2D prim.  You tried it / thought-about it_co_ huh?  Cool! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLikely_co_ it would need to use a special Sprite2D or Shape2D with constant update from RTT.  Probably not yet invented.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWouldn_t_t it be great... if we could _qt_feed_qt_ an html &lt_sm_img&gt_sm_ element... with a renderTargetTexture?  Then_co_ the whole right sidebar would be HTML stuff.  No viewports or canvas on the right.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps mon1 could be a HTML &lt_sm_canvas&gt_sm_ element  (with context-2d_co_ not context-3d).  hmm.  That would also allow us to have an ALL-HTML right sidebar.  Perhaps_co_ doing that is a security issue.  Not sure.  I think I might have tried that before_co_ and failed.  But I fail often... and sometimes unnecessarily.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk fellow forum helpers...  here is _qt_The Juan &amp_sm_ Wingnut Challenge of the Weekend_qt_!  Use a camera view or renderTargetTexture... to fill an EXTRA _lt_strong_gt__lt_u_gt_context2d_lt_/u_gt__lt_/strong_gt_ HTML canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially... we need another HTML canvas (or &lt_sm_img&gt_sm_ element)... below the renderCanvas area (for our tests).  That &lt_sm_canvas&gt_sm_ or &lt_sm_img&gt_sm_ must be constantly updated from a _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/Textures/babylon.renderTargetTexture.ts_qt_ rel_eq__qt_external nofollow_qt__gt_renderTargetTexture_lt_/a_gt_.  CAN IT BE DONE?  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  I dunno. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a starter playground with 4 HTML &lt_sm_canvas&gt_sm_ _qt_monitors_qt_ under the renderCanvas.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1WROZH%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1WROZH#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst person to get a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/RenderTargetTexture_qt_ rel_eq__qt_external nofollow_qt__gt_RenderTargetTexture_lt_/a_gt_... continuously displayed on one of those context2d canvas (canvai?)... gets... _lt_s_gt_ A BRAND NEW ROLLS ROYCE!_lt_/s_gt_  everyone_t_s love and appreciation.  Alright!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Thanks for all attempts_co_ comments_co_ successes_co_ miracles_co_ etc.  I think what we are trying... is a browser security violation.  So even if someone DOES do it successfully_co_ we would probably need to report it to the W3C_co_ and then they will change the browsers... and make it quit working.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]