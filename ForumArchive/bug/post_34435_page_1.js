[{"Owner":"tetley_tea","Date":"2017-12-07T22:07:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to use Angular 2 to create a BabylonJS scene - but seem to having some difficulty getting the OBJ loader to bring in the OBJ model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m getting this error_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnable to import meshes from _lt_a href_eq__qt_http_dd_//localhost.cdn.com/b_azir.obj_dd__qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost.cdn.com/b_azir.obj_dd__lt_/a_gt_ importMesh of undefined from undefined version_dd_ undefined_co_ exporter version_dd_ undefinedimportMesh has failed JSON parse.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//localhost.cdn.com_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost.cdn.com_lt_/a_gt_ is just an IIS website that points to a localhost website that contains the model files. (OBJ_co_ MTL and textures). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can navigate to _lt_a href_eq__qt_http_dd_//localhost.cdn.com/b_azir.obj_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost.cdn.com/b_azir.obj_lt_/a_gt_  fine. So that_t_s no issue. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can include the code if one wishes. I would create a playground. But does it support TS? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPete.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-07T22:35:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello I think this is because you forgot to load the obj loader?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tetley_tea","Date":"2017-12-07T22:40:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197873_qt_ data-ipsquote-contentid_eq__qt_34435_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512686138_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tJust now_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello I think this is because you forgot to load the obj loader?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey Deltakosh! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have imported the babylonjs library in my TypeScript file . As such_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import * as BABYLON from _t_babylonjs_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI have also imported the babylonjs and babylonjs-loaders types in my tsconfig.json file. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n  _qt_compilerOptions_qt__dd_ {\n    _qt_module_qt__dd_ _qt_es2015_qt__co_\n    _qt_moduleResolution_qt__dd_ _qt_node_qt__co_\n    _qt_target_qt__dd_ _qt_es5_qt__co_\n    _qt_sourceMap_qt__dd_ true_co_\n    _qt_experimentalDecorators_qt__dd_ true_co_\n    _qt_emitDecoratorMetadata_qt__dd_ true_co_\n    _qt_skipDefaultLibCheck_qt__dd_ true_co_\n    _qt_skipLibCheck_qt__dd_ true_co_ // Workaround for https_dd_//github.com/angular/angular/issues/17863. Remove this if you upgrade to a fixed version of Angular.\n    _qt_strict_qt__dd_ true_co_\n    _qt_lib_qt__dd_ [ _qt_es6_qt__co_ _qt_dom_qt_ ]_co_\n    _qt_types_qt__dd_ [ _qt_babylonjs_qt__co_ _qt_babylonjs-loaders_qt__co_ _qt_webpack-env_qt_ ]\n  }_co_\n  _qt_exclude_qt__dd_ [ _qt_bin_qt__co_ _qt_node_modules_qt_ ]_co_\n  _qt_atom_qt__dd_ { _qt_rewriteTsconfig_qt__dd_ false }\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAm I missing something? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI installed babylonjs locally using NPM_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_npm install babylonjs babylonjs-loaders --save-dev_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPete.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-12-07T22:47:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou still need to import it for side-effects (.OBJ registration)_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import _t_babylonjs-loaders_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tetley_tea","Date":"2017-12-07T22:51:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_197877_qt_ data-ipsquote-contentid_eq__qt_34435_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1512686825_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou still need to import it for side-effects (.OBJ registration)_dd__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n_lt_code_gt__lt_span_gt_import_lt_/span_gt_ _lt_span_gt__t_babylonjs-loaders_t__lt_/span_gt__sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t+1 That worked! Thank-you! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-12-08T00:12:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHere we are _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]