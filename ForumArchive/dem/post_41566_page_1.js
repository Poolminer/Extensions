[{"Owner":"ozRocker","Date":"2018-11-28T14:55:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve been experimenting with a tool for shoppers so they can create their bodyshape in realtime and see which clothes fit them (whether that_t_s a viable platform or not depends on the what the shoppers think)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the LIVE demo_dd_ _lt_a href_eq__qt_https_dd_//punkoffice.com/bodyshape_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//punkoffice.com/bodyshape_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere was a bit of stuffing around to make this work.  I had to separate the body-parts into polygroups.  To do this I needed to add code to the Blender exporter so it would export vertex groups.  Then I added code to the Babylon.js library to be able to parse the vertex groups from the exported JSON file.  I_t_ve got a base model and an overweight model and I_t_m basically morphing polygroups from base to overweight.  The girl was a housemate that I scanned but her bodyshape is a female from MakeHuman _lt_a href_eq__qt_http_dd_//www.makehumancommunity.org/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.makehumancommunity.org/_lt_/a_gt_.  The overweight morph target was also made in MakeHuman.  I use Wrap from these guys _lt_a href_eq__qt_https_dd_//www.russian3dscanner.com/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.russian3dscanner.com/_lt_/a_gt_ so I can change the topology of my scans to another topology (in this case_co_ the MakeHuman avatar).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is all done via the CPU.  Maybe a better coder than me can get it working on the GPU.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/preview.jpg.a04108852640d1113f1c3c1d8968e252.jpg_qt_ data-fileid_eq__qt_21245_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_preview.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21245_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/preview.thumb.jpg.94904c76d01fdd9692d79632a5a885ee.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]