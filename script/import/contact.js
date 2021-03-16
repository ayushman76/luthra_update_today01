import Contact from '../export/contact.js';

var  con01 = new Contact('Nehru Nagar Road, Bilaspur (C.G.)','<i class="fa fa-map-marker" style="font-size:24px"></i>');
var  con02 = new Contact('70240-21186','<i class="fa fa-phone" style="font-size:24px"></i> ');
var  con03 = new Contact('07752-271297','<i class="fa fa-phone" style="font-size:24px"></i> ');
var  con04 = new Contact('luthrahospital@gmail.com','<i class="fa fa-envelope" style="font-size:24px"></i>');


var contact_arr = [con01,con02,con03,con04];



document.querySelector('.contact').innerHTML+=`
     <div class="container">
	       <div class="row">
		         <div class="row">
				       <div class="col-md-8">
					        <div class="time">
							       <h2>O.P.D. Time :</h2>
							       <h3>Dr. S.K. Luthra</h3>
									<table class="table">
										<tbody>
											<th>Morning : 10am. To 01pm. </th>
											<th>Evening : 05am. To 08pm. </th>
											<th class="red">Thursday Evening & Sunday Closed</th>
										</tbody>
								   </table>
								   <h4>Dr. Saurabh Luthra</h4>
									<table class="table">
										<tbody>
											<th>Morning : 10am. To 01pm. </th>
											<th>Evening : 05am. To 08pm. </th>
											<th class="red">Thursday Evening & Sunday Closed</th>
										</tbody>
								   </table>
								   <h5>Dr. Kalpana Luthra</h5>
									<table class="table">
										<tbody>
											<th>Morning : 10am. To 01pm. </th>
											<th>Evening : 05am. To 08pm. </th>
											<th class="red">Thursday Evening & Sunday Closed</th>
										</tbody>
								   </table>
							 </div>
					         <div class="my_Contact">
							       <h1>Get In Touch</h1>
							        <ul class="nav"></ul>
							 </div>
							
					   </div>
					   <!--//col-md-6-->
					   <div class="col-md-4">
					          <div class="my_form pad-10">
							     <h3>Don't be hesitate to contact us</h3>
							       <form>
								            <div class="form-group">
												  <input type="name" placeholder="Name" class="form-control">
											</div>
											<div class="form-group">
												  <input type="phone" placeholder="Phone" class="form-control">
											</div>
											 <div class="form-group">
												  <input type="email" placeholder="email" class="form-control">
											</div>
											 <div class="form-group">
												  <input type="date" placeholder="Phone" class="form-control">
											</div>
											 <div class="form-group">
												  <input type="time" placeholder="Phone" class="form-control">
											</div>
											<div class="form-group">
												  <select class="form-control">
															<option>Choose Treatments</option>
															<option>Eye Treatment</option>  
															<option>Skin Treatment</option>
															
												  </select>
											</div>
											 <div class="form-group">
												  <select class="form-control">
															<option>Choose Doctor</option>
															<option>Dr. Kalpana Luthra</option>  
															<option>Dr. Saurabh Luthra</option>
															<option>Dr. S.K. Luthra</option>
												  </select>
											</div>
											<div class="form-group">
												  <input type="Submit" class="btn-primary pad-10">
											</div>
									 </form>
							  </div>
					   </div>
				 </div>
		   </div>
	 </div>
`;

for(var i in contact_arr){
	document.querySelector('.my_Contact>ul').innerHTML+=`
	    <li><a href="tel:${contact_arr[i].tabName}">${contact_arr[i].tabicon} ${contact_arr[i].tabName}</a></li>
	`;
}
