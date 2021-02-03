/* eslint-disable comma-dangle */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-alert */
export default class Modal {
  constructor(contentId, callbackText) {
    this.callbackText = callbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }
  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modalEl = modalElements.querySelector('.modal');
      this.backdropEl = modalElements.querySelector('.backdrop');

      const contentEl = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalEl.appendChild(contentEl);
      document.body.insertAdjacentElement('afterbegin', this.modalEl);
      document.body.insertAdjacentElement('afterbegin', this.backdropEl);
    } else {
      alert(this.callbackText);
    }
  }

  hide() {
    // console.log(this.contentEl)
    if (this.modalEl) {
      document.body.removeChild(this.modalEl);
      document.body.removeChild(this.backdropEl);
      this.backdropEl = null;
      this.modalEl = null;
    }
  }
}
