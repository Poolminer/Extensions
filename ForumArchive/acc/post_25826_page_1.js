[{"Owner":"Ghostdog","Date":"2016-10-18T14:09:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_all in all I just want to have a round boundingBox for my sphere mesh .. and .. as just having the space to ask .. a customizedBox for irregular formed meshes._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_After reading some of the babylon tutorial sides and topics and web_co_ I want to know if my understanding in correct_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_For intersections between meshes I can use the bounding boxes that are available for every mesh in a scene._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_.. and as to see in _lt_/span_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#CTHIE%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#CTHIE#1_lt_/a_gt__lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_ the means real boxes!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_.. furthermore the boxes are take if I uses the actionManager functions to detect mesh intersection between meshes _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_.0001pt_sm_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_10pt_sm_font-family_dd__t_Courier New_t__sm__qt__gt_mesh1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_.0001pt_sm_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_10pt_sm_font-family_dd__t_Courier New_t__sm__qt__gt_{ trigger_dd_ BABYLON.ActionManager.OnIntersectionExitTrigger_co_ parameter_dd_ mesh2 } _co_ function () {_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_.0001pt_sm_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_10pt_sm_font-family_dd__t_Courier New_t__sm__qt__gt_  mesh1.position.x _eq_ 0.0_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_.0001pt_sm_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_10pt_sm_font-family_dd__t_Courier New_t__sm__qt__gt_}))_sm_  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_So if I have two spheres then it can happen that in the worst case both bounding boxes will hit on there edges with each other ..   without any intersections of the spheres._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_In _lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Intersect_Collisions_-_mesh_qt_ rel_eq__qt_external nofollow_qt__gt__lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm_color_dd_#0000FF_sm__qt__gt_https_dd_//doc.babylonjs.com/tutorials/Intersect_Collisions_-_mesh_lt_/span_gt__lt_/a_gt__lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_ there is the statement_dd_ _qt_ _lt_/span_gt__lt_span style_eq__qt_font-size_dd_13.5pt_sm_font-family_dd_Roboto_co_ serif_sm_color_dd_#000000_sm_background_dd_#FFFFFF_sm__qt__gt_But this bounding box can be more or less precise_co_ and that’s why we have our second parameter. In short_co_ if this parameter is set to true (false by default)_co_ then the bounding box is closer to the mesh (OBB bounding type)_co_ but it’s a more costly calculation._lt_/span_gt__lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt__qt_ .. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_Having the corresponding PG _lt_/span_gt__lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?10_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?10_lt_/a_gt__lt_span style_eq__qt_font-size_dd_12pt_sm_font-family_dd__t_Times New Roman_t__co_ serif_sm__qt__gt_ and trying  _qt_intersectsMesh(sphere_co_ true)_qt_ still delivers a box (?) _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\tOn the other hand there seems to be a boundingSphere but only for the camera?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_line-height_dd_normal_sm__qt__gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to have a round BoundingSphere or assign a custom mesh as a boundingBox?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid I have to write a detection on my own by looping though sphere vertices of a mesh instead? _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(sorry for that questions)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith best regards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-18T14:30:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tin short_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tall mesh intersections are computed with bounding boxes AND bounding spheres that way _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif the two bounding spheres don_t_t intersect_co_ return false\n_lt_/p_gt_\n\n_lt_p_gt_\n\telse it the two bounding boxes don_t_t intersect return false\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis means that for spherical meshes_co_ the bounding sphere is similar to the mesh and the intersection is really fast and accurate !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe debug layer only shows the bounding boxes. If you force the parameter _lt_em_gt_precise_lt_/em_gt_ to true_co_ you only force the bounding boxes to be rotated in the space like their embedded mesh. So instead of having a simple axis aligned process (direct coordinate comparison _eq_ AABB)_co_ this needs some more complex computation with oriented bounding boxes (OBB what implies some SAT or Separate Axis Theorem application _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Hyperplane_separation_theorem_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Hyperplane_separation_theorem )_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving other _qt_impostors_qt_ than boxes or spheres is even more complex and requires far more CPU. This is what the physics engines provide out-of-the-box _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ghostdog","Date":"2016-10-18T15:34:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thmmm.. _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tthis would mean I can catch the bound spheres of two meshes regarding intersection? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow? _lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2DVY2Z%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2DVY2Z#0_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-19T12:33:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can access a mesh bounding sphere via its boundingInfo object _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingInfo_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingInfo_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var bSphere _eq_ mesh._boundingInfo.boundingSphere_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou can test if two bounding spheres intersect with the static method _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere#static-intersects-sphere0-sphere1-rarr-boolean_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.4/BoundingSphere#static-intersects-sphere0-sphere1-rarr-boolean_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.BoundingSphere.Intersects(bSphere1_co_ bSphere2)_sm_ // returns a boolean_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ghostdog","Date":"2016-10-19T12:38:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGreat !! Thanks once more!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]