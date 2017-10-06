//-------------------------------------------------------------------------------
// reducer

const initial_state = {
  screenshot  : false,
  confirm     : null,
  dlgAdd      : null
}

export default function App( state=initial_state, action ) {

  switch( action.type ) {

    case 'APP_SCREENSHOT':
      state = {...state, screenshot: action.payload }
      break

    case 'APP_CONFIRM':
      state = {...state, confirm: action.payload }
      break

    case 'APP_DIALOG_ADD':
      state = {...state, dlgAdd: action.payload }
      break

    case 'APP_CANCEL_DIALOG':
      state = {...state, confirm: null, dlgAdd: null, screenshot: false }
      break
  }

  return state
}

