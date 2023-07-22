import { format } from 'date-fns'
import ColumnFilter from './ColumnFilter'


export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id',
    Cell: ({value}) => `ID ${value}`,
    Filter: ColumnFilter
  },
  {
    Header: 'First name',
    Footer: 'First name',
    accessor: 'first_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Last name',
    Footer: 'Last name',
    accessor: 'last_name',
    Filter: ColumnFilter
  },
  {
    Header: 'Date of birth',
    Footer: 'Date of birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => format(new Date(value), 'dd/MM/yyyy'),
    Filter: ColumnFilter
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
    Filter: ColumnFilter
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Filter: ColumnFilter
  }
]

export const HEADER_GROUPS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First name',
        Footer: 'First name',
        accessor: 'first_name'
      },
      {
        Header: 'Last name',
        Footer: 'Last name',
        accessor: 'last_name'
      },
    ]
  },
  {
    Header: 'Information',
    Footer: 'Information',
    columns: [
      {
        Header: 'Date of birth',
        Footer: 'Date of birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  },
]
