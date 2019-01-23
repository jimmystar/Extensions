[{"Owner":"michagoose","Date":"2018-11-15T23:14:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been dabbling in Babylon for a month or so now_co_ and things are going well_co_ but I_t_m getting caught up on this one problem_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have several avatars in a row. They all have jetpacks_co_ but there should only be one active any time. I_t_ve parented the emitter fountain objects to each of the avatar_t_s hip bones and then offset it so that it_t_s behind the avatar roughly in the location of the jetpack on the mesh. It works fine for the avatar at (0_co_0) but the fountain doesn_t_t seem to move when i translate each of the avatars into their final positions Isn_t_t that what parenting does? It does rotate gently as my avatar moves in it_t_s idle animation_co_ so I know it_t_s attached. Even if I don_t_t set the position of the fountain_co_ it still doesn_t_t move along the x axis when my avatar does. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to approximate my scene using the playground here_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#424Q55%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#424Q55#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Rabbits are structurally a bit different from my meshes in terms of skeleton and my avatar_t_s have no submeshes like the Rabbit does. You can see that although there are 6 different emitters_co_ they_t_re all at the same place. I_t_ve turned on the visiblity of the fountain so you can see it if you rotate the scene behind the avatars.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA related problem I_t_m having (even when the avatar is at 0_co_0) is that when i rotate an avatar and animate it_co_ the emitter follows the path of the avatar as if it wasn_t_t rotate at all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I parenting incorrectly or missing a step? I know setting position changes the world position_co_ but it seems like with the parenting_co_ the x position should still change as the parent does.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any help you can provide!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-15T23:22:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya M_co_ welcome to the forum.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235055_qt_ data-ipsquote-contentid_eq__qt_41302_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542323642_qt_ data-ipsquote-userid_eq__qt_33443_qt_ data-ipsquote-username_eq__qt_michagoose_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 minutes ago_co_ michagoose said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_ve parented the emitter fountain objects to each of the avatar_t_s hip bones\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat might be the problem.  Bones_co_ as in skeleton/armature bones?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParent the emitters to the _lt_em_gt_root_lt_/em_gt_ or top-most _lt_u_gt_mesh_lt_/u_gt_/transformNode... of the avatar (if possible).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m no pro at these things_co_ but try that.  You_t_ll still need to position-offset the (invisible) emitters so that they are at the avatar_t_s hip-level and width.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce the emitters (fountains) are positioned and rotated as-wanted_co_ you might wish to do some _lt_strong_gt_emitter.bakeCurrentTransformIntoVertices() _lt_/strong_gt_calls on them.  Notice that AFTER you do that_co_ each emitter_t_s .position and .rotation will be set to 0_co_0_co_0_co_ yet the mesh didn_t_t move at all.  Sometimes a handy thing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep us posted on things learned_co_ if anything.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"michagoose","Date":"2018-11-16T00:34:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried parenting it at the top most mesh previously_co_ but I tried it again just now with the addition of _lt_strong style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_bakeCurrentTransformIntoVertices_lt_span_gt_﻿_lt_/span_gt__lt_/strong_gt_() .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the playground it worked mostly (perhaps some weird rotation of the particles but that_t_s easily fixed)_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#424Q55%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#424Q55#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I try it in my project_co_ it doesn_t_t have the same effect. (see the image below) Parenting to the top most mesh helps with the x transform position_co_ but now the particle system doesn_t_t move at all when the avatar does. (I should note_co_ that unlike in the original playground I posted - in my scene when the system is parented to a bone_co_ the particle system _lt_em_gt_does_lt_/em_gt_ move as the avatar animates_co_ only the x transform is wrong) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe code is basically the same minus a few unrelated elements that I removed in the playground and the avatars themselves. My avatars do have a submesh. I was wrong about that earlier_co_ but the skeleton isn_t_t nested inside it like the Rabbit_co_ if that makes sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy avatars are animating with a animation made in blender_co_ instead of simply moving the x position like I_t_m doing in the playground. Could that be what_t_s causing the difference in behavior? My best guess is that when the avatars where created they didn_t_t animate the entirety of the avatar_co_ just the innards. But the animator is long gone_co_ so I have to work with what I have. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/flyaway.png.823d6ba9ec359eb26653875910001cd4.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_21000_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/flyaway.thumb.png.c49e95431d4a437a817c1ac5c645f024.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_flyaway.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T16:22:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ if the bones are for in-place movement you could attach your particle system to a dummy mesh attached to a bone_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#11BH6Z#374_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#11BH6Z#374_lt_/a_gt_ (here the bones animate the dude locally and I move it with dude.position)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt would be perhaps easier if you could store one of your avatar somewhere so we could try with real data?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"michagoose","Date":"2018-11-16T23:28:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo it worked!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI already had the dummy mesh_co_ the fountain cube_co_ but using attachToBone did the job. Strangely enough I_t_d tried using attachToBone previously_co_ but I probably did it with the wrong combination of other variables.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much to both of you! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-17T00:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWith pleasure! Flagging as solved\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]