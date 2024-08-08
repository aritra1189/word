import React from 'react';

function Alertweb({ alert }) {
  if (!alert) return null;

  const { type, msg } = alert;
  
  return (
    <div>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <strong>{type}!!</strong> {msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default Alertweb;
 
