[{"Owner":"sparkbuzz","Date":"2015-07-15T07:43:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m currently faking line thickness by creating lines as slim planes. The problem is however_co_ that as the view changes_co_ and the plane is viewed from the side_co_ it eventually disappears_co_ as it has no volume._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To counter this_co_ I was thinking about creating two planes between the lines start and end point_co_ at right angles of each other_co_ alternatively I was thinking about creating a line as a long cylinder_co_ but this seems to be a bad way to approach as drawing lines as cylinders isn_t_t the most resource friendly approach._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a better way to give thickness to a line in BabylonJS_co_ perhaps by using a shader of some kind?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-15T08:36:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Giving thickness &gt_sm_ 1px to a line is not possible in OpenGL ES 2.0_co_ which is the version used by BabylonJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you could do is rotate the planes that act as grid lines along their axis_co_ depending on the camera_t_s position. I_t_ve setup an example with grid lines on one axis only_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HV9RU%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HV9RU#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not great performance wise though..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-15T08:42:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually lines rotated at 0 and PI/2 around their main axis looks pretty good_co_ and you can merge all the lines together to gain in performance! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HV9RU%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HV9RU#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ now with a nice _qt_overlay_qt_ effect_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#HV9RU%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#HV9RU#4_lt_/a_gt__lt_/p_gt__lt_p_gt_I_t_m off_co_ need to stop playing with this _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sparkbuzz","Date":"2015-07-15T14:34:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks jahow_co_ love the overlay effect_co_ definitely going to look at your code sample after work today. I was thinking about rotating the planes towards the camera but my lack in mathematical skills lead me to rather not take this approach. You_t_r post helps a lot!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks so much for posting!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-15T14:42:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jahow_co_ you are a madman!  (and a WAY good forum helper/custodian)  Cooooool!  That playground gets bookmarked.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]