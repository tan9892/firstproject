$(function () {
    // 点击注册账号链接
    $('#link_reg').on('click',function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击登陆链接
    $('#link_login').on('click', function () { 
        $('.login-box').show()
        $('.reg-box').hide()
    })

    // 从layui中获取form对象
    var form = layui.form
    // 自定义规则
    form.verify({
        // 自定义了一个密码的校验规则
        password: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
        ],
        repassword: function (value) { 
            // 通过形参获得内容，比较方式来判断是否一致
            var pwd = $('.reg-box [name=password]').val()
            if (pwd != value) { 
                return '两次密码不一致'
            }
        }

    })
})