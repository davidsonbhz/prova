package br.com.solides.blog.shared;

import lombok.Data;

@Data
public class ApiResponse<T> {

    public T data;
    public Long requestTime;
    public Boolean success;
    public String message;

}
