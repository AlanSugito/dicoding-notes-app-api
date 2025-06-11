const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayload(payload) {
    const validatedResult = NotePayloadSchema.validate(payload);

    if (validatedResult.error) {
      throw new InvariantError(validatedResult.error.message);
    }
  },
};

module.exports = NotesValidator;
