[{"Owner":"reddozen","Date":"2016-01-09T05:17:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_See below. I_t_ve attached the texture too. For whatever reason_co_ 3DS sees the texture fine_co_ but paint.net and babylon show it as a transparency so my models are invisible in the scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does anyone know what_t_s going on with this? Is it something that babylon can account for in the DDS reader?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_MAX File_dd__lt_br_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5988_qt__gt_MN_M_BD_NLS_21108.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Texture_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//diviniaro.com/WGClient/NM_M_BD_NLS_21108.dds_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//diviniaro.com/WGClient/NM_M_BD_NLS_21108.dds_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In 3DS Max_dd__lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//diviniaro.com/WGClient/working_texture.png_qt_ alt_eq__qt_working_texture.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In Paint.net_lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//diviniaro.com/WGClient/texture_view.png_qt_ alt_eq__qt_texture_view.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-09T08:19:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So I looked at it in the AMD_t_s The Compressonator utility. It says the image has no alpha channel but it also says it_t_s encoded as DXT3 - which does store alpha (seems odd to use DXT3 if your texture is meant to be opaque/not use the alpha channel). So I enabled the alpha channel in the utility and mousing over the image the colour sampler indeed shows alpha values that look like those shown in your 2nd screenshot._lt_br_gt__lt_br_gt_TLDR_dd_ image has alpha data which looks like the 2nd screenshot but may have meta data some tools are using to ignore/not display the alpha channel data. Recommendation (from non-Babylon person) don_t_t use DXT3 if you don_t_t have need of an alpha channel_co_ use DXT1 instead_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-01-10T06:17:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Problem is that these are from a dead game that never made it out of beta_co_ so they are what they are. I think the alpha channel was used for pallet dyes to customize the color of the armors._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there any way for babylon to support the DXT3 and DXT5 *.DDS file formats? I would think that textures with alpha channels would be pretty common. This would save me the time of redoing all the textures on a thousand plus models..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chg","Date":"2016-01-10T07:47:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_112055_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19750_qt_ data-ipsquote-username_eq__qt_reddozen_qt_ data-cite_eq__qt_reddozen_qt_ data-ipsquote-timestamp_eq__qt_1452406634_qt__gt__lt_div_gt__lt_p_gt_Problem is that these are from a dead game that never made it out of beta_co_ so they are what they are. I think the alpha channel was used for pallet dyes to customize the color of the armors._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Sure or it was a gloss map or something._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_112055_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19750_qt_ data-ipsquote-username_eq__qt_reddozen_qt_ data-cite_eq__qt_reddozen_qt_ data-ipsquote-timestamp_eq__qt_1452406634_qt__gt__lt_div_gt__lt_p_gt_Is there any way for babylon to support the DXT3 and DXT5 *.DDS file formats?_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I thought we_t_d established it was working the way it should_co_ just not the way you want (ie. Babylon.js seems to be displaying the alpha channel as opacity_co_ that seems to me to be a reasonable default(?) behaviour for an engine to do)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_112055_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19750_qt_ data-ipsquote-username_eq__qt_reddozen_qt_ data-cite_eq__qt_reddozen_qt_ data-ipsquote-timestamp_eq__qt_1452406634_qt__gt__lt_div_gt__lt_p_gt_I would think that textures with alpha channels would be pretty common._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I suspect that_t_s actually an understatement _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_112055_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_19750_qt_ data-ipsquote-username_eq__qt_reddozen_qt_ data-cite_eq__qt_reddozen_qt_ data-ipsquote-timestamp_eq__qt_1452406634_qt__gt__lt_div_gt__lt_p_gt_This would save me the time of redoing all the textures on a thousand plus models..._lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Sounds like a poor excuse to me_co_ do you expect to use thousand of files optimised for a different game / game engine / hardware generation (I_t_m guessing the game the assets came from was well over 10 years ago?) without any modification/adaptation?_lt_/p_gt__lt_p_gt_You_t_ll have to re-encode the textures anyway if you want mobile support as mobile GPUs by and large don_t_t support S3 texture compression (it_t_s a patent licensing thing between GPU manufacturers if I recall correctly)_lt_/p_gt__lt_p_gt_I also seem to recall the texture looking not to have a mipmap when I looked at it_co_ you can_t_t generate mipmaps for compressed textures on the fly and you will probably want mipmaps for texture minification unless you are counting on the textures being pretty much always displayed magnified._lt_/p_gt__lt_p_gt_Anyway the advice that you had the wrong compression was based upon your earlier assertion that the textures shouldn_t_t have opacity_co_ if you want / will use the channel there_t_s no reason not to keep it (the data is 50% of the texture size_co_ so it just seems illogical to me to go to the trouble of using compressed textures but then spend half the data on a channel if your game won_t_t use)_lt_/p_gt__lt_p_gt_It seems to me that what you actually wanted to ask has nothing at all to do with compressed textures nor support for the DDS file format._lt_/p_gt__lt_p_gt_Instead you want to know how to tell Babylon.js to use the RGB data from your texture as the diffuse colour but ignore the alpha data present and just draw pixels opaquely (you_t_d probably be better off posting your code / a playground example than your texture file/s)_lt_/p_gt__lt_p_gt_You also possible want to know how to use the same texture as a gloss map or some other kind of map_co_ but only use the alpha channel._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-01-11T13:05:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ it_t_s a 10 year old game_co_ and yes I agree that it would be logical for the alpha layer to be the root problem with why my objects are showing up transparent. We have spent many years building tools to extract these models in their entirety from the original client. We even cracked the thermidia obfuscated and vendor modified *.unr file format to extract map object coordinate locations for all the maps. The character model is just our next step. Our intent is to render everything as it was and get everything working. Then we will optimize as needed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ the reason why I brought all this up in the first place is because the models renders perfectly fine in 3DS Max and UE Viewer_co_ and therefor the information as to how to handle the transparency already exists within the model itself / Max environment. With this reasoning_co_ I would have to assume that something in the export script is not translating that information properly_co_ or babylon cannot currently handle these particular models the way 2k4 and 3DS Max would expect them to be handled. This is the first time that I have seen this happen_co_ but that makes since as they would have spent more time making the player character _qt_pretty_qt_ than using complex textures on the environment. The only exception to this is the terrain textures that we have not been able to find a clean way to implement. That may well be another discussion to have / ask for guidance with though. I will attach the max file to the first post._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-01-20T15:10:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m still curious about this_co_ and if it could be an exporter issue. As I said_co_ it renders correctly in Unreal_co_ UE Viewer_co_ and 3DS Max.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe max file is in the first post.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Supermitch","Date":"2016-01-21T17:25:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn fact_co_ for more efficiency_co_ if you bake the opacity inside the diffuse channel_co_ Babylonjs turns the opacity process into a 1bit story (visible/not visible). If you want to be more accurate (with a nice 8 bit treatment) you should add a real opacity channel (in 256 shades of grey).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy the way_co_ DDS is efficient_co_ support a lot of things_co_ but real editing tools are outdated (especially plugins for Photoshop)_co_ and it is not a native web format. My 2 cents...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-02-07T15:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I found the issue_co_ but it_t_s not currently solvable by simply changing the texture format._lt_br_gt_\n\t Simply put_co_ Unreal Engine and several other engines use a _qt_Layered Materials_qt_ system to build complex textures that would otherwise be very complicated to implement in a standard texturing application.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDK_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m hoping that you have some insight as to how this could and should work in Babylon. I would imagine that some changes would have to be made to the *.babylon file format spec to account for these kind of textures_co_ or maybe something needs to change in the 3DS exporter to have them accounted for in an already existing format spec? This is where I_t_m at a loss. My project is essentially dead in the water (and anyone else wanting to export some things from Unreal Engine files) if there_t_s no way for Babylon to support these kind of textures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUnreal appears to use the same kind of texturing for their terrains. They use a height map for the structure_co_ and then a layered material for breaking out texture types with layers of fixed alpha maps then tiled textures piled up to make all the pieces of the map. More like a controlled and defined version of the worldmonger demo that_t_s not based on elevation. So they could define a road in one alpha map and combine it with the road texture_co_ then rocks alpha and a rock texture_co_ etc and it covers all uses of that texture across the whole map that the fixed alpha map is assigned to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll help in any way I can with files or examples to whomever needs them. If this is something that just isn_t_t ever going to be done_co_ then that_t_s ok too_co_ but just let me know. No reason to keep trying to convert this project from Unreal to Babylon if it_t_s physically impossible to do so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-08T01:22:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEverything is possible _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Just a matter of time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you check this material_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/materials/terrain_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary/materials/terrain_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDocumentation_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Terrain_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Terrain_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-02-08T14:44:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s pretty cool! kind of a different_co_ but more effective version of the same thing. You can assign a lot of colors instead of tons of layers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess the question then would be_co_ can this be done to objects other than just terrain? I wonder if maybe there could also be a version that doesn_t_t blend the materials_co_ but just defines the up to 16_co_777_co_216 different possibilities? I don_t_t think the armor on my models blends things so much as layers all the pieces_co_ and I_t_m sure that some may have more than 4 parts. I_t_ll have to see just how complex they get...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-08T19:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis could be applied to any mesh I guess _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt__gt_@Luaacro_lt_/a_gt_ can you confirm?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-02-09T11:59:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI confirm_co_ to any mesh_co_ even animated _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ you can mix only 3 textures maximum with this terrain material (according to R_co_ G and B colors). If you need_co_ I can add the alpha channel as source then you_t_ll be able to mix 4 textures according to R_co_ G_co_ B and A\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"reddozen","Date":"2016-02-10T17:10:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Luaacro_co_ but no need to do that right now. My current issue is more needing to be able to layer all the texture materials and not blend them together. Your solution proves that it_t_s possible to account for_co_ but it doesn_t_t allow for 3DS to export the types of layered textures into something that Babylon can utilize. I_t_m pretty confident that we have some models with more than 4 layers of textures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe would either have to hope that someone would add in support for this_co_ or rebuild every character model asset by hand before it_t_s usable. This is honestly not feasible with 1_co_000+ models to modify and re-texture_co_ so we will do 1 complete set of equipment to test with for now until a better solution may come along later.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-02-11T18:16:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHum_co_ you mean multiple layers in only one texture ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]