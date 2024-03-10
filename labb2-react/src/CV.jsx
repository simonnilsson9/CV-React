import './CSS/style.css'

function CV(){
    return(
        <section id="CV">
      <p class="section-text-p1">My Personal</p>
      <h1 class="title">CV</h1>
      <div class="CV-details-containers">
        <div class="CV-container">
          <div class="CV-details-container">
            <h2>Work Experience</h2>
            <ul>
              <li>Gekås Ullared - Shop Assistans - (2016-2019)</li>
              <li>PostNord Varberg - Package Delivery Person - (2019-2025)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="CV-details-containers">
        <div class="CV-container">
          <div class="CV-details-container">
            <h2>Education</h2>
            <ul>
               <li>Håstensskolan - Elementary School (2006-2016)</li>      
              <li>Peder Skrivares Skola - Nature Science Program (2016-2019)</li>
              <li>Campus Varberg - System Developer .NET (2023-2025)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="CV-details-containers">
        <div class="CV-container">
          <div class="CV-details-container">
            <h2>Skills</h2>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>C#</li>
                <li>SQL/SSMS</li>
                <li>Scrum</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
    );

}

export default CV;