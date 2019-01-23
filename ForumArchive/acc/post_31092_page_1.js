[{"Owner":"yuccai","Date":"2017-06-15T13:39:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to display my webcam content on my scene. In order to do this_co_ I tried to create a layer set in background on which I apply a video texture. I passed a video DOM element to this texture. This video has a stream for source that is obtained from the getUserMedia promise.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt works but rapidly the FPS drop and I don_t_t know why. Maybe the size of the video is too large_co_ maybe I provided the wrong parameters to the texture. I don_t_t have any idea but it causes an issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a PG for testing _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FF3BPV_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FF3BPV_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-06-15T15:10:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHave you tried different settings on your webcam? I see no problems with the camera that_t_s built into my laptop.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-15T15:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes perhaps your camera generate a texture which is too big\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yuccai","Date":"2017-06-15T15:46:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat do you mean by trying different settings on my webcam ? I only have one webcam on my computer and I can_t_t change its property. Maybe I can change the dimensions of the video before passing it to the videoTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried this and it increased a little bit my fps. My computer is 10yo. I tried this PG on other laptop and I didn_t_t detect any FPS drop. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess I can_t_t do anything but I understood why_co_ thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-15T15:49:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can configure the stream directly from bjs call. And guess what? I_t_ve got you covered _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FF3BPV%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FF3BPV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yuccai","Date":"2017-06-15T16:02:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNice job !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fact is that I wrote my piece of code a long time ago and I_t_ve never seen that you wrote this one in bjs. I will have a look on it _sm_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBTW I still undergo FPS drop after a random time. Sometime I don_t_t and sometime it increases back. This must be due to my computer and it doesn_t_t matter since I know it is specific to me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help_co_ this topic can be closed.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-06-15T18:32:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou close it yourself_co_ by editing the first post_co_ putting a _t_[SOVLED]_t_ at front of topic.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]