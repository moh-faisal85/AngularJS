import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  readonly MAX_LENGTH = 4000;

  // Backend string
  notes: string = 'First note,Second note,Third note';

  // UI model
  notesArray: string[] = [];

  ngOnInit() {
    this.initializeNotes();
  }

  initializeNotes() {
    this.notesArray = this.notes
      ? this.notes.split(',').map(n => n.trim())
      : [''];

    this.updateNotes();
  }

  addNote() {
    // Check for empty textbox
    const hasEmptyNote = this.notesArray.some(note => note.trim() === '');
    if (hasEmptyNote) {
      alert('Please fill all existing notes before adding a new one');
      return;
    }


    // Check max length
    if (this.notes.length >= this.MAX_LENGTH) {
      alert('Maximum 4000 characters reached');
      return;
    }

    this.notesArray.push('');

  }

  deleteNote(index: number) {
    if (this.notesArray.length === 1) {
      return;
    }
    this.notesArray.splice(index, 1);
    this.updateNotes();
  }

  onNoteInput(index: number, value: string) {
    const tempArray = [...this.notesArray];
    tempArray[index] = value;

    const combined = tempArray.join(',');

    if (combined.length > this.MAX_LENGTH) {
      alert('Total notes length cannot exceed 4000 characters');
      return;
    }

    this.notesArray[index] = value;
    this.notes = combined;
  }

  // Handles paste explicitly
  onPaste(event: ClipboardEvent, index: number) {
    event.preventDefault();

    const pasteText = event.clipboardData?.getData('text') || '';
    const tempArray = [...this.notesArray];
    tempArray[index] = pasteText;

    const combined = tempArray.join(',');

    if (combined.length > this.MAX_LENGTH) {
      alert('Pasting exceeds 4000 characters limit');
      return;
    }

    this.notesArray[index] = pasteText;
    this.notes = combined;
  }

  updateNotes() {
    const combined = this.notesArray.join(',');
    if (combined.length <= this.MAX_LENGTH) {
      this.notes = combined;
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
