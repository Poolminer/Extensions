[{"Owner":"georage","Date":"2016-07-31T19:59:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ I am probably doing this all wrong_co_ but I need a _qt_get mesh by name_qt_ function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI understand there is some sort of built in function for this_co_ but I cannot find out how to use it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI created this function_co_ which I thought would return the mesh_co_ but it doesn_t_t. (I assign m.name during creation of all meshes_co_ and this function does accurately report finding the mesh)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function getMeshByName(meshName_co_ scene){    \n    scene.meshes.forEach(function(m) {\n            if(m.name _eq__eq_ meshName) {\n                console.log(_qt_found mesh _qt_ + m)_sm_\n                return m_sm_\n                }\n        })_sm_        \n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\thow do I make _qt_m_qt_ return the actual mesh? Or how do I do this using the existing functions?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"georage","Date":"2016-07-31T20:05:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNever mind! I found the existing function! Sorry for the litter.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function getMeshByName(mName_co_ scene){\n    return scene.getMeshByName(mName)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]