import React from 'react';

function FormResult({ type, title, content }) {
  const switchStyling = (type, extraElem, oldClass) =>
    `${extraElem}-${type} ${oldClass}`

  return (
    <div className={switchStyling(type, "alert", "alert mt-5 col-12 col-sm-12 col-md-12 col-lg-6")} role="alert">
      <h4 className="text-center alert-heading">{title}</h4>
      <p className="text-center" style={{ fontSize: 'large' }}>{content.message}</p>
      {content.href &&
        <a href={content.href} target="_blank" rel="noreferrer">
          Εξυπηρέτηση Πελατών
        </a>}
    </div>
  );
}

export default FormResult;
