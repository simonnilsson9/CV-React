import './CSS/style.css'
import Simon2 from './Images/aboutme labb2.jpg';
import education from './Images/education labb2.png';
import work from './Images/work labb2.png'

function about(){
    return(
        <section id="about">
      <p className="section-text-p1">Get To Know More</p>
      <h1 className="title-about">About Me</h1>
      <div className="section-container">
        <div className="section--pic-container">
          <img 
            src={Simon2}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={work} alt="Work" className="icon" />
              <h3>Work Experience</h3>
              <br />
              <p>
                PostNord Varberg - 2019 - 2025 <br />Gekås Ullared - 2016 - 2019
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education" className="icon" />
              <h3>Education</h3>
              <br />
              <p>
                Peder Skrivares Skola - Nature Science Program <br />Campus
                Varberg - System Developer
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              laboriosam sapiente id repellat, laborum assumenda atque, corporis
              exercitationem eos expedita numquam harum natus quam animi, odit
              aperiam ducimus enim accusantium consequuntur necessitatibus
              voluptatum culpa cupiditate officiis. Ad tempore autem nihil
              repellendus, facilis voluptate nostrum quas itaque sed neque dicta
              ut ipsa qui in reprehenderit consequuntur architecto vitae,
              exercitationem non earum deserunt explicabo animi expedita veniam.
              Nam hic accusantium, necessitatibus assumenda veritatis optio
              ullam odit odio quae illum deleniti esse, reiciendis iure corporis
              rem, itaque voluptates. Nobis, eligendi explicabo dolorem illum
              accusamus doloribus officia eaque laborum odio enim eum natus
              quisquam consectetur animi obcaecati quas error ipsa eveniet ut
              cupiditate quo impedit! Laudantium eaque possimus magni, quo
              molestias cum, maiores officiis totam veritatis quam quas vel
              accusantium. Beatae adipisci fugit eaque explicabo quibusdam sit
              autem, ad aperiam, nesciunt sapiente impedit, iusto nobis odio
              repudiandae distinctio voluptatum libero? Doloremque sit veniam
              culpa blanditiis modi nesciunt similique velit fugit! Tempore, sit
              aspernatur. A minus possimus eos illum amet non culpa saepe,
              dolores atque veritatis facere sequi nisi delectus aliquid at
              corporis error sed ut, nemo quod voluptates, distinctio sunt?
              Cumque eveniet blanditiis impedit sequi voluptatem culpa nobis,
              earum fugiat excepturi suscipit et illo provident cupiditate
              ratione expedita? Dolor asperiores eligendi explicabo rerum iusto
              voluptate qui nisi nobis rem similique! Corrupti reprehenderit at
              nemo voluptate officia aspernatur laborum temporibus nulla dolor,
              quia voluptates aliquid fugiat quo illo voluptatem mollitia eius.
              Tempora quas laboriosam soluta ducimus ad deserunt itaque id a
              nobis impedit expedita rerum animi suscipit facere maiores
              voluptates, rem voluptatibus, ullam dolor placeat autem quae! Sed
              optio nulla sit beatae! Reprehenderit at beatae id eius, pariatur
              quod aut aperiam inventore a dicta debitis eos, nam aliquid
              similique minus, amet modi esse laborum sint placeat sunt. Numquam
              molestiae sint earum. Est quos ex deleniti.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}

export default about;