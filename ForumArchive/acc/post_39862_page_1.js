[{"Owner":"Starflare","Date":"2018-09-06T14:50:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been smacking my head against the wall with this issue for some time now_co_ so I hope you can help me out _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI had a DDS file for the reflection map for my PBR materials that worked perfectly fine. The image itself had some areas that were way too bright_co_ so I had to _lt_strong_gt_adjust it in Photoshop and export it again with nVidia tools as DDS_lt_/strong_gt_._lt_br /_gt_\n\tnVidia tools has tons of options for the DDS file_co_ but I basically exported a _lt_strong_gt_DXT1 without mipmapping as a cubemap_lt_/strong_gt__co_ and when loading it again on scene_co_ the scene is waaaaay too dark (and it_t_s not related to the changes I did).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested in IBLBaker and I noticed_co_ however_co_ that _lt_strong_gt_the gamma of my file_lt_/strong_gt_ exported from Photoshop was 2.20_co_ instead of 1.0 as it usually is when exporting from IBLBaker. If I save the file from Photo in IBLBaker_co_ and load it again_co_ it_t_s way too bright and does not reflect as much detail as the very first one. Tried other different compression formats for the file_co_ but all of them unsuccessful.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_[Screenshot from IBLBaker attached]_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat it_t_s dark is not an issue_co_ as long as I put some lights on my scene. My biggest concern is that after getting this new environment map into my scene in Babylon_co_ turns out that the _lt_strong_gt_roughness is not processed _lt_/strong_gt_for some reason. _lt_strong_gt_Every PBR material is 100% glossy_co_ despite the values or textures applied to them_lt_/strong_gt_. Metalness is_co_ however_co_ processed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat could be causing the problem? Am I exporting the DDS file from Photoshop with the wrong settings? Is it an issue from BabylonJS not being able to process a specific DDS compression? I_t_m at a loss.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you guys can help me. Thanks in advance! _lt_span class_eq__qt_ipsEmoji_qt__gt_❤️_lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_09/ddshelp.png.72212b7a28b79027395c9d4fdb5d36db.png_qt_ data-fileid_eq__qt_19911_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_ddshelp.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19911_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_09/ddshelp.thumb.png.a2dc56cfe557249d5c603b1dbff67bee.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-09-06T15:12:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not sure Photoshop exports dds converving HDR values (even less sure when you see that the nvidia plugin wasn_t_t been update since 2012).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you talk about reflection map_co_ you talk about scene environnementTexture right_co_ and not reflectionTexture in each of your PBRMaterials?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ in IBL Baker_co_ have you tried playing with Environment Scale to darken a little your envTexture?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage_qt_ height_eq__qt_367_qt_ src_eq__qt_https_dd_//i.imgur.com/97XPPjt.png_qt_ style_eq__qt_width_dd_200px_sm_height_dd_auto_sm__qt_ width_eq__qt_392_qt_ alt_eq__qt_97XPPjt.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if so_co_ do you use the yourFileName_SpecularHDR.dds?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Starflare","Date":"2018-09-06T15:22:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your quick reply!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ I_t_m aware that the plugin is totally obsolete... I_t_ve been looking on the web for some time now and there_t_s very vague information on this topic_co_ to be honest _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI meant the environmentTexture_co_ that_t_s correct. I tried the Environment Scale_co_ but in IBLBaker it only exaggerates the gloss_co_ not the _qt_strength of the lights_qt__co_ if it makes any sense. Also_co_ as I mentioned_co_ the file exported from Photoshop is not processing any values for gloss in BabylonJS for some reason. The darkness of the scene is not as important as the gloss part of it. It_t_s quite weird. Unfortunately I cannot share the file with you_co_ but I hope this explanation is as accurate as possible to define the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe good thing about Photoshop is that it would export a very small file (40kb) compared to IBLBaker (2mb)_co_ and the smallest size possible is something really good for my project. Any chance IBLBaker lets me compress the file more or less? Or any other program?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you once more _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-09-06T15:29:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo compress_co_ you can use the new _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering#creating-a-compressed-environment-texture_qt_ rel_eq__qt_external nofollow_qt__gt_BJS format .env_lt_/a_gt_ (and also reduce the texture size of course).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI never try it yet_co_ but on the same doc page you have some talk about _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/physically_based_rendering#creating-a-dds-environment-file-from-lys_qt_ rel_eq__qt_external nofollow_qt__gt_Lys software_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can also try _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/playground_textures#hdr_qt_ rel_eq__qt_external nofollow_qt__gt_using directly hdr files_lt_/a_gt_... But I_t_m not sure about hardware compatibility_co_ and this is painful for download size _lt_span class_eq__qt_ipsEmoji_qt__gt_😶_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Starflare","Date":"2018-09-07T07:16:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll definitely try the things that you_t_ve shared_co_ specially that compressor. I didn_t_t know of that!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you so much for the help! Wish me luck _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Starflare","Date":"2018-09-07T09:05:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEnded up doing a workaround_co_ in case it_t_s helpful for anyone_co_ the steps_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- I opened my HDR image_co_ which was set as a cylindrical projection_co_ in Photoshop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Changed the mode from 32bits to 16bits_co_ tweaked whatever was needed in Photoshop and saved as PNG  (maybe HDR could work as well but I didn_t_t try).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Converted to .DDS through a _lt_a href_eq__qt_https_dd_//www.aconvert.com/image/png-to-dds/_qt_ rel_eq__qt_external nofollow_qt__gt_PNG-to-DDS converter_lt_/a_gt_ online.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Imported in _lt_a href_eq__qt_https_dd_//github.com/derkreature/IBLBaker_qt_ rel_eq__qt_external nofollow_qt__gt_IBL Baker_lt_/a_gt__co_ saved environment as DDS. IBL Baker transforms the cylindrical projection to cubemap (for BJS) and allows me to choose the resolution.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tProfit! _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Now onto using the BJS Format .ENV to compress the file._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_The moral of the story is that Photoshop nVidia DDS Tools is deprecated and destroys the gamma of the files for some reason. Use workarounds!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thank you again for the help_co_ _lt_em_gt_V!nc3r_lt_/em_gt_!_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-09-07T10:15:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut don_t_t you loose lighting informations by switching from 32 to 16_co_ and then saving as png?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]