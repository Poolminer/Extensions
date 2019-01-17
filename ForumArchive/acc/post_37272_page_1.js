[{"Owner":"mandim","Date":"2018-04-27T14:03:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an issue when using the blender exporter and two animations on two different meshes. In my .blend file I have created 2 animated meshes_co_ 1) a sphere falling on a rectangle mesh and 2) a container ship that rotates around x-axis at 45d. These animations are baked before being exported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I try to export_co_ for some unexplained reason the scaling of the sphere is changing and becomes the same as the container ship. Moreover_co_ when I drop the .babylon file in the sandbox_co_ the sphere position is changing and is being merged with bottom of the container ship and the animations are somehow combined which is not expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you please explain me what I_t_m doing wrong?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe .blend file_dd_ _lt_a href_eq__qt_https_dd_//www.dropbox.com/s/eqyv03wgmarjrxp/container_ship_sinking.blend?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/eqyv03wgmarjrxp/container_ship_sinking.blend?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe .babylon file_dd_ _lt_a href_eq__qt_https_dd_//www.dropbox.com/s/789lx8gm3v7zrsc/container_ship_sinking.babylon?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/789lx8gm3v7zrsc/container_ship_sinking.babylon?dl_eq_0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-04-27T14:21:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you have actions on more than one mesh_co_ you have to indicate when an animation only goes to one mesh / camera / light by putting the name of the object into the name of the_co_ then a dash &amp_sm_ the name of the BABYLON.AnimationRange you want_co_ e.g.  _t_MyMesh-jump_t_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-04-27T14:21:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not used to animations_co_ but I_t_ve started to see how it_t_s handled so as to _lt_s_gt_enhanced_lt_/s_gt_ create the doc_t_ about the animation topic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ one rule I think is correct is to export one .babylon file per animated object (on Blender_co_ use a master scene for static environment_co_ and use File &gt_sm_ Link to get your references in a dedicated layer into your animation files)_co_ because it seems that the animations array exported is applied automatically to all objects inside the .babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice that I_t_m not sure about that_co_ so maybe waiting for someone more comfortable with animations could be also a nice idea _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-04-27T14_dd_23_dd_31Z_t_ title_eq__t_04/27/2018 02_dd_23  PM_t_ data-short_eq__t_Apr 27_t__gt_April 27_lt_/time_gt_ by V!nc3r_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Oops_co_ JCPalmer has answer in the same time _dd_)\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-04-27T15:07:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ as soon as I posted_co_ I noticed your name in recently in italics. Mouse hovering indicated _t_typing_t_.  Never saw that before.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as having the _t_set_t_ with all the static objects in one blend / export &amp_sm_ then one blend / export for each character_co_ it is a good idea beyond just animation.  It also allows easier editing / file versions_co_ &amp_sm_ more importantly eliminates the need to do ImportMesh.  Use of ImportMesh clearly shows that you were not thinking ahead.  If you need to pick out just one mesh of an export_co_ then you are downloading the geometry for all meshes_co_ which is a waste.  You get the list of meshes with ImportMesh_co_ but so what?  If you specified only one mesh in the arg_co_ then you already know the name.  Just use Append &amp_sm_ scene.getMeshByName().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMuch better to create your exports so you can use Append.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mandim","Date":"2018-04-28T15:50:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tProblem solved!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have isolated the animated objects in 2 different .babylon files and now the animations are correct. Many thanks for your help guys...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]