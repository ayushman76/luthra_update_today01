import About from '../export/about.js';


document.querySelector('.about').innerHTML+=`
   <div class="container">
     <marquee><p class="my_marquee">Welcome to <strong>Luthra Hospital</strong> in <strong>Nehru Nagar Road, Bilaspur (C.G.).</strong> Specialist For <strong>Eye Treatments</strong> & <strong>Skin Treatments.</strong></p></marquee>
       <div class="row">
	         <div class="col-md-6">
			      <div class="my_about">
				         <h1>${About[0].heading}</h1>
						  <p><strong>VISION CARE & RESEARCH CENTRE LLP</strong></p>
						 <p>${About[0].para}</p>
				  </div>
			 </div>
			 <!--//col-md-6-->
			 <div class="col-md-6">
			      <div class="my_about_img">
				        <img src="${About[1].img}" class="img-responsive">
				  </div>
			  </div>
			 <!--//col-md-6-->
	   </div>
	 
   </div>
`;

