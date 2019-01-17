[{"Owner":"RelativeNull","Date":"2018-02-26T12:54:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Everyone_co_ _lt_br /_gt_\n\t_lt_br /_gt_\n\tSo I have a mesh which I use as ground_co_ but since I need it exported from blender ( altogether with a navigation mesh ) I cant use the GroundMesh methods such as _qt_getHeightAtCoordinates(x_co_ z)_qt_. Right now I have implemented RayCasting for the task and is working quite good_co_ however I need a more efficient way of doing it and since I am looking for one thought to ask here as well. If someone can point me to a direction how to approach this it would be amazing._lt_br /_gt_\n\t_lt_br /_gt_\n\tCheers!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-02-26T13:27:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgetHeightAtCoordinates works only under the assumption that certain variables exist and are the ones who built the mesh. It is a form of cache that is stored in the class itself to fetch the height with minimum realtime computations (check the _computeHeightQuads function of GroundMesh to understand what is being done).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could create the same form of cache_co_ and fetch it without rays. There will be a bit of computation needed at the beginning_co_ but it will be rewarding afterwards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]