[{"Owner":"Zephos","Date":"2018-10-25T19:50:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I am currently using an observer to detect the user picking a mesh and I use that to make the camera look at the mesh. Now_co_ I also want to highlight the mesh when the user hovers over it_co_ but it looks like the only way that is supported to do that is with actions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat lead me to wondering why there are two seemingly separate paradigms for this kind of thing. I found the explanation given here a bit vague_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/features/events_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/features/events_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMainly I just want to know how to compartmentalize the two systems so I can easily choose between them based on the circumstances. If possible_co_ I would like to stick to just one paradigm to not muddle my code with various ways of doing the same thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I should be able to implement the highlighting behavior with either one_co_ as long as the POINTERMOVE event type has a pickResult (not sure if it does).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre there any obvious reasons to chose one method over the other? How should I be thinking about these features in relation to each other?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-26T16:18:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents ipsClearfix_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#353c41_sm_ font-size_dd_14px_sm_ text-align_dd_start_qt__gt_Now_co_ I also want to highlight the mesh when the user hovers over it_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou can also use observables (onPointerObservable) which come with pickresult.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBoth paradigms are equivalent and really depend on your coding style \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]