import React, { useState } from 'react'
import CardFilter from './CardFilter'
import './card.css'
import './dashboard.css'
function Card({ card }) {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };
  return (
    <div className=" col-sm-2 col-md-4 row-lg-6 ">
      <div className="card info-card sales-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {card.name}<div className="span"><p>{filter}</p>
            </div>
          </h5>
          <div className="d-flex align-items-center justify-content-center ">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className="ps-3">
              <h6>
                {card.name === 'Revenue'
                  ? '$' + card.amount.toLocaleString('en-US')
                  : card.amount.toLocaleString('en-US')}
              </h6>
              <span
                className={`${card.percentage > 0 ? 'text-success' : 'text-danger'
                  } small pt-1 fw-bold`}
              >
                {card.percentage > 0
                  ? card.percentage * 100
                  : -card.percentage * 100}
                %
              </span>
              <span className="text-muted small pt-2 ps-1">
                {card.percentage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card;