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
    		    {image : 'OA1F_HA.jpg'}, 
    			{image : 'OA2F_HA.jpg'}, 
    			{image : 'OA3F_HA.jpg'}, 
    			{image : 'oa1m_ha.jpg'}, 
    			{image : 'oa2m_ha.jpg'}, 
    			{image : 'oa3m_ha.jpg'}
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
    		    {image : 'OA1F.jpg'}, 
    			{image : 'OA2F.jpg'}, 
    			{image : 'OA3F.jpg'}, 
    			{image : 'oa1m.jpg'}, 
    			{image : 'oa2m.jpg'}, 
    			{image : 'oa3m.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://jbeadlebc.github.io/pictures_j17/'
		},
		fullscreen:true
	});
});
