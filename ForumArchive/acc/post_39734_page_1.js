[{"Owner":"w305","Date":"2018-08-30T10:09:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_m new to using Babylon and game development in general. I_t_ve been developing an animation of a sphere that gets bigger and smaller_co_ and changes colour depending on the current value in a preset array in my code. However_co_ I want to be able to read in live data_co_ which would be a series of integers or floats_co_ in order to change the values set in my animation keys as the scene runs. I am at a bit of a loss as to how to approach this_co_ where would I start? Is it even possible?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-30T16:42:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey and welcome!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would recommend stopping the current animation when you get new data and then starting a new one. Perhaps it could be easier to help you with a repro in the Playground?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-08-30T16:53:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou could try_co_ making something like_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake two identical animations_co_ use arrays to hold all the keys_co_ then when you get that live data add it to the array of the extra animation then go to the current frame of the old animation in the new one.  Then make the original animation the extra one for the next time data is inputed.  This probably won_t_t work very well if you have a lot of live data coming in a lot.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust an idea.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-08-30T18:42:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy not just effect the mesh with variables on scene.registerBeforeRender_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#U9F8D4_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#U9F8D4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"w305","Date":"2018-08-31T09:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have been wondering if scene.registerBeforeRender is what I needed. Here is my playground of what I_t_ve been doing so far_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#0KRZWJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#0KRZWJ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I might have finally got it working using a preset array for now to simulate reading in live data_co_ and I_t_ve used consecutive animations_co_ and just updating the keys each time. I don_t_t know if this is the best implementation however_co_ or something hacky I put together. I also want to ensure that my animations are all in step with each other_co_ I read something about deterministic lockstep in the documentation_co_ is that what I would need to make sure this happens?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-31T15:43:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis looks good to me!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you mean by _qt__lt_span style_eq__qt_background-color_dd_ rgb(255_co_ 255_co_ 255)_sm_ text-align_dd_ start_sm__qt__gt_my animations are all in step with each other_qt_ ? As they are all started simultaneously they will be in sync as they use the same clock internally_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"w305","Date":"2018-09-04T09:06:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome_co_ sorry for the late reply but that_t_s pretty much what I meant_co_ I thought so but just wanted to double check just in case my animations slowly got out of sync with each other if played for a long time\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]