[{"Owner":"Mekaboo","Date":"2018-05-21T02:55:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood day folks! Im completely brand new to Babylon (3D site building in general) and have become an instant fan! Im having a few issues and would like to see if folks can help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. I want to have 4 boxes on my site and align 2 on the right and 2 on the left (Such as the _qt_Fashion Show_qt_ demo on the main page)_co_ how to go about doing this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. I want to make my logo and place it between the boxe_lt_/span_gt_s_co_ any recommendations on how to make this happen?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3.  Also I want to place images on the boxes and link them to another site when a person clicks them_co_ how do an ahref in this type enviorment?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. I would like to change the canvas to black_co_ how to do this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for all your help_lt_span class_eq__qt_ipsEmoji_qt__gt_💋_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeka\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mekaboo","Date":"2018-05-21T02:57:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso change the light/camera..Im using the basic html template and it was set to a sphere light...how to set it to a box light?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-21T15:18:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. You can create two canvases and then two engines on top of them. Then just use CSS to align your canvases. If you want to full page to be in 3D_co_ here is an example with 2 boxes_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PKY876_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PKY876_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. In 3D or everything in the web page with HMTL? If in 3D_co_ just create a plane_co_ attach it to the camera (same way as I did in previous example) and set its material.emissiveTexture to your logo\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#PKY876#2_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#PKY876#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. set scene.clearColor _eq_ BABYLON.Color3.Black()_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mekaboo","Date":"2018-05-22T02:06:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGracious..Thank you for the tips_lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mekaboo","Date":"2018-05-23T04:11:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello again Sir! Ive taken your advice and set the blocks and canvas color just how I want it.. Im still having trouble with logo and plane. Have the plane but it moves not staying between the boxes..how do I make it solid and have it with the logo.  Ive attached the logo..is there code that details how the logo and plane suppose to connect 3D style?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBlessings_lt_span class_eq__qt_ipsEmoji_qt__gt_💖_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMekaboo\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/421400182_JounaaiFINAL.jpg.f8f792ffc1f429b1ba7d3ea2a77da3c6.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18375_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/421400182_JounaaiFINAL.jpg.f8f792ffc1f429b1ba7d3ea2a77da3c6.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Jounaai FINAL.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mekaboo","Date":"2018-05-23T04:23:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso Im having a hard time adding this image to cover box meshes and linking them...Ive added the image to the texture files but they arent loading up..do I add it somewhere else. Do you have an example code of a logo being placed on a mesh?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/swlogo.jpg.28ecbf708110a9372b1598a301915258.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18376_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/swlogo.thumb.jpg.d9cb7e2820cd9b069a322e4b1d9ce06f.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_swlogo.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-23T20:32:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcan you try to repro in the playground. Tough to help you else _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mekaboo","Date":"2018-05-24T01:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWill do!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]