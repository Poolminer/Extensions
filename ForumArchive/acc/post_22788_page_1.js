[{"Owner":"chicagobob123","Date":"2016-05-25T14:19:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am trying to make a simple 3js importer. Using the simplest object I have which is a box I tried using the online example someone had give me. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust including the model as a script makes the job much simpler. No async issues. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only alteration to the 3js file is to add var name of the model\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar FortyFtContainer_eq_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLater I figured I could pull out the names of the material and add them\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the rough start but I cant get the point order right. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tired to use the original faces point ordering and then tried to swap them as was done in a prior example. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny of you much smater guys have some ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-25T15:04:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tForget I said anything. I am going to go back and pound this out. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFound the json explanation online lots of things to work on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-25T15:55:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah I have a cube.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow to try and get some UV mapped material on it. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-25T18:21:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis could become an official loader _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-25T18:36:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf I can attache the UV material to it. Cant even get a material to show up on the cube. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried online and here and the nothing happens. No image texture. Online I dont even get a cube anymore. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure the texture is there. I just took the address from another online example\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var mat _eq_ new BABYLON.StandardMaterial(_qt_texture1_qt__co_ scene)_sm__lt_br /_gt_\n\t    mat.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/tree.png_qt__co_ scene)_sm__lt_br /_gt_\n\t    mat.diffuseTexture.hasAlpha _eq_ true_sm_//Have an alpha_lt_br /_gt_\n\t    mat.backFaceCulling _eq_ false_sm_//Show all the faces of the element_lt_br /_gt_\n\t    _lt_br /_gt_\n\t      //   var mat _eq_ new BABYLON.StandardMaterial(_qt_mat1_qt__co_ scene)_sm__lt_br /_gt_\n\t        mat.alpha _eq_ 1.0_sm__lt_br /_gt_\n\t      //  mat.diffuseColor _eq_ new BABYLON.Color3(0.5_co_ 0.5_co_ 1.0)_sm__lt_br /_gt_\n\t     //   mat.freeze()_lt_br /_gt_\n\t        Container.material _eq_ mat_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#23_lt_/a_gt_  works\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#2_lt_/a_gt_4\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen the loader is done with textures I am hoping that the performance stays here are 24000 as particles\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#32_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-25T23:09:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tit works here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#36_lt_/a_gt_ (turn the camera a bit to see the texture)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-25T23:10:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tor there_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2337_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#37_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-26T02:50:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI saw this work on my phone but at work it was not showing up on my monitor. And the other larger image I had did not show up at all. Its 1K x 1K .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo do you know anything about how to map multiple UV materials to the Mesh Object? From what you can see of the 3js file there isn_t_t much inside. I loaded a pretty large mesh and it worked well but there is a HUGE part missing the UV mapped material. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am only vaguely familiar with this level of detail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvertices are the actual points on a mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tindices/faces are needed to reduce the number vertices defined and point to vertices that make triangles to make the mesh.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tUV is the percent of the texture to be mapped to some vertices of a mesh. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom the documentation I gather you have submeshs that are tied to vertices that can map to a material. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cant comprehend how that works with indices. Unless the vertex array can be an indices array?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomehow the docs and what I have are not gelling in my brain. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny pointers would be great. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks all. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd thanks for the patience. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-26T15:26:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf it works on your phone then you may have a cache/network issue at work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding how meshes are build.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVertices are defined by several buffers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnly two are mandatory_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tpositions_dd_ the list of positions (x_co_ y_co_ z). The minimal amount is 3 as you cannot define something smaller than a triangle\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tindices_dd_ The index of positions to use to create faces. A face is made of 3 positions. So the minimal amount of indices is 3\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is then the most basic mesh you can create_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n_qt_positions_qt__dd_ [0_co_ 0_co_ 0_co_\n\t\t\t 0_co_ 1_co_ 0_co_\n\t\t\t1_co_ 0_co_ 0]_co_\n\n_qt_faces_qt__dd_ [0_co_ 1_co_ 2]\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThen you can add more information per vertex. For instance every vertex can also have a normal to compute dynamic lightning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd you can add UVs to texture image on your object. UVs are 2D coordinates attached to every position. They are in the range of [0_co_0] to [1_co_1]. They represent a coordinate on a texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith that in mind here is a more complete mesh (Still a triangle)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n_qt_positions_qt__dd_ [0_co_ 0_co_ 0_co_\n\t\t\t 0_co_ 1_co_ 0_co_\n\t\t\t1_co_ 0_co_ 0]_co_\n\n_qt_normals_qt__dd_ [0.0_co_ 1.0_co_\n\t\t\t0.0_co_ 1.0_co_\n\t\t\t0.0_co_ 1.0]_co_\n\n_qt_uvs_qt__dd_ [0_co_ 0_co_\n\t\t0_co_ 1_co_\n\t\t1_co_ 0]_co_\n\n_qt_faces_qt__dd_ [0_co_ 1_co_ 2]\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo what to do to get a plane?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust add one position_co_ one normal_co_ one UV and a new face (so 3 indices)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n_qt_positions_qt__dd_ [0_co_ 0_co_ 0_co_\n\t\t\t 0_co_ 1_co_ 0_co_\n\t\t\t1_co_ 0_co_ 0_co_\n            1_co_ 1_co_ 0]_co_\n\n_qt_normals_qt__dd_ [0.0_co_ 1.0_co_\n\t\t\t0.0_co_ 1.0_co_\n\t\t\t0.0_co_ 1.0_co_\n            0.0_co_ 1.0]_co_\n\n_qt_uvs_qt__dd_ [0_co_ 0_co_\n\t\t0_co_ 1_co_\n\t\t1_co_ 0_co_\n        1_co_ 1]_co_\n\n_qt_faces_qt__dd_ [0_co_ 1_co_ 2_co_\n          0_co_ 2_co_ 3]\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-26T17:51:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow is the face indices linked to an indexed material list.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuppose a Model has one mesh but two materials UV mapped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do you link those materials to the Babylon Mesh to the faces? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you create a _lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_MultiMaterial _lt_/span_gt_like this. And push on each material into the list. \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_margin_dd_0px 0px 10px_sm_padding_dd_9.5px_sm_border_dd_1px solid rgb(204_co_204_co_204)_sm_font-weight_dd_normal_sm_font-style_dd_normal_sm_font-size_dd_13px_sm_font-family_dd_Menlo_co_ Monaco_co_ Consolas_co_ _t_Courier New_t__co_ monospace_sm_vertical-align_dd_baseline_sm_line-height_dd_1.42857_sm_color_dd_rgb(51_co_51_co_51)_sm_font-variant_dd_normal_sm_background_dd_rgb(245_co_245_co_245)_sm_white-space_dd_pre_sm_clear_dd_both_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_\n_lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#0000FF_sm__qt__gt_var _lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_multimat _eq_ _lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#0000FF_sm__qt__gt_new _lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_BABYLON.MultiMaterial(_lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_rgb(163_co_21_co_21)_sm__qt__gt__qt_multi_qt__lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt__co_ scene)_sm_\nmultimat.subMaterials.push(material0)_sm_\nmultimat.subMaterials.push(material1)_sm_\n\n_lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_What I am trying to understand_lt_/strong_gt__co_ using your example is _lt_strong_gt_how _lt_/strong_gt_face 0_co_1_co_2 links to material0  and face 0_co_2_co_3 links to material 1 \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom an online example they had something like this. And this means that each material must have a linear list of _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-align_dd_left_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_indices_lt_/span_gt_ for that material. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am getting the drift here and will work on this.  In the mean time I am uploading the material for the container can you place it someplace for use in the playground?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis way I might be able to tell whats wrong on my side which still doesn_t_t work\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_margin_dd_0px 0px 10px_sm_padding_dd_9.5px_sm_border_dd_1px solid rgb(204_co_204_co_204)_sm_font-weight_dd_normal_sm_font-style_dd_normal_sm_font-size_dd_13px_sm_font-family_dd_Menlo_co_ Monaco_co_ Consolas_co_ _t_Courier New_t__co_ monospace_sm_vertical-align_dd_baseline_sm_line-height_dd_1.42857_sm_color_dd_rgb(51_co_51_co_51)_sm_font-variant_dd_normal_sm_background_dd_rgb(245_co_245_co_245)_sm_white-space_dd_pre_sm_clear_dd_both_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_\n_lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_sphere.subMeshes.push(_lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#0000FF_sm__qt__gt_new _lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_BABYLON.SubMesh(0_co_ 0_co_ verticesCount_co_ 0_co_ 900_co_ sphere))_sm_\nsphere.subMeshes.push(_lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#0000FF_sm__qt__gt_new _lt_/span_gt__lt_span style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_border_dd_0px_sm_font-weight_dd_inherit_sm_font-style_dd_inherit_sm_font-size_dd_13px_sm_font-family_dd_inherit_sm_vertical-align_dd_baseline_sm_background_dd_#FFFFFF_sm_color_dd_#000000_sm__qt__gt_BABYLON.SubMesh(1_co_ 0_co_ verticesCount_co_ 900_co_ 900_co_ sphere))_sm_\n_lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/40ContRed_noLogo.jpg.6816cdb21dee708a2e238eb3c227118d.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7819_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/40ContRed_noLogo.thumb.jpg.bab2cef8bd04442fd7b2690da56c49e0.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_40ContRed_noLogo.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-26T18:40:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tjust a suggestion _dd_ if your container is just a box and if your 6 textures can be in the same texture file_co_ you could just use the BJS box and the per face texture property  _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-26T18:42:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have other much more complicated models in 3Js . Using the box as a small but useful example that most programmers can figure out\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-26T22:23:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo adapt multi material to my example_co_ I would write_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_mesh.subMeshes _eq_ []_sm_\nmesh.subMeshes.push(new BABYLON.SubMesh(0_co_ 0_co_ 6_co_ 0_co_ 1_co_ mesh))_sm_\nmesh.subMeshes.push(new BABYLON.SubMesh(1_co_ 0_co_ 6_co_ 1_co_ 1_co_ mesh))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo basically a submesh is defined by_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_constructor(public materialIndex_dd_ number_co_ public verticesStart_dd_ number_co_ public verticesCount_dd_ number_co_ public indexStart_co_ public indexCount_dd_ number_co_ mesh_dd_ AbstractMesh)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-27T13:51:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre you sure thats right BABYLON.SubMesh(0_co_0_co_6_co_0_co_1_co_mesh)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t0 is he material index Got it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut 6 _lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(35_co_36_co_31)_sm_float_dd_none_sm__qt__gt_verticesCount_lt_/span_gt_ ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI dont understand 6 vertices Isn_t_t that the indicies count? There are only 4 vertices for a plane\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand a box has 8 vertices. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are 2 faces/triangles so 0_co_1  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1_co_1 are the number of complete faces/triangles in the submesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill dont understand the 6 unless that is the raw vertexes represented by the indicies.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2362_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#62_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the modified version. I tired it with a version that had 5 UV maps and got only one to work. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-27T15:14:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMan..I_t_m an idiot \n_lt_/p_gt_\n\n_lt_p_gt_\n\tit is 4 and not 6...Sorry about that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-27T15:17:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tcan you simplify a bit your sample(like just with a box)?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-27T15:37:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1310.91px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t_qt_can you simplify a bit your sample(like just with a box)?_qt_\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_float_dd_right_sm_color_dd_rgb(82_co_82_co_82)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_20px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_div style_eq__qt_background_dd_rgb(240_co_240_co_240)_sm_padding_dd_3px_sm_line-height_dd_16px_sm_float_dd_right_sm__qt__gt_\n\t\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22788-making-a-3js-model-importer/?do_eq_repComment&amp_sm_comment_eq_130156&amp_sm_rep_eq_1&amp_sm_csrfKey_eq_ecdf18a74162ed8b87d98d280f161ff6_qt_ style_eq__qt_color_dd_rgb(255_co_255_co_255)_sm_text-decoration_dd_none_sm_background_dd_rgb(45_co_71_co_96)_sm_font-size_dd_11px_sm_font-weight_dd_500_sm_text-align_dd_center_sm_vertical-align_dd_middle_sm_padding_dd_0px 7px_sm_border_dd_0px_sm_line-height_dd_18px_sm__qt_ rel_eq__qt__qt__gt__lt_span_gt_ _lt_/span_gt_Like this_lt_/a_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tThen it wouldn_t_t be importing a 3js file which is the point to the example. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe 3js file is just a box with a UV mapped texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-27T18:11:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI mean with simple coordinates..like 0_co_ 1 _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut by the way I see that your files comes from 3dsmax. Why not using our exporter then?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-27T18:53:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt_ _lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_I mean with simple coordinates..like 0_co_ 1_lt_/span_gt__lt_span style_eq__qt_line-height_dd_1.6_sm__qt__gt_ _lt_/span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ style_eq__qt_line-height_dd_1.6_sm__qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _qt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1310.91px_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm__qt__gt_\n\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_line-height_dd_1.6_sm_white-space_dd_normal_sm_background-color_dd_rgb(255_co_255_co_255)_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tOOOOh... I will work on that. Currently trying to finish the proof of concept to work which leads me to my second item.. \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_line-height_dd_1.6_sm_white-space_dd_normal_sm_background-color_dd_rgb(255_co_255_co_255)_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t_qt_But by the way I see that your files comes from 3dsmax. Why not using our exporter then?_qt_\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_line-height_dd_1.6_sm_white-space_dd_normal_sm_background-color_dd_rgb(255_co_255_co_255)_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tCurrently I cant get the time from our 3D guys to redo the models I have. \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_line-height_dd_1.6_sm_white-space_dd_normal_sm_background-color_dd_rgb(255_co_255_co_255)_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\tSo I have turned this into mental exercise. I am not sure I needed to re- remember all this but hey.. _lt_br /_gt_\n\t\tThe UVS are my last struggle looking at older examples and documentation to get this done. \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_line-height_dd_1.6_sm_white-space_dd_normal_sm_background-color_dd_rgb(255_co_255_co_255)_sm_margin-bottom_dd_0px_sm__qt__gt_\n\t\t \n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-27T21:07:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tRegarding your 3D guys_co_ they literally just need to click on a button _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-28T15:05:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there any info on how the uvs correlate to the vertexes/faces?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your example above for a simple plane there are 2  triangles and 4 vertices and 4\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUV pairs. The UV pairs are tied to ? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(249_co_38_co_114)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_uvs_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt__qt__dd_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(249_co_38_co_114)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm__qt__gt_[_lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_1_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_1_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_0_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_1_lt_/span_gt__co_ _lt_span style_eq__qt_color_dd_rgb(174_co_129_co_255)_sm__qt__gt_1_lt_/span_gt_]_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(248_co_248_co_242)_sm_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre-wrap_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(35_co_36_co_31)_sm__qt__gt__co__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I am trying to understand is for a box there are 6 square faces so 24 UV pairs\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand 12 faces and only 8 vertices. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo how does Babylon join UV pairs to this group?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is it expecting? In what order. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try to draw something up on paper and this last clue should help me finish this code. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-29T18:51:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tuv pairs are tied to position\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfirst position associated to first uv pair and so on.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo map 24 differents uv pairs you cannot have 8 vertices. You need 24 vertices\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-29T21:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWant to be 100% clear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are talking _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_20.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_positions not indices.  Funny to conserve space they wouldn_t_t have a uv indicie group. Alrightie then.  Can add positions to make this work._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_13px_sm_line-height_dd_20.8px_sm__qt__gt_I experimented a bit and its not working. I created 4 vertex faces after the top and bottom were vertexes were defined. That would be the first 8 positions. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_13px_sm_line-height_dd_20.8px_sm__qt__gt_next for is the right side_co_ etc. I set them all to uv 0_co_0 1_co_0  0_co_1 1_co_1 _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_13px_sm_line-height_dd_20.8px_sm__qt__gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UDUFX%2391_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UDUFX#91_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_13px_sm_line-height_dd_20.8px_sm__qt__gt_I put in 48 vertices. Each vertex has a UV value pair for the six faces. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-05-30T12:40:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot sure whether the post from me from a previous topic sheds any light on what you are trying to achieve or not but it might be worth a look.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI used the playground to create two Cubes_co_ one uses your CreatePolyhedron method and one the new CreateBox method. Checking the VertexData for both shows the difference.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn the CreateBox method there are 24 positions and 24 normals_co_ since each of the 8 vertices is listed 3 times_sm_ once for each face it belongs to and each of the 6 normals (one per face) is listed 4 times once for each vertex on that face. The UVs are also listed 24 times each one matched in 1-1 correspondence with the positions.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIn the CreatePolyhedron method there are 8 positions and 8 normals one for each of the 8 vertices. The normals are now not normal to a face but are formed from the 3 face normals at each vertex. This method of storing the VertexData is more efficient since it uses a third less memory but does not contain sufficient data for the uvs to be applied.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1H7L5C%2329_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1H7L5C#29_lt_/a_gt_ shows the two cubes and the normals at the vertices. The lower one is made using the CreateBox method and all faces contain the image in a proper way.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tInterestingly the use of .convertToFlatShadedMesh()_sm_ produces 36 positions since it creates two facets per face and then 4 vertices belong to 6 facets and 4 vertices belong to 4 facets and there are 36 normals. The UV array also has 36 entries but I presume they do not now match correctly the positions.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tRemove the comment from line 70 in the playground above and see the difference.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis was the topic\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17691-texture-on-individual-faces-of-a-polyhedron/?do_eq_embed&amp_sm_embedComment_eq_99662&amp_sm_embedDo_eq_findComment#comment-99662_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-05-30T17:31:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks a bunch for the reply. I dont have the environment set up to check this out in a debugger but I hope this will connect the dots. In the end I will be really happy to understand this part of the puzzle. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]