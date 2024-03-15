import { ErrorRepository } from '../src/classes/ErrorRepository';

describe('ErrorRepository class functionality', () => {
    let errors;
    const errorCode = 404;
    const errorMessage = 'Not Found';

    beforeEach(() => {
        errors = new ErrorRepository();
        errors.errors.set(errorCode, errorMessage);
    });

    test('translate method should return error message for a code', () => {
        expect(errors.translate(errorCode)).toBe(errorMessage);
    });

    test('translate method should return "Unknown error" for an unknown code', () => {
        expect(errors.translate(500)).toBe('Unknown error');
    });
});
