[{"Owner":"kurhlaa","Date":"2018-02-18T17:26:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello 3D guru_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to the docs_co_ we can load objects from _lt_strong_gt_*.babylon_lt_/strong_gt_ files this way_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\nvar meshTask _eq_ assetsManager.addMeshTask(_qt_skull task_qt__co_ _qt__qt__co_ _qt_scenes/_qt__co_ _qt_skull.babylon_qt_)_sm_\n\n...\nassetsManager.load()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tImagine_co_ that _lt_strong_gt_*.babylon_lt_/strong_gt_ file contains many objects and I load these files dynamically_co_ one by one. Later I want to delete/dispose all objects loaded from the specific file - how do I do that? Is there a built in way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably I could store all mesh names in a dictionary where keys are *.babylon file names_co_ then in a loop go through the dict key values and dispose meshes. But maybe there is a shorter and more beautiful way?!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-20T21:24:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope! you found the best way to do it\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeshes do not keep track of their origin so your idea is perfect!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]