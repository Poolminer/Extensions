[{"Owner":"dbawel","Date":"2016-06-20T19:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat post - lots to learn here...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is one of those days and this topic in particular by which my understanding of several processes in BJS has taken a leap in understanding how to manage reflections efficiently. I have loads of work to do_co_ yet I find myself spending time I don_t_t have to reconcile the many Playground examples posted here today.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just hope I save enough time to actually get my work done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-21T03:54:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is the current computation_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7317ed822e3e2d52a44966fa4d2fdc3b0a91291a/src/Shaders/ShadersInclude/reflectionFunction.fx#L42_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/7317ed822e3e2d52a44966fa4d2fdc3b0a91291a/src/Shaders/ShadersInclude/reflectionFunction.fx#L42_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you suggest to replace it by this_co_ correct?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_vec3 viewDir _eq_ worldPos.xyz - vEyePosition_sm_\n\nmat4 reflectionMatrix _eq_ mat4(-1._co_0._co_0._co_0._co_0._co_-1._co_0._co_0._co_0._co_0._co_-1._co_0._co_0._co_0._co_0._co_-1.)_sm_\n\nvec3 coords _eq_ reflect(normalize(worldPos.xyz * 3.141592653589793 * length(viewDir) *.1 -\nvEyePosition.xyz)_co_worldNormal.xyz)_sm_\n\nreturn vec3(reflectionMatrix * vec4(coords_co_ 0))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo what is 0.1 here?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-21T06:11:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti don_t_t know _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ but i think it is relation for camera fav (perspective) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand about  _lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt_reflectionMatrix _lt_/span_gt_   you need have a uniform like this \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2016-06-21T13:19:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow_co_ I am really glad a lot is happening here.. Too bad my understanding of the babylonjs internals is very little. I hope to learn very soon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I think its going to work for probes as well_co_ adam got it working in his playgrounds. Nice _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-21T13:22:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_133302_qt_ data-ipsquote-contentid_eq__qt_23187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1466515157_qt_ data-ipsquote-userid_eq__qt_18203_qt_ data-ipsquote-username_eq__qt_gamefan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 minute ago_co_ gamefan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tadam got it working in his playgrounds\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI didn_t_t really do anything.  All credit goes to NasimiAsi and Deltakosh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2016-06-21T13:28:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah_co_ NasimiAsi made it work. Huge huge thanks to him. I was meaning to say that you got it working for probes_co_ so his solution works.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-25T05:48:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and all BABYLONJS Devs _dd_ don_t_t forget finish this task. we are bug in reflection \n_lt_/p_gt_\n\n_lt_p_gt_\n\twe can not see this bug in rounded mesh like sphere but we have it \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-25T17:51:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m still waiting for a good candidate for _qt_0.1_qt_ value\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-25T18:11:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd can you explain the math behind_dd_ \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_color_dd_rgb(39_co_42_co_52)_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n_lt_code style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_1em_sm__qt__gt_vec3 coords _eq_ reflect(normalize(worldPos.xyz * 3.141592653589793 * length(viewDir) *.1 -\nvEyePosition.xyz)_co_worldNormal.xyz)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-06-25T18:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis page might help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.physicsclassroom.com/calcpad/refln_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.physicsclassroom.com/calcpad/refln_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-25T20:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/awsww1.jpg.e4f9d656792b09b6d13e7a81d90f7425.jpg_qt_ data-fileid_eq__qt_8357_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8357_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/awsww1.thumb.jpg.719e9c7a74e08f4e3ce613184f9d322a.jpg_qt_ alt_eq__qt_awsww1.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti write what i think about that and why i change this parameters \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-27T16:42:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tto me it is more related to this_dd_ _lt_a href_eq__qt_https_dd_//community.arm.com/groups/arm-mali-graphics/blog/2014/08/07/reflections-based-on-local-cubemaps_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//community.arm.com/groups/arm-mali-graphics/blog/2014/08/07/reflections-based-on-local-cubemaps_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-06-28T04:36:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_134099_qt_ data-ipsquote-contentid_eq__qt_23187_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1467045743_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tto me it is more related to this_dd_ _lt_a href_eq__qt_https_dd_//community.arm.com/groups/arm-mali-graphics/blog/2014/08/07/reflections-based-on-local-cubemaps_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//community.arm.com/groups/arm-mali-graphics/blog/2014/08/07/reflections-based-on-local-cubemaps_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\twhere is the LocalCorrect in DefaultShader\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ float3 viewDirWS _eq_ normalize(input.viewDirInWorld)_sm_\n     float3 normalWS _eq_ normalize(input.normalInWorld)_sm_\n     float3 reflDirWS _eq_ reflect(viewDirWS_co_ normalWS)_sm_\n     // Get local corrected reflection vector.\n      float3 localCorrReflDirWS _eq_ LocalCorrect(reflDirWS_co_ _BBoxMin_co_ _BBoxMax_co_\n                                                      input.vertexInWorld_co_ _EnviCubeMapPos)\n     // Lookup the environment reflection texture with the right vector.\n    reflColor _eq_ texCUBE(_Cube_co_ localCorrReflDirWS)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit is not Exactly what i append but very close to that\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin localCorrect change the world pos and cube Map Pos at last with control min and max \n_lt_/p_gt_\n\n_lt_p_gt_\n\tand after result it change ViewDirection i dont know about _BBoxMin and _BBoxMax (BindingBOX ? )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut we r not correct that\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe have computeReflectionCoords this maybe calculate that but i know this not have Distance  parameters because we don_t_t send any parameter about that\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe just have _t_ vec4(vPositionW_co_1.0) _t_     _t_ normalW _t_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ // Find the ray intersection with box plane\n    float3 invOrigVec _eq_ float3(1.0_co_1.0_co_1.0)/origVec_sm_\n    float3 intersecAtMaxPlane _eq_ (bboxMax - vertexPos) * invOrigVec_sm_\n    float3 intersecAtMinPlane _eq_ (bboxMin - vertexPos) * invOrigVec_sm_\n    // Get the largest intersection values (we are not intersted in negative values)\n    float3 largestIntersec _eq_ max(intersecAtMaxPlane_co_ intersecAtMinPlane)_sm_\n    // Get the closest of all solutions\n   float Distance _eq_ min(min(largestIntersec.x_co_ largestIntersec.y)_co_ largestIntersec.z)_sm_\n    // Get the intersection position\n    float3 IntersectPositionWS _eq_ vertexPos + origVec * Distance_sm_\n    // Get corrected vector\n    float3 localCorrectedVec _eq_ IntersectPositionWS - cubemapPos_sm_\n    return localCorrectedVec_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-06-28T10:03:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe unity way is one  good trade off perf vs quality for local reflections and the one used in a few engines for local cube map. This works nicely without magic numbers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1NP9BY%2319_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1NP9BY#19_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would nevertheless require to be in another #define to avoid the cost of the computation in none local reflection and also be applied to refraction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope that could help_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-28T15:38:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep..there is no simple way to fix the default shader here. I would highly recommend to use _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ version with ShaderBuilder.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]