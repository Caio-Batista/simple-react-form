export function validateFormFields(fields) {
    const {
      file,
      bgcolor,
      name,
      category
    } = fields
    return file && bgcolor && name && category
}