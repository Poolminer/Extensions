[{"Owner":"kurhlaa","Date":"2018-01-20T20:54:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I create a cube in Blender scene_co_ add alpha transparency_co_ then export it as *.babylon file - cube has extra diagonals_co_ which badly affects how transparent cube looks. How they can be removed?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/diagonals.png.053c0e67686ee6e6db26fc49f29e0812.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16700_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/diagonals.thumb.png.72bb31b95774b062c8b00f01bf5a00de.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_diagonals.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-20T21:13:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t see any extra diagonals - remember that squares are drawn as two trianges on a normal cube.  Looks like your normals may be backwards on some triangles (actually it *looks* like cull_face or depth_test is not enabled on gl).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you share your exported .babylon in a PG?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kurhlaa","Date":"2018-01-20T22:10:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202085_qt_ data-ipsquote-contentid_eq__qt_35189_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516482829_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t54 minutes ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you share your exported .babylon in a PG\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHere is an example_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#MPS90E_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#MPS90E_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLeft yellow box is imported and right blue box is a native BJS box.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy _qt_extra_qt_ diagonals I mean extra visible_co_ because they are invisible with BJS native cube.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-20T22:46:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgood PG.  I_t_ve had similar issues that were fixed by checking face normals in Blender and using the Blender Render Engine instead of Cycles to check.  If that_t_s not it then perhaps share the blend.  Cheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kurhlaa","Date":"2018-01-21T16:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202091_qt_ data-ipsquote-contentid_eq__qt_35189_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516488362_qt_ data-ipsquote-userid_eq__qt_25365_qt_ data-ipsquote-username_eq__qt_brianzinn_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ brianzinn said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tsimilar issues that were fixed by checking face normals in Blender and using the Blender Render Engine instead of Cycles to check.  If that_t_s not it then perhaps share the blend\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAll face normals look the same_co_ and _qt_blender render_qt_ is a default in my case. My demo blend file attached\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16714_qt__gt_scene2.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-01-21T18:06:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou_t_re right -- face normals are good in Blender.  I would guess that it_t_s something in the babylon exporter/importer.  Should be somebody about tomorrow that can answer your question.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kurhlaa","Date":"2018-01-24T19:40:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnybody?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-25T16:20:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI took your blend_co_ fixed the light_co_ and added a plane also with the same material.  I got rid of the edgesplit modifier on your cube_co_ &amp_sm_ added flat shading thru the exporter custom property.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also set the clear color_co_ &amp_sm_ lowered the alpha a little.  I get similar results from both Blender &amp_sm_ BJS.  The colors are not a great match (probably differences in lighting implementation)_co_ but cannot produce your results.  The color of both meshes is much less yellow_co_ showing color blending.  _lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_16766_qt_ data-fileid_eq__qt_16766_qt_ rel_eq__qt__qt__gt_transparent.blend_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlender top / sandbox bottom.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/transparent.jpg.ba594376a2bee0a9939aefe6699ce6e4.jpg_qt_ data-fileid_eq__qt_16765_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16765_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/transparent.thumb.jpg.bccd161e372fca2e3be8df9f37bf49b0.jpg_qt_ alt_eq__qt_transparent.thumb.jpg.bccd161e372fca2e3be8df9f37bf49b0.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kurhlaa","Date":"2018-01-25T20:25:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt__co_ and you have never seen these diagonals like me? I_t_ve exported your Blender file info PG - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#MPS90E%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#MPS90E#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I get (yellow box has diagonals visible)_dd_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/diagonals2.png.51c808f0d3c4e546ba04c473662c18df.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16767_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/diagonals2.png.51c808f0d3c4e546ba04c473662c18df.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_diagonals2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-25T21:31:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ you never said you were turning off backface culling_co_ and it was not set in the .blend (it is not easy to find where).  To isolate between a material problem_co_ I just set the mesh builder box to the material from the export.  It is a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#MPS90E%232_qt_ rel_eq__qt_external nofollow_qt__gt_geo issue_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe exported cube has 36 vertices (6 per side_co_ which is correct for flat shading).  I turned on debug_co_ switched to meshes section.  When I click mesh builder box_co_ I see properties I have never heard of set (_t_hasVertexAlpha_t__co_ &amp_sm_ _t_infiniteDistance_t_).  The exported cube has no values for these.  I am not really sure what I would even set them to_co_ based on the blend.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ should these not have a default when not in a .babylon?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-25T22:32:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tdefault values are set so the properties you mentioned as no effect _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-26T15:53:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ first I just added those in the PG_co_ and did not fix_co_ so forget that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe meshbuilder only had 24 vertices_co_ so I changed back to the edgesplit modifier &amp_sm_ also switched to no back face culling.  I exported with the latest addin &amp_sm_ pasted with line breaks for more readability.  Same result_co_ so I did a run where I also wrote what the meshbuilder had for positions_co_ normals_co_ &amp_sm_ indices to console.  Here is a _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#MPS90E%234_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_ with the results of the console logs are in comments.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will notice that though both positions are -1 &amp_sm_ 1_co_ and normals are -1_co_0_co_1_co_ the order / indices are not the same.  I did not manually match up the 2 sets to see if they are exactly the same_co_ but you can if you wish.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you paste the values for the meshbuilder box into the .babylon_co_ you get the desired result.  I do not know why_co_ but it seems this effect is dependent on the order of specify vertices.  The blender exporter writes vertices as they are provided_co_ so I see no way to fix this on my end.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]