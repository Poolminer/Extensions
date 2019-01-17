[{"Owner":"phil1234","Date":"2015-10-05T13:34:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I read in the doc that rotation is achieved before translation_co_ but I try to have an offsetted object rotate around the 0_co_0_co_0 axis_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_and I cant find any way to achieve this ... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_usualy(with other engines) I offset the object on its local axis_lt_/p_gt__lt_p_gt_then simply rotate it globaly with a matrix/quaterion/rotate function _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried different combinations of these two_lt_/p_gt__lt_p_gt_mesh.translate(BABYLON.Axis.X_co_ 3.0_co_ BABYLON.Space.WORLD)_sm_ //or LOCAL_lt_/p_gt__lt_p_gt_mesh.rotate(BABYLON.Axis.Y_co_ 1.0_co_ BABYLON.Space.WORLD)_sm_ //or LOCAL_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(I wanted to rotate the object position with a quaternion_co_ but the Quaternion lacks of regular/usual .mult(Vector) or .rotate(Vector)_lt_/p_gt__lt_p_gt_and anyway_co_ it wouldn_t_t be what I want to achieve)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_any idea ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-10-05T16:09:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use mesh.setPivotMatrix(BABYLON.Matrix.Translation(x_co_ y_co_ z) to achieve your goal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_the complete operation is PivotMatrix x Scaling x Rotation x Translation_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-05T17:09:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I guess this example fits Deltakoshs suggestion_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#H7V1D%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#H7V1D#8_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(if not_co_ just ignore me _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-06T04:31:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi phil... (and hi ice and dk too) welcome to the forum.... good to have you with us._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In case you ever need such_co_ I have a cool _qt_bootleg_qt_ forum searcher page at _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/search/form06/form06.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/search/form06/form06.htm_lt_/a_gt_  (thx to Gryff for the gfx)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Phil... tell us about you_co_ and your project(s)_co_ if you want.  Thanks!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phil1234","Date":"2015-10-06T06:45:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ but although I can make it work with rotate()_co_ how come it does not work doing this_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mesh.rotationQuaternion_eq_mesh.rotationQuaternion.multiply(BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(0_co_1_co_0)_co_angle*Math.PI/180))_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[edit_dd_ oops my bad it works actualy _dd_-) ]_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-10-06T07:03:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ Phil._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#H7V1D%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#H7V1D#13_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your line is 34._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Notice line 33.  Standard mesh do not have a _lt_em_gt__lt_em_gt_.rotationQuaternion_lt_/em_gt__lt_/em_gt_ by default.  It is _qt_turned on_qt_ as needed.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.js#L227_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.abstractMesh.js#L227_lt_/a_gt_ (that line should look familiar).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Lines 363 and 419 are also testers for the existence of a quaternion.  _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope this helps.  Party on!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-03-03T16:21:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#1JUURV%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#1JUURV#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tlocal vs world rotation example\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]