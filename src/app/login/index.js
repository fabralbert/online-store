import React, {useCallback} from "react";
import LayoutFlex from "../../components/layouts/layout-flex";
import FormQuestion from "../../components/login-form"
import LayoutModal from "../../components/layouts/layout-modal";
import actionsModals from "../../store/modals/actions";
import { useDispatch } from "react-redux";

function Login() {
  
  const dispatch = useDispatch();

  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => {
      dispatch(actionsModals.close());
    }, []),
  };
  
  return (
    <LayoutModal title={'Логин'} onClose={callbacks.closeModal}>
      <LayoutFlex flex={'center'}>
        <div>тест</div>
        <div>тест</div>
        <div>тест</div>
        <div>тест</div>
        {/* <FormQuestion/> */}
      </LayoutFlex>
    </LayoutModal>
  )
}

export default React.memo(Login);
