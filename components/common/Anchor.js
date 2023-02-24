import React from 'react';

const Anchor = (props) => {
  const { data, currentPage, goToAnchor, slidePages } = props;
  return (
    <ul className="pageIndex">
      {data?.map((item, i) => (
        <li className={i === currentPage ? 'currentLi' : ''} key={i}>
          <button onClick={() => goToAnchor(i, slidePages.tolerance)}>
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Anchor;
