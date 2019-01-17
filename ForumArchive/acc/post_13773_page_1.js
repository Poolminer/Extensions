[{"Owner":"Olgo","Date":"2015-04-10T21:50:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everybodies_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m a (french) new member of BJS community (so sorry for my English)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One of my projects requires a custom shader that allow me to use an object as mask_co_ ie every rendering behind my object must be discarded (but my object must stay invisible)._lt_/p_gt__lt_p_gt_To do so_co_ my idea is to disable the color buffer in the fragment shader with a function like _lt_strong_gt_glDrawBuffer(GL_NONE _lt_/strong_gt_but maintain it in the depth buffer with a function like _lt_strong_gt_gl_FragDepth _eq_ gl_FragCoord.z_lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have two problems with this technique _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- Writing the depth buffer directly in a fragment shader  is extremely not recommended_lt_/p_gt__lt_p_gt_- This functions aren_t_t compatible with webgl (which use opengl es 2.0_co_ i guess)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a better / simplest way to do this trick ? (I_t_m a newbie in shader programming)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_hopefully_co__lt_/p_gt__lt_p_gt_Loïc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-11T14:09:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Loic_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_why not just keep using the default material on your object and disable color write on the beforeRender and reset it after?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something like_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_mesh.registerBeforeRender(function(){   engine.setColorWrite(false)_sm_})_sm_mesh.registerAfterRender(function(){   engine.setColorWrite(true)_sm_   })_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Olgo","Date":"2015-04-11T16:43:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It work !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is exactly what i need_co_ thank you Deltakosh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ this couple of functions allow us to define several actions before and after the render of the mesh_co_ is that ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-04-11T17:04:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s exactly that. You can find the same methods on the scene object_co_ if you want to iterate on your meshes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Olgo","Date":"2015-04-11T19:03:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ i have a new problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Deltakosh_co_ when i test you_t_re solution in the playground it works fine_co_ but in my project i_t_m it don_t_t._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In fact_co_ the _qt_mask object_qt_ need to be rendered first to work. This playground illustrate it _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#134UKN_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#134UKN_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you define _qt_sphere_qt_ as mask object it works_co_ however if you define _qt_sphere2_qt_ it don_t_t._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How can i choose the render order ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-13T15:11:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can play with mesh.renderingGroupId _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Olgo","Date":"2015-04-13T16:23:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry_co_ it doesn_t_t seems to be what i need._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_mesh.renderingGroupId control the objects order into depth buffer_co_ _lt_/span_gt_but not depending on their 3D positions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I made a new playground to have a better example of my problem _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#134UKN%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#134UKN#_lt_/a_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#134UKN%233_qt_ rel_eq__qt_external nofollow_qt__gt_3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this example_co_ we see that the mask (because of the creation order) is ok at some viewing angles and not at others. But if we create the mask object before every other objects_co_ all is ok._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my project case_co_ the objects are provided by a blender export in .babylonjs_co_ so i can_t_t control the creation order._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-13T19:35:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So this should be mesh.zOffset _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Olgo","Date":"2015-04-14T07:49:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah maybe  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t see this class in BJS documentation_co_ and it don_t_t work in the playground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How it works ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-04-14T12:56:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is a zOffset property in material class. Related to depthCulling._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But modifiyng the values doesn_t_t (apparently _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_) change anything..._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#134UKN%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#134UKN#4_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What this param is for ? and how to use it ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-04-14T13:53:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_zOffset is the implementation in BabylonJS of a WebGL function called _qt_Polygon Offset_qt_. Basically it_t_s useful when you need to render polygons that are at the exact same place_co_ but you still need some of them to be rendered above the others (typically for decals &amp_sm_ stuff like that). _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/13762-about-zoffset/?hl_eq_zoffset_qt__gt_Interesting thread about it._lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t think this will really help you in that case though..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now I tried to put the mask mesh manually in the first place in the meshes array_co_ and it works_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#134UKN%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#134UKN#6_lt_/a_gt__lt_/p_gt__lt_p_gt_I guess you could do that after having imported your meshes_co_ by using the mesh id._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s not a really _qt_clean_qt_ way to do it_co_ but without reordering meshes I think you_t_ll have a hard time achieving what you_t_re looking for. zOffset and Rendering Groups won_t_t help you_co_ and since your mask mesh will not have any pixel rendered on screen_co_ anything that would have been drawn before behind it would need to be _qt_erased_qt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Olgo","Date":"2015-04-15T14:49:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Problem solved !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you Jahow_co_ this solution is the right one._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you guys_co_ you saved me a lot of time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2015-10-02T04:55:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have been playing with this_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_mesh_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_registerBeforeRender_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(){_lt_/span_gt__lt_br_gt__lt_span_gt_engine_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_setColorWrite_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_false_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_br_gt__lt_span_gt_})_sm__lt_/span_gt__lt_br_gt__lt_br_gt__lt_span_gt_mesh_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_registerAfterRender_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_(){_lt_/span_gt__lt_br_gt__lt_span_gt_engine_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_setColorWrite_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_true_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_br_gt__lt_span_gt_})_sm__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_but is there by chance a way to toggle back on and off the mesh during rendertime?_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-02T16:23:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ what do you mean by back on and off? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]