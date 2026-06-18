import BookingDocument from "../models/BookingDocument.js";

// upload travel doc
export const uploadDocuments  = async (req, res) => {
    try {
    const documents = [];

    for (const file of req.files) {
         const document = await BookingDocument.create(
        {
            userId: req.user._id,
            fileName: file.originalname,
            filePath: file.path,
            mimeType: file.mimetype, 
        }
    )

    documents.push(document)

    }

    res.status(201).json({
      success: true,
      documents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// get all uploaded documents

export const getAllUploadedDocuments = async (req, res) => {
    try {
        
        const documents = await BookingDocument.find({
            userId: req.user._id
        })
     res.status(200).json({
      success: true,
      documents
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

// get single upload

export const getDocumentById = async (req, res) => {
  try {

    const document = await BookingDocument.findOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.status(200).json({
      success: true,
      document
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// delete

export const deleteDocument = async (req, res) => {
  try {

    const document = await BookingDocument.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Document deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};