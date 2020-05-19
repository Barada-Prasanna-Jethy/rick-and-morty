import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";

class Paginator extends Component {
  getPages(pages, activePage, selectPage) {
    let current = activePage,
      last = pages,
      delta = 4,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(
            <Pagination.Ellipsis disabled className="disabled" />
          );
        } else if (i - l !== 1) {
          rangeWithDots.push(
            <Pagination.Ellipsis disabled className="disabled" />
          );
        }
      }
      rangeWithDots.push(
        <Pagination.Item
          key={i}
          active={i === current}
          onClick={() => selectPage(i)}
        >
          {i}
        </Pagination.Item>
      );
      l = i;
    }

    return rangeWithDots;
  }

  getTotalRecords(total) {
    return <span>Total Pages {total}&emsp;</span>;
  }

  render() {
    const { pages = 1, activePage = 1, selectPage } = this.props;

    return (
      <div className="paginator-wrapper">
        <div>
          <Pagination className="position">
            <Pagination.First
              disabled={activePage === 1}
              onClick={() => (activePage !== 1 ? selectPage(1) : undefined)}
            />
            <Pagination.Prev
              disabled={activePage === 1}
              onClick={() =>
                activePage !== 1 ? selectPage(activePage - 1) : undefined
              }
            />
            {this.getPages(pages, activePage, selectPage)}
            <Pagination.Next
              disabled={activePage === pages}
              onClick={() =>
                activePage !== pages ? selectPage(activePage + 1) : undefined
              }
            />
            <Pagination.Last
              disabled={activePage === pages}
              onClick={() =>
                activePage !== pages ? selectPage(pages) : undefined
              }
            />
          </Pagination>
        </div>
      </div>
    );
  }
}

export default Paginator;
