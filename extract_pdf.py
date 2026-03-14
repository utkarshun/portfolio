import sys
try:
    import fitz
    doc = fitz.open(sys.argv[1])
    print("\n".join([page.get_text() for page in doc]))
except ImportError:
    try:
        import PyPDF2
        reader = PyPDF2.PdfReader(sys.argv[1])
        print("\n".join([page.extract_text() for page in reader.pages]))
    except ImportError:
        print("No PyMuPDF or PyPDF2 installed")
