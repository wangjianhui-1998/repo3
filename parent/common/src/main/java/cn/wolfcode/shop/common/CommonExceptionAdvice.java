package cn.wolfcode.shop.common;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

public class CommonExceptionAdvice {
    @ExceptionHandler(BusinessException.class)
    @ResponseBody
    public Result hanlderDefaultException(BusinessException e){
        return Result.error(e.getCodeMsg());
    }
}