import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface NoteItem {
  id: number;
  value: string;
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html'
})
export class NotesComponent {

  readonly MAX_LENGTH = 4000;

  /* ---------------- Parent <-> Child Binding ---------------- */

  private _notes = '';

  @Input()
  set notes(value: string) {
    if (value !== this._notes) {
      this._notes = value || '';
      this.initializeFromParent();
    }
  }

  get notes(): string {
    return this._notes;
  }

  @Output() notesChange = new EventEmitter<string>();

  /* ---------------- Internal State ---------------- */

  notesArray: NoteItem[] = [];
  errorMessage = '';

  private lastEmittedValue = '';
  private idCounter = 0;

  /* ---------------- Initialization ---------------- */

  initializeFromParent() {
    this.notesArray = this._notes
      ? this._notes.split(',').map(n => ({
          id: ++this.idCounter,
          value: n.trim()
        }))
      : [{ id: ++this.idCounter, value: '' }];

    this.lastEmittedValue = this._notes;
  }

  /* ---------------- Add ---------------- */

  addNote() {
    this.clearError();

    if (this.hasEmptyNote()) {
      this.setError('Please fill all existing notes before adding a new one');
      return;
    }

    if (!this.isValidLength([...this.getValues(), ''])) {
      this.setError('Maximum 4000 characters allowed');
      return;
    }

    this.notesArray.push({ id: ++this.idCounter, value: '' });
  }

  /* ---------------- Delete ---------------- */

  deleteNote(index: number) {
    if (this.notesArray.length === 1) {
      return;
    }

    this.notesArray.splice(index, 1);
    this.updateAndEmit();
  }

  /* ---------------- Typing ---------------- */

  onNoteInput(index: number, value: string) {
    this.clearError();

    const temp = this.getValues();
    temp[index] = value;

    if (!this.isValidLength(temp)) {
      this.setError('Total notes length cannot exceed 4000 characters');
      return;
    }

    this.notesArray[index].value = value;
    this.updateAndEmit();
  }

  /* ---------------- Paste ---------------- */

  onPaste(event: ClipboardEvent, index: number) {
    event.preventDefault();
    this.clearError();

    const pasteText = event.clipboardData?.getData('text') || '';
    const temp = this.getValues();
    temp[index] = pasteText;

    if (!this.isValidLength(temp)) {
      this.setError('Pasted content exceeds 4000 characters limit');
      return;
    }

    this.notesArray[index].value = pasteText;
    this.updateAndEmit();
  }

  /* ---------------- Helpers ---------------- */

  private updateAndEmit() {
    const combined = this.notesArray
      .map(n => n.value.trim())
      .filter(v => v !== '')
      .join(',');

    if (combined !== this.lastEmittedValue) {
      this.lastEmittedValue = combined;
      this._notes = combined;
      this.notesChange.emit(this._notes);
    }
  }

  private getValues(): string[] {
    return this.notesArray.map(n => n.value);
  }

  private isValidLength(values: string[]): boolean {
    return values.join(',').length <= this.MAX_LENGTH;
  }

  private hasEmptyNote(): boolean {
    return this.notesArray.some(n => n.value.trim() === '');
  }

  private setError(msg: string) {
    this.errorMessage = msg;
  }

  private clearError() {
    this.errorMessage = '';
  }

  trackById(_: number, item: NoteItem) {
    return item.id;
  }
}
