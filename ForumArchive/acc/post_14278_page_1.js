[{"Owner":"spritefire","Date":"2015-05-04T16:02:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys_co_ _lt_br_gt__lt_br_gt_Just a quick question because  couldn_t_t find any info anywhere._lt_br_gt__lt_br_gt_Is it possible to use image data as a texture? if so how would i go about it? I_t_m not having much luck_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ie var image_eq_ canvas.toDataURL(_qt_image/jpg_qt_)_sm_  Can post this to the server and create image file which works fine which I can then change the texture on the mesh with that file. _lt_br_gt__lt_br_gt_But what I would like to do is just skip the server upload / file creation so the data is used directly. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_scene.mesh.material.diffuseTexture.dispose()_sm__lt_/div_gt__lt_div_gt_scene.mesh.material.diffuseTexture _eq_ new BABYLON.Texture(image_co_ scene)_sm_ //works if its a file created by the data_co_ but not if it is just the data._lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-04T16:26:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is this the same question _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/11570-sprite-manager-texture/?p_eq_66896_qt__gt_http_dd_//www.html5gamedevs.com/topic/11570-sprite-manager-texture/?p_eq_66896_lt_/a_gt_ ? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-04T17:04:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I just added Texture inlining in Tower of Babel_co_ a Blender source code generator.  It is not in production yet_co_ and I will not show you the python script_co_ since it would probably just confuse you._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the source code generated though (I shortened the string)_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_texture _eq_ BABYLON.Texture.CreateFromBase64String(_qt_data_dd_image/jpg_sm_base64_co_/9j/4AAQgABAQAAAD/2wBDAAgGBgcGBQ..._qt__co_ _qt_texture name_qt__co_ scene)_sm_ _lt_/pre_gt__lt_p_gt_Do not know how get the data into base64 in javascript.  I just had to figure that out in python.  This exceeded my expectation though!  It was pretty easy to code_co_ and it actually compressed my data!  Before my scene with 2 texture files was_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_inline.js     _dd_  141.8 kb_lt_/p_gt__lt_p_gt_image.jpg _dd_  726.4 kb_lt_/p_gt__lt_p_gt_image.png_dd_  191.4 kb_lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_TOTAL_lt_/span_gt_      _dd_ 1059.6 kb_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_now the combined file is_dd_ 523.6 kb_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-04T18:13:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ found how it could possibly be compressing.  It_co_ of course_co_ was not.  The 726.4 kb .jpg was generated from a .blend file with an embedded .jpg file.  When an image is embedded in the .blend_co_ the export script HAS to copy it out into a separate file for use in BJS (or used to HAVE to _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ).  When it does this_co_ the file gets very large for some reason._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Blender pro tip_dd_ never embed or in Blender jargon pack a .jpg image_co_ unless you are going inline your textures with TOB._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found an original of the .jpg that was 92.3 kb / 425.5 kb total.  This means encoding was less efficient than separate files.  That does not mean separate images are going to be faster_co_ probably the opposite.  Pestering the server several times when it can be done with 1 usually can be faster with TCP/IP.  Not sure if gzip on http server is different for text vs image._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry for hijacking your thread_co_ but AFAIK CreateFromBase64String does answer your question._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"spritefire","Date":"2015-05-05T00:10:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ahh I had a silly mistake in my code _dd_/ _lt_br_gt__lt_br_gt_Jerome was right about it being answered (you can use urlData as a texture via buffer). _lt_br_gt_I also found this working example in the playground_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#17YNKA_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#17YNKA_lt_/a_gt__lt_br_gt__lt_br_gt_I had replicated it and it still wasn_t_t working and even copied my image data to the playground (which worked).. and went and had a cup of coffee went back to my code and saw I had two lines of code of the same thing _dd_/_lt_br_gt__lt_br_gt_This is awesome that you can do this though. Has so many possibilities. Can move the data around on the mesh on the fly_co_ grab it and throw it onto a 2d canvas and then add filters_co_ or bake lighting etc and then place it back up on the mesh or do some procedural textures etc _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]