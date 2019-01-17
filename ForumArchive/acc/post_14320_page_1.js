[{"Owner":"jerome","Date":"2015-05-06T13:26:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt__lt_div_gt__lt_p_gt_Added methog _lt_em_gt_length()_lt_/em_gt_ to curve3 _dd_ returns the total length of the curve_lt_br_gt_Added the _lt_a href_eq__qt_http_dd_//escience.anu.edu.au/lecture/cg/Spline/Image/HermiteSpec.gif_qt_ rel_eq__qt_external nofollow_qt__gt_Hermite Spline curve_lt_/a_gt_ to the curve3 collection._lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var hermite _eq_ BABYLON.Curve3.CreateHermiteSpline(p1_co_ t1_co_ p2_co_ t2_co_ nbPoints)_sm__lt_/pre_gt__lt_ul_gt__lt_li_gt_p1 _dd_ initial point_lt_/li_gt__lt_li_gt_t1 _dd_ initial tangent vector_lt_/li_gt__lt_li_gt_p2 _dd_ final point_lt_/li_gt__lt_li_gt_t2 _dd_ final tangent vector_lt_/li_gt__lt_/ul_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_p_gt_This curve is based on the internal BJS Vector3.Hermite._lt_br_gt_It is very useful to smoothly continue or close other curves by using their first and last segments as Hermite tangents._lt_/p_gt__lt_p_gt_example _dd_ smoothly closing two concatened cubic bezier curves_lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// two concatened cubic Beziervar cubicA _eq_ BABYLON.Curve3.CreateCubicBezier(vA0_co_ vA1_co_ vA2_co_ vA3_co_ 50)_sm_var cubicB _eq_ BABYLON.Curve3.CreateCubicBezier(vB0_co_ vB1_co_ vB2_co_ vB3_co_ 50)_sm_var continued _eq_ cubicA.continue(cubicB)_sm_// initial Hermite values from continued first and last segmentsvar t _eq_ continued.length() / 2_sm_                             // tangent scale factorvar points _eq_ continued.getPoints()_sm_var p1 _eq_ points[points.length - 1]_sm_                         // last continued point _eq_ first hermite pointvar t1 _eq_ (p1.subtract(points[points.length - 2])).scale(t)_sm_ // last segment scaled _eq_ hermite tangent t1var p2 _eq_ points[0]_sm_                                         // first continued point _eq_ last hermite pointvar t2 _eq_ (points[1].subtract(p2)).scale(t)_sm_                 // first segment scaled _eq_ hermite tangent t2var hermite _eq_ BABYLON.Curve3.CreateHermiteSpline(p1_co_ t1_co_ p2_co_ t2_co_ 50)_sm_continued _eq_ continued.continue(hermite)_sm_// finally drawing a smooth closed curvevar closedCurve _eq_ BABYLON.Mesh.CreateLines(_qt_closed_qt__co_ continued.getPoints()_co_ scene)_sm__lt_/pre_gt__lt_pre_gt_PR pending_lt_/pre_gt__lt_/div_gt__lt_/div_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-06T17:14:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Validated _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-06T17:36:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_cinq iou  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_doc very soon_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]