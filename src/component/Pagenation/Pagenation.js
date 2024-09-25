import "./Pagenation.css";

export const Pagenation = ({ pages, currentPage, setCurrentPage }) => {
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }

  console.log(generatePages.length);

  return (
    <div className="pagenation">
      {generatePages.length > 1 && (
        <ul>
          {generatePages.map((page) => (
            <li key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
