[{"Owner":"avoba","Date":"2017-04-03T14:16:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m importing an obj model_co_ and I want to tweak the visibility of it_co_ or just dispose it when I click a button...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar loader _eq_ new BABYLON.AssetsManager(scene)_sm__lt_br /_gt_\n\t                        var leg _eq_ loader.addMeshTask(_qt_leg_qt__co_ _qt__qt__co_ _qt__qt__co_ _qt_leg.obj_qt_)_sm__lt_br /_gt_\n\t                        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_leg.obj_qt__co_ scene_co_ function (newMesh) { \n_lt_/p_gt_\n\n_lt_p_gt_\n\t                                     BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_leg.obj_qt__co_ engine_co_ function (newScene) { _lt_br /_gt_\n\t                            })_sm__lt_br /_gt_\n\t                        })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t$(_t_#quadril_bt_t_).click(function () {_lt_br /_gt_\n\t                       _lt_br /_gt_\n\t//........ something to dispose the mesh_co_ or make it invisible\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                    })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan_t_t seem to find a way to do it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-03T16:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you mind creating a repro in the playground? we could help you easily then _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"avoba","Date":"2017-04-03T16:34:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WPFPJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WPFPJ_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-03T16:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHere we are_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WPFPJ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WPFPJ#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"avoba","Date":"2017-04-03T19:01:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks!! It worked fine now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]