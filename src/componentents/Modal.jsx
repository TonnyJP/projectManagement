import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Button } from './Button';

export const Modal = forwardRef(({ title, buttonCaption, children }, ref) => {
  const modalRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={modalRef}
      className='backdrop:bg-stone-900/90 p-8 rounded-md shadow-md'
    >
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});
