[{"Owner":"DigitalHilsone","Date":"2015-04-22T16:20:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Greetings! I had an idea for the organization to move the camera when the cursor to a specific side of the screen_co_ for example - have brought the cursor to the top of the screen_co_ the camera moves up. Brought down - the camera moves down. But I do not know how to organize it._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_There is another problem with importing models from 3ds Max 2015 models do not rotate absolutely nothing_co_ no one axis. Tried already and simple rotation_co_ and rotation directly in 3ds Max. Even tried to change the angle of the file .babylon. Nothing changes. Blender model of spin_co_ but their appearance does not suit me_co_ the model curve._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Also wanted to ask. Is it possible for someone to ask for help (direct support)_co_ can somebody help me a little bit in the course of writing my project?_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2015-04-22T16:25:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good afternoon DigitalHilson_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m not really sure what the problem is_co_ can you plz create on example in the playground? Or post some code ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About helping you to write your project... I think that if you post the doubts and problems that you find_co_ everyone will try to help you out_co_ no problem on that._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-04-23T14:25:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey DH_co_ have you read THIS thread...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/7053-beta-3ds-max-2013-exporter/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/7053-beta-3ds-max-2013-exporter/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is various talk about rotation being vector3 or quaternion.  Is there an option in the 3dsMax exporter... regarding quaternions?  Maybe you can change that setting and try again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSOMEWHERE_co_ I thought I saw deltakosh mention quaternions for 3DS Max. If there is a setting for quaternions_co_ try playing with that... see if your rotations start _qt_holding_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn the subject of camera aiming to screen quadrants... when mouse is over that quadrant... can do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTake a look at _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/?17_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/?17_lt_/a_gt_  That is the BabylonJS _qt_ActonManager_qt_ doing those mouse-over actions.  Now imagine you have 4 _lt_u_gt_invisible_lt_/u_gt_ planes parented to your camera_co_ and glued to the camera lens.  One is glued to the upper half of the view_co_ another glued to the lower half of the view_co_ and one for left side_co_ and one for right side.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF you had an actionManager on each plane_co_ watching for mouseover triggers_co_ then you could perform actions such as function calls.  Triggers and Actions.  If the mouse is over the left plane_co_ call a function to aim the camera left.  If the camera is over the upper plane_co_ call a function to aim the camera up_co_ etc.  There are other ways_co_ too. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo summarize_co_ your idea could be done with BabylonJS.  You could even do the corners of the screen. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s what I would do.  9 invisible planes_co_ glued to the lens of the camera.  3 by 3 grid_co_ covering the screen.  Mouse-over the upper left plane_co_ and the camera aims upper left.  Or upper-center.  Or upper-right.  Fun experiment.  Maybe someone can try it in a playground_co_ for fun.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tUnfortunately_co_ we can_t_t test .babylon files in the playground... without first getting them into playground scope.  A free github account is a nice way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-04-23T18:05:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again!  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TTLMJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TTLMJ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tClick the _qt_hide editor_qt_ button for best results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis version of mouseover camera targeting... uses only 4 planes.... with a neutral area in the middle.  Mouse-over to the borders of the screen_co_ and camera targeting should change. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis will get you started_co_ as needed_co_ DH.  It_t_s all done with our fabulous actionManagers.  Each plane has an actionManager attached.  Each plane two _lt_u_gt_trigger_lt_/u_gt_s registered... one for mouseOVER and one for mouseOUT.  Each trigger uses an executeCode _lt_u_gt_action_lt_/u_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added a property to the camera_co_ called .delta.  It is a vector3 that gets added-to the camera.target continuously (in the animation loop).  I think I need an .addToRef down there... instead of an .add.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ the x_co_ y_co_ and z values that are seen in camera.delta... are the _qt_movement orders_qt_.  Anytime a plane is moused-OUT... a function called cleardelta is called... and it zeros-out the camera.delta... causing no movement of the camera anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFun!  The 9-plane idea didn_t_t work_co_ because after the camera movement was made_co_ the mouse pointer was in a different plane than it was before the move started.  Thus_co_ un-wanted intersecting happened after each move.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis _qt_push on the border_qt_ method of camera aiming... works a bit better.  Sort of.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSet ALL .showBoundingBox _eq_ false_sm_   ...to make plane borders disappear.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSpin the arcRotate cam around the scene a few times (by dragging in the center area) and watch what happens.  If feels like the camera is drunk.  _lt_img alt_eq__qt__dd_D_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Odd.  Don_t_t fall.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep in mind that I am MOVING the position of the arcCamera TARGET.  But_co_ the mouseover borders could be used for anything_co_ including swinging-around the arcCamera .alpha and .beta values (but leaving its .target set to the center of the scene). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA free camera would work fine_co_ too_co_ and it could be automatically turned/aimed with these mouseover borders as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAn interesting situation MIGHT arise when trying to mouseover OTHER scene objects... WHILE a border mouseover is already happening.  Chances are_co_ box/sphere mouseovers won_t_t work... when they happen in the border plane areas.  One might want to make the border planes very THIN... to minimize this problem.  You can test it in this demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGrab a zip_co_ take it home_co_ or modify my demo_co_ hit RUN lots of times_co_ do a SAVE sometimes_co_ and send us the playground urls of your discoveries and inventions (if you like).  Be well_co_ guys.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-04-24T20:20:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/5733-wingnut/_qt_ title_eq__qt__qt__gt_Wingnut_lt_/a_gt__lt_/span_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Thank you again! You rescued me very much! The camera works perfectly_co_ with models decide later._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-05-05T19:36:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_In the chamber there is a lack of built_dd_ hover in the corner of the screen the camera will move only on one axis_co_ when it is necessary for two. Can I get ActionManager accept hover over both the substrate?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-05-06T18:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_up_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-07T14:59:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again Digi!  Umm... I need to think about that a bit more.  Stay tuned.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-05-07T19:07:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/5733-wingnut/_qt_ title_eq__qt__qt__gt_Wingnut_lt_/a_gt__lt_/span_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_Thank you Wingnut!_lt_/div_gt__lt_div_gt_Here there is still probema while driving the cursor out of the browser_co_ such as tabs or taskbar Microsoft Windows_co_ the movement still sign up and the camera will still move_co_ even if the window is inactive. Is it possible to add borders to the movement of these zones? I tried to turn out like this - to create an inactive layer is closer to the edge of the screen directly onto a moving layer - up - is not working. Do you have any suggestions?_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-05-07T19:32:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStill thinking.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Right now_co_ I_t_m thinking about adding an actionManager to Layer.  Its a bit ridiculous_co_ but_co_ _lt_a href_eq__qt_http_dd_//babylondoc.azurewebsites.net/page.php?p_eq_24945_qt_ rel_eq__qt_external nofollow_qt__gt_BJS Layers_lt_/a_gt_ is one way to replace the background of the canvas... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1XQKP1%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1XQKP1#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo... hmm.  Maybe Deltakosh will think about adding a method to it... that reports click locations.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s other ways.... still thinking.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI also understand what you are saying about arrow beyond scene borders.  You want to keep the arrow on the canvas.  But_co_ this MIGHT be illegal because you are limiting the user_t_s operating system.  What might be fun... is when your OS arrow is over a canvas_co_ it becomes a different arrow shape... maybe 2D_co_ maybe a real BJS mesh arrow.  When user goes outside of canvas border_co_ it becomes a OS arrow again... and the canvas arrow disappears.  hmmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn a related issue_co_ if you detach and then re-attach the camera when the arrow has gone too far... it SHOULD stop the BJS camera from moving.  You can experiment with that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m still working on a really nice easy way to get click coordinates using the canvas background only.  hmmm.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-05-14T21:11:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_span_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/user/5733-wingnut/_qt_ title_eq__qt__qt__gt_Wingnut_lt_/a_gt__lt_/span_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You do not quite understand. I do not want to limit the use of banned users OS. I want to make the outside scene_co_ the camera does not move_co_ that is_co_ it stops moving. And if we now bring the cursor to the limits of the operating system_co_ the camera continues to move. Here_t_s what I have to decide._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigitalHilsone","Date":"2015-05-19T08:50:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_up_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-03T00:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DH... sorry I left you hanging... here... over 2 yrs ago.  I hope you have found a solution.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(I hope the poor guy didn_t_t hang himself due to lack of assistance)  _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPathetic forum-helper performance by Mr. Wingnut_co_ for sure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow about a nice_co_ recently-repaired playground?  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#LNEX4%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#LNEX4#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith Love_co__lt_br /_gt_\n\tThreadkiller Wingy  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-12-03T09:27:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat a good one. _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI knew that you were a deep person_co_ but that deep?! _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]