[{"Owner":"OXY11","Date":"2016-05-13T13:33:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthere is a way to use different textures (or different materials) in the same Solid Particle System?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-13T17:09:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnope\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe SPS is a single mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe best you can do is to use an atlas_co_ it is to say a single texture file containing many different images\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand then set these images to the particles you want _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#uvs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/Solid_Particle_System#uvs_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou have to use the particle property _qt_uv_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\told example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2KSQ1R%2338_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2KSQ1R#38_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\ta single file but a different image per particle\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-13T18:30:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti dont Know about sps  can we Use Shader Material for sps mesh material?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand any face can have diffrent VU?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-05-13T19:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthe sps is just a simple mesh whose you can access its subparts (the particles)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso everything working on a mesh is working on the SPS _dd_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-05-14T02:32:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti think for a way for set multi material  to SPS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif we can set UV per each face  like  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tface 1 _dd_[ [0.0001 _co_0.0001]  _co_  [0.001 _co_0.0001] _co_[0.0001 _co_0.001]_co_[0.001_co_0.001]]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tface 2 _dd_[ [0.0011 _co_0.0011]  _co_  [0.002 _co_0.0011] _co_[0.0011 _co_0.002]_co_[0.002_co_0.002]] _co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.. _dd_ is that possible i don_t_t work that before with sps\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe split uv to the 1000x1000 _eq_ 1000000 we  can chose   wanted face with condition and set any material for this\n_lt_/p_gt_\n\n_lt_p_gt_\n\twe have restriction in texture max count like 6 or 8 2d texture per material but we can send  collection of texture with one and split this in shader\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think we can use the 25+25+25+25 texture for 4 texture in  one mesh but need less quality like (200x200) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]