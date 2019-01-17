[{"Owner":"Convergence","Date":"2015-09-14T14:06:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_Is there a way to retrieve/calculate the angle (slant) of a mesh created by CreateGroundFromHeightMap() at a certain x_co_ z coordinate? (or any mesh for that matter). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The pickResult of ground.intersects(ray) does not seem to give this information_co_ however there are a mysterious _t_bu_t_ and _t_bv_t_ property on the object_co_ I haven_t_t yet figured out what those mean._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It would be nice to know_co_ for example_co_ to rotate a mesh to be exactly perpendicular to the Ground it is resting on. I could of course dive into the vertices array and slog through a lof of cos() sin() and toa()s to get it_co_ but perhaps babylon already has a neat function for that I_t_m overlooking?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Slightly related question regarding gravity and collisions_dd__lt_/p_gt__lt_p_gt_Even if the ground is only very slightly slanted_co_ a gravity-affected-object will already start to slide down_co_ which can get irksome after a while. For reasonable slants this is good and realistic of course_co_ but it would be nice if a little bit of grip could be had. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-09-14T14:54:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think you should be able to do something like this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_var pickNormal _eq_ pickResult.getNormal()_sm__lt_/div_gt__lt_div_gt_var angle _eq_ Math.acos(BABYLON.Vector3.Dot(pickNormal_co_ new BABYLON.Vector3(0_co_ 1_co_ 0)))_sm_ _lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-09-15T04:42:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks_co_ worked like a charm _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-11-18T08:05:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have a follow-up question_sm_ the above method only returns one float value which indicates that the face is angled_co_ but not towards which axis_co_ which makes it insufficient for the following scenario_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Say you are moving a car across a heightmap_co_ the car should of course follow the curve of the landscape regardless of its own orientation. Is there an easy way calculate its rotation so it looks like all 4 wheels still have contact with the ground? Preferably without the use of ray.intersects() since it is rather slow and I was already able to eliminate its use from my project._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The _t_hard_t_ way I can think of is to dive in the ground._positions array_co_ retrieve the applicable vertices and do some heavy trigonometry on them_sm_  but perhaps there is an easier way?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-11-18T22:03:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys!  ConV... I think you should un-answer this thread_co_ if possible.  This is great subject... and hasn_t_t been talked-about in this forum... enough (imho).  I assume you are NOT using a physics engine_co_ so the slant of a _qt_tile_qt_ is important for _qt_coasting_qt_ the vehicle_co_ too.  The slant under each tire can be summed_co_ and then averaged_co_ to see if the car would roll if in neutral gear._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But maybe the normal of the car body... compared to _qt_up_qt_... would return something usable_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think this is a hot topic_co_ and we could use all the car-on-heightMap fun that we can find.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Personally_co_ I like jumping vehicles_co_ but that might require a physics engine... so I can get maximum tumbling carnage when I crash-land.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2015-11-19T01:02:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_106174_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17155_qt_ data-ipsquote-username_eq__qt_Wingnut_qt_ data-cite_eq__qt_Wingnut_qt_ data-ipsquote-timestamp_eq__qt_1447884200_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hi guys!  ConV... I think you should un-answer this thread_co_ if possible.  This is great subject... and hasn_t_t been talked-about in this forum... enough (imho).  I assume you are NOT using a physics engine_co_ so the slant of a _qt_tile_qt_ is important for _qt_coasting_qt_ the vehicle_co_ too.  The slant under each tire can be summed_co_ and then averaged_co_ to see if the car would roll if in neutral gear._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But maybe the normal of the car body... compared to _qt_up_qt_... would return something usable_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think this is a hot topic_co_ and we could use all the car-on-heightMap fun that we can find.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Personally_co_ I like jumping vehicles_co_ but that might require a physics engine... so I can get maximum tumbling carnage when I crash-land.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Thanks for the reply _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually I had already marked the thread as unresolved before replying _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  _co_ but now it seems its _t_Answered_t_ again. Weird_co_ I don_t_t know what happened there. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ alt_eq__qt__dd_blink_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]