import React, { useEffect, useState } from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const WarningModal = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  return (
    <Modal open={open} onClose={props.closeModal} basic size='small'>
      <Header icon='window close outline' content='Request Failed' />
      <Modal.Content>
        <h3>{props.message}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={props.closeModal} inverted>
          <Icon name='checkmark' /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
  };
};
const mapStateToProps = (state) => {
  return {
    open: state.showModal,
    message: state.message,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WarningModal);
