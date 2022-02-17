/*Start of JSON*/

var jobsData = [];

/*end of JSON*/


var jobsData = (function () {
  var json = null;
  $.ajax({
      'async': false,
      'global': false,
      'url': 'https://script.google.com/macros/s/AKfycbxo2MAob3LOcKsV5pOSecNwiZT2BhnPbSMzhVvq6gpvv1p7cx4/exec',
      'dataType': "json",
      'success': function (data) {
          json = data;
      }
  });
  return json["user"];
})(); 






function jobTemplate(job) {
  return `
      <!--Job Card-->
    <section class="ml-10 pl-10 items-center justify-evenly place-content-stretch float-left" >
      <div class="max-w-lg min-w-0 mx-auto z-10 justify-start">
        <div class="flex flex-col" id=${job.jobId}>
          <div class="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
            <div class="flex-none sm:flex">
              <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                <img
                  src="${job.photo}"
                  alt="pranav" class=" w-32 h-32 shadow-lg outline-2 rounded-2xl">

              </div>
              <div class="flex-auto sm:ml-5 justify-evenly">
                <div class="flex items-center justify-between sm:mt-2">
                  <div class="flex items-center">
                    <div class="flex flex-col">
                      <div class="w-full flex-none text-lg text-gray-800 font-bold leading-none">${job.name} &nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; <span class="float-right bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Job ID: ${job.jobId}</span></div>
                      <div class="flex-auto text-gray-500 my-1">
                        <span class="mr-3 ">${job.company}</span><span
                          class="mr-3 border-r border-gray-200  max-h-0"></span><span>${job.locationPlace}, ${job.locationCountryCode}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row items-center">
                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    <svg text-sm class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"></path>
                    </svg>
                    ${job.type} | ${job.kind}
                  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    class="bg-yellow-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Apply
                    by ${job.lastDateToApply}</span>

                  <div class="flex-1 inline-flex  hidden items-center">
                    <img class="w-5 h-5"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjY0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0zMiw3LjE3NEMxOC4zMTEsNy4xNzQsNy4xNzQsMTguMzExLDcuMTc0LDMyYzAsMTMuNjg5LDExLjEzNywyNC44MjYsMjQuODI2LDI0LjgyNmMxMy42ODksMCwyNC44MjYtMTEuMTM3LDI0LjgyNi0yNC44MjYgIEM1Ni44MjYsMTguMzExLDQ1LjY4OSw3LjE3NCwzMiw3LjE3NHogTTM4LjE3NCwzMi44NzRoLTQuMDM5YzAsNi40NTMsMCwxNC4zOTgsMCwxNC4zOThoLTUuOTg1YzAsMCwwLTcuODY4LDAtMTQuMzk4aC0yLjg0NXYtNS4wODggIGgyLjg0NXYtMy4yOTFjMC0yLjM1NywxLjEyLTYuMDQsNi4wNC02LjA0bDQuNDMzLDAuMDE3djQuOTM5YzAsMC0yLjY5NSwwLTMuMjE5LDBjLTAuNTI0LDAtMS4yNjgsMC4yNjItMS4yNjgsMS4zODZ2Mi45OWg0LjU2ICBMMzguMTc0LDMyLjg3NHoiLz48L3N2Zz4=">
                    <img class="w-5 h-5"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yOC4zNDgsNS4xNTdjLTEzLjYsMC0yNC42MjUsMTEuMDI3LTI0LjYyNSwyNC42MjVjMCwxMy42LDExLjAyNSwyNC42MjMsMjQuNjI1LDI0LjYyM2MxMy42LDAsMjQuNjIzLTExLjAyMywyNC42MjMtMjQuNjIzICBDNTIuOTcxLDE2LjE4NCw0MS45NDcsNS4xNTcsMjguMzQ4LDUuMTU3eiBNNDAuNzUyLDI0LjgxN2MwLjAxMywwLjI2NiwwLjAxOCwwLjUzMywwLjAxOCwwLjgwM2MwLDguMjAxLTYuMjQyLDE3LjY1Ni0xNy42NTYsMTcuNjU2ICBjLTMuNTA0LDAtNi43NjctMS4wMjctOS41MTMtMi43ODdjMC40ODYsMC4wNTcsMC45NzksMC4wODYsMS40OCwwLjA4NmMyLjkwOCwwLDUuNTg0LTAuOTkyLDcuNzA3LTIuNjU2ICBjLTIuNzE1LTAuMDUxLTUuMDA2LTEuODQ2LTUuNzk2LTQuMzExYzAuMzc4LDAuMDc0LDAuNzY3LDAuMTExLDEuMTY3LDAuMTExYzAuNTY2LDAsMS4xMTQtMC4wNzQsMS42MzUtMC4yMTcgIGMtMi44NC0wLjU3LTQuOTc5LTMuMDgtNC45NzktNi4wODRjMC0wLjAyNywwLTAuMDUzLDAuMDAxLTAuMDhjMC44MzYsMC40NjUsMS43OTMsMC43NDQsMi44MTEsMC43NzcgIGMtMS42NjYtMS4xMTUtMi43NjEtMy4wMTItMi43NjEtNS4xNjZjMC0xLjEzNywwLjMwNi0yLjIwNCwwLjg0LTMuMTJjMy4wNjEsMy43NTQsNy42MzQsNi4yMjUsMTIuNzkyLDYuNDgzICBjLTAuMTA2LTAuNDUzLTAuMTYxLTAuOTI4LTAuMTYxLTEuNDE0YzAtMy40MjYsMi43NzgtNi4yMDUsNi4yMDYtNi4yMDVjMS43ODUsMCwzLjM5NywwLjc1NCw0LjUyOSwxLjk1OSAgYzEuNDE0LTAuMjc3LDIuNzQyLTAuNzk1LDMuOTQxLTEuNTA2Yy0wLjQ2NSwxLjQ1LTEuNDQ4LDIuNjY2LTIuNzMsMy40MzNjMS4yNTctMC4xNSwyLjQ1My0wLjQ4NCwzLjU2NS0wLjk3NyAgQzQzLjAxOCwyMi44NDksNDEuOTY1LDIzLjk0Miw0MC43NTIsMjQuODE3eiIvPjwvc3ZnPg==">
                    <img class="w-5 h-5"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNTAuODM3LDQ4LjEzN1YzNi40MjVjMC02LjI3NS0zLjM1LTkuMTk1LTcuODE2LTkuMTk1ICBjLTMuNjA0LDAtNS4yMTksMS45ODMtNi4xMTksMy4zNzRWMjcuNzFoLTYuNzljMC4wOSwxLjkxNywwLDIwLjQyNywwLDIwLjQyN2g2Ljc5VjM2LjcyOWMwLTAuNjA5LDAuMDQ0LTEuMjE5LDAuMjI0LTEuNjU1ICBjMC40OS0xLjIyLDEuNjA3LTIuNDgzLDMuNDgyLTIuNDgzYzIuNDU4LDAsMy40NCwxLjg3MywzLjQ0LDQuNjE4djEwLjkyOUg1MC44Mzd6IE0yMi45NTksMjQuOTIyYzIuMzY3LDAsMy44NDItMS41NywzLjg0Mi0zLjUzMSAgYy0wLjA0NC0yLjAwMy0xLjQ3NS0zLjUyOC0zLjc5Ny0zLjUyOHMtMy44NDEsMS41MjQtMy44NDEsMy41MjhjMCwxLjk2MSwxLjQ3NCwzLjUzMSwzLjc1MywzLjUzMUgyMi45NTl6IE0zNCw2NCAgQzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0QzQsMTcuNDMxLDE3LjQzMiw0LDM0LDRzMzAsMTMuNDMxLDMwLDMwQzY0LDUwLjU2OCw1MC41NjgsNjQsMzQsNjR6IE0yNi4zNTQsNDguMTM3VjI3LjcxaC02Ljc4OXYyMC40MjcgIEgyNi4zNTR6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDEwMTAxOyIvPjwvc3ZnPg==">
                  </div>
                </div>
                <div class="flex pt-2  text-sm text-gray-500" >
                  <div class="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                      </path>
                    </svg>
                    <p class="">${job.headCountApplied} Applied! </p>
                  </div>




                  <label for="job-info${job.jobId}" class="btn btn-success modal-button btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  </label> 

                  <!-- JOB INFO MODAL -->
                  <input type="checkbox" id="job-info${job.jobId}" class="modal-toggle"> 
                  <div class="modal">
                    <div class="modal-box">
                    
                      <div class="card-body p-0">
                        <h2 class="m-0 mb-3 py-0 text-4xl font-bold card-title">${job.name}
                        <label for="job-info${job.jobId}" class="btn btn-xs btn-outline btn-primary btn-square float-right">X</label></h2> 
                          <div class="space-x-2 card-actions">
                            <div class="badge badge-ghost">${job.company}</div> 
                            <div class="badge badge-ghost">${job.jobType}</div>
                            <div class="badge badge-ghost">${job.jobKind}</div>
                          </div> 
                          <div class="space-x-2 card-actions">
                            <div class="badge badge-ghost">${job.locationPlace}, ${job.locationCountryCode}</div>
                            <div class="badge badge-ghost">${job.jobKind}</div>
                            <div class="badge badge-ghost">${job.jobKind}</div>
                          </div>
                          
                          <!-- <div class="flex justify-center items-center h-screen"> -->
                          <div>
                            <!--actual component start-->
                            <div x-data="setup()">
                              <ul class="flex justify-center items-center my-4">
                                <template x-for="(tab, index) in tabs" :key="index">
                                  <li class="tab tab-lifted cursor-pointer py-2 px-4"
                                    :class="activeTab===index ? 'flex-1 cursor-pointer tab tab-lifted tab-active text-blue-500 font-bold' : ''" @click="activeTab = index"
                                    x-text="tab"></li>
                                </template>
                              </ul>
                              <div class="w-200 bg-grey p-5">
                                <div x-show="activeTab===0">${job.jobBrief}</div>
                                <div x-show="activeTab===1"><img src="${job.jobRequirements}"></div>
                                <div x-show="activeTab===2">${job.jobResponsibility}</div>
                                <div x-show="activeTab===3">${job.jobBenefits}</div>
                              </div>
                            </div>
                            <!--actual component end-->
                          </div>
                        
              
                          <!-- <div class="tabs">
                            <a class="tab tab-lifted">Tab 1</a> 
                            <a class="tab tab-lifted tab-active">Tab 2</a> 
                            <a class="tab tab-lifted">Tab 3</a>
                            <div class="flex-1 cursor-default tab tab-lifted"></div>
                          </div> -->
              
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END JOB INFO MODAL -->

                  
                  <button
                    class="flex-no-shrink bg-blue-500 hover:bg-blue-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2  hover:border-blue-500 text-white rounded-lg transition ease-in duration-300" 
                    type="button" data-modal-toggle="hi-modal" onClick="apply(event)" id=${job.jobId}>
                    Apply Now
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Job Card-->
    `;
}

