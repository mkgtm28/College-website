import './Updates.css';
import notices from './data/notices';
import { useState } from 'react';

const NOTICES_PER_PAGE = 10;

function Updates() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(notices.length / NOTICES_PER_PAGE);
  const firstNoticeIndex = (currentPage - 1) * NOTICES_PER_PAGE;
  const visibleNotices = notices.slice(
    firstNoticeIndex,
    firstNoticeIndex + NOTICES_PER_PAGE,
  );

  return (
    <main className="content-page updates-page">
      <p className="eyebrow">COLLEGE INFORMATION</p>
      <h1>Alerts & Updates</h1>
      <p>Find important announcements, notices, and upcoming dates here.</p>

      <section className="updates-list" aria-label="College notices">
        {visibleNotices.map((notice) => (
          <article className="update-card" key={notice.id}>
            <div className="update-card-heading">
              <span className="update-category">{notice.category}</span>
              <time>{notice.date}</time>
            </div>
            <h2>{notice.title}</h2>
            <p>{notice.description}</p>
          </article>
        ))}
      </section>

      {pageCount > 1 && (
        <nav className="updates-pagination" aria-label="Notice pages">
          <span className="updates-page-count">
            Showing {firstNoticeIndex + 1}–
            {Math.min(firstNoticeIndex + NOTICES_PER_PAGE, notices.length)} of {notices.length}
          </span>
          <div className="updates-pagination-controls">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page of notices"
            >
              Previous
            </button>
            <span aria-live="polite">Page {currentPage} of {pageCount}</span>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === pageCount}
              aria-label="Next page of notices"
            >
              Next
            </button>
          </div>
        </nav>
      )}
    </main>
  );
}

export default Updates;
