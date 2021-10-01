import { Link } from 'react-router-dom'
import BasicTable from './BasicTable';
import useApi from './useApi'
import ChiveButton from './ChiveButton/ChiveButton';
import Modal from 'react-modal';
import { useState } from 'react'
import AddPiece from './AddPiece'

const PieceList = () => {
    const { state: pieces, loading, error, refetch } = useApi('pieces')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    console.log(pieces, loading, error)

    // const customStyles = {
    //     content: {
    //       top: '50%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       marginRight: '-50%',
    //       transform: 'translate(-50%, -50%)',
    //     },
    //   };
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

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
            {/* <Link to='/pieces/add'> */}
                <ChiveButton title='Add new piece' onClick={openModal} />
            {/* </Link> */}
            </h1>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <AddPiece />
            </Modal>
            {!!loading && "Loading..."}
            {!!error && JSON.stringify(error)}
            {!!pieces && <BasicTable columns={columns} data={pieces} />}
        </div>
    )
};

export default PieceList;