import React from 'react'

function Testimony() {
  return (
    <div>
      <h1 className='h1'>CLIENT TESTIMONIALS</h1>
        <div className='h2'>
        <img className="photo" src="src\assets\image-emily.jpg" />
        <img className="photo" src="src\assets\image-thomas.jpg" />
        <img className="photo" src="src\assets\image-jennie.jpg"/>
        </div>
        <div className='text'>
          <p>We put our trust in Sunnyside and they deliverded,
            making sure our needs were met and deadlines were always hit.
          </p>
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success
            made it a stisfying and enjoyable experience.
          </p>
          <p>
            Incredible End result! Our sales increased over 400% when we worked with Sunnyside.
            Highly recommended.
          </p>
        </div>
        <div className='bold'>
          <p>
            Emily R.
          </p>
          <p>
            Thomas S.
          </p>
          <p>
            Jennie F.
          </p>
        </div>
        <div className='light'>
          <p>
            Marketing Director
          </p>
          <p>
            Chief Operating Officer
          </p>
          <p>
            Business Owner
          </p>
        </div>
    </div>
  )
}

export default Testimony