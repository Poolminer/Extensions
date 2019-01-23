[{"Owner":"elkyu","Date":"2015-06-30T23:50:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a plane with an other mesh behind._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would like_co_ when I click on the plane_co_ trace a line directed to the back of the plane_co_ and verify if there is a collision or not with the other mesh. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I can create a line mesh_co_ and update its size and check for a collision on each frame. No ? Maybe there is an other way ? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-01T05:18:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_You could use ray tracing for that._lt_/p_gt__lt_p_gt_Where does the line start? At the mouse click position? _lt_/p_gt__lt_p_gt_Drawing the line can be done even after you already know if there is a collision._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-07-01T08:27:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes the line should start at the mouse click position._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I want to know if at the mouse click position on the plane there is a match(collision) at the same coordinate somewhere behind the plane. Trace a line is just an idea _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But_co_ I forgot an important detail ... Between my plane and my other mesh I have an other plane which I want to ignore_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-07-01T08:45:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s simple -  the scene.pick function accepts a predicate - this is a function that defines which meshes shouzld be picked and which shouldn_t_t._lt_br_gt_so (for example)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint lang-auto_qt__gt_scene.pick(scene.pointerX_co_scene.pointerY_co_ function(mesh) { return mesh.id _eq__eq_ _qt_idOfMeshToBePicked_qt_ })_lt_/pre_gt__lt_p_gt_You could also use the scene.onPointerDown and set the isPickable value to false to unpickable meshes and true to the pickables._lt_/p_gt__lt_p_gt_Like this - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#3TCRC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#3TCRC_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"elkyu","Date":"2015-07-01T13:26:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I can set true just to the pickable mesh behind the plane because I need a pickinginfo on the plane too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your first solution works very well ! I defines the mesh behind the plane _qt_pickables_qt_ with its ID and it works !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]