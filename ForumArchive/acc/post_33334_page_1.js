[{"Owner":"ozRocker","Date":"2017-10-09T12:10:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow does animation blending work?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use skeleton.enableBlending() for a smooth transition from one animation to the other.  It looks a bit weird though.  Does this work by combining the bone position changes from one animation to the other or combining vertex position changes?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-10-09T12:12:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIn the past I_t_ve noticed some weirdness with animation blending_co_ too.  I think this could be due to blending matrices instead of quaternions.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-10-09T16:48:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe blending is a pure mix of current key value and new value. So as Adam mentioned_co_ we are blending matrices for bones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have a repro case of weirdness?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-10-09T17:06:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThere is an old topic about this.  The upshot was it was due to rotation difference between the 2 matrices_co_ and decompose().  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/24806-animations-blend/_qt_ rel_eq__qt__qt__gt_This topic_lt_/a_gt_ keeps happening over and over.  I solved it in QI_co_ although I still have a problem when say an adult was used for a sit pose.  If that pose is attempted to be used on a baby_co_ the baby also shifts back.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]