[{"Owner":"luka_friend","Date":"2014-12-08T09:49:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!_lt_/p_gt__lt_p_gt_I was wondering if in Babylon js exists rendering 2D text on screen? I would need this for my 3D model dimensions._lt_/p_gt__lt_p_gt__lt_strong_gt_Here is an example URL_dd_  _lt_/strong_gt__lt_a href_eq__qt_http_dd_//www.cadstudio.cz/img/ext/ai-dim3d.gif_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.cadstudio.cz/img/ext/ai-dim3d.gif_lt_/a_gt_  (numbers for dimensions are what I want to achive). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am familiar with DynamicTextures but in DynamicTextures I would require a 3D model so I could display my text. And in my model I would like to see text_lt_strong_gt_ always perpendicular _lt_/strong_gt_to the camera. _lt_/p_gt__lt_p_gt__lt_strong_gt_Here is what I have in my mind URL_dd_  _lt_a href_eq__qt_http_dd_//drivingdimensions.com/uploads/img/65_rectangle8.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//drivingdimensions.com/uploads/img/65_rectangle8.png_lt_/a_gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_If you look at first URL and second URL_co_ you notice that text in second URL rotates so that it is always perpendicular to the camera._lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To simplify my question I need to render 2D text and the text needs to be perpendicular to the camera (even If I would rotate the camera around the object it would still stay perpendicular)._lt_/p_gt__lt_p_gt_Can anyone help me with this?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-08T14:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again_co_ LF.  I recently needed to do that very thing myself...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#HSVQL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#HSVQL_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint prettyprinted_qt__gt_\n_lt_span class_eq__qt_pln_qt__gt_outputplane_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_billboardMode _lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__eq__lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_ BABYLON_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span_gt_AbstractMesh_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_BILLBOARDMODE_ALL_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDeltakosh showed it to us... _lt_strong_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9297-sprites-rollover/_qt_ rel_eq__qt__qt__gt_here_lt_/a_gt__lt_/strong_gt_.  (Thx DK!)  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is one minor problem with this method.  Pan the camera to a location behind the scene.  While remaining there_co_ move the camera to directly above... or directly below... the scene.  See the outputplane go upside-down?  I do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is another way_co_ but not quite as efficient.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1MEDUS_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1MEDUS_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint prettyprinted_qt__gt_\n_lt_span class_eq__qt_pln_qt__gt_outputplane_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_lookAt_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_(_lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_camera_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_._lt_/span_gt__lt_span class_eq__qt_pln_qt__gt_position_lt_/span_gt__lt_span class_eq__qt_pun_qt__gt_)_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNotice that this method needs constant refreshing (put it inside the renderLoop or inside an animator function).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt also has the same _qt_upside-down problem_qt_.  *scratch scratch*   Darned scene gremlins.  _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"luka_friend","Date":"2014-12-08T17:15:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you so much Wingnut (and Deltakosh of course)!_lt_/p_gt__lt_p_gt_I was really concerned if this is even possible in babylon js!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you again it really means a lot when my questions are quickly answered. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"luka_friend","Date":"2014-12-08T19:18:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there a way to set color of the plane to transparency?_lt_/p_gt__lt_p_gt_If i set hex value of plane to _qt_#80FFFFFF_qt_ (should have 50% transparency) it just becomes black. How can I set not to have background color only BLACK text._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can see the problem in the picture (white rectangle on which text is on is my problem)_dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2014/post-11698-0-63514000-1418066301.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2014/post-11698-0-63514000-1418066301.png_qt_ data-fileid_eq__qt_3223_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-11698-0-63514000-1418066301.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-04-05T14:47:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would like to render some text atop a created ground_co_ per se. To simulate painted yard line numbers_co_ this sort of thing. The orientation must stay the same_co_ perpendicular with the Y axis_co_ I think it is_co_ when working with ground.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-28T13:08:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHas this problem been solved?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also need dynamic texture with transparent background.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-28T15:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep_dd_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-06-28T15:41:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134240_qt_ data-ipsquote-contentid_eq__qt_10917_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467119315_qt_ data-ipsquote-userid_eq__qt_14468_qt_ data-ipsquote-username_eq__qt_KevinBLT_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ KevinBLT said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHas this problem been solved?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI also need dynamic texture with transparent background.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI was able to use a plane and draw text. You can set the material on the plane_co_ and draw text with another material. The tricky part for me was centering the text accordingly so that I could position it on a precise location. Otherwise you have to do all sorts of drawn text width calculations_co_ which are notoriously difficult to accurately predict.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-28T16:04:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou can also check Canvas2D_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Canvas2D_Home_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Canvas2D_Home_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2016-06-29T09:12:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh... this doc was exactly what I needed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI love you all! And Babylon of course! _lt_img alt_eq__qt__dd_wub_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wub.png_qt_ title_eq__qt__dd_wub_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]