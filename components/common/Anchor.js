import React from 'react';

const Anchor = (props) => {
  const { data, currentPage, goToAnchor, slidePages } = props;
  return (
    <ul className="pageIndex">
      {data?.map((item, i) => (
        <li className={i === currentPage ? 'currentLi' : ''} key={i}>
          <button onClick={() => goToAnchor(i, slidePages.tolerance)}>
            <span>{item.icon}</span>
            <span className="mx-2">{item.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Anchor;
