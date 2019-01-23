[{"Owner":"adam","Date":"2015-12-10T13:47:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is a question to the people who contribute code to BabylonJS.  How do you do it without breaking some other code you are not familiar with?  Are there any tests that you run before committing?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2015-12-10T14:14:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strike_gt_hi adam ._lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt_what you means ? about code all 3d engine is independed code._lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strike_gt_you can make it with php and asp and mvc and solid html ._lt_/strike_gt__lt_/p_gt__lt_p_gt__lt_strike_gt_ and dont need change any code you have it because all engine begin in client side and result here  and all source inside BAYBYLON plugin and you just create a instance and start your scene ._lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i dont understand your question thanks @RaananW _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-10T14:17:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s a good question._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Running the gulp typescript build is a start. TypeScript is type-safe_co_ so technically you would find out if you made silly JS mistakes (naming a variable wrong etc_t_)._lt_/p_gt__lt_p_gt_Other than that - use the compiled code to run a simple scene - see that it is working well. Also create a demo scene for the feature you have just changed / created and see that it works. That_t_s the best way of testing._lt_/p_gt__lt_p_gt_I was working on Mocha-Testing (was hoping to be finished before 2.3 is out. I still hope). But even with selenium integrated_co_ those tests cannot fully check a 3D scene. this is a task for two eyes and a mouse._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Make sure you understand how git works. If you don_t_t_co_ simply ask! It is hard at the beginning and easy afterwards!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Make sure you only commit .ts files. .js are automatically compiled._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Write clean code_co_ try to stay conform to the BJS coding style. It is rather standard. Keep your code formatted._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Don_t_t break functionality. Everything should be backwards-compatible. This is important for previously created playgrounds_co_ and a simple upgrade for a newer version._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have fun!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BTW - even if you do make a mistake_co_ we will let you know after reviewing your commit. We will then ask you to repair it_co_ and will be more than happy to show you how!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-12-10T14:42:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As an example_co_ CreateLathe is still not working correctly.  I got it to work on my end by modifying ExtrudeShapeGeneric.  Other code depends on ExtrudeShapeGeneric.  If there was a test I could run to make sure that I didn_t_t break any functionality_co_ I would feel more comfortable contributing my code._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-12-10T19:24:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_An other advice I_t_d like to add to Raanan_t_s_dd_ versionning is about coding bricks_co_ when using git_co_ if you commit only once a day you_t_re probably not using it efficiently_co_ a commit should contain only the changes actually related to the unit thing you_t_re currently modifiying._lt_/p_gt__lt_p_gt_Two differents points equal two differents commits_co_ two differents functionnalities equal two differents pull requests._lt_/p_gt__lt_p_gt_This will help you and others to easily check code and track potential conflicts._lt_/p_gt__lt_p_gt_Sounds obvious_co_ but better be said than ignored._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-10T20:22:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_108746_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19171_qt_ data-ipsquote-username_eq__qt_adam_qt_ data-cite_eq__qt_adam_qt_ data-ipsquote-timestamp_eq__qt_1449758538_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_As an example_co_ CreateLathe is still not working correctly.  I got it to work on my end by modifying ExtrudeShapeGeneric.  Other code depends on ExtrudeShapeGeneric.  If there was a test I could run to make sure that I didn_t_t break any functionality_co_ I would feel more comfortable contributing my code._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Well_co_ that_t_s an issue that should be addressed! why isn_t_t it working corrctly? most of our bug reports are coming from the users themselves!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About testing - as I said_co_ hopefully 2.3 final will contain tests already. If not 2.3 then the next version. That I promise _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-12-10T20:38:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_108793_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19171_qt_ data-ipsquote-username_eq__qt_RaananW_qt_ data-cite_eq__qt_RaananW_qt_ data-ipsquote-timestamp_eq__qt_1449778971_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Well_co_ that_t_s an issue that should be addressed! why isn_t_t it working corrctly? most of our bug reports are coming from the users themselves!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About testing - as I said_co_ hopefully 2.3 final will contain tests already. If not 2.3 then the next version. That I promise _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14939-new-mesh-type-lathe/?p_eq_91689_qt__gt_http_dd_//www.html5gamedevs.com/topic/14939-new-mesh-type-lathe/?p_eq_91689_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The way it looks with my modifications to _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ExtrudeShapeGeneric_lt_/span_gt__dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KN1LB%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KN1LB#32_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Current state_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KN1LB%2335_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KN1LB#35_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-12-10T21:47:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@Raanan_dd_ Adding tests is nice but we should be aware that it does not make the size of the BJS lib increase ! We are on the web_co_ size matters._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-10T22:09:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_tests are always external_co_ don_t_t worry._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"G&#039;kar","Date":"2015-12-19T21:04:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ reading this forum thread remind me that I wrote a few notes on the step I followed to my first contribution to babylonJS core._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here it is for you (provided as is_co_ initially for my own reminder_co_ may be worth sharing ? I let you see)._lt_/p_gt__lt_p_gt_Nothing new in fact_co_ just take me some time to get through the process_co_ collecting pointer to information_co_ so would be happy if this can help other to find such info more quickly than me. (as i wrote some time ago_co_ I was also wondering how to test my change versus any regression tests _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt__lt_strong_gt_Workflow for babylonjs contribution_lt_/strong_gt__lt_/u_gt__lt_br_gt__lt_br_gt_1) Typescript vs Javascript_lt_br_gt_ babylon used javascript_co_ then moved to typescript language for coding._lt_br_gt_Ideas behind the choice are available here _dd_ _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/28/why-we-decided-to-move-from-plain-javascript-to-typescript-for-babylon-js.aspx?WT.mc_id_eq_16566-DEV-codeproject-article51_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/28/why-we-decided-to-move-from-plain-javascript-to-typescript-for-babylon-js.aspx?WT.mc_id_eq_16566-DEV-codeproject-article51_lt_/a_gt__lt_br_gt_So now source file are a mix of .ts and .js files._lt_br_gt_.ts is the reference_co_ but still possible to summit change as .js (up to project leader to merge the changes proposal to .ts)_lt_br_gt_I quote from ... _dd_ _qt_... to educate developers to try to have less contributions in JavaScript and more in TypeScript._qt__lt_br_gt_Look like there is many advantages to use typescript_co_ recommended !_lt_br_gt_so now_co_ what to do it for the coding work-flow ? see below_lt_br_gt__lt_br_gt__lt_br_gt_2) file generation summary_lt_br_gt__lt_br_gt_x.ts -&gt_sm_ x.js  \\_lt_br_gt_y.ts -&gt_sm_ y.js  |_lt_br_gt_..ts -&gt_sm_ ..js  |-&gt_sm_ babylon.js_co_ babylonmax.js_co_ ..._lt_br_gt_..ts -&gt_sm_ ..js  |_lt_br_gt_z.ts -&gt_sm_ z.js  /_lt_br_gt__lt_br_gt_tools are _dd__lt_br_gt_- typescript compiler (.ts -&gt_sm_ .js)_lt_br_gt_- dependencies analysis _dd_ gulp+node.js_lt_br_gt__lt_br_gt_3) build commands_dd__lt_br_gt_prepare_dd_ npm gulp install_lt_br_gt_refresh all .js from .ts _dd_ gulp typescript_lt_br_gt_idem+including declaration file_dd_ gulp typescript-compile_lt_br_gt_have auto refresh in background when you save your file _dd_ gulp watch-typescript_lt_br_gt__lt_br_gt_4) tools install_lt_br_gt_4.1) tools install Linux_lt_br_gt_Good starting point at _dd_ _qt_Build Babylon.js with Gulp_qt__lt_br_gt_  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/Gulp_lt_/a_gt__lt_br_gt_Gulp is claimed as cross platform_dd__lt_br_gt__lt_br_gt_npm (_eq_ nodejs package manager)_lt_br_gt_intalling npm to get gulp ..._lt_br_gt_  seem to get trouble with nodejs _dd_ _qt_wanted_dd_ {_qt_node_qt__dd__qt_&gt_sm__eq_0.12.0_qt_} (current_dd_ {_qt_node_qt__dd__qt_v0.10.25_qt__co__qt_npm_qt__dd__qt_1.3.10_qt_})_qt__lt_br_gt_  I install v4.2.1 as told in _lt_a href_eq__qt_https_dd_//nodejs.org/en/download/package-manager/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//nodejs.org/en/download/package-manager/_lt_/a_gt__lt_br_gt_  In fact false issue (just wrong idea to put Babylon.js on samba net drive_co_ links are not working well with gulp on CIFS disk)_lt_br_gt_  Waste lot of time on this stupid one._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_npm and gulp is all you need. The rest of the dependencies are defined in the package.json file_co_ located in the Gulp directory. Including typescript._lt_/p_gt__lt_p_gt_So_co_ all you need to do is _lt_/p_gt__lt_p_gt_&gt_sm_ Install NodeJS_lt_/p_gt__lt_p_gt_&gt_sm_ Install Gulp_dd__lt_/p_gt__lt_p_gt__lt_span_gt_  npm install _lt_/span_gt__lt_span_gt_-_lt_/span_gt__lt_span_gt_g gulp_lt_/span_gt__lt_/p_gt__lt_p_gt_&gt_sm_ Install the dependencies_lt_/p_gt__lt_p_gt__lt_span_gt_  npm install_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Optional_dd__lt_br_gt_Get typescript on command line _dd_ _t_sudo npm install -g typescript_t__lt_br_gt_Then you can compile typescript with _t_tsc your_source_file.ts_t__lt_br_gt__lt_br_gt_4.2) tools install Windows_lt_br_gt_TBD (not using windows at the moment_co_ can check later)_lt_br_gt_typescript supported in visual studio_lt_br_gt__lt_br_gt_5) prepare a contribution_lt_br_gt_Just have to edit the .ts file to add your feature_lt_br_gt_Regenerate the babylon.js file from the source .ts_lt_br_gt_Test this is as you expect (using the above build command)_lt_br_gt__lt_br_gt_Question_dd_ Is there any basic regression test procedure available_co_ or any list of test to do to see if basic things are broken ?_lt_br_gt_Or do you throw your change and rely on other to detect your bug for you ?_lt_br_gt_(Sorry for the though_co_ I am sure no one can leave any bug in his perfect code)_lt_br_gt__lt_br_gt_6) Pull request process_lt_br_gt_repository is github hosted._lt_br_gt_- Create a github account if you don_t_t have one already (easy on _lt_a href_eq__qt_https_dd_//github.com/)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/)_lt_/a_gt__lt_br_gt_- Fork th babylon.js project (see how on _lt_a href_eq__qt_https_dd_//help.github.com/articles/fork-a-repo/)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//help.github.com/articles/fork-a-repo/)_lt_/a_gt__lt_br_gt_- Clone the just fork repo to your local machine_lt_br_gt_  _t_git clone _lt_a href_eq__qt_https_dd_//github.com/YOUR-USERNAME/Babylon.js.git_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/YOUR-USERNAME/Babylon.js.git_lt_/a_gt_ YOUR-HOME-DIRECTORY-TO-WORK-ON_t__lt_br_gt_- create your branch with your contribution_lt_br_gt_  To be defined_lt_br_gt_- issue a PR_eq_pull request for your contribution to be merged to main branch of development_lt_br_gt_- Admin/proj leader/... will considerer your change (good/bad/to be adjusted/discussed ...)_lt_br_gt_- hopefully you get your contrib integrated in the main development flow (in the upcoming release _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_br_gt_  YOUR-USERNAME/Babylon.js --&gt_sm_ BabylonJS/Babylon.js_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2015-12-20T20_dd_03_dd_27Z_t_ title_eq__t_12/20/2015 08_dd_03  PM_t_ data-short_eq__t_2 yr_t__gt_December 20_co_ 2015_lt_/time_gt_ by G&#39_sm_kar_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-20T08:59:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@adam _dd_ sorry_co_ for the late answer_co_ I thought a PR with your fix was already done._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Actually_co_ the bug is only about manually capped lathes as I remember._lt_/p_gt__lt_p_gt_Adam found a fix to this dedicated case and I wanted_co_ at this moment_co_ to take the time to check if the lathe geometry could be improved more generally to solve this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And I forgot ...  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_The SPS implementation and my conf took my mind away from this._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I think that I will_co_ in early january_co_ recode the Adam_t_s fix in TS and PR it. This will help people using the lathe and wanting to cap it manually._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I_t_ll have time  _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1 ) to try to implement the ribbon _lt_em_gt_closeArray_lt_/em_gt_ smooth seam as the _lt_em_gt_closePath_lt_/em_gt_ seam_co_ what is quite complex to do._lt_/p_gt__lt_p_gt_The tube relies on the closed ribbon with _lt_em_gt_closePath_lt_/em_gt_ and is now really wroking in terms of uvs and normals_co_ even when morphed. The lathe relies on the closed ribbon with _lt_em_gt_closeArray_lt_/em_gt_ . Maybe improving the closePath will solve all of the sudden the lathe manual cap._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2 ) else to check accurately how to improve the lathe geometry so it could take generally in account the cases of manual capping without using any dedicated process._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-12-20T09:03:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@G_t_Kar_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Very interesting report on BJS contribution workflow !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-20T19:37:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi G_t_Kar_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nive review _dd_-)_lt_/p_gt__lt_p_gt_here are my notes_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_109753_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19171_qt_ data-ipsquote-username_eq__qt_G_qt_ data-cite_eq__qt_G_qt_ data-ipsquote-timestamp_eq__qt_1450559089_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_tools are _dd__lt_/p_gt__lt_p_gt_- typescript compiler (.ts -&gt_sm_ .js)_lt_br_gt_- dependencies analysis _dd_ gulp+node.js+???_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_npm and gulp is all you need. The rest of the dependencies are defined in the package.json file_co_ located in the Gulp directory. Including typescript._lt_/p_gt__lt_p_gt_So_co_ all you need to do is _lt_/p_gt__lt_p_gt_1) Install NodeJS_lt_/p_gt__lt_p_gt_2) Install Gulp_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_npm install -g gulp_lt_/pre_gt__lt_p_gt_3) Install the dependencies_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_npm install_lt_/pre_gt__lt_p_gt_4) Enjoy._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can of course (as you stated later) install typescript globally_co_ but it is not needed for the project. using gulp typescript (or the watch variant) will keep your js files compiled in the correct way with the correct dependencies._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_109753_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19171_qt_ data-ipsquote-username_eq__qt_G_qt_ data-cite_eq__qt_G_qt_ data-ipsquote-timestamp_eq__qt_1450559089_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Question_dd_ Is there any basic regression test procedure available_co_ or any list of test to do to see if basic things are broken ?_lt_/p_gt__lt_p_gt_Or do you throw your change and rely on other to detect your bug for you ?_lt_br_gt_(Sorry for the though_co_ I am sure no one can leave any bug in his perfect code)_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_TypeScript_t_s major feature is type safety (one thing that lacks in javascript _dd_-) ). If you try to compile babylon after making a change_co_ this will be the first thing you need to check. If your code compiles_co_ you used the right types in the right areas (except for when you _qt_cheat_qt_ ad use _qt_any_qt_ as type constantly. In that case you lose the typescript benefit)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The Repo_t_s admins will look at your code_co_ compile a scene or two with it (if it is needed) and approve or deny (usually - will tell you what_t_s wrong)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I said - unit tests are on the making. Our ToDo list is sadly (or happily _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) very large_co_ and this is the only holdback._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_109753_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19171_qt_ data-ipsquote-username_eq__qt_G_qt_ data-cite_eq__qt_G_qt_ data-ipsquote-timestamp_eq__qt_1450559089_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_6) Pull request process_lt_/p_gt__lt_p_gt_repository is github hosted._lt_br_gt_- Create a github account if you don_t_t have one already (easy on _lt_a href_eq__qt_https_dd_//github.com/)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/)_lt_/a_gt__lt_br_gt_- Fork th babylon.js project (see how on _lt_a href_eq__qt_https_dd_//help.github.com/articles/fork-a-repo/)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//help.github.com/articles/fork-a-repo/)_lt_/a_gt__lt_br_gt_- Clone the just fork repo to your local machine_lt_br_gt_  _t_git clone _lt_a href_eq__qt_https_dd_//github.com/YOUR-USERNAME/Babylon.js.git_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/YOUR-USERNAME/Babylon.js.git_lt_/a_gt_ YOUR-HOME-DIRECTORY-TO-WORK-ON_t__lt_br_gt_- create your branch with your contribution_lt_br_gt_  To be defined_lt_br_gt_- issue a PR_eq_pull request for your contribution to be merged to main branch of development_lt_br_gt_- Admin/proj leader/... will considerer your change (good/bad/to be adjusted/discussed ...)_lt_br_gt_- hopefully you get your contrib integrated in the main development flow (in the upcoming release _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_br_gt_  YOUR-USERNAME/Babylon.js --&gt_sm_ BabylonJS/Babylon.js_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_That_t_s correct. there are a few other steps_co_ but this is already git related. The most important one is merging Babylon_t_s master to your branch before making a pull request_co_ to make sure no conflicts occurred._lt_/p_gt__lt_p_gt_If any one needs git help_co_ give us a shout - we will be more than happy to explain. We will help anyone who will approach nicely and ask a question. Was like that so far_co_ and will stay like that in the future _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"G&#039;kar","Date":"2015-12-20T19:55:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for feedback._lt_/p_gt__lt_p_gt_I try to edit my post to reflect some of your comments (trying to avoid confusion for other)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-04T15:06:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@adam _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking at your code _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KN1LB%2332_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KN1LB#32_lt_/a_gt__lt_/p_gt__lt_p_gt_At the line 142_co_ you clone the model shape as it is for the first iteration of the lathe extrusion._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This works well for the lathe because the model shape is defined in the plane xOy. So the clone (first iteration) is also in the same plane and then we extrude by rotating around the Y axis._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But ExtrudeShapeGeneric must work for any kind of extrusion_co_ not only rotation around the Y axis._lt_/p_gt__lt_p_gt_I_t_m afraid this code fixes only the Lathe but breaks every other extruded shapes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Nevertheless_co_ reading your code leaded me to something particular _dd_ the Lathe is the only pre-build extruded geometry needing to _qt_close_qt_ its underlying ribbon path array._lt_/p_gt__lt_p_gt_And the ribbon parameter _lt_em_gt_closeArray_lt_/em_gt_ still needs the same (complex) optimization than the one done for the parameter _lt_em_gt_closePath. _lt_/em_gt_So I need to dig in this way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unless it_t_s in the Lathe geometry itself ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_[EDIT] _dd_ I_t_m checking_co_ I think it_t_s in the lathe geometry itself ... I_t_ll let you know_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-04T17:02:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok  got it _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not that simple to explain_co_ but an extrusion is built on top a Path3D and as a Path3D can_t_t know how its path will evolve after its start_co_ the first position of an extruded shape is always orthogonal to the path (in the plane normal/binormal actually). It_t_s not aware of any kind of external rotation center._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But we expect it to be radial when we design a circular lathe._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In brief_co_ _lt_em_gt_ExtrudeCustomShape()_lt_/em_gt_ won_t_t fit for the lathe. I will recode a ribbon-based dedicated geometry for this._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-05T12:33:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_new lathe geometry PR_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tested it _dd_ no more artifact at all _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-07T15:49:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I just added to the Lathe object the feature cap._lt_/p_gt__lt_p_gt_Same values and behavior than for the tube _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It adds automatically some cap(s) where you ask for._lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var lathe _eq_ BABYLON.MeshBuilder.CreateLathe(_qt_l_qt__co_{shape_dd_ shape_co_ cap_dd_ CAP_NUMBER}_co_ scene)_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-01-08T08:58:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@adam _dd_ the existing PG with the updated geometry _eq_&gt_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KN1LB%2335_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KN1LB#35_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I simplified then the model shape and here is the same with the cap parameter _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KN1LB%2336_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KN1LB#36_lt_/a_gt__lt_/p_gt__lt_p_gt_Don_t_t care about the little error on the bottom cap_co_ it_t_s already fixed in github_co_ it will automatically disappear when the ficed will be pushed in the PG engine._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]