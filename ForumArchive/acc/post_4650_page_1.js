[{"Owner":"Nico","Date":"2014-03-11T08:22:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m using scene.pick method to get clicked mesh (only the first intersecting the ray_co_ so I_t_m sending fastCheck parameter to true)_co_ but after some test_co_ on huge 3D file (&gt_sm_ 6M of triangles) it is quite slow ... (I only have one submesh per mesh)_co_ it takes long time to execute SubMesh.intersects method (because my meshes have a lot of vertices)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does somebody have any tips to speed up my picking ? I can_t_t easily edit my meshes (or adding more submesh)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve seen that BABYLON have a class called _qt_babylon.octree.js_qt__co_ but I_t_m not really sure that it could help me_co_ and I don_t_t know how to use it _dd_/_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-11T17:38:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ octrees are used for mesh selections and cannot be used to accelerate picking _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My advise for your problem should be to generate more submeshes_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]