import React, { useEffect, useState } from 'react';
import './Faq.css';
// import { faqData } from './faqData'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Faq = ({faqData}) => {
console.log(faqData);

  let mappedFaqs = faqData.map(item=> {
    return (
      <div>
      <p className="question">{item.faq}</p>
      <p className="answer">{item.answer}</p>
      </div>
    )
  })
  return (
    <div className="faq-container">
    <div className="faq-header">
    <h2>Solarizer FAQ's</h2>
    <Link to='/' >
    <button>Home</button>
    </Link >
    </div>
    <div>{mappedFaqs}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  faqData: state.faqData
})

export default connect(mapStateToProps) (Faq);
// export default Faq
