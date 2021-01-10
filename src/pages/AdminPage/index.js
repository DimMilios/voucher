import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPage.css';
import Header from '../../components/Header';
// import ApplicationTable from '../../components/ApplicationTable';

function AdminPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const toastRef = useRef(null);

  const load = () => setTimeout(() => setIsLoading(false), 1000);

  const handleClick = () => {
    setIsLoading(true);
    setIsClicked(true);
    load();
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="admin row align-items-center justify-content-center min-vh-100">
            {!isLoading && !isClicked &&
              <button className="btn btn-primary" onClick={handleClick}>
                <h4 style={{ fontWeight: 400 }}>Έναρξη μοριοδότησης</h4>
              </button>}

            {isLoading &&
              <>
                <div className="spinner-grow spinner-grow-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm ml-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow spinner-grow-sm ml-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            }

            {/* {!isLoading && isClicked && <ApplicationTable />} */}

            {!isLoading && isClicked &&
              <div ref={toastRef} className="toast bg-dark text-white w-100 " role="alert" aria-live="assertive" aria-atomic="true"
                style={{
                  opacity: 1,
                  position: 'fixed',
                  top: '85%'
                }}>
                <div className="toast-header">
                  <strong className="mr-auto">Διαδικασία μοριοδότησης</strong>
                  <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={() => toastRef.current.remove()}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body p-4">
                  <p>
                    Η διαδικασία μοριοδότησης ολοκληρώθηκε. Δείτε τα αποτελέσματα
                  <strong className="ml-2">
                      <NavLink className="text-white" to="/admin/applications">
                        εδώ.
                  </NavLink>
                    </strong>
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminPage;
