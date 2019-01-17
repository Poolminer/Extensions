[{"Owner":"heyzxz","Date":"2017-07-22T12:38:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found this issue when loading a .babylon file with the SceneLoader. After the scene loaded_co_ I found the _t_scene.textures_t_ array gets twice length than it should be_co_ and each texture has a duplicated/clone one stays in the array.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the problem comes from the _t_StandardMaterial.Parse_t_ logic_co_ see the test PG_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#EP5I6V%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#EP5I6V#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe material json has only has 1 texture_co_ (diffuse Texture)_co_ but the _t_Texture.Parse_t_ had been called twice_co_ one is for _t_diffuseTexture_t__co_ and the other is for _t__diffuseTexture_t__co_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.decorators.ts#L158_qt_ rel_eq__qt_external nofollow_qt__gt_see the _t_SerializationHelper.Parse_t_ definition_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-24T17:21:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGood catch!!! I_t_ll fix it right now\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-24T20:55:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt was a tough one actually _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tShould be good now\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]