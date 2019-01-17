[{"Owner":"adam","Date":"2016-03-25T22:05:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d like to be able to merge meshes of different colors and have them retain their colors.  Is that possible?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-25T23:08:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill I need to color the meshes through vertexData rather than the materials?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-25T23:39:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried setting the colors through vertexData.  The colors aren_t_t on the correct faces after the merge though.  I_t_ll create a PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T00:53:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI got it working here with simple box meshes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_Meshes that are complex are not working.  I_t_m thinking my colorVertices function needs some work._lt_/s_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T00:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_If you uncomment the colorVertices function on line 67 in this PG_co_ it won_t_t load_dd__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2317_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#17_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_and I get this error in the console - _qt_WebGL_dd_ too many errors_co_ no more errors will be reported to the console for this context._qt__lt_/s_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T01:16:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI simplified the PG and made sure all the meshes had vertex color data and it seems to be working_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_Now I just have to figure out why it isn_t_t working correctly in my project! _lt_/s_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T01:34:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI got it to work in my project.  Now I need to figure out how to set separate vertex color data for cloned meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the issue here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to make the 3 cloned cylinders separate colors_co_ but they end up being the last color set because they are sharing the same vertex color data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-26T07:20:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnot sure to understand well what you are trying to achieve_co_ but have you taken a look at MeshBuilder.CreateCylinder with the parameters (used together) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsubdivisions_co_ hasRings_co_ faceColors ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] _dd_ example \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/?do_eq_embed&amp_sm_embedComment_eq_106379&amp_sm_embedDo_eq_findComment#comment-106379_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT 2] ooops_co_ it eems you need a tube instead of a cylinder\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI intend to implement the _qt_hasRings_qt_ feature also for the tube... some day (too busy currently). Actually_co_ I_t_ll do it for the ribbon (_qt_hasStripes_qt_ ?)_co_ then it will be available for any ribbon based shape\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-03-26T09:29:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122146_qt_ data-ipsquote-contentid_eq__qt_21469_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458943513_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_d like to be able to merge meshes of different colors and have them retain their colors.  Is that possible?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIn a project I am playing with I wanted the same thing. In the end I settled for not merging the meshes but _t_gluing_t_ them together by giving them a common parent. This was good enough for what I wanted but if you want to try merging meshes of different colours and retain their colours then here are somethings I though about but never attempted to do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA merged mesh is a single mesh so can have only one material applied unless you use _lt_a href_eq__qt_https_dd_//blogs.msdn.microsoft.com/eternalcoding/2013/07/10/babylon-js-using-multi-materials/_qt_ rel_eq__qt_external nofollow_qt__gt_multi-materials_lt_/a_gt_ in this case how do you assign correct vertices to correct material?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is a tutorial on writing a custom mesh merge _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_Merge_Meshes#use-your-own-merge-function_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/How_to_Merge_Meshes#use-your-own-merge-function_lt_/a_gt_  Perhaps this could be adapted but again you would need to assign the correct uvs to the correct vertices and in this case you do have access to which colour originally went where but how do you keep and assign the different colours. Would one way be to set a colour map of some sort_co_ ie u from 0 to 0.25 read red_co_ 0.25 to 0.5 read green etc? At this point I am not even sure I know what I am talking about rather it is some vague idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis may have helped or hindered you. As I said I went for a different option in the end so good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T11:06:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122179_qt_ data-ipsquote-contentid_eq__qt_21469_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458984589_qt_ data-ipsquote-userid_eq__qt_14282_qt_ data-ipsquote-username_eq__qt_JohnK_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ JohnK said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIn the end I settled for not merging the meshes but _t_gluing_t_ them together by giving them a common parent.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_ve explored this and wasn_t_t happy with the way the transparency looked.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_122172_qt_ data-ipsquote-contentid_eq__qt_21469_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1458976837_qt_ data-ipsquote-userid_eq__qt_5453_qt_ data-ipsquote-username_eq__qt_jerome_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ jerome said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tnot sure to understand well what you are trying to achieve\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI need to be able to clone/copy models that I have created in Blender_co_ make them transparent_co_ color them differently_co_ and merge them together.  I feel like I am 99% of the way to achieving this.  I just need for the cloned models to be able to have their own vertex color data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T11:39:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried creating new meshes instead of cloning (lines 67-69_co_ 91-93).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried copying the geometry after I cloning the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo luck.  I_t_m not sure why it keeps referencing the same vertex color data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-26T15:56:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI finally figured it out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21XUBV%2326_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21XUBV#26_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.geometry.copy(BABYLON.Geometry.RandomId()).applyToMesh(clonedMesh)_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-27T15:30:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_d like to be able to set alpha of the vertex colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere I modified my colorVertices function so that it takes an alpha value and then I attempt to set the two end boxes to alpha of .5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSetting the alpha of the vertex color doesn_t_t change the transparency though.  Shouldn_t_t that be possible?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-27T15:52:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/AbstractMesh#hasvertexalpha-boolean_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.3/AbstractMesh#hasvertexalpha-boolean_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tline 57 _dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#9_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-27T16:03:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thasVertexAlpha works correctly when the meshes aren_t_t merged.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter merging_co_ the middle box is no longer opaque (viewing from bottom).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-27T17:07:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tas you can see the bottom of the blue box through the green box_co_ I think it_t_s still transparent\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-27T17:13:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe middle box is supposed to have no transparency.  The two end boxes are supposed to have .5 transparency.  (merged version at every view angle) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see the difference when you view the non-merged version here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then the merged version_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#28XVKW%2311_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_http_dd_//babylonjs-playground.com/#28XVKW#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-27T18:43:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toops weird indeed\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess it_t_s because when a mesh has alpha (whatever the alpha value on some vertices)_co_ it_t_s globally processed as a full transparent mesh... so no z-sort for the facets between them\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-03-27T18:49:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis isn_t_t a show stopper for me.  I_t_ll just keep my opaque meshes separate from my merged transparent meshes.  It would have been nice to merge them all together.  No big deal though. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]