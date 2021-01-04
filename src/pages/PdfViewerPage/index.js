import React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';

function PdfViewerPage() {
  // Το αρχείο στο documentPath πρέπει να είναι ανεβασμένο κάπου για να το πάρει
  // γιατί κάνει request για να το φέρει
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://drive.google.com/file/d/1IR2ZyjpZSrLgafgRhMZjqHqLN-0CD-Dj/view?usp=sharing"
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
      style={{ 'height': '640px' }}
    >
      <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]} />
    </PdfViewerComponent>
  );
}

export default PdfViewerPage;
