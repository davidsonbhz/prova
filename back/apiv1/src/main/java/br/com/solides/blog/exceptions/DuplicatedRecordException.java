package br.com.solides.blog.exceptions;

public class DuplicatedRecordException extends RuntimeException {

    public DuplicatedRecordException() {
        super("DUPLICATED_RECORD");
    }

}
