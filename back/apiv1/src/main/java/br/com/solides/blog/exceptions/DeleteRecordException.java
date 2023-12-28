package br.com.solides.blog.exceptions;

public class DeleteRecordException extends RuntimeException {

    public DeleteRecordException() {
        super("DELETE_ERROR");
    }

}
