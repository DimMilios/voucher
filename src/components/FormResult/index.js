import React from 'react';

function FormResult({ type, title, content }) {
  const switchStyling = (type, extraElem, oldClass) =>
    `${extraElem}-${type} ${oldClass}`

  return (
    <div className="col-md-6 col-sm-12">
      <div className={switchStyling(type, "border", "card shadow mt-5")}>
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p className="card-text">{content.message}</p>
          {content.href &&
            <a href={content.href} target="_blank" rel="noreferrer">
              Εξυπηρέτηση Πελατών
            </a>}
        </div>
      </div>
    </div>
  );
}

export default FormResult;
