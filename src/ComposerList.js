import BasicTable from "./BasicTable";
import useApi from "./useApi";

const ComposerList = () => {

    const { state: composers, loading, error, refetch } = useApi("composers");

    const columns = [
        {
            Header: 'Last name',
            accessor: 'last_name'
        },
        {
            Header: 'First name',
            accessor: 'first_name'
        }
    ]
    return (
        <div>
            <h1>Composers</h1>
            {!!composers && <BasicTable columns={columns} data={composers} />}
        </div >
    )
};

export default ComposerList;