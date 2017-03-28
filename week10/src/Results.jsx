import React  from 'react';

const Results=({
	results
})	=> {
	return(
 		<div>
			<ul>
				{results.map((result,index) => <li key={index}>{result}</li>)}
			</ul>
    	</div>
 	);
 };
 export default Results;
 