package cn.wolfcode.shop.web.advice;

import cn.wolfcode.shop.common.CommonExceptionAdvice;
import cn.wolfcode.shop.common.Result;
import cn.wolfcode.shop.msg.MemberServerCodeMsg;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class MemberServerControllerAdvice extends CommonExceptionAdvice {
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Result handleDefault(Exception e){
        return Result.error(MemberServerCodeMsg.DEFAULT_ERROR);
    }
}
