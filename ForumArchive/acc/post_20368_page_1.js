[{"Owner":"shannon","Date":"2016-02-05T20:40:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to take a _t_snapshot_t_ of a babylon3d scene ... in other words_dd_ I am trying to clone a babylonjs canvas when a user presses a button_co_ and  then append the new &lt_sm_canvas&gt_sm_ to the &lt_sm_body&gt_sm_ .. Sometimes it works_co_ but other times it does not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ if I use a simple canvas (ie. by using fillRect)_co_ the cloning/appending always works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have set up a test on plunker to demonstrate my problem_dd__lt_a href_eq__qt_http_dd_//plnkr.co/edit/XmZ7ihawmSoTnOMSD7KF?p_eq_preview_qt_ rel_eq__qt_external nofollow_qt__gt_plunker demo_lt_/a_gt_ ... press the button over and over again to see how sporadic it behaves when there is a babylon scene. _lt_strong_gt_NOTE_lt_/strong_gt__dd_ You can toggle between the plain canvas and the babylon canvas from within the _jquery(document).ready(...)   handler .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks_co_ Shannon\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-07T14:10:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Shannon!  Welcome to the forum_co_ good to have you with us._lt_br_gt_\n\tI tried a fork and some experiments...  _lt_a href_eq__qt_http_dd_//plnkr.co/edit/SSQ97mscP8x4Ds9EbFv5?p_eq_preview_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//plnkr.co/edit/SSQ97mscP8x4Ds9EbFv5?p_eq_preview_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen your console_co_ I got some reporting happening.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat line 79 .ready() func... should run every click.  I wanted to replace your line 81... with my line 82.  Essentially_co_ I was trying to make sure we were always targeting the LAST canvas in the document.  I thought maybe we were putting the BJS scene into canvas[0] over and over (and thus not filling the new canvas_t_s).   (canvi _eq_ plural of canvas?)  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI have no real solutions figured_co_ yet.  Just playing.  .ready() should execute every click.  It doesn_t_t.  Not sure why not_co_ yet.   Still learning.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  I_t_m sure smarter people than myself_co_ will comment.  Again_co_ welcome.  Interesting issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"shannon","Date":"2016-02-07T16:36:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsolution at _lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/35226272/taking-a-snapshot-of-babylonjs-scene-sometimes-works-sometimes-doesnt/35253910#35253910_qt_ rel_eq__qt_external nofollow_qt__gt_stackoverflow_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbasically_dd_ var lvo_engine _eq_ new BABYLON.Engine( lvo_canvas _co_ true _co_ _lt_strong_gt_{preserveDrawingBuffer _dd_ true}_lt_/strong_gt_ ) _sm__lt_br_gt_\n\thowever_co_ this will affect performance for a complex 3d scene ... so there will need to be a toggle that turns this feature on when the button is clicked_co_ and then turns it off after the clone has succeeded ..._lt_br_gt__lt_br_gt_\n\tAlso_co_ apparently Babylonjs has a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Render_Scene_on_a_PNG_qt_ rel_eq__qt_external nofollow_qt__gt__lt_code_gt_BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ size)_lt_/code_gt__lt_/a_gt__lt_br_gt_\n\t                             \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-08T09:20:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Render_Scene_on_a_PNG_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_code style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_1em_sm__qt__gt_BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ size)_lt_/code_gt__lt_/a_gt_  will be the right choice _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEspecially due to the first reason you stated.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]