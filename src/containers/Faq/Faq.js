import React from 'react';
import './Faq.css';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Faq = ({ faqData, user }) => {

  let mappedFaqs = faqData.map((item, index) => {
    return (
      <div key={index}>
        <p className="question">{item.faq}</p>
        <p className="answer">{item.answer}</p>
      </div>
    )
  })
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2>Solarizer FAQ's</h2>
        {!user &&
          <Link to='/' >
            <button>Home</button>
          </Link >
        }
      </div>
      <div>{mappedFaqs}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  faqData: state.faqData,
  user: state.userProfile.validatedUser
})

export default connect(mapStateToProps)(Faq);
