import { Link } from 'react-router-dom'
import BasicTable from './BasicTable';
import useApi from './useApi'

const PieceList = () => {
    const { state: pieces, loading, error, refetch } = useApi('pieces')

    console.log(pieces, loading, error)

    const columns = [
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Composer',
            accessor: 'composer'
        },
        {
            Header: 'Arranger',
            accessor: 'arranger'
        }
    ]


    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>Pieces</span>
            <Link to='/pieces/add'>
                <button>
                    Add new piece
                </button>
                </Link>
            </h1>
            {!!loading && "Loading..."}
            {!!error && JSON.stringify(error)}
            {!!pieces && <BasicTable columns={columns} data={pieces} />}
        </div>
    )
};

export default PieceList;