[{"Owner":"Pryme8","Date":"2018-04-02T16:26:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#0J7M2M%2354_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#0J7M2M#54_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#0J7M2M%2357_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#0J7M2M#57_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tNotice the fracturing between zones?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tSo the heightmap is being generated by a noise algo on a shader then applied to a rendertargettexture.  If I was to just use the raw noise algo to displace it everything would be honkey dorry_co_ but for some reason my values on the samplers seems to not be consistent._lt_br /_gt_\n\t_lt_br /_gt_\n\tI know there are a few errors on my math for the normal stuff and unit size but all that should be irrelevant to the high  stuff._lt_br /_gt_\n\t_lt_br /_gt_\n\tI tried to set precisions and alas nothing seems to work. Ive tried different filtering/sampling modes etc...  In theory this is supposed to be easy._lt_br /_gt_\n\t_lt_br /_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-02T17:41:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you check with Spector.js? It can give you a precise view of what_t_s inside the shader samplers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-02T18:00:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CDQ3GI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CDQ3GI#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tGonna do that_co_ I think I need to include my gutters like the above example and that should fix it Im thinkin.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-02T22:06:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWJUIG%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWJUIG#5_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tNow to go back and do the generation pass_co_ with the new set up and I am hoping the problem will be fixed._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-02T23:00:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_br /_gt_\n\tUsing Adjusted UV_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWJUIG%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWJUIG#15_lt_/a_gt__lt_br /_gt_\n\trabble rabble rabble... it did not fix anything... my brain hurts normally stuff like this I have no problem with... sigh..._lt_br /_gt_\n\t_lt_br /_gt_\n\tUsing Original UV_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWJUIG%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWJUIG#14_lt_/a_gt__lt_br /_gt_\n\twith this one I would assume there should be some overlap/repetition but I_t_m guessing my math if off if there is not._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-03T00:38:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWJUIG%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWJUIG#18_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAfter simplifying the UV/heightmap stuff the zones still do not match up where they to the best of my knowledge pointing to the same data._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\thmmm this is prolly frustrating me more then it should._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-03T05:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWJUIG%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWJUIG#20_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tHad an epiphany before bed...  Now to make the noises line up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]