[{"Owner":"danksch","Date":"2017-08-13T19:59:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to make 2D-shapes / 2D-sprites in my Canvas2D (ScreenSpaceCanvas) follow some sprites which are placed in my 3d world. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor this_co_ I_t_m using the BABYLON.Vector3.Project function as followed_dd_ \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tBABYLON.Vector3.Project(space.position_co_ BABYLON.Matrix.Identity()_co_ scene.getTransformMatrix()_co_ scene.activeCamera.viewport)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHowever_co_ this is the result_dd_ \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tVector3 {x_dd_ NaN_co_ y_dd_ NaN_co_ z_dd_ NaN}\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_ve checked each of the arguments and they all contain valid values at the time of being called.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve also stumbled across _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/25021-3d-to-2d-err/_qt_ rel_eq__qt__qt__gt_this topic_lt_/a_gt__co_ which uses another 4th argument in the call_co_ but I_t_ve had no luck trying it with that one either. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas? Thanks in advance!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"danksch","Date":"2017-08-13T21:53:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor whatever reason_co_ it works now. I can_t_t say why_sm_ I changed a couple of things in between and lost track of the things I_t_ve altered_sm_ been coding for too long non-stop now. _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m accessing the viewport via scene.activeCamera.viewport_co_ which results in screen coordinates between 0 and 1. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo get pixel values in order to place my Text2D or Shape2Ds_co_ I do\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmytext2D.x _eq_ canvas2D.width * projectVec.x_sm_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tmytext2D.y _eq_ canvas2D.height - canvas2D.height * projectVec.y_sm_   \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tfor anyone who_t_s interested. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]