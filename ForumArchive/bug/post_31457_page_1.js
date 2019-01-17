[{"Owner":"FunFetched","Date":"2017-07-05T19:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFound an issue with Animation/AnimationEvent where an event set for an earlier frame is immediately triggered when playing the animation starting at a later frame. Here_t_s a playground example of the problem (you_t_ll need to open your JS console)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#E54IFV%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#E54IFV#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Taking a look at the code_co_ I can already see the problem. I_t_ll see if I can_t_t whip this one myself.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FunFetched","Date":"2017-07-05T20:29:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOof. This is also affecting animations that are played backwards. On line 656 in babylon.animation.ts we have this line_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (currentFrame &gt_sm__eq_ this._events[index].frame) {_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tObviously_co_ currentFrame is floating point_co_ so we can_t_t just do a simple _eq__eq_ in this situation. Unfortunately_co_ since it_t_s looping through all of the events from start to finish every time_co_ all previous events in the timeline get triggered right off the bat_co_ even if we started the animation at a later point. In the case of backwards animations_co_ the problem is exacerbated for the same reason. If we only supported forward animation_co_ the solution would be a simple matter of changing the line above to_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (currentFrame &gt_sm__eq_ this._events[index].frame &amp_sm_&amp_sm_ this._events[index].frame &gt_sm__eq_ from) {_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... but I guess it_t_s not that simple any more. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_ll keep digging.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FunFetched","Date":"2017-07-05T22:38:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed it here_co_ and posted a pull request.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2440_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/2440_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-06T04:24:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd merged _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ thanks a lot!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]