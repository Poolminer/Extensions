[{"Owner":"asperger","Date":"2018-08-19T19:27:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there any way to make a high quality glowing sphere?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt first I thought I could use the glowlayer but that only seems to work for imported meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#LRFB2D%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#LRFB2D#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen last  experiment with the HighlightLayer by increasing the blur size_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%23137_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#137_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow with the latter the quality is really bad. Any recommendation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did manage to create a _lt_strong_gt_shader _lt_/strong_gt_that works with three.js but im not sure how to translate it to make it work with babylon.js._lt_br /_gt_\n\tIf anyone can manage to make it work with babylon then we have a high quality  glow thats fast.\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#f5f5f5_sm_color_dd_#333333_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#4b83cd_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#8190a0_sm__qt__gt_id_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__eq__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#448c27_sm__qt__gt_vertexShader_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#8190a0_sm__qt__gt_type_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#448c27_sm__qt__gt_x-shader/x-vertex_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_uniform vec3 viewVector_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_uniform float c_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_uniform float p_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_varying float intensity_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_void main() _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_vec3 vNormal _eq_ normalize( normalMatrix * normal )_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_    vec3 vNormel _eq_ normalize( normalMatrix * viewVector )_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_    intensity _eq_ pow( c - dot(vNormal_co_ vNormel)_co_ p )_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_    _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_gl_Position _eq_ projectionMatrix * modelViewMatrix * vec4( position_co_ 1.0 )_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&lt_sm_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#4b83cd_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\t \n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&lt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#4b83cd_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#8190a0_sm__qt__gt_id_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__eq__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#448c27_sm__qt__gt_fragmentShader_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#8190a0_sm__qt__gt_type_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#448c27_sm__qt__gt_x-shader/x-vertex_lt_/span_gt__lt_span style_eq__qt_color_dd_#777777_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&gt_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_ _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_uniform vec3 glowColor_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_varying float intensity_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_void main() _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_    vec3 glow _eq_ glowColor * intensity_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_gl_FragColor _eq_ vec4( glow_co_ 1.0 )_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#333333_sm__qt__gt_}_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&lt_sm_/_lt_/span_gt__lt_span style_eq__qt_color_dd_#4b83cd_sm__qt__gt_script_lt_/span_gt__lt_span style_eq__qt_color_dd_#91b3e0_sm__qt__gt_&gt_sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-08-19T20:38:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe glowLayer works fine with created meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#IEW571_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#IEW571_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"asperger","Date":"2018-08-19T20:42:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWeird. It seems I didnt see that part in the documentation_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_glowLayer.addIncludedOnlyMesh(mesh)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Interesting. I can also control the intensity and texture quality. Pretty great. The performance is far better than that of the HighlightLayer. _lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2018-08-19T20:54:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_225532_qt_ data-ipsquote-contentid_eq__qt_39519_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1534711334_qt_ data-ipsquote-userid_eq__qt_32541_qt_ data-ipsquote-username_eq__qt_asperger_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 minutes ago_co_ asperger said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWeird. It seems I didnt see that part in the documentation_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_glowLayer.addIncludedOnlyMesh(mesh)_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Interesting. I can also control the intensity and texture quality. Pretty great. The performance is far better than that of the HighlightLayer. _lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIt will still work without that function. You might have forgotten setting an emissiveColor?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-20T01:26:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_225535_qt_ data-ipsquote-contentid_eq__qt_39519_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1534712988_qt_ data-ipsquote-userid_eq__qt_32541_qt_ data-ipsquote-username_eq__qt_asperger_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ asperger said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe problem is that the glow layer always seems to be in the foreground.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou can put things in front of the glow layer using the rendering group id (GlowLayer defaults to -1)_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#IEW571%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#IEW571#1_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#rendering-groups_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#rendering-groups_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]