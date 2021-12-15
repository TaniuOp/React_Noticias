import React, { Fragment } from "react";

const Card = ({ news }) => {
    return (
    <div>
      {
        news.map(nyTimesNews =>
          <Fragment>
            <p>Title: {nyTimesNews.title}</p>
            <p>Date: {nyTimesNews.published_date}</p>
            <p>Autor:{nyTimesNews.byline}</p>
            <p>Abstract:{nyTimesNews.abstract}</p>
            <hr />
          </Fragment>
        )
      }
    </div>
    );
  }

  Card.defaultProps = {
    nyTimesNews: []
    }
  

export default Card;
