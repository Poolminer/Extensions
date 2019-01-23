[{"Owner":"rodrigop","Date":"2015-07-23T17:14:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there!_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m scratching my head about how can i make a common effect in 3d games_co_ what i_t_m trying to do that one mesh on an event_co_ emits some particles_co_ that first explode (i have that done using simple particles system)_co_ but after the explosion instead of disappearing_co_ they should change its target and get attracted/absorbed by another object._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve seen many times in games where you shoot/kill something and it leaves this _qt_bonus lights around_qt_ which then are absorbed by the character_co_ but i am not sure how to implement this with BJS_co_ so any ideas from a BJS hero would be wonderful!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-23T20:41:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ maybe something like that? _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1K0NSN%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1K0NSN#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I used the custom update function (starting at line 67) and added a little change of direction after half the particles lifetime (line 72). Might not be perfect yet_co_ but is that what you are looking for?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rodrigop","Date":"2015-07-23T23:19:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@iiceman you HERO!  thank you for your time_co_ this is a nice road to what i_t_m looking_co_ I think i can use a Vector3 instead of a mesh as the emitter_co_ and first explode some particles_co_ then move while they turn back to the _qt_absorbing state_qt_ move the emitter Vector3 to some other mesh i want to absorb the particles_co_ so it will look like a first explosion with particles_co_ then those particles get absorbed by another mesh.. will try to implement this from your demo very soon (have some work load ATM). Thanks again._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"rodrigop","Date":"2015-07-26T20:41:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just got some time to play with this_co_ and this is the end result i was expecting_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1K0NSN%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1K0NSN#9_lt_/a_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]