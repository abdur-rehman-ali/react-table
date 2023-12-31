import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'ID',
    accessor: 'id',
    Cell: ({value}) => `ID ${value}`,
    disableFilters: true
  },
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
  {
    Header: 'Date of birth',
    Footer: 'Date of birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => format(new Date(value), 'dd/MM/yyyy'),
    disableFilters: true
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
