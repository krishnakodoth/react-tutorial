import React from 'react';
const Paging = ({ postPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    const lastNumber = pageNumbers.pop();
    // console.log(pageNumbers)
    return (
        <nav>
            <ul className="pagination">
            {
                /* currentPage > 1 &&
                <li key={`prev-${lastNumber}`} className={`page-item`}>
                    <span onClick={() => paginate(lastNumber)} className="page-link">
                        First
                    </span>
                </li> */
            }
                {pageNumbers.map(number => {

                    return (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <span onClick={() => paginate(number)} className="page-link">
                                {number}
                            </span>
                        </li>
                    )
                })}
                {
                    /* currentPage < totalPosts &&
                    <li key={`next-${lastNumber}`} className={`page-item`}>
                        <span onClick={() => paginate(lastNumber)} className="page-link">
                            Last
                        </span>
                    </li> */
                }
            </ul>
        </nav>
    );
};

export default Paging;