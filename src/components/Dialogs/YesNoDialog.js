import React from 'react'
import PropTypes from 'prop-types'

//----- COMPONENTS

//----- HELPERS

//----- STYLING
import './Dialogs.css'

//----- RENDER

const YesNoDialog = ({
  message,
  confirmText,
  cancelText,
  _onConfirm,
  _onCancel
}) => {
  // console.log({ _onCancel })
  const yesText = confirmText || 'OK'
  const noText = cancelText || 'Cancel'
  return (
    <div className="dialog-container">
      <h3>
        {message}
      </h3>
      <button className="btn btn-dialog btn-no" onClick={_onCancel}>
        {noText}
      </button>
      <button className="btn btn-dialog btn-yes" onClick={_onConfirm}>
        {yesText}
      </button>
    </div>
  )
}

YesNoDialog.PropTypes = {
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  _onConfirm: PropTypes.func.isRequired,
  _onCancel: PropTypes.func.isRequired
}

export default YesNoDialog
