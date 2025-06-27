import React from 'react'

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  

  let myStyle = {
    color: props.mode === 'dark'?'white': '#042743',
    backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)': 'white',
  }
  


  return (
    <div className='container' style={{color: props.mode === 'dark'?'white': '#042743'}}>
      <h2>About Us</h2>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
             It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Use for</strong>
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
