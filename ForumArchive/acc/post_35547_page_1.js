[{"Owner":"Amarth2Estel","Date":"2018-02-07T13:55:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everybody !_lt_br /_gt_\n\t_lt_br /_gt_\n\tI am not sure this is a bug or a wanted behavior_co_ that is why I did not post on the bug section._lt_br /_gt_\n\t_lt_br /_gt_\n\tWhen you set the property _lt_strong_gt_infiniteDistance_lt_/strong_gt_ to true on a skybox created from the meshBuilder_co_ then behavior is as expected _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UU7RQ%2366_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UU7RQ#66_lt_/a_gt__lt_br /_gt_\n\tBut when you set the same property of a skybox create from an EnvironmentHelper_co_ then it changes nothing _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#10D6YT%2374_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#10D6YT#74_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI saw in the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.transformNode.ts_qt_ rel_eq__qt_external nofollow_qt__gt_source code of the TransformNode_lt_/a_gt_ (line 735) that the parent attribute of the skybox is tested. Of course with the EnvironmentHelper it is not null. _lt_br /_gt_\n\tIt is on purpose ?_lt_br /_gt_\n\t_lt_br /_gt_\n\t_qt_Solution_qt_ found while writing this post _dd_ Obviously _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#10D6YT%2375_qt_ rel_eq__qt_external nofollow_qt__gt_I can get the skybox from the environmentHelper and set its parent to null_lt_/a_gt__co_ but it doesn_t_t looks clean coding to me._lt_br /_gt_\n\t_lt_br /_gt_\n\tExcept this_co_ EnvironmentHelper is awesome to set up clean scene really fast ! I love it. _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-07T17:32:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ so yes infiniteDistance only works if there is no parenting (this is expected _dd_))\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe skybox is linked to an internal root mesh in order to let you Y rotation for the entire setup (skyox_co_ ground_co_ etc..)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the way you found looks pretty ok for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]