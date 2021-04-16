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
    		    {image : 'femaleHA_1.jpg'}, 
    			{image : 'femaleHA_2.jpg'}, 
    			{image : 'femaleHA_3.jpg'}, 
    			{image : 'maleHA_1.jpg'}, 
    			{image : 'maleHA_2.jpg'}, 
    			{image : 'maleHA_3.jpg'}
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
    		    {image : 'female_1.jpg'}, 
    			{image : 'female_2.jpg'}, 
    			{image : 'female_3.jpg'}, 
    			{image : 'male_1.jpg'}, 
    			{image : 'male_2.jpg'}, 
    			{image : 'male3.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://jbeadlebc.github.io/pictures/'
		} 
	});
});
