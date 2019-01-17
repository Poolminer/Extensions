[{"Owner":"royibernthal","Date":"2016-12-13T00:43:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have a scene with 5 models with animations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach model is supposed to act like that_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tidle animation in loops by default\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhenever an action is called_co_ it is played_co_ and when its animation is completed_co_ the model goes back to idle animation in loops\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe scene starts with 5 models in the idle animation loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick the _qt_Test_qt_ button to trigger an action animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Is there a way to remove onComplete callback from an Animation once it is created? It seems it is also triggered by animation.stop()_co_ and I_t_d like to avoid that. I tried to null animation.onAnimationEnd but it resulted in very weird behavior.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Each time I try to play an action animation in all models by hitting the _qt_Test_qt_ button_co_ animations are played on a seemingly random (probably not really random) number of models_co_ and the rest simply stop (probably following the stop() call).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you try to hit the _qt_Test_qt_ button a couple of times during an action animation you_t_ll notice an even weirder behavior. Why is this happening?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I use a setTimeout to delay playing a new animation after stopping the previously played one_co_ it seems to create some order in the chaos_co_ but I_t_d like to understand better what_t_s going on_co_ since even this is a very imperfect solution that has its own problems_co_ or possibly other problems that_t_d appear regardless of this one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%2346_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#46_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-13T16:43:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Royi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) I assume you mean the onAnimationEnd ? you could simply set to to be undefined and it will not be called (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Animations/babylon.animatable.ts#L119_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Animations/babylon.animatable.ts#L119_lt_/a_gt_) . Unless I misunderstood_co_ and then - forget it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t2) About your scene - I think this has something to do with the way the skeletons are stored and initialized. But it needs to be further debugged. I try finding time later this evening.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-12-15T01:04:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Raanan_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Yeah that_t_s what I meant_co_ I tried it and for some reason I encountered many weird behaviors afterwards (no errors thrown).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try it again as soon as I can to see if I can pinpoint the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Can_t_t wait _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I really need fresh (and more experienced) eyes to take a look it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-15T07:19:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ been busy ☺ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut this evening looks promising\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-16T15:51:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMan_co_ asynchronity is a b*tch _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ here is a working demo for you - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%2348_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#48_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou had a few problems with the _qt_this_qt_ settings. for example the this.loop was used incorrectly The onAnimationEnd (your _qt_onCallback_qt_ function) was called_co_ and stopped the triggered animation_co_ right after it started.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you _qt_beginAnimation_qt_ on a single skeleton_co_ you stop the animation that is currently running. You can see in lines 146-150 how you could have implemented it rather easily_co_ but I do understand the need to work with objects. You just need to restructure your code_co_ and use less object variables and more standalone variables (like the loop or callback) to avoid reuse of functionalities that will prevent the other animations from working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am also not sure why you were disabling and enabling your skeletons_co_ but I am pretty sure you need that for your actually demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI read what I just wrote and it can sound a bit cryptic. If I am not too clear_co_ please let me know!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-12-17T00:42:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_155543_qt_ data-ipsquote-contentid_eq__qt_27015_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1481903498_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 12/16/2016 at 5_dd_51 PM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIf you _qt_beginAnimation_qt_ on a single skeleton_co_ you stop the animation that is currently running.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGood to know_co_ I wasn_t_t aware of that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m enabling skeletons only during animations and disabling them right afterwards to improve performance (avoiding bones calculation when not needed)_co_ following Deltakosh_t_s advice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need MeshGroup.onComplete to disable the skeleton when the animation is finished. In this case there_t_s always an animation playing so it doesn_t_t matter very much_co_ but I need this to work in other cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to keep the same structure by fat arrowing all the functions leading to the onComplete. I nulled the onAnimationEnd before playing a new animation so that the callback is no longer called when the previous animation is stopped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%2352_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#52_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this objects based structure not a good practice in your opinion? Is it problematic other than having to pay close attention to the _qt_this_qt_ context?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ thanks for the help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I wouldn_t_t have managed without it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-12-17T01:58:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou should generally try to get a working example going before doing any optimizations that might not even be worth the trouble.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-17T19:31:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSetting a callback to call this.onCallback() and then changing this.onCallback is the main reason why async is a wonderful and horrible thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure why you set the architecture like that_co_ but when you set this as the callback_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_() _eq_&gt_sm_ this.onCallback()_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou are creating an anonymous function that will call this.onCallback. If you changed it afterwards_co_ it will run the newer one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would personally not use such an object to control callbacks. I don_t_t quite see the reason for over complicating things in that case. But again_co_ it really depends on your entire game architecture_co_ which I don_t_t really see. As long as you understand your code and the code scales_co_ it_t_s more than fine. Everyone has opinions regarding software architecture. Hard to please_t_em all _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding your question (why it is executed when beginAnimation was executed) - this is because the last animation stopped (the idle animation) right before starting the _qt_happy_qt_ animation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd about skeletons - I just didn_t_t understand why you call false_co_ and right after (the same function scope_co_ if I remember correctly)_co_ you set it to true. Just didn_t_t make any sense to me. But again - we don_t_t see the real picture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-12-17T21:52:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI get the feeling you didn_t_t notice (or partly noticed?) my edit before sending your reply (I edited almost everything). I should_t_ve probably just sent a new reply instead _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRegarding creating an anonymous function - yes I_t_m aware of that_co_ actually in my project I_t_m defining the function with a fat arrow to begin with instead of constantly creating new anonymous functions_co_ it doesn_t_t seem to work in the PG for some reason_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_Mesh.prototype.onComplete _eq_ () _eq_&gt_sm_ { }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYeah I guess you_t_re right about software architecture _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]