import { takeEvery } from 'redux-saga/effects'

const handleNewNote = function* handleNewNote() {
  yield takeEvery('ADD_NOTE', (action) => {
    localStorage.setItem('notes', JSON.stringify(this.getState().notes))
  })
}

export default handleNewNote
