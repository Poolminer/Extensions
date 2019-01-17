[{"Owner":"Fridolin","Date":"2017-06-07T12:24:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a large model exported from a software with a lot of nested instances. I added a shadow generator with defaults and added most meshes to its renderList. The console recommends to use Exponential Shadow Maps (ESM) which look also a lot nicer (_qt_VSM are now replaced by ESM. Please use useExponentialShadowMap instead_qt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith ESM enabled_co_ the scene turns mostly black because shadows are rendered also on top of those meshes that cast that part of the shadow. The issue only disappears when the shadow generator has only a single mesh in the renderList. See here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7CPG3X_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7CPG3X_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this a bug? Is ESM not yet stable (although the console recommends using it)? Is there a work-around?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t---\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother question_dd_ My model is mostly static. Are shadow maps regenerated at every frame or only when something (lights_co_ meshes) changes?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-07T14:37:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have multiple options_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Remove the caster from the list of shadow receivers. This is the best option by far\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Play with bias and depthScale_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#7CPG3X%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#7CPG3X#1_lt_/a_gt_ (doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/shadows#exponential-shadow-map_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/shadows#exponential-shadow-map_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding update of the shadow map_co_ you can set the refreshRate to 0 (_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_The_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_strong style_eq__qt_color_dd_#000000_sm__qt__gt_refreshrate_lt_/strong_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_span_gt_ _lt_/span_gt_property is set to 0 if you want the texture to only render once. If set to 1_co_ it will render every frame_co_ 2 every two frames_co_ etc.)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fridolin","Date":"2017-06-07T20:17:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot keep shadow casters and receivers completely separate (due to self-shadowing). But if select self-shadowing objects in the same depthmap are not too distant_co_ I can mitigate the issue with bias and depthScale.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-08T17:35:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn behalf of all of us_co_ welcome to the forum_co_ Fridolin... good to have you with us.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to teach us things that you learn (thx).  Freely adjust our documentation_co_ if you think adjustments need to be made.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also write NEW documentation/tutorials_co_ such as _qt_Advanced ESM Shadow Techniques_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt needs to be written in GitHub .md markdown... which is real easy to learn. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen put the .md file into _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation/tree/master/content/tutorials/02_Mid_Level_qt_ rel_eq__qt_external nofollow_qt__gt_the correct GitHub folder_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinally_co_ adjust/add-to a file called _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation/blob/master/data/statics.json_qt_ rel_eq__qt_external nofollow_qt__gt_statics.json_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter a fresh _qt_docs-build_qt__co_ your new document will be rendered-as-HTML_co_ and included in the BJS docs site (and you_t_ll become a BJS super-hero).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Documentation#add-a-new-content_qt_ rel_eq__qt_external nofollow_qt__gt_More info here_lt_/a_gt_.  Welcome again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]