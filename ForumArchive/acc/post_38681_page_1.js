[{"Owner":"Nabroski","Date":"2018-07-06T15:11:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello i_t_m exploring the matrix func. inside Babylonjs_co_ a matrix lib can be easy_lt_br /_gt_\n\tsee here _dd_ _lt_a href_eq__qt_http_dd_//glmatrix.net/docs/module-mat4.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//glmatrix.net/docs/module-mat4.html_lt_/a_gt__lt_br /_gt_\n\tor very hard see here _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.matrix_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.matrix_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI kind of understand where the problem _lt_span_gt_occur_lt_/span_gt_s_co_ after unsucessfull 3h_co_ i think i might be better to ask the community._lt_br /_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T15:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you tell us more about what you want to do? Seems unclear to me _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust assuming the problem is in the matrix_co_ let_t_s see what we have here_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_let nR _eq_ BABYLON.Matrix.Identity()_sm_\nnR_eq_\tBABYLON.Matrix.RotationY(newPosY)_sm_\nrM_eq_\tBABYLON.Matrix.RotationX(newPosX)_sm_\nrM.multiplyToRef(nR_co_rM)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis cannot work _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ all xxxToRef functions are used to avoid creating new objects and instead reuse existing one. So for instance the matrix.multiply function will return a NEW matrix where the multiplyToRef will use the last parameter to store the result and thus avoid creating a new matrix_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_So the correct code should be in your case_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let final _eq_ BABYLON.Matrix.Identity()_sm_\nnR _eq_\tBABYLON.Matrix.RotationY(newPosY)_sm_\nrM _eq_\tBABYLON.Matrix.RotationX(newPosX)_sm_\n\n// Multiply rM by nR and store the result in final\nrM.multiplyToRef(nR_co_final)\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf you don_t_t want xxtoRef functions_co_ you can use this code (probably easier to read but less efficient as it will put pressure on the GC)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_nR _eq_\tBABYLON.Matrix.RotationY(newPosY)_sm_\nrM _eq_\tBABYLON.Matrix.RotationX(newPosX)_sm_\n\n// Multiply rM by nR and store the result in final\nlet final _eq_ rM.multiply(nR)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-06T18:26:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_lt_br /_gt_\n\tthank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti try simple to multiply to matrieces ( how hard can it be ) _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//en.wikipedia.org/wiki/Rotation_matrix#Basic_rotations_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//glmatrix.net/docs/mat4.js.html#line584_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//glmatrix.net/docs/mat4.js.html#line584_lt_/a_gt_ _lt_strong_gt_multiply by_lt_/strong_gt_ _lt_a href_eq__qt_http_dd_//glmatrix.net/docs/mat4.js.html#line541_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//glmatrix.net/docs/mat4.js.html#line541_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let rMat _eq_ mat4.create()_sm_ \nmat4.identity(rMat)_sm_\n\ncanvas.addEventListener\n\nconst nRot _eq_ mat4.create()_sm_\nmat4.rotateY(nRot_co_ nRot_co_ (deltaX *0.5)*0.01 )_sm_\nmat4.rotateX(rMat_co_ rMat_co_ (deltaY *0.5)*0.01 )_sm_\nmat4.multiply(rMat_co_ nRot_co_rMat)_sm_\n\ncanvas.addEventListener end\n\nrequestAnimationFrame\n\ngl.uniformMatrix4fv(uLocRot_co_ false_co_ rMat)_sm_\n\nrequestAnimationFrame end\n // and it_t_s working_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt__lt_span_gt_Yes_co_ but the Matrix resets its self_co_ see here_dd_ _lt_/span_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_Raw WebGL_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//bl.ocks.org/tolkanabroski/3fcaab9467652a797851c7e080976f09_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//bl.ocks.org/tolkanabroski/3fcaab9467652a797851c7e080976f09_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T21:59:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat do you mean by _qt_reset itself_qt_ ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-06T22:59:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_i guess becourse of _lt_br /_gt_\n\t\tscene.onBeforeRenderObservable.add or any other renderloop inside the createScene the Matrix isent stored properly. _lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t(\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_i leave this here_co_ for later for debuging reasons_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t# just an other debug playground_lt_br /_gt_\n\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181#4_lt_/a_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_# minimal copy paste from the docs_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181#3_lt_/a_gt__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t)\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tDont worry i will investigate _lt_span_gt__dd_)_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-06T23:29:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ton other hand i spend already like 6h hours with a simple matrix multiplication_co_ i code this like in 10min. if anyone has suggestions. ur welcome_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-07T16:31:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t24h later ended up implementing my own matrix _lt_span_gt_operations_lt_/span_gt_ (its working now_co_ (no wonder))_lt_br /_gt_\n\thave to figure out how to stack different pointer events ..._lt_br /_gt_\n\ti leave it here_co_ maybe some1 find it useful._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#Y7Q181%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#Y7Q181#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBabylonJS Unsolved Mysteries (to be continued)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-09T17:59:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents ipsClearfix_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_BabylonJS Unsolved Mysteries (to be continued) _lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tlol _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]