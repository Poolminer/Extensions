[{"Owner":"TomaszFurca","Date":"2018-11-09T19:00:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I have a problem with position of my tooltip. Width of it is resized to text length. I want to render my tooltip in texture_co_ so global position is excepted. I want to put my tooltip always on top of pointer enter object and centered horizontal. Also i found a problem with render a artifact before show text in tooltip.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#GL5SIM%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#GL5SIM#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-10T05:39:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Tomasz!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor the artifact_co_ this is a bug that will be fixed by next commit _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the other question_co_ I_t_m not sure to understand it. Can you elaborate a bit more?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2018-11-10T11:26:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for fix issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in my playground i have two buttons. For every button tooltip width is different. I want to achieve center horizontal position of my tooltip based on triggered button.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-11T03:12:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think something like that could work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- create a container for the button and the tooltip.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- set the tooltip as horizontal center\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- make sure the container is set with clipChildren _eq_ false\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]