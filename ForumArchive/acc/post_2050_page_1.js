[{"Owner":"hw3web","Date":"2013-11-07T20:17:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) I do understand that we can make transparency of object by material_co_ but is there other way like mesh.opacity  to make transparency of all mesh not material just_co_ so if is a full material 100% alpha by jpg_co_ and mash opacity will be 0.4 _co_ all  mesh will be like 40% visiable_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) Groups - is any chance that blender exporter will as well include groups of mesh and then can be easier for babylonJS manipulate with more elements in one time ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thank you_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-08T09:28:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) I don_t_t think such a feature exists today in babylon. It does not make any sense to update the opacity of a mesh _dd_ the correct way is to update the opacity of its material._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) I don_t_t know very well the Blender exporter_co_ so i cannot answer here._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-08T09:48:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For the global opacity_co_ there is a way to do that per mesh_dd_ mesh.visibility _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i do not know the group feature of blender but if you explain me how to create one_co_ I can have a look^^_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hw3web","Date":"2013-11-08T13:23:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_group is as I understand another paramert of mesh like ID or name _co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_where id meshA(ID_eq_ _t_ma_t_) and mashB (ID_eq__t_mb_t_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if you could add another parametr like groupName then _dd_meshA(ID_eq_ _t_ma_t__co_ group_eq_[_t_gr1_t_]) and mashB (ID_eq__t_mb_t__co_ group_eq_[_t_gr1_t_])_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if you will select scene.getGroupByID(_t_gr1_t_).visibility _eq_ 0.5 - both mesh will be selected and in this example half transparent ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_as I understand mesh can belong to few groups so that mean this parametr should be as array._lt_/p_gt__lt_p_gt_I do not know Python_co_ but is look like it should be in exporter something like_lt_/p_gt__lt_p_gt_????????????????????????????????????????????????????_lt_/p_gt__lt_div_gt__lt_span_gt_def_lt_/span_gt_ _lt_span_gt_write_Groups_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_file_handler_lt_/span_gt__lt_span_gt__co__lt_/span_gt_ groups_lt_span_gt__co__lt_/span_gt_ group_lt_span_gt__co__lt_/span_gt_ _lt_span_gt_mult_lt_/span_gt__lt_span_gt_)_dd__lt_/span_gt__lt_/div_gt__lt_div_gt_        _lt_span_gt_file_handler_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_write_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__qt__co__lt_/span_gt__lt_span_gt_\\_qt__lt_/span_gt__lt_span_gt__qt__lt_/span_gt__lt_span_gt_+group_lt_/span_gt__lt_span_gt_+_lt_/span_gt__lt_span_gt__qt__lt_/span_gt__lt_span_gt_\\_qt__lt_/span_gt__lt_span_gt__dd_[_qt__lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ _lt_span_gt__qt__lt_/span_gt__lt_span_gt_%.4f_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_%.4f_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_%.4f_lt_/span_gt__lt_span_gt__qt__lt_/span_gt__lt_span_gt_%_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_group_lt_/span_gt__lt_span_gt_)_lt_/span_gt_ _lt_span_gt_+_lt_/span_gt_ _lt_span_gt__qt_]_qt__lt_/span_gt__lt_span_gt_)_lt_/span_gt__lt_/div_gt__lt_div_gt_????????????????????????????????????????????????????_lt_/div_gt__lt_div_gt_////// just thought_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_but it will be very help full for futher development and as someone who know python and blender will do it in minute _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//i43.tinypic.com/34xmkb4.png_qt_ alt_eq__qt_34xmkb4.png_qt__gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_regards_lt_/div_gt__lt_div_gt_Hubert_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_PS I start to like more and more BanylonJS _co_ shame it is not support CPU alternative just for those whose driver or graphic card is not compatible _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_( _lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_It shame as I do not know us much JS I would love to contribute in evolution Babylon - hope and I believe it will be the best 3d engine on JS_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]