[{"Owner":"Kesshi","Date":"2015-10-23T10:29:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_How to get the local matrix of a mesh?_lt_/p_gt__lt_p_gt_The TypeScript definition offers only getPivotMatrix() and getWorldMatrix()._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use parenting and i need to access the local transformations (as a matrix) of each child mesh._lt_/p_gt__lt_p_gt_In the code it looks like there is an internal matrix called _localWorld but i don_t_t like to access internal variables in my code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-23T10:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_What exactly do you want to do?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I might have a similar problem that I am not sure how to solve it the best way. I have a mesh that moves and rotates_co_ that_t_s the player. Then I have two other meshes that have the player as their parent. They each have individual positioning relative to the player (since the are the parents child objects). Now I can access the position of those meshes in world space by getting their absolutePosition. But I didn_t_t figure a good way out yet how I can always get the absolute position of one and of the mesh without adding another child mesh. I want the absolute coordinates of a position relative to a mesh... I guess. Not sure if I explained it well. Is that waht you want_co_ too?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]