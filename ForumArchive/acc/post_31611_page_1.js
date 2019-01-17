[{"Owner":"SebKaine","Date":"2017-07-13T10:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to _lt_strong_gt_avoid using a JSON base format_lt_/strong_gt_ in order to reduce assets size to the maximum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to know what is the_lt_strong_gt_ best geometry compression_lt_/strong_gt_ supported by babylon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks that babylon support _lt_strong_gt_gltf._lt_/strong_gt_ So i guess we can use _lt_strong_gt_Open3dgc_lt_/strong_gt_ compression ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/KhronosGroup/glTF/wiki/Open-3D-Graphics-Compression_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/KhronosGroup/glTF/wiki/Open-3D-Graphics-Compression_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat other options do we have if we want to use _lt_font color_eq__qt_#222222_qt__gt__lt_b_gt_LZMA _lt_/b_gt_compression ? OpenCTM ? Draco ?_lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//openctm.sourceforge.net/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//openctm.sourceforge.net/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#222222_qt__gt__lt_a href_eq__qt_https_dd_//github.com/google/draco_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/google/draco_lt_/a_gt__lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#222222_qt__gt_Thanks for your time !_lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#222222_qt__gt_Cheers _lt_/font_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_font color_eq__qt_#222222_qt__gt_SK_lt_/font_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-07-13T15:29:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou should know_co_ by a very wide margin_co_ using geo indexing is the most compact way to represent geometry.  BJS also uses indexing internally on the GPU_co_ and the JSON exporters all attempt to reduce the number of vertices this way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat said_co_ JSON is a _qt_Zero Pig_qt_.  After indexing_co_ you could get about 10% more from a .babylon file_co_ if JSON allowed the omission leading 0_t_s (Javascript is ok with it).  All normals_co_ UV_co_ &amp_sm_ matrix weights are values which do not exceed 1.  If I knew who to bitch to about this bush league practice_co_ I would.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother thing a .babylon file does is to pack matrix indexes 4 in 1.  This limits the number of bones / skeleton to 256_co_ but not really a problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom the Blender exporter code base_co_ I have fashioned an inline-geometry javascript exporter_co_ Tower of Babel.  It does not print leading zeros_co_ and along with the JSON exporter_co_ does not print unnecessary signs_co_ decimals_co_ and decimal points.  Beyond that_co_ it inlines 2 small functions to the .js file_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function CONTIG(array_co_ offset_co_ begin_co_ end) {\n    for(var i _eq_ 0_co_ len _eq_ 1 + end - begin_sm_ i &lt_sm_ len_sm_ i++) {\n        array[offset + i] _eq_ begin + i_sm_\n    }\n}\nfunction REPEAT(array_co_ offset_co_ nRepeats_co_ val) {\n    for(var i _eq_ 0_sm_ i &lt_sm_ nRepeats_sm_ i++) {\n        array[offset + i] _eq_ val_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe exporter analyses the data_co_ for some of the datatypes_co_ and replaces ascending or repeating values with these functions.  The CONTIG is also heavily used by my implementation of morphing.  You can have different areas of a mesh morph independently  like_dd_ face_co_ eyes_co_ left hand_co_ right hand_co_ breasts.  Each area needs a sub-index.  I always define these in ascending order.  It massively improves the representation of morph targets.  Beyond just formating_co_  a .js file allows you to have mesh subclassing &amp_sm_ makes dynamic read ahead possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe output  .js file is very readable_co_ with real spaces for indenting.  It is assumed that you would uglify it for distribution.  Finally_co_ there really is not ANY load.  The file is added as a script.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-07-13T15:36:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\talso_co_ I forgot_co_ .babylon &amp_sm_ .js files are text based.  That means that they are going to be zipped during transmission.  You need to take that into account to see if after you integrate one of these you mention what you are really saving.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-13T15:41:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDefinitely. The .gltf or .babylon will be compressed A LOT during transmission\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also think about using binary version of .babylon or .glb as well\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDraco is also on my todo list _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SebKaine","Date":"2017-07-13T16:46:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Thanks a lot for all the great feeback guys ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_ so there are already a lot of optimization done._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_I work in Maya and i was wondering what would be the _lt_strong_gt_safest / most efficient geo _lt_/strong_gt_format you would recommand to use with babylon._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_The problem is that i will use a lot of exotic stuff like _lt_strong_gt_bones / morph / vertex color / faces sets_lt_/strong_gt_ etc ..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_In theory i first set my focus on _lt_strong_gt_.glTF _lt_/strong_gt_because it looks to be a great idea. But after playing with _lt_strong_gt_collada2gltf.exe_lt_/strong_gt_ i am not sure it_t_s the best idea anymore ..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_The blender exporter looks better but there is a work in progress feeling in all this .glTF things ... _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_So does json babylon format is a better bet ? what is the most up to date / full exporter i can find to send my maya .FBX into babylon i see several path but not sure which one to take ?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_(I would love to avoid using collada .dae cause the Maya exporter is always full of surprise ... so does collada2gltf.exe)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_The different horse i can see are those one_co_ but which one is a winner ?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ Blender -&gt_sm_ gltf_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ Blender -&gt_sm_ babylon _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ Clara.io -&gt_sm_ gltf_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ Clara.io -&gt_sm_ babylon _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ fbx2babylon tool -&gt_sm_ babylon  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ 3dsmax -&gt_sm_ babylon _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIntuitively while glTF looks to be a cool concept i_t_m afraid that the _lt_strong_gt_quality of exporter is not bulletproof._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would put my money on that horse  _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/FBX_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your Time \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSK\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-13T17:31:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would bet on_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ 3dsmax -&gt_sm_ babylon _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_Maya -&gt_sm_ FBX -&gt_sm_ Blender -&gt_sm_ babylon_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#272a34_sm__qt__gt_as both exporters are really good_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SebKaine","Date":"2017-07-13T21:05:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks a lot for your answer Deltakosh _co_ i will then set on blender exporter as a starting point !\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]