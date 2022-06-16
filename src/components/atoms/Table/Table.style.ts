import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  z-index: 100;
  border-radius: 10em;

  .ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table {
    width: 100%;
  }

  .ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-table .ant-table-container {
    width: 100%;
  }

  .ant-table-wrapper .ant-spin-nested-loading .ant-spin-container .ant-pagination {
    padding: 0em 1em;
  }

  .ant-table-wrapper
    .ant-spin-nested-loading
    .ant-spin-container
    .ant-table
    .ant-table-container
    .ant-table-body {
    width: 100%;
  }

  .ant-table-wrapper .ant-table-thead .ant-table-cell {
    color: #bdbdbd;
    font-size: 0.9rem;
    padding: 1em 0.75em;
    background: transparent;
    text-transform: uppercase;
    border-left: none !important;
    border-right: none !important;
  }

  .ant-table-wrapper .ant-table-tbody > tr > td {
    padding: 0.75em !important;
    border-right: none !important;
    border-left: none !important;
    border-bottom: 0.5px solid #e0e0e0 !important;
  }
`

export default TableWrapper
