[{"Owner":"Enoray","Date":"2014-07-12T10:18:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i_t_m started my first own blender project for bjs. Now i got the Problem that the .babylon file is 217MB _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Can someone give me some tipps hoe i can reduce it to like 1%?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here u can get the blender file _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2196_qt__gt_blender file.zip_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Enoray","Date":"2014-07-12T10:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok i got it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ u shouldnt use to high view on Subdivision Surface_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-12T15:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Enoray_co_ you have to get into the habit of thinking _qt_lowpoly/game_qt_ - not _qt_highpoly/still render_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So with that in mind a few basic tips_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Be careful using blender modifiers_co_ not just the Subdivision Surface. also Multi-Res and Array modifiers and modeling by extruding surfaces along curves._lt_/p_gt__lt_p_gt_2. If you are using rigs/armatures use the minimum number of bones you need - if finger movement is not important don_t_t put 3 bones in every finger. (I use a human rig with 23 bones)_lt_/p_gt__lt_p_gt_3. Be careful with the number of keyframes in animations._lt_/p_gt__lt_p_gt_4. If you want to create nice normal_co_ AO maps etc_co_ have a highpoly version and a lowpoly version - bake maps from hi-&gt_sm_low. Delete the hipoly after you have the maps._lt_/p_gt__lt_p_gt_5 After you have built a model(s) check for duplicate vertices_co_ hidden faces or faces that will not be visible in your final scene_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If_co_ for whatever reason_co_ you only have a high polymodel_co_ then consider learning the techniques of _qt__lt_u_gt_Retopology_lt_/u_gt__qt_ or _qt__lt_u_gt_Polygon Reduction/Decimation_lt_/u_gt__qt_. For the latter I would use a free program called _qt__lt_u_gt_MeshLab_lt_/u_gt__qt_ which has more options than Blender_t_s built in Decimator._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//cgcookie.com/blender/2011/10/24/decimating-sculpts-with-meshlab/_qt_ rel_eq__qt_external nofollow_qt__gt_Using MeshLab_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Make _qt_lowpoly thinking_qt_ you natural workflow._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Enoray","Date":"2014-07-12T18:56:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for your tips! Im new in this 3D things. But i_t_ll try to remind your tips. I try to create my working room and i think if i got it below 10MB its perfect _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a way to export elastic things like wires?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_MeshLab looks realy nice i_t_ll give it a try later when i have finished my scene _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-07-13T18:07:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ why not contributing to current blender exporter?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Enoray","Date":"2014-07-14T06:19:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think my Skills ar not good enough for it but i_t_ll try when i got the time _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]