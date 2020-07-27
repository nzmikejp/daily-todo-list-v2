import React, { Component } from 'react';
import './assets/css/App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="wrap">
        <header>
          <div className="container">
            <h1>this is my <span>header</span></h1>
          </div>
        </header>
        <main>
          <section className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">
                Let's get physical
              </h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal space of its parent.
              </p>
            </div>
          </section>
          <section className="container">
            <div className="row">
              <div className="col-sm-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolore debitis, vitae quidem dolor repudiandae quaerat perspiciatis quasi vel inventore dolorem magnam consectetur aperiam minus! Ut magni dolorem, laborum nam odio iure placeat consequatur neque. Recusandae laboriosam dignissimos iusto facilis porro saepe! Nisi adipisci harum debitis repellat quasi ea veniam?
                </p>
              </div>
              <div className="col-sm">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet est similique provident sint placeat earum saepe adipisci iusto beatae magnam animi dolorum eius, dignissimos repellat qui atque, sapiente eos nemo ipsum quae. Veritatis ut, aspernatur unde rerum quo officia, perspiciatis consequuntur temporibus corporis nihil quam sit repudiandae architecto est. Quo excepturi nostrum asperiores reprehenderit libero voluptas voluptate quia! Aliquid itaque, ullam numquam quas nihil veritatis quaerat reiciendis quo error corrupti. In voluptas perferendis facere sequi fugiat, ut magni suscipit molestiae dolore neque, laboriosam autem. Quibusdam ratione quas ad molestiae non blanditiis eos expedita nesciunt accusantium, corrupti, ex at, fugit quos?
                </p>
              </div>
              <div className="col-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur nam suscipit ullam molestiae animi iusto voluptate culpa praesentium quis aperiam.
                </p>
              </div>
            </div>
          </section>          
        </main>
      </div>
    )
  }
}


export default App;
