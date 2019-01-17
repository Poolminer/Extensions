[{"Owner":"distraub","Date":"2017-07-13T19:36:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am hoping you guys can help me out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I am trying to accomplish is to hit a point on a planet with a curved line from space.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like it to wrap around the planet if the point is on the back_co_ and not clip.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground to give you an idea of what I am trying to do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1NZLA9%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1NZLA9#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally I should be able to hit any point on the globe without clipping it_co_ I am just not sure exactly what the math would look like to calculate those angles dynamically.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-07-13T20:44:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1NZLA9%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1NZLA9#6_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tbut that might not be what you want._lt_br /_gt__lt_br /_gt_\n\tIm thinking you want it to couture to the planet which would be way different.  best case to stop it from clipping is adjust your angle point I think like (0.65_co_ 0_co_ 0.25) would work. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"distraub","Date":"2017-07-14T09:39:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you_co_ I really wasn_t_t only looking to put the line in a different rendering group _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love it to contour the planet_co_ but am not sure the best way to go about that. I will have multiple points from space hitting multiple spots on the planet. and I wanted to make sure you could see them all individually. Initially I thought I could bring them all to a point and then have them wrap around the planet to hit their destination_co_ but then you wouldn_t_t be able to tell which object was connecting to the planet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-07-15T16:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27428-distraub/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27428_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27428-distraub/_qt_ rel_eq__qt__qt__gt_@distraub_lt_/a_gt__co_ welcome to the forum._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_If all the starting points in space were at a different Y value_lt_/span_gt__co_ they would each encircle the planet around a different _qt_non-equatorial_qt_ orbit.  So_co_ the chances of orbits over-lapping each other... would be slim.  Some orbits might be elliptical_co_ too.  Then create each in a different color_co_ and you might have good success.  But_co_ does distraub WANT to allow a few orbits before doing de-orbit burn (2-step process.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally_co_ a 3-step process.  First_co_ know what orbital insertion point is wanted and draw straight line to IT.  That line will smoothly intersect a circle or ellipse orbit trajectory.  THEN_co_ finally_co_ a curved line indicating the de-orbit burn (slowing craft_co_ letting gravity pull it through atmosphere).  One straight line_co_ one circle or ellipse_co_ and one curved line from orbit to landing point.  Ow!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOrbital insertions.  Too cool_co_ but not used by weapons/meteorites_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe space shuttle used a few more curves.  While they were approaching the landing site_co_ they were in air_co_ so the air-plane-like control surfaces were used to do steep banking_co_ left/right etc... to scrub-off unwanted speed.  Then_co_ when near the landing site_co_ they banked around a  _qt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_GDf_ejI_mT4_qt_ rel_eq__qt_external nofollow_qt__gt_heading alignment circle_lt_/a_gt__qt_ (HAC).  It was an invisible cylinder near the end of the runway_co_ and no matter the approach angle_co_ they would bank around until they were aligned with the runway_co_ then break-away from the circle_co_ and drop _lt_s_gt_trow_lt_/s_gt_ gear.  Computers do most of it_co_ but in the video above_co_ they were still _qt_slightly low at the 180_qt_.  (180 degrees around the HAC)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think... maybe... the _lt_strong_gt_need_lt_/strong_gt_ to enter an orbit FIRST_co_ and then do a _qt_de-orbit burn_qt__co_ slowing the craft to allow gravity to pull craft to the planet... is based-upon amount of fuel used to do braking thrust.  AND... are there living things on-board that wish to survive the landing?  Or is it a meteorite that cares nothing about soft landings or burning-up entering atmosphere?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThank goodness distraub is only concerned about drawing lines at this point.  The function that calculates the most fuel-efficient and SAFE flight trajectory and de-orbit maneuver... would be quite an undertaking to code.  It would need to consider spacecraft mass_co_ planetary gravity_co_ insertion speeds_co_ etc.etc. erf.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Still_co_ fun!  Got some contacts at NASA or other space programs?  Would they loan us some pseudo-code/formulas?  heh.  COOOOL. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"distraub","Date":"2017-07-18T09:45:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ hi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ thanks for the reply!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I am looking for isn_t_t really a weapon_co_ or a spacecraft_co_ more of a broadcast point to a spot on the planet_co_ visually showing the communication.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo ideally it would be an arc to the planet first_co_ since it just looks cool_co_ but then it would catch and orbit the planet and stop on a particular lat/long._lt_br /_gt_\n\tI was thinking of using a bounding sphere around the planet_co_ catch the intersection point on the sphere from the first arc_co_ then finish it by following the arc of the sphere with a new curve.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am going to give that a try today_co_ but am very new to Babylon_co_ so am not quite sure of all the details and the math to make it happen.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"distraub","Date":"2017-07-18T15:35:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy next question would be how can I easily get the intersection point between my line and the bounding sphere?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a wireframe mesh where I would like my bounding sphere in this playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to pick up the Vector 3 of where the line touches the face of the bounding sphere first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1NZLA9%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1NZLA9#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"distraub","Date":"2017-07-20T12:27:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is an idea of what I am going for_co_ this is a crude way to do this_co_ and it almost works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I am sure there is a better way. If anyone can take a look and help_co_ I would be very grateful._lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#2I0VXX%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#2I0VXX#8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am getting the arc based on using a mesh_co_ rotating it with lookAt looking at the center of the earth_co_ then using that angle to calculate control points for the arc._lt_br /_gt_\n\tI was using a quadraticBezier first but switched to a Cubic Bezier because I was clipping at different locations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am still clipping when at different places_co_ have to figure out the right height for the control points\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sure this can all be accomplished with a great circle formula but my trig just isn_t_t up to par for the task.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]