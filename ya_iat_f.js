define(['pipAPI', 'https://jbeadlebc.github.io/iat_long.js'], function(APIConstructor, iatExtension){
     var API = new APIConstructor();

 	return iatExtension({
 		category1 : {
 			name : 'Hearing Aid', //Will appear in the data.
 			title : {
 				media : {word : 'Hearing Aid'}, //Name of the category presented in the task.
 				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
 				height : 4 //Used to position the "Or" in the combined block.
 			}, 
 			stimulusMedia : [ //Stimuli content as PIP's media objects
     		    {image : 'YA1F_HA.jpg'}, 
     			{image : 'YA2F_HA.jpg'}, 
     			{image : 'YA3F_HA.jpg'}, 
     			{image : 'YA1M_HA.jpg'}, 
     			{image : 'YA2M_HA.jpg'}, 
     			{image : 'YA3M_HA.jpg'}
 			], 
 			//Stimulus css (style)
 			stimulusCss : {color:'#31940F','font-size':'1.8em'}
 		},	
 		category2 :	{
 			name : 'No Hearing Aid', //Will appear in the data.
 			title : {
 				media : {word : 'No Hearing Aid'}, //Name of the category presented in the task.
 				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
 				height : 4 //Used to position the "Or" in the combined block.
 			}, 
 			stimulusMedia : [ //Stimuli content as PIP's media objects
     		    {image : 'YA1F.jpg'}, 
     			{image : 'YA2F.jpg'}, 
     			{image : 'YA3F.jpg'}, 
     			{image : 'YA1M.jpg'}, 
     			{image : 'YA2M.jpg'}, 
     			{image : 'YA3M.jpg'}			], 
 			//Stimulus css
 			stimulusCss : {color:'#31940F','font-size':'1.8em'}
 		},	

 		base_url : {//Where are your images at?
 			image : 'https://jbeadlebc.github.io/ya_iat_pics/'
 		}
          
 	});
 });
