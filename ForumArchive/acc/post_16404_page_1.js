[{"Owner":"eljuko","Date":"2015-08-12T11:25:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So i made some sort of birch_t_ish tree and noticed strongly visible white edges on the foliage._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.eljuko.com/snipplet/7k5v_qt_ rel_eq__qt_external nofollow_qt__gt_img1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also another issue is with the trunk. You can see a vertical darker line where i put marked the seam in blender._lt_/p_gt__lt_p_gt_The reason the picture above is kinda small is because the vertical line there is more visible then._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i tried to create some margin for the trunk but it didn_t_t help at all._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.eljuko.com/snipplet/7k5w_qt_ rel_eq__qt_external nofollow_qt__gt_img2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any hints to fix these issues?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_EDIT_dd_ _lt_/strong_gt_tested in edge -browser and didn_t_t get the white edge issue. got those white borders with chrome. Seems like edge is good handling edges  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_EDIT2_dd__lt_/strong_gt_ enlarged the texture margin by insane amount (around 10px). This fixed the seam issue_co_ but the foliage issue still stands._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_EDIT3_dd__lt_/strong_gt_ Added some sharpness to the foliage texture_co_ and noted it only made the white edges worse. _lt_strong_gt_By adding a bit of blur behind the foliage texture drastically reduced the white edge thingies._lt_/strong_gt__lt_/p_gt__lt_p_gt__lt_strong_gt_The difference between blurry and sharp edges in chrome_lt_/strong_gt_ (_lt_a href_eq__qt_http_dd_//www.eljuko.com/snipplet/7k5x_qt_ rel_eq__qt_external nofollow_qt__gt_img3_lt_/a_gt_). I do not know if this is a common thing to know_co_ but was completely new to me _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- thanks_co_ eljuko_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-12T17:06:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Eljuko! this is due to the threshold we use for alpha testing and how browsers implements texture filtering_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And the cool new is that you found the best way to get rid of this (edit3) _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-08-12T17:16:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_DK_co_ MS Edge fanboy _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-08-13T04:08:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_eljuko_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_adding a bit of blur behind the foliage texture drastically reduced the white edge thingies_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is quite a common trick - first found out about it years ago when I built stuff for Second Life_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_enlarged the texture margin by insane amount (around 10px)._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I usually have margins that are at least 4px for textures that are not tiled_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something else to watch out for is changing image size of seamless textures and then saving as a .jpg. I often find it creates a seam._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eljuko","Date":"2015-08-13T08:19:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_92708_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16404_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1439399181_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_this is due to the threshold we use for alpha testing and how browsers implements texture filtering_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ahaa_co_ i see._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Funny thing is i didn_t_t get any of those white edge thingies on my wheat model_co_ although it had much smaller texture compared to this tree._lt_/p_gt__lt_p_gt_Anyhow_co_ working now and i know how to live with it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_92772_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_16404_qt_ data-ipsquote-username_eq__qt_gryff_qt_ data-cite_eq__qt_gryff_qt_ data-ipsquote-timestamp_eq__qt_1439438907_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_It is quite a common trick - first found out about it years ago when I built stuff for Second Life_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ is there any place to find these common tricks in case there_t_s more of them? If not someone should make one_co_ could save lifes  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_- eljuko_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]