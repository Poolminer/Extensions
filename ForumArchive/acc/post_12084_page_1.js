[{"Owner":"amorgan","Date":"2015-01-29T13:54:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey All_co_ pretty much going full out on using Blender for animations. But I am having some more troubles._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) I now have two meshes (in one file)_co_ the first mesh animates as it is supposed to_co_ but the second (sword) mesh does not follow. What is the correct way to import this in so that they associate together correctly. Do I set the sword as a parent (which I am doing)? or how do I get them to move together_co_ etc. In addition to animate correctly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) How do I import multiple animations? I have tried to google and look up videos on how to do it (which come up for Unity) and what not by using the Action Manager and making them attach to a fake user_co_ but still only one imports into Babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks! I Haven_t_t found any tutorials in depth about this. So once if I figure out this_co_ I would like to make one._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_3547_qt__gt_Blender.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-29T19:36:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looking through the Blender to Babylon Exporter ( _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Blender/io_export_babylon.py_lt_/a_gt_ )_co_ I don_t_t see any code that seems to be getting multiple animations or multiple meshes for one bone. Not really knowing much about it_co_ it at least didn_t_t jump out to me. So I_t_m not sure if this is supported yet_co_ which would be limiting. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-29T19:57:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Skeletons (armatures in Blender) are separated from Meshes on both systems.  Exporter assigns each mesh that is parented to a armature_co_ a skeleton id.  See no reason why that skeleton id could not be the same.  Looked at your .babylon.  Only _qt_Body_qt_ is assigned a skeletonId._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do not even see a mesh named _qt_sword_qt_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A skeleton only has one animation exported_co_ though animations is an array in Babylon.Bone.  You can specify a start - end frame_co_ so you could make a combined animation in Blender_co_ &amp_sm_ call them as 2_co_ with different frame ranges._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Meshes can also export position_co_ rotation_co_ &amp_sm_ scaling animations from Blender.  You can have multiples._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-29T19:57:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not a Blender guru but as far as exporter is concerned_co_ we are only exporting one animation track per mesh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-29T20:33:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_I now have two meshes (in one file)_co_ the first mesh animates as it is supposed to_co_ but the second (sword) mesh does not follow._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Afternoon amorgan _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This_co_ I assume  is what you are getting_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/amorgan/index4.html_qt_ rel_eq__qt_external nofollow_qt__gt_Figure and Sword 1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And this is what you want_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/amorgan/index5.html_qt_ rel_eq__qt_external nofollow_qt__gt_Figure and Sword 2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Your problem lies in the fact that you have parented the sword to the armature and _lt_u_gt_not_lt_/u_gt_ the hand bone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my next post I will write up a method to fix it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_ One of those days from hell - can_t_t go 5 minutes without something comes up _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-29T20:50:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the replies! Gryff you hit on the head with my first question_co_ I will test it when I get home_co_ but I don_t_t have any doubts there. Also_co_ not good to hear about your day_co_ hope it gets better!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as the other question about multiple animations_co_ I was afraid that was the answer. So I can definitely do that_co_ put multiple animations on one track_co_ but that gets very clunky if I need to modify frames with multiple animations. The Action Manager system that blender has is very nice for handling this issue. Which searching_co_ Unity seems to be doing this_co_ so it seems it_t_s at least possible from some aspect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there anyway for someone to look into this? Using the Actions Manager seems like a much more elegant solution as one expands out and maintainability. I have a work around for now. My plan would be to use the Action Manager to combine and manipulate the actions/animations_co_ then one that is just all of them combined. Not ideal_co_ but will probably be the best way to do it for now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ Doing animations this way will also allow me to easily convert my model so that if the exporter does use actions in the future_co_ it will be easy peasy._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-29T21:52:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok amorgan here is how to fix you sword animation_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Click on the armature and put it in the _qt_Rest Position_qt__lt_/p_gt__lt_p_gt_2. In the _qt_Outliner Panel_qt_ hide the _qt_body_qt_ mesh. Not essential but makes it less likely you click on the wrong item in the following steps._lt_/p_gt__lt_p_gt_3. Click on the _qt_sword_qt_ (Cube) in the 3D window then ALT + P -&gt_sm_Clear Parent. The _qt_sword_qt_ (Cube) is no longer attached to the armature._lt_/p_gt__lt_p_gt_4. Click on _qt_sword_dd_ in the 3D window now Shift + click on the bone for the right hand. The Ctrl + P -&gt_sm_Automatic weights. The _qt_sword_qt_ should now be a child of the armature again._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(If at this point you but the armature back in to _qt_Pose Position_qt_ and exported as a .babylon file - you would really see a magic sword _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ alt_eq__qt__dd_rolleyes_dd__qt__gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_5. Select the _qt_sword_qt_ and go into Edit Mode and _lt_u_gt_Select All_lt_/u_gt_ the vertices. Over in the Properties Panel chose the tab with the triangle then look for vertex groups and find and highlight the _qt_hand.R_qt_ vertex group and with all the vertices of the sword selected_co_ click the assign button. Exit Edit Mode._lt_/p_gt__lt_p_gt_6.Unhide the body mesh._lt_/p_gt__lt_p_gt_7. Put the armature into Pose Position and export to a .babylon file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And unless I have left a step out - you should have your little guy marching along with a sword._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-29T22:08:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_OMG_co_ Gryff your knowledge is invaluable!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-30T00:52:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Awesome! Gryff that worked. Looks like before I just bound the sword to the bone and not armature (though that is the opposite of what you said haha). Also I was able to combine my animations into a single track called All and just copied them over. If I get some time this weekend I will try to make a tutorial showing what I learned here_co_ since I don_t_t believe any exist for this specific topic._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Two things further_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) The bounding boxes do not seem to translate with the animation?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) Can I not set a mesh as a parent_co_ if itself has a parent? For example_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_mesh2.parent _eq_ mesh1_sm__lt_/p_gt__lt_p_gt_mesh3.parent _eq_ mesh2_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I do this mesh3. does not translate with mesh 2?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-30T02:21:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Glad it worked amorgan - I_t_m always afraid I will leave out a step or take one for granted. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ alt_eq__qt__dd_unsure_dd__qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Looks like before I just bound the sword to the bone and not armature (though that is the opposite of what you said haha)_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure why you think that. What bone did you think you parented it to? I could not find a connection to any bone. If I tried to weight paint it - rather than give me a bone to paint - it gives me the whole armature.Perhaps I should have said the it was parented to the object you have named _qt_Skeleton_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As for the _qt_two further things_qt__dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_1) The bounding boxes do not seem to translate with the animation?_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as I know that is correct. Try this example_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.3dworlds.ca/1webgl/desk/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Desk and Book_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Click to the _lt_u_gt_left_lt_/u_gt_ of the closed book - the book opens!. This is because the book mesh was created as an open book (easier to rig)  - so its bounding box is for the open book. That was made with BJS v1.12 - things may have changed since then._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When you animate an object with a rig you are rotating various groups of vertices of that object with each bone not the object itself. Think about this example_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You attach an object to the hand bone just like you did the sword - a gauntlet - and it moves happily with the animation. Now you try to parent the sword to the gauntlet with_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_sword.parent _eq_ gauntlet_sm__lt_/pre_gt__lt_p_gt_In the animation_co_ the vertices of the object are being changed not the position of the object itself - the bounding box is still the same - so the sword does not move with the animation. So when rigging you must attach each object to the appropriate bones - so for a backpack_co_ use the spine bones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That is how I understand the animation process in BJS - now it is based on an older version 1.12._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe the code experts can explain it in a better way_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"amorgan","Date":"2015-01-30T02:52:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahhhh. That makes sense. Understood now._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And of course I answered my parenting question by actually testing it in the playground_co_ you can parent a mesh who has a parent! Haha. My issues stemmed from Gryff_t_s point and the fact I was parenting to an object that was being manipulated by the bones._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hmm. I will have to think about how I will achieve what I want. So I was using the just the sword as a collision object with OnIntersectEnter_co_ but I was using native animations and actually rotating/moving the sword itself. Now that I_t_m using bones and only animating the vertices I understand why the bounding box does not move. I will have to think about how to change this. I was using this for detecting if I hit an enemy. I could do a more rudimentary scheme like check for distances or using more of a spherical collision mesh for attacking distance and assign variables such as Attacking_co_ Blocking_co_ Idle and based off of that determine if a _qt_hit_qt_ was successful. I was hoping to get a little more _qt_physical_qt_ with this and use the actual weapon meshes colliding with an enemy mesh. I_t_ll see what I can come up with._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-30T03:22:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_I was hoping to get a little more _qt_physical_qt_ with this and use the actual weapon meshes colliding with an enemy mesh. I_t_ll see what I can come up with._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Perhaps you should start a new thread just on the coding aspect of objects that are part of rigs colliding in some way during rig animation with other objects. Basically it is not a Blender problem - rather a coding issue_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I wrote above is just the way I see things - maybe coders will have a different take on the issue and have a solution. It is an interesting little problem though. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had been thinking you wanted to have a sword in a stone which when clicked could be added to the rig  - guess that is a different problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will watch the threads - as it is something I might find useful._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-01-30T15:52:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_69608_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12084_qt_ data-ipsquote-username_eq__qt_amorgan_qt_ data-cite_eq__qt_amorgan_qt_ data-ipsquote-timestamp_eq__qt_1422564605_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_As far as the other question about multiple animations_co_ I was afraid that was the answer. So I can definitely do that_co_ put multiple animations on one track_co_ but that gets very clunky if I need to modify frames with multiple animations. The Action Manager system that blender has is very nice for handling this issue. Which searching_co_ Unity seems to be doing this_co_ so it seems it_t_s at least possible from some aspect._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Think there is a way to use the current _qt_single track_qt_ bone animation that is both easy to maintain and efficient.  Thing to remember is that an animation is not an array of Frames from 0 to the highest frame in Babylon (&amp_sm_ probably Blender).  An animation is an array of frame records_co_ each with a frame # field._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can then have a single animation where there are multiple tracks starting at predictable places_co_ like_dd_ 0_co_ 500_co_ 1000_co_..._co_5000.  I think you can specify start and stop frames in Babylon that do not actually exist.  This would allow for code like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var MAX_TRACK_SIZE _eq_ 500_sm_public playTrack(scene _dd_ BABYLON.Scene_co_ skeleton _dd_ BABYLON.Skeleton_co_ track _eq_ 0){    scene.beginAnimation(skeleton_co_ track * MAX_TRACK_SIZE_co_ (++track * MAX_TRACK_SIZE) - 1)_sm_}_lt_/pre_gt__lt_p_gt_If the first animation is 57 frames_co_ and you need to add 3 more_co_ there is no need to change the Javascript call.  Never tried this_co_ but think it will work.  Playing the whole thing in Blender might look stupid_co_ but so what?  Adding every feature has a development / maintenance cost.  The maintenance cost could be higher than you think_co_ because Blender can change on you.  Better to treat Blender as BabylonJS_t_s bitch._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"wikiwiggs","Date":"2015-02-04T08:17:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As far as your multiple animations go_co_ I believe that you may be able to live with what you can actually get out of blender._lt_/p_gt__lt_p_gt_I_t_m not sure how much you have used the NLA editor_co_ but that allows you to manage and combine animation sequences._lt_/p_gt__lt_p_gt_Specifically in the context of armature animation_co_ you can first use the Dopesheet to define (record) different actions._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The quick tutorial on this is to do the following_dd__lt_/p_gt__lt_p_gt_1. put your armature in pose mode_lt_/p_gt__lt_p_gt_2. set your main timeline keying set to LocRotScale_co_ or LocRot_co_ depends on the complexity of the armature rig._lt_/p_gt__lt_p_gt_3. split your screen (Dopesheet editor one side_co_ 3D view the other)._lt_/p_gt__lt_p_gt_4. set mode dropdown to Action in the Dopesheet view._lt_/p_gt__lt_p_gt_5. in the next dropdown this is where you store your different pose actions._lt_/p_gt__lt_p_gt_    a. I recommend your first one being your rest pose_co_ so you can always have a good starting point._lt_/p_gt__lt_p_gt_    b. but at least create a new action even if you disagree with me._lt_/p_gt__lt_p_gt_6. turn on the properties panel on the 3D view if it is not on already (press N on the keyboard to toggle it)._lt_/p_gt__lt_p_gt_7. begin posing each frame as you normally would_co_ except instead of adding keyframes to the main timeline_dd__lt_/p_gt__lt_p_gt_    a. in the properties panel go through each of the Location (x_co_ y_co_ z) and Rotation fields (x_co_ y_co_ z) and hit the i key._lt_/p_gt__lt_p_gt_    b. over in your dopesheet view_co_ you should start seeing the keyframes popping up._lt_/p_gt__lt_p_gt_8. after you are done_co_ you can use the NLA editor to sequence these actions in the main timeline._lt_/p_gt__lt_p_gt_9. Then you can do what these guys are saying regarding managing the timeline at different time ranges._lt_/p_gt__lt_p_gt_    a. This might not be the most desirable_co_ but at least you can manage it according to context this way._lt_/p_gt__lt_p_gt_        i. for example_co_ you may want your first action to be _qt_whistling_qt__co_ and your second action to be _qt_walking_qt__co__lt_/p_gt__lt_p_gt_        ii. well now based on game properties_co_ you can set the time such as frames 1-10 _eq_ whistling_co_ 15-35 _eq_ walking_co_ 40-60 _eq_ walking+whistling_co_ etc..._lt_/p_gt__lt_p_gt_        iii. Then you can almost use a property bit flag to get all possible scenarios and call the proper frame range._lt_/p_gt__lt_p_gt_    b. The cool part is_co_ is that you can still manage all of this in Blender_co_ and get one big timeline in BabylonJS_co_ without having to rewrite/repose the same actions each time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_d like to share some blend files for you_co_ but I can_t_t seem to figure out how to attach them._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ I hope this added value to your pursuit._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kind Regards_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]