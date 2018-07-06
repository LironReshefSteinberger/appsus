// console.log('keeper-service');

import utilService from './util-service.js'

var NOTES_KEY = 'notesApp'

var notes = [];

var defaultNotes = [
    {
        id: utilService.makeId(),
        type: 'imgType',
        title: 'The best image',
        data: {
            url: 'img/keeper/1-keeper.png',
        }
    },
    // {
    //     id: utilService.makeId(),
    //     type: 'todosType',
    //     title: 'Notes list',
    //     data: {
    //         todo: ['shopping', 'studing'],
    //     }
    // },
    {
        id: utilService.makeId(),
        type: 'txtType',
        title: 'texts line',
        data: {
            txt: 'Lorem ipsum is placeholder text commonly used in'
        }
    }
];

//TODO: TO CHANGE
function createEmptyNote() {
    return {
        id: utilService.makeId(),
        type: '',
        title: '',
        data: {}
    }
}
// function createEmptyNote() {
//     return {
//         id: utilService.makeId(),
//         type: '',
//         title: '',
//         data: {
//             url: '',
//             todo: [],
//             txt: ''
//         }
//     }
// }

createNotes();


function createNotes() {
  notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || notes.length === 0) {
    notes = defaultNotes;
  }
  utilService.saveToStorage(NOTES_KEY, notes);
  return notes;
}

function query() {
    // var notes = createNotes();
    // notes = utilService.loadFromStorage(NOTES_KEY);
    console.log('notes in query,', notes);
    return Promise.resolve(notes);
}

function getNoteById(id) {
    var note = notes.find(note => note.id === id)
    // console.log('book!!!!,', note);
    return Promise.resolve(note);
}

function saveNote(note) {
    console.log('saveNote in service,', note);
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        console.log('saveNote in service,noteIdx', noteIdx);
        // Vue.js Caveat!
        notes.splice(noteIdx, 1, note)
        // books[bookIdx] = book;

    } else {
        note.id = makeId();
        notes.push(note);
    }
    utilService.saveToStorage(NOTES_KEY, notes);
    // console.log('Sevice is saving the note', note);
    return Promise.resolve(note);
    
}

export default {
    query,
    getNoteById,
    createEmptyNote,
    saveNote


}