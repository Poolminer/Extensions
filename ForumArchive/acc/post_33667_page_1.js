[{"Owner":"randomdog","Date":"2017-10-26T20:07:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey folks_co__lt_br /_gt_\n\tfirst of all_dd_ thank you for this great forum. It came to the rescue a few times_co_ now. So_co_ thanks everyone_co_ who_t_s participating._lt_br /_gt__lt_br /_gt_\n\tI_t_m currently working on an idea_co_ where I would like to project a spherical panorama texture to a mesh from inside (meaning from the viewpoint). Similar to a standard VR-Viewer_co_ where the texture is mapped on a sphere from inside.  But in my case I would like to map it on the actual scene-mesh which I get from 3dsmax. _lt_br /_gt_\n\tNow_co_ I know_co_ that I could create the UV_t_s or bake the texture in 3dsmax_co_ but I want to switch between two camera positions and therefore change the projected texture and the center of the spherical projection._lt_br /_gt__lt_br /_gt_\n\tI already got camera mapping to work with a planar image like this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#203BJM%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#203BJM#2_lt_/a_gt_ but that_t_s not exactly what I need. My image has to get spherical wrapped around the camera AND stay in position_co_ while the camera moves around._lt_br /_gt__lt_br /_gt_\n\tIs this understandable?_lt_br /_gt__lt_br /_gt_\n\tI could provide a small scene_co_ which I need to create_co_ first_co_ as my actual scene is way too big and consists of too many elements. But maybe someone already got a solution or an idea. I_t_m not even sure_co_ if this is possible with babylonjs-coordinates modes or has to be solved with a custom shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-26T23:09:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIs the SphericalMode something that can work? _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#203BJM%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#203BJM#7_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"randomdog","Date":"2017-10-27T08:10:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI already tried this_co_ but as it is not one mesh_co_ with a spherical uv-mapping_co_ but several meshes with different mappings_co_ just changing the mapping mode_co_ won_t_t work._lt_br /_gt__lt_br /_gt_\n\tHere are some pictures of the problem. First is the rendering_co_ second the mesh in babylon and third the mesh with a diffuse-texture_co_ set to spherical_mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I really want to archieve is a look like the rendering_co_ but projected on the meshes_co_ so when I move a bit to the side_co_ the Panorama gets realistically distorted.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/rendering.jpg.545b1e73208a4e34aa6d0e094b8aa02f.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15443_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/rendering.thumb.jpg.1c0b1f16bef18ea78d620e5ad784b7a8.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_rendering.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/meshes.jpg.51022e6a01318587d42c11c908f03ab1.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15444_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/meshes.thumb.jpg.375a7c7e14e07dc458ae349e54ada8e1.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_meshes.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/mapping.jpg.65cf0af269b98661f84a196a634852f5.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15445_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/mapping.thumb.jpg.8c0c3883c6337ca721142104c7c909c6.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_mapping.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-27T15:40:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou have to use the reflectionTexture and not the diffuseTexture as only the first one can have different texturing mode\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"randomdog","Date":"2017-11-03T15:20:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_. I already tried that._lt_br /_gt__lt_br /_gt_\n\tIt took me a while_co_ but I created a Playground for this issue._lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IDGHBP%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IDGHBP#5_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tAs you can see_co_ the reflection doesn_t_t bring the right result as it moves with the camera and is mirrored._lt_br /_gt__lt_br /_gt_\n\tWhat I actually want_co_ is the projected Texture on the meshes to look exactly like the spherical panorma itself_co_ as if there wasn_t_t any geometry at all and so when you move a bit with the arrow-keys_co_ you can see_co_ that the texture is actually just projected on the surfaces from the initial point of the camera.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-03T16:34:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis line does nothing_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_code_gt_panomaterial.emissiveTexture.coordinatesMode _eq_ BABYLON.Texture.SPHERICAL_MODE_sm__lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_as only reflectionTexture can have special reflection mode _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Regarding your other point it is a bit tough _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ as you want spherical projection on non spherical surface. I have no good answer here_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_I tried with PROJECTION_MODE but this is not correct either_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-03T16:35:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOnly option I can see_dd_ do the mapping in a tool like blender or 3dsmax and bake it directly into the material itself\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"randomdog","Date":"2017-11-03T16:41:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyes_co_ I_t_m biting my teeth on this one_co_ for a while now._lt_br /_gt_\n\tI already considered texture-baking_co_ but in my actual scene I will have a few camera-points which the user can move between and I need to change the spherical mapping to a different texture and center point on the fly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried to solve it with a glsl shader_co_ where I was getting close_co_ but not 100%. Problem there was to spherical wrap the texture around the viewpoint and that I actually don_t_t have any knowledge of glsl. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]