package cn.wolfcode.shop.msg;

import cn.wolfcode.shop.common.CodeMsg;
/*定义这个服务中错误状态码和消息的映射*/
public class MemberServerCodeMsg extends CodeMsg {
    public MemberServerCodeMsg (Integer code,String msg){
        super(code,msg);
    }
    public static  final  MemberServerCodeMsg DEFAULT_ERROR = new MemberServerCodeMsg(500100,"会员服务繁忙");
    public static  final  MemberServerCodeMsg PHONE_EXIST_ERROR = new MemberServerCodeMsg(500101,"手机号码已存在");
}
