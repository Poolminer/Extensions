[{"Owner":"Gugis","Date":"2013-10-21T04:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is there any way to attach 3D object to bone? For example attaching sword to hand_co_ so sword would move along hand._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-10-21T07:01:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use parenting (sword.parent _eq_ hand). Doing that the sword will inherit all hand_t_s transformations_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vbillet","Date":"2013-11-01T15:24:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I Assume _lt_em_gt__lt_strong_gt_sword_lt_/strong_gt__lt_/em_gt_ is a mesh (BABYLON.Mesh) and _lt_em_gt__lt_strong_gt_Armature_lt_/strong_gt__lt_/em_gt_ is a skeleton (BABYLON.Skeleton) containing one bone (BABYLON.bones)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In _lt_em_gt__lt_strong_gt_engine.runRenderLoop_lt_/strong_gt__lt_/em_gt_ function_co_ I use the following code _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_engine.runRenderLoop(function() {\tsword.parent_eq_Armature.bones[0]_sm_\tscene.render()_sm_})_sm__lt_/pre_gt__lt_p_gt_It result the following error _dd_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(255_co_0_co_0)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt_Uncaught TypeError_dd_ Object [object Object] has no method _t_isEnabled_t__lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And if I use the following code _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_engine.runRenderLoop(function() {\tscene.render()_sm_\tsword.parent_eq_Armature.bones[0]_sm_})_sm__lt_/pre_gt__lt_p_gt_It result the following error _dd_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(255_co_0_co_0)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt_Uncaught TypeError_dd_ Object [object Object] has no method _t__needToSynchonizeChildren_t__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(255_co_0_co_0)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In both cases_co_ sword does not follow bone_t_s motion._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any Idea about this ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-01T15:39:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_a bone cannot be attached this way. You have to set sword.skeleton_eq_skeleton_lt_/p_gt__lt_p_gt_but you also have to define matrices weights and indices into your sword_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-01T15:40:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-bones-and-skeletons_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vbillet","Date":"2013-11-01T16:30:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_13239_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_1759_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1383320346_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_a bone cannot be attached this way. You have to set sword.skeleton_eq_skeleton_lt_/p_gt__lt_p_gt_but you also have to define matrices weights and indices into your sword_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_How can I do this ?_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_matricesWeights _eq_ ???_sm_floatIndices _eq_ ???_sm_sword.setVerticesData(matricesWeights_co_ BABYLON.VertexBuffer.MatricesWeightsKind_co_ false)_sm_sword.setVerticesData(floatIndices_co_ BABYLON.VertexBuffer.MatricesIndicesKind_co_ false)_sm_ _lt_/pre_gt__lt_p_gt_It_t_s not easy to understand._lt_/p_gt__lt_p_gt_Is it 4 float per vertex ? only 4 floats ?_lt_/p_gt__lt_p_gt_finally an example could be fine ...._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vbillet","Date":"2013-11-01T16:59:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for your help._lt_/p_gt__lt_p_gt_Finally here is my code _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_function mount(obj_co_ske_co_boneName){\tmatricesWeights _eq_[]_sm_\tfloatIndices _eq_[]_sm_        boneIndice_eq_-1_sm_\t// Find bone_t_s Indice\tfor (ii_eq_0_sm_ii&lt_sm_ske.bones.length_sm_ii++)\t{\t\tif (ske.bones[ii].name_eq__eq_boneName)\t\t{\t\t\tboneIndice_eq_ii_sm_\t\t\tbreak_sm_\t\t}\t}        if (boneIndice_eq__eq_-1) {console.error(_qt_Unable to find bone _dd_ _qt_+boneName)_sm_ return_sm_}\t// Build matrices and indices buffers.\tfor (ii_eq_0_sm_ii&lt_sm_obj._totalVertices_sm_ii++)\t{\t\tmatricesWeights[ii*4+0]_eq_1.0_sm_\t\tmatricesWeights[ii*4+1]_eq_0.0_sm_\t\tmatricesWeights[ii*4+2]_eq_0.0_sm_\t\tmatricesWeights[ii*4+3]_eq_0.0_sm_\t\tfloatIndices[ii*4+0]_eq_boneIndice_sm_\t\tfloatIndices[ii*4+1]_eq_boneIndice_sm_\t\tfloatIndices[ii*4+2]_eq_boneIndice_sm_\t\tfloatIndices[ii*4+3]_eq_boneIndice_sm_\t}        // Mounting the object on the skeleton        obj.skeleton _eq_ ske_sm_\tobj.setVerticesData(matricesWeights_co_ BABYLON.VertexBuffer.MatricesWeightsKind_co_ false)_sm_\tobj.setVerticesData(floatIndices_co_ BABYLON.VertexBuffer.MatricesIndicesKind_co_ false)_sm_}mounted _eq_ false_sm_engine.runRenderLoop(function() {\tif ((sword!_eq_undefined) &amp_sm_&amp_sm_ (Armature!_eq_undefined)) \t{ \t\tif (!mounted) {\t\t\tmount(sword_co_Armature_co__qt_Bone_qt_)_sm_\t\t\tmounted_eq_true_sm_\t\t}\t}\tscene.render()_sm_})_sm__lt_/pre_gt__lt_p_gt_And that_t_s done. _lt_/p_gt__lt_p_gt_@TODO _dd_ unmount function_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-01T18:43:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_EXCELLENT _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Could you mark the question as answered?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ To unmount_co_ just call sword.skeleton _eq_ null _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"vbillet","Date":"2013-11-02T14:10:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_13259_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_1759_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1383331396_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Could you mark the question as answered?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I can_t_t mark it as answered._lt_/p_gt__lt_p_gt_Could it be mark as answered ? Yes .... But.... NO._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I want to mount a bow or a crossbow on my bone_co_ it might be difficult_co_ because my bow need also a skeleton. This skeleton will be used for fire motion. Can we have multiple skeleton for a single mesh ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-02T16:56:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can have only one skeleton but with many bones (one for bow_co_ one for sword)_lt_/p_gt__lt_p_gt_A mesh can only have one skeleton but you can change the active skeleton when you want_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]