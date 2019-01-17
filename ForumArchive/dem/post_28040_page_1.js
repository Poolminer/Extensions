[{"Owner":"ozRocker","Date":"2017-01-28T07:19:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMost people here know that I have an 82 DSLR cammera scanning rig.  I use this specifically for scanning in people at the shortest time possible (which is currently 1/300th of a second).  However_co_ such a complex rig is not required for scanning objects.  You don_t_t even need a DSLR camera or a handheld scanner.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this demo I used a simple iPhone 6+ and walked around a statue.  We took 89 photos from different angles.  My web designer had to stand on my shoulders for the top row of photos.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bust needed to have smooth shading but the base has sharp edges which I needed to preserve so I wanted flat shading for that.  With babylon.js you can_t_t pick and choose which edges to smooth.  In order to pull this off I made the base and bust 2 separate meshes and turned off smooth shading on the base.  It still doesn_t_t look perfect_co_ but it was much better than everything smoothed or everything flat.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is my first test scanning with an iPhone and I usually scan people so this is a rough demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.punkoffice.com/statue_qt_ rel_eq__qt_external nofollow_qt__gt_www.punkoffice.com/statue_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/photoscan_sml.jpg.ae8ebaf7ad7073fd92ddddece0bbee3a.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11397_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/photoscan_sml.jpg.ae8ebaf7ad7073fd92ddddece0bbee3a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_photoscan_sml.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhasedEvolution","Date":"2017-01-28T15:12:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAweeesome!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-29T01:17:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI read through this post \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/18629-mesh-part-smooth-part-flat-shading/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tand I learnt that I can use the edge-split modifier to combine flat and smooth shading_co_ so I did that and now I just need one mesh.  It doesn_t_t make much different to the result but it helped me clean up the code a bit\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-01-29T19:27:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s really awesome ! What do you use to build the mesh from pictures ? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-29T22:40:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_161377_qt_ data-ipsquote-contentid_eq__qt_28040_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1485718051_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIt_t_s really awesome ! What do you use to build the mesh from pictures ? \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI used Agisoft Photoscan.  The screenshot above is from that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ Photoscan will give a jumbled mesh with thousands of polygons so I used a combination of Zbrush and Blender to retopologise.  I really wish babylon.js could show the actual topology I was working with instead of just tris so I could demonstrate it right on the web-page.  People always ask about topology and the best I can do is turn on wireframe mode and tell them to use their imagination to see the squares\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/topo.jpg.3edf1ef6a2d925e658a0acbbdb188339.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_11417_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/topo.jpg.3edf1ef6a2d925e658a0acbbdb188339.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_topo.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-30T17:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tImpressive!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-01-30T18:34:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__dd_ There is a free piece of software called _lt_a href_eq__qt_https_dd_//github.com/wjakob/instant-meshes_qt_ rel_eq__qt_external nofollow_qt__gt_Instant Meshes_lt_/a_gt_ that can be used to retopologize high poly triangulated meshes to low poly quad meshes. Requires input as an .obj or .ply file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt was presented at a SIGGRAPH conference in 2015.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOops - that is not the answer to the question you asked _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFor the pictures to mesh - _lt_a href_eq__qt_http_dd_//ccwu.me/vsfm/_qt_ rel_eq__qt_external nofollow_qt__gt_VisualSFM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a YouTube video on the whole process - _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_D6eqW6yk50k_qt_ rel_eq__qt_external nofollow_qt__gt_3D scanning for free!_lt_/a_gt_ It also uses MeshLab for clean up - but that does not do any retopology - just cleanup and decimation. You can use Instant Meshes instead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-01-30T22:28:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think VisualSFM is free_co_ so that_t_s definitely a good place to start.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstant Meshes is pretty neat but I don_t_t use it because it makes all quads the same size.  Its not possible to allocate more polys to one area so its not much better than a clever decimation.  In my topo picture above you can see that the base has much bigger quads than the bust.  For webGL I put in a good effort to use the least number of polys possible\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]