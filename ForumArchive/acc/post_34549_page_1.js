[{"Owner":"MDP Monkey","Date":"2017-12-13T13:57:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_ I wonder if someone can supply a full working demo of a basic arc2?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s in the API docs_co_ but it_t_s not clear how to use it. I_t_ve tried using a lathe_co_ but I can_t_t get it to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using a quadraticBezier at the moment_co_ and it doesn_t_t quite give me the curve I want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tArc2 seems to be what I need_co_ but as I said there are no code samples or playground examples for me to see the correct use/syntax.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a really basic example would be enough for me to start playing with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-14T14:51:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi MDPM_co_ how ya doon?  I hope well.  Sorry for the slow replies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are correct... there_t_s not many demos_co_ and the PG search is being grumpy when trying to search for _qt__qt_Math.Arc_qt__qt__co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m going to ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ and see if he can help us do a linesMesh plot of some Arc2_t_s_co_ perhaps using the only PG I could find... a barely-started...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#6G0UJL%230_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#6G0UJL#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJerome is a wizard of plotting-with-math... and a darned nice guy_co_ too.  Hopefully_co_ he (or someone else) can rescue us.  Stay tuned and try to be patient.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-12-14T15:02:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tno idea about what is this Arc2... any doc anywhere ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-14T15:10:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi J_co_ thx for the visit.  I only see _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Math/babylon.math.ts#L4674_qt_ rel_eq__qt_external nofollow_qt__gt_the source_lt_/a_gt_ and _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/arc2_qt_ rel_eq__qt_external nofollow_qt__gt_the classDoc file_lt_/a_gt_.  Sorry.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2017-12-14T15:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tArc2 is used within Path2.addArcTo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPath2 is a way of producing a 2D shape given x and y coordinates. The path can then be used by PolygonMeshBuilder to draw a polygon based on the path (confusingly in the xz plane)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPath2.addArcTo takes 5 parameters so Path2. addArcTo(midX_co_ midY_co_ endX_co_ endY_co_ numberOfSegments)_co_ startX and startY being the previous points in Path2. You cannot start a path with an arc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/path2_qt_ rel_eq__qt_external nofollow_qt__gt_Path2 documentation_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis PG builds and extrudes two polygons_co_ the top one by giving the corner points of the polygon and th lower one by creating a path2 object. You can see the use of addArcTo in the lower polygon and the curve it produces.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PTTMVI%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PTTMVI#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]