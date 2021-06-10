define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
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
    		    {image : 'BHA_1.jpg'}, 
    			{image : 'BHA_2.jpg'}, 
    			{image : 'BHA_3.jpg'}, 
    			{image : 'MHA_1.jpg'}, 
    			{image : 'MHA_2.jpg'}, 
    			{image : 'MHA_3.jpg'}
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
    		    {image : 'B_1.jpg'}, 
    			{image : 'B_2.jpg'}, 
    			{image : 'B_3.jpg'}, 
    			{image : 'M_1.jpg'}, 
    			{image : 'M_2.jpg'}, 
    			{image : 'M_3.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://jbeadlebc.github.io/pictures_c/'
		} 
	});
});
