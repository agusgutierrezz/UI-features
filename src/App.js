import React, { Component } from "react";

import "./App.scss";

class App extends Component {
  state = {
    toggle: null,
  };

  render() {
    return (
      <>
        <div className="bodyModal">
          <div className="wrapper">
            <div className="placeholder">
              <img src="https://images.unsplash.com/photo-1545398865-0062dafeb74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60" />
            </div>

            <div
              className={this.state.toggle ? "ball down" : "ball up"}
              onClick={() => this.setState({ toggle: !this.state.toggle })}
            >
              <div className="article-content">
                <div className="content">
                  <h1>Some story of this cat...</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, natus. Dolorem voluptas ipsum inventore nam
                    placeat non aperiam, nulla sit labore, delectus nobis sequi
                    porro rerum reiciendis minus voluptatum ipsa!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet, vero? Assumenda ullam praesentium eligendi
                    voluptatibus similique ab, adipisci laborum inventore earum
                    voluptatem ex debitis expedita explicabo dignissimos.
                    Delectus, ab. Vero!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe magni possimus labore nulla explicabo eum fugiat sequi
                    ad delectus esse, obcaecati nobis quod iste exercitationem
                    asperiores quibusdam? Et, maiores sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
