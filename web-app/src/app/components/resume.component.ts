import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'resume',
  imports: [],
  template: ` <div class="pb-8 pdf-container">
    <div>
      @if (currentPageNumber == 1) {
        <button
          type="button"
          (click)="nextPage()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
            />
          </svg>
        </button>
      }
      @if (currentPageNumber == 2) {
        <button
          type="button"
          (click)="nextPage()"
          disabled
          class="my-2 mx-2 cursor-not-allowed text-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
            />
          </svg>
        </button>
      }
      @if (currentPageNumber == 2) {
        <button
          type="button"
          (click)="prevPage()"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
      }
      @if (currentPageNumber == 1) {
        <button
          type="button"
          (click)="prevPage()"
          disabled
          class="my-2 mx-2 cursor-not-allowed text-white border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
      }
    </div>
    <div #pdfContainer></div>
  </div>`,
  providers: [],
  standalone: true,
})
export class ResumeComponent implements OnInit, OnDestroy {
  @ViewChild('pdfContainer', { static: true })
  pdfContainer!: ElementRef<HTMLDivElement>;

  private pdfDocument: any;

  currentPageNumber = 1;

  private scale = 1.5;

  totalPages = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadPdf();
  }

  ngOnDestroy(): void {
    // Clean up resources when the component is destroyed.
  }

  // Load the PDF file.

  async loadPdf() {
    try {
      const pdfjs = pdfjsLib as any;

      pdfjs.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.min.mjs';

      const loadingTask = pdfjs.getDocument('../../assets/Resume.pdf'); // Path to your PDF file.

      this.pdfDocument = await loadingTask.promise;

      this.totalPages = this.pdfDocument.numPages;

      this.renderPage(this.currentPageNumber);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  }

  async nextPage() {
    this.currentPageNumber++;
    try {
      this.renderPage(this.currentPageNumber);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  }

  async prevPage() {
    this.currentPageNumber--;
    try {
      this.renderPage(this.currentPageNumber);
    } catch (error) {
      console.error('Error loading PDF:', error);
    }
  }

  // Render a specific page of the PDF.

  async renderPage(pageNumber: number) {
    const page = await this.pdfDocument.getPage(pageNumber);

    this.scale = window.innerWidth > 925 ? 1.5 : 0;

    const viewport = page.getViewport({ scale: this.scale });

    const container = this.pdfContainer.nativeElement;

    container.innerHTML = ''; // Clear previous content

    const canvas = document.createElement('canvas');

    container.appendChild(canvas);

    const context = canvas.getContext('2d')!;

    canvas.height = viewport.height;

    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,

      viewport: viewport,
    };

    await page.render(renderContext).promise;
  }
}