document.getElementById("app").innerHTML = `
  <h4 class="justify-center text-xl text-bold text-center text-gray-300"> Explore Featured Jobs (${
    jobsData.length
  } results)</h4> 
  ${jobsData.map(jobTemplate).join("")}
  `;

// const applyBTN = document.getElementById(`${jobsData.name}`);

const apply = (event) => {
  
  for (var i = 0; i <= jobsData.length - 1; i++) {

    document.getElementById(
      "job-form"
    ).innerHTML = `
                  <h3 class="text-xl font-medium text-center text-gray-900 dark:text-white">Apply using Resume Link</h3>
                  
                  <div class="tab">Name:
                  <div>
                      <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                      <input type="text" name="Name" id="Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="My name is Khan" required oninput="this.className = ''">
                      <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                      <input type="text" name="Name" id="Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="My name is Khan" required oninput="this.className = ''">
                  </div>

                  <div class="tab">Contact Info:
                      <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your mail</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email@adress.com" required oninput="this.className = ''">
                  
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your WhatsApp Number</label>
                      <input type="tel" name="phone" id="phone" pattern="[7-9]{1}[0-9]{9}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="999XX909XX" required oninput="this.className = ''">
                  
                    <label for="jobId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job ID</label>
                    <input type="tel" name="jobId" id="jobId" value=${event.target.id}  placeholder="10001" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
             
                </div>
                  
  <div style="overflow:auto;">
  <div style="float:right;">
    <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
    <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
  </div>
</div>

<!-- Circles which indicates the steps of the form: -->
<div style="text-align:center;margin-top:40px;">
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
  <span class="step"></span>
</div>

                  
              `;

              var currentTab = 0; // Current tab is set to be the first tab (0)
              showTab(currentTab); // Display the current tab
              
              function showTab(n) {
                // This function will display the specified tab of the form ...
                var x = document.getElementsByClassName("tab");
                x[n].style.display = "block";
                // ... and fix the Previous/Next buttons:
                if (n == 0) {
                  document.getElementById("prevBtn").style.display = "none";
                } else {
                  document.getElementById("prevBtn").style.display = "inline";
                }
                if (n == (x.length - 1)) {
                  document.getElementById("nextBtn").innerHTML = "Submit";
                } else {
                  document.getElementById("nextBtn").innerHTML = "Next";
                }
                // ... and run a function that displays the correct step indicator:
                fixStepIndicator(n)
              }
              
              function nextPrev(n) {
                // This function will figure out which tab to display
                var x = document.getElementsByClassName("tab");
                // Exit the function if any field in the current tab is invalid:
                if (n == 1 && !validateForm()) return false;
                // Hide the current tab:
                x[currentTab].style.display = "none";
                // Increase or decrease the current tab by 1:
                currentTab = currentTab + n;
                // if you have reached the end of the form... :
                if (currentTab >= x.length) {
                  //...the form gets submitted:
                  document.getElementById("regForm").submit();
                  return false;
                }
                // Otherwise, display the correct tab:
                showTab(currentTab);
              }
              
              function validateForm() {
                // This function deals with validation of the form fields
                var x, y, i, valid = true;
                x = document.getElementsByClassName("tab");
                y = x[currentTab].getElementsByTagName("input");
                // A loop that checks every input field in the current tab:
                for (i = 0; i < y.length; i++) {
                  // If a field is empty...
                  if (y[i].value == "") {
                    // add an "invalid" class to the field:
                    y[i].className += " invalid";
                    // and set the current valid status to false:
                    valid = false;
                  }
                }
                // If the valid status is true, mark the step as finished and valid:
                if (valid) {
                  document.getElementsByClassName("step")[currentTab].className += " finish";
                }
                return valid; // return the valid status
              }
              
              function fixStepIndicator(n) {
                // This function removes the "active" class of all steps...
                var i, x = document.getElementsByClassName("step");
                for (i = 0; i < x.length; i++) {
                  x[i].className = x[i].className.replace(" active", "");
                }
                //... and adds the "active" class to the current step:
                x[n].className += " active";
              }

  }
};

