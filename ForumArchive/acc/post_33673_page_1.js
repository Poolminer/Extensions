[{"Owner":"SpaceToast","Date":"2017-10-27T07:38:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes anyone have experience using the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/QueuedInterpolation/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_Tower of Babel_lt_/a_gt_ exporter with the Mac version of Blender? My test scenes fail with the following log error (in both Bforartists and the _qt_mainline_qt_ Blender app). Is there perhaps a file-writing peculiarity under OS-X? I_t_m too weak at Python to dig any deeper before reaching out_co_ I_t_m afraid...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_[snip]\n_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Writing of files started _eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq_\n  File _qt_/Users/me/Library/Application Support/Bforartists/2.79/scripts/addons/tower-of-babel/js_exporter.py_qt__co_ line 177_co_ in execute\n    self.to_script_file()\n  File _qt_/Users/me/Library/Application Support/Bforartists/2.79/scripts/addons/tower-of-babel/js_exporter.py_qt__co_ line 217_co_ in to_script_file\n    self.world.initScene_script(file_handler_co_ typescript_file_handler_co_ self.needPhysics_co_ self)\n  File _qt_/Users/me/Library/Application Support/Bforartists/2.79/scripts/addons/tower-of-babel/world.py_qt__co_ line 84_co_ in initScene_script\n    file_handler.write(indent + _t_scene.fogMode _eq_ _t_ + self.fogMode + _t__sm_\\n_t_)\nERROR_dd_  Can_t_t convert _t_int_t_ object to str implicitly\n_eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq_\nelapsed time_dd_  0 min_co_ .0047 secs\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink_qt_ data-fileid_eq__qt_15442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_15442_qt_ rel_eq__qt__qt__gt_test_scene.blend_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-10-27T14:41:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt was nothing to do with mac_co_ and everything to do with me never using fog.  Nothing about fog is written unless you turn it on in Blender.  This _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/commit/eac906d2580aaa00f9eba62715cad46dd702d644_qt_ rel_eq__qt_external nofollow_qt__gt_commit _lt_/a_gt_writes it correctly.  It is a good idea to restart Blender when over writing an add-on.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SpaceToast","Date":"2017-10-27T22:59:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExcellent! Output works perfectly now. Thanks_co_ JC.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]