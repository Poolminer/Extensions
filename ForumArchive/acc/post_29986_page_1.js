[{"Owner":"aWeirdo","Date":"2017-04-24T16:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co__lt_br /_gt__lt_br /_gt_\n\tI_t_ve been wondering_co__lt_br /_gt_\n\ta mesh like _qt_the dude_qt_ seems to be using a single skeleton(so you only have to call beginAnimation Once)_co__lt_br /_gt_\n\tbut he is made up of several meshes_co__lt_br /_gt__lt_br /_gt_\n\tWhen i export meshes to babylon_co__lt_br /_gt_\n\tthe _qt_main_qt_ mesh is exported with the entire skeleton(all bones)_co__lt_br /_gt_\n\tand children meshes are each exported with their own version of the skeleton (containing only the bones that mesh use)_co__lt_br /_gt__lt_br /_gt_\n\tSo i have to call beginAnimation for each mesh/child mesh. _lt_br /_gt__lt_br /_gt_\n\tIf i point the child meshes skeletons to the main mesh_t_s skeleton (mesh.skeleton _eq_ mainMesh.skeleton)_co__lt_br /_gt_\n\twhich also contains the bones the child mesh uses_co_ and then beginAnimation_co_ the child mesh is either spagetti_co_ or just not animated properly_co__lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tSo my question_co_ How is it achieved to use the same skeleton?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tusing 3DS Max 2016_co_ exporter 0.8.0_co_ (also tried an older exporter_co_ same result)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tCheers _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-24T16:30:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI do not know what your problem is_co_ but your assumption that you need to call a BeginAnimation for each mesh I am pretty sure is wrong.  Maybe stop doing that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-04-24T16:34:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ _lt_br /_gt_\n\tEach child mesh is being exported with it_t_s own skeleton_co__lt_br /_gt_\n\tonly containing the bones which that mesh uses_co__lt_br /_gt_\n\tif i don_t_t call beginAnimation on it_co__lt_br /_gt_\n\tand only do it on the parent/main mesh_co_ the child is just static _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tI forgot to mention that i_t_m using 3ds max_co_ updated _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-24T16:39:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhy do you have such a work flow?  Clearly one skeleton is easier once it hits the BJS side.  Blink twice if someone is twisting your arm to do it that way._lt_img alt_eq__qt__dd_ph34r_dd__qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ title_eq__qt__dd_ph34r_dd__qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-04-24T16:40:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thaha yeah that_t_s my point_co_ _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt__lt_br /_gt_\n\tIt_t_s doing it by default_co_ i_t_m trying to figure out how to export it to use the same skeleton_co__lt_br /_gt_\n\tin 3ds max_co_ there_t_s only one skeleton_co_ but when exporting_co_ it is being split so child meshes are getting their own skeleton with the bones it uses and their animations.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-04-24T17:18:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m guessing it has something to do with how the exporter works_co_ it_t_s creating a new skeleton per _qt_skin_qt_ modifier_co_ but such a modifier is required on each mesh to allow manipulation via bones_co_ even if it_t_s using the same bones as a parent_lt_br /_gt_\n\tSo the exporter seems to believe it_t_s a seperate mesh and needs it_t_s own skeleton_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private void ExportSkin(IIGameSkin skin_co_ BabylonScene babylonScene)\n        {\n            var babylonSkeleton _eq_ new BabylonSkeleton { id _eq_ skins.IndexOf(skin) }_sm_\n            babylonSkeleton.name _eq_ _qt_skeleton #_qt_ + babylonSkeleton.id_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]